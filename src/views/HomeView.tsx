import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/types";
import { localePath } from "@/i18n/routing";
import { Button } from "@/components/ui/Button";
import { TrackedButton } from "@/components/analytics/TrackedButton";
import { ExperimentView } from "@/components/analytics/ExperimentView";
import { getExperimentVariant } from "@/lib/experiments/experiments";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Section, SectionHeader } from "@/components/ui/Section";
import { HeroMockup } from "@/components/marketing/HeroMockup";
import { WorldMap } from "@/components/marketing/WorldMap";
import { worldMapLabels } from "@/components/marketing/worldMapLabels";
import { CtaBand } from "@/components/marketing/CtaBand";
import { BriefsPromo } from "@/components/briefs/BriefsPromo";
import { capabilityCards } from "@/data/platform";
import { corridors } from "@/data/corridors";

const journeyIcons: IconName[] = [
  "layers",
  "target",
  "checklist",
  "route",
  "award",
];

const saxIcons: IconName[] = ["compass", "route", "layers", "checklist"];

export function HomeView({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const lp = (href: string) => localePath(locale, href);
  const t = dict.home;

  // Experiment 1 — Home hero CTA copy (homeHeroCta). Deterministic, config-based.
  const heroCtaVariant = getExperimentVariant("homeHeroCta");
  const heroCtaLabel = dict.experiments.homeHeroCta[heroCtaVariant];

  return (
    <>
      {/* ---------------------------------------------------------------- Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-surface to-ivory">
        <ExperimentView
          experiment="homeHeroCta"
          variant={heroCtaVariant}
          locale={locale}
          page="/"
        />
        <div aria-hidden className="bg-grid absolute inset-0 opacity-60" />
        <div
          aria-hidden
          className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(229,106,58,0.10),transparent_70%)]"
        />
        <Container className="relative grid items-center gap-14 py-16 lg:grid-cols-[1.05fr_1fr] lg:gap-12 lg:py-24">
          <div className="max-w-xl">
            <Eyebrow>{t.eyebrow}</Eyebrow>
            <h1 className="mt-5 text-balance text-4xl font-extrabold leading-[1.04] tracking-tight text-plum sm:text-5xl lg:text-[3.4rem]">
              {t.title}
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-slate">
              {t.subtitle}
            </p>

            {/* Slogan */}
            <div className="mt-7 inline-flex items-center gap-2.5 rounded-full border border-coral/30 bg-coral/5 px-4 py-2">
              <Icon name="spark" size={16} className="text-coral" />
              <span className="text-sm font-bold tracking-tight text-plum">
                {t.slogan}
              </span>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrackedButton
                href={lp("/contact")}
                size="lg"
                withArrow
                event="cta_clicked"
                eventProps={{
                  locale,
                  page: "/",
                  section: "hero",
                  cta: "start_readiness",
                  href: lp("/contact"),
                  experiment: "homeHeroCta",
                  variant: heroCtaVariant,
                }}
              >
                {heroCtaLabel}
              </TrackedButton>
              <TrackedButton
                href={lp("/platform")}
                variant="ghost"
                size="lg"
                event="cta_clicked"
                eventProps={{
                  locale,
                  page: "/",
                  section: "hero",
                  cta: "explore_platform",
                  href: lp("/platform"),
                }}
              >
                {dict.common.cta.explorePlatform}
              </TrackedButton>
            </div>

            <p className="mt-8 text-sm text-slate">
              <span className="font-semibold text-plum">{t.strategicLead}</span>{" "}
              {t.strategicRest}
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
              {t.journey.map((label, i) => (
                <li key={label} className="flex items-center gap-3">
                  <span className="flex items-center gap-2 text-sm font-medium text-plum">
                    <Icon name={journeyIcons[i]} size={17} className="text-coral" />
                    {label}
                  </span>
                  {i < t.journey.length - 1 && (
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
              eyebrow={t.problem.eyebrow}
              title={t.problem.title}
              lead={t.problem.lead}
            />
            <p className="mt-6 text-pretty leading-relaxed text-slate">
              {t.problem.paragraph}
            </p>
          </div>

          {/* Noise -> decision visual */}
          <div className="relative">
            <div className="space-y-2.5 rounded-3xl border border-line bg-surface/50 p-5">
              <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate">
                {t.problem.withoutLayer}
              </p>
              {t.problem.noise.map((n) => (
                <div
                  key={n}
                  className="flex items-center gap-3 rounded-xl border border-line/70 bg-white/70 px-3 py-2.5 text-sm text-slate"
                >
                  <span className="h-2 w-2 rounded-full bg-line" />
                  <span className="truncate">{n}</span>
                </div>
              ))}
              <div className="flex items-center gap-3 rounded-xl border border-coral/40 bg-white px-3 py-3 shadow-soft">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-coral/10 text-coral">
                  <Icon name="target" size={16} />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-bold text-plum">
                    {t.problem.decisionTitle}
                  </p>
                  <p className="text-xs text-coral-600">
                    {t.problem.decisionMeta}
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
          eyebrow={t.capabilities.eyebrow}
          title={t.capabilities.title}
          lead={t.capabilities.lead}
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.capabilities.cards.map((card, i) => (
            <Card key={card.title} interactive className="p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-plum/5 text-plum">
                <Icon name={capabilityCards[i].icon as IconName} size={22} />
              </span>
              <h3 className="mt-4 text-lg font-bold text-plum">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">
                {card.description}
              </p>
            </Card>
          ))}
        </div>
        <div className="mt-10">
          <Button href={lp("/platform")} variant="ghost" withArrow>
            {dict.common.cta.seeFullPlatform}
          </Button>
        </div>
      </Section>

      {/* ----------------------------------------------------- Global corridors */}
      <Section tone="white">
        <SectionHeader
          align="center"
          eyebrow={t.corridors.eyebrow}
          title={t.corridors.title}
          lead={t.corridors.lead}
        />
        <div className="mt-10 overflow-hidden rounded-[2rem] border border-line bg-gradient-to-b from-surface/60 to-white p-4 sm:p-8">
          <WorldMap
            tone="light"
            className="max-h-[460px]"
            labels={worldMapLabels[locale]}
          />
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {corridors.map((c) => (
            <Link
              key={c.id}
              href={lp("/corridors")}
              className="group flex items-center justify-between gap-2 rounded-2xl border border-line bg-white px-4 py-3 transition-colors hover:border-coral/40"
            >
              <span className="text-sm font-semibold text-plum">
                {dict.corridors.corridorById[c.id].name}
              </span>
              <span className="text-[0.65rem] font-semibold uppercase tracking-wide text-slate group-hover:text-coral-600">
                {dict.corridors.statusLabels[c.status]}
              </span>
            </Link>
          ))}
        </div>
        <p className="mt-6 max-w-2xl text-sm text-slate">
          {t.corridors.coverage}
        </p>
      </Section>

      {/* ------------------------------------------- Opportunity Briefs promo */}
      <BriefsPromo
        locale={locale}
        page="/"
        href={lp("/opportunity-briefs")}
        t={dict.common.briefsPromo}
      />

      {/* ------------------------------------------------ AI-assisted, decision-led */}
      <Section tone="surface">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <Card className="p-6">
              <div className="flex items-center gap-2">
                <Icon name="spark" size={18} className="text-coral" />
                <span className="text-xs font-semibold uppercase tracking-wide text-slate">
                  {t.ai.cardLabel}
                </span>
              </div>
              <div className="mt-4 space-y-3">
                {t.ai.cardLines.map((line, i) => (
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
              eyebrow={t.ai.eyebrow}
              title={t.ai.title}
              lead={t.ai.lead}
            />
            <ul className="mt-6 space-y-3">
              {t.ai.points.map((item) => (
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
                <Eyebrow tone="light">{t.sax.eyebrow}</Eyebrow>
                <h2 className="mt-5 text-balance text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl">
                  {t.sax.title}
                </h2>
                <p className="mt-6 text-pretty text-lg leading-relaxed text-white/70">
                  {t.sax.lead}
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button href={lp("/company")} variant="light" withArrow>
                    {dict.common.cta.aboutSax}
                  </Button>
                  <Button
                    href={lp("/corridors")}
                    variant="ghost"
                    className="border-white/25 bg-white/5 text-white hover:bg-white/10"
                  >
                    {dict.common.cta.viewCorridors}
                  </Button>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {t.sax.cards.map((b, i) => (
                  <div
                    key={b.title}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5"
                  >
                    <Icon name={saxIcons[i]} size={22} className="text-coral-200" />
                    <h3 className="mt-3 font-bold text-white">{b.title}</h3>
                    <p className="mt-1.5 text-sm text-white/60">{b.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </div>
      </section>

      {/* ----------------------------------------------------------- Final CTA */}
      <CtaBand
        eyebrow={t.finalCta.eyebrow}
        title={t.finalCta.title}
        subtitle={t.finalCta.subtitle}
        primary={{
          label: dict.common.cta.startReadiness,
          href: lp("/contact"),
          event: "cta_clicked",
          eventProps: {
            locale,
            page: "/",
            section: "final_cta",
            cta: "start_readiness",
            href: lp("/contact"),
          },
        }}
        secondary={{
          label: dict.common.cta.explorePlatform,
          href: lp("/platform"),
          event: "cta_clicked",
          eventProps: {
            locale,
            page: "/",
            section: "final_cta",
            cta: "explore_platform",
            href: lp("/platform"),
          },
        }}
      />
    </>
  );
}
