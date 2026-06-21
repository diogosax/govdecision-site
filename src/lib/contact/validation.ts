/**
 * Server-side validation for the contact API (SITE-004).
 *
 * Client values are never trusted: every field is coerced to a trimmed string,
 * clamped to a max length, and required fields are enforced here. The honeypot
 * and an optional timing signal provide lightweight anti-spam.
 */
import type { ContactInput } from "./lead-routing";

/** Field max lengths, per the SITE-004 spec. */
export const MAX_LENGTHS = {
  name: 120,
  company: 160,
  workEmail: 180,
  country: 120,
  targetMarkets: 260,
  message: 2000,
  path: 160,
  type: 80,
  sourcePage: 300,
  utm: 200,
} as const;

/**
 * Pragmatic email shape check — intentionally permissive (we are not trying to
 * fully validate RFC 5322, just reject obvious non-emails).
 */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Submissions faster than this (ms from form mount) are treated as bots. */
export const MIN_ELAPSED_MS = 1200;

export type ValidationResult =
  | { ok: true; data: ContactInput }
  | { ok: false; error: string; spam?: boolean };

function str(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function clamp(value: string, max: number): string {
  return value.length > max ? value.slice(0, max) : value;
}

function optional(value: string, max: number): string | undefined {
  const clamped = clamp(value, max);
  return clamped.length ? clamped : undefined;
}

export function validateContactInput(raw: unknown): ValidationResult {
  if (typeof raw !== "object" || raw === null) {
    return { ok: false, error: "Invalid request." };
  }
  const body = raw as Record<string, unknown>;

  // Honeypot: a real person never fills this. Drop silently as spam.
  if (str(body.honeypot).length > 0) {
    return { ok: false, error: "Rejected.", spam: true };
  }

  // Optional timing signal: reject only when clearly too fast to be human.
  // Missing / non-numeric values are ignored so the API stays usable directly.
  const elapsed = Number(body.elapsedMs);
  if (Number.isFinite(elapsed) && elapsed >= 0 && elapsed < MIN_ELAPSED_MS) {
    return { ok: false, error: "Rejected.", spam: true };
  }

  const name = clamp(str(body.name), MAX_LENGTHS.name);
  const company = clamp(str(body.company), MAX_LENGTHS.company);
  const workEmail = clamp(str(body.workEmail), MAX_LENGTHS.workEmail);
  const country = clamp(str(body.country), MAX_LENGTHS.country);
  const targetMarkets = clamp(str(body.targetMarkets), MAX_LENGTHS.targetMarkets);
  const message = clamp(str(body.message), MAX_LENGTHS.message);

  if (!name) return { ok: false, error: "Please enter your name." };
  if (!company) return { ok: false, error: "Please enter your company." };
  if (!workEmail) return { ok: false, error: "Please enter your work email." };
  if (!EMAIL_RE.test(workEmail)) {
    return { ok: false, error: "Please enter a valid work email." };
  }
  if (!country) return { ok: false, error: "Please enter your country." };
  if (!targetMarkets) {
    return { ok: false, error: "Please tell us your target markets." };
  }

  const data: ContactInput = {
    name,
    company,
    workEmail,
    country,
    targetMarkets,
    message,
    path: optional(str(body.path), MAX_LENGTHS.path),
    type: optional(str(body.type), MAX_LENGTHS.type),
    sourcePage: optional(str(body.sourcePage), MAX_LENGTHS.sourcePage),
    utmSource: optional(str(body.utmSource), MAX_LENGTHS.utm),
    utmMedium: optional(str(body.utmMedium), MAX_LENGTHS.utm),
    utmCampaign: optional(str(body.utmCampaign), MAX_LENGTHS.utm),
  };

  return { ok: true, data };
}
