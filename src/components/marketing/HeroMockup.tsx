import { Icon } from "@/components/ui/Icon";
import { DecisionCard } from "./DecisionCard";
import { WindowFrame } from "./MockupKit";

/**
 * Hero presentation: the Decision Brief inside an app window, with floating
 * accent chips that reinforce the "noise → decision" narrative.
 */
export function HeroMockup() {
  return (
    <div className="relative">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-[radial-gradient(60%_60%_at_70%_20%,rgba(229,106,58,0.18),transparent_70%)]"
      />

      <div className="relative animate-rise">
        <WindowFrame
          title="govdecision · Decision workspace"
          badge="Sample"
          className="backdrop-blur"
        >
          <DecisionCard />
        </WindowFrame>
      </div>

      {/* Floating chip: queue */}
      <div className="absolute -left-4 top-10 hidden animate-float-slow rounded-2xl border border-line bg-white px-4 py-3 shadow-card sm:-left-8 md:block">
        <p className="text-[0.65rem] font-semibold uppercase tracking-wide text-slate">
          Opportunities scanned
        </p>
        <p className="text-xl font-bold tracking-tight text-plum tabular-nums">
          1,284
        </p>
        <p className="text-[0.7rem] font-medium text-coral">
          12 worth a decision
        </p>
      </div>

      {/* Floating chip: go/no-go */}
      <div
        className="absolute -right-3 bottom-12 hidden animate-float-slow rounded-2xl border border-line bg-white px-4 py-3 shadow-card sm:-right-6 md:block"
        style={{ animationDelay: "1.5s" }}
      >
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
            <Icon name="check" size={15} />
          </span>
          <div>
            <p className="text-[0.65rem] font-semibold uppercase tracking-wide text-slate">
              Go / no-go
            </p>
            <p className="text-sm font-bold text-plum">Executive brief ready</p>
          </div>
        </div>
      </div>
    </div>
  );
}
