/**
 * Resolution layer for localized Market Access destination briefings.
 *
 * `getDestinationView(locale, slug)` returns everything the template needs:
 *   - `d`      — the canonical structural data (numbers, sources, icons, …)
 *   - `copy`   — localized human copy (EN derived from `d`; PT-BR / ES overlays)
 *   - `chrome` — localized section labels for the template
 *
 * EN-US copy is derived from the canonical data so there is a single source of
 * truth for the approved English strings — no duplication, no drift.
 */
import {
  getDestination,
  type DestinationPage,
} from "@/data/destinations";
import type { Locale } from "@/i18n/config";
import { destinationChrome } from "./chrome";
import { ptBRDestinations } from "./pt-BR";
import { esDestinations } from "./es";
import type {
  DestinationChrome,
  DestinationCopy,
  DestinationCopyMap,
} from "./types";

export type { DestinationCopy, DestinationChrome } from "./types";

export type DestinationView = {
  d: DestinationPage;
  copy: DestinationCopy;
  chrome: DestinationChrome;
  locale: Locale;
};

/** Build the EN-US copy straight from the canonical data (the source of truth). */
function deriveEnCopy(d: DestinationPage): DestinationCopy {
  return {
    originLabel: d.originCountry,
    targetLabel: d.targetMarket,
    heroEyebrow: d.heroEyebrow,
    heroTitle: d.heroTitle,
    heroSubtitle: d.heroSubtitle,
    readinessPriority: d.readinessPriority,
    firstStep: d.firstStep,
    metaTitle: d.metaTitle,
    metaDescription: d.metaDescription,
    metrics: d.marketSnapshot.metrics.map((m) => ({
      label: m.label,
      value: m.value,
      note: m.note,
    })),
    marketOverview: d.marketOverview,
    whyItMatters: d.whyItMatters,
    checklist: d.basicChecklist.map((c) => ({
      item: c.item,
      description: c.description,
    })),
    commonBlockers: d.commonBlockers,
    routeOptions: d.routeOptions,
    govDecisionRole: d.govDecisionRole,
    recommendedRoute: d.readinessConsole.recommendedRoute,
    decision: d.readinessConsole.decision,
    sax: {
      intro: d.saxGlobal.intro,
      role: d.saxGlobal.role,
      score: {
        readinessGap: d.saxGlobal.score.readinessGap,
        routeComplexity: d.saxGlobal.score.routeComplexity,
        partnerDependency: d.saxGlobal.score.partnerDependency,
        executionRisk: d.saxGlobal.score.executionRisk,
        firstMove: d.saxGlobal.score.firstMove,
      },
      businessPlan: d.saxGlobal.businessPlan,
    },
    cta: {
      eyebrow: d.cta.eyebrow,
      title: d.cta.title,
      subtitle: d.cta.subtitle,
      primaryLabel: d.cta.primary.label,
      secondaryLabel: d.cta.secondary.label,
    },
  };
}

const overlays: Record<Exclude<Locale, "en-US">, DestinationCopyMap> = {
  "pt-BR": ptBRDestinations,
  es: esDestinations,
};

/** Localized copy for a destination, falling back to EN-US when no overlay exists. */
export function getDestinationCopy(
  locale: Locale,
  d: DestinationPage,
): DestinationCopy {
  if (locale === "en-US") return deriveEnCopy(d);
  return overlays[locale][d.slug] ?? deriveEnCopy(d);
}

/** Everything the destination template needs for a (locale, slug) pair. */
export function getDestinationView(
  locale: Locale,
  slug: string,
): DestinationView | undefined {
  const d = getDestination(slug);
  if (!d) return undefined;
  return {
    d,
    copy: getDestinationCopy(locale, d),
    chrome: destinationChrome[locale],
    locale,
  };
}
