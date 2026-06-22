import type { IconName } from "@/components/ui/Icon";

/**
 * Government Opportunity Briefs — data foundation (SITE-013).
 *
 * Each entry powers an `/opportunity-briefs/[slug]` page that shows a real-world
 * public-sector demand example and translates it into decision and readiness
 * lessons. These are NOT customer case studies, GovDecision/Sax client wins,
 * closed deals, or guaranteed opportunities — they are illustrative briefs based
 * on public-sector demand and authoritative procurement sources.
 *
 * Content rules baked into this file:
 *   - No invented opportunities, buyers, values, or deadlines. Each brief is
 *     anchored to a real, authoritative procurement source (SAM.gov, PNCP,
 *     DNCP, ComprasMX, CanadaBuys, UNGM, AfDB), with a stable source URL.
 *   - Briefs describe recurring demand categories and official buyer channels
 *     rather than a single time-bound solicitation, so nothing here implies a
 *     specific open deadline. Value/deadline fields are intentionally omitted
 *     (rendered as "Not specified in the public brief") to avoid fabrication.
 *   - Requirements/blockers are written with nuance ("may require", "often
 *     depends on", "must be validated") because they vary by buyer, country,
 *     category, procurement method, and opportunity.
 *
 * Local examples send users toward GovDecision (start readiness). Cross-border,
 * regional, and multilateral examples add Sax Global as a market-access layer.
 *
 * EN-US copy below is the canonical source of truth; `src/i18n/briefs/*`
 * overlays it with hand-authored PT-BR and ES, and supplies section labels.
 */

/* ------------------------------------------------------------------- Types */

export type BriefMarket =
  | "United States"
  | "Brazil"
  | "Paraguay"
  | "Mexico"
  | "Canada"
  | "Colombia"
  | "UN / World Bank"
  | "IDB"
  | "Selected African markets";

/** Drives the CTA (local → GovDecision readiness, else → Sax Global) and copy. */
export type BriefPathType = "local" | "cross-border" | "multilateral" | "regional";

/** Honest status framing — never implies a guaranteed or still-open opportunity. */
export type BriefStatus =
  | "real-world-example"
  | "historical-example"
  | "market-signal"
  | "pending-validation";

/** Illustrative decision-brief mockup values (clearly labeled, never computed). */
export type FitSignal = "low" | "medium" | "medium-high" | "high";
export type RiskLevel = "low" | "medium" | "high";
export type RouteOption = "direct" | "partner" | "prepare-first" | "direct-or-partner";
export type DecisionVerdict =
  | "review-before-pursuit"
  | "qualify-first"
  | "prepare-first"
  | "conditional-go";

export type BriefSource = { name: string; url: string; date?: string };

export type DecisionMockup = {
  fitSignal: FitSignal;
  readinessRisk: RiskLevel;
  /** Illustrative count of blockers a readiness pass might surface. */
  blockersDetected: number;
  route: RouteOption;
  decision: DecisionVerdict;
};

export type OpportunityBrief = {
  slug: string;
  market: BriefMarket;
  pathType: BriefPathType;
  status: BriefStatus;
  icon: IconName;

  /** Snapshot facts. Currency is a market fact; value/deadline stay omitted. */
  currency?: string;
  value?: string;
  deadline?: string;

  /** Primary authoritative source + optional extra references. */
  source: BriefSource;
  references?: BriefSource[];

  /** `/contact?path=<contactPath>&type=<pathType>` (locale-prefixed at render). */
  contactPath: string;
  /** Related Market Access destination (or the index) — locale-prefixed at render. */
  relatedHref: string;

  /* ---- EN-US canonical copy (the source of truth; overlays translate it) ---- */
  opportunityType: string;
  buyerType: string;
  shortTitle: string;
  heroEyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  summary: string;
  whySuppliersCare: string[];
  commonRequirements: string[];
  commonBlockers: string[];
  govDecisionAnalysis: string[];
  /** Empty for local examples (the Sax Global section is then hidden). */
  saxGlobalAngle: string[];
  readinessQuestions: string[];
  relatedLabel: string;
  metaTitle: string;
  metaDescription: string;

  decisionMockup: DecisionMockup;
};

/* -------------------------------------------------- Presentation tokens */

/** Canonical EN status labels (overlaid per-locale by the briefs chrome). */
export const briefStatusLabel: Record<BriefStatus, string> = {
  "real-world-example": "Real-world example",
  "historical-example": "Past opportunity example",
  "market-signal": "Market signal",
  "pending-validation": "Pending validation",
};

/** Status chip styling (uses the shared palette / status colors). */
export const briefStatusStyles: Record<BriefStatus, string> = {
  "real-world-example": "bg-plum/8 text-plum",
  "historical-example": "bg-amber-50 text-amber-700",
  "market-signal": "bg-coral/10 text-coral-600",
  "pending-validation": "bg-surface text-slate",
};

export const briefPathTypeLabel: Record<BriefPathType, string> = {
  local: "Local",
  "cross-border": "Cross-border",
  multilateral: "Multilateral",
  regional: "Regional",
};

export const briefPathTypeIcon: Record<BriefPathType, IconName> = {
  local: "target",
  "cross-border": "route",
  multilateral: "globe",
  regional: "compass",
};

/* ----------------------------------------------------- Shared guardrail copy */

export const briefsAvailabilityNote =
  "Availability, deadlines, eligibility, and requirements vary by buyer, country, category, and opportunity.";

export const briefsDisclaimer =
  "These briefs are based on public-sector opportunity examples and market signals. They are not GovDecision customer case studies, legal advice, eligibility determinations, or guarantees of availability, qualification, award, financing, or contract outcomes.";

export const briefsAiAssistNote =
  "AI-assisted analysis helps extract requirements, detect blockers, summarize opportunity logic, and prepare executive decision briefs — while the workflow keeps every decision structured and auditable. Requirements vary by buyer, category, procurement method, and opportunity, so validate before pursuing.";

export const briefsSaxDisclaimer =
  "Sax Global provides planning, context, and guidance. It does not guarantee market access, eligibility, registration approval, partner placement, financing, or contract outcomes. Sample figures are illustrative.";

/* ------------------------------------------------------------------ Briefs */

export const opportunityBriefs: OpportunityBrief[] = [
  /* ----------------------------------------------- United States (local) */
  {
    slug: "united-states-facilities-mro",
    market: "United States",
    pathType: "local",
    status: "real-world-example",
    icon: "layers",
    currency: "USD",
    source: {
      name: "SAM.gov — Contract Opportunities",
      url: "https://sam.gov/opportunities",
    },
    references: [
      {
        name: "GSA — Maintenance, Repair & Facility Supplies (FSSI, Generation 2)",
        url: "https://www.gsa.gov/buy-through-us/purchasing-programs/federal-strategic-sourcing-initiative/maintenance-repair-facility-supplies-generation-2",
      },
    ],
    contactPath: "united-states",
    relatedHref: "/market-access/united-states",

    opportunityType: "Facilities maintenance, repair & operations (MRO) supplies",
    buyerType: "U.S. federal agencies, installations & GSA-served buyers",
    shortTitle: "Federal facilities & MRO supplies",
    heroEyebrow: "United States · Local market",
    heroTitle: "Recurring federal demand for maintenance and facility supplies.",
    heroSubtitle:
      "U.S. agencies buy maintenance, repair and operations (MRO) products continuously — HVAC, plumbing, electrical, janitorial and sanitation supplies — through SAM.gov and government-wide vehicles. The recurring volume is real; qualifying for it is the work.",
    summary:
      "The U.S. government is one of the largest recurring buyers of maintenance, repair and operations supplies in the world. Demand is steady and category-broad — but registration, set-aside rules, and contract vehicles decide who can actually compete.",
    whySuppliersCare: [
      "MRO and facility supplies are a recurring, high-frequency category — not a one-off tender — so a qualified supplier can build repeatable revenue.",
      "Distributors and manufacturers of HVAC, plumbing, electrical, janitorial and sanitation products map directly to existing federal demand.",
      "Government-wide vehicles (e.g., GSA strategic sourcing) can turn many scattered buyers into a single route once you are positioned.",
    ],
    commonRequirements: [
      "An active SAM.gov registration with a UEI, and the right NAICS / PSC codes for the category.",
      "Eligibility for the relevant set-aside (small business and similar) often decides who may bid.",
      "Placement on a contract vehicle or schedule is frequently the practical route to recurring orders.",
    ],
    commonBlockers: [
      "Registration and code mapping are done incorrectly or left incomplete, so the supplier never surfaces for the right buyers.",
      "Set-aside and socioeconomic eligibility are misread, and time is spent on opportunities the supplier cannot win.",
      "Delivery, packaging and domestic-preference rules are underestimated and must be validated per solicitation.",
    ],
    govDecisionAnalysis: [
      "Compare the opportunity category against the Supplier Passport to see where the company already fits and where it does not.",
      "Use AI-assisted requirement extraction to pull registration, code, set-aside and delivery requirements out of the notice.",
      "Detect blockers — missing registration, wrong codes, ineligible set-aside — before any time is spent on a bid.",
      "Produce a Go / No-Go decision brief: pursue now, position on a vehicle first, or pass.",
    ],
    saxGlobalAngle: [],
    readinessQuestions: [
      "Do we sell MRO / facility product categories a federal buyer actually orders?",
      "Is our SAM.gov registration active, with the correct UEI, NAICS and PSC codes?",
      "Are we eligible for the set-asides these opportunities are reserved for?",
      "Can we meet federal delivery, packaging and domestic-preference terms?",
      "Is the realistic route a direct bid, or placement on a contract vehicle first?",
    ],
    relatedLabel: "United States market access brief",
    metaTitle:
      "U.S. Federal Facilities & MRO Supplies — Government Opportunity Brief",
    metaDescription:
      "A real-world U.S. public-sector demand example: recurring federal facilities maintenance and MRO supplies, and why suppliers need fit, readiness, and a clear route before pursuing.",
    decisionMockup: {
      fitSignal: "medium-high",
      readinessRisk: "medium",
      blockersDetected: 3,
      route: "direct",
      decision: "qualify-first",
    },
  },

  /* ------------------------------------------------------- Brazil (local) */
  {
    slug: "brazil-facilities-maintenance",
    market: "Brazil",
    pathType: "local",
    status: "real-world-example",
    icon: "checklist",
    currency: "BRL",
    source: {
      name: "PNCP — Portal Nacional de Contratações Públicas",
      url: "https://pncp.gov.br/app/editais",
    },
    references: [
      {
        name: "Compras.gov.br — Federal procurement portal",
        url: "https://www.gov.br/compras/pt-br",
      },
    ],
    contactPath: "brazil",
    relatedHref: "/market-access/brazil",

    opportunityType: "Building maintenance & operational / consumption supplies",
    buyerType: "Brazilian federal, state, municipal & state-owned buyers",
    shortTitle: "Building maintenance & supplies",
    heroEyebrow: "Brazil · Local market",
    heroTitle: "Continuous public demand across thousands of Brazilian buyers.",
    heroSubtitle:
      "Under Law 14.133/2021, Brazilian public buyers publish maintenance and operational-supply opportunities on the PNCP and Compras.gov.br every day. The volume is enormous; deciding what is worth pursuing is the hard part.",
    summary:
      "Brazil runs one of the largest public procurement environments in the world, now centralized on the PNCP. Building maintenance and operational-supply demand is constant across federal, state and municipal buyers — but registration and bid discipline decide who competes.",
    whySuppliersCare: [
      "Maintenance and consumption-material categories recur across thousands of buyers, so qualified suppliers can pursue a steady pipeline.",
      "Local manufacturers and distributors of operational supplies map directly to everyday public demand.",
      "Centralized publication on the PNCP makes demand discoverable — the challenge shifts from finding to qualifying.",
    ],
    commonRequirements: [
      "Registration in the relevant supplier registry (e.g., SICAF) and habilitation documents are usually expected.",
      "Fiscal, labor and technical regularity certificates often must be current to bid.",
      "Modality and edital terms vary by buyer and must be read carefully before committing.",
    ],
    commonBlockers: [
      "Habilitation documents lapse or are incomplete, disqualifying otherwise competitive suppliers.",
      "Edital requirements are misread, and effort goes to opportunities the company cannot meet on time.",
      "Bid bonds, delivery windows and price-formation rules are underestimated and must be validated per edital.",
    ],
    govDecisionAnalysis: [
      "Match the opportunity to the Supplier Passport to confirm category and habilitation fit fast.",
      "Use AI-assisted extraction to pull habilitation, certificate and delivery requirements from the edital.",
      "Detect blockers — expired certificates, missing registry, tight deadlines — before the bid window closes.",
      "Prepare a Go / No-Go decision brief instead of reacting to every published edital.",
    ],
    saxGlobalAngle: [],
    readinessQuestions: [
      "Do we supply a maintenance or operational category Brazilian buyers actually order?",
      "Are our SICAF registration and habilitation certificates current?",
      "Can we meet the edital's delivery, guarantee and price-formation terms?",
      "Do we have the bid discipline to respond before deadlines, repeatedly?",
      "Is this worth pursuing now, or should we organize readiness first?",
    ],
    relatedLabel: "Brazil market access brief",
    metaTitle:
      "Brazil Building Maintenance & Supplies — Government Opportunity Brief",
    metaDescription:
      "A real-world Brazilian public-sector demand example: recurring building maintenance and operational supplies on the PNCP, and why suppliers need fit, readiness, and bid discipline.",
    decisionMockup: {
      fitSignal: "high",
      readinessRisk: "medium",
      blockersDetected: 4,
      route: "direct",
      decision: "qualify-first",
    },
  },

  /* -------------------------------------------------- Paraguay (regional) */
  {
    slug: "paraguay-operational-supplies",
    market: "Paraguay",
    pathType: "regional",
    status: "market-signal",
    icon: "compass",
    currency: "PYG / USD",
    source: {
      name: "DNCP — Contrataciones Públicas, Paraguay",
      url: "https://www.contrataciones.gov.py/",
    },
    references: [
      {
        name: "Viceministerio de MIPYMES — Compras Públicas MIPYMES",
        url: "https://www.mipymes.gov.py/compraspublicasmipymes/",
      },
    ],
    contactPath: "brazil-to-paraguay",
    relatedHref: "/market-access/brazil-to-paraguay",

    opportunityType: "Operational & industrial supplies (incl. MIPYME-eligible lots)",
    buyerType: "Paraguayan ministries, municipalities & public entities",
    shortTitle: "Operational & industrial supplies",
    heroEyebrow: "Paraguay · Regional path",
    heroTitle: "A nearby market with structured, SME-friendly public demand.",
    heroSubtitle:
      "Paraguay centralizes public contracting on the DNCP, with specific channels for MIPYMES (micro, small and medium enterprises). For a regional supplier — especially from Brazil — proximity is an advantage, but local participation rules must be validated.",
    summary:
      "Paraguay publishes public tenders through the DNCP, including MIPYME-oriented opportunities. The market is close and structured, but eligibility, local representation, and currency terms shape whether a regional supplier can realistically compete.",
    whySuppliersCare: [
      "Geographic proximity and Mercosur ties make Paraguay a logical first cross-border step for many Brazilian suppliers.",
      "A centralized portal (DNCP) and dedicated MIPYME channels make demand visible and, in places, SME-accessible.",
      "Operational and industrial-supply categories recur across ministries and municipalities.",
    ],
    commonRequirements: [
      "Registration as a state supplier (SIPE) on the DNCP system is generally expected.",
      "A local representative, agent or established presence may be required depending on the procedure.",
      "Bid documentation in Spanish and compliance with local terms must be validated per tender.",
    ],
    commonBlockers: [
      "Cross-border suppliers underestimate local registration and representation requirements.",
      "Language, currency and delivery logistics across the border add execution risk that must be planned.",
      "Eligibility for MIPYME-reserved lots depends on local definitions that must be checked, not assumed.",
    ],
    govDecisionAnalysis: [
      "Compare the opportunity to the Supplier Passport and flag where cross-border eligibility is unclear.",
      "Extract registration, representation and documentation requirements from the tender with AI assistance.",
      "Detect blockers — missing local presence, currency and logistics gaps — before pursuing.",
      "Frame a Go / No-Go: pursue directly, pursue via a local partner, or prepare first.",
    ],
    saxGlobalAngle: [
      "For a Brazil → Paraguay path, Sax Global may support market-access planning and route validation across the border.",
      "Sax Global can help test partner / distributor and local-representation assumptions where a procedure requires them.",
      "Practical execution context — language, logistics, currency — can be scoped before any commitment.",
    ],
    readinessQuestions: [
      "Do we sell a category Paraguayan public buyers order, and at the right scale?",
      "Are we prepared to register as a state supplier and meet local terms?",
      "Do we need a local representative or distributor for this procedure?",
      "Can we handle cross-border delivery, currency and documentation?",
      "Is a direct route realistic, or is a partner / prepare-first route smarter?",
    ],
    relatedLabel: "Brazil → Paraguay market access brief",
    metaTitle:
      "Paraguay Operational & Industrial Supplies — Government Opportunity Brief",
    metaDescription:
      "A real-world Paraguayan public-sector demand example via the DNCP, including MIPYME channels — and why a regional supplier needs fit, readiness, and a validated route.",
    decisionMockup: {
      fitSignal: "medium",
      readinessRisk: "medium",
      blockersDetected: 4,
      route: "partner",
      decision: "prepare-first",
    },
  },

  /* ----------------------------------------------- Mexico (cross-border) */
  {
    slug: "mexico-it-infrastructure",
    market: "Mexico",
    pathType: "cross-border",
    status: "market-signal",
    icon: "spark",
    currency: "MXN",
    source: {
      name: "ComprasMX — Plataforma Digital de Contrataciones (Gobierno de México)",
      url: "https://comprasmx.buengobierno.gob.mx/",
    },
    references: [
      {
        name: "U.S. Commercial Service — Mexico: Selling to the Public Sector",
        url: "https://www.trade.gov/country-commercial-guides/mexico-selling-public-sector",
      },
    ],
    contactPath: "mexico",
    relatedHref: "/market-access",

    opportunityType: "IT infrastructure & technical equipment",
    buyerType: "Mexican federal public administration entities",
    shortTitle: "IT infrastructure & equipment",
    heroEyebrow: "Mexico · Cross-border path",
    heroTitle: "A large federal buyer modernizing how it purchases.",
    heroSubtitle:
      "Mexico's federal government publishes tenders on ComprasMX (the platform that replaced CompraNet), including IT infrastructure and technical-equipment demand. For a cross-border supplier, the opportunity is sizable — and the registration and representation rules are decisive.",
    summary:
      "Mexico's federal procurement runs through ComprasMX, a modernized digital platform. IT infrastructure and technical-equipment categories are a recurring need, but cross-border suppliers must validate registration, representation, and compliance before competing.",
    whySuppliersCare: [
      "A large federal buyer with continuous technology and equipment needs is a meaningful adjacent market for technical suppliers.",
      "A modernized, centralized platform (ComprasMX) makes federal demand more transparent and searchable.",
      "Categories like IT infrastructure and technical equipment map to existing B2B product lines for many suppliers.",
    ],
    commonRequirements: [
      "Registration in the supplier and contractor registry (RUPC) on ComprasMX is generally required to participate.",
      "A local presence, representative or RFC tax registration may be required depending on the procedure.",
      "Bid documentation in Spanish and compliance with federal rules must be validated per tender.",
    ],
    commonBlockers: [
      "Cross-border suppliers underestimate registration, tax and local-representation requirements.",
      "Technical specifications and compliance terms are buyer-specific and must be validated, not assumed.",
      "Delivery, warranty and support obligations across the border add execution risk.",
    ],
    govDecisionAnalysis: [
      "Compare the opportunity to the Supplier Passport and surface cross-border eligibility gaps.",
      "Extract registration, representation and technical requirements with AI assistance.",
      "Detect blockers — RUPC registration, RFC, local support — before investing in a bid.",
      "Produce a Go / No-Go decision brief: direct, partner-led, or prepare first.",
    ],
    saxGlobalAngle: [
      "For a cross-border path into Mexico, Sax Global may support market-access planning and route validation.",
      "Sax Global can help test local-representation, tax-presence and partner assumptions where required.",
      "Execution context — language, warranty, in-country support — can be scoped before commitment.",
    ],
    readinessQuestions: [
      "Do our IT / equipment categories match what Mexican federal buyers order?",
      "Are we ready to register (RUPC) and meet local tax / representation rules?",
      "Do we need an in-country partner or support presence for this category?",
      "Can we meet delivery, warranty and support obligations across the border?",
      "Is a direct route realistic, or should we prepare or partner first?",
    ],
    relatedLabel: "All market access paths",
    metaTitle:
      "Mexico IT Infrastructure & Equipment — Government Opportunity Brief",
    metaDescription:
      "A real-world Mexican federal demand example via ComprasMX for IT infrastructure and technical equipment — and why cross-border suppliers need fit, readiness, and a validated route.",
    decisionMockup: {
      fitSignal: "medium",
      readinessRisk: "high",
      blockersDetected: 5,
      route: "partner",
      decision: "prepare-first",
    },
  },

  /* ----------------------------------------------- Canada (cross-border) */
  {
    slug: "canada-goods-services",
    market: "Canada",
    pathType: "cross-border",
    status: "market-signal",
    icon: "route",
    currency: "CAD",
    source: {
      name: "CanadaBuys — Government of Canada procurement",
      url: "https://canadabuys.canada.ca/en/tender-opportunities",
    },
    references: [
      {
        name: "Public Services and Procurement Canada (PSPC)",
        url: "https://www.canada.ca/en/public-services-procurement.html",
      },
    ],
    contactPath: "canada",
    relatedHref: "/market-access",

    opportunityType: "Operational goods & technical services",
    buyerType: "Government of Canada departments & agencies (via PSPC)",
    shortTitle: "Federal goods & services",
    heroEyebrow: "Canada · Cross-border path",
    heroTitle: "A transparent federal market with a single front door.",
    heroSubtitle:
      "Canada consolidated federal tendering on CanadaBuys, the official portal operated by PSPC. Goods and services demand is published openly — but trade-agreement rules, registration and delivery terms shape who can realistically compete.",
    summary:
      "Canada's federal government publishes tenders through CanadaBuys, a modern, transparent portal. Operational goods and technical-services categories are continuously in demand, but suppliers must validate registration, trade-agreement coverage, and delivery terms.",
    whySuppliersCare: [
      "An open, English / French federal portal makes Canadian demand unusually easy to monitor.",
      "Goods and technical-services categories recur across many departments and agencies.",
      "Trade agreements can open Canadian procurement to qualifying foreign suppliers — a real cross-border signal worth understanding.",
    ],
    commonRequirements: [
      "Supplier registration on CanadaBuys is generally needed to bid.",
      "Procurement may be governed by trade agreements whose coverage and rules must be validated.",
      "Bilingual documentation and Canadian delivery terms can apply depending on the buyer.",
    ],
    commonBlockers: [
      "Suppliers assume eligibility without checking trade-agreement coverage and set-aside rules.",
      "Bilingual and Canadian-specific compliance terms are underestimated.",
      "Cross-border delivery, support and bonding requirements must be validated per tender.",
    ],
    govDecisionAnalysis: [
      "Compare the opportunity to the Supplier Passport and flag cross-border eligibility questions.",
      "Extract registration, trade-agreement and delivery requirements with AI assistance.",
      "Detect blockers — registration, bonding, bilingual compliance — before committing.",
      "Prepare a Go / No-Go decision brief rather than chasing every notice.",
    ],
    saxGlobalAngle: [
      "For a cross-border path into Canada, Sax Global may support market-access planning and route validation.",
      "Sax Global can help interpret trade-agreement and partner assumptions where they apply.",
      "Execution context — delivery, support, bonding — can be scoped before commitment.",
    ],
    readinessQuestions: [
      "Do our categories match what Canadian federal buyers actually order?",
      "Are we registered on CanadaBuys and clear on trade-agreement coverage?",
      "Can we meet bilingual, delivery and bonding requirements?",
      "Do we need a Canadian partner or presence for this category?",
      "Is a direct route realistic, or should we prepare or partner first?",
    ],
    relatedLabel: "All market access paths",
    metaTitle:
      "Canada Federal Goods & Services — Government Opportunity Brief",
    metaDescription:
      "A real-world Canadian federal demand example via CanadaBuys for goods and technical services — and why cross-border suppliers need fit, readiness, and trade-agreement clarity.",
    decisionMockup: {
      fitSignal: "medium-high",
      readinessRisk: "medium",
      blockersDetected: 3,
      route: "direct-or-partner",
      decision: "qualify-first",
    },
  },

  /* --------------------------------------- UN / World Bank (multilateral) */
  {
    slug: "un-world-bank-supplies",
    market: "UN / World Bank",
    pathType: "multilateral",
    status: "real-world-example",
    icon: "globe",
    currency: "USD",
    source: {
      name: "UNGM — United Nations Global Marketplace",
      url: "https://www.ungm.org/Public/Notice",
    },
    references: [
      {
        name: "World Bank — Procurement for Projects & Programs",
        url: "https://www.worldbank.org/en/projects-operations/products-and-services/brief/procurement-policies",
      },
    ],
    contactPath: "brazil-to-un-world-bank",
    relatedHref: "/market-access/brazil-to-un-world-bank",

    opportunityType: "Operational & technical supplies for development programs",
    buyerType: "UN agencies & World Bank-financed project implementers",
    shortTitle: "UN & World Bank supplies",
    heroEyebrow: "UN / World Bank · Multilateral path",
    heroTitle: "Globally funded demand, published through a single window.",
    heroSubtitle:
      "UN agencies and World Bank-financed projects buy goods and services worldwide, with UN system tenders aggregated on UNGM. The demand is real and broad — but multilateral registration, standards and process rules are a discipline of their own.",
    summary:
      "The UN system and World Bank-financed projects represent large, globally distributed procurement. UNGM is the single front door for UN tenders; World Bank purchases flow through borrower project units. Eligibility and process discipline decide who competes.",
    whySuppliersCare: [
      "Multilateral demand is large, recurring and category-broad — from operational supplies to technical equipment.",
      "A single registration on UNGM opens visibility to many UN agencies at once.",
      "Development-funded programs reach markets a supplier might not access directly, widening the opportunity map.",
    ],
    commonRequirements: [
      "Free vendor registration on UNGM is the entry point for UN system opportunities.",
      "Compliance with UN / IFI procurement standards, eligibility and ethics rules is expected.",
      "World Bank-financed bids follow borrower project rules that must be read per opportunity.",
    ],
    commonBlockers: [
      "Suppliers treat multilateral procurement like domestic bidding and miss process and standards requirements.",
      "Registration, documentation and compliance steps are underestimated.",
      "Delivery to program locations, incoterms and timelines add execution complexity that must be planned.",
    ],
    govDecisionAnalysis: [
      "Compare the opportunity to the Supplier Passport and flag multilateral eligibility gaps.",
      "Extract registration, standards and delivery requirements from the notice with AI assistance.",
      "Detect blockers — registration, compliance, logistics — before pursuing.",
      "Produce a Go / No-Go decision brief tuned to multilateral process discipline.",
    ],
    saxGlobalAngle: [
      "For multilateral paths, Sax Global may support market-access planning and route validation.",
      "Sax Global can help test partner, logistics and compliance assumptions where applicable.",
      "Execution context for program delivery can be scoped before commitment.",
    ],
    readinessQuestions: [
      "Do our categories match what UN agencies and IFI projects actually buy?",
      "Are we registered on UNGM and clear on the relevant standards?",
      "Can we meet multilateral compliance, documentation and ethics requirements?",
      "Can we deliver to program locations on the required terms?",
      "Is a direct route realistic, or should we prepare or partner first?",
    ],
    relatedLabel: "Brazil → UN & World Bank market access brief",
    metaTitle:
      "UN & World Bank Supplies — Government Opportunity Brief",
    metaDescription:
      "A real-world multilateral demand example via UNGM and World Bank-financed projects — and why suppliers need fit, readiness, and process discipline before pursuing.",
    decisionMockup: {
      fitSignal: "medium",
      readinessRisk: "high",
      blockersDetected: 5,
      route: "prepare-first",
      decision: "prepare-first",
    },
  },

  /* ------------------------------ Selected African markets (multilateral) */
  {
    slug: "africa-water-sanitation",
    market: "Selected African markets",
    pathType: "multilateral",
    status: "real-world-example",
    icon: "shield",
    currency: "USD / local",
    source: {
      name: "African Development Bank — Project Procurement",
      url: "https://www.afdb.org/en/projects-and-operations/procurement",
    },
    references: [
      {
        name: "AfDB — Rural Water Supply & Sanitation Initiative (RWSSI)",
        url: "https://www.afdb.org/en/topics-and-sectors/initiatives-partnerships/rural-water-supply-sanitation-initiative",
      },
    ],
    contactPath: "africa-water-sanitation",
    relatedHref: "/market-access",

    opportunityType: "Water & sanitation supplies, equipment & works (donor-funded)",
    buyerType: "African public agencies via AfDB-financed projects",
    shortTitle: "Water & sanitation (donor-funded)",
    heroEyebrow: "Selected African markets · Multilateral path",
    heroTitle: "Donor-funded infrastructure demand across the continent.",
    heroSubtitle:
      "The African Development Bank finances water, sanitation and infrastructure programs across Africa, publishing procurement notices for works, equipment and supplies. The demand is significant — and multilateral eligibility and execution rules are central.",
    summary:
      "AfDB-financed projects — including the Rural Water Supply and Sanitation Initiative — generate procurement for pipes, fittings, electro-mechanical equipment and civil works across Africa. Demand is real, but eligibility, executing-agency rules, and execution capacity decide participation.",
    whySuppliersCare: [
      "Donor-funded water and sanitation programs create sustained demand for supplies, equipment and works.",
      "AfDB procurement is open to firms from member countries, widening who can participate.",
      "Suppliers of pipes, fittings, pumps and electro-mechanical equipment map directly to project needs.",
    ],
    commonRequirements: [
      "Eligibility typically depends on AfDB member-country rules and the specific project's procurement method.",
      "Bids follow executing-agency and AfDB procurement rules that must be read per notice.",
      "Technical specifications, delivery to project sites and local presence may all be required.",
    ],
    commonBlockers: [
      "Suppliers misjudge eligibility and executing-agency requirements that vary by project.",
      "Logistics to project locations, lead times and local presence are underestimated.",
      "Performance guarantees, standards and documentation must be validated per opportunity.",
    ],
    govDecisionAnalysis: [
      "Compare the opportunity to the Supplier Passport and flag eligibility and capacity gaps.",
      "Extract eligibility, specification and delivery requirements from the notice with AI assistance.",
      "Detect blockers — eligibility, logistics, guarantees — before committing resources.",
      "Prepare a Go / No-Go decision brief suited to donor-funded execution.",
    ],
    saxGlobalAngle: [
      "For donor-funded, multilateral paths, Sax Global may support market-access planning and route validation.",
      "Sax Global can help test partner, logistics and execution-capacity assumptions where applicable.",
      "Practical execution context for project delivery can be scoped before commitment.",
    ],
    readinessQuestions: [
      "Do our products or works fit AfDB-financed water and sanitation projects?",
      "Are we eligible under member-country and project procurement rules?",
      "Can we deliver to project locations and meet technical specifications?",
      "Can we provide the guarantees and documentation these projects require?",
      "Is a direct route realistic, or should we partner or prepare first?",
    ],
    relatedLabel: "All market access paths",
    metaTitle:
      "African Water & Sanitation (AfDB) — Government Opportunity Brief",
    metaDescription:
      "A real-world donor-funded demand example: AfDB-financed water and sanitation procurement across Africa — and why suppliers need fit, readiness, and a validated route.",
    decisionMockup: {
      fitSignal: "medium",
      readinessRisk: "high",
      blockersDetected: 5,
      route: "partner",
      decision: "prepare-first",
    },
  },

  /* ======================== SITE-016 — library expansion ======================== */

  /* ----------------------------------------- United States · IT (local) */
  {
    slug: "united-states-it-infrastructure",
    market: "United States",
    pathType: "local",
    status: "real-world-example",
    icon: "layers",
    currency: "USD",
    source: {
      name: "GSA — Multiple Award Schedule, IT Category",
      url: "https://www.gsa.gov/technology/it-contract-vehicles-and-purchasing-programs/multiple-award-schedule-it",
    },
    references: [
      {
        name: "SAM.gov — Contract Opportunities",
        url: "https://sam.gov/opportunities",
      },
      {
        name: "USAspending.gov — Federal spending data",
        url: "https://www.usaspending.gov/",
      },
    ],
    contactPath: "united-states",
    relatedHref: "/market-access/united-states",

    opportunityType: "IT infrastructure, hardware & technical equipment",
    buyerType: "U.S. federal agencies & GSA-served buyers (state/local via cooperative purchasing)",
    shortTitle: "Federal IT infrastructure & equipment",
    heroEyebrow: "United States · Local market",
    heroTitle: "Continuous federal demand for IT hardware and infrastructure.",
    heroSubtitle:
      "U.S. agencies buy IT infrastructure — servers, networking, storage, endpoints and related equipment — through GSA contract vehicles and SAM.gov. The demand is recurring and broad; getting positioned on the right vehicle is the work.",
    summary:
      "The U.S. government is one of the largest technology buyers in the world, and much of its IT hardware and infrastructure flows through GSA's Multiple Award Schedule and SAM.gov. Demand is steady — but registration, category positioning, and contract-vehicle placement decide who competes.",
    whySuppliersCare: [
      "IT infrastructure is a recurring, high-frequency federal category, so a positioned reseller or manufacturer can build repeatable revenue.",
      "Distributors and OEMs of servers, networking, storage and endpoints map directly to existing federal demand.",
      "Government-wide vehicles (e.g., the GSA IT Schedule) can turn many scattered buyers into a single route once you are on contract.",
    ],
    commonRequirements: [
      "An active SAM.gov registration with a UEI, and the right NAICS / PSC codes for IT products.",
      "Placement on a GSA Schedule or other contract vehicle is often the practical route to recurring orders.",
      "Supply-chain, country-of-origin (e.g., Trade Agreements Act) and security terms frequently must be validated per solicitation.",
    ],
    commonBlockers: [
      "Registration and code mapping are incomplete, so the supplier never surfaces for the right IT buyers.",
      "Country-of-origin and supply-chain rules are underestimated, and non-compliant products are quoted.",
      "Schedule placement and pricing discipline are treated as paperwork rather than a positioning decision.",
    ],
    govDecisionAnalysis: [
      "Compare the opportunity category against the Supplier Passport to see where the IT portfolio already fits.",
      "Use AI-assisted requirement extraction to pull registration, code, country-of-origin and security terms out of the notice.",
      "Detect blockers — missing registration, non-compliant origin, no vehicle — before any bid effort.",
      "Produce a Go / No-Go decision brief: pursue now, get on a vehicle first, or pass.",
    ],
    saxGlobalAngle: [],
    readinessQuestions: [
      "Do we sell IT infrastructure categories a federal buyer actually orders?",
      "Is our SAM.gov registration active, with the correct UEI, NAICS and PSC codes?",
      "Are our products compliant with country-of-origin and supply-chain rules?",
      "Are we on a GSA Schedule or other vehicle — or do we need to get on one first?",
      "Is the realistic route a direct bid, or placement on a contract vehicle?",
    ],
    relatedLabel: "United States market access brief",
    metaTitle:
      "U.S. Federal IT Infrastructure & Equipment — Government Opportunity Brief",
    metaDescription:
      "A real-world U.S. public-sector demand example: recurring federal IT infrastructure and equipment via GSA and SAM.gov, and why suppliers need fit, readiness, and a clear route before pursuing.",
    decisionMockup: {
      fitSignal: "medium-high",
      readinessRisk: "medium",
      blockersDetected: 3,
      route: "direct",
      decision: "qualify-first",
    },
  },

  /* ------------------------------ United States · energy efficiency (local) */
  {
    slug: "united-states-energy-efficiency",
    market: "United States",
    pathType: "local",
    status: "real-world-example",
    icon: "coins",
    currency: "USD",
    source: {
      name: "U.S. DOE — FEMP, Energy-Efficient Product Procurement",
      url: "https://www.energy.gov/cmei/femp/energy-efficient-product-procurement",
    },
    references: [
      {
        name: "ENERGY STAR — Federal Procurement of Energy-Efficient Products",
        url: "https://www.energystar.gov/products/federal_procurement_policies_energy_star_certified_products",
      },
      {
        name: "SAM.gov — Contract Opportunities",
        url: "https://sam.gov/opportunities",
      },
    ],
    contactPath: "united-states",
    relatedHref: "/market-access/united-states",

    opportunityType: "Energy-efficiency & building-systems equipment",
    buyerType: "U.S. federal agencies & installations",
    shortTitle: "Federal energy-efficiency equipment",
    heroEyebrow: "United States · Local market",
    heroTitle: "Federal agencies are directed to buy energy-efficient equipment.",
    heroSubtitle:
      "U.S. agencies are required to procure energy- and water-efficient products — LED lighting, HVAC, building controls, motors and more — under federal energy-management rules. The mandate creates steady, category-broad demand for qualifying equipment.",
    summary:
      "Federal law directs agencies to buy energy- and water-efficient products, and the DOE Federal Energy Management Program (FEMP) sets the purchasing requirements. For suppliers of qualifying building-systems equipment the result is a recurring demand signal — but registration, product qualification, and the right contract route still decide who competes.",
    whySuppliersCare: [
      "Federal efficiency mandates make energy-efficient equipment a recurring, policy-driven category rather than a one-off buy.",
      "Manufacturers and distributors of LED lighting, HVAC, controls, motors and water-efficient products map to existing requirements.",
      "ENERGY STAR / FEMP-designated products carry a built-in qualification signal buyers are directed to prefer.",
    ],
    commonRequirements: [
      "An active SAM.gov registration with a UEI, and NAICS / PSC codes for the product category.",
      "Products often must meet ENERGY STAR or FEMP-designated efficiency levels to qualify.",
      "A contract vehicle or schedule placement is frequently the practical route to recurring orders.",
    ],
    commonBlockers: [
      "Products are not on the ENERGY STAR / FEMP-designated lists buyers are directed to prefer.",
      "Registration and code mapping are incomplete, so the supplier never surfaces for the right buyers.",
      "Delivery, installation and specification terms are underestimated and must be validated per solicitation.",
    ],
    govDecisionAnalysis: [
      "Compare the opportunity against the Supplier Passport to confirm product and efficiency-qualification fit.",
      "Use AI-assisted requirement extraction to pull efficiency standards, registration and delivery terms out of the notice.",
      "Detect blockers — non-qualifying products, missing registration, no vehicle — before any bid effort.",
      "Produce a Go / No-Go decision brief: pursue now, qualify products first, or pass.",
    ],
    saxGlobalAngle: [],
    readinessQuestions: [
      "Do our products meet ENERGY STAR or FEMP-designated efficiency levels?",
      "Is our SAM.gov registration active, with the correct UEI, NAICS and PSC codes?",
      "Can we evidence the efficiency claims a federal buyer is directed to require?",
      "Can we meet federal delivery, installation and specification terms?",
      "Is the realistic route a direct bid, or placement on a contract vehicle first?",
    ],
    relatedLabel: "United States market access brief",
    metaTitle:
      "U.S. Federal Energy-Efficiency Equipment — Government Opportunity Brief",
    metaDescription:
      "A real-world U.S. public-sector demand example: federal energy-efficiency and building-systems equipment under DOE FEMP rules, and why suppliers need fit, product qualification, and readiness.",
    decisionMockup: {
      fitSignal: "medium-high",
      readinessRisk: "medium",
      blockersDetected: 4,
      route: "direct",
      decision: "review-before-pursuit",
    },
  },

  /* ----------------------------------------------- Brazil · education (local) */
  {
    slug: "brazil-education-equipment",
    market: "Brazil",
    pathType: "local",
    status: "real-world-example",
    icon: "memo",
    currency: "BRL",
    source: {
      name: "FNDE — Atas de Registro de Preços (Compras governamentais)",
      url: "https://www.fnde.gov.br/acoes/compras-governamentais/compras-nacionais/atas-de-registro-de-precos",
    },
    references: [
      {
        name: "PNCP — Portal Nacional de Contratações Públicas",
        url: "https://pncp.gov.br/app/editais",
      },
      {
        name: "FNDE — SIGARP (Sistema de Gestão de Atas de Registro de Preços)",
        url: "https://www.fnde.gov.br/sigarpweb/",
      },
    ],
    contactPath: "brazil",
    relatedHref: "/market-access/brazil",

    opportunityType: "School furniture, equipment & education supplies",
    buyerType: "FNDE plus state & municipal education networks (price-registration adhesion)",
    shortTitle: "School & education equipment",
    heroEyebrow: "Brazil · Local market",
    heroTitle: "Nationwide school-equipment demand, organized through the FNDE.",
    heroSubtitle:
      "Brazil's FNDE runs national price-registration records (atas) for school furniture, equipment, kitchen items and school buses that thousands of municipalities and states can buy from. The demand is large and standardized — qualifying for it is the work.",
    summary:
      "The FNDE (the education ministry's funding agency) centralizes large volumes of school furniture and equipment demand into national price-registration records that states and municipalities adhere to. For qualifying manufacturers the volume is real — but Inmetro conformity, registration, and production capacity decide who competes.",
    whySuppliersCare: [
      "FNDE price-registration records aggregate school-equipment demand across thousands of municipalities into standardized lots.",
      "Manufacturers of school furniture, kitchen equipment and classroom items map directly to recurring public education demand.",
      "Adhesion by states and municipalities can turn a single registration into a broad, repeatable pipeline.",
    ],
    commonRequirements: [
      "Participation in FNDE price-registration processes (e.g., via SIGARP) and the related habilitation are usually expected.",
      "Inmetro conformity and technical specifications often apply to school furniture and equipment.",
      "Production, quality-control and delivery capacity at national scale must be validated per record.",
    ],
    commonBlockers: [
      "Products do not meet the Inmetro and technical specifications the records require.",
      "Suppliers underestimate the production and delivery capacity adhesion volumes can demand.",
      "Habilitation documents lapse or are incomplete, disqualifying otherwise competitive manufacturers.",
    ],
    govDecisionAnalysis: [
      "Match the opportunity to the Supplier Passport to confirm product, conformity and capacity fit.",
      "Use AI-assisted extraction to pull conformity, habilitation and delivery requirements from the record.",
      "Detect blockers — missing Inmetro conformity, capacity gaps, expired documents — before committing.",
      "Prepare a Go / No-Go decision brief instead of reacting to every published record.",
    ],
    saxGlobalAngle: [],
    readinessQuestions: [
      "Do we manufacture school furniture or equipment the FNDE records actually cover?",
      "Do our products carry the required Inmetro conformity and technical specifications?",
      "Can we produce and deliver at the scale adhesion volumes may demand?",
      "Are our habilitation documents current and complete?",
      "Is this worth pursuing now, or should we organize conformity and capacity first?",
    ],
    relatedLabel: "Brazil market access brief",
    metaTitle:
      "Brazil School & Education Equipment (FNDE) — Government Opportunity Brief",
    metaDescription:
      "A real-world Brazilian public-sector demand example: school furniture and education equipment through FNDE price-registration records, and why suppliers need fit, conformity, and readiness.",
    decisionMockup: {
      fitSignal: "high",
      readinessRisk: "medium",
      blockersDetected: 3,
      route: "direct",
      decision: "qualify-first",
    },
  },

  /* ----------------------------- Mexico · electrical / industrial (cross-border) */
  {
    slug: "mexico-electrical-industrial-supplies",
    market: "Mexico",
    pathType: "cross-border",
    status: "market-signal",
    icon: "route",
    currency: "MXN",
    source: {
      name: "ComprasMX — Plataforma Digital de Contrataciones (Gobierno de México)",
      url: "https://comprasmx.buengobierno.gob.mx/",
    },
    references: [
      {
        name: "ComprasMX — Registro Único de Proveedores y Contratistas (RUPC)",
        url: "https://comprasmx.buengobierno.gob.mx/rupc",
      },
    ],
    contactPath: "brazil-to-mexico",
    relatedHref: "/market-access",

    opportunityType: "Electrical components & industrial / operational supplies",
    buyerType: "Mexican federal public administration entities",
    shortTitle: "Electrical & industrial supplies",
    heroEyebrow: "Mexico · Cross-border path",
    heroTitle: "A large federal buyer with steady industrial-supply needs.",
    heroSubtitle:
      "Mexico's federal government publishes tenders on ComprasMX (the platform that replaced CompraNet), including electrical components and industrial / operational supplies. For a cross-border supplier — for example from Brazil — proximity and regional trade ties help, but registration and representation rules are decisive.",
    summary:
      "Mexico's federal procurement runs through ComprasMX, with continuous demand for electrical components and industrial supplies. The market is sizable and adjacent for many LATAM suppliers, but cross-border participants must validate RUPC registration, representation, and compliance before competing.",
    whySuppliersCare: [
      "A large federal buyer with continuous electrical and industrial-supply needs is a meaningful adjacent market.",
      "A modernized, centralized platform (ComprasMX) makes federal demand more transparent and searchable.",
      "Electrical components and industrial supplies map to existing B2B product lines for many manufacturers and distributors.",
    ],
    commonRequirements: [
      "Registration in the supplier and contractor registry (RUPC) on ComprasMX is generally required to participate.",
      "A local presence, representative or RFC tax registration may be required depending on the procedure.",
      "Bid documentation in Spanish, technical norms (e.g., NOM) and compliance must be validated per tender.",
    ],
    commonBlockers: [
      "Cross-border suppliers underestimate RUPC registration, tax and local-representation requirements.",
      "Mexican technical norms (NOM) and specifications are buyer-specific and must be validated, not assumed.",
      "Delivery, warranty and support obligations across the border add execution risk.",
    ],
    govDecisionAnalysis: [
      "Compare the opportunity to the Supplier Passport and surface cross-border eligibility gaps.",
      "Extract registration, representation and technical-norm requirements with AI assistance.",
      "Detect blockers — RUPC registration, RFC, NOM compliance — before investing in a bid.",
      "Produce a Go / No-Go decision brief: direct, partner-led, or prepare first.",
    ],
    saxGlobalAngle: [
      "For a Brazil → Mexico path, Sax Global may support market-access planning and route validation across the border.",
      "Sax Global can help test local-representation, tax-presence and distributor assumptions where required.",
      "Execution context — language, warranty, in-country support — can be scoped before commitment.",
    ],
    readinessQuestions: [
      "Do our electrical / industrial categories match what Mexican federal buyers order?",
      "Are we ready to register (RUPC) and meet local tax / representation rules?",
      "Can our products meet Mexican technical norms (NOM) where they apply?",
      "Can we meet delivery, warranty and support obligations across the border?",
      "Is a direct route realistic, or should we prepare or partner first?",
    ],
    relatedLabel: "All market access paths",
    metaTitle:
      "Mexico Electrical & Industrial Supplies — Government Opportunity Brief",
    metaDescription:
      "A real-world Mexican federal demand example via ComprasMX for electrical components and industrial supplies — and why cross-border suppliers need fit, readiness, and a validated route.",
    decisionMockup: {
      fitSignal: "medium",
      readinessRisk: "high",
      blockersDetected: 5,
      route: "partner",
      decision: "prepare-first",
    },
  },

  /* ----------------------------- Canada · facilities management (cross-border) */
  {
    slug: "canada-facilities-management",
    market: "Canada",
    pathType: "cross-border",
    status: "market-signal",
    icon: "target",
    currency: "CAD",
    source: {
      name: "CanadaBuys — Government of Canada tender opportunities",
      url: "https://canadabuys.canada.ca/en/tender-opportunities",
    },
    references: [
      {
        name: "PSPC — Real property services & infrastructure",
        url: "https://www.canada.ca/en/public-services-procurement/services/infrastructure-buildings.html",
      },
    ],
    contactPath: "canada",
    relatedHref: "/market-access",

    opportunityType: "Facilities management, building operations & maintenance",
    buyerType: "Government of Canada departments & agencies (real property, via PSPC)",
    shortTitle: "Facilities management & operations",
    heroEyebrow: "Canada · Cross-border path",
    heroTitle: "Federal real estate that needs continuous operation and upkeep.",
    heroSubtitle:
      "Canada's federal government operates a large real-property portfolio and contracts facilities management, building operations and maintenance through CanadaBuys, operated by PSPC. Demand is published openly — but trade-agreement rules, registration and delivery terms shape who can compete.",
    summary:
      "PSPC manages a large federal real-property portfolio and publishes facilities-management and maintenance requirements on CanadaBuys. The demand is steady and transparent, but suppliers must validate registration, trade-agreement coverage, bilingual terms and local delivery capacity.",
    whySuppliersCare: [
      "A large federal real-property portfolio creates continuous facilities-management and maintenance demand.",
      "An open, English / French federal portal (CanadaBuys) makes the demand unusually easy to monitor.",
      "Trade agreements can open Canadian procurement to qualifying foreign suppliers — a real cross-border signal.",
    ],
    commonRequirements: [
      "Supplier registration on CanadaBuys is generally needed to bid.",
      "Facilities and maintenance work usually needs local delivery capacity and may require bonding or insurance.",
      "Procurement may be governed by trade agreements and bilingual terms that must be validated.",
    ],
    commonBlockers: [
      "Service-based facilities work usually needs local presence or partners that cross-border suppliers underestimate.",
      "Bilingual and Canadian-specific compliance terms are underestimated.",
      "Bonding, insurance and delivery requirements must be validated per tender.",
    ],
    govDecisionAnalysis: [
      "Compare the opportunity to the Supplier Passport and flag cross-border eligibility and capacity questions.",
      "Extract registration, trade-agreement, bonding and delivery requirements with AI assistance.",
      "Detect blockers — local presence, bonding, bilingual compliance — before committing.",
      "Prepare a Go / No-Go decision brief rather than chasing every notice.",
    ],
    saxGlobalAngle: [
      "For a cross-border path into Canada, Sax Global may support market-access planning and route validation.",
      "Sax Global can help test local-presence, partner and trade-agreement assumptions where they apply.",
      "Execution context — local delivery, bonding, support — can be scoped before commitment.",
    ],
    readinessQuestions: [
      "Do our facilities / maintenance services match what Canadian federal buyers order?",
      "Are we registered on CanadaBuys and clear on trade-agreement coverage?",
      "Can we provide the local delivery capacity facilities work usually needs?",
      "Can we meet bilingual, bonding and insurance requirements?",
      "Is a direct route realistic, or do we need a Canadian partner first?",
    ],
    relatedLabel: "All market access paths",
    metaTitle:
      "Canada Facilities Management & Operations — Government Opportunity Brief",
    metaDescription:
      "A real-world Canadian federal demand example via CanadaBuys for facilities management and building operations — and why cross-border suppliers need fit, readiness, and trade-agreement clarity.",
    decisionMockup: {
      fitSignal: "medium",
      readinessRisk: "high",
      blockersDetected: 4,
      route: "partner",
      decision: "prepare-first",
    },
  },

  /* ------------------------------------------------ Colombia · MRO (regional) */
  {
    slug: "colombia-operational-supplies",
    market: "Colombia",
    pathType: "regional",
    status: "market-signal",
    icon: "compass",
    currency: "COP",
    source: {
      name: "Colombia Compra Eficiente — SECOP II",
      url: "https://www.colombiacompra.gov.co/secop/secop-ii",
    },
    references: [
      {
        name: "Colombia Compra Eficiente — Proveedores (supplier registration)",
        url: "https://www.colombiacompra.gov.co/secop/proveedores",
      },
    ],
    contactPath: "colombia",
    relatedHref: "/market-access",

    opportunityType: "MRO, operational & industrial supplies",
    buyerType: "Colombian national & territorial public entities",
    shortTitle: "MRO & operational supplies",
    heroEyebrow: "Colombia · Regional path",
    heroTitle: "A large LATAM market with a centralized, transactional portal.",
    heroSubtitle:
      "Colombia runs public procurement through SECOP II, the transactional platform operated by Colombia Compra Eficiente, where national and territorial entities buy MRO, operational and industrial supplies. The portal is open to national and foreign suppliers — but registration and local terms must be validated.",
    summary:
      "Colombia centralizes public contracting on SECOP II, a fully transactional platform. MRO and operational-supply demand recurs across national and territorial buyers, and the system is formally open to foreign suppliers — but supplier-account setup, documentation, and local representation shape who can realistically compete.",
    whySuppliersCare: [
      "Colombia is one of the larger LATAM public markets, with a centralized, transactional portal (SECOP II).",
      "MRO, operational and industrial-supply categories recur across national and territorial entities.",
      "The system is formally open to national and foreign suppliers, a real signal for regional expansion.",
    ],
    commonRequirements: [
      "A SECOP II supplier account, with the required legal and financial documentation, is generally expected.",
      "RUP (Registro Único de Proponentes) and a local representative or presence may apply depending on the process.",
      "Bid documentation in Spanish and compliance with local terms must be validated per process.",
    ],
    commonBlockers: [
      "Foreign suppliers underestimate supplier-account, RUP and documentation requirements.",
      "Local representation, currency and logistics add execution risk that must be planned.",
      "Financial-capacity and experience criteria are process-specific and must be validated, not assumed.",
    ],
    govDecisionAnalysis: [
      "Compare the opportunity to the Supplier Passport and flag where cross-border eligibility is unclear.",
      "Extract supplier-account, RUP and documentation requirements from the process with AI assistance.",
      "Detect blockers — missing registration, local presence, capacity gaps — before pursuing.",
      "Frame a Go / No-Go: pursue directly, pursue via a local partner, or prepare first.",
    ],
    saxGlobalAngle: [
      "For a regional path into Colombia, Sax Global may support market-access planning and route validation.",
      "Sax Global can help test partner / distributor and local-representation assumptions where required.",
      "Execution context — language, logistics, currency — can be scoped before any commitment.",
    ],
    readinessQuestions: [
      "Do we sell categories Colombian public buyers order, and at the right scale?",
      "Are we prepared to set up a SECOP II account and meet RUP / documentation rules?",
      "Do we need a local representative or distributor for this process?",
      "Can we handle cross-border delivery, currency and documentation?",
      "Is a direct route realistic, or is a partner / prepare-first route smarter?",
    ],
    relatedLabel: "All market access paths",
    metaTitle:
      "Colombia MRO & Operational Supplies — Government Opportunity Brief",
    metaDescription:
      "A real-world Colombian public-sector demand example via SECOP II for MRO and operational supplies — and why a regional supplier needs fit, readiness, and a validated route.",
    decisionMockup: {
      fitSignal: "medium",
      readinessRisk: "medium",
      blockersDetected: 4,
      route: "partner",
      decision: "prepare-first",
    },
  },

  /* ------------------------------------------------------- IDB (multilateral) */
  {
    slug: "idb-development-equipment",
    market: "IDB",
    pathType: "multilateral",
    status: "real-world-example",
    icon: "globe",
    currency: "USD",
    source: {
      name: "IDB — Procurement Notices (IDB-financed projects)",
      url: "https://www.iadb.org/en/how-we-can-work-together/procurement/procurement-projects/procurement-notices",
    },
    references: [
      {
        name: "IDB — Procurement for IDB-financed projects",
        url: "https://www.iadb.org/en/how-we-can-work-together/procurement/procurement-projects",
      },
    ],
    contactPath: "latin-america-development-bank",
    relatedHref: "/market-access",

    opportunityType: "Technical & infrastructure equipment for development projects",
    buyerType: "Latin American & Caribbean executing agencies (IDB-financed projects)",
    shortTitle: "IDB-financed project equipment",
    heroEyebrow: "IDB · Multilateral path",
    heroTitle: "Development-bank-financed demand across Latin America and the Caribbean.",
    heroSubtitle:
      "The Inter-American Development Bank finances thousands of projects across Latin America and the Caribbean, with executing agencies procuring goods, equipment and works. Procurement is open to firms from IDB member countries — but eligibility and process discipline are central.",
    summary:
      "IDB-financed projects generate tens of thousands of contracts a year for goods, equipment and works, procured by borrower executing agencies under IDB rules. Demand is broad across the region, and participation is open to firms from IDB member countries — but eligibility, process and execution discipline decide who competes.",
    whySuppliersCare: [
      "IDB-financed projects generate large, recurring procurement for goods, equipment and works across the region.",
      "Participation is open to firms from IDB member countries, widening who can compete.",
      "Suppliers of technical and infrastructure equipment map directly to project needs.",
    ],
    commonRequirements: [
      "Eligibility typically depends on IDB member-country rules and the project's procurement method.",
      "Bids follow executing-agency and IDB procurement policies that must be read per notice.",
      "Technical specifications, delivery to project sites and documentation must be validated per opportunity.",
    ],
    commonBlockers: [
      "Suppliers treat IDB procurement like domestic bidding and miss eligibility and process rules.",
      "Logistics to project locations, lead times and local presence are underestimated.",
      "Performance guarantees, standards and documentation must be validated per opportunity.",
    ],
    govDecisionAnalysis: [
      "Compare the opportunity to the Supplier Passport and flag eligibility and capacity gaps.",
      "Extract eligibility, specification and delivery requirements from the notice with AI assistance.",
      "Detect blockers — eligibility, logistics, guarantees — before committing resources.",
      "Produce a Go / No-Go decision brief tuned to multilateral process discipline.",
    ],
    saxGlobalAngle: [
      "For multilateral, development-bank-financed paths, Sax Global may support market-access planning and route validation.",
      "Sax Global can help test partner, logistics and execution-capacity assumptions where applicable.",
      "Execution context for project delivery can be scoped before commitment.",
    ],
    readinessQuestions: [
      "Do our categories match what IDB-financed projects actually procure?",
      "Are we eligible under IDB member-country and project procurement rules?",
      "Can we deliver to project locations and meet technical specifications?",
      "Can we provide the guarantees and documentation these projects require?",
      "Is a direct route realistic, or should we partner or prepare first?",
    ],
    relatedLabel: "All market access paths",
    metaTitle: "IDB-Financed Project Equipment — Government Opportunity Brief",
    metaDescription:
      "A real-world multilateral demand example: technical and infrastructure equipment for IDB-financed projects across Latin America and the Caribbean — and why suppliers need fit, readiness, and process discipline.",
    decisionMockup: {
      fitSignal: "medium",
      readinessRisk: "high",
      blockersDetected: 5,
      route: "prepare-first",
      decision: "prepare-first",
    },
  },

  /* ------------------------- Selected African markets · energy (multilateral) */
  {
    slug: "africa-energy-access",
    market: "Selected African markets",
    pathType: "multilateral",
    status: "real-world-example",
    icon: "spark",
    currency: "USD / local",
    source: {
      name: "African Development Bank — Sustainable Energy Fund for Africa (SEFA)",
      url: "https://www.afdb.org/en/topics-and-sectors/initiatives-partnerships/sustainable-energy-fund-for-africa",
    },
    references: [
      {
        name: "African Development Bank — Project Procurement",
        url: "https://www.afdb.org/en/projects-and-operations/procurement",
      },
    ],
    contactPath: "africa-energy-access",
    relatedHref: "/market-access",

    opportunityType: "Energy-access & electrification equipment (donor-funded)",
    buyerType: "African public agencies & utilities via AfDB-financed energy programs",
    shortTitle: "Energy access & electrification",
    heroEyebrow: "Selected African markets · Multilateral path",
    heroTitle: "Donor-funded energy-access demand across the continent.",
    heroSubtitle:
      "The African Development Bank finances renewable-energy and electrification programs — including the Sustainable Energy Fund for Africa (SEFA) and the Desert to Power initiative — generating procurement for solar, off-grid and electrification equipment. The demand is significant; multilateral eligibility and execution rules are central.",
    summary:
      "AfDB-financed energy programs — including SEFA and Desert to Power — drive procurement for solar systems, off-grid kits, mini-grids and electrification equipment across Africa. Demand is real and growing, but eligibility, executing-agency rules, and execution capacity decide participation.",
    whySuppliersCare: [
      "Donor-funded energy-access programs create sustained demand for solar, off-grid and electrification equipment.",
      "AfDB procurement is open to firms from member countries, widening who can participate.",
      "Suppliers of solar modules, batteries, inverters and distribution equipment map directly to project needs.",
    ],
    commonRequirements: [
      "Eligibility typically depends on AfDB member-country rules and the project's procurement method.",
      "Bids follow executing-agency and AfDB procurement rules that must be read per notice.",
      "Technical specifications, delivery to project sites and after-sales support may all be required.",
    ],
    commonBlockers: [
      "Suppliers misjudge eligibility and executing-agency requirements that vary by project.",
      "Logistics to remote project locations, lead times and local presence are underestimated.",
      "Quality standards, warranties and documentation must be validated per opportunity.",
    ],
    govDecisionAnalysis: [
      "Compare the opportunity to the Supplier Passport and flag eligibility and capacity gaps.",
      "Extract eligibility, specification and delivery requirements from the notice with AI assistance.",
      "Detect blockers — eligibility, logistics, warranties — before committing resources.",
      "Prepare a Go / No-Go decision brief suited to donor-funded execution.",
    ],
    saxGlobalAngle: [
      "For donor-funded, multilateral paths, Sax Global may support market-access planning and route validation.",
      "Sax Global can help test partner, logistics and execution-capacity assumptions where applicable.",
      "Practical execution context for project delivery can be scoped before commitment.",
    ],
    readinessQuestions: [
      "Do our energy products fit AfDB-financed electrification and renewable-energy projects?",
      "Are we eligible under member-country and project procurement rules?",
      "Can we deliver to remote project locations and meet technical specifications?",
      "Can we provide the warranties, support and documentation these projects require?",
      "Is a direct route realistic, or should we partner or prepare first?",
    ],
    relatedLabel: "All market access paths",
    metaTitle:
      "African Energy Access & Electrification (AfDB) — Government Opportunity Brief",
    metaDescription:
      "A real-world donor-funded demand example: AfDB-financed energy-access and electrification equipment across Africa — and why suppliers need fit, readiness, and a validated route.",
    decisionMockup: {
      fitSignal: "medium",
      readinessRisk: "high",
      blockersDetected: 5,
      route: "partner",
      decision: "prepare-first",
    },
  },
];

/* ------------------------------------------------------------- Selectors */

export const briefSlugs: string[] = opportunityBriefs.map((b) => b.slug);

export function getBrief(slug: string): OpportunityBrief | undefined {
  return opportunityBriefs.find((b) => b.slug === slug);
}

/** Unique markets, in display order, for the index filter chips. */
export const briefMarkets: BriefMarket[] = opportunityBriefs.reduce<BriefMarket[]>(
  (acc, b) => (acc.includes(b.market) ? acc : [...acc, b.market]),
  [],
);

/** Bare contact href for a brief: `/contact?path=<token>&type=<pathType>`. */
export function briefContactHref(brief: OpportunityBrief): string {
  return `/contact?path=${brief.contactPath}&type=${brief.pathType}`;
}

/** Local examples route to GovDecision readiness; everything else to Sax Global. */
export function briefIsLocal(brief: OpportunityBrief): boolean {
  return brief.pathType === "local";
}
