import type { Locale } from "@/i18n/config";
import { localePath } from "@/i18n/routing";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Section, SectionHeader } from "@/components/ui/Section";
import { TrackedButton } from "@/components/analytics/TrackedButton";
import { CtaBand } from "@/components/marketing/CtaBand";
import { Meter, Pill, WindowFrame } from "@/components/marketing/MockupKit";
import { BriefMockup } from "@/components/partner-capital/BriefMockup";
import {
  DecisionMatrix,
  type MatrixCell,
} from "@/components/partner-capital/DecisionMatrix";
import { Timeline } from "@/components/partner-capital/Timeline";
import { BreadcrumbJsonLd, WebPageJsonLd } from "@/components/seo/JsonLd";
import { getPartnerCapital } from "@/i18n/partner-capital";

/** Icons for the seven route-options nodes (order matches routes.options). */
const routeIcons: IconName[] = [
  "target",
  "flag",
  "layers",
  "globe",
  "route",
  "compass",
  "spark",
];

/**
 * Decision-matrix cell tokens (structural, not copy). Each row = a context
 * signal; each triple = how Direct / Partner / Validate-first fit. The friction
 * signals here genuinely favour a partner or a validation step — never a
 * guarantee. Order matches partners.matrix.rows.
 */
const matrixCells: [MatrixCell, MatrixCell, MatrixCell][] = [
  ["harder", "strong", "none"], // Foreign buyer context
  ["harder", "strong", "none"], // Local delivery requirement
  ["harder", "strong", "check"], // Language / documentation friction
  ["harder", "strong", "check"], // Portal registration complexity
  ["harder", "strong", "none"], // After-award execution
  ["harder", "strong", "check"], // Warranty / service support
];

/**
 * GovDecision Partner Network (SITE-015, visual refresh). Rendered by both the
 * EN-US (`(site)`) and localized (`[locale]`) routes. Visual-first: hero routing
 * mockup, route-options infographic, a "when a partner matters" matrix, a
 * partner-route timeline, and a detailed (illustrative) Partner Route Brief. The
 * hero "Talk to Sax Global" CTA carries the cross-border partner-network contact
 * context (`?path=partner-network&type=cross-border`).
 */
export function PartnersView({ locale }: { locale: Locale }) {
  const t = getPartnerCapital(locale).partners;
  const lp = (href: string) => localePath(locale, href);
  const contactHref = lp("/contact?path=partner-network&type=cross-border");
  const marketAccessHref = lp("/market-access");
  const page = "/partners";
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
                  cta: "talk_to_sax",
                  href: contactHref,
                }}
              >
                {t.hero.primaryCta}
              </TrackedButton>
              <TrackedButton
                href={marketAccessHref}
                variant="ghost"
                size="lg"
                event="cta_clicked"
                eventProps={{
                  locale,
                  page,
                  section: "hero",
                  cta: "explore_market_access",
                  href: marketAccessHref,
                }}
              >
                {t.hero.secondaryCta}
              </TrackedButton>
            </div>
          </div>

          {/* Hero routing mockup */}
          <div className="lg:pl-4">
            <WindowFrame title={hm.windowTitle} badge={hm.illustrative}>
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-coral">
                {hm.routeLabel}
              </p>
              <div className="mt-3 space-y-2">
                {hm.routes.map((r, i) => {
                  const isRec = i === 1;
                  return (
                    <div
                      key={r}
                      className={`flex items-center justify-between rounded-xl border px-3 py-2.5 ${
                        isRec
                          ? "border-coral/40 bg-coral/5"
                          : "border-line bg-surface/40"
                      }`}
                    >
                      <span className="flex items-center gap-2 text-sm font-semibold text-plum">
                        <Icon
                          name={isRec ? "route" : "arrow-right"}
                          size={15}
                          className={isRec ? "text-coral" : "text-slate"}
                        />
                        {r}
                      </span>
                      {isRec && <Pill tone="coral">{hm.recommended}</Pill>}
                    </div>
                  );
                })}
              </div>
              <div className="mt-4">
                <Meter
                  value={55}
                  label={hm.dependencyLabel}
                  valueLabel={hm.dependencyValue}
                  tone="coral"
                />
              </div>
            </WindowFrame>
          </div>
        </Container>
      </section>

      {/* ----------------------------------------- Why partner strategy matters */}
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

      {/* --------------------------------------------------- Route-options infographic */}
      <Section tone="ivory">
        <SectionHeader
          eyebrow={t.routes.eyebrow}
          title={t.routes.title}
          lead={t.routes.lead}
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {t.routes.options.map((opt, i) => (
            <article
              key={opt.title}
              className="flex items-start gap-3 rounded-2xl border border-line bg-white p-5 shadow-soft"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-plum/5 text-plum">
                <Icon name={routeIcons[i] ?? "route"} size={20} />
              </span>
              <div>
                <h3 className="text-sm font-bold text-plum">{opt.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-slate">
                  {opt.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* ------------------------------------------------ When a partner matters */}
      <Section tone="white">
        <SectionHeader
          eyebrow={t.matrix.eyebrow}
          title={t.matrix.title}
          lead={t.matrix.lead}
        />
        <div className="mt-12">
          <DecisionMatrix
            columns={t.matrix.columns}
            cellLabels={t.matrix.cellLabels}
            rows={t.matrix.rows}
            cells={matrixCells}
          />
        </div>
      </Section>

      {/* -------------------------------------------------- Partner-route timeline */}
      <Section tone="ivory">
        <SectionHeader
          eyebrow={t.timeline.eyebrow}
          title={t.timeline.title}
          lead={t.timeline.lead}
        />
        <div className="mt-12">
          <Timeline steps={t.timeline.steps} />
        </div>
      </Section>

      {/* ------------------------------------------------------ Partner categories */}
      <Section tone="white">
        <SectionHeader
          eyebrow={t.categories.eyebrow}
          title={t.categories.title}
          lead={t.categories.lead}
        />
        <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {t.categories.items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-2xl border border-line bg-surface/40 p-4 text-sm font-medium text-plum/90"
            >
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-coral/10 text-coral">
                <Icon name="check" size={13} />
              </span>
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-8 flex max-w-3xl items-start gap-2.5 rounded-2xl border border-line bg-white p-4 text-sm leading-relaxed text-slate">
          <Icon name="shield" size={17} className="mt-0.5 shrink-0 text-plum/50" />
          {t.categories.note}
        </p>
      </Section>

      {/* ----------------------------------------------- Where GovDecision helps */}
      <Section tone="ivory">
        <SectionHeader
          eyebrow={t.govDecision.eyebrow}
          title={t.govDecision.title}
          lead={t.govDecision.lead}
        />
        <ul className="mt-12 grid gap-4 sm:grid-cols-2">
          {t.govDecision.points.map((point) => (
            <li
              key={point}
              className="flex items-start gap-3 rounded-2xl border border-line bg-white p-5 shadow-soft"
            >
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-coral/10 text-coral">
                <Icon name="check" size={14} />
              </span>
              <p className="text-sm leading-relaxed text-plum/90">{point}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* ------------------------------------------------- Where Sax Global helps */}
      <section className="bg-plum py-20 text-white sm:py-28">
        <div className="bg-grid-light">
          <Container>
            <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
              <div>
                <Eyebrow tone="light">{t.sax.eyebrow}</Eyebrow>
                <h2 className="mt-5 text-balance text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl">
                  {t.sax.title}
                </h2>
                <p className="mt-6 text-pretty text-lg leading-relaxed text-white/70">
                  {t.sax.lead}
                </p>
              </div>
              <ul className="grid gap-3 sm:grid-cols-2">
                {t.sax.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 text-sm leading-relaxed text-white/85"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/10 text-coral-200">
                      <Icon name="compass" size={14} />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </div>
      </section>

      {/* ------------------------------------------- Detailed Partner Route Brief */}
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
            checklist={{
              label: t.mockup.validationLabel,
              items: t.mockup.validationItems,
            }}
            footerLabel={t.mockup.decisionLabel}
            footerValue={t.mockup.decisionValue}
            icon="route"
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
            cta: "talk_to_sax",
            href: contactHref,
          },
        }}
        secondary={{
          label: t.finalCta.secondary,
          href: marketAccessHref,
          event: "cta_clicked",
          eventProps: {
            locale,
            page,
            section: "final_cta",
            cta: "explore_market_access",
            href: marketAccessHref,
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
