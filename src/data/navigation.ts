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
 * SITE-014 promotes Opportunity Briefs into the primary header nav, but safely:
 * the header content is capped at ~1088px by `max-w-6xl`, so a sixth full-width
 * item would overflow the 1024–1279px band (worse in PT-BR/ES, where the labels
 * are longer). The compromise the brief blesses (fallback B): render Briefs with
 * a compact label and only at the wider `xl` breakpoint — see `SiteChrome`, which
 * tags it `desktopWideOnly`. In the 1024–1279px band the proven five-item layout
 * is kept; Briefs still appears in the mobile menu, the footer nav (below) and
 * the in-page promos on Home and Market Access.
 */
export const mainNav: NavItem[] = [
  { key: "platform", href: "/platform" },
  { key: "marketAccess", href: "/market-access" },
  { key: "opportunityBriefs", href: "/opportunity-briefs" },
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
