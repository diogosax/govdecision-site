import { site } from "./site";

/**
 * Navigation structure. Labels are NOT stored here anymore — they come from the
 * active locale dictionary (`common.nav.*`). This file keeps only the stable,
 * locale-agnostic route map; the locale prefix is applied by `localePath`.
 */
export type NavKey =
  | "platform"
  | "marketAccess"
  | "opportunityBriefs"
  | "pricing"
  | "company"
  | "contact";

export type NavItem = { key: NavKey; href: string };

/**
 * Primary header navigation — real routed pages, never scroll anchors.
 *
 * Opportunity Briefs is intentionally NOT here: adding a sixth primary item
 * risks header overflow in the 1024–1100px band (and in PT-BR/ES), which the
 * brief explicitly warns against. It is surfaced instead through the footer nav
 * (below) plus prominent in-page promos on Home and Market Access — the
 * fallback the brief blesses when the header would otherwise be crowded.
 */
export const mainNav: NavItem[] = [
  { key: "platform", href: "/platform" },
  { key: "marketAccess", href: "/market-access" },
  { key: "pricing", href: "/pricing" },
  { key: "company", href: "/company" },
  { key: "contact", href: "/contact" },
];

/** Footer navigation — the full set, including Opportunity Briefs (SITE-013). */
export const footerNav: NavItem[] = [
  { key: "platform", href: "/platform" },
  { key: "marketAccess", href: "/market-access" },
  { key: "opportunityBriefs", href: "/opportunity-briefs" },
  { key: "pricing", href: "/pricing" },
  { key: "company", href: "/company" },
  { key: "contact", href: "/contact" },
];

/** External app login — never locale-prefixed. */
export const loginHref = site.loginUrl;
