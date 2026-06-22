/**
 * Resolution layer for localized Government Opportunity Briefs (SITE-013).
 *
 * `getBriefView(locale, slug)` returns everything the template needs:
 *   - `b`      — the canonical structural data (status, source, mockup, …)
 *   - `copy`   — localized human copy (EN derived from `b`; PT-BR / ES overlays)
 *   - `chrome` — localized section labels for the index + detail templates
 *
 * EN-US copy is derived from the canonical data so there is a single source of
 * truth for the approved English strings — no duplication, no drift. A missing
 * overlay falls back to EN-US (clean, never a broken page).
 */
import {
  getBrief,
  opportunityBriefs,
  type OpportunityBrief,
} from "@/data/opportunity-briefs";
import type { Locale } from "@/i18n/config";
import { briefChrome } from "./chrome";
import { ptBRBriefs } from "./pt-BR";
import { esBriefs } from "./es";
import type { BriefChrome, BriefCopy, BriefCopyMap } from "./types";

export type { BriefChrome, BriefCopy } from "./types";

export type BriefView = {
  b: OpportunityBrief;
  copy: BriefCopy;
  chrome: BriefChrome;
  locale: Locale;
};

/** A brief reduced to the fields the index card needs (locale-resolved). */
export type BriefCardData = {
  slug: string;
  market: string; // canonical EN market (stable analytics key)
  marketLabel: string; // localized
  pathType: OpportunityBrief["pathType"];
  status: OpportunityBrief["status"];
  icon: OpportunityBrief["icon"];
  opportunityType: string;
  buyerType: string;
  sourceName: string;
  shortTitle: string;
  whySuppliersCare: string[];
};

/** Build the EN-US copy straight from the canonical data (the source of truth). */
function deriveEnCopy(b: OpportunityBrief): BriefCopy {
  return {
    marketLabel: b.market,
    opportunityType: b.opportunityType,
    buyerType: b.buyerType,
    shortTitle: b.shortTitle,
    heroEyebrow: b.heroEyebrow,
    heroTitle: b.heroTitle,
    heroSubtitle: b.heroSubtitle,
    summary: b.summary,
    whySuppliersCare: b.whySuppliersCare,
    commonRequirements: b.commonRequirements,
    commonBlockers: b.commonBlockers,
    govDecisionAnalysis: b.govDecisionAnalysis,
    saxGlobalAngle: b.saxGlobalAngle,
    readinessQuestions: b.readinessQuestions,
    relatedLabel: b.relatedLabel,
    metaTitle: b.metaTitle,
    metaDescription: b.metaDescription,
  };
}

const overlays: Record<Exclude<Locale, "en-US">, BriefCopyMap> = {
  "pt-BR": ptBRBriefs,
  es: esBriefs,
};

/** Localized copy for a brief, falling back to EN-US when no overlay exists. */
export function getBriefCopy(locale: Locale, b: OpportunityBrief): BriefCopy {
  if (locale === "en-US") return deriveEnCopy(b);
  return overlays[locale][b.slug] ?? deriveEnCopy(b);
}

/** Everything the brief template needs for a (locale, slug) pair. */
export function getBriefView(locale: Locale, slug: string): BriefView | undefined {
  const b = getBrief(slug);
  if (!b) return undefined;
  return {
    b,
    copy: getBriefCopy(locale, b),
    chrome: briefChrome[locale],
    locale,
  };
}

/** The full set of index cards for a locale, in display order. */
export function getBriefCards(locale: Locale): BriefCardData[] {
  return opportunityBriefs.map((b) => {
    const copy = getBriefCopy(locale, b);
    return {
      slug: b.slug,
      market: b.market,
      marketLabel: copy.marketLabel,
      pathType: b.pathType,
      status: b.status,
      icon: b.icon,
      opportunityType: copy.opportunityType,
      buyerType: copy.buyerType,
      sourceName: b.source.name,
      shortTitle: copy.shortTitle,
      whySuppliersCare: copy.whySuppliersCare,
    };
  });
}

/** Localized market labels in display order (for the index filter chips). */
export function getMarketLabels(locale: Locale): { market: string; label: string }[] {
  const seen = new Set<string>();
  const out: { market: string; label: string }[] = [];
  for (const b of opportunityBriefs) {
    if (seen.has(b.market)) continue;
    seen.add(b.market);
    out.push({ market: b.market, label: getBriefCopy(locale, b).marketLabel });
  }
  return out;
}

export { briefChrome };
