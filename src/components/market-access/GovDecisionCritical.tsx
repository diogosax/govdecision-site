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
import { aiAssistNote, type DestinationPage } from "@/data/destinations";

/**
 * "Where GovDecision becomes critical" — repeated across destinations with
 * market-specific wording, paired with a sample Readiness Console mockup.
 * No internal model names; AI is framed as assistive, never definitive.
 */
export function GovDecisionCritical({ d }: { d: DestinationPage }) {
  const c = d.readinessConsole;

  return (
    <section className="border-y border-line bg-white py-20 sm:py-28">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Copy */}
          <div>
            <Eyebrow>Where GovDecision becomes critical</Eyebrow>
            <h2 className="mt-5 text-balance text-3xl font-bold leading-[1.1] tracking-tight text-plum sm:text-4xl">
              Where GovDecision becomes critical.
            </h2>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-slate">
              GovDecision turns interest in this market into a decision you can
              defend — pursue now, or prepare first — with the reasoning written
              down.
            </p>

            <ul className="mt-8 space-y-3">
              {d.govDecisionRole.map((role) => (
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
              {aiAssistNote}
            </p>
          </div>

          {/* Readiness Console mockup */}
          <div className="lg:pt-2">
            <WindowFrame title="govdecision · Readiness Console" badge="Sample">
              <div className="flex items-center justify-between">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-coral">
                  Readiness console
                </p>
                <Pill tone="coral">{c.decision}</Pill>
              </div>

              <div className="mt-5 flex items-center gap-5">
                <ScoreRing
                  value={c.marketFit}
                  label={`${c.marketFit}`}
                  sublabel="Market fit"
                  tone="coral"
                  size={120}
                />
                <div className="flex-1 space-y-4">
                  <Meter
                    value={c.supplierPassport}
                    label="Supplier Passport"
                    tone="plum"
                  />
                  <div className="rounded-2xl bg-surface/60 p-3">
                    <p className="text-[0.65rem] font-semibold uppercase tracking-wide text-slate">
                      Critical blockers
                    </p>
                    <p className="mt-0.5 text-2xl font-bold tabular-nums text-plum">
                      {c.criticalBlockers}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 divide-y divide-line/70">
                <FieldRow
                  label="Market fit"
                  value={`${c.marketFit} / 100`}
                  emphasis
                />
                <FieldRow label="Recommended route" value={c.recommendedRoute} />
                <FieldRow label="Decision" value={c.decision} emphasis />
              </div>

              <div className="mt-4 flex items-center gap-2 rounded-2xl bg-plum/5 p-3 text-xs leading-relaxed text-plum/70">
                <Icon name="memo" size={15} className="shrink-0 text-plum/50" />
                Decision support and readiness workflows — illustrative values,
                not a guarantee of any outcome.
              </div>
            </WindowFrame>
          </div>
        </div>
      </Container>
    </section>
  );
}
