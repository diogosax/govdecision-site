/**
 * Central site configuration.
 *
 * Major brand strings live here so they can be reused across pages and,
 * later, mapped into PT-BR / ES locale dictionaries without touching layout.
 * For now everything is authored in EN-US.
 */
export const site = {
  name: "GovDecision",
  parent: "Sax Group",
  parentArm: "Sax Global",
  location: "Orlando, Florida",

  tagline: "Less Clipping, More Decision",
  positioning: "Global Government Business Platform",
  strategicLines: [
    "Government sales, with better decisions.",
    "From readiness to award.",
  ],

  // Used for metadata + canonical/OG resolution
  url: "https://www.govdecision.com",
  appUrl: "https://app.govdecision.com",
  loginUrl: "https://app.govdecision.com/login",

  // Easy to change once mailbox is provisioned
  contactEmail: "contact@govdecision.com",

  ogImage: "/brand/govdecision-logo-tagline.png",

  metaTitle: "GovDecision — Global Government Business Platform",
  metaDescription:
    "GovDecision helps suppliers qualify government opportunities, build readiness, and enter public sector markets with better decisions across countries.",
  ogTitle: "GovDecision — Less Clipping, More Decision",
  ogDescription:
    "Global government business platform for supplier readiness, opportunity qualification, and cross-border public sector market access.",

  legalDisclaimer:
    "GovDecision provides decision support, readiness workflows, and market access guidance. It does not guarantee eligibility, qualification, bid submission acceptance, financing, awards, or government contract outcomes.",

  coverageDisclaimer:
    "Coverage evolves by country pack, source availability, customer needs, and operational validation.",
} as const;

export type Site = typeof site;
