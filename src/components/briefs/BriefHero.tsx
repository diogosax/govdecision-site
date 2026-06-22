import { Button } from "@/components/ui/Button";
import { TrackedButton } from "@/components/analytics/TrackedButton";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon } from "@/components/ui/Icon";
import { FieldRow, Pill, WindowFrame } from "@/components/marketing/MockupKit";
import { localePath } from "@/i18n/routing";
import {
  briefContactHref,
  briefIsLocal,
  briefPathTypeIcon,
  briefStatusStyles,
} from "@/data/opportunity-briefs";
import type { BriefView } from "@/i18n/briefs";

/**
 * Brief detail hero: market + opportunity-type framing, status, source, and a
 * primary CTA, paired with an illustrative "Opportunity Decision Brief" mockup.
 * The mockup values are sample/illustrative — clearly labeled, never presented
 * as computed scores.
 */
export function BriefHero({ view }: { view: BriefView }) {
  const { b, copy, chrome, locale } = view;
  const isLocal = briefIsLocal(b);
  const contactHref = localePath(locale, briefContactHref(b));
  const m = b.decisionMockup;
  const page = `/opportunity-briefs/${b.slug}`;

  return (
    <section className="relative overflow-hidden border-b border-line bg-gradient-to-b from-surface to-ivory">
      <div aria-hidden className="bg-grid absolute inset-0 opacity-60" />
      <div
        aria-hidden
        className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(229,106,58,0.10),transparent_70%)]"
      />
      <Container className="relative grid items-center gap-14 py-16 lg:grid-cols-[1.05fr_1fr] lg:gap-12 lg:py-24">
        {/* Copy */}
        <div className="max-w-xl">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-plum/5 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-wide text-plum">
              <Icon name={briefPathTypeIcon[b.pathType]} size={13} />
              {copy.marketLabel} · {chrome.pathTypeLabels[b.pathType]}
            </span>
            <span
              className={`inline-flex items-center rounded-full px-2.5 py-1 text-[0.7rem] font-semibold uppercase tracking-wide ${briefStatusStyles[b.status]}`}
            >
              {chrome.statusLabels[b.status]}
            </span>
          </div>

          <Eyebrow className="mt-5">{copy.heroEyebrow}</Eyebrow>
          <h1 className="mt-4 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-plum sm:text-5xl">
            {copy.heroTitle}
          </h1>

          <p className="mt-6 text-pretty text-lg leading-relaxed text-slate">
            {copy.heroSubtitle}
          </p>

          {/* Source line */}
          <p className="mt-6 flex items-start gap-2 text-sm text-slate">
            <Icon name="globe" size={16} className="mt-0.5 shrink-0 text-plum/40" />
            <span>
              <span className="font-semibold text-plum/70">{chrome.sourceField}:</span>{" "}
              {b.source.name}
              {b.source.date ? ` · ${b.source.date}` : ""}
            </span>
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <TrackedButton
              href={contactHref}
              size="lg"
              withArrow
              event="opportunity_brief_cta_clicked"
              eventProps={{
                locale,
                page,
                section: "hero",
                slug: b.slug,
                market: b.market,
                opportunityType: b.opportunityType,
                pathType: b.pathType,
                relatedPath: b.relatedHref,
                cta: isLocal ? "start_readiness" : "talk_to_sax",
                href: contactHref,
              }}
            >
              {isLocal ? chrome.ctaLocalLabel : chrome.ctaCrossLabel}
            </TrackedButton>
            <Button href="#analysis" variant="ghost" size="lg">
              {chrome.seeAnalysis}
            </Button>
          </div>
        </div>

        {/* Decision Brief mockup */}
        <div className="lg:pl-4">
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-[radial-gradient(60%_60%_at_70%_20%,rgba(229,106,58,0.18),transparent_70%)]"
            />
            <div className="relative animate-rise">
              <WindowFrame title={chrome.mockupWindowTitle} badge={chrome.sample}>
                <div className="flex items-center justify-between">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-coral">
                    {chrome.mockupTitle}
                  </p>
                  <Pill tone="coral">{chrome.illustrative}</Pill>
                </div>

                <div className="mt-4 divide-y divide-line/70">
                  <FieldRow
                    label={chrome.fitSignalLabel}
                    value={chrome.fitSignalLabels[m.fitSignal]}
                    emphasis
                  />
                  <FieldRow
                    label={chrome.readinessRiskLabel}
                    value={chrome.riskLabels[m.readinessRisk]}
                  />
                  <FieldRow
                    label={chrome.blockersDetectedLabel}
                    value={`${m.blockersDetected}`}
                  />
                  <FieldRow
                    label={chrome.routeLabel}
                    value={chrome.routeLabels[m.route]}
                  />
                </div>

                <div className="mt-4 flex items-center gap-3 rounded-2xl bg-plum p-3.5 text-white">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10">
                    <Icon name="memo" size={18} className="text-coral-200" />
                  </span>
                  <div>
                    <p className="text-[0.6rem] font-semibold uppercase tracking-wide text-white/55">
                      {chrome.decisionLabel}
                    </p>
                    <p className="text-sm font-semibold">
                      {chrome.decisionLabels[m.decision]}
                    </p>
                  </div>
                </div>
              </WindowFrame>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
