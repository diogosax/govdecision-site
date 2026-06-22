import type { IconName } from "@/components/ui/Icon";
import { site } from "@/data/site";

/**
 * Market Access Destination Pages — data foundation (SITE-003).
 *
 * Each entry powers a rich `/market-access/[slug]` briefing page that helps a
 * supplier understand what selling to a specific government market involves:
 * readiness, route, and a structured plan.
 *
 * Content rules baked into this file:
 *   - No invented numbers. Every market figure carries a source + year.
 *   - Where a reliable figure is not available, the metric says
 *     "Pending validation" or is framed as an estimate with its source.
 *   - Requirements are written with nuance ("Depends", "Validate") because
 *     they vary by buyer, category, procurement method, and opportunity.
 *
 * Local pages send users toward GovDecision (start readiness). Cross-border
 * and multilateral pages add Sax Global as a market-access support layer.
 */

/* ------------------------------------------------------------------- Types */

export type DestinationPathType =
  | "local"
  | "cross-border"
  | "multilateral"
  | "regional";

export type DestinationStatus = "active-focus" | "in-development" | "targeted";

/** Nuanced checklist status — never a universal claim. */
export type ChecklistStatus =
  | "usually-needed"
  | "depends"
  | "validate"
  | "not-usually-required";

export type SourceNote = {
  label: string;
  url: string;
  year?: string;
};

export type MarketMetric = {
  label: string;
  value: string;
  /** Small qualifier shown under the value, e.g. "Estimate" or a source year. */
  note?: string;
  icon: IconName;
};

export type ChecklistItem = {
  item: string;
  status: ChecklistStatus;
  description: string;
};

export type ContactLink = { label: string; href: string };

/** Values shown inside the "GovDecision Readiness Console" sample mockup. */
export type ReadinessConsole = {
  supplierPassport: number;
  marketFit: number;
  criticalBlockers: number;
  recommendedRoute: string;
  decision: string;
};

/** Values shown inside the two Sax Global sample report mockups. */
export type SaxGlobalReport = {
  emphasis: "primary" | "secondary";
  intro: string;
  score: {
    attractiveness: number;
    readinessGap: string;
    routeComplexity: string;
    partnerDependency: string;
    executionRisk: string;
    firstMove: string;
  };
  businessPlan: string[];
  role: string[];
};

export type DestinationPage = {
  slug: string;
  originCountry: string;
  targetMarket: string;
  pathType: DestinationPathType;
  status: DestinationStatus;

  heroEyebrow: string;
  heroTitle: string;
  heroSubtitle: string;

  /** Shown on the hero "Market Access Brief" mockup. */
  readinessPriority: string;
  firstStep: string;

  metaTitle: string;
  metaDescription: string;

  marketSnapshot: {
    metrics: MarketMetric[];
    sourceNotes: SourceNote[];
  };

  /** "Why this market matters" — short, business-oriented. */
  marketOverview: string;
  whyItMatters: string[];

  basicChecklist: ChecklistItem[];
  commonBlockers: string[];
  routeOptions: string[];

  /** "Where GovDecision becomes critical" bullets, market-specific wording. */
  govDecisionRole: string[];
  readinessConsole: ReadinessConsole;

  saxGlobal: SaxGlobalReport;

  cta: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primary: ContactLink;
    secondary: ContactLink;
  };
};

/* -------------------------------------------------- Presentation tokens */

export const destinationPathTypeLabel: Record<DestinationPathType, string> = {
  local: "Local",
  "cross-border": "Cross-border",
  multilateral: "Multilateral",
  regional: "Regional",
};

export const destinationPathTypeIcon: Record<DestinationPathType, IconName> = {
  local: "target",
  "cross-border": "route",
  multilateral: "globe",
  regional: "compass",
};

export const destinationStatusLabel: Record<DestinationStatus, string> = {
  "active-focus": "Active focus",
  "in-development": "In development",
  targeted: "Targeted",
};

export const checklistStatusMeta: Record<
  ChecklistStatus,
  { label: string; chip: string; dot: string }
> = {
  "usually-needed": {
    label: "Usually needed",
    chip: "bg-coral/10 text-coral-600",
    dot: "bg-coral",
  },
  depends: {
    label: "Depends",
    chip: "bg-amber-50 text-amber-700",
    dot: "bg-amber-500",
  },
  validate: {
    label: "Validate",
    chip: "bg-plum/8 text-plum",
    dot: "bg-plum",
  },
  "not-usually-required": {
    label: "Not usually required",
    chip: "bg-emerald-50 text-emerald-700",
    dot: "bg-emerald-500",
  },
};

/** Shown once, as a legend above each readiness checklist. */
export const checklistStatusOrder: ChecklistStatus[] = [
  "usually-needed",
  "depends",
  "validate",
  "not-usually-required",
];

/* ----------------------------------------------------- Shared guardrail copy */

export const aiAssistNote =
  "AI-assisted analysis helps extract requirements, detect blockers, summarize opportunity logic, and prepare executive decision briefs — while the workflow keeps every decision structured and auditable. Requirements vary by buyer, category, procurement method, and opportunity, so validate before pursuing.";

export const saxGlobalDisclaimer =
  "Sax Global provides planning, context, and guidance. It does not guarantee market access, eligibility, registration approval, partner placement, financing, or contract outcomes. Sample figures are illustrative.";

const businessPlanSnapshot = [
  "Market entry hypothesis",
  "Required registrations",
  "Product / category fit",
  "Route-to-market options",
  "Partner / distributor assumptions",
  "First 90-day readiness plan",
  "Execution and funding considerations",
];

/* ------------------------------------------------------------ Destinations */

export const destinations: DestinationPage[] = [
  /* ------------------------------------------------------- Brazil (local) */
  {
    slug: "brazil",
    originCountry: "Brazil",
    targetMarket: "Brazil",
    pathType: "local",
    status: "active-focus",

    heroEyebrow: "Local market · Brazil",
    heroTitle: "Brazil government business, with better decisions.",
    heroSubtitle:
      "Brazil has one of the largest public procurement environments in the world — across federal, state, municipal, state-owned, and social-service buyers. The hard part is deciding what is worth pursuing and organizing readiness before deadlines.",

    readinessPriority: "Registration + bid discipline",
    firstStep: "Supplier Passport + opportunity qualification",

    metaTitle: "Brazil Government Business — GovDecision",
    metaDescription:
      "Learn how suppliers can approach Brazilian public procurement with better opportunity qualification, readiness, and decision workflows.",

    marketSnapshot: {
      metrics: [
        {
          label: "Population",
          value: "≈ 212 million",
          note: "World Bank · 2024",
          icon: "globe",
        },
        {
          label: "GDP",
          value: "≈ US$2.18 trillion",
          note: "World Bank · 2024",
          icon: "layers",
        },
        {
          label: "Public procurement",
          value: "≈ 12–14% of GDP",
          note: "Estimate · OECD context",
          icon: "checklist",
        },
        {
          label: "Currency",
          value: "Brazilian real (BRL)",
          icon: "award",
        },
        {
          label: "Main language",
          value: "Portuguese",
          icon: "flag",
        },
        {
          label: "Procurement access",
          value: "PNCP · Compras.gov.br",
          note: "Federal + national portal",
          icon: "route",
        },
      ],
      sourceNotes: [
        {
          label: "World Bank — Population, Brazil",
          url: "https://data.worldbank.org/indicator/SP.POP.TOTL?locations=BR",
          year: "2024",
        },
        {
          label: "World Bank — GDP (current US$), Brazil",
          url: "https://data.worldbank.org/indicator/NY.GDP.MKTP.CD?locations=BR",
          year: "2024",
        },
        {
          label: "OECD — Government at a Glance, Size of public procurement",
          url: "https://www.oecd.org/en/publications/government-at-a-glance-2025_0efd0bcd-en/full-report/size-of-public-procurement_6979cd47.html",
          year: "2025",
        },
        {
          label: "PNCP — Portal Nacional de Contratações Públicas",
          url: "https://pncp.gov.br/",
        },
        {
          label: "Compras.gov.br — Federal procurement portal",
          url: "https://www.gov.br/compras/pt-br",
        },
      ],
    },

    marketOverview:
      "Brazilian public procurement is large and continuous, but fragmented across buyer levels and procurement methods. For a supplier, the opportunity is real — and so is the noise. The discipline that wins is qualifying what is worth pursuing, then organizing the documents and decisions behind each bid before the deadline forces a rushed one.",
    whyItMatters: [
      "Federal, state, municipal, state-owned, and social-service buyers each follow their own rhythms and rules.",
      "Fiscal regularity and habilitation documents must stay current, not be assembled at the last minute.",
      "The advantage is bid / no-bid discipline — pursuing fewer, better-fit opportunities with full readiness.",
    ],

    basicChecklist: [
      {
        item: "Supplier profile",
        status: "usually-needed",
        description:
          "A clear, structured profile of what your company sells and can prove.",
      },
      {
        item: "Company & fiscal registration (CNPJ, regularity)",
        status: "usually-needed",
        description:
          "Active CNPJ and current proof of fiscal, labor, and social-security regularity.",
      },
      {
        item: "Procurement portal registration (SICAF / PNCP)",
        status: "usually-needed",
        description:
          "SICAF is standard for federal buyers, with portal accounts that vary by buyer level.",
      },
      {
        item: "Category / object fit",
        status: "usually-needed",
        description:
          "Confirm your products map to the bid object and its required technical specs.",
      },
      {
        item: "Technical & habilitation documents",
        status: "usually-needed",
        description:
          "Capability attestations and qualification documents required by each edital.",
      },
      {
        item: "Sector / product certifications",
        status: "depends",
        description:
          "Whether specific certifications apply depends on the object and buyer rules.",
      },
      {
        item: "Guarantee / bid bond (garantia)",
        status: "depends",
        description:
          "Some editais require bid or performance guarantees; validate per opportunity.",
      },
      {
        item: "Local entity",
        status: "not-usually-required",
        description:
          "Domestic suppliers already operate as a Brazilian legal entity.",
      },
      {
        item: "Execution & delivery readiness",
        status: "usually-needed",
        description:
          "Plan capacity, delivery, and post-award obligations before you bid.",
      },
    ],
    commonBlockers: [
      "Seeing the opportunity too late to prepare",
      "Missing or expired fiscal regularity certificates",
      "Incomplete SICAF or portal registration",
      "Habilitation documents that don't match the edital",
      "Guarantee or working-capital gaps",
      "No bid / no-bid discipline",
      "Underestimating post-award execution",
    ],
    routeOptions: [
      "Direct bidding as a Brazilian supplier",
      "Consortium for larger objects",
      "Supplying or subcontracting to prime bidders",
    ],

    govDecisionRole: [
      "Supplier Passport turns scattered company data into one structured profile.",
      "Opportunity Qualification scores fit and filters out what is not worth pursuing.",
      "AI-assisted requirement extraction reads the edital and surfaces what it demands.",
      "Blocker detection flags missing registrations, documents, or certificates early.",
      "The Readiness Workspace turns gaps into owners and dates before the deadline.",
      "A go / no-go decision memo records why you pursued — or chose to prepare first.",
    ],
    readinessConsole: {
      supplierPassport: 82,
      marketFit: 80,
      criticalBlockers: 2,
      recommendedRoute: "Direct bid + readiness",
      decision: "Pursue with conditions",
    },

    saxGlobal: {
      emphasis: "secondary",
      intro:
        "For a local Brazilian path, GovDecision carries most of the work. Sax Global is optional here — useful mainly for structuring an entity, organizing a growth plan, or pressure-testing a larger pursuit.",
      score: {
        attractiveness: 80,
        readinessGap: "Medium",
        routeComplexity: "Low–Medium",
        partnerDependency: "Low",
        executionRisk: "Medium",
        firstMove: "Tighten registration + bid discipline",
      },
      businessPlan: businessPlanSnapshot,
      role: [
        "Business setup and structuring context where it helps",
        "Growth planning for a larger public-sector pursuit",
        "Optional review of a high-value bid decision",
      ],
    },

    cta: {
      eyebrow: "Start readiness",
      title: "Start your government readiness in this market.",
      subtitle:
        "Build your Supplier Passport, qualify real opportunities, and bring discipline to every Brazilian public bid.",
      primary: {
        label: "Start GovDecision readiness",
        href: "/contact?path=brazil&type=local",
      },
      secondary: { label: "Open GovDecision app", href: site.loginUrl },
    },
  },

  /* ------------------------------------------------ United States (local) */
  {
    slug: "united-states",
    originCountry: "United States",
    targetMarket: "United States",
    pathType: "local",
    status: "active-focus",

    heroEyebrow: "Local market · United States",
    heroTitle: "U.S. government opportunities need more than alerts.",
    heroSubtitle:
      "The U.S. public sector is one of the largest government buying environments in the world. The opportunity is significant — but registration, category fit, buyer rules, and route-to-market choices need structure, not just a feed of notices.",

    readinessPriority: "Registration + category fit",
    firstStep: "Supplier Passport + readiness review",

    metaTitle: "United States Government Business — GovDecision",
    metaDescription:
      "Learn how suppliers can approach U.S. public procurement with better opportunity qualification, registration readiness, and decision workflows.",

    marketSnapshot: {
      metrics: [
        {
          label: "Population",
          value: "≈ 340 million",
          note: "U.S. Census Bureau · 2024",
          icon: "globe",
        },
        {
          label: "GDP",
          value: "≈ US$29.2 trillion",
          note: "U.S. BEA · 2024",
          icon: "layers",
        },
        {
          label: "Federal contract obligations",
          value: "≈ US$755 billion",
          note: "GAO · FY2024",
          icon: "checklist",
        },
        {
          label: "Currency",
          value: "U.S. dollar (USD)",
          icon: "award",
        },
        {
          label: "Main language",
          value: "English",
          icon: "flag",
        },
        {
          label: "Procurement access",
          value: "SAM.gov registration",
          note: "Federal entry point",
          icon: "route",
        },
      ],
      sourceNotes: [
        {
          label: "U.S. Census Bureau — 2024 Population Estimates",
          url: "https://www.census.gov/library/stories/2024/12/population-estimates.html",
          year: "2024",
        },
        {
          label: "U.S. Bureau of Economic Analysis — Gross Domestic Product",
          url: "https://www.bea.gov/data/gdp/gross-domestic-product",
          year: "2024",
        },
        {
          label: "U.S. GAO — Snapshot of Government-Wide Contracting, FY2024",
          url: "https://www.gao.gov/blog/snapshot-government-wide-contracting-fy-2024-interactive-dashboard",
          year: "FY2024",
        },
        {
          label: "SAM.gov — Federal registration & opportunities",
          url: "https://sam.gov/",
        },
        {
          label: "USAspending.gov — Federal spending data",
          url: "https://www.usaspending.gov/",
        },
      ],
    },

    marketOverview:
      "U.S. public sector buying is vast, but it rewards suppliers who are registered, positioned in the right categories, and disciplined about which opportunities they pursue. Federal contract obligations alone run in the hundreds of billions each year — state, local, and education add far more. Structure beats volume of alerts.",
    whyItMatters: [
      "A valid SAM.gov registration and Unique Entity ID are the front door to federal awards.",
      "Category positioning (NAICS / PSC) and past performance shape which opportunities you can realistically win.",
      "Set-aside and compliance rules vary by buyer — they need to be read, not assumed.",
    ],

    basicChecklist: [
      {
        item: "Supplier profile",
        status: "usually-needed",
        description:
          "A clear capability statement of what you sell and can prove.",
      },
      {
        item: "Entity registration (SAM.gov UEI)",
        status: "usually-needed",
        description:
          "An active SAM.gov registration with a Unique Entity ID is required to receive federal awards.",
      },
      {
        item: "Tax & financial readiness",
        status: "usually-needed",
        description:
          "Tax ID, financial records, and accounting that can withstand review.",
      },
      {
        item: "Category fit (NAICS / PSC)",
        status: "usually-needed",
        description:
          "Map your offering to the right codes and confirm real buyer demand.",
      },
      {
        item: "Certifications & set-aside status",
        status: "depends",
        description:
          "Small-business or socioeconomic set-aside eligibility depends on your company; validate it.",
      },
      {
        item: "Technical docs & past performance",
        status: "usually-needed",
        description:
          "A capability statement and past-performance evidence strengthen competitive bids.",
      },
      {
        item: "Compliance (FAR representations)",
        status: "usually-needed",
        description:
          "Federal representations and certifications must be completed and kept current.",
      },
      {
        item: "Bonding / guarantees",
        status: "depends",
        description:
          "Bid, performance, or payment bonds depend on contract type and size.",
      },
      {
        item: "Local entity",
        status: "not-usually-required",
        description:
          "Domestic suppliers already hold a U.S. entity; foreign entry differs.",
      },
      {
        item: "Execution & delivery readiness",
        status: "usually-needed",
        description:
          "Plan delivery, staffing, and post-award compliance before pursuing.",
      },
    ],
    commonBlockers: [
      "Seeing the opportunity too late",
      "No active SAM.gov registration",
      "Wrong or missing NAICS / PSC positioning",
      "Thin or missing past performance",
      "Representations and compliance not kept current",
      "Bonding or working-capital gaps",
      "Unclear route to market for the buyer",
    ],
    routeOptions: [
      "Direct bidding as a registered entity",
      "Teaming or subcontracting with a prime",
      "Reseller / channel where it fits",
      "Set-aside eligibility where applicable",
    ],

    govDecisionRole: [
      "Supplier Passport consolidates your profile, codes, and past performance.",
      "Country Packs apply U.S. registration paths, buyer rules, and eligibility logic.",
      "Opportunity Qualification scores fit so you pursue the right NAICS / PSC demand.",
      "AI-assisted requirement extraction reads solicitations and surfaces obligations.",
      "Blocker detection flags registration, compliance, and bonding gaps early.",
      "A go / no-go memo and Deal Room keep the decision structured and auditable.",
    ],
    readinessConsole: {
      supplierPassport: 76,
      marketFit: 84,
      criticalBlockers: 3,
      recommendedRoute: "Register + prepare",
      decision: "Prepare, then pursue",
    },

    saxGlobal: {
      emphasis: "secondary",
      intro:
        "For a domestic U.S. path, GovDecision carries the readiness work. Sax Global is optional here — useful for structuring growth, channel strategy, or a larger expansion plan.",
      score: {
        attractiveness: 85,
        readinessGap: "Medium",
        routeComplexity: "Medium",
        partnerDependency: "Low–Medium",
        executionRisk: "Medium",
        firstMove: "Confirm registration + category fit",
      },
      businessPlan: businessPlanSnapshot,
      role: [
        "Growth and channel planning for public-sector expansion",
        "Structuring context for larger pursuits",
        "Optional review of a high-value bid decision",
      ],
    },

    cta: {
      eyebrow: "Start readiness",
      title: "Start your government readiness in this market.",
      subtitle:
        "Build your Supplier Passport, confirm registration, and qualify the U.S. opportunities worth pursuing.",
      primary: {
        label: "Start GovDecision readiness",
        href: "/contact?path=united-states&type=local",
      },
      secondary: { label: "Open GovDecision app", href: site.loginUrl },
    },
  },

  /* ------------------------------------ Brazil → United States (cross-border) */
  {
    slug: "brazil-to-united-states",
    originCountry: "Brazil",
    targetMarket: "United States",
    pathType: "cross-border",
    status: "active-focus",

    heroEyebrow: "Cross-border path · Brazil → United States",
    heroTitle:
      "A practical path for Brazilian suppliers entering U.S. government business.",
    heroSubtitle:
      "U.S. government business can be attractive for Brazilian suppliers — but cross-border readiness matters. Registration path, local route, documentation, export capability, delivery assumptions, and support structure all need to be understood before you pursue.",

    readinessPriority: "Registration + route validation",
    firstStep: "Supplier Passport + Sax Global review",

    metaTitle: "Brazil to United States Government Business — GovDecision",
    metaDescription:
      "Explore how Brazilian suppliers can evaluate a path into U.S. government business with GovDecision readiness workflows and Sax Global market access support.",

    marketSnapshot: {
      metrics: [
        {
          label: "Target population",
          value: "≈ 340 million",
          note: "U.S. Census Bureau · 2024",
          icon: "globe",
        },
        {
          label: "Target GDP",
          value: "≈ US$29.2 trillion",
          note: "U.S. BEA · 2024",
          icon: "layers",
        },
        {
          label: "Federal contract obligations",
          value: "≈ US$755 billion",
          note: "GAO · FY2024",
          icon: "checklist",
        },
        {
          label: "Currency",
          value: "U.S. dollar (USD)",
          icon: "award",
        },
        {
          label: "Working language",
          value: "English",
          icon: "flag",
        },
        {
          label: "Market type",
          value: "Cross-border entry",
          note: "Registration + route",
          icon: "route",
        },
      ],
      sourceNotes: [
        {
          label: "U.S. Census Bureau — 2024 Population Estimates",
          url: "https://www.census.gov/library/stories/2024/12/population-estimates.html",
          year: "2024",
        },
        {
          label: "U.S. Bureau of Economic Analysis — Gross Domestic Product",
          url: "https://www.bea.gov/data/gdp/gross-domestic-product",
          year: "2024",
        },
        {
          label: "U.S. GAO — Snapshot of Government-Wide Contracting, FY2024",
          url: "https://www.gao.gov/blog/snapshot-government-wide-contracting-fy-2024-interactive-dashboard",
          year: "FY2024",
        },
        {
          label: "SAM.gov — Federal registration & opportunities",
          url: "https://sam.gov/",
        },
      ],
    },

    marketOverview:
      "The U.S. market is large enough to justify a serious look, but entering it from Brazil is a readiness question before it is a sales question. The realistic path runs through a clear registration approach, a credible route to market, and honest delivery and compliance assumptions — validated before resources are committed.",
    whyItMatters: [
      "Registration into the U.S. system, and how you structure it, shapes everything downstream.",
      "Route to market — direct, representative, distributor, or local entity — depends on the category and buyer.",
      "Documentation, standards, and delivery terms usually need localization, not just translation.",
    ],

    basicChecklist: [
      {
        item: "Supplier profile & export readiness",
        status: "usually-needed",
        description:
          "A structured profile plus an honest view of your export and delivery capability.",
      },
      {
        item: "U.S. registration path (SAM.gov UEI)",
        status: "usually-needed",
        description:
          "A SAM.gov registration is required to receive federal awards; how you register depends on your structure.",
      },
      {
        item: "Local company requirement",
        status: "depends",
        description:
          "Whether a U.S. entity is needed depends on the buyer, category, and procurement method — validate by opportunity.",
      },
      {
        item: "Local representative / distributor / partner",
        status: "depends",
        description:
          "Often useful, and sometimes effectively required by the route or buyer context.",
      },
      {
        item: "Local stock / delivery capacity",
        status: "depends",
        description:
          "Depends on the product, delivery terms, and lead-time expectations.",
      },
      {
        item: "Local production / content requirement",
        status: "validate",
        description:
          "Domestic-content rules are not universal; validate buyer and category rules before assuming.",
      },
      {
        item: "Tax, banking & payment readiness",
        status: "usually-needed",
        description:
          "Cross-border invoicing, banking, and payment terms have to be worked out in advance.",
      },
      {
        item: "Document localization / translation",
        status: "usually-needed",
        description:
          "Documents typically need English and U.S.-format adaptation, not just a translation.",
      },
      {
        item: "Standards & certifications",
        status: "depends",
        description:
          "U.S. standards or certifications may apply depending on the category.",
      },
      {
        item: "Compliance (FAR representations)",
        status: "usually-needed",
        description:
          "Federal representations and certifications must be completed and kept current.",
      },
      {
        item: "Guarantee / bonding",
        status: "depends",
        description:
          "Bid, performance, or payment bonds depend on contract type and size.",
      },
      {
        item: "Execution & post-award obligations",
        status: "usually-needed",
        description:
          "Plan delivery, support, and compliance obligations before you pursue.",
      },
    ],
    commonBlockers: [
      "Seeing the opportunity too late",
      "Unclear registration path into the U.S. system",
      "Local partner or representation uncertainty",
      "Document translation and U.S. localization gaps",
      "Stock, lead-time, and delivery assumptions",
      "Guarantee or working-capital gaps",
      "Not understanding execution and compliance obligations",
    ],
    routeOptions: [
      "Direct bidding once registered",
      "Local representative or distributor",
      "U.S. subsidiary or branch",
      "Teaming or subcontract with a U.S. prime",
      "Prepare first, then enter",
    ],

    govDecisionRole: [
      "Supplier Passport captures export readiness and what you can credibly deliver.",
      "Country Packs apply U.S. registration paths, buyer rules, and route logic.",
      "AI-assisted requirement extraction surfaces obligations hidden in solicitations.",
      "Blocker detection flags registration, localization, and delivery gaps before they cost you.",
      "Fit and readiness scoring shows whether to pursue now or prepare first.",
      "A go / no-go memo and Deal Room keep a cross-border decision auditable.",
    ],
    readinessConsole: {
      supplierPassport: 78,
      marketFit: 84,
      criticalBlockers: 3,
      recommendedRoute: "Prepare + partner validation",
      decision: "Pursue with conditions",
    },

    saxGlobal: {
      emphasis: "primary",
      intro:
        "Cross-border entry is where software meets the real world. Sax Global supports the market-access journey — registration-path strategy, route-to-market and partner discussions, business-setup context, and practical execution guidance where it applies.",
      score: {
        attractiveness: 82,
        readinessGap: "Medium",
        routeComplexity: "High",
        partnerDependency: "Medium",
        executionRisk: "Medium",
        firstMove: "Validate registration path + local route",
      },
      businessPlan: businessPlanSnapshot,
      role: [
        "Registration-path and entry strategy for the U.S. system",
        "Route-to-market and partner / distributor discussions",
        "Business-setup context for a U.S. presence where it applies",
        "Practical cross-border execution and funding guidance",
      ],
    },

    cta: {
      eyebrow: "Plan the path",
      title: "Plan this market entry path with Sax Global.",
      subtitle:
        "Validate the registration path, route to market, and readiness gaps before you commit resources to U.S. government business.",
      primary: {
        label: "Talk to Sax Global",
        href: "/contact?path=brazil-to-united-states&type=cross-border",
      },
      secondary: { label: "Explore GovDecision", href: "/platform" },
    },
  },

  /* ----------------------------- Brazil → UN & World Bank (multilateral) */
  {
    slug: "brazil-to-un-world-bank",
    originCountry: "Brazil",
    targetMarket: "UN & World Bank",
    pathType: "multilateral",
    status: "in-development",

    heroEyebrow: "Multilateral path · Brazil → UN & World Bank",
    heroTitle: "Prepare for multilateral procurement with stronger readiness.",
    heroSubtitle:
      "UN agencies and World Bank-financed projects buy a wide range of goods and services worldwide. For a Brazilian supplier, the path starts with registration, eligibility, and documentation — then qualifying which tenders are actually worth pursuing.",

    readinessPriority: "Registration + eligibility",
    firstStep: "Supplier Passport + UNGM registration",

    metaTitle: "Brazil to UN & World Bank Procurement — GovDecision",
    metaDescription:
      "Explore how Brazilian suppliers can prepare for UN and World Bank procurement with GovDecision readiness workflows and Sax Global market access support.",

    marketSnapshot: {
      metrics: [
        {
          label: "UN system procurement",
          value: "≈ US$24.9 billion",
          note: "UNOPS ASR · 2023",
          icon: "globe",
        },
        {
          label: "Reporting UN organizations",
          value: "32 organizations",
          note: "UNOPS ASR · 2023",
          icon: "layers",
        },
        {
          label: "World Bank-financed contracts",
          value: "≈ US$15 billion / year",
          note: "GAO · FY2013–2022 avg.",
          icon: "checklist",
        },
        {
          label: "Common currency",
          value: "U.S. dollar (USD)",
          icon: "award",
        },
        {
          label: "Working languages",
          value: "English +",
          note: "UN working languages",
          icon: "flag",
        },
        {
          label: "Registration access",
          value: "UNGM · World Bank projects",
          icon: "route",
        },
      ],
      sourceNotes: [
        {
          label: "UNOPS / UNGM — Annual Statistical Report on UN Procurement",
          url: "https://www.ungm.org/public/asr",
          year: "2023",
        },
        {
          label: "U.S. GAO — World Bank borrower-country contracts (GAO-23-105543)",
          url: "https://www.gao.gov/products/gao-23-105543",
          year: "2023",
        },
        {
          label: "UNGM — United Nations Global Marketplace (registration)",
          url: "https://www.ungm.org/",
        },
        {
          label: "World Bank — Project procurement for suppliers",
          url: "https://www.worldbank.org/ext/en/what-we-do/project-procurement/for-suppliers",
        },
      ],
    },

    marketOverview:
      "Multilateral procurement is a different game from local public buying. UN agencies and World Bank-financed projects run structured, eligibility-driven processes with their own registration systems, integrity rules, and category codes. The readiness work — registration, eligibility screening, documentation — comes first, and qualifying the right tenders comes next.",
    whyItMatters: [
      "Registration runs through systems like UNGM, while World Bank tenders are run by borrower governments under Bank rules.",
      "Eligibility, integrity, and anti-fraud requirements are strict and screened, not waived.",
      "Category and standards expectations differ by agency and tender — they must be validated, not assumed.",
    ],

    basicChecklist: [
      {
        item: "Supplier profile & eligibility",
        status: "usually-needed",
        description:
          "A structured profile plus a clear view of your eligibility for multilateral tenders.",
      },
      {
        item: "UNGM registration",
        status: "usually-needed",
        description:
          "Registration on the United Nations Global Marketplace opens access to many UN agencies.",
      },
      {
        item: "World Bank project supplier readiness",
        status: "depends",
        description:
          "Bank-financed tenders are run by borrower governments under Bank rules; the process varies by project.",
      },
      {
        item: "Eligibility & exclusion screening",
        status: "usually-needed",
        description:
          "Confirm you are not on sanctions / exclusion lists and that you meet the eligibility criteria.",
      },
      {
        item: "Category fit (UNSPSC)",
        status: "usually-needed",
        description:
          "Map your offering to the UNSPSC codes used across UN tenders.",
      },
      {
        item: "Documentation & financial standing",
        status: "usually-needed",
        description:
          "Financial records and qualification documents required by the tender.",
      },
      {
        item: "Certifications / standards",
        status: "depends",
        description:
          "Quality, sustainability, or sector certifications may strengthen or be required per tender.",
      },
      {
        item: "Local presence / delivery capacity",
        status: "depends",
        description:
          "Depends on where goods or services are delivered and the Incoterms used.",
      },
      {
        item: "Language / document readiness",
        status: "usually-needed",
        description:
          "English is common; some tenders use other UN working languages.",
      },
      {
        item: "Performance guarantees",
        status: "depends",
        description:
          "Bid or performance guarantees depend on the tender and contract value.",
      },
      {
        item: "Ethics / anti-fraud compliance",
        status: "usually-needed",
        description:
          "UN and World Bank apply strict integrity and anti-corruption requirements.",
      },
      {
        item: "Execution & delivery planning",
        status: "usually-needed",
        description:
          "Plan logistics, delivery, and obligations before pursuing a tender.",
      },
    ],
    commonBlockers: [
      "Seeing the tender too late",
      "Incomplete UNGM or supplier registration",
      "Eligibility or exclusion-list issues",
      "Category / UNSPSC mismatch",
      "Underestimating documentation and standards",
      "Delivery, logistics, and Incoterms gaps",
      "Integrity / anti-fraud compliance gaps",
    ],
    routeOptions: [
      "Direct bidding through UNGM tenders",
      "World Bank borrower-led tenders",
      "Local partner or agent in the delivery country",
      "Consortium for larger contracts",
      "Prepare registration first",
    ],

    govDecisionRole: [
      "Supplier Passport organizes your profile, eligibility, and documentation.",
      "Country / market logic applies UN and World Bank registration and eligibility rules.",
      "Opportunity Qualification scores which tenders are worth the effort.",
      "AI-assisted requirement extraction reads tenders and surfaces what they demand.",
      "Blocker detection flags registration, eligibility, and integrity gaps early.",
      "A go / no-go memo records the decision to pursue — or prepare first.",
    ],
    readinessConsole: {
      supplierPassport: 70,
      marketFit: 75,
      criticalBlockers: 4,
      recommendedRoute: "Register + qualify",
      decision: "Prepare first",
    },

    saxGlobal: {
      emphasis: "primary",
      intro:
        "Multilateral access is a structured, eligibility-driven journey. Sax Global supports registration and eligibility strategy, partner and delivery-route discussions, and practical execution context for UN and World Bank-financed work.",
      score: {
        attractiveness: 78,
        readinessGap: "Medium–High",
        routeComplexity: "High",
        partnerDependency: "Medium",
        executionRisk: "Medium–High",
        firstMove: "Validate registration + eligibility",
      },
      businessPlan: businessPlanSnapshot,
      role: [
        "Registration and eligibility strategy for UN and World Bank systems",
        "Partner and delivery-route discussions in the target country",
        "Integrity and documentation context for multilateral tenders",
        "Practical execution and funding guidance where it applies",
      ],
    },

    cta: {
      eyebrow: "Plan the path",
      title: "Plan this multilateral path with Sax Global.",
      subtitle:
        "Get registration-ready and eligibility-ready for UN and World Bank procurement, then qualify the tenders worth pursuing.",
      primary: {
        label: "Talk to Sax Global",
        href: "/contact?path=brazil-to-un-world-bank&type=multilateral",
      },
      secondary: { label: "Explore GovDecision", href: "/platform" },
    },
  },

  /* ------------------------------------ United States → Brazil (cross-border) */
  {
    slug: "united-states-to-brazil",
    originCountry: "United States",
    targetMarket: "Brazil",
    pathType: "cross-border",
    status: "in-development",

    heroEyebrow: "Cross-border market access",
    heroTitle:
      "A practical path for U.S. suppliers approaching Brazilian public procurement.",
    heroSubtitle:
      "Brazil can be a significant public sector market, but foreign suppliers need more than opportunity alerts. GovDecision helps structure the decision, while Sax Global helps evaluate the market access path.",

    readinessPriority: "Local route + documentation validation",
    firstStep: "Market access review + Supplier Passport",

    metaTitle: "United States to Brazil Government Business — GovDecision",
    metaDescription:
      "Explore how U.S. suppliers can evaluate a path into Brazilian public procurement with GovDecision readiness workflows and Sax Global market access support.",

    marketSnapshot: {
      metrics: [
        {
          label: "Target population",
          value: "≈ 212 million",
          note: "World Bank · 2024",
          icon: "globe",
        },
        {
          label: "Target GDP",
          value: "≈ US$2.18 trillion",
          note: "World Bank · 2024",
          icon: "layers",
        },
        {
          label: "Public procurement",
          value: "≈ 12–14% of GDP",
          note: "Estimate · OECD context",
          icon: "checklist",
        },
        {
          label: "Currency",
          value: "Brazilian real (BRL)",
          icon: "award",
        },
        {
          label: "Main language",
          value: "Portuguese",
          icon: "flag",
        },
        {
          label: "Market type",
          value: "Cross-border entry",
          note: "Local route + documentation",
          icon: "route",
        },
      ],
      sourceNotes: [
        {
          label: "World Bank — Population, Brazil",
          url: "https://data.worldbank.org/indicator/SP.POP.TOTL?locations=BR",
          year: "2024",
        },
        {
          label: "World Bank — GDP (current US$), Brazil",
          url: "https://data.worldbank.org/indicator/NY.GDP.MKTP.CD?locations=BR",
          year: "2024",
        },
        {
          label: "OECD — Government at a Glance, Size of public procurement",
          url: "https://www.oecd.org/en/publications/government-at-a-glance-2025_0efd0bcd-en/full-report/size-of-public-procurement_6979cd47.html",
          year: "2025",
        },
        {
          label: "PNCP — Portal Nacional de Contratações Públicas",
          url: "https://pncp.gov.br/",
        },
        {
          label: "Compras.gov.br — Federal procurement portal",
          url: "https://www.gov.br/compras/pt-br",
        },
      ],
    },

    marketOverview:
      "Brazil runs one of the world's largest public procurement environments — federal, state, and municipal buyers, state-owned companies, and autonomous social services (the Sistema S context where it applies) — across a national portal and many buyer-specific ones. For a U.S. supplier the opportunity is real, but so is the complexity: registration and documentation, Portuguese-language operations, local route and representative considerations, and tax, import, and execution questions that have to be validated before pursuit. Requirements vary by buyer, category, procurement method, source, and opportunity.",
    whyItMatters: [
      "Buyers and sources are fragmented across federal, state, municipal, state-owned, and Sistema S contexts — each with its own portals and rules.",
      "Operations run in Portuguese, and documentation usually needs localization plus a validated local registration path, not just translation.",
      "Route to market and tax, import, and delivery assumptions should be validated before resources are committed.",
    ],

    basicChecklist: [
      {
        item: "Supplier Passport",
        status: "usually-needed",
        description:
          "A clear, structured profile of what your company sells and can prove abroad.",
      },
      {
        item: "Product / category fit",
        status: "usually-needed",
        description:
          "Confirm your offering maps to real Brazilian buyer demand and bid objects.",
      },
      {
        item: "Portuguese-language documentation",
        status: "usually-needed",
        description:
          "Editais and communication run in Portuguese; documents typically need localization, not just translation.",
      },
      {
        item: "Brazilian procurement source monitoring",
        status: "usually-needed",
        description:
          "PNCP, Compras.gov.br, and buyer-specific portals each carry different opportunities.",
      },
      {
        item: "Local registration path",
        status: "validate",
        description:
          "How a foreign supplier registers and habilitates depends on the buyer, category, and method — validate before assuming.",
      },
      {
        item: "Tax / fiscal representation context",
        status: "depends",
        description:
          "Fiscal and tax representation needs depend on the route and the nature of the supply.",
      },
      {
        item: "Local representative / distributor strategy",
        status: "depends",
        description:
          "Often useful, and sometimes effectively required by the route or buyer context.",
      },
      {
        item: "Import / logistics feasibility",
        status: "depends",
        description:
          "Import, customs, and delivery feasibility depend on the product and the terms.",
      },
      {
        item: "Local stock requirement",
        status: "depends",
        description:
          "Depends on the product, delivery terms, and buyer expectations.",
      },
      {
        item: "Local production / content requirement",
        status: "validate",
        description:
          "Local-content rules are not universal; validate category and buyer rules before assuming.",
      },
      {
        item: "Certification / technical documentation",
        status: "depends",
        description:
          "Sector certifications or technical documentation may apply depending on the object and buyer.",
      },
      {
        item: "Bid bond / guarantee / payment terms",
        status: "validate",
        description:
          "Guarantees, bonds, and payment timing vary by edital — validate per opportunity.",
      },
      {
        item: "Execution & after-award readiness",
        status: "usually-needed",
        description:
          "Plan delivery, support, and post-award obligations before you pursue.",
      },
    ],
    commonBlockers: [
      "Misunderstanding Brazil's buyer and source fragmentation",
      "Assuming every opportunity is accessible from abroad",
      "Portuguese documentation and communication gaps",
      "Tax and import complexity",
      "An unclear local route",
      "No representative or distributor strategy",
      "Local delivery and stock assumptions",
      "Guarantees and payment-timing surprises",
      "Missing category-specific certifications",
      "No bid / no-bid discipline",
    ],
    routeOptions: [
      "Local representative or commercial agent",
      "Distributor or channel partner",
      "Brazilian subsidiary or local entity",
      "Teaming or subcontracting with a local supplier",
      "Prepare first, then enter",
    ],

    govDecisionRole: [
      "Supplier Passport turns scattered U.S. company data into one structured, reusable profile.",
      "Country Pack logic applies Brazil's buyer, source, and registration rules to your situation.",
      "Opportunity Qualification scores fit and reads the buyer and source behind each notice.",
      "AI-assisted requirement extraction surfaces what an edital demands, in plain terms.",
      "Blocker detection flags documentation, registration, and local-route gaps early.",
      "A go / no-go memo and Deal Room keep a cross-border decision auditable and ready for post-award execution.",
    ],
    readinessConsole: {
      supplierPassport: 74,
      marketFit: 79,
      criticalBlockers: 3,
      recommendedRoute: "Validate route + local docs",
      decision: "Prepare, then pursue",
    },

    saxGlobal: {
      emphasis: "primary",
      intro:
        "Cross-border entry into Brazil is where software meets the real world. Sax Global supports the market access journey — Brazil entry context, local route and registration-path validation, partner and distributor strategy, documentation and operational readiness, and practical cross-border execution discussion.",
      score: {
        attractiveness: 78,
        readinessGap: "Medium",
        routeComplexity: "High",
        partnerDependency: "Medium–High",
        executionRisk: "Medium",
        firstMove: "Validate Brazil route + local documentation context",
      },
      businessPlan: businessPlanSnapshot,
      role: [
        "Market access planning and Brazil entry context",
        "Local route and registration-path validation",
        "Partner / distributor strategy discussion",
        "Documentation and operational readiness context",
        "Cross-border execution and commercial route discussion",
      ],
    },

    cta: {
      eyebrow: "Plan the path",
      title: "Plan this market entry path with Sax Global.",
      subtitle:
        "Validate the Brazil route, local documentation context, and readiness gaps before you commit resources to Brazilian public procurement.",
      primary: {
        label: "Talk to Sax Global",
        href: "/contact?path=united-states-to-brazil&type=cross-border",
      },
      secondary: { label: "Explore GovDecision", href: "/platform" },
    },
  },

  /* ------------------------------------------ Brazil → Paraguay (regional) */
  {
    slug: "brazil-to-paraguay",
    originCountry: "Brazil",
    targetMarket: "Paraguay",
    pathType: "regional",
    status: "targeted",

    heroEyebrow: "Regional market access",
    heroTitle:
      "A regional path for Brazilian suppliers exploring Paraguayan public procurement.",
    heroSubtitle:
      "Paraguay can be a practical regional expansion path for Brazilian suppliers, but the route still requires market validation, documentation, local context, and execution planning.",

    readinessPriority: "Country pack validation + local route",
    firstStep: "Readiness review + regional market access planning",

    metaTitle: "Brazil to Paraguay Government Business — GovDecision",
    metaDescription:
      "Explore how Brazilian suppliers can evaluate a regional path into Paraguayan public procurement with GovDecision readiness workflows and Sax Global market access support.",

    marketSnapshot: {
      metrics: [
        {
          label: "Target population",
          value: "≈ 6.9 million",
          note: "World Bank · 2024",
          icon: "globe",
        },
        {
          label: "Target GDP",
          value: "≈ US$44.5 billion",
          note: "World Bank · 2024",
          icon: "layers",
        },
        {
          label: "Public procurement",
          value: "Pending validation",
          note: "DNCP · consolidated volume not confirmed",
          icon: "checklist",
        },
        {
          label: "Currency",
          value: "Paraguayan guaraní (PYG)",
          icon: "award",
        },
        {
          label: "Main language",
          value: "Spanish · Guaraní co-official",
          icon: "flag",
        },
        {
          label: "Procurement access",
          value: "DNCP · contrataciones.gov.py",
          note: "National procurement portal",
          icon: "route",
        },
      ],
      sourceNotes: [
        {
          label: "World Bank — Population, total, Paraguay",
          url: "https://data.worldbank.org/indicator/SP.POP.TOTL?locations=PY",
          year: "2024",
        },
        {
          label: "World Bank — GDP (current US$), Paraguay",
          url: "https://data.worldbank.org/indicator/NY.GDP.MKTP.CD?locations=PY",
          year: "2024",
        },
        {
          label: "DNCP — Dirección Nacional de Contrataciones Públicas",
          url: "https://www.contrataciones.gov.py/",
        },
        {
          label: "DNCP — Open procurement data portal",
          url: "https://www.datos.gov.py/portal-de-datos-abiertos-de-la-direccion-nacional-de-contrataciones-publicas",
        },
      ],
    },

    marketOverview:
      "Paraguay can be a practical regional expansion path for Brazilian suppliers — geographic proximity, Mercosur and regional business familiarity, and a shared neighborhood lower some friction. But it is still a foreign market: operations run in Spanish, public procurement portals and rules must be validated, local representation or partner needs depend on the opportunity, and delivery, logistics, documentation, and compliance assumptions have to be checked. Paraguay should be evaluated corridor by corridor and category by category, with source validation and local route assumptions reviewed before pursuing.",
    whyItMatters: [
      "Geographic proximity and Mercosur familiarity can lower friction, but they do not remove procurement complexity.",
      "Operations run in Spanish (Guaraní is co-official), and documentation may need translation or legalization depending on the opportunity.",
      "Procurement runs through the national DNCP system; sources, buyer rules, and local route assumptions should be validated corridor by corridor.",
    ],

    basicChecklist: [
      {
        item: "Supplier Passport",
        status: "usually-needed",
        description:
          "A clear, structured profile of what your company sells and can prove in a new market.",
      },
      {
        item: "Product / category fit",
        status: "usually-needed",
        description:
          "Confirm your offering maps to real Paraguayan buyer demand and tender objects.",
      },
      {
        item: "Spanish-language documentation",
        status: "usually-needed",
        description:
          "Tenders and communication run in Spanish; documents typically need localization, not just translation.",
      },
      {
        item: "Paraguayan procurement source validation",
        status: "validate",
        description:
          "Validate the DNCP system and any buyer-specific sources before relying on them.",
      },
      {
        item: "Local registration requirements",
        status: "validate",
        description:
          "How a foreign supplier registers and qualifies depends on the buyer, category, and method — validate per opportunity.",
      },
      {
        item: "Local representative / distributor strategy",
        status: "depends",
        description:
          "Often useful, and sometimes effectively required by the route or buyer context.",
      },
      {
        item: "Local company requirement",
        status: "depends",
        description:
          "Whether a local company or presence is needed depends on the opportunity — validate before assuming.",
      },
      {
        item: "Local stock requirement",
        status: "depends",
        description:
          "Depends on delivery terms and the buyer's lead-time expectations.",
      },
      {
        item: "Local production / content requirement",
        status: "validate",
        description:
          "Local-content rules are not universal; validate buyer and category rules before assuming.",
      },
      {
        item: "Customs / logistics feasibility",
        status: "depends",
        description:
          "Customs, transport, and delivery feasibility depend on the product and the terms.",
      },
      {
        item: "Guarantees / payment terms",
        status: "depends",
        description:
          "Bid or performance guarantees and payment timing vary by tender — validate per opportunity.",
      },
      {
        item: "Document legalization / translation",
        status: "depends",
        description:
          "Legalization or certified translation may apply depending on the documents and tender.",
      },
      {
        item: "Execution readiness",
        status: "usually-needed",
        description:
          "Plan delivery, support, and post-award obligations before you pursue.",
      },
    ],
    commonBlockers: [
      "Assuming regional proximity removes procurement complexity",
      "Lack of Spanish or local documentation",
      "An unclear local route",
      "Lack of source validation",
      "Buyer-specific requirements",
      "Delivery and logistics assumptions",
      "Guarantees and payment-timing surprises",
      "Missing local commercial support",
      "No country-specific readiness checklist",
    ],
    routeOptions: [
      "Local representative or commercial agent",
      "Distributor or channel partner",
      "Local company or registered presence where required",
      "Cross-border supply under validated terms",
      "Prepare the country pack first, then enter",
    ],

    govDecisionRole: [
      "Supplier Passport turns your Brazilian company profile into one structured, reusable profile.",
      "Country Pack validation applies Paraguay's DNCP rules, sources, and registration logic.",
      "Opportunity Qualification scores fit and filters which opportunities are worth pursuing.",
      "Blocker detection flags documentation, registration, and local-route gaps early.",
      "Route recommendation shows whether to go direct, represent, distribute, or prepare first.",
      "A go / no-go memo and Deal Room keep the regional decision auditable and ready for post-award execution.",
    ],
    readinessConsole: {
      supplierPassport: 72,
      marketFit: 70,
      criticalBlockers: 3,
      recommendedRoute: "Validate country pack + route",
      decision: "Prepare first",
    },

    saxGlobal: {
      emphasis: "primary",
      intro:
        "A regional move into Paraguay is more practical than a distant cross-border entry, but it is still a market access journey. Sax Global supports regional market access planning, local route validation, partner and distributor path discussion, documentation and readiness context, and a first 90-day plan.",
      score: {
        attractiveness: 68,
        readinessGap: "Medium",
        routeComplexity: "Medium",
        partnerDependency: "Medium",
        executionRisk: "Medium",
        firstMove: "Validate country pack + local route assumptions",
      },
      businessPlan: businessPlanSnapshot,
      role: [
        "Regional market access planning",
        "Local route validation",
        "Partner / distributor path discussion",
        "Documentation and readiness context",
        "First 90-day plan",
      ],
    },

    cta: {
      eyebrow: "Plan the path",
      title: "Plan this regional path with Sax Global.",
      subtitle:
        "Validate the country pack, local route assumptions, and readiness gaps before you pursue Paraguayan public procurement.",
      primary: {
        label: "Talk to Sax Global",
        href: "/contact?path=brazil-to-paraguay&type=regional",
      },
      secondary: { label: "Explore GovDecision", href: "/platform" },
    },
  },
];

/* --------------------------------------------------------------- Helpers */

export const destinationSlugs = destinations.map((d) => d.slug);

export function getDestination(slug: string): DestinationPage | undefined {
  return destinations.find((d) => d.slug === slug);
}

/* ------------------------------------------------ Contact page context */

/**
 * Maps a `?path=` value (used by both destination CTAs and the unimplemented
 * optional paths) to a readable origin → target pair, so /contact can show a
 * small contextual banner and prefill the target-markets field.
 */
export const contactPathLabels: Record<
  string,
  { origin: string; target: string }
> = {
  brazil: { origin: "Brazil", target: "Brazil" },
  "united-states": { origin: "United States", target: "United States" },
  "brazil-to-united-states": { origin: "Brazil", target: "United States" },
  "brazil-to-un-world-bank": { origin: "Brazil", target: "UN & World Bank" },
  "united-states-to-brazil": { origin: "United States", target: "Brazil" },
  "brazil-to-paraguay": { origin: "Brazil", target: "Paraguay" },
};

export type ContactContext = {
  origin?: string;
  target?: string;
  type: string;
  /** Banner sentence shown above the contact form. */
  message: string;
  /** Prefill value for the "Target markets" field. */
  targetMarkets?: string;
};

/**
 * Resolve a contextual banner + prefill from `?path=` and `?type=` query
 * params. Returns `undefined` when nothing useful can be derived, so the
 * contact page renders exactly as before for a plain visit.
 */
export function resolveContactContext(
  path?: string,
  type?: string,
): ContactContext | undefined {
  const pair = path ? contactPathLabels[path] : undefined;
  const isLocal = type === "local" || (pair && pair.origin === pair.target);

  if (!pair && !type) return undefined;

  if (pair) {
    if (isLocal) {
      return {
        origin: pair.origin,
        target: pair.target,
        type: type ?? "local",
        message: `You are asking about a local GovDecision readiness path: ${pair.target}.`,
        targetMarkets: pair.target,
      };
    }
    return {
      origin: pair.origin,
      target: pair.target,
      type: type ?? "cross-border",
      message: `You are asking about a Sax Global market access path: ${pair.origin} → ${pair.target}.`,
      targetMarkets: pair.target,
    };
  }

  // Type known but path unrecognized — keep it generic but contextual.
  if (type === "local") {
    return {
      type,
      message: "You are asking about a local GovDecision readiness path.",
    };
  }
  return {
    type: type ?? "cross-border",
    message: "You are asking about a Sax Global market access path.",
  };
}
