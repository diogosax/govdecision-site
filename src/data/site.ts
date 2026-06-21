/**
 * Central site configuration.
 *
 * Major brand strings live here so they can be reused across pages and,
 * later, mapped into PT-BR / ES locale dictionaries without touching layout.
 * For now everything is authored in EN-US.
 */
/**
 * Public URLs prefer environment configuration (set these in Vercel), and fall
 * back to the production defaults so local builds and previews always work.
 */
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.govdecision.com";
const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://app.govdecision.com";

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
  url: SITE_URL,
  appUrl: APP_URL,
  loginUrl: `${APP_URL}/login`,

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
