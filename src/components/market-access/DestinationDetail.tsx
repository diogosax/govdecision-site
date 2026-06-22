import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { Section, SectionHeader } from "@/components/ui/Section";
import { CtaBand } from "@/components/marketing/CtaBand";
import { localePath } from "@/i18n/routing";
import type { DestinationView } from "@/i18n/destinations";
import { DestinationHero } from "./DestinationHero";
import { MarketSnapshot } from "./MarketSnapshot";
import { ReadinessChecklist } from "./ReadinessChecklist";
import { CommonBlockers } from "./CommonBlockers";
import { GovDecisionCritical } from "./GovDecisionCritical";
import { SaxGlobalReports } from "./SaxGlobalReports";

/**
 * The full destination briefing, composed from the localized `view`. Rendered
 * by both the EN-US (`(site)`) and localized (`[locale]`) destination routes,
 * so the layout stays identical across locales while copy/labels/links follow
 * the active locale. Analytics keep stable identifiers (canonical EN labels,
 * locale-less page path) while the visible CTA text is localized.
 */
export function DestinationDetail({ view }: { view: DestinationView }) {
  const { d, copy, chrome, locale } = view;
  const page = `/market-access/${d.slug}`;
  const primaryHref = localePath(locale, d.cta.primary.href);
  const secondaryHref = localePath(locale, d.cta.secondary.href);
  const secondaryIsExternal = /^https?:\/\//.test(d.cta.secondary.href);

  return (
    <>
      <DestinationHero view={view} />

      <MarketSnapshot view={view} />

      {/* Why this market matters */}
      <Section tone="ivory">
        <SectionHeader
          eyebrow={chrome.whyEyebrow}
          title={chrome.whyTitle.replace("{market}", copy.targetLabel)}
          lead={copy.marketOverview}
        />
        <ul className="mt-10 grid gap-4 md:grid-cols-3">
          {copy.whyItMatters.map((point) => (
            <li
              key={point}
              className="rounded-3xl border border-line bg-white p-6 shadow-soft"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-coral/10 text-coral">
                <Icon name="spark" size={18} />
              </span>
              <p className="mt-4 text-sm leading-relaxed text-plum/90">{point}</p>
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <Link
            href={localePath(locale, "/market-access")}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-coral-600 transition-colors hover:text-coral"
          >
            <Icon name="arrow-right" size={15} className="rotate-180" />
            {chrome.allPaths}
          </Link>
        </div>
      </Section>

      <ReadinessChecklist view={view} />

      <CommonBlockers view={view} />

      <GovDecisionCritical view={view} />

      <SaxGlobalReports view={view} />

      {/* Contextual CTA */}
      <CtaBand
        eyebrow={copy.cta.eyebrow}
        title={copy.cta.title}
        subtitle={copy.cta.subtitle}
        primary={{
          label: copy.cta.primaryLabel,
          href: primaryHref,
          event: "destination_cta_clicked",
          eventProps: {
            locale,
            page,
            section: "final_cta",
            path: d.slug,
            pathType: d.pathType,
            originCountry: d.originCountry,
            targetMarket: d.targetMarket,
            cta: d.cta.primary.label,
            href: primaryHref,
          },
        }}
        secondary={{
          label: copy.cta.secondaryLabel,
          href: secondaryHref,
          // The "Open GovDecision app" secondary is the external login link.
          event: secondaryIsExternal ? "app_login_clicked" : "destination_cta_clicked",
          eventProps: {
            locale,
            page,
            section: "final_cta",
            path: d.slug,
            pathType: d.pathType,
            cta: d.cta.secondary.label,
            href: secondaryHref,
          },
        }}
      />
    </>
  );
}
