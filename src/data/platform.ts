/**
 * Platform module definitions used on /platform and referenced on the home page.
 * Copy is centralized here for reuse and future localization.
 */
export type PlatformModule = {
  id: string;
  step: string;
  name: string;
  tagline: string;
  description: string;
  points: string[];
};

export const platformIntro = {
  eyebrow: "The platform",
  title: "The decision layer for government sales.",
  description:
    "Six connected modules take a supplier from raw opportunity noise to a defensible go/no-go decision, an executable readiness plan, and a route to market — across countries.",
};

export const platformModules: PlatformModule[] = [
  {
    id: "supplier-passport",
    step: "01",
    name: "Supplier Passport",
    tagline: "One structured profile of what your company can actually deliver.",
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
    id: "opportunity-qualification",
    step: "02",
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
    id: "readiness-workspace",
    step: "03",
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
    id: "country-packs",
    step: "04",
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
    id: "deal-room",
    step: "05",
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
    id: "post-award",
    step: "06",
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
];

/** Home page "What GovDecision does" cards. */
export const capabilityCards: { title: string; description: string; icon: string }[] = [
  {
    title: "Qualify opportunities",
    description:
      "Score fit, complexity, and effort so your team spends time on opportunities you can actually win.",
    icon: "target",
  },
  {
    title: "Detect blockers",
    description:
      "Surface missing registrations, certificates, guarantees, and partner requirements before deadlines do.",
    icon: "shield",
  },
  {
    title: "Build supplier readiness",
    description:
      "Convert requirements into tracked tasks with owners and dates, and watch readiness climb.",
    icon: "checklist",
  },
  {
    title: "Recommend route-to-market",
    description:
      "Direct, distributor, local partner, subcontract, consortium, or prepare first — guided by fit and market.",
    icon: "route",
  },
  {
    title: "Structure pursuit decisions",
    description:
      "Bring strategy, risk, pricing, and approvals into one decision memo your leadership can stand behind.",
    icon: "memo",
  },
  {
    title: "Prepare after award",
    description:
      "Plan delivery, guarantees, milestones, and finance timing so a win becomes an executed contract.",
    icon: "award",
  },
];
