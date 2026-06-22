import { Icon } from "@/components/ui/Icon";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import {
  FieldRow,
  Meter,
  Pill,
  ScoreRing,
  WindowFrame,
} from "@/components/marketing/MockupKit";
import type { DestinationView } from "@/i18n/destinations";

/**
 * "Where GovDecision becomes critical" — repeated across destinations with
 * market-specific wording, paired with a sample Readiness Console mockup.
 * No internal model names; AI is framed as assistive, never definitive.
 */
export function GovDecisionCritical({ view }: { view: DestinationView }) {
  const { d, copy, chrome } = view;
  const c = d.readinessConsole;

  return (
    <section className="border-y border-line bg-white py-20 sm:py-28">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Copy */}
          <div>
            <Eyebrow>{chrome.govEyebrow}</Eyebrow>
            <h2 className="mt-5 text-balance text-3xl font-bold leading-[1.1] tracking-tight text-plum sm:text-4xl">
              {chrome.govTitle}
            </h2>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-slate">
              {chrome.govLead}
            </p>

            <ul className="mt-8 space-y-3">
              {copy.govDecisionRole.map((role) => (
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
          </div>

          {/* Readiness Console mockup */}
          <div className="lg:pt-2">
            <WindowFrame title={chrome.windowConsoleTitle} badge={chrome.sample}>
              <div className="flex items-center justify-between">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-coral">
                  {chrome.console}
                </p>
                <Pill tone="coral">{copy.decision}</Pill>
              </div>

              <div className="mt-5 flex items-center gap-5">
                <ScoreRing
                  value={c.marketFit}
                  label={`${c.marketFit}`}
                  sublabel={chrome.marketFit}
                  tone="coral"
                  size={120}
                />
                <div className="flex-1 space-y-4">
                  <Meter
                    value={c.supplierPassport}
                    label={chrome.supplierPassport}
                    tone="plum"
                  />
                  <div className="rounded-2xl bg-surface/60 p-3">
                    <p className="text-[0.65rem] font-semibold uppercase tracking-wide text-slate">
                      {chrome.criticalBlockers}
                    </p>
                    <p className="mt-0.5 text-2xl font-bold tabular-nums text-plum">
                      {c.criticalBlockers}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 divide-y divide-line/70">
                <FieldRow
                  label={chrome.marketFit}
                  value={`${c.marketFit} / 100`}
                  emphasis
                />
                <FieldRow
                  label={chrome.recommendedRouteLabel}
                  value={copy.recommendedRoute}
                />
                <FieldRow label={chrome.decisionLabel} value={copy.decision} emphasis />
              </div>

              <div className="mt-4 flex items-center gap-2 rounded-2xl bg-plum/5 p-3 text-xs leading-relaxed text-plum/70">
                <Icon name="memo" size={15} className="shrink-0 text-plum/50" />
                {chrome.consoleNote}
              </div>
            </WindowFrame>
          </div>
        </div>
      </Container>
    </section>
  );
}
