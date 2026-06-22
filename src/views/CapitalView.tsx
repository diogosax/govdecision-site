import type { Locale } from "@/i18n/config";
import { localePath } from "@/i18n/routing";
import { Container } from "@/components/ui/Container";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Section, SectionHeader } from "@/components/ui/Section";
import { TrackedButton } from "@/components/analytics/TrackedButton";
import { PageHero } from "@/components/marketing/PageHero";
import { CtaBand } from "@/components/marketing/CtaBand";
import { BriefMockup } from "@/components/partner-capital/BriefMockup";
import { BreadcrumbJsonLd, WebPageJsonLd } from "@/components/seo/JsonLd";
import { getPartnerCapital } from "@/i18n/partner-capital";

/** Icons for the four "what we structure" cards (order matches structures.points). */
const structureIcons: IconName[] = ["memo", "checklist", "layers", "route"];

/**
 * GovDecision Capital (SITE-015) — the finance-readiness layer. Rendered by both
 * the EN-US (`(site)`) and localized (`[locale]`) routes. Positioned as capital
 * readiness, finance-case preparation, and partner matching — NOT direct
 * lending. The hero "Discuss capital readiness" CTA carries the capital contact
 * context (`?path=govdecision-capital&type=cross-border`).
 */
export function CapitalView({ locale }: { locale: Locale }) {
  const t = getPartnerCapital(locale).capital;
  const lp = (href: string) => localePath(locale, href);
  const contactHref = lp("/contact?path=govdecision-capital&type=cross-border");
  const platformHref = lp("/platform");
  const page = "/capital";

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
      <PageHero eyebrow={t.hero.eyebrow} title={t.hero.title} lead={t.hero.subtitle}>
        <div className="flex flex-col gap-3 sm:flex-row">
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
      </PageHero>

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

      {/* ------------------------------------------- Common finance gaps */}
      <Section tone="ivory">
        <SectionHeader eyebrow={t.gaps.eyebrow} title={t.gaps.title} lead={t.gaps.lead} />
        <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {t.gaps.items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-2xl border border-line bg-white p-4 text-sm font-medium text-plum/90"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-8 flex max-w-3xl items-start gap-2.5 rounded-2xl border border-line bg-white p-4 text-sm leading-relaxed text-slate">
          <Icon name="shield" size={17} className="mt-0.5 shrink-0 text-plum/50" />
          {t.gaps.note}
        </p>
      </Section>

      {/* ----------------------------------- What GovDecision Capital structures */}
      <Section tone="white">
        <SectionHeader
          eyebrow={t.structures.eyebrow}
          title={t.structures.title}
          lead={t.structures.lead}
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {t.structures.points.map((p, i) => (
            <article
              key={p.title}
              className="flex flex-col rounded-3xl border border-line bg-surface/40 p-6 sm:p-7"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-plum/5 text-plum">
                <Icon name={structureIcons[i] ?? "memo"} size={22} />
              </span>
              <h3 className="mt-4 text-lg font-bold text-plum">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">
                {p.description}
              </p>
            </article>
          ))}
        </div>
      </Section>

      {/* ------------------------------------------------- Partner funding routes */}
      <Section tone="ivory">
        <SectionHeader
          eyebrow={t.routes.eyebrow}
          title={t.routes.title}
          lead={t.routes.lead}
        />
        <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {t.routes.items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-2xl border border-line bg-white p-4 text-sm font-medium text-plum/90 shadow-soft"
            >
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-plum/5 text-plum">
                <Icon name="coins" size={13} />
              </span>
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-8 flex max-w-3xl items-start gap-2.5 rounded-2xl border border-coral/30 bg-coral/5 p-4 text-sm leading-relaxed text-plum/80">
          <Icon name="shield" size={17} className="mt-0.5 shrink-0 text-coral" />
          {t.routes.note}
        </p>
      </Section>

      {/* ------------------------------------ Where GovDecision helps before/after */}
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
                    className="flex items-start gap-3 text-sm leading-relaxed text-plum/90"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-coral/10 text-coral">
                      <Icon name="check" size={12} />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      {/* --------------------------------------- Sample finance-readiness mockup */}
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
            nextStepLabel={t.mockup.nextStepLabel}
            nextStepValue={t.mockup.nextStepValue}
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
