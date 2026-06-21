import { site } from "./site";

export type NavLink = {
  label: string;
  href: string;
  description?: string;
};

/** Primary header navigation — real routed pages, never scroll anchors. */
export const mainNav: NavLink[] = [
  {
    label: "Platform",
    href: "/platform",
    description: "The product modules behind every decision.",
  },
  {
    label: "Corridors",
    href: "/corridors",
    description: "Government business corridors, structured by country.",
  },
  {
    label: "Pricing",
    href: "/pricing",
    description: "Platform-led and service-led plans.",
  },
  {
    label: "Company",
    href: "/company",
    description: "Built by Sax Group in Florida.",
  },
  {
    label: "Contact",
    href: "/contact",
    description: "Start a readiness conversation.",
  },
];

export const footerNav: NavLink[] = mainNav;

export const loginLink: NavLink = { label: "Log in", href: site.loginUrl };

export const primaryCta: NavLink = { label: "Start readiness", href: "/contact" };
export const secondaryCta: NavLink = {
  label: "Explore the platform",
  href: "/platform",
};

/**
 * Language selector placeholder. EN is active for this release; PT/ES are
 * scaffolded as disabled "coming soon" entries so the UI is ready for i18n.
 */
export type Language = {
  code: "EN" | "PT" | "ES";
  label: string;
  active: boolean;
};

export const languages: Language[] = [
  { code: "EN", label: "English (US)", active: true },
  { code: "PT", label: "Português (BR)", active: false },
  { code: "ES", label: "Español", active: false },
];
