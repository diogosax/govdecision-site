import type { PartnerCapitalChrome } from "./types";

/**
 * EN-US — source of truth for the Partner Network + GovDecision Capital pages
 * (SITE-015, visual refresh). PT-BR and ES mirror this shape exactly.
 *
 * Content-safety review: no guaranteed partner placement, no guaranteed
 * financing, no direct lending, no credit approval, no guaranteed market access
 * or awards. Partner and funding language stays conditional ("routes",
 * "where applicable", "may be relevant", "must be validated").
 */
export const enUS = {
  promo: {
    eyebrow: "Routes & capital",
    title: "Finding the opportunity is only half the decision.",
    lead: "Pursuing government business often takes the right partner route and a credible finance case. See how GovDecision and Sax Global help suppliers prepare both.",
    partner: {
      title: "Partner Network",
      lead: "Direct, local partner, distributor, or subcontract — understand the route before you pursue.",
      cta: "Explore partner routes",
    },
    capital: {
      title: "GovDecision Capital",
      lead: "Working capital, guarantees, and payment timing — structure the finance case, not a loan.",
      cta: "Explore capital readiness",
    },
  },

  partners: {
    meta: {
      title: "GovDecision Partner Network — Market Access Routes",
      description:
        "Explore how GovDecision and Sax Global help suppliers evaluate direct, distributor, representative, subcontracting, and partner routes for government business.",
    },
    breadcrumbName: "Partner Network",
    hero: {
      eyebrow: "Partner network",
      title:
        "Government business often needs the right route, not just the right opportunity.",
      subtitle:
        "Know when to go direct, partner locally, use a distributor, subcontract, or prepare first. Sax Global supports partner-route planning where cross-border execution matters.",
      primaryCta: "Talk to Sax Global",
      secondaryCta: "Explore Market Access",
    },
    heroMockup: {
      windowTitle: "govdecision · Partner Routing",
      routeLabel: "Route signal",
      routes: ["Direct", "Partner route", "Prepare first"],
      recommended: "Recommended",
      dependencyLabel: "Partner dependency",
      dependencyValue: "Medium",
      illustrative: "Illustrative",
    },
    why: {
      eyebrow: "Why partner strategy matters",
      title: "Software finds the opportunity. The route wins it.",
      lead: "A qualified opportunity still needs a way to reach the buyer — directly, through a partner, or not yet.",
      points: [
        {
          title: "More than software",
          description:
            "Presence, representation, or a channel is often needed before you can deliver.",
        },
        {
          title: "Cross-border adds dependency",
          description:
            "Another country can mean a representative, importer, or distributor first.",
        },
        {
          title: "The wrong route is costly",
          description:
            "Going direct when you needed a partner shows up late — and expensive.",
        },
      ],
    },
    routes: {
      eyebrow: "Route options",
      title: "Seven ways into a government market.",
      lead: "Most pursuits resolve to one of a few routes. The work is choosing — and validating — the right one.",
      options: [
        { title: "Direct sale", description: "Sell straight to the buyer." },
        { title: "Local representative", description: "Presence and follow-up on the ground." },
        { title: "Distributor / reseller", description: "Reach the buyer through an existing channel." },
        { title: "Importer / trading", description: "Move goods through an import partner." },
        { title: "Subcontractor", description: "Supply under a prime contractor." },
        { title: "Consortium", description: "Team up to meet size or local content." },
        { title: "Technical integrator", description: "Deliver through a systems integrator." },
      ],
    },
    matrix: {
      eyebrow: "When a partner matters",
      title: "Read the signals before you choose.",
      lead: "Some contexts push toward a partner — or toward validating first. A quick read, not a verdict.",
      columns: {
        direct: "Direct route",
        partner: "Partner route",
        validate: "Validate first",
      },
      cellLabels: {
        strong: "Stronger",
        harder: "Harder",
        check: "Validate",
        none: "—",
      },
      rows: [
        "Foreign buyer context",
        "Local delivery requirement",
        "Language / documentation friction",
        "Portal registration complexity",
        "After-award execution",
        "Warranty / service support",
      ],
    },
    categories: {
      eyebrow: "Partner categories",
      title: "The ecosystem a pursuit may need.",
      lead: "Depending on the market and the contract, a route can involve several of these potential partner categories.",
      items: [
        "Local representatives",
        "Distributors / resellers",
        "Importers / trading companies",
        "Technical integrators",
        "Compliance / regulatory specialists",
        "Legal / procurement counsel",
        "Translators / localization support",
        "Logistics / fulfillment partners",
        "Banks / fintechs / factoring",
        "Insurance / surety / performance bond partners",
        "Trade finance / FX partners",
      ],
      note: "Potential partner categories to evaluate — not a roster of contracted partners. Partner matching is offered where applicable, and any route must be validated.",
    },
    timeline: {
      eyebrow: "Partner-route thinking",
      title: "How a route gets decided.",
      lead: "GovDecision and Sax Global structure the partner-route question step by step.",
      steps: [
        { title: "Opportunity signal", description: "A qualified opportunity appears." },
        { title: "Route hypothesis", description: "Direct, partner, or prepare first?" },
        { title: "Readiness check", description: "Registration, presence, delivery gaps." },
        { title: "Partner category", description: "Which partner type the route needs." },
        { title: "Validation", description: "Confirm the route is real." },
        { title: "Pursuit decision", description: "Go, partner first, or hold." },
      ],
    },
    govDecision: {
      eyebrow: "Where GovDecision helps",
      title: "Route choice starts from facts.",
      lead: "The platform turns an opportunity into a structured route question.",
      points: [
        "Supplier Passport frames capabilities, certifications, and enabled markets.",
        "Opportunity Qualification and AI-assisted requirement extraction flag where a partner is likely required.",
        "Blocker detection surfaces registration, eligibility, and presence gaps.",
        "Country Packs explain country-specific route and partner expectations.",
        "The Go/No-Go memo and Deal Room capture the recommended partner route.",
        "Partner-route notes carry into Post-Award Enablement.",
      ],
    },
    sax: {
      eyebrow: "Where Sax Global helps",
      title: "Cross-border route planning, where it matters.",
      lead: "When an opportunity crosses a border, Sax Global adds market context on top of the platform.",
      points: [
        "Partner-route planning for cross-border execution.",
        "Context on local representation, distribution, and importer structures.",
        "Market access framing that ties the opportunity to a real route.",
        "Partner matching where applicable — categories to evaluate, not guaranteed placements.",
        "A second read on whether to go now, partner first, or prepare.",
      ],
    },
    mockup: {
      eyebrow: "Sample output",
      title: "What a partner-route read looks like.",
      lead: "A short, structured view of the route question for a single opportunity.",
      windowTitle: "govdecision · Partner Route Brief",
      illustrative: "Illustrative",
      briefTitle: "Partner Route Brief",
      fields: [
        { label: "Path", value: "Brazil → United States" },
        { label: "Opportunity type", value: "Technical supplies" },
        { label: "Recommended route", value: "Distributor + readiness checklist" },
        { label: "Partner dependency", value: "Medium" },
        { label: "Execution risk", value: "Medium" },
      ],
      validationLabel: "Validation needed",
      validationItems: [
        "Local registration path",
        "Delivery / service capacity",
        "Warranty support",
        "Documentation language",
      ],
      decisionLabel: "Decision",
      decisionValue: "Validate route before pursuit",
      caption: "Illustrative — not a real customer case.",
    },
    disclaimer:
      "GovDecision and Sax Global may support partner-route planning and market access context where applicable. They do not guarantee partner placement, eligibility, market access, awards, financing, or contract outcomes.",
    finalCta: {
      eyebrow: "Partner routes",
      title: "Decide the route before you chase the opportunity.",
      subtitle:
        "Talk to Sax Global about how a partner route could work for your market — direct, local partner, distributor, or prepare first.",
      primary: "Talk to Sax Global",
      secondary: "Explore Market Access",
    },
  },

  capital: {
    meta: {
      title: "GovDecision Capital — Finance Readiness for Government Business",
      description:
        "GovDecision Capital helps suppliers structure finance-readiness, working capital needs, guarantees, and partner funding routes for public-sector opportunities.",
    },
    breadcrumbName: "GovDecision Capital",
    hero: {
      eyebrow: "GovDecision Capital",
      title: "Winning is only the start. Execution needs capital readiness.",
      subtitle:
        "Estimate working capital needs, understand payment timing, organize finance-readiness, and prepare a stronger case for partner funding routes when applicable.",
      primaryCta: "Discuss capital readiness",
      secondaryCta: "Explore the platform",
    },
    heroMockup: {
      windowTitle: "govdecision · Finance Readiness",
      scoreLabel: "Finance readiness",
      scoreValue: "Medium",
      stageLabel: "Stage",
      stageValue: "Pre-award",
      timingLabel: "Payment timing",
      timingValue: "High risk",
      illustrative: "Illustrative",
    },
    why: {
      eyebrow: "Why capital readiness matters",
      title: "An award is a cash-flow event.",
      lead: "Public contracts often ask you to deliver, guarantee, and wait — before you are paid.",
      points: [
        {
          title: "Timing, not viability",
          description:
            "Costs and guarantees come due long before the receivable arrives.",
        },
        {
          title: "Finance belongs in the pursuit",
          description: "A clear view makes a Go/No-Go honest from the start.",
        },
        {
          title: "Readiness travels well",
          description: "Cross-border work adds FX, import, and tax timing.",
        },
      ],
    },
    cashflow: {
      eyebrow: "Cash-flow timeline",
      title: "Where a public contract strains cash.",
      lead: "Map the gap between when costs land and when payment arrives.",
      steps: [
        "Opportunity review",
        "Bid / proposal",
        "Award",
        "Purchase / production",
        "Delivery",
        "Invoice",
        "Payment",
      ],
      pressureLabel: "Where capital pressure may appear",
      pressures: [
        "Inventory",
        "Logistics",
        "Guarantees",
        "Labor",
        "FX",
        "Payment delay",
      ],
    },
    gaps: {
      eyebrow: "Capital gaps",
      title: "The gaps that show up again and again.",
      lead: "Naming them early turns a worry into a question you can plan around.",
      items: [
        "Working capital",
        "Inventory / production",
        "Import and logistics",
        "Bid bond / guarantee",
        "Payment timing",
        "FX exposure",
        "Receivables delay",
      ],
      note: "Which gaps apply depends on the opportunity and must be validated case by case.",
    },
    fundingRoute: {
      eyebrow: "Funding-route map",
      title: "From readiness to a finance case.",
      lead: "GovDecision Capital helps structure the finance case and connect qualified situations to partner routes where applicable. It is not direct lending.",
      flow: [
        {
          title: "Finance readiness score",
          description: "Drawn from Opportunity Qualification and blocker detection.",
        },
        {
          title: "Finance case",
          description: "Structured in the Readiness Workspace and Deal Room.",
        },
        {
          title: "Partner route",
          description: "Which partner funding routes may be relevant.",
        },
        {
          title: "Review",
          description: "Validate assumptions before anything is committed.",
        },
        {
          title: "Execution support",
          description: "Carried into Post-Award Enablement.",
        },
      ],
      routesLabel: "Possible partner routes",
      routes: [
        "Working capital",
        "Factoring / receivables",
        "Export finance",
        "Trade finance",
        "Surety / performance bond",
        "FX / cross-border payments",
      ],
      note: "Potential partner routes to evaluate. Which may be relevant depends on the opportunity and must be validated — GovDecision Capital is not a lender and does not provide financing.",
    },
    beforeAfter: {
      eyebrow: "Before & after award",
      title: "The questions capital readiness answers.",
      lead: "Useful twice: a clear decision before award, and clean execution after it.",
      beforeLabel: "Before award",
      beforePoints: [
        "Can we pursue this?",
        "What guarantees may be required?",
        "What cash gap could appear?",
        "What partner route should we prepare?",
      ],
      afterLabel: "After award",
      afterPoints: [
        "Can we deliver?",
        "When do we get paid?",
        "What needs to be financed?",
        "What documents does a finance partner need?",
      ],
    },
    mockup: {
      eyebrow: "Sample output",
      title: "What a finance-readiness read looks like.",
      lead: "A short, structured view of the capital question for a single opportunity.",
      windowTitle: "govdecision · Finance Readiness Brief",
      illustrative: "Illustrative",
      briefTitle: "Finance Readiness Brief",
      fields: [
        { label: "Opportunity stage", value: "Pre-award" },
        { label: "Working capital gap", value: "Medium" },
        { label: "Payment timing risk", value: "High" },
        { label: "Guarantee requirement", value: "Validate" },
        { label: "FX exposure", value: "Depends" },
        { label: "Funding route", value: "Partner finance review" },
      ],
      nextStepLabel: "Next step",
      nextStepValue: "Build finance case",
      caption: "Illustrative — not a real customer case and not a financing offer.",
    },
    disclaimer:
      "GovDecision Capital supports finance-readiness, case structuring, and partner-route preparation where applicable. It is not direct lending and does not guarantee financing, credit approval, awards, or contract outcomes.",
    finalCta: {
      eyebrow: "Capital readiness",
      title: "Build the finance case before you need it.",
      subtitle:
        "Discuss capital readiness with our team — working capital, guarantees, payment timing, and which partner funding routes may be relevant.",
      primary: "Discuss capital readiness",
      secondary: "Explore the platform",
    },
  },
} satisfies PartnerCapitalChrome;

export default enUS;
