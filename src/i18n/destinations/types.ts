/**
 * Localization contract for Market Access destination briefings (SITE-012).
 *
 * Structural data — metric *values*, source URLs/years, scores, console
 * numbers, slugs, path types, status — stays in `src/data/destinations.ts`
 * (EN-US canonical). This file types only the human copy and the localized
 * display labels that overlay it. EN-US copy is derived from the canonical data
 * (no duplication); PT-BR and ES provide hand-authored overlays.
 *
 * Arrays marked "// index-aligned" are zipped by position with the structural
 * data in `destinations.ts`, so their length and order must stay in lockstep.
 */
import type {
  ChecklistStatus,
  DestinationPathType,
  DestinationStatus,
} from "@/data/destinations";

/** Localized metric — value/note may localize words but never alter figures. */
export type MetricCopy = { label: string; value: string; note?: string };

/** Per-destination localized copy (overlaid on the structural data). */
export type DestinationCopy = {
  /** Localized display names for the origin / target market. */
  originLabel: string;
  targetLabel: string;

  heroEyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  readinessPriority: string;
  firstStep: string;

  metaTitle: string;
  metaDescription: string;

  /** index-aligned with `d.marketSnapshot.metrics`. */
  metrics: MetricCopy[];

  marketOverview: string;
  whyItMatters: string[];

  /** index-aligned with `d.basicChecklist` (status stays in the data). */
  checklist: { item: string; description: string }[];
  commonBlockers: string[];
  routeOptions: string[];

  govDecisionRole: string[];
  /** Localized console phrasing (numbers stay in the data). */
  recommendedRoute: string;
  decision: string;

  sax: {
    intro: string;
    role: string[];
    score: {
      readinessGap: string;
      routeComplexity: string;
      partnerDependency: string;
      executionRisk: string;
      firstMove: string;
    };
    /** index-aligned with the shared business-plan snapshot (7 steps). */
    businessPlan: string[];
  };

  cta: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primaryLabel: string;
    secondaryLabel: string;
  };
};

/** Map of slug -> localized copy for a single locale overlay. */
export type DestinationCopyMap = Record<string, DestinationCopy>;

/**
 * Shared section labels / chrome for the destination template. One object per
 * locale. The `{market}` token is replaced with the localized target name.
 */
export type DestinationChrome = {
  pathTypeLabels: Record<DestinationPathType, string>;
  statusLabels: Record<DestinationStatus, string>;
  checklistStatusLabels: Record<ChecklistStatus, string>;

  /** Hero + "Market Access Brief" mockup. */
  pathSuffix: string; // e.g. "path" -> "Local path"
  seeReadiness: string;
  brief: string;
  windowTitle: string;
  sample: string;
  origin: string;
  target: string;
  pathTypeLabel: string;
  readinessPriorityLabel: string;
  recommendedFirstStep: string;
  marketType: string;
  startWithGov: string;
  govPlusSax: string;

  /** Market snapshot. */
  snapshotEyebrow: string;
  snapshotTitle: string; // "{market} at a glance."
  snapshotLead: string;
  dataSources: string;

  /** Why this market matters. */
  whyEyebrow: string;
  whyTitle: string; // "Why {market} matters."
  allPaths: string;

  /** Readiness checklist. */
  checklistEyebrow: string;
  checklistTitle: string;
  checklistLead: string;
  routeOptions: string;

  /** Common blockers. */
  blockersEyebrow: string;
  blockersTitle: string;
  blockersLead: string;

  /** Where GovDecision becomes critical. */
  govEyebrow: string;
  govTitle: string;
  govLead: string;
  aiAssistNote: string;
  windowConsoleTitle: string;
  console: string;
  marketFit: string;
  supplierPassport: string;
  criticalBlockers: string;
  recommendedRouteLabel: string;
  decisionLabel: string;
  consoleNote: string;

  /** Sax Global reports. */
  saxEntersEyebrow: string;
  saxOptionalEyebrow: string;
  saxEntersTitle: string;
  saxOptionalTitle: string;
  scoreWindowTitle: string;
  businessWindowTitle: string;
  marketAccessScore: string;
  directionalRead: string;
  attractiveness: string;
  readinessGapLabel: string;
  routeComplexityLabel: string;
  partnerDependencyLabel: string;
  executionRiskLabel: string;
  firstMovePrefix: string;
  businessPlanTitle: string;
  businessPlanSubtitle: string;
  illustrative: string;
  saxDisclaimer: string;
};
