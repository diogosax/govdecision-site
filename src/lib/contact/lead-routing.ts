/**
 * Contact lead routing (SITE-004).
 *
 * Pure, side-effect-free helpers that turn the contextual `?path=` / `?type=`
 * query params (set by Market Access destination pages) into:
 *   - an internal `LeadType` used for routing + reporting,
 *   - a human-readable `pathLabel` ("Brazil → United States"),
 *   - the right user-facing success copy.
 *
 * Local GovDecision readiness leads stay with GovDecision. Cross-border,
 * multilateral, and regional leads are Sax Global market-access leads. We never
 * push a local readiness lead into the Sax Global flow unless the visitor
 * explicitly chose a cross-border / multilateral / regional path.
 */
import { contactPathLabels } from "@/data/destinations";

/** Internal lead classification, used for routing and notification subjects. */
export type LeadType =
  | "LOCAL_READINESS"
  | "CROSS_BORDER_MARKET_ACCESS"
  | "MULTILATERAL_MARKET_ACCESS"
  | "REGIONAL_MARKET_ACCESS"
  | "GENERAL_READINESS";

/** Which business arm owns the lead — drives copy and email subjects. */
export type LeadArm = "GovDecision" | "Sax Global";

/** Sanitized, validated contact fields ready for delivery. */
export type ContactInput = {
  name: string;
  company: string;
  workEmail: string;
  country: string;
  targetMarkets: string;
  message: string;
  path?: string;
  type?: string;
  sourcePage?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
};

/** A classified lead enriched with routing context and a timestamp. */
export type Lead = ContactInput & {
  leadType: LeadType;
  pathLabel: string;
  createdAt: string;
};

/** `?type=` value → internal lead type. Unknown/absent falls back to general. */
const LEAD_TYPE_BY_PARAM: Record<string, LeadType> = {
  local: "LOCAL_READINESS",
  "cross-border": "CROSS_BORDER_MARKET_ACCESS",
  multilateral: "MULTILATERAL_MARKET_ACCESS",
  regional: "REGIONAL_MARKET_ACCESS",
};

/** Classify a lead from the contextual `?type=` param. */
export function classifyLeadType(type?: string): LeadType {
  const key = type?.trim().toLowerCase();
  if (key && key in LEAD_TYPE_BY_PARAM) return LEAD_TYPE_BY_PARAM[key];
  return "GENERAL_READINESS";
}

/** Local + general readiness leads belong to GovDecision; the rest to Sax Global. */
export function leadArm(leadType: LeadType): LeadArm {
  return leadType === "CROSS_BORDER_MARKET_ACCESS" ||
    leadType === "MULTILATERAL_MARKET_ACCESS" ||
    leadType === "REGIONAL_MARKET_ACCESS"
    ? "Sax Global"
    : "GovDecision";
}

/**
 * Build a readable route label, reusing the Market Access path map so labels
 * stay consistent with the destination pages. Examples:
 *   "Brazil local readiness", "Brazil → United States", "Brazil → UN & World Bank".
 * Falls back to the raw (already sanitized) slug, then to "General readiness".
 */
export function resolvePathLabel(path?: string, type?: string): string {
  const slug = path?.trim();
  if (slug) {
    const pair = contactPathLabels[slug];
    if (pair) {
      const isLocal =
        type?.trim().toLowerCase() === "local" || pair.origin === pair.target;
      return isLocal
        ? `${pair.target} local readiness`
        : `${pair.origin} → ${pair.target}`;
    }
    // Unknown slug: keep the raw value so context is never lost.
    return slug;
  }
  return "General readiness";
}

/** Turn validated input into a classified, timestamped lead. */
export function buildLead(input: ContactInput): Lead {
  return {
    ...input,
    leadType: classifyLeadType(input.type),
    pathLabel: resolvePathLabel(input.path, input.type),
    createdAt: new Date().toISOString(),
  };
}

/** User-facing confirmation copy, tuned to the lead's business arm. */
export function successMessageFor(leadType: LeadType): string {
  switch (leadType) {
    case "LOCAL_READINESS":
      return "Thanks — your GovDecision readiness request was received. We will help you understand the next step for this market.";
    case "CROSS_BORDER_MARKET_ACCESS":
    case "MULTILATERAL_MARKET_ACCESS":
    case "REGIONAL_MARKET_ACCESS":
      return "Thanks — your Sax Global market access request was received. We will review the path and follow up with the next step.";
    default:
      return "Thanks — your request was received. We will follow up shortly.";
  }
}
