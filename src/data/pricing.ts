/**
 * Pricing configuration.
 *
 * Prices are intentionally placeholders ("to be confirmed" / "custom") so they
 * can be edited in one place without touching layout. The page supports both a
 * Brazil (BRL) and an International (USD) column per plan.
 */
export type PricingPlan = {
  name: string;
  market: string;
  badge?: string;
  highlighted?: boolean;
  priceBrazil: string;
  priceInternational: string;
  description: string;
  features: string[];
  cta: string;
};

export const pricingPlans: PricingPlan[] = [
  {
    name: "GovDecision One",
    market: "Self-service intelligence",
    badge: "Platform-led",
    priceBrazil: "BRL pricing to be confirmed",
    priceInternational: "USD pricing to be confirmed",
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
    cta: "Request pricing",
  },
  {
    name: "GovDecision Assisted",
    market: "Service-led market access",
    badge: "With Sax Global",
    highlighted: true,
    priceBrazil: "Custom Brazil launch pricing",
    priceInternational: "Custom USD pricing",
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
    cta: "Request pricing",
  },
];

export const pricingNote =
  "Pricing may vary by country, corridor, company profile, assisted support level, and active opportunity volume.";

export const pricingComparison: {
  capability: string;
  one: string | boolean;
  assisted: string | boolean;
}[] = [
  { capability: "Supplier Passport", one: true, assisted: true },
  { capability: "Opportunity qualification", one: true, assisted: true },
  { capability: "Readiness workspace", one: true, assisted: true },
  { capability: "Country pack access", one: "Standard", assisted: "Guided" },
  { capability: "Decision brief templates", one: true, assisted: true },
  { capability: "Pipeline organization", one: "Basic", assisted: "Advanced" },
  { capability: "Assisted onboarding", one: false, assisted: true },
  { capability: "Readiness calibration", one: false, assisted: true },
  { capability: "Opportunity review support", one: false, assisted: true },
  { capability: "Partner / route guidance", one: false, assisted: true },
  { capability: "Executive decision memos", one: false, assisted: true },
  { capability: "Priority Sax Global support", one: false, assisted: true },
];
