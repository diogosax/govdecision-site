import type { Locale } from "@/i18n/config";
import { localePath } from "@/i18n/routing";
import { getDictionary } from "@/i18n/get-dictionary";
import { getExperimentVariant } from "@/lib/experiments/experiments";
import { TrackedButton } from "@/components/analytics/TrackedButton";
import { ExperimentView } from "@/components/analytics/ExperimentView";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon } from "@/components/ui/Icon";
import { Section, SectionHeader } from "@/components/ui/Section";
import { CtaBand } from "@/components/marketing/CtaBand";
import { FieldRow, Pill, WindowFrame } from "@/components/marketing/MockupKit";
import { BriefsGrid } from "@/components/briefs/BriefsGrid";
import type { BriefGridItem } from "@/components/briefs/BriefCard";
import { PartnerCapitalPromo } from "@/components/partner-capital/PartnerCapitalPromo";
import { briefChrome, getBriefCards, getMarketLabels } from "@/i18n/briefs";
import { getPartnerCapital } from "@/i18n/partner-capital";

/**
 * Government Opportunity Briefs index. Rendered by both the EN-US (`(site)`) and
 * localized (`[locale]`) routes, so the layout stays identical while copy and
 * link targets follow the active locale. Card analytics keep stable identifiers
 * (canonical EN market keys, locale-less page path).
 */
export function OpportunityBriefsView({ locale }: { locale: Locale }) {
  const chrome = briefChrome[locale];
  const contactHref = localePath(locale, "/contact");

  // Experiment 4 — Opportunity Briefs CTA (briefsCta). Applies to the index
  // brief-card CTA only; the detail-page CTAs are unaffected.
  const briefsCtaVariant = getExperimentVariant("briefsCta");
  const briefsCtaLabel =
    getDictionary(locale).experiments.briefsCta[briefsCtaVariant];

  const items: BriefGridItem[] = getBriefCards(locale).map((c) => ({
    slug: c.slug,
    market: c.market,
    marketLabel: c.marketLabel,
    pathType: c.pathType,
    pathTypeLabel: chrome.pathTypeLabels[c.pathType],
    status: c.status,
    statusLabel: chrome.statusLabels[c.status],
    icon: c.icon,
    opportunityType: c.opportunityType,
    buyerType: c.buyerType,
    sourceName: c.sourceName,
    shortTitle: c.shortTitle,
    whySuppliersCare: c.whySuppliersCare,
    detailHref: localePath(locale, `/opportunity-briefs/${c.slug}`),
  }));

  const markets = getMarketLabels(locale);

  return (
    <>
      {/* ---------------------------------------------------------------- Hero */}
      <section className="relative overflow-hidden border-b border-line bg-gradient-to-b from-surface to-ivory">
        <div aria-hidden className="bg-grid absolute inset-0 opacity-60" />
        <div
          aria-hidden
          className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(229,106,58,0.10),transparent_70%)]"
        />
        <Container className="relative grid items-center gap-14 py-16 lg:grid-cols-[1.05fr_1fr] lg:gap-12 lg:py-24">
          <div className="max-w-xl">
            <Eyebrow>{chrome.indexEyebrow}</Eyebrow>
            <h1 className="mt-5 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-plum sm:text-5xl">
              {chrome.indexTitle}
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-slate">
              {chrome.indexSubtitle}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrackedButton
                href="#briefs"
                size="lg"
                withArrow
                event="cta_clicked"
                eventProps={{
                  locale,
                  page: "/opportunity-briefs",
                  section: "hero",
                  cta: "explore_opportunity_briefs",
                  href: "#briefs",
                }}
              >
                {chrome.indexPrimaryCta}
              </TrackedButton>
              <TrackedButton
                href={contactHref}
                variant="ghost"
                size="lg"
                event="cta_clicked"
                eventProps={{
                  locale,
                  page: "/opportunity-briefs",
                  section: "hero",
                  cta: "start_readiness",
                  href: contactHref,
                }}
              >
                {chrome.indexSecondaryCta}
              </TrackedButton>
            </div>

            <p className="mt-7 flex items-start gap-2.5 rounded-2xl border border-line bg-white/70 p-4 text-sm leading-relaxed text-slate">
              <Icon name="shield" size={17} className="mt-0.5 shrink-0 text-plum/50" />
              {chrome.indexNote}
            </p>
          </div>

          {/* Illustrative decision-brief mockup */}
          <div className="lg:pl-4">
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-[radial-gradient(60%_60%_at_70%_20%,rgba(229,106,58,0.18),transparent_70%)]"
              />
              <div className="relative animate-rise">
                <WindowFrame title={chrome.mockupWindowTitle} badge={chrome.sample}>
                  <div className="flex items-center justify-between">
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-coral">
                      {chrome.mockupTitle}
                    </p>
                    <Pill tone="coral">{chrome.illustrative}</Pill>
                  </div>
                  <div className="mt-4 divide-y divide-line/70">
                    <FieldRow
                      label={chrome.fitSignalLabel}
                      value={chrome.fitSignalLabels["medium-high"]}
                      emphasis
                    />
                    <FieldRow
                      label={chrome.readinessRiskLabel}
                      value={chrome.riskLabels.medium}
                    />
                    <FieldRow label={chrome.blockersDetectedLabel} value="4" />
                    <FieldRow
                      label={chrome.routeLabel}
                      value={chrome.routeLabels["direct-or-partner"]}
                    />
                  </div>
                  <div className="mt-4 flex items-center gap-3 rounded-2xl bg-plum p-3.5 text-white">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10">
                      <Icon name="memo" size={18} className="text-coral-200" />
                    </span>
                    <div>
                      <p className="text-[0.6rem] font-semibold uppercase tracking-wide text-white/55">
                        {chrome.decisionLabel}
                      </p>
                      <p className="text-sm font-semibold">
                        {chrome.decisionLabels["review-before-pursuit"]}
                      </p>
                    </div>
                  </div>
                </WindowFrame>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------------ Featured grid */}
      <Section tone="surface" id="briefs">
        <SectionHeader
          eyebrow={chrome.featuredEyebrow}
          title={chrome.featuredTitle}
          lead={chrome.featuredLead}
        />
        <ExperimentView
          experiment="briefsCta"
          variant={briefsCtaVariant}
          locale={locale}
          page="/opportunity-briefs"
        />
        <div className="mt-12">
          <BriefsGrid
            items={items}
            markets={markets}
            locale={locale}
            experimentVariant={briefsCtaVariant}
            labels={{
              cardCta: briefsCtaLabel,
              cardWhyLabel: chrome.cardWhyLabel,
              opportunityField: chrome.opportunityField,
              buyerField: chrome.buyerField,
              sourceField: chrome.sourceField,
              filterAll: chrome.filterAll,
              filterLabel: chrome.filterLabel,
              resultsNone: chrome.resultsNone,
            }}
          />
        </div>
      </Section>

      {/* ------------------------------------------------- How to read a brief */}
      <Section tone="white">
        <SectionHeader
          eyebrow={chrome.howToEyebrow}
          title={chrome.howToTitle}
          lead={chrome.howToLead}
        />
        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {chrome.howToSteps.map((step, i) => (
            <li
              key={step.title}
              className="rounded-3xl border border-line bg-surface/40 p-6"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-plum text-sm font-bold text-white">
                {i + 1}
              </span>
              <h3 className="mt-4 text-base font-bold text-plum">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">{step.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* ----------------------------------------------- Where GovDecision helps */}
      <Section tone="ivory">
        <SectionHeader
          eyebrow={chrome.whereGovEyebrow}
          title={chrome.whereGovTitle}
          lead={chrome.whereGovLead}
        />
        <ul className="mt-12 grid gap-4 sm:grid-cols-2">
          {chrome.whereGovPoints.map((point) => (
            <li
              key={point}
              className="flex items-start gap-3 rounded-3xl border border-line bg-white p-6 shadow-soft"
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
                <Eyebrow tone="light">{chrome.whereSaxEyebrow}</Eyebrow>
                <h2 className="mt-5 text-balance text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl">
                  {chrome.whereSaxTitle}
                </h2>
                <p className="mt-6 text-pretty text-lg leading-relaxed text-white/70">
                  {chrome.whereSaxLead}
                </p>
              </div>
              <ul className="space-y-3">
                {chrome.whereSaxPoints.map((point) => (
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

      {/* ------------------------------------------- Partner / Capital cross-link */}
      <PartnerCapitalPromo
        locale={locale}
        page="/opportunity-briefs"
        partnerHref={localePath(locale, "/partners")}
        capitalHref={localePath(locale, "/capital")}
        t={getPartnerCapital(locale).promo}
      />

      {/* ----------------------------------------------------------- Final CTA */}
      <CtaBand
        eyebrow={chrome.indexFinalEyebrow}
        title={chrome.indexFinalTitle}
        subtitle={chrome.indexFinalSubtitle}
        primary={{
          label: chrome.indexFinalPrimary,
          href: contactHref,
          event: "opportunity_brief_cta_clicked",
          eventProps: {
            locale,
            page: "/opportunity-briefs",
            section: "final_cta",
            cta: "start_readiness",
            href: contactHref,
          },
        }}
        secondary={{
          label: chrome.indexFinalSecondary,
          href: contactHref,
          event: "opportunity_brief_cta_clicked",
          eventProps: {
            locale,
            page: "/opportunity-briefs",
            section: "final_cta",
            cta: "talk_to_team",
            href: contactHref,
          },
        }}
      />

      {/* Disclaimer */}
      <section className="bg-ivory pb-16">
        <Container>
          <p className="max-w-3xl text-xs leading-relaxed text-slate">
            {chrome.disclaimer}
          </p>
        </Container>
      </section>
    </>
  );
}
