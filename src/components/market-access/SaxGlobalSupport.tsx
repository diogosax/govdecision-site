import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon } from "@/components/ui/Icon";
import {
  saxGlobalCopy,
  saxGlobalDisclaimer,
  saxGlobalServices,
} from "@/data/market-access";

/**
 * Plum authority section: how Sax Global supports a path beyond the software.
 * Copy is deliberately non-committal — guidance and context, never guarantees.
 */
export function SaxGlobalSupport() {
  return (
    <section className="bg-plum py-20 text-white sm:py-28">
      <div className="bg-grid-light">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow tone="light">Where Sax Global enters</Eyebrow>
            <h2 className="mt-5 text-balance text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl">
              Sax Global supports the path beyond the software.
            </h2>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-white/70">
              {saxGlobalCopy}
            </p>
            <div className="mt-8">
              <Button href="/contact" variant="light" withArrow>
                Talk to Sax Global
              </Button>
            </div>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {saxGlobalServices.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <Icon name={service.icon} size={22} className="text-coral-200" />
                <h3 className="mt-3 font-bold text-white">{service.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/60">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-10 max-w-3xl text-xs leading-relaxed text-white/45">
            {saxGlobalDisclaimer}
          </p>
        </Container>
      </div>
    </section>
  );
}
