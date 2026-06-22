import { Button } from "@/components/ui/Button";
import { TrackedButton } from "@/components/analytics/TrackedButton";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon } from "@/components/ui/Icon";
import { Pill, WindowFrame } from "@/components/marketing/MockupKit";
import type {
  AnalyticsEventName,
  AnalyticsProperties,
} from "@/lib/analytics/events";

/** Compact down-chevron used on the mockup's selector fields. */
function Chevron() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="text-slate"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function SelectorField({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-line bg-white px-3.5 py-2.5">
      <div>
        <p className="text-[0.6rem] font-semibold uppercase tracking-wide text-slate">
          {label}
        </p>
        <p className="text-sm font-bold text-plum">{value}</p>
      </div>
      <Chevron />
    </div>
  );
}

const decisionPath = [
  "Profile",
  "Readiness",
  "Market rules",
  "Route",
  "Pursuit",
];

export type MarketAccessHeroCopy = {
  eyebrow: string;
  title: string;
  subtitle: string;
  slogan: string;
  primaryCta: string;
  secondaryCta: string;
};

/**
 * Optional override for the secondary CTA, used to run the `marketAccessCta`
 * copy experiment (SITE-017). When provided, the secondary CTA renders as a
 * tracked button with the experiment label + analytics; when omitted it falls
 * back to the default, untracked `t.secondaryCta` button (control behavior).
 */
export type MarketAccessSecondaryCta = {
  label: string;
  event: AnalyticsEventName;
  eventProps: AnalyticsProperties;
};

/**
 * Market Access hero: a strategic headline paired with a product-style path
 * selector mockup (origin / target / path type / next step) and a compact
 * decision path. The mockup keeps its sample (Brazil → United States) values in
 * English — it depicts the product UI; the marketing copy column is localized.
 */
export function MarketAccessHero({
  t,
  primaryHref,
  secondaryCta,
}: {
  t: MarketAccessHeroCopy;
  primaryHref: string;
  secondaryCta?: MarketAccessSecondaryCta;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-gradient-to-b from-surface to-ivory">
      <div aria-hidden className="bg-grid absolute inset-0 opacity-60" />
      <div
        aria-hidden
        className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(229,106,58,0.10),transparent_70%)]"
      />
      <Container className="relative grid items-center gap-14 py-16 lg:grid-cols-[1.05fr_1fr] lg:gap-12 lg:py-24">
        {/* Copy */}
        <div className="max-w-xl">
          <Eyebrow>{t.eyebrow}</Eyebrow>
          <h1 className="mt-5 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-plum sm:text-5xl">
            {t.title}
          </h1>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-slate">
            {t.subtitle}
          </p>

          {/* Supporting slogan */}
          <div className="mt-7 inline-flex items-center gap-2.5 rounded-full border border-coral/30 bg-coral/5 px-4 py-2">
            <Icon name="route" size={16} className="shrink-0 text-coral" />
            <span className="text-sm font-bold tracking-tight text-plum">
              {t.slogan}
            </span>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={primaryHref} size="lg" withArrow>
              {t.primaryCta}
            </Button>
            {secondaryCta ? (
              <TrackedButton
                href="#paths"
                variant="ghost"
                size="lg"
                event={secondaryCta.event}
                eventProps={secondaryCta.eventProps}
              >
                {secondaryCta.label}
              </TrackedButton>
            ) : (
              <Button href="#paths" variant="ghost" size="lg">
                {t.secondaryCta}
              </Button>
            )}
          </div>
        </div>

        {/* Product mockup */}
        <div className="lg:pl-4">
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-[radial-gradient(60%_60%_at_70%_20%,rgba(229,106,58,0.18),transparent_70%)]"
            />

            <div className="relative animate-rise">
              <WindowFrame
                title="govdecision · Market access"
                badge="Sample"
                className="backdrop-blur"
              >
                <div className="w-full">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-coral">
                    Path finder
                  </p>

                  <div className="mt-4 space-y-2.5">
                    <SelectorField label="Company based in" value="Brazil" />
                    <SelectorField
                      label="Target market"
                      value="United States"
                    />
                  </div>

                  <div className="mt-3 flex items-center justify-between rounded-xl bg-surface/60 px-3.5 py-2.5">
                    <span className="text-[0.6rem] font-semibold uppercase tracking-wide text-slate">
                      Path type
                    </span>
                    <Pill tone="coral">
                      <span className="h-1.5 w-1.5 rounded-full bg-coral" />
                      Cross-border
                    </Pill>
                  </div>

                  <div className="mt-3 flex items-center gap-3 rounded-2xl bg-plum p-3.5 text-white">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10">
                      <Icon name="route" size={18} className="text-coral-200" />
                    </span>
                    <div>
                      <p className="text-[0.6rem] font-semibold uppercase tracking-wide text-white/55">
                        Recommended next step
                      </p>
                      <p className="text-sm font-semibold">
                        Build readiness + validate route
                      </p>
                    </div>
                  </div>

                  {/* Decision path */}
                  <div className="mt-5">
                    <p className="text-[0.6rem] font-semibold uppercase tracking-wide text-slate">
                      Decision path
                    </p>
                    <div className="relative mt-3">
                      <span
                        aria-hidden
                        className="absolute left-[10%] right-[10%] top-[6px] h-px bg-line"
                      />
                      <ol className="relative flex items-start justify-between">
                        {decisionPath.map((node, i) => (
                          <li
                            key={node}
                            className="flex flex-1 flex-col items-center gap-1.5 text-center"
                          >
                            <span
                              className={`h-3 w-3 rounded-full border-2 ${
                                i === 0
                                  ? "border-coral bg-coral"
                                  : "border-line bg-white"
                              }`}
                            />
                            <span className="text-[0.58rem] font-semibold leading-tight text-plum/75">
                              {node}
                            </span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </div>
              </WindowFrame>
            </div>

            {/* Floating chip: target markets */}
            <div className="absolute -left-4 top-12 hidden animate-float-slow rounded-2xl border border-line bg-white px-4 py-3 shadow-card sm:-left-8 md:block">
              <p className="text-[0.65rem] font-semibold uppercase tracking-wide text-slate">
                Target markets
              </p>
              <p className="text-xl font-bold tracking-tight text-plum tabular-nums">
                5
              </p>
              <p className="text-[0.7rem] font-medium text-coral">
                1 clear first path
              </p>
            </div>

            {/* Floating chip: recommendation */}
            <div
              className="absolute -right-3 bottom-12 hidden animate-float-slow rounded-2xl border border-line bg-white px-4 py-3 shadow-card sm:-right-6 md:block"
              style={{ animationDelay: "1.5s" }}
            >
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-coral/10 text-coral">
                  <Icon name="check" size={15} />
                </span>
                <div>
                  <p className="text-[0.65rem] font-semibold uppercase tracking-wide text-slate">
                    Recommended
                  </p>
                  <p className="text-sm font-bold text-plum">
                    Build readiness first
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
