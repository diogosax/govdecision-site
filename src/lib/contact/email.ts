/**
 * Contact email composition (SITE-006).
 *
 * Builds two kinds of email, each as an email-client-safe `{ subject, text,
 * html }`:
 *
 *   - the INTERNAL notification sent to GovDecision / Sax Global — a clean lead
 *     brief (header, lead-type badge, route summary, contact, market intent,
 *     message, recommended next step, reply guidance, disclaimer), and
 *   - the optional USER auto-reply confirming receipt (short, careful, premium).
 *
 * Everything here is pure and side-effect free; the delivery layer decides
 * whether/how to send. HTML uses inline styles only — no external CSS, no
 * remote assets, no JavaScript — so it renders consistently across clients.
 * Every dynamic value is HTML-escaped before it enters markup.
 */
import { leadArm, recommendedNextStep, type Lead } from "./lead-routing";

export type ComposedEmail = { subject: string; text: string; html: string };

/** Honest disclaimer included on every internal notification. */
export const LEGAL_NOTE =
  "GovDecision provides decision support and readiness workflows. Sax Global provides planning, context, and guidance where applicable. No eligibility, award, financing, market access, or government contract outcome is guaranteed.";

/** Approved brand palette — kept inline so emails never depend on a stylesheet. */
const COLOR = {
  plum: "#2B2440", // Deep Civic Plum
  coral: "#E56A3A", // Strategic Coral
  ivory: "#FBFAF7", // Soft Ivory
  surface: "#F2F0EB", // Soft Surface
  slate: "#5F6673", // Slate Text
  border: "#DDD8CF", // Border Neutral
  white: "#FFFFFF",
} as const;

const FONT_STACK =
  "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif";

const EMPTY = "—";

/** Minimal HTML-escaping for values embedded in markup or attributes. */
export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Render present UTM params as a compact string, or `null` when none are set. */
export function formatUtm(lead: Lead): string | null {
  const parts = [
    lead.utmSource ? `source=${lead.utmSource}` : null,
    lead.utmMedium ? `medium=${lead.utmMedium}` : null,
    lead.utmCampaign ? `campaign=${lead.utmCampaign}` : null,
  ].filter(Boolean);
  return parts.length ? parts.join(" · ") : null;
}

/** The market name without the " local readiness" suffix, for readable copy. */
function marketName(lead: Lead): string {
  return lead.pathLabel.replace(/\s*local readiness$/i, "").trim() || "General";
}

/* ----------------------------------------------------------- Internal email */

/** Subject line, keyed off the lead type (see SITE-006). */
export function internalSubject(lead: Lead): string {
  switch (lead.leadType) {
    case "LOCAL_READINESS":
      return `New GovDecision local readiness lead — ${marketName(lead)}`;
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

/** Ordered field groups shared by the plain-text and HTML internal bodies. */
function contactRows(lead: Lead): Array<[string, string]> {
  return [
    ["Name", lead.name],
    ["Company", lead.company],
    ["Work email", lead.workEmail],
    ["Country", lead.country],
  ];
}

function marketIntentRows(lead: Lead): Array<[string, string]> {
  return [
    ["Target markets", lead.targetMarkets],
    ["Path slug", lead.path ?? EMPTY],
    ["Type", lead.type ?? EMPTY],
    ["Source page", lead.sourcePage ?? EMPTY],
    ["UTM params", formatUtm(lead) ?? EMPTY],
  ];
}

function internalText(lead: Lead): string {
  const owner = leadArm(lead.leadType);
  const nextStep = recommendedNextStep(lead.leadType);

  const block = (heading: string, rows: Array<[string, string]>) =>
    [`— ${heading} —`, ...rows.map(([k, v]) => `${k}: ${v}`)].join("\n");

  return [
    "GovDecision",
    "Public sector sales intelligence",
    "==============================",
    "",
    `Lead type: ${lead.leadType}`,
    `Lead owner: ${owner}`,
    `Path: ${lead.pathLabel}`,
    "",
    block("Contact", contactRows(lead)),
    "",
    block("Market intent", marketIntentRows(lead)),
    "",
    "— Message —",
    lead.message || EMPTY,
    "",
    "— Recommended internal next step —",
    nextStep,
    "",
    "— Reply —",
    `Replies to this email go directly to ${lead.name} (${lead.workEmail}).`,
    "",
    "— Metadata —",
    `Timestamp: ${lead.createdAt}`,
    "",
    "——",
    LEGAL_NOTE,
  ].join("\n");
}

function sectionHeading(text: string): string {
  return `<p style="margin:24px 0 8px 0;font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:${COLOR.coral};">${escapeHtml(text)}</p>`;
}

function fieldTable(rows: Array<[string, string]>): string {
  const body = rows
    .map(
      ([label, value]) =>
        "<tr>" +
        `<td style="padding:5px 16px 5px 0;vertical-align:top;color:${COLOR.slate};font-weight:600;font-size:13px;white-space:nowrap;">${escapeHtml(label)}</td>` +
        `<td style="padding:5px 0;vertical-align:top;color:${COLOR.plum};font-size:14px;">${escapeHtml(value)}</td>` +
        "</tr>",
    )
    .join("");
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0">${body}</table>`;
}

function internalHtml(lead: Lead): string {
  const owner = leadArm(lead.leadType);
  const nextStep = recommendedNextStep(lead.leadType);
  const subject = internalSubject(lead);
  // Colour the lead-type badge by owning arm so routing is legible at a glance.
  const badgeBg = owner === "Sax Global" ? COLOR.coral : COLOR.plum;
  const message = escapeHtml(lead.message || EMPTY).replace(/\n/g, "<br>");
  const emailHref = escapeHtml(`mailto:${lead.workEmail}`);

  return `<!doctype html>
<html>
  <body style="margin:0;padding:0;background:${COLOR.surface};">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${COLOR.surface};padding:24px 0;">
      <tr>
        <td align="center" style="padding:0 16px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:${COLOR.white};border:1px solid ${COLOR.border};border-radius:16px;font-family:${FONT_STACK};">
            <tr>
              <td style="padding:28px 32px;background:${COLOR.plum};border-radius:16px 16px 0 0;">
                <p style="margin:0;font-size:20px;font-weight:700;color:${COLOR.white};letter-spacing:-0.01em;">GovDecision</p>
                <p style="margin:4px 0 0 0;font-size:13px;color:rgba(255,255,255,0.66);">Public sector sales intelligence</p>
              </td>
            </tr>
            <tr>
              <td style="padding:24px 32px 0 32px;">
                <span style="display:inline-block;padding:6px 12px;border-radius:999px;background:${badgeBg};color:${COLOR.white};font-size:11px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;">${escapeHtml(lead.leadType)}</span>
                <p style="margin:14px 0 0 0;font-size:13px;color:${COLOR.slate};">Lead owner: <strong style="color:${COLOR.plum};">${escapeHtml(owner)}</strong></p>
                <p style="margin:6px 0 0 0;font-size:18px;font-weight:700;color:${COLOR.plum};">${escapeHtml(lead.pathLabel)}</p>
                <p style="margin:6px 0 0 0;font-size:13px;color:${COLOR.slate};">${escapeHtml(subject)}</p>
              </td>
            </tr>
            <tr>
              <td style="padding:0 32px 8px 32px;">
                ${sectionHeading("Contact")}
                ${fieldTable(contactRows(lead))}
                ${sectionHeading("Market intent")}
                ${fieldTable(marketIntentRows(lead))}
                ${sectionHeading("Message")}
                <div style="margin-top:4px;padding:14px 16px;background:${COLOR.surface};border-radius:12px;color:${COLOR.plum};font-size:14px;line-height:1.6;">${message}</div>
                ${sectionHeading("Recommended internal next step")}
                <div style="margin-top:4px;padding:14px 16px;background:${COLOR.ivory};border-left:3px solid ${COLOR.coral};border-radius:8px;color:${COLOR.plum};font-size:14px;line-height:1.6;">${escapeHtml(nextStep)}</div>
                ${sectionHeading("Reply")}
                <p style="margin:4px 0 0 0;font-size:13px;color:${COLOR.slate};line-height:1.6;">Replies to this email go directly to ${escapeHtml(lead.name)} (<a href="${emailHref}" style="color:${COLOR.coral};text-decoration:none;">${escapeHtml(lead.workEmail)}</a>).</p>
                ${sectionHeading("Metadata")}
                ${fieldTable([["Timestamp", lead.createdAt]])}
              </td>
            </tr>
            <tr>
              <td style="padding:8px 32px 28px 32px;">
                <p style="margin:16px 0 0 0;padding-top:16px;border-top:1px solid ${COLOR.border};font-size:11px;line-height:1.6;color:${COLOR.slate};">${escapeHtml(LEGAL_NOTE)}</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

/** Compose the full internal lead notification. */
export function buildInternalEmail(lead: Lead): ComposedEmail {
  return {
    subject: internalSubject(lead),
    text: internalText(lead),
    html: internalHtml(lead),
  };
}

/* --------------------------------------------------------- User auto-reply */

/** Subject line for the user-facing confirmation. */
export function autoReplySubject(lead: Lead): string {
  switch (lead.leadType) {
    case "LOCAL_READINESS":
      return "We received your GovDecision readiness request";
    case "CROSS_BORDER_MARKET_ACCESS":
    case "MULTILATERAL_MARKET_ACCESS":
    case "REGIONAL_MARKET_ACCESS":
      return "We received your Sax Global market access request";
    default:
      return "We received your GovDecision request";
  }
}

type AutoReplyContent = {
  paragraphs: string[];
  disclaimer: string;
  signature: string;
};

/** Build the careful, no-overpromise confirmation copy for the lead's arm. */
function autoReplyContent(lead: Lead): AutoReplyContent {
  const name = lead.name;
  const isSaxGlobal = leadArm(lead.leadType) === "Sax Global";

  if (isSaxGlobal) {
    return {
      paragraphs: [
        `Hi ${name},`,
        "Thanks for reaching out.",
        `We received your Sax Global market access request for ${lead.pathLabel}. Our team will review your target market, route context, and message to understand the best next step.`,
        "GovDecision helps structure readiness and decision workflows. Sax Global can support market access planning, context, and guidance where applicable.",
      ],
      disclaimer:
        "This message confirms receipt only. Sax Global does not guarantee market access, eligibility, partner placement, financing, awards, or government contract outcomes.",
      signature: "— GovDecision / Sax Global",
    };
  }

  // GovDecision arm (local + general readiness). Local references the market;
  // the general fallback keeps the wording clean without a specific path.
  const opener =
    lead.leadType === "LOCAL_READINESS"
      ? `We received your readiness request for ${marketName(lead)}. Our team will review your company profile, target market, and message to understand the best next step.`
      : "We received your request. Our team will review your company profile, target market, and message to understand the best next step.";

  return {
    paragraphs: [
      `Hi ${name},`,
      "Thanks for reaching out to GovDecision.",
      opener,
      "GovDecision helps suppliers qualify opportunities, organize readiness, and make better government business decisions.",
    ],
    disclaimer:
      "This message confirms receipt only. GovDecision does not guarantee eligibility, bid acceptance, awards, financing, or government contract outcomes.",
    signature: "— GovDecision",
  };
}

function autoReplyText(lead: Lead): string {
  const { paragraphs, disclaimer, signature } = autoReplyContent(lead);
  // Blank line between blocks; signature and the Florida line stay adjacent.
  return [...paragraphs, disclaimer, `${signature}\nMade with ❤️ in Florida`].join(
    "\n\n",
  );
}

function autoReplyHtml(lead: Lead): string {
  const { paragraphs, disclaimer, signature } = autoReplyContent(lead);

  const body = paragraphs
    .map(
      (p) =>
        `<p style="margin:0 0 16px 0;font-size:15px;line-height:1.65;color:${COLOR.plum};">${escapeHtml(p)}</p>`,
    )
    .join("");

  return `<!doctype html>
<html>
  <body style="margin:0;padding:0;background:${COLOR.surface};">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${COLOR.surface};padding:24px 0;">
      <tr>
        <td align="center" style="padding:0 16px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:${COLOR.white};border:1px solid ${COLOR.border};border-radius:16px;font-family:${FONT_STACK};">
            <tr>
              <td style="padding:28px 32px;background:${COLOR.plum};border-radius:16px 16px 0 0;">
                <p style="margin:0;font-size:20px;font-weight:700;color:${COLOR.white};letter-spacing:-0.01em;">GovDecision</p>
                <p style="margin:4px 0 0 0;font-size:13px;color:rgba(255,255,255,0.66);">Public sector sales intelligence</p>
              </td>
            </tr>
            <tr>
              <td style="padding:28px 32px 8px 32px;">
                ${body}
                <p style="margin:0;padding-top:16px;border-top:1px solid ${COLOR.border};font-size:12px;line-height:1.6;color:${COLOR.slate};">${escapeHtml(disclaimer)}</p>
              </td>
            </tr>
            <tr>
              <td style="padding:8px 32px 28px 32px;">
                <p style="margin:0;font-size:14px;font-weight:600;color:${COLOR.plum};">${escapeHtml(signature)}</p>
                <p style="margin:4px 0 0 0;font-size:13px;color:${COLOR.slate};">Made with ❤️ in Florida</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

/** Compose the full user auto-reply confirmation. */
export function buildAutoReplyEmail(lead: Lead): ComposedEmail {
  return {
    subject: autoReplySubject(lead),
    text: autoReplyText(lead),
    html: autoReplyHtml(lead),
  };
}
