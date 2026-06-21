import { site } from "./site";

export type CorridorStatus =
  | "Active focus"
  | "In development"
  | "Targeted"
  | "Multilateral";

export type Corridor = {
  id: string;
  name: string;
  region: string;
  type: "country" | "multilateral";
  status: CorridorStatus;
  /** Representative geographic point for the abstract map (decimal degrees). */
  lat: number;
  lon: number;
  summary: string;
  focus: string[];
};

/** The cross-border hub that anchors the corridor arcs (Sax Group, Florida). */
export const corridorHub = {
  name: "Sax Global — Orlando, Florida",
  lat: 28.5,
  lon: -81.4,
};

export const corridors: Corridor[] = [
  {
    id: "us",
    name: "United States",
    region: "North America",
    type: "country",
    status: "Active focus",
    lat: 38,
    lon: -97,
    summary:
      "Federal opportunities, supplier registration paths, and commercial route strategy for the world's largest public buyer.",
    focus: [
      "Federal opportunities",
      "Supplier registration paths",
      "Readiness requirements",
      "Local / commercial route strategy",
    ],
  },
  {
    id: "brazil",
    name: "Brazil",
    region: "South America",
    type: "country",
    status: "Active focus",
    lat: -10,
    lon: -52,
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
  {
    id: "paraguay",
    name: "Paraguay",
    region: "South America",
    type: "country",
    status: "In development",
    lat: -23,
    lon: -58,
    summary:
      "Regional expansion corridor with country pack development and local route validation.",
    focus: [
      "Regional expansion",
      "Country pack development",
      "Local route validation",
    ],
  },
  {
    id: "mexico",
    name: "Mexico",
    region: "North America",
    type: "country",
    status: "In development",
    lat: 23,
    lon: -102,
    summary:
      "Market access and supplier preparation with route-to-market validation.",
    focus: [
      "Market access",
      "Supplier preparation",
      "Route-to-market validation",
    ],
  },
  {
    id: "canada",
    name: "Canada",
    region: "North America",
    type: "country",
    status: "In development",
    lat: 56,
    lon: -98,
    summary:
      "Federal opportunities and supplier readiness with an evolving country pack.",
    focus: [
      "Federal opportunities",
      "Supplier readiness",
      "Country pack evolution",
    ],
  },
  {
    id: "africa",
    name: "Selected African markets",
    region: "Africa",
    type: "country",
    status: "Targeted",
    lat: 4,
    lon: 21,
    summary:
      "Public sector and development-driven opportunities, validated country by country with local partner logic.",
    focus: [
      "Public sector & development-driven opportunities",
      "Country-by-country validation",
      "Local partner logic",
    ],
  },
  {
    id: "multilateral",
    name: "UN & World Bank",
    region: "Multilateral",
    type: "multilateral",
    status: "Multilateral",
    lat: 27,
    lon: -38,
    summary:
      "Multilateral procurement with supplier registration, international eligibility, readiness, and documentation.",
    focus: [
      "Multilateral procurement",
      "Supplier registration",
      "International eligibility",
      "Readiness & documentation",
    ],
  },
];

export const corridorsIntro =
  "GovDecision combines a global decision engine with country-specific packs for market access, readiness, sources, registration, documents, and routes to market.";

export const corridorsCoverageNote =
  "Coverage is built progressively through country packs, operational validation, source availability, and customer demand.";

export const corridorsGlobalLine =
  `Global government business, supported by ${site.parentArm}.`;
