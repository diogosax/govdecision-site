/**
 * Pricing configuration.
 *
 * Prices live here so they can be edited in one place without touching layout.
 * Each plan carries a Brazil (BRL) and an International (USD) price. A price may
 * be a live figure ("R$ 379,00 / month") or a consultative phrase ("Consult
 * us"); the card splits on " / " to render the amount prominently and the
 * cadence quietly. Optional notes add a short supporting line under a price.
 */
export type PricingPlan = {
  name: string;
  market: string;
  badge?: string;
  highlighted?: boolean;
  priceBrazil: string;
  priceInternational: string;
  noteBrazil?: string;
  noteInternational?: string;
  description: string;
  features: string[];
  cta: string;
  /** Where the plan CTA points. No checkout yet, so this routes to /contact. */
  ctaHref: string;
};

export const pricingPlans: PricingPlan[] = [
  {
    name: "GovDecision One",
    market: "Platform-led intelligence",
    badge: "Platform-led",
    priceBrazil: "R$ 379,00 / month",
    priceInternational: "US$ 99.90 / month",
    noteBrazil: "For Brazil-based suppliers.",
    noteInternational: "For the United States and other supported markets.",
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
    ctaHref: "/contact",
  },
  {
    name: "GovDecision Assisted",
    market: "Service-led market access",
    badge: "With Sax Global",
    highlighted: true,
    priceBrazil: "Consult us",
    priceInternational: "Custom USD pricing",
    noteBrazil: "Service-led market access with Sax Global.",
    noteInternational: "Scoped to your corridor, profile, and support level.",
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
    ctaHref: "/contact",
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
