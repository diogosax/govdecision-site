/**
 * The localization contract.
 *
 * Every locale dictionary must satisfy this shape (`satisfies Dictionary`), so
 * a missing or misspelled key is a compile-time error rather than a runtime
 * gap. Structural data (icons, slugs, numbers, URLs, hrefs, lat/lon) stays in
 * `src/data/*`; only human-readable copy lives here.
 *
 * Arrays marked "// order matches <file>" are zipped by index with the
 * structural data, so their length and order must stay aligned.
 */

export type TitleDesc = { title: string; description: string };

export interface Dictionary {
  /** Shared chrome: navigation, footer, CTAs, language selector. */
  common: {
    nav: {
      platform: string;
      marketAccess: string;
      opportunityBriefs: string;
      /** Submenu-only label for the Market Access landing link inside the Market
       *  Access dropdown (SITE-014). Reads fuller than the parent category label
       *  `marketAccess` ("Acesso a mercados" / "Acceso a mercados" vs "Mercados").
       *  In EN both are "Market Access". */
      marketAccessOverview: string;
      /** Platform dropdown submenu labels (SITE-015). `platformOverview` is the
       *  desktop overview label ("Platform Overview"); the mobile flatten falls
       *  back to the shorter `platform` label. */
      platformOverview: string;
      partnerNetwork: string;
      govDecisionCapital: string;
      partners: string;
      capital: string;
      pricing: string;
      company: string;
      contact: string;
    };
    /** Reusable Opportunity Briefs promo (Home + Market Access cross-links). */
    briefsPromo: {
      eyebrow: string;
      title: string;
      lead: string;
      cta: string;
    };
    /** Reusable call-to-action labels (kept short for layout safety). */
    cta: {
      startReadiness: string;
      /** Header-only, ultra-short variant of `startReadiness` (same href/behavior).
       *  Kept separate so page-level `startReadiness` CTAs are unaffected. */
      headerStart: string;
      explorePlatform: string;
      viewCorridors: string;
      viewPricing: string;
      talkToSax: string;
      seeFullPlatform: string;
      allPaths: string;
      aboutSax: string;
      talkToTeam: string;
    };
    login: string;
    skipToContent: string;
    languageSelector: {
      label: string;
      current: string;
    };
    footer: {
      tagline: string; // small uppercase descriptor
      blurb: string; // sentence under the tagline
      platformHeading: string;
      getStartedHeading: string;
      startReadiness: string;
      legalDisclaimer: string;
      copyright: string; // "A {parent} platform."
      madeWith: string; // text before the heart
      inFlorida: string; // text after the heart ("in Florida")
    };
  };

  home: {
    meta: TitleDesc;
    eyebrow: string;
    title: string;
    subtitle: string;
    slogan: string; // brand tagline
    strategicLead: string; // bold lead + rest joined
    strategicRest: string;
    journey: string[]; // order matches HomeView journey icons (5)
    problem: {
      eyebrow: string;
      title: string;
      lead: string;
      paragraph: string;
      withoutLayer: string;
      noise: string[]; // 5 noise rows
      decisionTitle: string;
      decisionMeta: string;
    };
    capabilities: {
      eyebrow: string;
      title: string;
      lead: string;
      cards: TitleDesc[]; // order matches data/platform capabilityCards (6)
    };
    corridors: {
      eyebrow: string;
      title: string;
      lead: string;
      coverage: string;
    };
    ai: {
      eyebrow: string;
      title: string;
      lead: string;
      cardLabel: string;
      cardLines: string[]; // 4
      points: string[]; // 4
    };
    sax: {
      eyebrow: string;
      title: string;
      lead: string;
      cards: TitleDesc[]; // 4
    };
    finalCta: { eyebrow: string; title: string; subtitle: string };
  };

  platform: {
    meta: TitleDesc;
    eyebrow: string;
    title: string;
    lead: string;
    moduleLabel: string; // "Module"
    /** order matches data/platform platformModules (6). */
    modules: { name: string; tagline: string; description: string; points: string[] }[];
    finalCta: { title: string; subtitle: string; secondaryLabel: string };
  };

  marketAccess: {
    meta: TitleDesc;
    hero: {
      eyebrow: string;
      title: string;
      subtitle: string;
      slogan: string;
      primaryCta: string;
      secondaryCta: string;
    };
    twoPaths: {
      eyebrow: string;
      title: string;
      lead: string;
      examplesLabel: string;
      /** order matches data/market-access pathModes (2). */
      modes: { label: string; copy: string; helpsLabel: string; helps: string[] }[];
    };
    finder: { eyebrow: string; title: string; lead: string };
    /** Interactive path selector labels + derived copy. */
    selector: {
      originPrompt: string;
      targetPrompt: string;
      selectedPath: string;
      pathType: string;
      requires: string;
      recommendedFirstStepLabel: string;
      recommendedFirstStep: string;
      startReadiness: string;
      /** Requirements per path type (keyed by PathType). */
      requirements: Record<string, string[]>;
    };
    /** Localized path-type and status chips, shared across cards + selector. */
    pathTypeLabels: Record<string, string>;
    statusLabels: Record<string, string>;
    paths: {
      eyebrow: string;
      title: string;
      lead: string;
      corridorPrompt: string;
      corridorLink: string;
      /** Localized card copy keyed by path slug (data/market-access). */
      cards: Record<
        string,
        { title: string; summary: string; focusAreas: string[]; ctaLabel: string }
      >;
    };
    enters: {
      eyebrow: string;
      title: string;
      lead: string;
      note: string;
      /** order matches data/market-access govDecisionJourney (6). */
      journey: TitleDesc[]; // title=label, description=step description
    };
    sax: {
      eyebrow: string;
      title: string;
      lead: string;
      cta: string;
      disclaimer: string;
      /** order matches data/market-access saxGlobalServices (5). */
      services: TitleDesc[];
    };
    finalCta: {
      eyebrow: string;
      title: string;
      subtitle: string;
      primary: string;
      secondary: string;
    };
  };

  pricing: {
    meta: TitleDesc;
    eyebrow: string;
    title: string;
    lead: string;
    note: string;
    serviceLedBadge: string;
    brazilLabel: string;
    internationalLabel: string;
    /** order matches data/pricing pricingPlans (2). */
    plans: {
      market: string;
      badge: string;
      description: string;
      features: string[];
      cta: string;
      priceBrazil: string;
      priceInternational: string;
      noteBrazil: string;
      noteInternational: string;
    }[];
    compare: {
      eyebrow: string;
      title: string;
      lead: string;
      capability: string;
      guided: string;
      /** order matches data/pricing pricingComparison rows (12). */
      rows: string[];
      values: Record<string, string>; // localized cell values e.g. "Standard"/"Guided"
    };
    finalCta: {
      eyebrow: string;
      title: string;
      subtitle: string;
      primary: string;
      secondary: string;
    };
  };

  company: {
    meta: TitleDesc;
    eyebrow: string;
    title: string;
    lead: string;
    facts: { label: string; value: string }[]; // order matches CompanyView facts (4)
    ownership: { eyebrow: string; title: string; lead: string; p1: string; p2: string };
    why: {
      eyebrow: string;
      title: string;
      lead: string;
      beliefs: TitleDesc[]; // 3 (title/body)
    };
    madeWith: {
      localLabelSuffix: string;
      heading: string;
      inFlorida: string;
      body: string;
      cta: string;
    };
    finalCta: { title: string; subtitle: string; secondary: string };
  };

  contact: {
    meta: TitleDesc;
    eyebrow: string;
    title: string;
    lead: string;
    aside: TitleDesc[]; // 3
    preferEmail: string;
    alreadyCustomer: string;
    loginCta: string;
    disclaimer: string;
    /** Contextual banner messages keyed by lead type. */
    context: {
      local: string; // local readiness path
      cross: string; // sax global market access path
      localWithTarget: string; // uses {target}
      crossWithPair: string; // uses {origin} -> {target}
    };
    form: {
      name: string;
      namePlaceholder: string;
      companyLabel: string;
      companyPlaceholder: string;
      email: string;
      emailPlaceholder: string;
      country: string;
      countryPlaceholder: string;
      markets: string;
      marketsPlaceholder: string;
      message: string;
      messagePlaceholder: string;
      submit: string;
      submitting: string;
      consent: string;
      successTitle: string;
      successBody: string;
      sendAnother: string;
      errorMessage: string;
    };
  };

  corridors: {
    meta: TitleDesc;
    eyebrow: string;
    title: string;
    lead: string;
    globalLine: string;
    coverage: string;
    legend: { active: string; inDev: string; multilateral: string; hub: string };
    combinesEyebrow: string;
    combinesTitle: string;
    combinesLead: string;
    combines: string[]; // order matches CorridorsView combines (6)
    marketsEyebrow: string;
    marketsTitle: string;
    marketsLead: string;
    coverageNote: string;
    /** Localized corridor copy keyed by id (data/corridors). */
    corridorById: Record<string, { name: string; summary: string; focus: string[] }>;
    statusLabels: Record<string, string>; // CorridorStatus -> localized
    finalCta: { title: string; subtitle: string; primary: string; secondary: string };
  };
}
