import type { PartnerCapitalChrome } from "./types";

/**
 * EN-US — source of truth for the Partner Network + GovDecision Capital pages
 * (SITE-015). PT-BR and ES mirror this shape exactly.
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
        "GovDecision helps suppliers understand when to go direct, partner locally, use a distributor, subcontract, or prepare first. Sax Global can support partner-route planning where cross-border execution matters.",
      primaryCta: "Talk to Sax Global",
      secondaryCta: "Explore Market Access",
    },
    why: {
      eyebrow: "Why partner strategy matters",
      title: "Software finds the opportunity. The route wins it.",
      lead: "A qualified opportunity still needs a way to reach the buyer — directly, through a partner, or not yet at all. The route is often the deciding factor.",
      points: [
        {
          title: "More than software",
          description:
            "Suppliers often need presence, representation, or a channel on the ground before they can deliver. Knowing which — early — protects your pursuit budget.",
        },
        {
          title: "Cross-border adds dependency",
          description:
            "Selling into another country can mean a representative, importer, or distributor before delivery is even possible. Route dependency is a planning input, not an afterthought.",
        },
        {
          title: "The wrong route is expensive",
          description:
            "Going direct when you needed a partner — or partnering when you could have gone direct — shows up late and costs the most. Route choice belongs in the Go/No-Go decision.",
        },
      ],
    },
    routes: {
      eyebrow: "Route options",
      title: "Five ways into a government market.",
      lead: "Most pursuits resolve to one of a few routes. The work is choosing — and validating — the right one before you commit.",
      options: [
        {
          title: "Go direct",
          description:
            "Sell straight to the buyer when registration, presence, and delivery are realistic on your own.",
        },
        {
          title: "Partner locally",
          description:
            "Appoint a local representative or partner to carry presence, relationships, and follow-up on the ground.",
        },
        {
          title: "Use a distributor",
          description:
            "Reach the buyer through a distributor or reseller that already holds the channel and the stock.",
        },
        {
          title: "Subcontract or team",
          description:
            "Join a prime or consortium as a subcontractor when the contract is large or local content is required.",
        },
        {
          title: "Prepare first",
          description:
            "Hold, build readiness, and validate the route before committing pursuit resources to it.",
        },
      ],
    },
    categories: {
      eyebrow: "Partner categories",
      title: "The partner ecosystem a pursuit may need.",
      lead: "Depending on the market and the contract, a route can involve several of these potential partner categories. GovDecision and Sax Global help you map which ones are relevant.",
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
      note: "These are potential partner categories to evaluate — not a roster of contracted partners. Partner matching is offered where applicable, and any route must be validated for the specific opportunity.",
    },
    govDecision: {
      eyebrow: "Where GovDecision helps",
      title: "Route choice starts from facts, not guesswork.",
      lead: "The platform turns an opportunity into a structured route question — so direct vs. partner is a decision you can defend.",
      points: [
        "Supplier Passport organizes your capabilities, certifications, and enabled markets so a route decision starts from facts.",
        "Opportunity Qualification and AI-assisted requirement extraction surface where a local partner, representative, or importer is likely required.",
        "Blocker detection flags the registration, eligibility, and presence gaps that decide direct vs. partner.",
        "Country Packs explain country-specific route expectations and the partner structures suppliers commonly use.",
        "The Go/No-Go memo and Deal Room capture the recommended partner route before pursuit resources are committed.",
        "Partner-route recommendations and finance-readiness notes carry into Post-Award Enablement once the work begins.",
      ],
    },
    sax: {
      eyebrow: "Where Sax Global helps",
      title: "Cross-border route planning, where it matters.",
      lead: "When an opportunity crosses a border, Sax Global adds market context and partner-route planning on top of the platform.",
      points: [
        "Partner-route planning where cross-border execution matters.",
        "Context on local representation, distribution, and importer structures by market.",
        "Market access framing that connects the opportunity to a realistic route to market.",
        "Partner matching where applicable — surfacing potential partner categories to evaluate, not guaranteed placements.",
        "A second read on whether to go now, partner first, or prepare before pursuit.",
      ],
    },
    mockup: {
      eyebrow: "Sample output",
      title: "What a partner-route read looks like.",
      lead: "A short, structured view of the route question for a single opportunity — the kind of read GovDecision and Sax Global help you reach before you commit.",
      windowTitle: "govdecision · Partner Route Brief",
      illustrative: "Illustrative",
      briefTitle: "Partner Route Brief",
      fields: [
        { label: "Opportunity path", value: "Brazil → United States" },
        { label: "Recommended route", value: "Local distributor + readiness checklist" },
        { label: "Partner dependency", value: "Medium" },
        { label: "Execution risk", value: "Medium" },
      ],
      nextStepLabel: "Next step",
      nextStepValue: "Validate route before pursuit",
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
        "GovDecision Capital helps suppliers estimate working capital needs, understand payment timing, organize finance-readiness, and prepare a stronger case for partner funding routes when applicable.",
      primaryCta: "Discuss capital readiness",
      secondaryCta: "Explore the platform",
    },
    why: {
      eyebrow: "Why capital readiness matters",
      title: "An award is a cash-flow event.",
      lead: "Public contracts often ask you to deliver, guarantee, and wait — before you are paid. Capital readiness is what keeps a win from becoming a strain.",
      points: [
        {
          title: "Timing, not viability",
          description:
            "Strong suppliers stall because production, guarantees, and delivery come due long before the receivable. Mapping that timing early changes the decision.",
        },
        {
          title: "Finance belongs in the pursuit",
          description:
            "A clear view of working capital, guarantees, and payment timing makes a Go/No-Go honest — and a funding conversation far easier when it matters.",
        },
        {
          title: "Readiness travels well",
          description:
            "Cross-border work adds FX, import, and tax timing. A structured finance case keeps those moving parts visible instead of surprising you after award.",
        },
      ],
    },
    gaps: {
      eyebrow: "Common finance gaps",
      title: "Where public contracts strain cash flow.",
      lead: "The same gaps show up again and again. Naming them early turns a vague worry into a question you can plan around.",
      items: [
        "Working capital before delivery",
        "Inventory or production cost",
        "Import / logistics costs",
        "Performance guarantees",
        "Bid bonds",
        "Payment timing",
        "Milestone-based invoicing",
        "FX exposure",
        "Tax / import timing",
        "Receivables delay",
      ],
      note: "Which gaps apply depends on the opportunity and must be validated case by case.",
    },
    structures: {
      eyebrow: "What GovDecision Capital structures",
      title: "From requirements to a finance case.",
      lead: "GovDecision Capital helps structure the finance case and connect qualified situations to partner routes where applicable. It is not direct lending.",
      points: [
        {
          title: "The finance case",
          description:
            "Turn requirements into an estimated working-capital need, guarantee picture, and payment-timing view — drawn from Opportunity Qualification and AI-assisted requirement extraction.",
        },
        {
          title: "Finance-readiness notes",
          description:
            "Capture guarantees, bonds, and cash-flow assumptions as finance-readiness notes inside the Readiness Workspace and Deal Room.",
        },
        {
          title: "The timing map",
          description:
            "Lay out when costs land versus when payment arrives, so milestone invoicing and receivables delay are visible well before award.",
        },
        {
          title: "The partner-route brief",
          description:
            "Summarize which partner funding routes may be relevant, so a funding conversation starts from a structured case — not a blank page.",
        },
      ],
    },
    routes: {
      eyebrow: "Partner funding routes",
      title: "Routes to evaluate — not a loan.",
      lead: "When a situation is serious, GovDecision Capital can point to the partner funding routes that may be relevant. Whether any applies depends on the opportunity.",
      items: [
        "Working capital",
        "Factoring / receivables anticipation",
        "Export finance",
        "Trade finance",
        "FX / cross-border payment partners",
        "Surety / performance bond partners",
        "Local partner financing",
        "Bank or fintech partner route",
      ],
      note: "These are potential partner routes to evaluate. Which may be relevant depends on the opportunity and must be validated — GovDecision Capital is not a lender and does not provide financing.",
    },
    beforeAfter: {
      eyebrow: "Before & after award",
      title: "Finance-readiness across the pursuit.",
      lead: "Capital readiness is useful twice: to make a clear-eyed decision before award, and to execute without surprises after it.",
      beforeLabel: "Before award",
      beforePoints: [
        "Estimate the working-capital need implied by the opportunity.",
        "Flag bid bonds and performance-guarantee requirements early.",
        "Map payment timing against production and delivery costs.",
        "Note FX, import, and tax-timing exposure for cross-border work.",
        "Fold the finance picture into the Go/No-Go memo.",
      ],
      afterLabel: "After award",
      afterPoints: [
        "Organize the finance-readiness case for partner funding routes.",
        "Track guarantees, milestones, and invoicing in Post-Award Enablement.",
        "Surface receivables-delay and working-capital coverage as delivery proceeds.",
        "Prepare a structured case to share with finance partners where applicable.",
      ],
    },
    mockup: {
      eyebrow: "Sample output",
      title: "What a finance-readiness read looks like.",
      lead: "A short, structured view of the capital question for a single opportunity — organized, cautious, and built to be validated.",
      windowTitle: "govdecision · Finance Readiness Brief",
      illustrative: "Illustrative",
      briefTitle: "Finance Readiness Brief",
      fields: [
        { label: "Opportunity stage", value: "Pre-award / Post-award" },
        { label: "Estimated working capital gap", value: "Medium" },
        { label: "Payment timing risk", value: "High" },
        { label: "Guarantee requirement", value: "Validate" },
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
