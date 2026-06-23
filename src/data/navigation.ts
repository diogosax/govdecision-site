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
  | "partners"
  | "capital"
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
export type NavLabelKey =
  | NavKey
  | "marketAccessOverview"
  | "platformOverview"
  | "partnerNetwork"
  | "govDecisionCapital";

export type NavItem = {
  key: NavKey;
  href: string;
  /** Override the dictionary label key (defaults to `key`). */
  labelKey?: NavLabelKey;
  /** Optional shorter label key used only when this item is flattened into the
   *  mobile menu (e.g. the Platform overview reads "Platform Overview" in the
   *  desktop dropdown but "Platform" in the flattened mobile list). */
  shortLabelKey?: NavLabelKey;
  /** Optional submenu entries (SITE-014: Briefs lives under Market Access;
   *  SITE-015: Partner Network + GovDecision Capital live under Platform). */
  children?: NavItem[];
};

/**
 * Primary header navigation — real routed pages, never scroll anchors.
 *
 * Five top-level items keep the header compact (no overflow). Two of them open a
 * small premium dropdown:
 *   - Platform → Platform Overview · Partner Network · GovDecision Capital (SITE-015)
 *   - Market Access → Market Access overview · Opportunity Briefs (SITE-014)
 * Submenu items are flattened into the mobile menu and also appear in the footer.
 */
export const mainNav: NavItem[] = [
  {
    key: "platform",
    href: "/platform",
    children: [
      {
        key: "platform",
        href: "/platform",
        labelKey: "platformOverview",
        shortLabelKey: "platform",
      },
      { key: "partners", href: "/partners", labelKey: "partnerNetwork" },
      { key: "capital", href: "/capital", labelKey: "govDecisionCapital" },
    ],
  },
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

/**
 * Footer navigation — the full set. Partners + GovDecision Capital live here
 * (SITE-015) rather than in the primary header, keeping the header uncluttered
 * while the two pages stay discoverable via the footer and in-page promos.
 */
export const footerNav: NavItem[] = [
  { key: "platform", href: "/platform" },
  { key: "marketAccess", href: "/market-access" },
  { key: "opportunityBriefs", href: "/opportunity-briefs" },
  { key: "partners", href: "/partners" },
  { key: "capital", href: "/capital" },
  { key: "pricing", href: "/pricing" },
  { key: "company", href: "/company" },
  { key: "contact", href: "/contact" },
];

/**
 * Footer legal / compliance group (SITE-018). A small, clean cluster kept
 * separate from the platform/company links so the footer stays uncluttered.
 * Labels come from `common.nav.{terms,privacy,compliance}` in each locale.
 */
export type LegalNavKey = "terms" | "privacy" | "compliance";

export const legalNav: { key: LegalNavKey; href: string }[] = [
  { key: "terms", href: "/terms" },
  { key: "privacy", href: "/privacy" },
  { key: "compliance", href: "/compliance" },
];

/** External app login — never locale-prefixed. */
export const loginHref = site.loginUrl;
