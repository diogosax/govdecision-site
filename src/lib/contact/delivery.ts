/**
 * Contact lead delivery (SITE-004, SITE-005, SITE-006).
 *
 * A small provider abstraction so the site can deliver leads through:
 *   - `ses`     — transactional email via AWS SES v2 (recommended in prod),
 *   - `resend`  — transactional email via the Resend HTTP API,
 *   - `webhook` — a signed POST to an arbitrary HTTPS endpoint,
 *   - `console` — a safe dev/local mode that logs a sanitized payload.
 *
 * On a successful internal notification the configured provider may also send an
 * optional, best-effort user auto-reply (SITE-006), gated behind
 * `CONTACT_AUTOREPLY_ENABLED` and disabled by default.
 *
 * Configuration is environment-based. No secrets live in code; private
 * addresses appear only as safe defaults used when env vars are missing. In
 * production, a missing/misconfigured provider returns a clear error so the
 * API can surface a friendly message instead of silently dropping a lead.
 */
import { createHmac } from "node:crypto";
import type { Lead } from "./lead-routing";
import { buildInternalEmail, buildAutoReplyEmail } from "./email";

export type DeliveryResult = { ok: true } | { ok: false; error: string };

/** Safe defaults — only used when the matching env var is absent. */
const DEFAULT_TO_EMAIL = "contact@govdecision.com";
const DEFAULT_FROM_EMAIL = "GovDecision <contact@govdecision.com>";
const DEFAULT_REPLY_TO_EMAIL = "contact@govdecision.com";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isProd(): boolean {
  return process.env.NODE_ENV === "production";
}

/** Read a trimmed, non-empty env var or `undefined`. */
function env(name: string): string | undefined {
  const value = process.env[name]?.trim();
  return value && value.length ? value : undefined;
}

/* ------------------------------------------------------------------ Router */

export async function deliverLead(lead: Lead): Promise<DeliveryResult> {
  const provider = (env("CONTACT_DELIVERY_PROVIDER") ?? "").toLowerCase();

  const result = await deliverInternal(lead, provider);

  // The auto-reply is best-effort: attempted only once the internal lead
  // notification has actually been delivered, and never allowed to fail the
  // submission (the lead is already captured at that point).
  if (result.ok) {
    await sendAutoReplyIfEnabled(lead, provider);
  }

  return result;
}

/** Route the internal lead notification to the configured provider. */
async function deliverInternal(
  lead: Lead,
  provider: string,
): Promise<DeliveryResult> {
  if (provider === "ses") return deliverViaSes(lead);
  if (provider === "resend") return deliverViaResend(lead);
  if (provider === "webhook") return deliverViaWebhook(lead);
  if (provider === "console" || provider === "dev") return deliverViaConsole(lead);

  // No provider configured.
  if (!provider) {
    if (isProd()) {
      console.error("[contact] CONTACT_DELIVERY_PROVIDER is not set in production.");
      return { ok: false, error: "delivery_not_configured" };
    }
    return deliverViaConsole(lead);
  }

  // Unknown provider value.
  if (isProd()) {
    console.error("[contact] CONTACT_DELIVERY_PROVIDER has an unknown value in production.");
    return { ok: false, error: "delivery_misconfigured" };
  }
  console.warn(`[contact] Unknown CONTACT_DELIVERY_PROVIDER "${provider}" — using console mode.`);
  return deliverViaConsole(lead);
}

/** Reply-to for the internal email: the lead's work email when it is valid. */
function internalReplyTo(lead: Lead): string {
  return EMAIL_RE.test(lead.workEmail)
    ? lead.workEmail
    : env("CONTACT_REPLY_TO_EMAIL") ?? DEFAULT_REPLY_TO_EMAIL;
}

/* --------------------------------------------------------------- Resend */

async function deliverViaResend(lead: Lead): Promise<DeliveryResult> {
  const apiKey = env("RESEND_API_KEY");
  if (!apiKey) {
    if (isProd()) {
      console.error("[contact] RESEND_API_KEY is missing in production.");
      return { ok: false, error: "email_not_configured" };
    }
    console.warn("[contact] RESEND_API_KEY missing — falling back to console mode.");
    return deliverViaConsole(lead);
  }

  const to = env("CONTACT_TO_EMAIL") ?? DEFAULT_TO_EMAIL;
  const from = env("CONTACT_FROM_EMAIL") ?? DEFAULT_FROM_EMAIL;
  const { subject, text, html } = buildInternalEmail(lead);

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: internalReplyTo(lead),
        subject,
        text,
        html,
      }),
    });
    if (!res.ok) {
      // Status only — never echo request headers/body (would expose the key).
      console.error(`[contact] Resend responded with status ${res.status}.`);
      return { ok: false, error: "email_send_failed" };
    }
    return { ok: true };
  } catch (err) {
    console.error("[contact] Resend request failed:", messageOf(err));
    return { ok: false, error: "email_send_failed" };
  }
}

/* ------------------------------------------------------------------- SES */

/**
 * Resolve the SES region. GovDecision's SES lives in AWS Oregon, so the
 * default is `us-west-2` — never `us-east-1`. Resolution order:
 *   1. AWS_SES_REGION
 *   2. AWS_REGION
 *   3. us-west-2 (default)
 */
function sesRegion(): string {
  return env("AWS_SES_REGION") ?? env("AWS_REGION") ?? "us-west-2";
}

/** True only when both AWS credential env vars are present. */
function hasAwsCredentials(): boolean {
  return Boolean(env("AWS_ACCESS_KEY_ID")) && Boolean(env("AWS_SECRET_ACCESS_KEY"));
}

async function deliverViaSes(lead: Lead): Promise<DeliveryResult> {
  // Sending requires AWS credentials. The SDK's default provider chain reads
  // AWS_ACCESS_KEY_ID / AWS_SECRET_ACCESS_KEY from the environment; we only
  // gate on their presence here so production never silently drops a lead.
  if (!hasAwsCredentials()) {
    if (isProd()) {
      console.error("[contact] AWS SES credentials are missing in production.");
      return { ok: false, error: "email_not_configured" };
    }
    console.warn("[contact] AWS SES credentials missing — falling back to console mode.");
    return deliverViaConsole(lead);
  }

  const to = env("CONTACT_TO_EMAIL") ?? DEFAULT_TO_EMAIL;
  const from = env("CONTACT_FROM_EMAIL") ?? DEFAULT_FROM_EMAIL;
  const { subject, text, html } = buildInternalEmail(lead);
  const configurationSet = env("AWS_SES_CONFIGURATION_SET");

  try {
    // Dynamically imported so the SDK is only loaded when SES is the active
    // provider (keeps other providers' cold-start lean).
    const { SESv2Client, SendEmailCommand } = await import("@aws-sdk/client-sesv2");
    const client = new SESv2Client({ region: sesRegion() });

    const command = new SendEmailCommand({
      FromEmailAddress: from,
      Destination: { ToAddresses: [to] },
      ReplyToAddresses: [internalReplyTo(lead)],
      // Only attach a configuration set when one is actually configured.
      ...(configurationSet ? { ConfigurationSetName: configurationSet } : {}),
      Content: {
        Simple: {
          Subject: { Data: subject, Charset: "UTF-8" },
          Body: {
            Text: { Data: text, Charset: "UTF-8" },
            Html: { Data: html, Charset: "UTF-8" },
          },
        },
      },
    });

    await client.send(command);
    return { ok: true };
  } catch (err) {
    // Never expose AWS SDK error details to the user; log a sanitized message.
    console.error("[contact] AWS SES send failed:", messageOf(err));
    return { ok: false, error: "email_send_failed" };
  }
}

/* --------------------------------------------------------------- Webhook */

/** The JSON contract sent to a configured webhook endpoint. */
function buildWebhookPayload(lead: Lead) {
  return {
    event: "govdecision.contact.lead.created",
    leadType: lead.leadType,
    pathLabel: lead.pathLabel,
    path: lead.path ?? null,
    type: lead.type ?? null,
    name: lead.name,
    company: lead.company,
    workEmail: lead.workEmail,
    country: lead.country,
    targetMarkets: lead.targetMarkets,
    message: lead.message,
    sourcePage: lead.sourcePage ?? null,
    utm: {
      source: lead.utmSource ?? null,
      medium: lead.utmMedium ?? null,
      campaign: lead.utmCampaign ?? null,
    },
    createdAt: lead.createdAt,
  };
}

async function deliverViaWebhook(lead: Lead): Promise<DeliveryResult> {
  const url = env("CONTACT_WEBHOOK_URL");
  if (!url) {
    if (isProd()) {
      console.error("[contact] CONTACT_WEBHOOK_URL is missing in production.");
      return { ok: false, error: "webhook_not_configured" };
    }
    console.warn("[contact] CONTACT_WEBHOOK_URL missing — falling back to console mode.");
    return deliverViaConsole(lead);
  }

  const body = JSON.stringify(buildWebhookPayload(lead));
  const headers: Record<string, string> = { "Content-Type": "application/json" };

  // When a shared secret is set, sign the raw body so the receiver can verify
  // authenticity without the secret ever travelling on the wire.
  const secret = env("CONTACT_WEBHOOK_SECRET");
  if (secret) {
    const signature = createHmac("sha256", secret).update(body).digest("hex");
    headers["X-GovDecision-Signature"] = `sha256=${signature}`;
  }

  try {
    const res = await fetch(url, { method: "POST", headers, body });
    if (!res.ok) {
      console.error(`[contact] Webhook responded with status ${res.status}.`);
      return { ok: false, error: "webhook_send_failed" };
    }
    return { ok: true };
  } catch (err) {
    console.error("[contact] Webhook request failed:", messageOf(err));
    return { ok: false, error: "webhook_send_failed" };
  }
}

/* --------------------------------------------------------------- Console */

function deliverViaConsole(lead: Lead): DeliveryResult {
  // Dev visibility only: logs the (non-secret) lead, never provider secrets.
  console.info(
    `[contact] Lead received (dev/console delivery mode):\n${buildInternalEmail(lead).text}`,
  );
  return { ok: true };
}

/* ------------------------------------------------------------- Auto-reply */

/** Auto-reply is opt-in: only `true` (case-insensitive) enables it. */
function autoReplyEnabled(): boolean {
  return (env("CONTACT_AUTOREPLY_ENABLED") ?? "").toLowerCase() === "true";
}

/** Sender for the auto-reply; falls back to the internal sender, then default. */
function autoReplyFrom(): string {
  return (
    env("CONTACT_AUTOREPLY_FROM_EMAIL") ??
    env("CONTACT_FROM_EMAIL") ??
    DEFAULT_FROM_EMAIL
  );
}

/** Reply-to for the auto-reply; falls back to the internal reply-to, then default. */
function autoReplyReplyTo(): string {
  return (
    env("CONTACT_AUTOREPLY_REPLY_TO_EMAIL") ??
    env("CONTACT_REPLY_TO_EMAIL") ??
    DEFAULT_REPLY_TO_EMAIL
  );
}

/**
 * Best-effort confirmation email to the lead. Runs only when explicitly
 * enabled, only after the internal notification succeeded, and only to the
 * validated work email. Any failure is logged (sanitized) and swallowed — the
 * lead is already captured, so the submission must never fail here.
 */
async function sendAutoReplyIfEnabled(lead: Lead, provider: string): Promise<void> {
  if (!autoReplyEnabled()) return;

  // Only ever email the validated work email — never a fabricated address.
  if (!EMAIL_RE.test(lead.workEmail)) {
    console.warn("[contact] Auto-reply skipped — lead work email is not a valid recipient.");
    return;
  }

  try {
    if (provider === "ses") {
      await sendAutoReplyViaSes(lead);
    } else if (provider === "resend") {
      await sendAutoReplyViaResend(lead);
    } else if (provider === "webhook") {
      // The webhook provider intentionally does not send user-facing email.
      console.info("[contact] Auto-reply not sent — webhook provider does not deliver user email.");
    } else {
      // console / dev / unset-in-dev / unknown-in-dev: log intent, send nothing.
      logAutoReplyIntent(lead);
    }
  } catch (err) {
    // Internal notification already succeeded — never fail the submission here.
    console.warn(
      "[contact] Auto-reply failed after internal notification succeeded:",
      messageOf(err),
    );
  }
}

/** Dev/console visibility: record the auto-reply intent without sending. */
function logAutoReplyIntent(lead: Lead): void {
  const { subject } = buildAutoReplyEmail(lead);
  console.info(
    `[contact] Auto-reply (dev/console mode — not sent) -> ${lead.workEmail}: "${subject}"`,
  );
}

async function sendAutoReplyViaSes(lead: Lead): Promise<void> {
  if (!hasAwsCredentials()) {
    if (!isProd()) {
      logAutoReplyIntent(lead);
      return;
    }
    console.warn("[contact] Auto-reply skipped — AWS SES credentials missing.");
    return;
  }

  const { subject, text, html } = buildAutoReplyEmail(lead);
  const configurationSet = env("AWS_SES_CONFIGURATION_SET");

  const { SESv2Client, SendEmailCommand } = await import("@aws-sdk/client-sesv2");
  const client = new SESv2Client({ region: sesRegion() });

  await client.send(
    new SendEmailCommand({
      FromEmailAddress: autoReplyFrom(),
      Destination: { ToAddresses: [lead.workEmail] },
      ReplyToAddresses: [autoReplyReplyTo()],
      ...(configurationSet ? { ConfigurationSetName: configurationSet } : {}),
      Content: {
        Simple: {
          Subject: { Data: subject, Charset: "UTF-8" },
          Body: {
            Text: { Data: text, Charset: "UTF-8" },
            Html: { Data: html, Charset: "UTF-8" },
          },
        },
      },
    }),
  );
}

async function sendAutoReplyViaResend(lead: Lead): Promise<void> {
  const apiKey = env("RESEND_API_KEY");
  if (!apiKey) {
    if (!isProd()) {
      logAutoReplyIntent(lead);
      return;
    }
    console.warn("[contact] Auto-reply skipped — RESEND_API_KEY missing.");
    return;
  }

  const { subject, text, html } = buildAutoReplyEmail(lead);

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: autoReplyFrom(),
      to: [lead.workEmail],
      reply_to: autoReplyReplyTo(),
      subject,
      text,
      html,
    }),
  });
  if (!res.ok) {
    // Status only — the key never appears in the thrown message.
    throw new Error(`Resend auto-reply responded with status ${res.status}`);
  }
}

function messageOf(err: unknown): string {
  return err instanceof Error ? err.message : "unknown error";
}
