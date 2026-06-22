/**
 * Contact lead delivery (SITE-004, SITE-005).
 *
 * A small provider abstraction so the site can deliver leads through:
 *   - `ses`     — transactional email via AWS SES v2 (recommended in prod),
 *   - `resend`  — transactional email via the Resend HTTP API,
 *   - `webhook` — a signed POST to an arbitrary HTTPS endpoint,
 *   - `console` — a safe dev/local mode that logs a sanitized payload.
 *
 * Configuration is environment-based. No secrets live in code; private
 * addresses appear only as safe defaults used when env vars are missing. In
 * production, a missing/misconfigured provider returns a clear error so the
 * API can surface a friendly message instead of silently dropping a lead.
 */
import { createHmac } from "node:crypto";
import { type Lead, leadArm } from "./lead-routing";

export type DeliveryResult = { ok: true } | { ok: false; error: string };

/** Safe defaults — only used when the matching env var is absent. */
const DEFAULT_TO_EMAIL = "contact@govdecision.com";
const DEFAULT_FROM_EMAIL = "GovDecision <contact@govdecision.com>";
const DEFAULT_REPLY_TO_EMAIL = "contact@govdecision.com";

/** Honest disclaimer included on every notification. */
const LEGAL_NOTE =
  "GovDecision provides decision support and readiness workflows. Sax Global provides planning, context, and guidance where applicable. No eligibility, award, financing, market access, or government contract outcome is guaranteed.";

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
  // Reply to the lead's work email when valid, otherwise the configured inbox.
  const replyTo = EMAIL_RE.test(lead.workEmail)
    ? lead.workEmail
    : env("CONTACT_REPLY_TO_EMAIL") ?? DEFAULT_REPLY_TO_EMAIL;

  const { subject, text } = buildEmail(lead);

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ from, to: [to], reply_to: replyTo, subject, text }),
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

async function deliverViaSes(lead: Lead): Promise<DeliveryResult> {
  // Sending requires AWS credentials. The SDK's default provider chain reads
  // AWS_ACCESS_KEY_ID / AWS_SECRET_ACCESS_KEY from the environment; we only
  // gate on their presence here so production never silently drops a lead.
  const hasCredentials =
    Boolean(env("AWS_ACCESS_KEY_ID")) && Boolean(env("AWS_SECRET_ACCESS_KEY"));
  if (!hasCredentials) {
    if (isProd()) {
      console.error("[contact] AWS SES credentials are missing in production.");
      return { ok: false, error: "email_not_configured" };
    }
    console.warn("[contact] AWS SES credentials missing — falling back to console mode.");
    return deliverViaConsole(lead);
  }

  const to = env("CONTACT_TO_EMAIL") ?? DEFAULT_TO_EMAIL;
  const from = env("CONTACT_FROM_EMAIL") ?? DEFAULT_FROM_EMAIL;
  // Reply to the lead's work email when valid, otherwise the configured inbox.
  const replyTo = EMAIL_RE.test(lead.workEmail)
    ? lead.workEmail
    : env("CONTACT_REPLY_TO_EMAIL") ?? DEFAULT_REPLY_TO_EMAIL;

  const { subject, text } = buildEmail(lead);
  const html = buildEmailHtml(lead);
  const configurationSet = env("AWS_SES_CONFIGURATION_SET");

  try {
    // Dynamically imported so the SDK is only loaded when SES is the active
    // provider (keeps other providers' cold-start lean).
    const { SESv2Client, SendEmailCommand } = await import("@aws-sdk/client-sesv2");
    const client = new SESv2Client({ region: sesRegion() });

    const command = new SendEmailCommand({
      FromEmailAddress: from,
      Destination: { ToAddresses: [to] },
      ReplyToAddresses: [replyTo],
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
    `[contact] Lead received (dev/console delivery mode):\n${buildEmail(lead).text}`,
  );
  return { ok: true };
}

/* ------------------------------------------------------------ Email body */

function emailSubject(lead: Lead): string {
  switch (lead.leadType) {
    case "LOCAL_READINESS": {
      const market = lead.pathLabel.replace(/\s*local readiness$/i, "").trim();
      return `New GovDecision local readiness lead — ${market || "General"}`;
    }
    case "CROSS_BORDER_MARKET_ACCESS":
      return `New Sax Global market access lead — ${lead.pathLabel}`;
    case "MULTILATERAL_MARKET_ACCESS":
      return `New Sax Global multilateral lead — ${lead.pathLabel}`;
    case "REGIONAL_MARKET_ACCESS":
      return `New Sax Global regional lead — ${lead.pathLabel}`;
    default:
      return "New GovDecision website lead";
  }
}

/** Render present UTM params as a compact string, or null when none are set. */
function formatUtm(lead: Lead): string | null {
  const parts = [
    lead.utmSource ? `source=${lead.utmSource}` : null,
    lead.utmMedium ? `medium=${lead.utmMedium}` : null,
    lead.utmCampaign ? `campaign=${lead.utmCampaign}` : null,
  ].filter(Boolean);
  return parts.length ? parts.join(" · ") : null;
}

function buildEmail(lead: Lead): { subject: string; text: string } {
  const lines: string[] = [
    `Lead type: ${lead.leadType}`,
    `Owner: ${leadArm(lead.leadType)}`,
    `Path label: ${lead.pathLabel}`,
    `Path slug: ${lead.path ?? "—"}`,
    `Type: ${lead.type ?? "—"}`,
    "",
    `Name: ${lead.name}`,
    `Company: ${lead.company}`,
    `Work email: ${lead.workEmail}`,
    `Country: ${lead.country}`,
    `Target markets: ${lead.targetMarkets}`,
    "",
    "Message:",
    lead.message || "—",
    "",
    `Source page: ${lead.sourcePage ?? "—"}`,
  ];

  const utm = formatUtm(lead);
  if (utm) lines.push(`UTM: ${utm}`);

  lines.push(`Timestamp: ${lead.createdAt}`, "", "—", LEGAL_NOTE);

  return { subject: emailSubject(lead), text: lines.join("\n") };
}

/** Minimal HTML-escaping for values embedded in the notification email. */
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/**
 * Simple, email-client-safe HTML notification. A single card built from a
 * table with inline styles only — no external CSS, no remote assets — so it
 * renders consistently across clients. Every dynamic value is HTML-escaped.
 * Mirrors the plain-text body field-for-field.
 */
function buildEmailHtml(lead: Lead): string {
  const rows: Array<[string, string]> = [
    ["Lead type", lead.leadType],
    ["Owner", leadArm(lead.leadType)],
    ["Path label", lead.pathLabel],
    ["Path slug", lead.path ?? "—"],
    ["Type", lead.type ?? "—"],
    ["Name", lead.name],
    ["Company", lead.company],
    ["Work email", lead.workEmail],
    ["Country", lead.country],
    ["Target markets", lead.targetMarkets],
    ["Source page", lead.sourcePage ?? "—"],
  ];
  const utm = formatUtm(lead);
  if (utm) rows.push(["UTM", utm]);
  rows.push(["Timestamp", lead.createdAt]);

  const tableRows = rows
    .map(
      ([label, value]) =>
        "<tr>" +
        `<td style="padding:6px 12px 6px 0;vertical-align:top;color:#6b7280;font-weight:600;white-space:nowrap;">${escapeHtml(label)}</td>` +
        `<td style="padding:6px 0;vertical-align:top;color:#111827;">${escapeHtml(value)}</td>` +
        "</tr>",
    )
    .join("");

  const message = escapeHtml(lead.message || "—").replace(/\n/g, "<br>");

  return `<!doctype html>
<html>
  <body style="margin:0;padding:0;background:#f4f4f5;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:24px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:#ffffff;border-radius:12px;border:1px solid #e5e7eb;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.5;">
            <tr>
              <td style="padding:24px 24px 8px 24px;">
                <h1 style="margin:0;font-size:18px;color:#111827;">${escapeHtml(emailSubject(lead))}</h1>
              </td>
            </tr>
            <tr>
              <td style="padding:8px 24px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">${tableRows}</table>
              </td>
            </tr>
            <tr>
              <td style="padding:8px 24px;">
                <p style="margin:0 0 4px 0;color:#6b7280;font-weight:600;">Message</p>
                <p style="margin:0;color:#111827;">${message}</p>
              </td>
            </tr>
            <tr>
              <td style="padding:16px 24px 24px 24px;">
                <p style="margin:0;color:#9ca3af;font-size:12px;line-height:1.5;border-top:1px solid #e5e7eb;padding-top:16px;">${escapeHtml(LEGAL_NOTE)}</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

function messageOf(err: unknown): string {
  return err instanceof Error ? err.message : "unknown error";
}
