import type { IconName } from "@/components/ui/Icon";

/**
 * Market Access Paths — data foundation.
 *
 * This file is the single source of truth for the /market-access experience and
 * is intentionally shaped to power future per-path route pages:
 *   SITE-003 — Local Paths
 *   SITE-004 — Cross-Border Paths
 *
 * Each path carries a `slug`, `status`, and role fields so a future
 * `/market-access/[slug]` route can render a full detail page without a data
 * migration. No detail pages are implemented in this PR.
 */

export type PathType = "Local" | "Cross-border" | "Multilateral" | "Regional";

/** Rollout status, aligned with the corridor vocabulary used elsewhere. */
export type PathStatus = "Active focus" | "In development" | "Targeted";

export type MarketAccessPath = {
  /** Stable id for future `/market-access/[slug]` detail routes. */
  slug: string;
  originCountry: string;
  targetMarket: string;
  pathType: PathType;
  status: PathStatus;
  title: string;
  summary: string;
  focusAreas: string[];
  /** How GovDecision supports this path (used on future detail pages). */
  govDecisionRole: string;
  /** How Sax Global supports this path, where it applies (cross-border). */
  saxGlobalRole?: string;
  ctaLabel: string;
  /** For this PR every CTA routes to /contact; future PRs swap to detail pages. */
  ctaHref: string;
};

/* ------------------------------------------------------------------ Geography */

/** Continental grouping used to classify a selected path. */
const region: Record<string, string> = {
  Brazil: "South America",
  "United States": "North America",
  Paraguay: "South America",
  Mexico: "North America",
  Canada: "North America",
  "UN & World Bank": "Multilateral",
  "Selected African markets": "Africa",
};

/** Company-location options for the selector. */
export const originOptions = [
  "Brazil",
  "United States",
  "Paraguay",
  "Mexico",
  "Canada",
];

/** Target-market options for the selector (includes multilateral + regional). */
export const targetOptions = [
  "Brazil",
  "United States",
  "Paraguay",
  "Mexico",
  "Canada",
  "UN & World Bank",
  "Selected African markets",
];

/** Default selected example for this PR: Brazil → United States. */
export const defaultPath = { origin: "Brazil", target: "United States" };

/**
 * Deterministic, side-effect-free classification of a chosen path. Same market
 * is local; UN/World Bank is multilateral; same continent is regional;
 * everything else is cross-border.
 */
export function classifyPath(origin: string, target: string): PathType {
  if (origin === target) return "Local";
  if (target === "UN & World Bank") return "Multilateral";
  if (region[origin] && region[origin] === region[target]) return "Regional";
  return "Cross-border";
}

/** What each path type usually requires — drives the selector preview. */
export const pathRequirements: Record<PathType, string[]> = {
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
};

export const recommendedFirstStep =
  "Start with a GovDecision readiness review.";

/** Presentation tokens shared by the path cards and the selector preview. */
export const pathTypeStyles: Record<PathType, string> = {
  Local: "bg-plum/8 text-plum",
  "Cross-border": "bg-coral/10 text-coral-600",
  Multilateral: "bg-plum text-white",
  Regional: "bg-surface text-slate",
};

export const pathTypeIcon: Record<PathType, IconName> = {
  Local: "target",
  "Cross-border": "route",
  Multilateral: "globe",
  Regional: "compass",
};

/* ---------------------------------------------------- Local vs cross-border */

export type PathMode = {
  key: "local" | "cross-border";
  label: string;
  type: PathType;
  copy: string;
  examples: { origin: string; target: string }[];
  helpsLabel: string;
  helps: string[];
};

export const pathModes: PathMode[] = [
  {
    key: "local",
    label: "Local government business",
    type: "Local",
    copy: "Sell to public buyers in your own market with clearer opportunity qualification, document readiness, and pursuit discipline.",
    examples: [
      { origin: "Brazil", target: "Brazil" },
      { origin: "United States", target: "United States" },
      { origin: "Paraguay", target: "Paraguay" },
      { origin: "Mexico", target: "Mexico" },
      { origin: "Canada", target: "Canada" },
    ],
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
    key: "cross-border",
    label: "Cross-border government business",
    type: "Cross-border",
    copy: "Evaluate government opportunities in foreign or multilateral markets with country-specific readiness, route-to-market logic, and Sax Global support.",
    examples: [
      { origin: "Brazil", target: "United States" },
      { origin: "Brazil", target: "UN & World Bank" },
      { origin: "United States", target: "Brazil" },
      { origin: "Brazil", target: "Paraguay" },
      { origin: "Mexico", target: "United States" },
    ],
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
];

/* ---------------------------------------------------------- Market path cards */

export const marketAccessPaths: MarketAccessPath[] = [
  {
    slug: "brazil-brazil",
    originCountry: "Brazil",
    targetMarket: "Brazil",
    pathType: "Local",
    status: "Active focus",
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
    govDecisionRole:
      "Qualifies opportunities, extracts requirements, and structures readiness for Brazilian public buyers.",
    ctaLabel: "Explore Brazil local path",
    ctaHref: "/contact",
  },
  {
    slug: "united-states-united-states",
    originCountry: "United States",
    targetMarket: "United States",
    pathType: "Local",
    status: "Active focus",
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
    govDecisionRole:
      "Maps the federal landscape, registration paths, and readiness for U.S. suppliers.",
    ctaLabel: "Explore U.S. local path",
    ctaHref: "/contact",
  },
  {
    slug: "brazil-united-states",
    originCountry: "Brazil",
    targetMarket: "United States",
    pathType: "Cross-border",
    status: "Active focus",
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
    govDecisionRole:
      "Assesses export readiness, registration context, and route-to-market for U.S. government business.",
    saxGlobalRole:
      "Supports market access planning, partner strategy, and cross-border execution context.",
    ctaLabel: "Explore Brazil to U.S. path",
    ctaHref: "/contact",
  },
  {
    slug: "brazil-un-world-bank",
    originCountry: "Brazil",
    targetMarket: "UN & World Bank",
    pathType: "Multilateral",
    status: "In development",
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
    govDecisionRole:
      "Organizes registration, eligibility, and documentation, then qualifies multilateral opportunities.",
    saxGlobalRole:
      "Provides context for international eligibility and multilateral execution.",
    ctaLabel: "Explore multilateral path",
    ctaHref: "/contact",
  },
  {
    slug: "united-states-brazil",
    originCountry: "United States",
    targetMarket: "Brazil",
    pathType: "Cross-border",
    status: "In development",
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
    govDecisionRole:
      "Clarifies buyers, sources, and documentation for Brazilian public procurement.",
    saxGlobalRole:
      "Advises on representation, partner strategy, and local business context.",
    ctaLabel: "Explore U.S. to Brazil path",
    ctaHref: "/contact",
  },
  {
    slug: "brazil-paraguay",
    originCountry: "Brazil",
    targetMarket: "Paraguay",
    pathType: "Regional",
    status: "Targeted",
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
    govDecisionRole:
      "Validates the country pack, route, and readiness for regional expansion.",
    saxGlobalRole:
      "Supports regional route validation and local partner discussions.",
    ctaLabel: "Explore regional path",
    ctaHref: "/contact",
  },
];

/* ------------------------------------------------- Where GovDecision enters */

export type JourneyStep = {
  label: string;
  description: string;
  icon: IconName;
};

export const govDecisionJourney: JourneyStep[] = [
  {
    label: "Supplier profile",
    description: "Capture what your company is, sells, and is ready to prove.",
    icon: "passport",
  },
  {
    label: "Market / country logic",
    description:
      "Apply the rules, sources, and requirements of each target market.",
    icon: "globe",
  },
  {
    label: "Opportunity qualification",
    description: "Score fit and filter out what is not worth pursuing.",
    icon: "target",
  },
  {
    label: "Readiness gaps",
    description:
      "Surface the documents, registrations, and blockers to fix first.",
    icon: "shield",
  },
  {
    label: "Route recommendation",
    description: "See whether to go direct, partner, represent, or distribute.",
    icon: "route",
  },
  {
    label: "Pursuit or prepare-first decision",
    description:
      "Decide to pursue now or prepare first — with the reasons written down.",
    icon: "memo",
  },
];

export const govDecisionJourneyNote =
  "Instead of chasing every public opportunity, GovDecision helps suppliers understand what they can realistically pursue, what must be fixed first, and which route makes sense for each market.";

/* ------------------------------------------------------- Where Sax Global enters */

export type SaxGlobalService = {
  title: string;
  description: string;
  icon: IconName;
};

export const saxGlobalCopy =
  "For cross-border paths, software is only part of the journey. Sax Global can support market access planning, international business setup context, partner route discussions, and practical cross-border execution guidance where applicable.";

export const saxGlobalServices: SaxGlobalService[] = [
  {
    title: "Market access planning",
    description:
      "Map a realistic entry approach for the markets you want to pursue.",
    icon: "compass",
  },
  {
    title: "Local partner strategy",
    description:
      "Think through when to partner, represent, distribute, or go direct.",
    icon: "route",
  },
  {
    title: "International business context",
    description:
      "Understand what cross-border government business typically involves.",
    icon: "globe",
  },
  {
    title: "Cross-border execution readiness",
    description:
      "Prepare the operational groundwork a foreign pursuit can require.",
    icon: "layers",
  },
  {
    title: "Commercial route validation",
    description:
      "Pressure-test the route to market before committing resources.",
    icon: "checklist",
  },
];

/** Guardrail copy: keep expectations honest. No guarantees of any kind. */
export const saxGlobalDisclaimer =
  "Sax Global provides planning, context, and guidance. It does not guarantee market access, eligibility, partner placement, financing, or contract outcomes.";
