"use client";

import { useEffect, useRef } from "react";
import { trackEvent } from "@/lib/analytics/events";
import type {
  ExperimentKey,
  ExperimentVariant,
} from "@/lib/experiments/experiments";

/**
 * Fires a single, non-PII `experiment_viewed` event once when a key conversion
 * surface (home hero, pricing assisted card, briefs index, contact page)
 * renders. It draws nothing — it returns `null` on both server and client, so
 * it adds zero layout and can never cause a hydration mismatch. The active
 * `variant` is resolved on the server and passed in as a prop, so this client
 * boundary never reads experiment config itself.
 */
export function ExperimentView({
  experiment,
  variant,
  locale,
  page,
}: {
  experiment: ExperimentKey;
  variant: ExperimentVariant;
  locale: string;
  /** Locale-less page path for analytics (e.g. "/" or "/pricing"). */
  page: string;
}) {
  const fired = useRef(false);

  useEffect(() => {
    if (fired.current) return;
    fired.current = true;
    trackEvent("experiment_viewed", { experiment, variant, locale, page });
  }, [experiment, variant, locale, page]);

  return null;
}
