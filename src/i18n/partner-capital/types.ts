/**
 * Localization contract for the Partner Network and GovDecision Capital pages
 * (SITE-015). Kept in a dedicated module — like `i18n/briefs` and
 * `i18n/destinations` — so the page copy stays isolated from the large core
 * dictionaries. Every locale file satisfies `PartnerCapitalChrome`, so a missing
 * or misspelled key is a compile-time error.
 *
 * Content-safety: this copy must never claim guaranteed partner placement,
 * guaranteed financing, direct lending, credit approval, or guaranteed market
 * access / awards. Use cautious framing ("partner routes", "where applicable",
 * "may be relevant", "must be validated").
 */

export type TitleDesc = { title: string; description: string };
export type MockupField = { label: string; value: string };

/** Shared Partner + Capital cross-link promo (Market Access + Briefs pages). */
export interface PartnerCapitalPromoCopy {
  eyebrow: string;
  title: string;
  lead: string;
  partner: { title: string; lead: string; cta: string };
  capital: { title: string; lead: string; cta: string };
}

export interface PartnersCopy {
  meta: TitleDesc;
  /** Breadcrumb label for the page itself ("Partner Network"). */
  breadcrumbName: string;
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
  };
  /** 1. Why partner strategy matters. */
  why: { eyebrow: string; title: string; lead: string; points: TitleDesc[] };
  /** 2. Route options (direct, local partner, distributor, subcontract, prepare). */
  routes: { eyebrow: string; title: string; lead: string; options: TitleDesc[] };
  /** 3. Partner categories. */
  categories: {
    eyebrow: string;
    title: string;
    lead: string;
    items: string[];
    note: string;
  };
  /** 4. Where GovDecision helps (feature tie-in). */
  govDecision: { eyebrow: string; title: string; lead: string; points: string[] };
  /** 5. Where Sax Global helps. */
  sax: { eyebrow: string; title: string; lead: string; points: string[] };
  /** 6. Sample partner route mockup (illustrative). */
  mockup: {
    eyebrow: string;
    title: string;
    lead: string;
    windowTitle: string;
    illustrative: string;
    briefTitle: string;
    fields: MockupField[];
    nextStepLabel: string;
    nextStepValue: string;
    caption: string;
  };
  /** 7. Disclaimer. */
  disclaimer: string;
  /** 8. CTA. */
  finalCta: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primary: string;
    secondary: string;
  };
}

export interface CapitalCopy {
  meta: TitleDesc;
  /** Breadcrumb label for the page itself ("GovDecision Capital"). */
  breadcrumbName: string;
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
  };
  /** 1. Why capital readiness matters. */
  why: { eyebrow: string; title: string; lead: string; points: TitleDesc[] };
  /** 2. Common public-contract finance gaps. */
  gaps: {
    eyebrow: string;
    title: string;
    lead: string;
    items: string[];
    note: string;
  };
  /** 3. What GovDecision Capital structures (feature tie-in). */
  structures: {
    eyebrow: string;
    title: string;
    lead: string;
    points: TitleDesc[];
  };
  /** 4. Partner funding routes. */
  routes: {
    eyebrow: string;
    title: string;
    lead: string;
    items: string[];
    note: string;
  };
  /** 5 + 6. Where GovDecision helps before / after award. */
  beforeAfter: {
    eyebrow: string;
    title: string;
    lead: string;
    beforeLabel: string;
    beforePoints: string[];
    afterLabel: string;
    afterPoints: string[];
  };
  /** 7. Sample finance-readiness mockup (illustrative). */
  mockup: {
    eyebrow: string;
    title: string;
    lead: string;
    windowTitle: string;
    illustrative: string;
    briefTitle: string;
    fields: MockupField[];
    nextStepLabel: string;
    nextStepValue: string;
    caption: string;
  };
  /** 8. Disclaimer. */
  disclaimer: string;
  /** 9. CTA. */
  finalCta: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primary: string;
    secondary: string;
  };
}

export interface PartnerCapitalChrome {
  promo: PartnerCapitalPromoCopy;
  partners: PartnersCopy;
  capital: CapitalCopy;
}
