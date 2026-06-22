import { TrackedButton } from "@/components/analytics/TrackedButton";
import { Icon } from "@/components/ui/Icon";

export type PricingCardPlan = {
  name: string;
  highlighted?: boolean;
  ctaHref: string;
  market: string;
  badge: string;
  description: string;
  features: string[];
  cta: string;
  priceBrazil: string;
  priceInternational: string;
  noteBrazil: string;
  noteInternational: string;
};

/**
 * Price block. Splits a value on " / " so a live figure renders as a prominent
 * amount with a quiet cadence ("R$ 379,00" + "/ month"), while a consultative
 * phrase ("Consult us", "Custom USD pricing") renders cleanly as a single line.
 */
function Price({
  label,
  value,
  note,
}: {
  label: string;
  value: string;
  note?: string;
}) {
  const [amount, cadence] = value.split(" / ");
  // A live figure leads with " / cadence" and reads big; a consultative phrase
  // ("Consult us", "Custom USD pricing") sits a step smaller so it stays tidy.
  return (
    <div className="rounded-2xl bg-surface/70 p-4">
      <p className="text-[0.65rem] font-semibold uppercase tracking-wide text-slate">
        {label}
      </p>
      <p className="mt-1.5 leading-tight">
        <span
          className={`font-bold text-plum ${
            cadence ? "text-lg sm:text-xl" : "text-base"
          }`}
        >
          {amount}
        </span>
        {cadence && (
          <span className="text-xs font-medium text-slate"> / {cadence}</span>
        )}
      </p>
      {note && <p className="mt-2 text-[0.7rem] leading-snug text-slate">{note}</p>}
    </div>
  );
}

export function PricingCards({
  plans,
  locale,
  brazilLabel,
  internationalLabel,
  serviceLedBadge,
}: {
  plans: PricingCardPlan[];
  locale: string;
  brazilLabel: string;
  internationalLabel: string;
  serviceLedBadge: string;
}) {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {plans.map((plan) => {
        const featured = plan.highlighted;
        return (
          <article
            key={plan.name}
            className={`relative flex flex-col rounded-3xl border p-7 sm:p-8 ${
              featured
                ? "border-coral/40 bg-white shadow-card ring-1 ring-coral/30"
                : "border-line bg-white shadow-soft"
            }`}
          >
            {featured && (
              <span className="absolute -top-3 left-7 rounded-full bg-coral px-3 py-1 text-xs font-semibold text-white shadow-soft">
                {serviceLedBadge}
              </span>
            )}

            <div className="flex items-center justify-between gap-3">
              <div>
                <h3 className="text-xl font-bold text-plum">{plan.name}</h3>
                <p className="mt-1 text-sm font-medium text-slate">
                  {plan.market}
                </p>
              </div>
              {plan.badge && (
                <span className="shrink-0 rounded-full bg-plum/5 px-3 py-1 text-xs font-semibold text-plum/70">
                  {plan.badge}
                </span>
              )}
            </div>

            <p className="mt-4 text-sm leading-relaxed text-slate">
              {plan.description}
            </p>

            {/* Price block */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              <Price
                label={brazilLabel}
                value={plan.priceBrazil}
                note={plan.noteBrazil}
              />
              <Price
                label={internationalLabel}
                value={plan.priceInternational}
                note={plan.noteInternational}
              />
            </div>

            <ul className="mt-6 flex-1 space-y-2.5">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-sm">
                  <span
                    className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${
                      featured ? "bg-coral/15 text-coral-600" : "bg-plum/10 text-plum"
                    }`}
                  >
                    <Icon name="check" size={11} />
                  </span>
                  <span className="text-plum/85">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-7">
              <TrackedButton
                href={plan.ctaHref}
                variant={featured ? "primary" : "secondary"}
                size="lg"
                withArrow
                className="w-full"
                event="pricing_cta_clicked"
                eventProps={{
                  locale,
                  page: "/pricing",
                  // Coarse, non-PII classification: the service-led plan is
                  // custom-priced; the platform plan uses published pricing.
                  market: featured ? "Custom" : "International",
                  plan: plan.name,
                  cta: plan.cta,
                  href: plan.ctaHref,
                }}
              >
                {plan.cta}
              </TrackedButton>
            </div>
          </article>
        );
      })}
    </div>
  );
}
