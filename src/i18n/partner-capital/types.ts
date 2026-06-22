/**
 * Localization contract for the Partner Network and GovDecision Capital pages
 * (SITE-015, visual refresh). Kept in a dedicated module — like `i18n/briefs`
 * and `i18n/destinations` — so the page copy stays isolated from the large core
 * dictionaries. Every locale file satisfies `PartnerCapitalChrome`, so a missing
 * or misspelled key is a compile-time error.
 *
 * Content-safety: this copy must never claim guaranteed partner placement,
 * guaranteed financing, direct lending, credit approval, or guaranteed market
 * access / awards. Use cautious framing ("partner routes", "where applicable",
 * "may be relevant", "must be validated"). Structural tokens (matrix cell
 * states, icons) live in the views, not here — only human-readable copy lives in
 * this module.
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
  breadcrumbName: string;
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
  };
  /** Compact hero-side "partner routing" window. */
  heroMockup: {
    windowTitle: string;
    routeLabel: string;
    routes: string[]; // 3 lanes: direct / partner / prepare-first (partner is highlighted)
    recommended: string;
    dependencyLabel: string;
    dependencyValue: string;
    illustrative: string;
  };
  /** 1. Why partner strategy matters — compact what/why cards. */
  why: { eyebrow: string; title: string; lead: string; points: TitleDesc[] };
  /** 2. Route-options infographic — 7 route nodes. */
  routes: { eyebrow: string; title: string; lead: string; options: TitleDesc[] };
  /** 3. "When a partner matters" decision matrix. */
  matrix: {
    eyebrow: string;
    title: string;
    lead: string;
    columns: { direct: string; partner: string; validate: string };
    /** Badge labels keyed by the structural token used in the view. */
    cellLabels: { strong: string; harder: string; check: string; none: string };
    rows: string[]; // 6 context signals (order matches the token grid in the view)
  };
  /** 4. Partner categories — compact chip grid. */
  categories: {
    eyebrow: string;
    title: string;
    lead: string;
    items: string[];
    note: string;
  };
  /** 5. Partner-route timeline — 6 nodes. */
  timeline: { eyebrow: string; title: string; lead: string; steps: TitleDesc[] };
  /** 6. Where GovDecision helps (feature tie-in) — compact bullets. */
  govDecision: { eyebrow: string; title: string; lead: string; points: string[] };
  /** 7. Where Sax Global helps. */
  sax: { eyebrow: string; title: string; lead: string; points: string[] };
  /** 8. Detailed Partner Route Brief mockup (illustrative). */
  mockup: {
    eyebrow: string;
    title: string;
    lead: string;
    windowTitle: string;
    illustrative: string;
    briefTitle: string;
    fields: MockupField[]; // 5: path, opportunity type, recommended route, dependency, risk
    validationLabel: string;
    validationItems: string[]; // 4
    decisionLabel: string;
    decisionValue: string;
    caption: string;
  };
  disclaimer: string;
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
  breadcrumbName: string;
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
  };
  /** Compact hero-side "finance readiness" window. */
  heroMockup: {
    windowTitle: string;
    scoreLabel: string;
    scoreValue: string;
    stageLabel: string;
    stageValue: string;
    timingLabel: string;
    timingValue: string;
    illustrative: string;
  };
  /** 1. Why capital readiness matters — compact what/why cards. */
  why: { eyebrow: string; title: string; lead: string; points: TitleDesc[] };
  /** 2. Public-contract cash-flow timeline + pressure points. */
  cashflow: {
    eyebrow: string;
    title: string;
    lead: string;
    steps: string[]; // 7 stages
    pressureLabel: string;
    pressures: string[]; // 6 pressure points
  };
  /** 3. Capital gaps visual grid. */
  gaps: {
    eyebrow: string;
    title: string;
    lead: string;
    items: string[]; // 7
    note: string;
  };
  /** 4. Funding-route map (flow + possible partner routes). */
  fundingRoute: {
    eyebrow: string;
    title: string;
    lead: string;
    flow: TitleDesc[]; // 5 flow nodes (descriptions carry the GovDecision feature tie-ins)
    routesLabel: string;
    routes: string[]; // 6 possible partner routes
    note: string;
  };
  /** 5. Before-award / after-award question comparison. */
  beforeAfter: {
    eyebrow: string;
    title: string;
    lead: string;
    beforeLabel: string;
    beforePoints: string[]; // 4 questions
    afterLabel: string;
    afterPoints: string[]; // 4 questions
  };
  /** 6. Detailed Finance Readiness Brief mockup (illustrative). */
  mockup: {
    eyebrow: string;
    title: string;
    lead: string;
    windowTitle: string;
    illustrative: string;
    briefTitle: string;
    fields: MockupField[]; // 6: stage, working-capital gap, payment timing, guarantee, FX, funding route
    nextStepLabel: string;
    nextStepValue: string;
    caption: string;
  };
  disclaimer: string;
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
