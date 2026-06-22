import type { DestinationView } from "./index";

/**
 * Concise, localized breadcrumb label for a destination: the target market for
 * a local path, or "Origin → Target" for cross-border / multilateral / regional
 * paths. Uses the localized display names from the view's copy.
 */
export function destinationCrumbName(view: DestinationView): string {
  const { originLabel, targetLabel } = view.copy;
  return view.d.pathType === "local"
    ? targetLabel
    : `${originLabel} → ${targetLabel}`;
}
