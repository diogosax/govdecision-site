import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/types";
import { localePath } from "@/i18n/routing";
import { Icon } from "@/components/ui/Icon";
import { Section, SectionHeader } from "@/components/ui/Section";
import { PageHero } from "@/components/marketing/PageHero";
import {
  PricingCards,
  type PricingCardPlan,
} from "@/components/marketing/PricingCards";
import { ExperimentView } from "@/components/analytics/ExperimentView";
import { getExperimentVariant } from "@/lib/experiments/experiments";
import { CtaBand } from "@/components/marketing/CtaBand";
import { pricingPlans, pricingComparison } from "@/data/pricing";

function Cell({
  value,
  values,
}: {
  value: string | boolean;
  values: Record<string, string>;
}) {
  if (value === true) {
    return (
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-coral/10 text-coral-600">
        <Icon name="check" size={13} />
      </span>
    );
  }
  if (value === false) {
    return <span className="text-line">—</span>;
  }
  return (
    <span className="text-sm font-semibold text-plum">
      {values[value] ?? value}
    </span>
  );
}

export function PricingView({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const lp = (href: string) => localePath(locale, href);
  const t = dict.pricing;

  // Experiment 3 — Pricing Assisted CTA (pricingAssistedCta). Only the assisted
  // (highlighted) plan's CTA label changes; plan features and prices are untouched.
  const assistedCtaVariant = getExperimentVariant("pricingAssistedCta");
  const assistedCtaLabel = dict.experiments.pricingAssistedCta[assistedCtaVariant];

  const plans: PricingCardPlan[] = pricingPlans.map((plan, i) => ({
    name: plan.name,
    highlighted: plan.highlighted,
    ctaHref: lp(plan.ctaHref),
    ...t.plans[i],
    // The assisted plan's CTA copy is driven by the experiment variant.
    cta: plan.highlighted ? assistedCtaLabel : t.plans[i].cta,
  }));

  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={t.title} lead={t.lead} />

      {/* Plans */}
      <Section tone="ivory">
        <ExperimentView
          experiment="pricingAssistedCta"
          variant={assistedCtaVariant}
          locale={locale}
          page="/pricing"
        />
        <PricingCards
          plans={plans}
          locale={locale}
          brazilLabel={t.brazilLabel}
          internationalLabel={t.internationalLabel}
          serviceLedBadge={t.serviceLedBadge}
          assistedVariant={assistedCtaVariant}
        />
        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-slate">
          {t.note}
        </p>
      </Section>

      {/* Comparison */}
      <Section tone="white">
        <SectionHeader
          eyebrow={t.compare.eyebrow}
          title={t.compare.title}
          lead={t.compare.lead}
        />
        <div className="mt-10 overflow-hidden rounded-3xl border border-line">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="bg-surface/70 text-sm">
                <th className="px-5 py-4 font-semibold text-plum">
                  {t.compare.capability}
                </th>
                <th className="px-5 py-4 text-center font-semibold text-plum">
                  {pricingPlans[0].name}
                </th>
                <th className="px-5 py-4 text-center font-semibold text-plum">
                  <span className="inline-flex items-center gap-1.5">
                    {pricingPlans[1].name}
                    <span className="rounded-full bg-coral px-2 py-0.5 text-[0.6rem] font-bold uppercase text-white">
                      {t.compare.guided}
                    </span>
                  </span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line/70 bg-white">
              {pricingComparison.map((row, i) => (
                <tr key={row.capability} className="text-sm">
                  <td className="px-5 py-3.5 font-medium text-plum/90">
                    {t.compare.rows[i]}
                  </td>
                  <td className="px-5 py-3.5 text-center">
                    <Cell value={row.one} values={t.compare.values} />
                  </td>
                  <td className="px-5 py-3.5 text-center">
                    <Cell value={row.assisted} values={t.compare.values} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <CtaBand
        eyebrow={t.finalCta.eyebrow}
        title={t.finalCta.title}
        subtitle={t.finalCta.subtitle}
        primary={{
          label: t.finalCta.primary,
          href: lp("/contact"),
          event: "cta_clicked",
          eventProps: {
            locale,
            page: "/pricing",
            section: "final_cta",
            cta: "start_readiness",
            href: lp("/contact"),
          },
        }}
        secondary={{
          label: t.finalCta.secondary,
          href: lp("/platform"),
          event: "cta_clicked",
          eventProps: {
            locale,
            page: "/pricing",
            section: "final_cta",
            cta: "explore_platform",
            href: lp("/platform"),
          },
        }}
      />
    </>
  );
}
