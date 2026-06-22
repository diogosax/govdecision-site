/**
 * Lightweight analytics helper (SITE-011).
 *
 * Wraps Vercel Analytics' `track` with three guarantees:
 *   1. It never throws into the UI — a failed/unavailable analytics call is
 *      swallowed so a click or form submit is never blocked.
 *   2. Properties are allowlisted and coerced to short strings, so no PII or
 *      free-text form content can leak into an event by accident.
 *   3. Event names are a closed union, keeping the taxonomy small and stable.
 *
 * IMPORTANT: this module imports `track` from `@vercel/analytics`, so it is a
 * client-only value module. Server components must import the *types* from here
 * with `import type { ... }` (erased at compile time) and render the
 * `TrackedButton` / `TrackedLink` client wrappers for the actual click events.
 */
import { track } from "@vercel/analytics";
import { stripLocale } from "@/i18n/routing";

/** Closed set of analytics event names. Keep this list intentionally small. */
export type AnalyticsEventName =
  | "cta_clicked"
  | "language_switched"
  | "market_access_selector_changed"
  | "market_access_path_clicked"
  | "destination_cta_clicked"
  | "opportunity_brief_clicked"
  | "opportunity_brief_cta_clicked"
  | "pricing_cta_clicked"
  | "contact_form_started"
  | "contact_form_submitted"
  | "contact_form_succeeded"
  | "contact_form_failed"
  | "app_login_clicked"
  | "locale_suggestion_shown"
  | "locale_suggestion_accepted"
  | "locale_suggestion_dismissed";

/**
 * Allowlisted, non-PII event properties. Anything not on this shape is dropped
 * by `sanitizeAnalyticsProperties`. We deliberately have no `name`, `email`,
 * `company`, `message`, or free-text market field here.
 */
export type AnalyticsProperties = {
  locale?: string;
  page?: string;
  section?: string;
  cta?: string;
  href?: string;
  path?: string;
  type?: string;
  leadType?: string;
  pathType?: string;
  plan?: string;
  market?: string;
  originCountry?: string;
  targetMarket?: string;
  /** opportunity_brief_* only — the brief slug, its category, and related path. */
  slug?: string;
  opportunityType?: string;
  relatedPath?: string;
  /** contact_form_failed only — one of: validation | delivery | network | unknown. */
  reason?: string;
  fromLocale?: string;
  toLocale?: string;
  fromPath?: string;
  toPath?: string;
  /** locale_suggestion_* only — the visitor's current site locale + offered locale. */
  currentLocale?: string;
  suggestedLocale?: string;
};

/** The only keys that may ever reach the analytics provider. */
const ALLOWED_KEYS = [
  "locale",
  "page",
  "section",
  "cta",
  "href",
  "path",
  "type",
  "leadType",
  "pathType",
  "plan",
  "market",
  "originCountry",
  "targetMarket",
  "slug",
  "opportunityType",
  "relatedPath",
  "reason",
  "fromLocale",
  "toLocale",
  "fromPath",
  "toPath",
  "currentLocale",
  "suggestedLocale",
] as const satisfies readonly (keyof AnalyticsProperties)[];

/** Keep values short and structured — never long free text. */
const MAX_VALUE_LENGTH = 120;

/**
 * Reduce arbitrary input to the allowlisted keys, coercing each value to a
 * trimmed, length-capped string. Empty / undefined / non-scalar values are
 * skipped so events stay clean and PII-free.
 */
export function sanitizeAnalyticsProperties(
  properties?: AnalyticsProperties,
): Record<string, string> {
  const clean: Record<string, string> = {};
  if (!properties) return clean;

  for (const key of ALLOWED_KEYS) {
    const value = properties[key];
    if (value === undefined || value === null) continue;
    if (
      typeof value !== "string" &&
      typeof value !== "number" &&
      typeof value !== "boolean"
    ) {
      continue;
    }
    const str = String(value).trim();
    if (!str) continue;
    clean[key] = str.length > MAX_VALUE_LENGTH ? str.slice(0, MAX_VALUE_LENGTH) : str;
  }

  return clean;
}

/**
 * Track an event. Safe to call from any client event handler — it sanitizes
 * properties, logs in development, and never throws.
 */
export function trackEvent(
  name: AnalyticsEventName,
  properties?: AnalyticsProperties,
): void {
  const sanitized = sanitizeAnalyticsProperties(properties);

  if (process.env.NODE_ENV === "development") {
    // Dev-only visibility into the exact (sanitized) payload. No PII, no secrets.
    console.debug("[analytics]", name, sanitized);
  }

  try {
    track(name, sanitized);
  } catch {
    // Never break the UI because analytics failed or is unavailable.
  }
}

/** The locale-less pathname ("/pricing", "/market-access/brazil", "/"). */
export function pageFromPathname(pathname: string): string {
  return stripLocale(pathname).path;
}

/**
 * Normalize a market-access path type to a stable analytics token:
 * "Cross-border" -> "cross-border", "Local" -> "local". Idempotent for values
 * that are already normalized (the destination data uses lowercase tokens).
 */
export function normalizePathType(pathType: string): string {
  return pathType.toLowerCase();
}
