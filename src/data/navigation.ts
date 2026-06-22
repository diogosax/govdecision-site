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

/**
 * Dictionary label keys available under `common.nav.*`. A superset of `NavKey`:
 * it adds submenu-only labels that reuse an existing route with different copy
 * (e.g. the Market Access overview link inside the Market Access dropdown, which
 * reads "Acesso a mercados" / "Acceso a mercados" while the parent reads the
 * shorter category label "Mercados").
 */
export type NavLabelKey = NavKey | "marketAccessOverview";

export type NavItem = {
  key: NavKey;
  href: string;
  /** Override the dictionary label key (defaults to `key`). */
  labelKey?: NavLabelKey;
  /** Optional submenu entries (SITE-014: Briefs lives under Market Access). */
  children?: NavItem[];
};

/**
 * Primary header navigation — real routed pages, never scroll anchors.
 *
 * SITE-014 keeps five top-level items (no header overflow) and groups Opportunity
 * Briefs under Market Access as a small dropdown. The parent "Market Access"
 * ("Mercados") opens a menu with two destinations: the Market Access overview
 * (`marketAccessOverview` label) and Opportunity Briefs. Both also appear in the
 * mobile menu (flattened) and the footer; Briefs additionally keeps its in-page
 * promos on Home and Market Access.
 */
export const mainNav: NavItem[] = [
  { key: "platform", href: "/platform" },
  {
    key: "marketAccess",
    href: "/market-access",
    children: [
      { key: "marketAccess", href: "/market-access", labelKey: "marketAccessOverview" },
      { key: "opportunityBriefs", href: "/opportunity-briefs" },
    ],
  },
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
