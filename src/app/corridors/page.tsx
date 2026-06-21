import type { Metadata } from "next";
import { Icon } from "@/components/ui/Icon";
import { Section, SectionHeader } from "@/components/ui/Section";
import { PageHero } from "@/components/marketing/PageHero";
import { WorldMap } from "@/components/marketing/WorldMap";
import { CtaBand } from "@/components/marketing/CtaBand";
import {
  corridors,
  corridorsCoverageNote,
  corridorsGlobalLine,
  corridorsIntro,
  type CorridorStatus,
} from "@/data/corridors";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Corridors",
  description:
    "Government business corridors, structured by country: the United States, Brazil, Paraguay, Mexico, Canada, selected African markets, plus UN and World Bank.",
};

const statusStyles: Record<CorridorStatus, string> = {
  "Active focus": "bg-coral/10 text-coral-600",
  "In development": "bg-plum/8 text-plum",
  Targeted: "bg-surface text-slate",
  Multilateral: "bg-plum text-white",
};

const combines = [
  "Global decision logic",
  "Country-specific packs",
  "Official / public opportunity sources where available",
  "Supplier readiness workflows",
  "Route-to-market strategy",
  `${site.parentArm} support for cross-border access`,
];

export default function CorridorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Global corridors"
        title="Government business corridors, structured by country."
        lead={corridorsIntro}
      />

      {/* Map on a premium plum panel */}
      <Section tone="ivory">
        <div className="relative overflow-hidden rounded-[2rem] bg-plum p-6 sm:p-10">
          <div aria-hidden className="bg-grid-light absolute inset-0 opacity-50" />
          <div className="relative">
            <p className="text-center text-sm font-semibold uppercase tracking-[0.16em] text-white/50">
              {corridorsGlobalLine}
            </p>
            <WorldMap tone="plum" className="mt-4 max-h-[520px]" />
            <ul className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-white/65">
              <li className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-coral" />
                Active focus
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-white" />
                In development
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rotate-45 bg-coral" />
                Multilateral
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-coral ring-4 ring-coral/30" />
                Sax Global hub
              </li>
            </ul>
          </div>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-sm text-slate">
          {site.coverageDisclaimer}
        </p>
      </Section>

      {/* How corridors combine */}
      <Section tone="white">
        <SectionHeader
          eyebrow="How it works"
          title="A global decision engine, grounded in country reality."
          lead="GovDecision pairs one decision logic with country-specific packs, so a recommendation reflects both global method and local rules."
        />
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {combines.map((c) => (
            <div
              key={c}
              className="flex items-start gap-3 rounded-2xl border border-line bg-white p-5"
            >
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-coral/10 text-coral">
                <Icon name="check" size={13} />
              </span>
              <span className="text-sm font-medium text-plum/90">{c}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Market cards */}
      <Section tone="surface">
        <SectionHeader
          eyebrow="Markets"
          title="Where GovDecision focuses today."
          lead="Each corridor combines sources, registration logic, readiness requirements, and route-to-market guidance."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {corridors.map((c) => (
            <article
              key={c.id}
              className="flex flex-col rounded-3xl border border-line bg-white p-6 shadow-soft"
            >
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-plum">
                  <Icon
                    name={c.type === "multilateral" ? "globe" : "flag"}
                    size={18}
                    className="text-coral"
                  />
                  <h3 className="text-lg font-bold">{c.name}</h3>
                </span>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <span
                  className={`rounded-full px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide ${statusStyles[c.status]}`}
                >
                  {c.status}
                </span>
                <span className="text-xs text-slate">{c.region}</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate">
                {c.summary}
              </p>
              <ul className="mt-5 space-y-2 border-t border-line/70 pt-5">
                {c.focus.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2.5 text-sm text-plum/85"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />
                    {f}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-line bg-white p-6">
          <p className="flex items-start gap-3 text-sm text-slate">
            <Icon name="shield" size={18} className="mt-0.5 shrink-0 text-plum/50" />
            <span>{corridorsCoverageNote}</span>
          </p>
        </div>
      </Section>

      <CtaBand
        title="Plan your route into a new market."
        subtitle="Tell us where you want to compete. We will help you decide what readiness and route make sense."
        primary={{ label: "Start readiness", href: "/contact" }}
        secondary={{ label: "Explore the platform", href: "/platform" }}
      />
    </>
  );
}
