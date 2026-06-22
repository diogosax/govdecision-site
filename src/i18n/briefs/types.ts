/**
 * Localization contract for Government Opportunity Briefs (SITE-013).
 *
 * Structural data — slugs, status, path type, icons, currency, source
 * names/URLs, illustrative mockup values — stays in
 * `src/data/opportunity-briefs.ts` (EN-US canonical). This file types only the
 * human copy (`BriefCopy`) and the shared section labels (`BriefChrome`) that
 * overlay it. EN-US copy is derived from the canonical data (no duplication);
 * PT-BR and ES provide hand-authored overlays.
 *
 * Arrays marked "// index-aligned" are zipped by position with the structural
 * data, so their length and order must stay in lockstep.
 */
import type {
  BriefPathType,
  BriefStatus,
  DecisionVerdict,
  FitSignal,
  RiskLevel,
  RouteOption,
} from "@/data/opportunity-briefs";

/** Per-brief localized copy (overlaid on the structural data). */
export type BriefCopy = {
  /** Localized display name for the market. */
  marketLabel: string;
  opportunityType: string;
  buyerType: string;

  shortTitle: string;
  heroEyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  summary: string;

  whySuppliersCare: string[]; // index-aligned
  commonRequirements: string[]; // index-aligned
  commonBlockers: string[]; // index-aligned
  govDecisionAnalysis: string[]; // index-aligned
  saxGlobalAngle: string[]; // index-aligned (empty for local examples)
  readinessQuestions: string[]; // index-aligned

  relatedLabel: string;
  metaTitle: string;
  metaDescription: string;
};

/** Map of slug -> localized copy for a single locale overlay. */
export type BriefCopyMap = Record<string, BriefCopy>;

/**
 * Shared section labels / chrome for the briefs index + detail templates. One
 * object per locale. The `{market}` token is replaced with the localized market
 * name at render time.
 */
export type BriefChrome = {
  /* Tokens shared across cards, hero, snapshot, and the mockup. */
  statusLabels: Record<BriefStatus, string>;
  pathTypeLabels: Record<BriefPathType, string>;
  fitSignalLabels: Record<FitSignal, string>;
  riskLabels: Record<RiskLevel, string>;
  routeLabels: Record<RouteOption, string>;
  decisionLabels: Record<DecisionVerdict, string>;

  /* Index SEO. */
  indexMetaTitle: string;
  indexMetaDescription: string;

  /* Index hero. */
  indexEyebrow: string;
  indexTitle: string;
  indexSubtitle: string;
  indexPrimaryCta: string;
  indexSecondaryCta: string;
  indexNote: string;

  /* Index — featured grid + filter. */
  featuredEyebrow: string;
  featuredTitle: string;
  featuredLead: string;
  filterAll: string;
  filterLabel: string;
  resultsNone: string;

  /* Index — how to read a brief. */
  howToEyebrow: string;
  howToTitle: string;
  howToLead: string;
  howToSteps: { title: string; body: string }[]; // 4

  /* Index — where GovDecision helps. */
  whereGovEyebrow: string;
  whereGovTitle: string;
  whereGovLead: string;
  whereGovPoints: string[]; // 4

  /* Index — where Sax Global helps. */
  whereSaxEyebrow: string;
  whereSaxTitle: string;
  whereSaxLead: string;
  whereSaxPoints: string[]; // 3

  /* Index — final CTA. */
  indexFinalEyebrow: string;
  indexFinalTitle: string;
  indexFinalSubtitle: string;
  indexFinalPrimary: string;
  indexFinalSecondary: string;

  /* Card. */
  cardCta: string; // "Read brief"
  cardWhyLabel: string; // "Why it matters"

  /* Field labels shared by card + snapshot. */
  marketField: string;
  buyerField: string;
  opportunityField: string;
  sourceField: string;
  valueField: string;
  deadlineField: string;
  statusField: string;
  relatedField: string;
  currencyField: string;
  notSpecified: string;

  /* Detail hero + decision mockup. */
  briefsCrumb: string;
  seeAnalysis: string;
  mockupWindowTitle: string;
  mockupTitle: string;
  sample: string;
  illustrative: string;
  fitSignalLabel: string;
  readinessRiskLabel: string;
  blockersDetectedLabel: string;
  routeLabel: string;
  decisionLabel: string;

  /* Snapshot. */
  snapshotEyebrow: string;
  snapshotTitle: string;
  snapshotLead: string;

  /* Why suppliers may care. */
  whyEyebrow: string;
  whyTitle: string;
  whyLead: string;

  /* Requirements + blockers. */
  hardEyebrow: string;
  hardTitle: string;
  hardLead: string;
  requirementsHeading: string;
  blockersHeading: string;

  /* Where GovDecision helps (detail). */
  govEyebrow: string;
  govTitle: string;
  govLead: string;
  aiAssistNote: string;

  /* Where Sax Global helps (detail). */
  saxEyebrow: string;
  saxTitle: string;
  saxLead: string;
  saxDisclaimer: string;

  /* Readiness questions. */
  readinessEyebrow: string;
  readinessTitle: string;
  readinessLead: string;

  /* Related market access path. */
  relatedEyebrow: string;
  relatedTitle: string;
  relatedLead: string;
  viewRelated: string;

  /* Source + disclaimer. */
  sourceEyebrow: string;
  sourceTitle: string;
  sourceLead: string;
  publicSourceLabel: string;
  additionalRefsLabel: string;
  availabilityNote: string;
  disclaimerLabel: string;
  disclaimer: string;

  /* Detail CTA. */
  ctaEyebrow: string;
  ctaTitleLocal: string;
  ctaTitleCross: string;
  ctaSubtitleLocal: string;
  ctaSubtitleCross: string;
  ctaLocalLabel: string;
  ctaCrossLabel: string;
  ctaSecondaryLabel: string;
};
