import { Icon } from "@/components/ui/Icon";
import { govDecisionJourney } from "@/data/market-access";

export type JourneyStepCopy = { title: string; description: string };

/**
 * The six-step path from market interest to a decision-ready outcome.
 * Icons come from the data file; titles/descriptions are localized.
 */
export function PathJourney({
  steps,
  note,
}: {
  steps: JourneyStepCopy[];
  note: string;
}) {
  return (
    <>
      <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((step, i) => (
          <li
            key={step.title}
            className="rounded-3xl border border-line bg-white p-6 shadow-soft"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-coral/10 text-sm font-bold text-coral tabular-nums">
                {i + 1}
              </span>
              <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-plum/5 text-plum">
                <Icon name={govDecisionJourney[i].icon} size={20} />
              </span>
            </div>
            <h3 className="mt-4 font-bold text-plum">{step.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-slate">
              {step.description}
            </p>
          </li>
        ))}
      </ol>

      <div className="mt-8 rounded-2xl border border-line bg-white p-6">
        <p className="flex items-start gap-3 text-sm leading-relaxed text-slate">
          <Icon
            name="compass"
            size={18}
            className="mt-0.5 shrink-0 text-plum/50"
          />
          <span>{note}</span>
        </p>
      </div>
    </>
  );
}
