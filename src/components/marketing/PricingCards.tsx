import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { pricingPlans } from "@/data/pricing";
import { primaryCta } from "@/data/navigation";

export function PricingCards() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {pricingPlans.map((plan) => {
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
                Service-led
              </span>
            )}

            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-plum">{plan.name}</h3>
                <p className="mt-1 text-sm font-medium text-slate">
                  {plan.market}
                </p>
              </div>
              {plan.badge && (
                <span className="rounded-full bg-plum/5 px-3 py-1 text-xs font-semibold text-plum/70">
                  {plan.badge}
                </span>
              )}
            </div>

            <p className="mt-4 text-sm leading-relaxed text-slate">
              {plan.description}
            </p>

            {/* Price block (placeholders, edited in data/pricing.ts) */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-surface/70 p-4">
                <p className="text-[0.65rem] font-semibold uppercase tracking-wide text-slate">
                  Brazil · BRL
                </p>
                <p className="mt-1 text-sm font-bold text-plum">
                  {plan.priceBrazil}
                </p>
              </div>
              <div className="rounded-2xl bg-surface/70 p-4">
                <p className="text-[0.65rem] font-semibold uppercase tracking-wide text-slate">
                  International · USD
                </p>
                <p className="mt-1 text-sm font-bold text-plum">
                  {plan.priceInternational}
                </p>
              </div>
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
              <Button
                href={primaryCta.href}
                variant={featured ? "primary" : "secondary"}
                size="lg"
                withArrow
                className="w-full"
              >
                {plan.cta}
              </Button>
            </div>
          </article>
        );
      })}
    </div>
  );
}
