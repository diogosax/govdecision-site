import type { ReactNode } from "react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/types";
import { localePath } from "@/i18n/routing";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";
import { PageHero } from "@/components/marketing/PageHero";
import { CtaBand } from "@/components/marketing/CtaBand";
import { Button } from "@/components/ui/Button";
import { WindowFrame } from "@/components/marketing/MockupKit";
import { DecisionCard } from "@/components/marketing/DecisionCard";
import {
  SupplierPassportMockup,
  ReadinessWorkspaceMockup,
  CountryPackMockup,
  DealRoomMockup,
  PostAwardMockup,
} from "@/components/marketing/ProductMockups";
import { platformModules } from "@/data/platform";

const mockups: Record<string, ReactNode> = {
  "supplier-passport": <SupplierPassportMockup />,
  "opportunity-qualification": (
    <WindowFrame title="govdecision · Opportunity Qualification" badge="Sample">
      <DecisionCard />
    </WindowFrame>
  ),
  "readiness-workspace": <ReadinessWorkspaceMockup />,
  "country-packs": <CountryPackMockup />,
  "deal-room": <DealRoomMockup />,
  "post-award": <PostAwardMockup />,
};

export function PlatformView({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const lp = (href: string) => localePath(locale, href);
  const t = dict.platform;

  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={t.title} lead={t.lead}>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href={lp("/contact")} size="lg" withArrow>
            {dict.common.cta.startReadiness}
          </Button>
          <Button href={lp("/corridors")} variant="ghost" size="lg">
            {dict.common.cta.viewCorridors}
          </Button>
        </div>
      </PageHero>

      {/* Module overview */}
      <Section tone="ivory">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {platformModules.map((m, i) => (
            <a
              key={m.id}
              href={`#${m.id}`}
              className="group flex items-start gap-3 rounded-2xl border border-line bg-white p-4 transition-colors hover:border-coral/40"
            >
              <span className="font-mono text-xs font-bold text-coral">
                {m.step}
              </span>
              <div>
                <p className="text-sm font-bold text-plum">
                  {t.modules[i].name}
                </p>
                <p className="mt-0.5 text-xs text-slate">{t.modules[i].tagline}</p>
              </div>
            </a>
          ))}
        </div>
      </Section>

      {/* Module detail rows */}
      <div className="bg-white">
        {platformModules.map((m, i) => {
          const flip = i % 2 === 1;
          const mod = t.modules[i];
          return (
            <section
              key={m.id}
              id={m.id}
              className="scroll-mt-24 border-t border-line first:border-t-0"
            >
              <Container className="py-16 sm:py-20">
                <div className="grid items-center gap-12 lg:grid-cols-2">
                  <div className={flip ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-plum text-xs font-bold text-white">
                        {m.step}
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-[0.16em] text-coral">
                        {t.moduleLabel} {m.step}
                      </span>
                    </div>
                    <h2 className="mt-4 text-balance text-3xl font-bold leading-tight tracking-tight text-plum">
                      {mod.name}
                    </h2>
                    <p className="mt-2 text-lg font-semibold text-plum/80">
                      {mod.tagline}
                    </p>
                    <p className="mt-4 text-pretty leading-relaxed text-slate">
                      {mod.description}
                    </p>
                    <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                      {mod.points.map((p) => (
                        <li
                          key={p}
                          className="flex items-start gap-2.5 text-sm text-plum/85"
                        >
                          <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-coral/10 text-coral">
                            <Icon name="check" size={11} />
                          </span>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={flip ? "lg:order-1" : ""}>{mockups[m.id]}</div>
                </div>
              </Container>
            </section>
          );
        })}
      </div>

      <CtaBand
        eyebrow={dict.common.footer.getStartedHeading}
        title={t.finalCta.title}
        subtitle={t.finalCta.subtitle}
        primary={{ label: dict.common.cta.startReadiness, href: lp("/contact") }}
        secondary={{ label: t.finalCta.secondaryLabel, href: lp("/pricing") }}
      />
    </>
  );
}
