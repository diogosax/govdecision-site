import { Icon } from "@/components/ui/Icon";

/**
 * Public-contract cash-flow timeline. Seven stages from opportunity review to
 * payment, shown as a connected left-to-right flow, with the common points where
 * capital pressure may appear surfaced as chips below. Visual, not prescriptive
 * — where pressure lands depends on the opportunity.
 */
export function CashflowTimeline({
  steps,
  pressureLabel,
  pressures,
}: {
  steps: string[];
  pressureLabel: string;
  pressures: string[];
}) {
  return (
    <div className="rounded-3xl border border-line bg-white p-6 shadow-soft sm:p-8">
      <ol className="grid grid-cols-2 gap-x-3 gap-y-7 sm:grid-cols-4 lg:grid-cols-7">
        {steps.map((step, i) => (
          <li
            key={step}
            className="relative flex flex-col items-center text-center"
          >
            {i < steps.length - 1 && (
              <span
                aria-hidden
                className="absolute -right-2 top-4 hidden text-coral lg:block"
              >
                <Icon name="arrow-right" size={14} />
              </span>
            )}
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-plum/5 text-xs font-bold text-plum ring-1 ring-line">
              {i + 1}
            </span>
            <span className="mt-2 text-xs font-semibold leading-snug text-plum">
              {step}
            </span>
          </li>
        ))}
      </ol>

      <div className="mt-8 rounded-2xl bg-surface/50 p-5">
        <p className="flex items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-wide text-slate">
          <Icon name="spark" size={14} className="text-coral" />
          {pressureLabel}
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {pressures.map((p) => (
            <span
              key={p}
              className="inline-flex items-center rounded-full bg-coral/10 px-3 py-1 text-xs font-semibold text-coral-600"
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
