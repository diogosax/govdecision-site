import { TrackedButton } from "@/components/analytics/TrackedButton";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon } from "@/components/ui/Icon";
import type { PartnerCapitalPromoCopy } from "@/i18n/partner-capital";

/**
 * Reusable Partner Network + GovDecision Capital cross-link (SITE-015). Used on
 * Market Access and Opportunity Briefs to surface the two pages — which live in
 * the footer rather than the primary header — so they stay discoverable. Two
 * cards, each with its own tracked `cta_clicked` event (no PII, locale-less
 * page path for stable analytics).
 */
export function PartnerCapitalPromo({
  locale,
  page,
  partnerHref,
  capitalHref,
  t,
}: {
  locale: string;
  /** Locale-less page path for analytics (e.g. "/market-access"). */
  page: string;
  partnerHref: string;
  capitalHref: string;
  t: PartnerCapitalPromoCopy;
}) {
  const cards = [
    {
      key: "partner",
      icon: "route" as const,
      title: t.partner.title,
      lead: t.partner.lead,
      cta: t.partner.cta,
      href: partnerHref,
      ctaToken: "explore_partner_routes",
    },
    {
      key: "capital",
      icon: "coins" as const,
      title: t.capital.title,
      lead: t.capital.lead,
      cta: t.capital.cta,
      href: capitalHref,
      ctaToken: "explore_capital_readiness",
    },
  ];

  return (
    <section className="bg-ivory py-12 sm:py-16">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] border border-line bg-white p-7 shadow-soft sm:p-10">
          <div
            aria-hidden
            className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(229,106,58,0.12),transparent_70%)]"
          />
          <div className="relative max-w-2xl">
            <Eyebrow>{t.eyebrow}</Eyebrow>
            <h2 className="mt-4 text-balance text-2xl font-bold leading-tight tracking-tight text-plum sm:text-3xl">
              {t.title}
            </h2>
            <p className="mt-3 text-pretty leading-relaxed text-slate">{t.lead}</p>
          </div>

          <div className="relative mt-8 grid gap-5 sm:grid-cols-2">
            {cards.map((c) => (
              <article
                key={c.key}
                className="flex flex-col rounded-3xl border border-line bg-surface/40 p-6 sm:p-7"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-plum/5 text-plum">
                  <Icon name={c.icon} size={22} />
                </span>
                <h3 className="mt-4 text-lg font-bold text-plum">{c.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate">
                  {c.lead}
                </p>
                <div className="mt-5">
                  <TrackedButton
                    href={c.href}
                    variant="ghost"
                    withArrow
                    event="cta_clicked"
                    eventProps={{
                      locale,
                      page,
                      section: "partner_capital_promo",
                      cta: c.ctaToken,
                      href: c.href,
                    }}
                  >
                    {c.cta}
                  </TrackedButton>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
