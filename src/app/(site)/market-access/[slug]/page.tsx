import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Icon } from "@/components/ui/Icon";
import { Section, SectionHeader } from "@/components/ui/Section";
import { CtaBand } from "@/components/marketing/CtaBand";
import { DestinationHero } from "@/components/market-access/DestinationHero";
import { MarketSnapshot } from "@/components/market-access/MarketSnapshot";
import { ReadinessChecklist } from "@/components/market-access/ReadinessChecklist";
import { CommonBlockers } from "@/components/market-access/CommonBlockers";
import { GovDecisionCritical } from "@/components/market-access/GovDecisionCritical";
import { SaxGlobalReports } from "@/components/market-access/SaxGlobalReports";
import { destinationSlugs, getDestination } from "@/data/destinations";

type Params = { slug: string };

/** Only the implemented destination slugs are valid; everything else 404s. */
export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return destinationSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const d = getDestination(slug);
  if (!d) return {};

  const url = `/market-access/${d.slug}`;
  return {
    // Absolute title so the exact SEO string is emitted verbatim.
    title: { absolute: d.metaTitle },
    description: d.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: d.metaTitle,
      description: d.metaDescription,
      url,
    },
    twitter: {
      title: d.metaTitle,
      description: d.metaDescription,
    },
  };
}

export default async function DestinationDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const d = getDestination(slug);
  if (!d) notFound();

  return (
    <>
      <DestinationHero d={d} />

      <MarketSnapshot d={d} />

      {/* Why this market matters */}
      <Section tone="ivory">
        <SectionHeader
          eyebrow="Why this market matters"
          title={`Why ${d.targetMarket} matters.`}
          lead={d.marketOverview}
        />
        <ul className="mt-10 grid gap-4 md:grid-cols-3">
          {d.whyItMatters.map((point) => (
            <li
              key={point}
              className="rounded-3xl border border-line bg-white p-6 shadow-soft"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-coral/10 text-coral">
                <Icon name="spark" size={18} />
              </span>
              <p className="mt-4 text-sm leading-relaxed text-plum/90">
                {point}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <Link
            href="/market-access"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-coral-600 transition-colors hover:text-coral"
          >
            <Icon name="arrow-right" size={15} className="rotate-180" />
            All market access paths
          </Link>
        </div>
      </Section>

      <ReadinessChecklist d={d} />

      <CommonBlockers d={d} />

      <GovDecisionCritical d={d} />

      <SaxGlobalReports d={d} />

      {/* Contextual CTA */}
      <CtaBand
        eyebrow={d.cta.eyebrow}
        title={d.cta.title}
        subtitle={d.cta.subtitle}
        primary={{
          ...d.cta.primary,
          event: "destination_cta_clicked",
          eventProps: {
            locale: "en-US",
            page: `/market-access/${d.slug}`,
            section: "final_cta",
            path: d.slug,
            pathType: d.pathType,
            originCountry: d.originCountry,
            targetMarket: d.targetMarket,
            cta: d.cta.primary.label,
            href: d.cta.primary.href,
          },
        }}
        secondary={{
          ...d.cta.secondary,
          // The "Open GovDecision app" secondary is the external login link.
          event: /^https?:\/\//.test(d.cta.secondary.href)
            ? "app_login_clicked"
            : "destination_cta_clicked",
          eventProps: {
            locale: "en-US",
            page: `/market-access/${d.slug}`,
            section: "final_cta",
            path: d.slug,
            pathType: d.pathType,
            cta: d.cta.secondary.label,
            href: d.cta.secondary.href,
          },
        }}
      />
    </>
  );
}
