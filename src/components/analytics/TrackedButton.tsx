"use client";

import type { ComponentProps } from "react";
import { Button } from "@/components/ui/Button";
import {
  trackEvent,
  type AnalyticsEventName,
  type AnalyticsProperties,
} from "@/lib/analytics/events";

/**
 * Drop-in client wrapper around the shared `Button` that fires a sanitized
 * analytics event on click before its own navigation/handler runs. Lets a
 * server component (CtaBand, PricingCards, PathCard, …) keep its markup while
 * confining the client boundary to the tracked button only.
 *
 * Tracking is fire-and-forget and never blocks the click (see `trackEvent`).
 */
type TrackedButtonProps = ComponentProps<typeof Button> & {
  event: AnalyticsEventName;
  eventProps?: AnalyticsProperties;
};

export function TrackedButton({
  event,
  eventProps,
  onClick,
  ...buttonProps
}: TrackedButtonProps) {
  return (
    <Button
      {...buttonProps}
      onClick={() => {
        trackEvent(event, eventProps);
        onClick?.();
      }}
    />
  );
}
