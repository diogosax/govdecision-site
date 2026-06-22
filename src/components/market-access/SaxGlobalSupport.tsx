import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon } from "@/components/ui/Icon";
import { saxGlobalServices } from "@/data/market-access";

export type SaxSupportCopy = {
  eyebrow: string;
  title: string;
  lead: string;
  cta: string;
  disclaimer: string;
  services: { title: string; description: string }[];
};

/**
 * Plum authority section: how Sax Global supports a path beyond the software.
 * Copy is localized; service icons come from the data file. Deliberately
 * non-committal — guidance and context, never guarantees.
 */
export function SaxGlobalSupport({
  t,
  ctaHref,
}: {
  t: SaxSupportCopy;
  ctaHref: string;
}) {
  return (
    <section className="bg-plum py-20 text-white sm:py-28">
      <div className="bg-grid-light">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow tone="light">{t.eyebrow}</Eyebrow>
            <h2 className="mt-5 text-balance text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl">
              {t.title}
            </h2>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-white/70">
              {t.lead}
            </p>
            <div className="mt-8">
              <Button href={ctaHref} variant="light" withArrow>
                {t.cta}
              </Button>
            </div>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.services.map((service, i) => (
              <div
                key={service.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <Icon
                  name={saxGlobalServices[i].icon}
                  size={22}
                  className="text-coral-200"
                />
                <h3 className="mt-3 font-bold text-white">{service.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/60">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-10 max-w-3xl text-xs leading-relaxed text-white/45">
            {t.disclaimer}
          </p>
        </Container>
      </div>
    </section>
  );
}
