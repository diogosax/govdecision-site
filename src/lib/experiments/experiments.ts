/**
 * Configuration-based conversion experiments (SITE-017).
 *
 * This is intentionally NOT an A/B testing platform: there is no random,
 * per-user assignment, no cookies, and no third-party tooling. Each experiment
 * resolves to a single, deterministic variant chosen by configuration, so the
 * same value is produced on the server and the client (no hydration mismatch)
 * and the build is reproducible.
 *
 * The default for every experiment is `control`. A variant can be selected at
 * build time via the optional public env var:
 *
 *   NEXT_PUBLIC_GOVDECISION_EXPERIMENTS=homeHeroCta:variantA,pricingAssistedCta:variantB
 *
 * Parsing is defensive — unknown keys and unknown variants are ignored and the
 * site falls back to `control`. The env var is never required and a malformed
 * value can never throw or break rendering.
 */

/** Closed set of experiment identifiers. Keep this list small and stable. */
export type ExperimentKey =
  | "homeHeroCta"
  | "marketAccessCta"
  | "pricingAssistedCta"
  | "briefsCta"
  | "contactIntent";

/** Every experiment exposes the same three-way variant space. */
export type ExperimentVariant = "control" | "variantA" | "variantB";

export const experimentKeys = [
  "homeHeroCta",
  "marketAccessCta",
  "pricingAssistedCta",
  "briefsCta",
  "contactIntent",
] as const satisfies readonly ExperimentKey[];

export const experimentVariants = [
  "control",
  "variantA",
  "variantB",
] as const satisfies readonly ExperimentVariant[];

/** The stable default — what every visitor sees unless config selects otherwise. */
export const defaultExperiments: Record<ExperimentKey, ExperimentVariant> = {
  homeHeroCta: "control",
  marketAccessCta: "control",
  pricingAssistedCta: "control",
  briefsCta: "control",
  contactIntent: "control",
};

function isExperimentKey(value: string): value is ExperimentKey {
  return (experimentKeys as readonly string[]).includes(value);
}

function isExperimentVariant(value: string): value is ExperimentVariant {
  return (experimentVariants as readonly string[]).includes(value);
}

/**
 * Parse the `key:variant,key:variant` env syntax into a complete, validated
 * config. Always returns a full map (every key present) starting from the
 * `control` defaults; only well-formed, known `key:variant` pairs override a
 * default. Never throws, even for malformed input.
 */
export function parseExperimentEnv(
  raw: string | undefined | null,
): Record<ExperimentKey, ExperimentVariant> {
  const config: Record<ExperimentKey, ExperimentVariant> = {
    ...defaultExperiments,
  };
  if (!raw || typeof raw !== "string") return config;

  try {
    for (const part of raw.split(",")) {
      const [rawKey, rawVariant] = part.split(":");
      const key = rawKey?.trim();
      const variant = rawVariant?.trim();
      if (!key || !variant) continue;
      if (isExperimentKey(key) && isExperimentVariant(variant)) {
        config[key] = variant;
      }
      // Unknown keys / variants are silently ignored — fall back to control.
    }
  } catch {
    // Defensive: any unexpected error leaves every experiment at control.
    return { ...defaultExperiments };
  }

  return config;
}

/**
 * Resolved configuration for this build. The reference to
 * `process.env.NEXT_PUBLIC_GOVDECISION_EXPERIMENTS` is statically inlined by
 * Next.js, so the value is identical in server and client environments.
 */
export const activeExperiments: Record<ExperimentKey, ExperimentVariant> =
  parseExperimentEnv(process.env.NEXT_PUBLIC_GOVDECISION_EXPERIMENTS);

/** The active variant for an experiment (defaults to `control`). */
export function getExperimentVariant(key: ExperimentKey): ExperimentVariant {
  return activeExperiments[key] ?? "control";
}
