import { site } from "./site";

/**
 * Navigation structure. Labels are NOT stored here anymore — they come from the
 * active locale dictionary (`common.nav.*`). This file keeps only the stable,
 * locale-agnostic route map; the locale prefix is applied by `localePath`.
 */
export type NavKey =
  | "platform"
  | "marketAccess"
  | "pricing"
  | "company"
  | "contact";

export type NavItem = { key: NavKey; href: string };

/** Primary header navigation — real routed pages, never scroll anchors. */
export const mainNav: NavItem[] = [
  { key: "platform", href: "/platform" },
  { key: "marketAccess", href: "/market-access" },
  { key: "pricing", href: "/pricing" },
  { key: "company", href: "/company" },
  { key: "contact", href: "/contact" },
];

export const footerNav: NavItem[] = mainNav;

/** External app login — never locale-prefixed. */
export const loginHref = site.loginUrl;
