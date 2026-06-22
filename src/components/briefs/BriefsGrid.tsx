"use client";

import { useState } from "react";
import {
  BriefCard,
  type BriefCardLabels,
  type BriefGridItem,
} from "./BriefCard";

export type BriefsGridLabels = BriefCardLabels & {
  filterAll: string;
  filterLabel: string;
  resultsNone: string;
};

/**
 * The featured briefs grid with simple market-filter chips (client-side). Cards
 * stay equal-height with bottom-aligned CTAs; filtering never changes the card
 * layout. All copy is passed in already localized.
 */
export function BriefsGrid({
  items,
  markets,
  labels,
  locale,
}: {
  items: BriefGridItem[];
  /** Unique markets in display order: canonical key + localized label. */
  markets: { market: string; label: string }[];
  labels: BriefsGridLabels;
  locale: string;
}) {
  const [active, setActive] = useState<string>("all");
  const visible =
    active === "all" ? items : items.filter((i) => i.market === active);

  const chip = (key: string, label: string) => {
    const isActive = active === key;
    return (
      <button
        key={key}
        type="button"
        onClick={() => setActive(key)}
        aria-pressed={isActive}
        className={`rounded-full border px-3.5 py-1.5 text-sm font-semibold transition-colors ${
          isActive
            ? "border-plum bg-plum text-white"
            : "border-line bg-white text-slate hover:border-plum/30 hover:text-plum"
        }`}
      >
        {label}
      </button>
    );
  };

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2" role="group" aria-label={labels.filterLabel}>
        {chip("all", labels.filterAll)}
        {markets.map((m) => chip(m.market, m.label))}
      </div>

      {visible.length === 0 ? (
        <p className="mt-12 text-sm text-slate">{labels.resultsNone}</p>
      ) : (
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((item) => (
            <BriefCard key={item.slug} item={item} labels={labels} locale={locale} />
          ))}
        </div>
      )}
    </div>
  );
}
