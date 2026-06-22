import { TrackedButton } from "@/components/analytics/TrackedButton";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon } from "@/components/ui/Icon";

/**
 * Reusable Opportunity Briefs cross-link, used on Home and Market Access to
 * surface the briefs section prominently (the briefs entry lives in the footer
 * nav rather than the primary header, so these promos carry discoverability).
 * Copy is the shared `common.briefsPromo`; the CTA is tracked.
 */
export function BriefsPromo({
  locale,
  page,
  href,
  t,
}: {
  locale: string;
  /** Locale-less page path for analytics (e.g. "/" or "/market-access"). */
  page: string;
  href: string;
  t: { eyebrow: string; title: string; lead: string; cta: string };
}) {
  return (
    <section className="bg-ivory py-12 sm:py-16">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] border border-line bg-white p-7 shadow-soft sm:p-10">
          <div
            aria-hidden
            className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(229,106,58,0.12),transparent_70%)]"
          />
          <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <Eyebrow>{t.eyebrow}</Eyebrow>
              <h2 className="mt-4 text-balance text-2xl font-bold leading-tight tracking-tight text-plum sm:text-3xl">
                {t.title}
              </h2>
              <p className="mt-3 text-pretty leading-relaxed text-slate">{t.lead}</p>
            </div>
            <div className="shrink-0">
              <TrackedButton
                href={href}
                size="lg"
                withArrow
                event="cta_clicked"
                eventProps={{
                  locale,
                  page,
                  section: "briefs_promo",
                  cta: "explore_opportunity_briefs",
                  href,
                }}
              >
                <Icon name="memo" size={18} />
                {t.cta}
              </TrackedButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
