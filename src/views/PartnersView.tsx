import type { Locale } from "@/i18n/config";
import { localePath } from "@/i18n/routing";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Section, SectionHeader } from "@/components/ui/Section";
import { TrackedButton } from "@/components/analytics/TrackedButton";
import { PageHero } from "@/components/marketing/PageHero";
import { CtaBand } from "@/components/marketing/CtaBand";
import { BriefMockup } from "@/components/partner-capital/BriefMockup";
import { BreadcrumbJsonLd, WebPageJsonLd } from "@/components/seo/JsonLd";
import { getPartnerCapital } from "@/i18n/partner-capital";

/** Icons for the five route options (order matches partners.routes.options). */
const routeIcons: IconName[] = ["target", "compass", "layers", "route", "shield"];

/**
 * GovDecision Partner Network (SITE-015). Rendered by both the EN-US (`(site)`)
 * and localized (`[locale]`) routes, so the layout is identical while copy and
 * link targets follow the active locale. The hero "Talk to Sax Global" CTA
 * carries the cross-border partner-network contact context
 * (`?path=partner-network&type=cross-border`).
 */
export function PartnersView({ locale }: { locale: Locale }) {
  const t = getPartnerCapital(locale).partners;
  const lp = (href: string) => localePath(locale, href);
  const contactHref = lp("/contact?path=partner-network&type=cross-border");
  const marketAccessHref = lp("/market-access");
  const page = "/partners";

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
      </PageHero>

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

      {/* --------------------------------------------------------- Route options */}
      <Section tone="ivory">
        <SectionHeader
          eyebrow={t.routes.eyebrow}
          title={t.routes.title}
          lead={t.routes.lead}
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.routes.options.map((opt, i) => (
            <article
              key={opt.title}
              className="flex flex-col rounded-3xl border border-line bg-white p-6 shadow-soft sm:p-7"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-plum/5 text-plum">
                  <Icon name={routeIcons[i] ?? "route"} size={22} />
                </span>
                <h3 className="text-lg font-bold text-plum">{opt.title}</h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate">
                {opt.description}
              </p>
            </article>
          ))}
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
                <Eyebrow tone="light">{t.sax.eyebrow}</Eyebrow>
                <h2 className="mt-5 text-balance text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl">
                  {t.sax.title}
                </h2>
                <p className="mt-6 text-pretty text-lg leading-relaxed text-white/70">
                  {t.sax.lead}
                </p>
              </div>
              <ul className="space-y-3">
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

      {/* ------------------------------------------- Sample partner route mockup */}
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
