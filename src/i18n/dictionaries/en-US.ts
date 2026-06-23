import type { Dictionary } from "./types";

/**
 * EN-US — the source of truth. These strings mirror the approved English copy
 * exactly, so the default (root) site renders identically to before SITE-008.
 */
export const enUS = {
  common: {
    nav: {
      platform: "Platform",
      marketAccess: "Market Access",
      opportunityBriefs: "Opportunity Briefs",
      marketAccessOverview: "Market Access",
      platformOverview: "Platform Overview",
      partnerNetwork: "Partner Network",
      govDecisionCapital: "GovDecision Capital",
      partners: "Partners",
      capital: "Capital",
      pricing: "Pricing",
      company: "Company",
      contact: "Contact",
      terms: "Terms",
      privacy: "Privacy",
      compliance: "Compliance",
    },
    briefsPromo: {
      eyebrow: "Government opportunity briefs",
      title: "See what real government opportunities look like.",
      lead: "Real-world public-sector demand examples across markets — and why opportunity discovery alone is not enough.",
      cta: "Explore opportunity briefs",
    },
    cta: {
      startReadiness: "Start readiness",
      headerStart: "Start",
      explorePlatform: "Explore the platform",
      viewCorridors: "View corridors",
      viewPricing: "View pricing",
      talkToSax: "Talk to Sax Global",
      seeFullPlatform: "See the full platform",
      allPaths: "All market access paths",
      aboutSax: "About Sax Group",
      talkToTeam: "Talk to the team",
    },
    login: "Log in",
    skipToContent: "Skip to content",
    languageSelector: {
      label: "Select language",
      current: "Current",
    },
    footer: {
      tagline: "Public sector sales intelligence",
      blurb:
        "GovDecision is a Sax Group platform, built in Orlando, Florida. Sax Global supports cross-border market access for suppliers selling to governments.",
      platformHeading: "Platform",
      getStartedHeading: "Get started",
      startReadiness: "Start readiness",
      legalHeading: "Legal",
      whatsappLabel: "WhatsApp Business",
      legalDisclaimer:
        "GovDecision provides decision support, readiness workflows, and market access guidance. It does not guarantee eligibility, qualification, bid submission acceptance, financing, awards, or government contract outcomes.",
      copyright: "A Sax Group platform.",
      madeWith: "Made with",
      inFlorida: "in Florida",
    },
  },

  home: {
    meta: {
      title: "GovDecision — Global Government Business Platform",
      description:
        "GovDecision helps suppliers qualify government opportunities, build readiness, and enter public sector markets with better decisions across countries.",
    },
    eyebrow: "Global Government Business Platform",
    title:
      "Government opportunities are everywhere. The hard part is knowing where to compete.",
    subtitle:
      "GovDecision helps suppliers qualify opportunities, build readiness, and enter public sector markets with better decisions across countries.",
    slogan: "Less Clipping, More Decision",
    strategicLead: "Government sales, with better decisions.",
    strategicRest: "From readiness to award.",
    journey: [
      "Opportunity noise",
      "Decision clarity",
      "Readiness",
      "Route to market",
      "Award execution",
    ],
    problem: {
      eyebrow: "The real problem",
      title: "More opportunities do not create more wins. Better decisions do.",
      lead: "The market is full of bid boards, alerts, portals, PDFs, and fragmented requirements. The real pain is not finding opportunities — it is deciding what is worth pursuing and what must be fixed before you can compete.",
      paragraph:
        "Most suppliers do not lose government business because they never saw the opportunity. They lose because they pursued the wrong one, found a critical requirement too late, or lacked the documents, registrations, or local partner the market demanded.",
      withoutLayer: "Without a decision layer",
      noise: [
        "Tender alert · low fit",
        "Bid board · expired",
        "PDF requirement set",
        "Portal notification",
        "Forwarded email · unclear",
      ],
      decisionTitle: "1 opportunity worth a real decision",
      decisionMeta: "Fit 84 · Readiness 72% · Pursue with conditions",
    },
    capabilities: {
      eyebrow: "What GovDecision does",
      title: "A government business operating system for suppliers.",
      lead: "Six capabilities take you from raw opportunity noise to a defensible decision, an executable readiness plan, and a route to market.",
      cards: [
        {
          title: "Qualify opportunities",
          description:
            "Score fit, complexity, and effort so your team spends time on opportunities you can actually win.",
        },
        {
          title: "Detect blockers",
          description:
            "Surface missing registrations, certificates, guarantees, and partner requirements before deadlines do.",
        },
        {
          title: "Build supplier readiness",
          description:
            "Convert requirements into tracked tasks with owners and dates, and watch readiness climb.",
        },
        {
          title: "Recommend route-to-market",
          description:
            "Direct, distributor, local partner, subcontract, consortium, or prepare first — guided by fit and market.",
        },
        {
          title: "Structure pursuit decisions",
          description:
            "Bring strategy, risk, pricing, and approvals into one decision memo your leadership can stand behind.",
        },
        {
          title: "Prepare after award",
          description:
            "Plan delivery, guarantees, milestones, and finance timing so a win becomes an executed contract.",
        },
      ],
    },
    corridors: {
      eyebrow: "Global corridors",
      title: "A global platform for government business corridors.",
      lead: "Global government business, supported by Sax Global.",
      coverage:
        "Coverage evolves by country pack, source availability, customer needs, and operational validation.",
    },
    ai: {
      eyebrow: "AI-assisted, decision-led",
      title: "AI removes the busywork. People make the call.",
      lead: "GovDecision uses AI to reduce operational waste and support human-calibrated business decisions — never to replace your judgment.",
      cardLabel: "AI assist · executive brief",
      cardLines: [
        "Extracted 14 requirements from 38 pages",
        "3 blockers detected · 1 critical",
        "Deadline parsed · 19 days remaining",
        "Go / no-go: pursue with conditions",
      ],
      points: [
        "Extract requirements from long, fragmented documents",
        "Summarize opportunities into clear briefs",
        "Detect blockers and missing readiness items",
        "Support readiness analysis and go/no-go briefs",
      ],
    },
    sax: {
      eyebrow: "Sax Global support",
      title: "Software structures the process. Sax Global supports the route.",
      lead: "GovDecision is supported by Sax Global, the cross-border business arm of Sax Group. Where it applies, Sax Global can support market access, local partner strategy, business setup context, cross-border execution, and readiness guidance.",
      cards: [
        {
          title: "Market access",
          description: "Practical entry routes by country and corridor.",
        },
        {
          title: "Local partner strategy",
          description: "When to partner, distribute, or go direct.",
        },
        {
          title: "Business setup context",
          description: "What cross-border execution really requires.",
        },
        {
          title: "Readiness guidance",
          description: "Calibrated support to close the gaps.",
        },
      ],
    },
    finalCta: {
      eyebrow: "From readiness to award",
      title: "Become a government-ready supplier.",
      subtitle:
        "Start with readiness. Pursue with method. Expand across public sector markets with better decisions.",
    },
  },

  platform: {
    meta: {
      title: "Platform",
      description:
        "The decision layer for government sales: Supplier Passport, Opportunity Qualification, Readiness Workspace, Country Packs, Deal Room, and Post-Award Enablement.",
    },
    eyebrow: "The platform",
    title: "The decision layer for government sales.",
    lead: "Six connected modules take a supplier from raw opportunity noise to a defensible go/no-go decision, an executable readiness plan, and a route to market — across countries.",
    moduleLabel: "Module",
    modules: [
      {
        name: "Supplier Passport",
        tagline:
          "One structured profile of what your company can actually deliver.",
        description:
          "A living profile of your company that every decision reads from — so fit, blockers, and routes are evaluated against reality, not guesswork.",
        points: [
          "Company data",
          "Products & capabilities",
          "Certifications & documents",
          "Countries & commercial limits",
          "Export readiness",
          "Operational constraints",
        ],
      },
      {
        name: "Opportunity Qualification",
        tagline: "Know what is worth pursuing before you spend a week on it.",
        description:
          "Each opportunity is scored for fit, complexity, and effort, with blockers and critical requirements surfaced early and a clear go/no-go recommendation.",
        points: [
          "Fit score",
          "Complexity score",
          "Effort score",
          "Blocker detection",
          "Deadline extraction",
          "Critical requirements",
          "Go / no-go recommendation",
        ],
      },
      {
        name: "Readiness Workspace",
        tagline: "Turn missing requirements into a plan with owners and dates.",
        description:
          "Document, country, and opportunity checklists become tracked tasks with owners and deadlines, so readiness becomes measurable progress instead of a scramble.",
        points: [
          "Document checklist",
          "Country checklist",
          "Opportunity checklist",
          "Tasks, owners & deadlines",
          "Readiness progress",
        ],
      },
      {
        name: "Country Packs",
        tagline: "The local rules of the game, structured per market.",
        description:
          "Country-specific logic for sources, registration, eligibility, local partners, submission paths, and the operational friction that catches suppliers off guard.",
        points: [
          "Country-specific sources",
          "Registration logic",
          "Eligibility",
          "Local partner requirements",
          "Submission path",
          "Common documents",
          "Operational friction",
          "Currency & language notes",
        ],
      },
      {
        name: "Deal Room",
        tagline: "Where the pursuit decision gets made and approved.",
        description:
          "A decision memo brings strategy, route choice, risks, pricing assumptions, and partner needs into one approval workflow leadership can sign off on.",
        points: [
          "Decision memo",
          "Bid strategy",
          "Route choice",
          "Risks",
          "Pricing assumptions",
          "Partner needs",
          "Approval workflow",
        ],
      },
      {
        name: "Post-Award Enablement",
        tagline: "Winning is the start — execution is where margin is made.",
        description:
          "Delivery readiness, guarantees, milestones, and finance timing are structured before they become problems, so awards turn into executed contracts.",
        points: [
          "Delivery readiness",
          "Guarantees",
          "Milestones",
          "Payment timing",
          "Working capital needs",
          "Finance readiness",
        ],
      },
    ],
    finalCta: {
      title: "See the decision layer on your own opportunities.",
      subtitle:
        "Start with readiness, then qualify real opportunities with method — across every corridor you target.",
      secondaryLabel: "View pricing",
    },
  },

  marketAccess: {
    meta: {
      title: "Market Access Paths — GovDecision",
      description:
        "Choose where your company is based and where you want to sell to governments. GovDecision helps suppliers understand local and cross-border market access paths with better readiness and decisions.",
    },
    hero: {
      eyebrow: "Market access paths",
      title:
        "Find the government markets your company can realistically pursue.",
      subtitle:
        "Choose where your company is based and where you want to sell. GovDecision helps you understand the path, the blockers, the readiness work, and the route to market.",
      slogan:
        "Local or cross-border, government business starts with better decisions.",
      primaryCta: "Start readiness",
      secondaryCta: "Explore paths",
    },
    twoPaths: {
      eyebrow: "Two paths",
      title: "Two ways to enter government business.",
      lead: "Every supplier starts in one of two places: selling at home, or reaching across a border. GovDecision structures both — and Sax Global helps where the journey leaves the software.",
      examplesLabel: "Examples",
      modes: [
        {
          label: "Local government business",
          copy: "Sell to public buyers in your own market with clearer opportunity qualification, document readiness, and pursuit discipline.",
          helpsLabel: "Where GovDecision helps",
          helps: [
            "Find what is worth pursuing",
            "Detect missing documents",
            "Organize readiness",
            "Build go / no-go decisions",
            "Prepare execution after award",
          ],
        },
        {
          label: "Cross-border government business",
          copy: "Evaluate government opportunities in foreign or multilateral markets with country-specific readiness, route-to-market logic, and Sax Global support.",
          helpsLabel: "Where GovDecision + Sax Global help",
          helps: [
            "Market access path",
            "Country pack logic",
            "Local partner strategy",
            "Registration and readiness context",
            "International execution planning",
            "Decision memo before pursuing",
          ],
        },
      ],
    },
    finder: {
      eyebrow: "Path finder",
      title: "Choose your path.",
      lead: "Pick where your company is based and where you want to sell. We will show the path type, what it usually requires, and the right first step.",
    },
    selector: {
      originPrompt: "Where is your company based?",
      targetPrompt: "Where do you want to sell to governments?",
      selectedPath: "Selected path",
      pathType: "Path type",
      requires: "What this usually requires",
      recommendedFirstStepLabel: "Recommended first step",
      recommendedFirstStep: "Start with a GovDecision readiness review.",
      startReadiness: "Start readiness",
      requirements: {
        Local: [
          "opportunity qualification",
          "supplier documentation readiness",
          "go / no-go discipline",
          "execution readiness after award",
        ],
        "Cross-border": [
          "supplier readiness",
          "country-specific requirements",
          "route-to-market validation",
          "local / commercial partner strategy",
          "execution and finance readiness",
        ],
        Multilateral: [
          "supplier registration",
          "international eligibility",
          "documentation readiness",
          "opportunity qualification",
          "decision memo before pursuing",
        ],
        Regional: [
          "regional expansion readiness",
          "country pack validation",
          "local route strategy",
          "readiness assessment",
        ],
      },
    },
    pathTypeLabels: {
      Local: "Local",
      "Cross-border": "Cross-border",
      Multilateral: "Multilateral",
      Regional: "Regional",
    },
    statusLabels: {
      "Active focus": "Active focus",
      "In development": "In development",
      Targeted: "Targeted",
    },
    paths: {
      eyebrow: "Market access paths",
      title: "Paths we are building.",
      lead: "A growing set of local and cross-border paths. Start any of them with a readiness conversation today — detailed path pages are on the way.",
      corridorPrompt:
        "Looking for the full market map? Explore every corridor GovDecision focuses on today.",
      corridorLink: "View corridors",
      cards: {
        "brazil-brazil": {
          title:
            "Sell to Brazilian public buyers with better qualification and readiness.",
          summary:
            "Bring discipline to Brazilian public procurement — from finding what is worth pursuing to organizing the documents and decisions behind each bid.",
          focusAreas: [
            "Official / public opportunity sources",
            "Supplier documentation",
            "Requirement extraction",
            "Go / no-go discipline",
            "Assisted workflows",
          ],
          ctaLabel: "Explore Brazil local path",
        },
        "united-states-united-states": {
          title: "Structure your approach to U.S. government opportunities.",
          summary:
            "Turn the scale of U.S. public procurement into a focused plan — the right registrations, the right categories, the right opportunities.",
          focusAreas: [
            "Federal opportunity landscape",
            "Supplier registration paths",
            "Readiness requirements",
            "Category fit",
            "Pursuit discipline",
          ],
          ctaLabel: "Explore U.S. local path",
        },
        "brazil-united-states": {
          title:
            "Help Brazilian suppliers evaluate a path into U.S. government business.",
          summary:
            "Understand what a credible move into U.S. public sector business takes before you invest — readiness, registration, and route.",
          focusAreas: [
            "Export readiness",
            "Local route strategy",
            "Registration path context",
            "Partner / distributor options",
            "Sax Global support",
          ],
          ctaLabel: "Explore Brazil to U.S. path",
        },
        "brazil-un-world-bank": {
          title:
            "Prepare for multilateral procurement with stronger readiness and documentation.",
          summary:
            "Get registration-ready and documentation-ready for UN and World Bank procurement, then qualify what is worth pursuing.",
          focusAreas: [
            "Supplier registration",
            "International eligibility",
            "Documentation",
            "Opportunity qualification",
            "Decision memo",
          ],
          ctaLabel: "Explore multilateral path",
        },
        "united-states-brazil": {
          title:
            "Evaluate how U.S. suppliers can approach Brazilian public procurement.",
          summary:
            "Read the complexity of Brazilian public procurement clearly, and decide whether to represent, partner, or wait.",
          focusAreas: [
            "Local market complexity",
            "Buyer / source understanding",
            "Representation or partner strategy",
            "Documentation readiness",
            "Sax Global context",
          ],
          ctaLabel: "Explore U.S. to Brazil path",
        },
        "brazil-paraguay": {
          title:
            "Explore regional government business expansion with a structured path.",
          summary:
            "Expand into neighboring public sector markets with a validated country pack and a clear route, not guesswork.",
          focusAreas: [
            "Regional expansion",
            "Country pack validation",
            "Local route strategy",
            "Readiness assessment",
          ],
          ctaLabel: "Explore regional path",
        },
      },
    },
    enters: {
      eyebrow: "Where GovDecision enters",
      title:
        "GovDecision turns market interest into a decision-ready path.",
      lead: "Six steps move a supplier from raw market interest to a decision they can defend — pursue now, or prepare first.",
      note: "Instead of chasing every public opportunity, GovDecision helps suppliers understand what they can realistically pursue, what must be fixed first, and which route makes sense for each market.",
      journey: [
        {
          title: "Supplier profile",
          description:
            "Capture what your company is, sells, and is ready to prove.",
        },
        {
          title: "Market / country logic",
          description:
            "Apply the rules, sources, and requirements of each target market.",
        },
        {
          title: "Opportunity qualification",
          description: "Score fit and filter out what is not worth pursuing.",
        },
        {
          title: "Readiness gaps",
          description:
            "Surface the documents, registrations, and blockers to fix first.",
        },
        {
          title: "Route recommendation",
          description:
            "See whether to go direct, partner, represent, or distribute.",
        },
        {
          title: "Pursuit or prepare-first decision",
          description:
            "Decide to pursue now or prepare first — with the reasons written down.",
        },
      ],
    },
    sax: {
      eyebrow: "Where Sax Global enters",
      title: "Sax Global supports the path beyond the software.",
      lead: "For cross-border paths, software is only part of the journey. Sax Global can support market access planning, international business setup context, partner route discussions, and practical cross-border execution guidance where applicable.",
      cta: "Talk to Sax Global",
      disclaimer:
        "Sax Global provides planning, context, and guidance. It does not guarantee market access, eligibility, partner placement, financing, or contract outcomes.",
      services: [
        {
          title: "Market access planning",
          description:
            "Map a realistic entry approach for the markets you want to pursue.",
        },
        {
          title: "Local partner strategy",
          description:
            "Think through when to partner, represent, distribute, or go direct.",
        },
        {
          title: "International business context",
          description:
            "Understand what cross-border government business typically involves.",
        },
        {
          title: "Cross-border execution readiness",
          description:
            "Prepare the operational groundwork a foreign pursuit can require.",
        },
        {
          title: "Commercial route validation",
          description:
            "Pressure-test the route to market before committing resources.",
        },
      ],
    },
    finalCta: {
      eyebrow: "Start the path",
      title: "Start with the path. Then build the readiness.",
      subtitle:
        "Tell us where your company is based and where you want to sell. We will help you understand the first step.",
      primary: "Start readiness",
      secondary: "Talk to Sax Global",
    },
  },

  pricing: {
    meta: {
      title: "Pricing",
      description:
        "Two ways to work with GovDecision: GovDecision One (platform-led, self-service) and GovDecision Assisted (service-led, with Sax Global support). Brazil (BRL) and international (USD) pricing.",
    },
    eyebrow: "Pricing",
    title: "A premium platform for serious government business.",
    lead: "GovDecision One is platform-led for teams that want structure and speed. GovDecision Assisted is service-led, with Sax Global support to build practical market access. Not a clipping tool — a business growth platform.",
    note: "Pricing may vary by country, corridor, company profile, assisted support level, and active opportunity volume.",
    serviceLedBadge: "Service-led",
    brazilLabel: "Brazil · BRL",
    internationalLabel: "International · USD",
    plans: [
      {
        market: "Platform-led intelligence",
        badge: "Platform-led",
        description:
          "For suppliers that want a structured platform to qualify opportunities, organize readiness, and decide where to compete.",
        features: [
          "Supplier Passport",
          "Opportunity qualification workspace",
          "Readiness checklist",
          "Country pack access",
          "Decision brief templates",
          "Basic pipeline organization",
        ],
        cta: "Start GovDecision One",
        priceBrazil: "R$ 379,00 / month",
        priceInternational: "US$ 99.90 / month",
        noteBrazil: "For Brazil-based suppliers.",
        noteInternational: "For the United States and other supported markets.",
      },
      {
        market: "Service-led market access",
        badge: "With Sax Global",
        description:
          "For suppliers that want Sax Global support to structure readiness, evaluate opportunities, and build practical government business routes.",
        features: [
          "Everything in GovDecision One",
          "Assisted onboarding",
          "Readiness calibration",
          "Opportunity review support",
          "Country corridor guidance",
          "Partner route support",
          "Executive decision memos",
          "Priority Sax Global support",
        ],
        cta: "Talk to Sax Global",
        priceBrazil: "Consult us",
        priceInternational: "Custom USD pricing",
        noteBrazil: "Service-led market access with Sax Global.",
        noteInternational: "Scoped to your corridor, profile, and support level.",
      },
    ],
    compare: {
      eyebrow: "Compare",
      title: "What is included in each plan.",
      lead: "Both plans share the platform. Assisted adds Sax Global support, calibration, and executive guidance.",
      capability: "Capability",
      guided: "Guided",
      rows: [
        "Supplier Passport",
        "Opportunity qualification",
        "Readiness workspace",
        "Country pack access",
        "Decision brief templates",
        "Pipeline organization",
        "Assisted onboarding",
        "Readiness calibration",
        "Opportunity review support",
        "Partner / route guidance",
        "Executive decision memos",
        "Priority Sax Global support",
      ],
      values: {
        Standard: "Standard",
        Guided: "Guided",
        Basic: "Basic",
        Advanced: "Advanced",
      },
    },
    finalCta: {
      eyebrow: "Get started",
      title: "Let's scope the right plan for your company.",
      subtitle:
        "Pricing depends on your country, corridor, profile, and the level of assisted support you need. Tell us where you want to compete.",
      primary: "Talk to Sax Global",
      secondary: "Explore the platform",
    },
  },

  company: {
    meta: {
      title: "Company",
      description:
        "GovDecision is a Sax Group platform, built in Orlando, Florida. Sax Global supports cross-border business development, internationalization, and market access for suppliers selling to governments.",
    },
    eyebrow: "Company",
    title: "Built by Sax Group in Florida for suppliers going global.",
    lead: "GovDecision is a Sax Group platform, created from a simple thesis: suppliers need more than tender alerts. They need readiness, qualification, decision support, and execution structure to win government business across borders.",
    facts: [
      { label: "Owner", value: "Sax Group" },
      { label: "Cross-border arm", value: "Sax Global" },
      { label: "Based in", value: "Orlando, Florida" },
      { label: "Focus", value: "Global public sector sales" },
    ],
    ownership: {
      eyebrow: "Ownership & context",
      title: "A Sax Group platform, supported by Sax Global.",
      lead: "Sax Group is based in Orlando, Florida. Sax Global, its cross-border business arm, supports business development, internationalization, and market access for companies expanding into new countries.",
      p1: "GovDecision sits where software and service meet. The platform structures the decision and readiness process; Sax Global adds practical, human support where market access and cross-border execution demand it.",
      p2: "That combination is deliberate. Public sector sales reward companies that prepare with method and move with confidence — not those who chase every notification.",
    },
    why: {
      eyebrow: "Why we built it",
      title: "Why Sax Group built GovDecision",
      lead: "Public sector sales are fragmented, complex, and hard to navigate across borders. GovDecision exists to help suppliers transform public procurement complexity into commercial clarity.",
      beliefs: [
        {
          title: "Decisions beat alerts",
          description:
            "Suppliers need to know where to compete and where not to — not another feed of low-fit notifications.",
        },
        {
          title: "Readiness is the real work",
          description:
            "Most losses trace back to missing documents, registrations, or partners discovered too late.",
        },
        {
          title: "Route-to-market is strategy",
          description:
            "Direct, distributor, partner, subcontract, consortium, or prepare first — the route changes everything.",
        },
      ],
    },
    madeWith: {
      localLabelSuffix: "Sax Group · Orlando, Florida",
      heading: "Made with",
      inFlorida: "in Florida",
      body: "Less Clipping, More Decision — a platform for companies that want to grow through government business, built with care for the people who use it.",
      cta: "Talk to the team",
    },
    finalCta: {
      title: "Grow your government business with method.",
      subtitle:
        "Start with readiness. Pursue with method. Expand across public sector markets with better decisions.",
      secondary: "Explore the platform",
    },
  },

  contact: {
    meta: {
      title: "Contact",
      description:
        "Start your government readiness conversation with GovDecision. Tell us what you sell and where you want to compete.",
    },
    eyebrow: "Contact",
    title: "Start your government readiness conversation.",
    lead: "Tell us what you sell and where you want to compete. We'll help you decide where to focus, what readiness you need, and which route to market makes sense.",
    aside: [
      {
        title: "Qualify before you commit",
        description:
          "We'll help you see fit, blockers, and effort before you invest a week in the wrong opportunity.",
      },
      {
        title: "Build readiness with method",
        description:
          "Turn missing requirements into a plan with owners and dates across the markets you target.",
      },
      {
        title: "Find your route to market",
        description:
          "Direct, distributor, local partner, subcontract, consortium — or prepare first.",
      },
    ],
    preferEmail: "Prefer email?",
    preferWhatsapp: "Prefer WhatsApp?",
    whatsappLead: "Message us at",
    alreadyCustomer: "Already a customer?",
    loginCta: "Log in to the app",
    disclaimer:
      "GovDecision provides decision support, readiness workflows, and market access guidance. It does not guarantee eligibility, qualification, bid submission acceptance, financing, awards, or government contract outcomes.",
    context: {
      local: "You are asking about a local GovDecision readiness path.",
      cross: "You are asking about a Sax Global market access path.",
      localWithTarget:
        "You are asking about a local GovDecision readiness path: {target}.",
      crossWithPair:
        "You are asking about a Sax Global market access path: {origin} → {target}.",
    },
    form: {
      name: "Name",
      namePlaceholder: "Your full name",
      companyLabel: "Company",
      companyPlaceholder: "Company name",
      email: "Work email",
      emailPlaceholder: "you@company.com",
      country: "Country",
      countryPlaceholder: "Where you are based",
      markets: "Target markets",
      marketsPlaceholder: "e.g. United States, Brazil, UN & World Bank",
      message: "Message",
      messagePlaceholder: "What do you sell, and where do you want to compete?",
      submit: "Request a GovDecision readiness conversation",
      submitting: "Sending…",
      consent:
        "By reaching out you agree to be contacted about your readiness conversation. No spam.",
      successTitle: "Request received.",
      successBody:
        "Thanks — your request was received. We will follow up shortly.",
      sendAnother: "Send another request",
      errorMessage:
        "We could not send your request right now. Please try again or email contact@govdecision.com.",
    },
  },

  corridors: {
    meta: {
      title: "Corridors",
      description:
        "Government business corridors, structured by country: the United States, Brazil, Paraguay, Mexico, Canada, selected African markets, plus UN and World Bank.",
    },
    eyebrow: "Global corridors",
    title: "Government business corridors, structured by country.",
    lead: "GovDecision combines a global decision engine with country-specific packs for market access, readiness, sources, registration, documents, and routes to market.",
    globalLine: "Global government business, supported by Sax Global.",
    coverage:
      "Coverage evolves by country pack, source availability, customer needs, and operational validation.",
    legend: {
      active: "Active focus",
      inDev: "In development",
      multilateral: "Multilateral",
      hub: "Sax Global hub",
    },
    combinesEyebrow: "How it works",
    combinesTitle: "A global decision engine, grounded in country reality.",
    combinesLead:
      "GovDecision pairs one decision logic with country-specific packs, so a recommendation reflects both global method and local rules.",
    combines: [
      "Global decision logic",
      "Country-specific packs",
      "Official / public opportunity sources where available",
      "Supplier readiness workflows",
      "Route-to-market strategy",
      "Sax Global support for cross-border access",
    ],
    marketsEyebrow: "Markets",
    marketsTitle: "Where GovDecision focuses today.",
    marketsLead:
      "Each corridor combines sources, registration logic, readiness requirements, and route-to-market guidance.",
    coverageNote:
      "Coverage is built progressively through country packs, operational validation, source availability, and customer demand.",
    corridorById: {
      us: {
        name: "United States",
        summary:
          "Federal opportunities, supplier registration paths, and commercial route strategy for the world's largest public buyer.",
        focus: [
          "Federal opportunities",
          "Supplier registration paths",
          "Readiness requirements",
          "Local / commercial route strategy",
        ],
      },
      brazil: {
        name: "Brazil",
        summary:
          "Public procurement opportunities with official sources, documentation, and assisted readiness workflows.",
        focus: [
          "Public procurement opportunities",
          "Official sources",
          "Supplier readiness",
          "Documentation",
          "Assisted workflows",
        ],
      },
      paraguay: {
        name: "Paraguay",
        summary:
          "Regional expansion corridor with country pack development and local route validation.",
        focus: [
          "Regional expansion",
          "Country pack development",
          "Local route validation",
        ],
      },
      mexico: {
        name: "Mexico",
        summary:
          "Market access and supplier preparation with route-to-market validation.",
        focus: [
          "Market access",
          "Supplier preparation",
          "Route-to-market validation",
        ],
      },
      canada: {
        name: "Canada",
        summary:
          "Federal opportunities and supplier readiness with an evolving country pack.",
        focus: [
          "Federal opportunities",
          "Supplier readiness",
          "Country pack evolution",
        ],
      },
      africa: {
        name: "Selected African markets",
        summary:
          "Public sector and development-driven opportunities, validated country by country with local partner logic.",
        focus: [
          "Public sector & development-driven opportunities",
          "Country-by-country validation",
          "Local partner logic",
        ],
      },
      multilateral: {
        name: "UN & World Bank",
        summary:
          "Multilateral procurement with supplier registration, international eligibility, readiness, and documentation.",
        focus: [
          "Multilateral procurement",
          "Supplier registration",
          "International eligibility",
          "Readiness & documentation",
        ],
      },
    },
    statusLabels: {
      "Active focus": "Active focus",
      "In development": "In development",
      Targeted: "Targeted",
      Multilateral: "Multilateral",
    },
    finalCta: {
      title: "Plan your route into a new market.",
      subtitle:
        "Tell us where you want to compete. We will help you decide what readiness and route make sense.",
      primary: "Start readiness",
      secondary: "Explore the platform",
    },
  },

  experiments: {
    homeHeroCta: {
      control: "Start",
      variantA: "Start readiness",
      variantB: "See your path",
    },
    marketAccessCta: {
      control: "Explore Market Access",
      variantA: "Choose your market path",
      variantB: "Find where to compete",
    },
    pricingAssistedCta: {
      control: "Request assisted pricing",
      variantA: "Talk to Sax Global",
      variantB: "Plan market access",
    },
    briefsCta: {
      control: "Read brief",
      variantA: "See readiness lessons",
      variantB: "Analyze this opportunity",
    },
    contactIntent: {
      nextSteps: {
        title: "What happens next",
        steps: [
          "We review your company, path and target market.",
          "We identify whether this is a GovDecision readiness or Sax Global market access request.",
          "We follow up with the next practical step.",
        ],
      },
      trust: {
        title: "No generic sales pitch.",
        body: "Your request is routed by path and intent: local readiness, cross-border market access, multilateral, regional or general.",
      },
    },
  },
} satisfies Dictionary;

export default enUS;
