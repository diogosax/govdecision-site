import type { Metadata } from "next";
import type { ReactNode } from "react";
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
import { platformIntro, platformModules } from "@/data/platform";
import { secondaryCta } from "@/data/navigation";

export const metadata: Metadata = {
  title: "Platform",
  description:
    "The decision layer for government sales: Supplier Passport, Opportunity Qualification, Readiness Workspace, Country Packs, Deal Room, and Post-Award Enablement.",
};

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

export default function PlatformPage() {
  return (
    <>
      <PageHero
        eyebrow={platformIntro.eyebrow}
        title={platformIntro.title}
        lead={platformIntro.description}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="/contact" size="lg" withArrow>
            Start readiness
          </Button>
          <Button href={secondaryCta.href} variant="ghost" size="lg">
            View corridors
          </Button>
        </div>
      </PageHero>

      {/* Module overview */}
      <Section tone="ivory">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {platformModules.map((m) => (
            <a
              key={m.id}
              href={`#${m.id}`}
              className="group flex items-start gap-3 rounded-2xl border border-line bg-white p-4 transition-colors hover:border-coral/40"
            >
              <span className="font-mono text-xs font-bold text-coral">
                {m.step}
              </span>
              <div>
                <p className="text-sm font-bold text-plum">{m.name}</p>
                <p className="mt-0.5 text-xs text-slate">{m.tagline}</p>
              </div>
            </a>
          ))}
        </div>
      </Section>

      {/* Module detail rows */}
      <div className="bg-white">
        {platformModules.map((m, i) => {
          const flip = i % 2 === 1;
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
                        Module {m.step}
                      </span>
                    </div>
                    <h2 className="mt-4 text-balance text-3xl font-bold leading-tight tracking-tight text-plum">
                      {m.name}
                    </h2>
                    <p className="mt-2 text-lg font-semibold text-plum/80">
                      {m.tagline}
                    </p>
                    <p className="mt-4 text-pretty leading-relaxed text-slate">
                      {m.description}
                    </p>
                    <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                      {m.points.map((p) => (
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
        title="See the decision layer on your own opportunities."
        subtitle="Start with readiness, then qualify real opportunities with method — across every corridor you target."
        secondary={{ label: "View pricing", href: "/pricing" }}
      />
    </>
  );
}
