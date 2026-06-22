import type { Locale } from "@/i18n/config";
import { localePath } from "@/i18n/routing";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon } from "@/components/ui/Icon";
import { Section, SectionHeader } from "@/components/ui/Section";
import { TrackedButton } from "@/components/analytics/TrackedButton";
import { CtaBand } from "@/components/marketing/CtaBand";
import { FieldRow, Meter, WindowFrame } from "@/components/marketing/MockupKit";
import { BriefMockup } from "@/components/partner-capital/BriefMockup";
import { CashflowTimeline } from "@/components/partner-capital/CashflowTimeline";
import { Timeline } from "@/components/partner-capital/Timeline";
import { BreadcrumbJsonLd, WebPageJsonLd } from "@/components/seo/JsonLd";
import { getPartnerCapital } from "@/i18n/partner-capital";

/**
 * GovDecision Capital (SITE-015, visual refresh) — the finance-readiness layer.
 * Rendered by both the EN-US (`(site)`) and localized (`[locale]`) routes.
 * Visual-first: hero finance-readiness mockup, a public-contract cash-flow
 * timeline, a capital-gaps grid, a funding-route map, a before/after-award
 * comparison, and a detailed (illustrative) Finance Readiness Brief. Positioned
 * as capital readiness / case structuring / partner matching — NOT direct
 * lending. The hero CTA carries `?path=govdecision-capital&type=cross-border`.
 */
export function CapitalView({ locale }: { locale: Locale }) {
  const t = getPartnerCapital(locale).capital;
  const lp = (href: string) => localePath(locale, href);
  const contactHref = lp("/contact?path=govdecision-capital&type=cross-border");
  const platformHref = lp("/platform");
  const page = "/capital";
  const hm = t.heroMockup;

  return (
    <>
      <WebPageJsonLd
        locale={locale}
        path={page}
        name={t.meta.title}
        description={t.meta.description}
      />
      <BreadcrumbJsonLd
        locale={locale}
        crumbs={[
          { name: "GovDecision", path: "/" },
          { name: t.breadcrumbName, path: page },
        ]}
      />

      {/* ---------------------------------------------------------------- Hero */}
      <section className="relative overflow-hidden border-b border-line bg-gradient-to-b from-surface to-ivory">
        <div aria-hidden className="bg-grid absolute inset-0 opacity-60" />
        <div
          aria-hidden
          className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(229,106,58,0.10),transparent_70%)]"
        />
        <Container className="relative grid items-center gap-14 py-16 lg:grid-cols-[1.05fr_1fr] lg:gap-12 lg:py-24">
          <div className="max-w-xl">
            <Eyebrow>{t.hero.eyebrow}</Eyebrow>
            <h1 className="mt-5 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-plum sm:text-5xl">
              {t.hero.title}
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-slate">
              {t.hero.subtitle}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrackedButton
                href={contactHref}
                size="lg"
                withArrow
                event="cta_clicked"
                eventProps={{
                  locale,
                  page,
                  section: "hero",
                  cta: "discuss_capital_readiness",
                  href: contactHref,
                }}
              >
                {t.hero.primaryCta}
              </TrackedButton>
              <TrackedButton
                href={platformHref}
                variant="ghost"
                size="lg"
                event="cta_clicked"
                eventProps={{
                  locale,
                  page,
                  section: "hero",
                  cta: "explore_platform",
                  href: platformHref,
                }}
              >
                {t.hero.secondaryCta}
              </TrackedButton>
            </div>
          </div>

          {/* Hero finance-readiness mockup */}
          <div className="lg:pl-4">
            <WindowFrame title={hm.windowTitle} badge={hm.illustrative}>
              <Meter
                value={58}
                label={hm.scoreLabel}
                valueLabel={hm.scoreValue}
                tone="coral"
              />
              <div className="mt-4 divide-y divide-line/70">
                <FieldRow label={hm.stageLabel} value={hm.stageValue} />
                <FieldRow label={hm.timingLabel} value={hm.timingValue} emphasis />
              </div>
            </WindowFrame>
          </div>
        </Container>
      </section>

      {/* ------------------------------------------- Why capital readiness matters */}
      <Section tone="white">
        <SectionHeader eyebrow={t.why.eyebrow} title={t.why.title} lead={t.why.lead} />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {t.why.points.map((p) => (
            <article
              key={p.title}
              className="rounded-3xl border border-line bg-surface/40 p-6 sm:p-7"
            >
              <h3 className="text-lg font-bold text-plum">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate">
                {p.description}
              </p>
            </article>
          ))}
        </div>
      </Section>

      {/* ------------------------------------------------- Cash-flow timeline */}
      <Section tone="ivory">
        <SectionHeader
          eyebrow={t.cashflow.eyebrow}
          title={t.cashflow.title}
          lead={t.cashflow.lead}
        />
        <div className="mt-12">
          <CashflowTimeline
            steps={t.cashflow.steps}
            pressureLabel={t.cashflow.pressureLabel}
            pressures={t.cashflow.pressures}
          />
        </div>
      </Section>

      {/* ------------------------------------------------------ Capital gaps grid */}
      <Section tone="white">
        <SectionHeader eyebrow={t.gaps.eyebrow} title={t.gaps.title} lead={t.gaps.lead} />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.gaps.items.map((item) => (
            <article
              key={item}
              className="flex items-center gap-3 rounded-2xl border border-line bg-surface/40 p-5"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-plum/5 text-plum">
                <Icon name="coins" size={20} />
              </span>
              <h3 className="text-sm font-bold text-plum">{item}</h3>
            </article>
          ))}
        </div>
        <p className="mt-8 flex max-w-3xl items-start gap-2.5 rounded-2xl border border-line bg-white p-4 text-sm leading-relaxed text-slate">
          <Icon name="shield" size={17} className="mt-0.5 shrink-0 text-plum/50" />
          {t.gaps.note}
        </p>
      </Section>

      {/* -------------------------------------------------------- Funding-route map */}
      <Section tone="ivory">
        <SectionHeader
          eyebrow={t.fundingRoute.eyebrow}
          title={t.fundingRoute.title}
          lead={t.fundingRoute.lead}
        />
        <div className="mt-12">
          <Timeline steps={t.fundingRoute.flow} />
        </div>
        <div className="mt-10 rounded-3xl border border-line bg-white p-6 shadow-soft sm:p-7">
          <p className="text-[0.65rem] font-semibold uppercase tracking-wide text-slate">
            {t.fundingRoute.routesLabel}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {t.fundingRoute.routes.map((r) => (
              <span
                key={r}
                className="inline-flex items-center gap-1.5 rounded-full bg-plum/5 px-3 py-1.5 text-xs font-semibold text-plum"
              >
                <Icon name="coins" size={13} className="text-coral" />
                {r}
              </span>
            ))}
          </div>
        </div>
        <p className="mt-6 flex max-w-3xl items-start gap-2.5 rounded-2xl border border-coral/30 bg-coral/5 p-4 text-sm leading-relaxed text-plum/80">
          <Icon name="shield" size={17} className="mt-0.5 shrink-0 text-coral" />
          {t.fundingRoute.note}
        </p>
      </Section>

      {/* ------------------------------------------ Before / after award comparison */}
      <Section tone="white">
        <SectionHeader
          eyebrow={t.beforeAfter.eyebrow}
          title={t.beforeAfter.title}
          lead={t.beforeAfter.lead}
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {[
            { label: t.beforeAfter.beforeLabel, points: t.beforeAfter.beforePoints },
            { label: t.beforeAfter.afterLabel, points: t.beforeAfter.afterPoints },
          ].map((col) => (
            <article
              key={col.label}
              className="rounded-3xl border border-line bg-surface/40 p-7 sm:p-8"
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-plum px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-white">
                {col.label}
              </span>
              <ul className="mt-5 space-y-3">
                {col.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-sm font-semibold leading-relaxed text-plum/90"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-coral/10 text-xs font-bold text-coral">
                      ?
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      {/* ----------------------------------------- Detailed Finance Readiness Brief */}
      <Section tone="surface">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <div>
            <SectionHeader
              eyebrow={t.mockup.eyebrow}
              title={t.mockup.title}
              lead={t.mockup.lead}
            />
            <p className="mt-6 text-xs font-medium uppercase tracking-wide text-slate">
              {t.mockup.caption}
            </p>
          </div>
          <BriefMockup
            windowTitle={t.mockup.windowTitle}
            briefTitle={t.mockup.briefTitle}
            illustrative={t.mockup.illustrative}
            fields={t.mockup.fields}
            footerLabel={t.mockup.nextStepLabel}
            footerValue={t.mockup.nextStepValue}
            icon="coins"
          />
        </div>
      </Section>

      {/* ----------------------------------------------------------- Final CTA */}
      <CtaBand
        eyebrow={t.finalCta.eyebrow}
        title={t.finalCta.title}
        subtitle={t.finalCta.subtitle}
        primary={{
          label: t.finalCta.primary,
          href: contactHref,
          event: "cta_clicked",
          eventProps: {
            locale,
            page,
            section: "final_cta",
            cta: "discuss_capital_readiness",
            href: contactHref,
          },
        }}
        secondary={{
          label: t.finalCta.secondary,
          href: platformHref,
          event: "cta_clicked",
          eventProps: {
            locale,
            page,
            section: "final_cta",
            cta: "explore_platform",
            href: platformHref,
          },
        }}
      />

      {/* ----------------------------------------------------------- Disclaimer */}
      <section className="bg-ivory pb-16">
        <Container>
          <p className="max-w-3xl text-xs leading-relaxed text-slate">
            {t.disclaimer}
          </p>
        </Container>
      </section>
    </>
  );
}
