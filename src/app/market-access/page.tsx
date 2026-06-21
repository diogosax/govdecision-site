import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { Section, SectionHeader } from "@/components/ui/Section";
import { CtaBand } from "@/components/marketing/CtaBand";
import { MarketAccessHero } from "@/components/market-access/MarketAccessHero";
import { PathSelector } from "@/components/market-access/PathSelector";
import { PathCard } from "@/components/market-access/PathCard";
import { PathJourney } from "@/components/market-access/PathJourney";
import { SaxGlobalSupport } from "@/components/market-access/SaxGlobalSupport";
import { marketAccessPaths, pathModes, pathTypeIcon } from "@/data/market-access";

export const metadata: Metadata = {
  // Absolute title so the exact approved string is emitted, bypassing the
  // site-wide "%s · GovDecision" template.
  title: { absolute: "Market Access Paths — GovDecision" },
  description:
    "Choose where your company is based and where you want to sell to governments. GovDecision helps suppliers understand local and cross-border market access paths with better readiness and decisions.",
  alternates: { canonical: "/market-access" },
  openGraph: {
    title: "GovDecision Market Access Paths",
    description:
      "Explore local and cross-border government business paths with GovDecision and Sax Global support.",
    url: "/market-access",
  },
  twitter: {
    title: "GovDecision Market Access Paths",
    description:
      "Explore local and cross-border government business paths with GovDecision and Sax Global support.",
  },
};

export default function MarketAccessPage() {
  return (
    <>
      <MarketAccessHero />

      {/* --------------------------------------------- Local vs cross-border */}
      <Section tone="white">
        <SectionHeader
          eyebrow="Two paths"
          title="Two ways to enter government business."
          lead="Every supplier starts in one of two places: selling at home, or reaching across a border. GovDecision structures both — and Sax Global helps where the journey leaves the software."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {pathModes.map((mode) => (
            <article
              key={mode.key}
              className="flex flex-col rounded-3xl border border-line bg-white p-7 shadow-soft sm:p-8"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-plum/5 text-plum">
                  <Icon name={pathTypeIcon[mode.type]} size={22} />
                </span>
                <h3 className="text-xl font-bold text-plum">{mode.label}</h3>
              </div>

              <p className="mt-4 leading-relaxed text-slate">{mode.copy}</p>

              <p className="mt-6 text-[0.65rem] font-semibold uppercase tracking-wide text-slate">
                Examples
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
                {mode.helpsLabel}
              </p>
              <ul className="mt-3 space-y-2">
                {mode.helps.map((help) => (
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
          ))}
        </div>
      </Section>

      {/* ----------------------------------------------------- Path selector */}
      <Section tone="ivory">
        <SectionHeader
          eyebrow="Path finder"
          title="Choose your path."
          lead="Pick where your company is based and where you want to sell. We will show the path type, what it usually requires, and the right first step."
        />
        <div className="mt-12">
          <PathSelector />
        </div>
      </Section>

      {/* --------------------------------------------------- Path cards grid */}
      <Section tone="surface" id="paths">
        <SectionHeader
          eyebrow="Market access paths"
          title="Paths we are building."
          lead="A growing set of local and cross-border paths. Start any of them with a readiness conversation today — detailed path pages are on the way."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {marketAccessPaths.map((path) => (
            <PathCard key={path.slug} path={path} />
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
            <span>
              Looking for the full market map? Explore every corridor GovDecision
              focuses on today.
            </span>
          </p>
          <Link
            href="/corridors"
            className="shrink-0 text-sm font-semibold text-coral-600 transition-colors hover:text-coral"
          >
            View corridors &rsaquo;
          </Link>
        </div>
      </Section>

      {/* ------------------------------------------------ Where GovDecision enters */}
      <Section tone="white">
        <SectionHeader
          eyebrow="Where GovDecision enters"
          title="GovDecision turns market interest into a decision-ready path."
          lead="Six steps move a supplier from raw market interest to a decision they can defend — pursue now, or prepare first."
        />
        <div className="mt-12">
          <PathJourney />
        </div>
      </Section>

      {/* ------------------------------------------------- Where Sax Global enters */}
      <SaxGlobalSupport />

      {/* ----------------------------------------------------------- Final CTA */}
      <CtaBand
        eyebrow="Start the path"
        title="Start with the path. Then build the readiness."
        subtitle="Tell us where your company is based and where you want to sell. We will help you understand the first step."
        primary={{ label: "Start readiness", href: "/contact" }}
        secondary={{ label: "Talk to Sax Global", href: "/contact" }}
      />
    </>
  );
}
