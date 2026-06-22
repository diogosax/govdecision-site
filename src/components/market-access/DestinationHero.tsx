import { Button } from "@/components/ui/Button";
import { TrackedButton } from "@/components/analytics/TrackedButton";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon } from "@/components/ui/Icon";
import { FieldRow, Pill, WindowFrame } from "@/components/marketing/MockupKit";
import {
  destinationPathTypeIcon,
  destinationPathTypeLabel,
  destinationStatusLabel,
  type DestinationPage,
} from "@/data/destinations";
import { PathRoute } from "./PathRoute";

/**
 * Destination hero: strategic headline + origin → target route, paired with a
 * product-style "Market Access Brief" mockup. All mockup values are sample
 * data drawn from the destination's data entry.
 */
export function DestinationHero({ d }: { d: DestinationPage }) {
  const typeLabel = destinationPathTypeLabel[d.pathType];
  const isLocal = d.pathType === "local";

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
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-plum/5 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-wide text-plum">
              <Icon name={destinationPathTypeIcon[d.pathType]} size={13} />
              {typeLabel} path
            </span>
            <span className="text-[0.7rem] font-semibold uppercase tracking-wide text-slate">
              {destinationStatusLabel[d.status]}
            </span>
          </div>

          <Eyebrow className="mt-5">{d.heroEyebrow}</Eyebrow>
          <h1 className="mt-4 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-plum sm:text-5xl">
            {d.heroTitle}
          </h1>

          {/* Origin → target route */}
          <div className="mt-6 max-w-sm">
            <PathRoute origin={d.originCountry} target={d.targetMarket} />
          </div>

          <p className="mt-6 text-pretty text-lg leading-relaxed text-slate">
            {d.heroSubtitle}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <TrackedButton
              href={d.cta.primary.href}
              size="lg"
              withArrow
              event="destination_cta_clicked"
              eventProps={{
                locale: "en-US",
                page: `/market-access/${d.slug}`,
                section: "hero",
                path: d.slug,
                pathType: d.pathType,
                originCountry: d.originCountry,
                targetMarket: d.targetMarket,
                cta: d.cta.primary.label,
                href: d.cta.primary.href,
              }}
            >
              {d.cta.primary.label}
            </TrackedButton>
            <Button href="#readiness" variant="ghost" size="lg">
              See readiness
            </Button>
          </div>
        </div>

        {/* Market Access Brief mockup */}
        <div className="lg:pl-4">
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-[radial-gradient(60%_60%_at_70%_20%,rgba(229,106,58,0.18),transparent_70%)]"
            />
            <div className="relative animate-rise">
              <WindowFrame
                title="govdecision · Market access brief"
                badge="Sample"
                className="backdrop-blur"
              >
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-coral">
                  Market access brief
                </p>

                <div className="mt-4 divide-y divide-line/70">
                  <FieldRow label="Origin" value={d.originCountry} emphasis />
                  <FieldRow label="Target" value={d.targetMarket} emphasis />
                  <div className="flex items-center justify-between gap-4 py-2">
                    <span className="text-xs font-medium uppercase tracking-wide text-slate">
                      Path type
                    </span>
                    <Pill tone={isLocal ? "plum" : "coral"}>
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          isLocal ? "bg-plum" : "bg-coral"
                        }`}
                      />
                      {typeLabel}
                    </Pill>
                  </div>
                  <FieldRow
                    label="Readiness priority"
                    value={d.readinessPriority}
                  />
                </div>

                <div className="mt-4 flex items-center gap-3 rounded-2xl bg-plum p-3.5 text-white">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10">
                    <Icon name="route" size={18} className="text-coral-200" />
                  </span>
                  <div>
                    <p className="text-[0.6rem] font-semibold uppercase tracking-wide text-white/55">
                      Recommended first step
                    </p>
                    <p className="text-sm font-semibold">{d.firstStep}</p>
                  </div>
                </div>
              </WindowFrame>
            </div>

            {/* Floating chip: market type */}
            <div className="absolute -left-4 top-10 hidden animate-float-slow rounded-2xl border border-line bg-white px-4 py-3 shadow-card sm:-left-8 md:block">
              <p className="text-[0.65rem] font-semibold uppercase tracking-wide text-slate">
                Market type
              </p>
              <p className="text-sm font-bold tracking-tight text-plum">
                {typeLabel}
              </p>
              <p className="text-[0.7rem] font-medium text-coral">
                {isLocal ? "Start with GovDecision" : "GovDecision + Sax Global"}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
