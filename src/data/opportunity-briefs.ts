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
  | "UN / World Bank"
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
