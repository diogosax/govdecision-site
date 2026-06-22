import Link from "next/link";
import type { ReactNode } from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon } from "@/components/ui/Icon";
import { Section, SectionHeader } from "@/components/ui/Section";
import { CtaBand } from "@/components/marketing/CtaBand";
import { TrackedButton } from "@/components/analytics/TrackedButton";
import { localePath } from "@/i18n/routing";
import { briefContactHref, briefIsLocal } from "@/data/opportunity-briefs";
import type { BriefView } from "@/i18n/briefs";
import { BriefHero } from "./BriefHero";

/** A labeled snapshot row (value may be a link). */
function SnapshotRow({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="bg-white p-5">
      <dt className="text-[0.65rem] font-semibold uppercase tracking-wide text-slate">
        {label}
      </dt>
      <dd className="mt-1 text-sm font-semibold text-plum">{children}</dd>
    </div>
  );
}

/**
 * The full Opportunity Brief, composed from the localized `view`. Rendered by
 * both the EN-US and localized routes, so the layout stays identical while
 * copy/labels/links follow the active locale. Analytics keep stable identifiers
 * (canonical EN market/category, locale-less page path).
 */
export function BriefDetail({ view }: { view: BriefView }) {
  const { b, copy, chrome, locale } = view;
  const isLocal = briefIsLocal(b);
  const page = `/opportunity-briefs/${b.slug}`;
  const contactHref = localePath(locale, briefContactHref(b));
  const relatedHref = localePath(locale, b.relatedHref);
  const briefsHref = localePath(locale, "/opportunity-briefs");
  const hasSax = copy.saxGlobalAngle.length > 0;

  return (
    <>
      <BriefHero view={view} />

      {/* --------------------------------------------- Opportunity snapshot */}
      <Section tone="ivory">
        <SectionHeader
          eyebrow={chrome.snapshotEyebrow}
          title={chrome.snapshotTitle}
          lead={chrome.snapshotLead}
        />
        <dl className="mt-10 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          <SnapshotRow label={chrome.marketField}>{copy.marketLabel}</SnapshotRow>
          <SnapshotRow label={chrome.buyerField}>{copy.buyerType}</SnapshotRow>
          <SnapshotRow label={chrome.opportunityField}>
            {copy.opportunityType}
          </SnapshotRow>
          <SnapshotRow label={chrome.sourceField}>
            <a
              href={b.source.url}
              target="_blank"
              rel="noreferrer noopener"
              className="text-coral-600 underline-offset-2 hover:underline"
            >
              {b.source.name}
            </a>
          </SnapshotRow>
          <SnapshotRow label={chrome.currencyField}>
            {b.currency ?? chrome.notSpecified}
          </SnapshotRow>
          <SnapshotRow label={chrome.statusField}>
            {chrome.statusLabels[b.status]}
          </SnapshotRow>
          <SnapshotRow label={chrome.valueField}>
            <span className="text-slate">{b.value ?? chrome.notSpecified}</span>
          </SnapshotRow>
          <SnapshotRow label={chrome.deadlineField}>
            <span className="text-slate">{b.deadline ?? chrome.notSpecified}</span>
          </SnapshotRow>
          <SnapshotRow label={chrome.relatedField}>
            <Link
              href={relatedHref}
              className="text-coral-600 underline-offset-2 hover:underline"
            >
              {copy.relatedLabel}
            </Link>
          </SnapshotRow>
        </dl>
        <p className="mt-5 text-xs leading-relaxed text-slate">
          {chrome.availabilityNote}
        </p>
      </Section>

      {/* --------------------------------------------- Why suppliers may care */}
      <Section tone="white">
        <SectionHeader
          eyebrow={chrome.whyEyebrow}
          title={chrome.whyTitle}
          lead={chrome.whyLead}
        />
        <ul className="mt-10 grid gap-4 md:grid-cols-3">
          {copy.whySuppliersCare.map((point) => (
            <li
              key={point}
              className="rounded-3xl border border-line bg-surface/40 p-6"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-coral/10 text-coral">
                <Icon name="spark" size={18} />
              </span>
              <p className="mt-4 text-sm leading-relaxed text-plum/90">{point}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* --------------------------------- What usually makes this hard (anchor) */}
      <Section tone="ivory" id="analysis">
        <SectionHeader
          eyebrow={chrome.hardEyebrow}
          title={chrome.hardTitle}
          lead={chrome.hardLead}
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-line bg-white p-7 shadow-soft">
            <h3 className="flex items-center gap-2 text-base font-bold text-plum">
              <Icon name="checklist" size={18} className="text-plum/60" />
              {chrome.requirementsHeading}
            </h3>
            <ul className="mt-5 space-y-3">
              {copy.commonRequirements.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm leading-relaxed text-plum/85"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-plum/40" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-line bg-white p-7 shadow-soft">
            <h3 className="flex items-center gap-2 text-base font-bold text-plum">
              <Icon name="shield" size={18} className="text-coral" />
              {chrome.blockersHeading}
            </h3>
            <ul className="mt-5 space-y-3">
              {copy.commonBlockers.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm leading-relaxed text-plum/85"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* --------------------------------------- What GovDecision would analyze */}
      <Section tone="white">
        <SectionHeader
          eyebrow={chrome.govEyebrow}
          title={chrome.govTitle}
          lead={chrome.govLead}
        />
        <ul className="mt-10 space-y-3">
          {copy.govDecisionAnalysis.map((role) => (
            <li
              key={role}
              className="flex items-start gap-3 text-sm leading-relaxed text-plum/90"
            >
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-coral/10 text-coral">
                <Icon name="check" size={12} />
              </span>
              {role}
            </li>
          ))}
        </ul>
        <p className="mt-8 rounded-2xl border border-line bg-surface/50 p-5 text-sm leading-relaxed text-slate">
          {chrome.aiAssistNote}
        </p>
      </Section>

      {/* ------------------------------------------ Where Sax Global may matter */}
      {hasSax && (
        <Section tone="ivory">
          <SectionHeader
            eyebrow={chrome.saxEyebrow}
            title={chrome.saxTitle}
            lead={chrome.saxLead}
          />
          <ul className="mt-10 grid gap-4 md:grid-cols-3">
            {copy.saxGlobalAngle.map((point) => (
              <li
                key={point}
                className="rounded-3xl border border-line bg-white p-6 shadow-soft"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-plum/5 text-plum">
                  <Icon name="compass" size={18} />
                </span>
                <p className="mt-4 text-sm leading-relaxed text-plum/90">{point}</p>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs leading-relaxed text-slate">
            {chrome.saxDisclaimer}
          </p>
        </Section>
      )}

      {/* ------------------------------------------------- Readiness questions */}
      <Section tone="white">
        <SectionHeader
          eyebrow={chrome.readinessEyebrow}
          title={chrome.readinessTitle}
          lead={chrome.readinessLead}
        />
        <ul className="mt-10 grid gap-3 sm:grid-cols-2">
          {copy.readinessQuestions.map((q, i) => (
            <li
              key={q}
              className="flex items-start gap-3 rounded-2xl border border-line bg-surface/40 p-5"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-plum text-xs font-bold text-white">
                {i + 1}
              </span>
              <p className="text-sm leading-relaxed text-plum/90">{q}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* ------------------------------------------ Related Market Access path */}
      <Section tone="ivory">
        <div className="flex flex-col items-start gap-6 rounded-[2rem] border border-line bg-white p-7 shadow-soft sm:p-9 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <Eyebrow>{chrome.relatedEyebrow}</Eyebrow>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-plum">
              {chrome.relatedTitle}
            </h2>
            <p className="mt-3 leading-relaxed text-slate">{chrome.relatedLead}</p>
            <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-plum/5 px-3 py-1.5 text-sm font-semibold text-plum">
              <Icon name="route" size={15} className="text-coral" />
              {copy.relatedLabel}
            </p>
          </div>
          <div className="shrink-0">
            <TrackedButton
              href={relatedHref}
              variant="ghost"
              size="lg"
              withArrow
              event="opportunity_brief_cta_clicked"
              eventProps={{
                locale,
                page,
                section: "related_path",
                slug: b.slug,
                market: b.market,
                pathType: b.pathType,
                relatedPath: b.relatedHref,
                cta: "related_market_access",
                href: relatedHref,
              }}
            >
              {chrome.viewRelated}
            </TrackedButton>
          </div>
        </div>
      </Section>

      {/* ------------------------------------------------- Source & disclaimer */}
      <Section tone="white">
        <SectionHeader
          eyebrow={chrome.sourceEyebrow}
          title={chrome.sourceTitle}
          lead={chrome.sourceLead}
        />
        <div className="mt-10 rounded-3xl border border-line bg-surface/40 p-7">
          <p className="text-[0.65rem] font-semibold uppercase tracking-wide text-slate">
            {chrome.publicSourceLabel}
          </p>
          <a
            href={b.source.url}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-1.5 inline-flex items-start gap-2 text-sm font-semibold text-coral-600 underline-offset-2 hover:underline"
          >
            <Icon name="globe" size={15} className="mt-0.5 shrink-0" />
            {b.source.name}
          </a>

          {b.references && b.references.length > 0 && (
            <div className="mt-6">
              <p className="text-[0.65rem] font-semibold uppercase tracking-wide text-slate">
                {chrome.additionalRefsLabel}
              </p>
              <ul className="mt-2 space-y-1.5">
                {b.references.map((ref) => (
                  <li key={ref.url}>
                    <a
                      href={ref.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-start gap-2 text-sm text-plum/80 underline-offset-2 hover:text-plum hover:underline"
                    >
                      <Icon name="arrow-right" size={14} className="mt-0.5 shrink-0 text-plum/40" />
                      {ref.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <p className="mt-6 border-t border-line/70 pt-5 text-xs leading-relaxed text-slate">
            <span className="font-semibold text-plum/70">{chrome.disclaimerLabel}:</span>{" "}
            {chrome.disclaimer}
          </p>
          <p className="mt-3 text-xs leading-relaxed text-slate">
            {chrome.availabilityNote}
          </p>
        </div>
      </Section>

      {/* ----------------------------------------------------------- Final CTA */}
      <CtaBand
        eyebrow={chrome.ctaEyebrow}
        title={isLocal ? chrome.ctaTitleLocal : chrome.ctaTitleCross}
        subtitle={isLocal ? chrome.ctaSubtitleLocal : chrome.ctaSubtitleCross}
        primary={{
          label: isLocal ? chrome.ctaLocalLabel : chrome.ctaCrossLabel,
          href: contactHref,
          event: "opportunity_brief_cta_clicked",
          eventProps: {
            locale,
            page,
            section: "final_cta",
            slug: b.slug,
            market: b.market,
            opportunityType: b.opportunityType,
            pathType: b.pathType,
            relatedPath: b.relatedHref,
            cta: isLocal ? "start_readiness" : "talk_to_sax",
            href: contactHref,
          },
        }}
        secondary={{
          label: chrome.ctaSecondaryLabel,
          href: briefsHref,
          event: "opportunity_brief_cta_clicked",
          eventProps: {
            locale,
            page,
            section: "final_cta",
            slug: b.slug,
            market: b.market,
            pathType: b.pathType,
            cta: "explore_all_briefs",
            href: briefsHref,
          },
        }}
      />
    </>
  );
}
