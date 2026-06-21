import { Icon } from "@/components/ui/Icon";
import {
  BlockerItem,
  FieldRow,
  Meter,
  Pill,
  ScoreRing,
} from "./MockupKit";

/**
 * The hero "Opportunity Decision Brief" — the product mockup that makes the
 * GovDecision thesis instantly legible. Sample data only.
 */
export function DecisionCard() {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-coral">
            Opportunity Decision Brief
          </p>
          <h3 className="mt-1 text-lg font-bold leading-tight text-plum">
            Technical supplies · Federal procurement
          </h3>
          <p className="mt-0.5 text-xs text-slate">Ref. GD-2026-0488</p>
        </div>
        <Pill tone="coral">
          <span className="h-1.5 w-1.5 rounded-full bg-coral" />
          Pursue with conditions
        </Pill>
      </div>

      {/* Scores */}
      <div className="mt-5 flex items-center gap-5 rounded-2xl bg-surface/60 p-4">
        <ScoreRing value={84} label="84" sublabel="Fit / 100" size={104} />
        <div className="flex-1 space-y-3">
          <Meter value={72} label="Readiness" tone="coral" />
          <Meter value={58} label="Complexity" valueLabel="Medium" />
          <Meter value={40} label="Effort" valueLabel="3–4 weeks" />
        </div>
      </div>

      {/* Opportunity facts */}
      <div className="mt-4 divide-y divide-line/70">
        <FieldRow label="Market" value="United States" />
        <FieldRow label="Buyer type" value="Federal agency" />
        <FieldRow label="Category" value="Technical supplies" />
        <FieldRow
          label="Decision"
          value={<span className="text-coral-600">Pursue with conditions</span>}
          emphasis
        />
      </div>

      {/* Blockers */}
      <div className="mt-4 rounded-2xl border border-line bg-white p-4">
        <div className="flex items-center gap-2">
          <Icon name="shield" size={16} className="text-amber-500" />
          <span className="text-xs font-semibold uppercase tracking-wide text-plum">
            Blockers detected
          </span>
          <span className="ml-auto text-xs font-bold text-amber-600">3</span>
        </div>
        <ul className="mt-3 space-y-2">
          <BlockerItem>Local registration path required</BlockerItem>
          <BlockerItem>Financial guarantee to review</BlockerItem>
          <BlockerItem tone="bad">Technical certificate missing</BlockerItem>
        </ul>
      </div>

      {/* Recommended route */}
      <div className="mt-4 flex items-center gap-3 rounded-2xl bg-plum p-4 text-white">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10">
          <Icon name="route" size={18} className="text-coral-200" />
        </span>
        <div>
          <p className="text-[0.65rem] font-semibold uppercase tracking-wide text-white/55">
            Recommended route
          </p>
          <p className="text-sm font-semibold">
            Local partner + readiness checklist
          </p>
        </div>
      </div>
    </div>
  );
}
