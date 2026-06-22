"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import {
  classifyPath,
  defaultPath,
  originOptions,
  pathTypeIcon,
  pathTypeStyles,
  targetOptions,
} from "@/data/market-access";
import {
  trackEvent,
  normalizePathType,
  type AnalyticsProperties,
} from "@/lib/analytics/events";
import { PathRoute } from "./PathRoute";

export type PathSelectorCopy = {
  originPrompt: string;
  targetPrompt: string;
  selectedPath: string;
  pathType: string;
  requires: string;
  recommendedFirstStepLabel: string;
  recommendedFirstStep: string;
  startReadiness: string;
  requirements: Record<string, string[]>;
  pathTypeLabels: Record<string, string>;
};

function OptionChip({
  label,
  selected,
  onSelect,
}: {
  label: string;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onSelect}
      className={`rounded-full border px-3.5 py-2 text-sm font-semibold transition-all duration-200 ${
        selected
          ? "border-coral bg-coral text-white shadow-soft"
          : "border-line bg-white text-plum hover:border-coral/40 hover:text-coral-600"
      }`}
    >
      {label}
    </button>
  );
}

/**
 * Lightweight, self-contained path selector. State is two strings; the path
 * type and its requirements are derived with a pure function. Country options
 * are proper nouns (kept as-is); all labels come from the active locale.
 */
export function PathSelector({
  locale,
  t,
  startReadinessHref,
}: {
  locale: string;
  t: PathSelectorCopy;
  startReadinessHref: string;
}) {
  const [origin, setOrigin] = useState(defaultPath.origin);
  const [target, setTarget] = useState(defaultPath.target);

  const pathType = classifyPath(origin, target);
  const requirements = t.requirements[pathType] ?? [];

  // Fire on each origin/target change with the resolved (next) selection, so
  // the event reflects what the user just picked. Only structured options are
  // tracked — never free text.
  function selectorEventProps(
    nextOrigin: string,
    nextTarget: string,
  ): AnalyticsProperties {
    return {
      locale,
      page: "/market-access",
      originCountry: nextOrigin,
      targetMarket: nextTarget,
      pathType: normalizePathType(classifyPath(nextOrigin, nextTarget)),
    };
  }

  function selectOrigin(value: string) {
    setOrigin(value);
    trackEvent("market_access_selector_changed", selectorEventProps(value, target));
  }

  function selectTarget(value: string) {
    setTarget(value);
    trackEvent("market_access_selector_changed", selectorEventProps(origin, value));
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
      {/* Selectors */}
      <div className="rounded-3xl border border-line bg-white p-6 shadow-soft sm:p-8">
        <div role="group" aria-label={t.originPrompt}>
          <p className="text-sm font-bold text-plum">{t.originPrompt}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {originOptions.map((option) => (
              <OptionChip
                key={option}
                label={option}
                selected={origin === option}
                onSelect={() => selectOrigin(option)}
              />
            ))}
          </div>
        </div>

        <div
          className="mt-7 border-t border-line/70 pt-7"
          role="group"
          aria-label={t.targetPrompt}
        >
          <p className="text-sm font-bold text-plum">{t.targetPrompt}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {targetOptions.map((option) => (
              <OptionChip
                key={option}
                label={option}
                selected={target === option}
                onSelect={() => selectTarget(option)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Live preview */}
      <div
        aria-live="polite"
        className="flex flex-col rounded-3xl border border-line bg-surface/50 p-6 shadow-soft sm:p-8"
      >
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-slate">
          {t.selectedPath}
        </p>
        <div className="mt-3">
          <PathRoute origin={origin} target={target} />
        </div>

        <div className="mt-5 flex items-center gap-2.5">
          <span className="text-[0.65rem] font-semibold uppercase tracking-wide text-slate">
            {t.pathType}
          </span>
          <span
            className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wide ${pathTypeStyles[pathType]}`}
          >
            <Icon name={pathTypeIcon[pathType]} size={13} />
            {t.pathTypeLabels[pathType] ?? pathType}
          </span>
        </div>

        <p className="mt-5 text-[0.65rem] font-semibold uppercase tracking-wide text-slate">
          {t.requires}
        </p>
        <ul className="mt-2.5 space-y-2">
          {requirements.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2.5 text-sm text-plum/85"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex items-start gap-3 rounded-2xl border border-coral/30 bg-coral/5 p-4">
          <Icon name="spark" size={18} className="mt-0.5 shrink-0 text-coral" />
          <div>
            <p className="text-[0.65rem] font-semibold uppercase tracking-wide text-coral-600">
              {t.recommendedFirstStepLabel}
            </p>
            <p className="mt-0.5 text-sm font-semibold text-plum">
              {t.recommendedFirstStep}
            </p>
          </div>
        </div>

        <div className="mt-6">
          <Button
            href={startReadinessHref}
            withArrow
            className="w-full sm:w-auto"
            onClick={() =>
              trackEvent("cta_clicked", {
                locale,
                page: "/market-access",
                section: "path_selector",
                cta: "start_readiness",
                href: startReadinessHref,
                originCountry: origin,
                targetMarket: target,
                pathType: normalizePathType(pathType),
              })
            }
          >
            {t.startReadiness}
          </Button>
        </div>
      </div>
    </div>
  );
}
