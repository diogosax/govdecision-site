import { Icon } from "@/components/ui/Icon";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FieldRow, ScoreRing, WindowFrame } from "@/components/marketing/MockupKit";
import { saxGlobalDisclaimer, type DestinationPage } from "@/data/destinations";

/**
 * Sax Global report mockups: a Market Access Score and a Business Plan
 * Snapshot. Both are explicitly illustrative samples — never presented as
 * guaranteed deliverables. For local paths Sax Global is secondary (lighter
 * surface); for cross-border / multilateral paths it is a major support layer
 * (plum authority section).
 */
export function SaxGlobalReports({ d }: { d: DestinationPage }) {
  const sg = d.saxGlobal;
  const isPrimary = sg.emphasis === "primary";

  return (
    <section
      className={
        isPrimary
          ? "bg-plum py-20 text-white sm:py-28"
          : "bg-surface py-20 text-plum sm:py-28"
      }
    >
      <div className={isPrimary ? "bg-grid-light" : ""}>
        <Container>
          <div className="max-w-3xl">
            <Eyebrow tone={isPrimary ? "light" : "coral"}>
              {isPrimary ? "Where Sax Global enters" : "Sax Global (optional)"}
            </Eyebrow>
            <h2
              className={`mt-5 text-balance text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl ${
                isPrimary ? "text-white" : "text-plum"
              }`}
            >
              {isPrimary
                ? "Sax Global supports the market access journey."
                : "Sax Global, if and when you need it."}
            </h2>
            <p
              className={`mt-6 text-pretty text-lg leading-relaxed ${
                isPrimary ? "text-white/70" : "text-slate"
              }`}
            >
              {sg.intro}
            </p>

            <ul className="mt-6 flex flex-wrap gap-2.5">
              {sg.role.map((r) => (
                <li
                  key={r}
                  className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-sm font-medium ${
                    isPrimary
                      ? "border border-white/15 bg-white/5 text-white/80"
                      : "border border-line bg-white text-plum"
                  }`}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-coral" />
                  {r}
                </li>
              ))}
            </ul>
          </div>

          {/* Two report mockups */}
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {/* Mockup 1 — Market Access Score */}
            <WindowFrame title="Sax Global · Market Access Score" badge="Illustrative">
              <div className="flex items-center gap-5">
                <ScoreRing
                  value={sg.score.attractiveness}
                  label={`${sg.score.attractiveness}`}
                  sublabel="Attractiveness"
                  tone="coral"
                  size={120}
                />
                <div className="flex-1">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-coral">
                    Market access score
                  </p>
                  <p className="mt-1 text-sm font-semibold text-plum">
                    {d.originCountry} &rarr; {d.targetMarket}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-slate">
                    A directional read across attractiveness, readiness, route,
                    and risk.
                  </p>
                </div>
              </div>
              <div className="mt-4 divide-y divide-line/70">
                <FieldRow label="Market attractiveness" value={`${sg.score.attractiveness} / 100`} emphasis />
                <FieldRow label="Readiness gap" value={sg.score.readinessGap} />
                <FieldRow label="Route complexity" value={sg.score.routeComplexity} />
                <FieldRow label="Partner dependency" value={sg.score.partnerDependency} />
                <FieldRow label="Execution risk" value={sg.score.executionRisk} />
              </div>
              <div className="mt-4 flex items-start gap-2 rounded-2xl bg-coral/5 p-3 text-xs leading-relaxed text-coral-600">
                <Icon name="compass" size={15} className="mt-0.5 shrink-0" />
                <span>
                  Recommended first move: {sg.score.firstMove}
                </span>
              </div>
            </WindowFrame>

            {/* Mockup 2 — Business Plan Snapshot */}
            <WindowFrame title="Sax Global · Business Plan Snapshot" badge="Sample">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-coral">
                Business plan snapshot
              </p>
              <p className="mt-1 text-sm font-semibold text-plum">
                A structured starting outline — built with you, not for you.
              </p>
              <ol className="mt-4 space-y-2.5">
                {sg.businessPlan.map((step, i) => (
                  <li key={step} className="flex items-center gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-plum/5 text-xs font-bold tabular-nums text-plum">
                      {i + 1}
                    </span>
                    <span className="text-sm font-medium text-plum/90">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
            </WindowFrame>
          </div>

          <p
            className={`mt-10 max-w-3xl text-xs leading-relaxed ${
              isPrimary ? "text-white/45" : "text-slate/80"
            }`}
          >
            {saxGlobalDisclaimer}
          </p>
        </Container>
      </div>
    </section>
  );
}
