import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/types";
import { localePath } from "@/i18n/routing";
import { Icon } from "@/components/ui/Icon";
import { Section, SectionHeader } from "@/components/ui/Section";
import { CtaBand } from "@/components/marketing/CtaBand";
import { BriefsPromo } from "@/components/briefs/BriefsPromo";
import { MarketAccessHero } from "@/components/market-access/MarketAccessHero";
import { PathSelector } from "@/components/market-access/PathSelector";
import { PathCard, type PathCardData } from "@/components/market-access/PathCard";
import { PathJourney } from "@/components/market-access/PathJourney";
import { SaxGlobalSupport } from "@/components/market-access/SaxGlobalSupport";
import { marketAccessPaths, pathModes, pathTypeIcon } from "@/data/market-access";

export function MarketAccessView({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const lp = (href: string) => localePath(locale, href);
  const t = dict.marketAccess;
  const contactHref = lp("/contact");

  const cards: PathCardData[] = marketAccessPaths.map((p) => {
    const c = t.paths.cards[p.slug];
    return {
      slug: p.slug,
      locale,
      pathType: p.pathType,
      pathTypeLabel: t.pathTypeLabels[p.pathType] ?? p.pathType,
      statusLabel: t.statusLabels[p.status] ?? p.status,
      originCountry: p.originCountry,
      targetMarket: p.targetMarket,
      title: c.title,
      summary: c.summary,
      focusAreas: c.focusAreas,
      ctaLabel: c.ctaLabel,
      ctaHref: p.ctaHref, // EN-US destination briefing (deep fallback)
    };
  });

  return (
    <>
      <MarketAccessHero t={t.hero} primaryHref={contactHref} />

      {/* --------------------------------------------- Local vs cross-border */}
      <Section tone="white">
        <SectionHeader
          eyebrow={t.twoPaths.eyebrow}
          title={t.twoPaths.title}
          lead={t.twoPaths.lead}
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {pathModes.map((mode, i) => {
            const m = t.twoPaths.modes[i];
            return (
              <article
                key={mode.key}
                className="flex flex-col rounded-3xl border border-line bg-white p-7 shadow-soft sm:p-8"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-plum/5 text-plum">
                    <Icon name={pathTypeIcon[mode.type]} size={22} />
                  </span>
                  <h3 className="text-xl font-bold text-plum">{m.label}</h3>
                </div>

                <p className="mt-4 leading-relaxed text-slate">{m.copy}</p>

                <p className="mt-6 text-[0.65rem] font-semibold uppercase tracking-wide text-slate">
                  {t.twoPaths.examplesLabel}
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {mode.examples.map((ex) => (
                    <li
                      key={`${ex.origin}-${ex.target}`}
                      className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface/60 px-2.5 py-1 text-xs font-medium text-plum"
                    >
                      {ex.origin}
                      <Icon name="arrow-right" size={12} className="text-coral" />
                      {ex.target}
                    </li>
                  ))}
                </ul>

                <p className="mt-6 text-[0.65rem] font-semibold uppercase tracking-wide text-slate">
                  {m.helpsLabel}
                </p>
                <ul className="mt-3 space-y-2">
                  {m.helps.map((help) => (
                    <li
                      key={help}
                      className="flex items-start gap-3 text-sm text-plum/85"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-coral/10 text-coral">
                        <Icon name="check" size={12} />
                      </span>
                      {help}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </Section>

      {/* ----------------------------------------------------- Path selector */}
      <Section tone="ivory">
        <SectionHeader
          eyebrow={t.finder.eyebrow}
          title={t.finder.title}
          lead={t.finder.lead}
        />
        <div className="mt-12">
          <PathSelector
            locale={locale}
            t={{ ...t.selector, pathTypeLabels: t.pathTypeLabels }}
            startReadinessHref={contactHref}
          />
        </div>
      </Section>

      {/* --------------------------------------------------- Path cards grid */}
      <Section tone="surface" id="paths">
        <SectionHeader
          eyebrow={t.paths.eyebrow}
          title={t.paths.title}
          lead={t.paths.lead}
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <PathCard key={card.ctaHref} path={card} />
          ))}
        </div>

        {/* Supporting link to the existing corridor map */}
        <div className="mt-10 flex flex-col items-start gap-3 rounded-2xl border border-line bg-white p-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-start gap-3 text-sm text-slate">
            <Icon
              name="globe"
              size={18}
              className="mt-0.5 shrink-0 text-plum/50"
            />
            <span>{t.paths.corridorPrompt}</span>
          </p>
          <Link
            href={lp("/corridors")}
            className="shrink-0 text-sm font-semibold text-coral-600 transition-colors hover:text-coral"
          >
            {t.paths.corridorLink} &rsaquo;
          </Link>
        </div>
      </Section>

      {/* ------------------------------------------- Opportunity Briefs promo */}
      <BriefsPromo
        locale={locale}
        page="/market-access"
        href={lp("/opportunity-briefs")}
        t={dict.common.briefsPromo}
      />

      {/* ------------------------------------------------ Where GovDecision enters */}
      <Section tone="white">
        <SectionHeader
          eyebrow={t.enters.eyebrow}
          title={t.enters.title}
          lead={t.enters.lead}
        />
        <div className="mt-12">
          <PathJourney steps={t.enters.journey} note={t.enters.note} />
        </div>
      </Section>

      {/* ------------------------------------------------- Where Sax Global enters */}
      <SaxGlobalSupport t={t.sax} ctaHref={contactHref} />

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
            page: "/market-access",
            section: "final_cta",
            cta: "start_readiness",
            href: contactHref,
          },
        }}
        secondary={{
          label: t.finalCta.secondary,
          href: contactHref,
          event: "cta_clicked",
          eventProps: {
            locale,
            page: "/market-access",
            section: "final_cta",
            cta: "talk_to_team",
            href: contactHref,
          },
        }}
      />
    </>
  );
}
