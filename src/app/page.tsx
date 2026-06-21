import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Section, SectionHeader } from "@/components/ui/Section";
import { HeroMockup } from "@/components/marketing/HeroMockup";
import { WorldMap } from "@/components/marketing/WorldMap";
import { CtaBand } from "@/components/marketing/CtaBand";
import { capabilityCards } from "@/data/platform";
import { corridors, corridorsGlobalLine } from "@/data/corridors";
import { primaryCta, secondaryCta } from "@/data/navigation";
import { site } from "@/data/site";

const journey = [
  { label: "Opportunity noise", icon: "layers" as IconName },
  { label: "Decision clarity", icon: "target" as IconName },
  { label: "Readiness", icon: "checklist" as IconName },
  { label: "Route to market", icon: "route" as IconName },
  { label: "Award execution", icon: "award" as IconName },
];

export default function HomePage() {
  return (
    <>
      {/* ---------------------------------------------------------------- Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-surface to-ivory">
        <div aria-hidden className="bg-grid absolute inset-0 opacity-60" />
        <div
          aria-hidden
          className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(229,106,58,0.10),transparent_70%)]"
        />
        <Container className="relative grid items-center gap-14 py-16 lg:grid-cols-[1.05fr_1fr] lg:gap-12 lg:py-24">
          <div className="max-w-xl">
            <Eyebrow>{site.positioning}</Eyebrow>
            <h1 className="mt-5 text-balance text-4xl font-extrabold leading-[1.04] tracking-tight text-plum sm:text-5xl lg:text-[3.4rem]">
              Government opportunities are everywhere. The hard part is knowing
              where to compete.
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-slate">
              {site.name} helps suppliers qualify opportunities, build
              readiness, and enter public sector markets with better decisions
              across countries.
            </p>

            {/* Slogan */}
            <div className="mt-7 inline-flex items-center gap-2.5 rounded-full border border-coral/30 bg-coral/5 px-4 py-2">
              <Icon name="spark" size={16} className="text-coral" />
              <span className="text-sm font-bold tracking-tight text-plum">
                {site.tagline}
              </span>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={primaryCta.href} size="lg" withArrow>
                {primaryCta.label}
              </Button>
              <Button href={secondaryCta.href} variant="ghost" size="lg">
                {secondaryCta.label}
              </Button>
            </div>

            <p className="mt-8 text-sm text-slate">
              <span className="font-semibold text-plum">
                {site.strategicLines[0]}
              </span>{" "}
              {site.strategicLines[1]}
            </p>
          </div>

          <div className="lg:pl-4">
            <HeroMockup />
          </div>
        </Container>

        {/* Journey strip */}
        <div className="relative border-t border-line/70 bg-ivory/60">
          <Container className="py-5">
            <ol className="flex flex-wrap items-center justify-between gap-y-3">
              {journey.map((step, i) => (
                <li key={step.label} className="flex items-center gap-3">
                  <span className="flex items-center gap-2 text-sm font-medium text-plum">
                    <Icon name={step.icon} size={17} className="text-coral" />
                    {step.label}
                  </span>
                  {i < journey.length - 1 && (
                    <Icon
                      name="arrow-right"
                      size={15}
                      className="hidden text-line sm:block"
                    />
                  )}
                </li>
              ))}
            </ol>
          </Container>
        </div>
      </section>

      {/* ------------------------------------------------------ The real problem */}
      <Section tone="white">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeader
              eyebrow="The real problem"
              title="More opportunities do not create more wins. Better decisions do."
              lead="The market is full of bid boards, alerts, portals, PDFs, and fragmented requirements. The real pain is not finding opportunities — it is deciding what is worth pursuing and what must be fixed before you can compete."
            />
            <p className="mt-6 text-pretty leading-relaxed text-slate">
              Most suppliers do not lose government business because they never
              saw the opportunity. They lose because they pursued the wrong one,
              found a critical requirement too late, or lacked the documents,
              registrations, or local partner the market demanded.
            </p>
          </div>

          {/* Noise -> decision visual */}
          <div className="relative">
            <div className="space-y-2.5 rounded-3xl border border-line bg-surface/50 p-5">
              <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate">
                Without a decision layer
              </p>
              {["Tender alert · low fit", "Bid board · expired", "PDF requirement set", "Portal notification", "Forwarded email · unclear"].map(
                (n) => (
                  <div
                    key={n}
                    className="flex items-center gap-3 rounded-xl border border-line/70 bg-white/70 px-3 py-2.5 text-sm text-slate"
                  >
                    <span className="h-2 w-2 rounded-full bg-line" />
                    <span className="truncate">{n}</span>
                  </div>
                ),
              )}
              <div className="flex items-center gap-3 rounded-xl border border-coral/40 bg-white px-3 py-3 shadow-soft">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-coral/10 text-coral">
                  <Icon name="target" size={16} />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-bold text-plum">
                    1 opportunity worth a real decision
                  </p>
                  <p className="text-xs text-coral-600">
                    Fit 84 · Readiness 72% · Pursue with conditions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* --------------------------------------------------- What GovDecision does */}
      <Section tone="ivory">
        <SectionHeader
          eyebrow="What GovDecision does"
          title="A government business operating system for suppliers."
          lead="Six capabilities take you from raw opportunity noise to a defensible decision, an executable readiness plan, and a route to market."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {capabilityCards.map((card) => (
            <Card key={card.title} interactive className="p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-plum/5 text-plum">
                <Icon name={card.icon as IconName} size={22} />
              </span>
              <h3 className="mt-4 text-lg font-bold text-plum">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">
                {card.description}
              </p>
            </Card>
          ))}
        </div>
        <div className="mt-10">
          <Button href="/platform" variant="ghost" withArrow>
            See the full platform
          </Button>
        </div>
      </Section>

      {/* ----------------------------------------------------- Global corridors */}
      <Section tone="white">
        <SectionHeader
          align="center"
          eyebrow="Global corridors"
          title="A global platform for government business corridors."
          lead={corridorsGlobalLine}
        />
        <div className="mt-10 overflow-hidden rounded-[2rem] border border-line bg-gradient-to-b from-surface/60 to-white p-4 sm:p-8">
          <WorldMap tone="light" className="max-h-[460px]" />
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {corridors.map((c) => (
            <Link
              key={c.id}
              href="/corridors"
              className="group flex items-center justify-between gap-2 rounded-2xl border border-line bg-white px-4 py-3 transition-colors hover:border-coral/40"
            >
              <span className="text-sm font-semibold text-plum">{c.name}</span>
              <span className="text-[0.65rem] font-semibold uppercase tracking-wide text-slate group-hover:text-coral-600">
                {c.status}
              </span>
            </Link>
          ))}
        </div>
        <p className="mt-6 max-w-2xl text-sm text-slate">
          {site.coverageDisclaimer}
        </p>
      </Section>

      {/* ------------------------------------------------ AI-assisted, decision-led */}
      <Section tone="surface">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <Card className="p-6">
              <div className="flex items-center gap-2">
                <Icon name="spark" size={18} className="text-coral" />
                <span className="text-xs font-semibold uppercase tracking-wide text-slate">
                  AI assist · executive brief
                </span>
              </div>
              <div className="mt-4 space-y-3">
                {[
                  "Extracted 14 requirements from 38 pages",
                  "3 blockers detected · 1 critical",
                  "Deadline parsed · 19 days remaining",
                  "Go / no-go: pursue with conditions",
                ].map((line, i) => (
                  <div
                    key={line}
                    className="flex items-start gap-3 rounded-xl bg-surface/70 px-3 py-2.5 text-sm text-plum/90"
                  >
                    <span
                      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                        i === 3
                          ? "bg-coral/15 text-coral-600"
                          : "bg-plum/10 text-plum"
                      }`}
                    >
                      <Icon name="check" size={12} />
                    </span>
                    {line}
                  </div>
                ))}
              </div>
            </Card>
          </div>
          <div className="order-1 lg:order-2">
            <SectionHeader
              eyebrow="AI-assisted, decision-led"
              title="AI removes the busywork. People make the call."
              lead="GovDecision uses AI to reduce operational waste and support human-calibrated business decisions — never to replace your judgment."
            />
            <ul className="mt-6 space-y-3">
              {[
                "Extract requirements from long, fragmented documents",
                "Summarize opportunities into clear briefs",
                "Detect blockers and missing readiness items",
                "Support readiness analysis and go/no-go briefs",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-coral/10 text-coral">
                    <Icon name="check" size={12} />
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* ----------------------------------------------------- Sax Global support */}
      <section className="bg-plum py-20 text-white sm:py-28">
        <div className="bg-grid-light">
          <Container>
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <Eyebrow tone="light">Sax Global support</Eyebrow>
                <h2 className="mt-5 text-balance text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl">
                  Software structures the process. Sax Global supports the route.
                </h2>
                <p className="mt-6 text-pretty text-lg leading-relaxed text-white/70">
                  {site.name} is supported by {site.parentArm}, the cross-border
                  business arm of {site.parent}. Where it applies, Sax Global can
                  support market access, local partner strategy, business setup
                  context, cross-border execution, and readiness guidance.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button href="/company" variant="light" withArrow>
                    About {site.parent}
                  </Button>
                  <Button href="/corridors" variant="ghost" className="border-white/25 bg-white/5 text-white hover:bg-white/10">
                    View corridors
                  </Button>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { icon: "compass" as IconName, t: "Market access", d: "Practical entry routes by country and corridor." },
                  { icon: "route" as IconName, t: "Local partner strategy", d: "When to partner, distribute, or go direct." },
                  { icon: "layers" as IconName, t: "Business setup context", d: "What cross-border execution really requires." },
                  { icon: "checklist" as IconName, t: "Readiness guidance", d: "Calibrated support to close the gaps." },
                ].map((b) => (
                  <div
                    key={b.t}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5"
                  >
                    <Icon name={b.icon} size={22} className="text-coral-200" />
                    <h3 className="mt-3 font-bold text-white">{b.t}</h3>
                    <p className="mt-1.5 text-sm text-white/60">{b.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </div>
      </section>

      {/* ----------------------------------------------------------- Final CTA */}
      <CtaBand
        eyebrow="From readiness to award"
        title="Become a government-ready supplier."
        subtitle="Start with readiness. Pursue with method. Expand across public sector markets with better decisions."
      />
    </>
  );
}
