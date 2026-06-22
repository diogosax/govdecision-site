import { FieldRow, Pill, WindowFrame } from "@/components/marketing/MockupKit";
import { Icon, type IconName } from "@/components/ui/Icon";
import type { MockupField } from "@/i18n/partner-capital/types";

/**
 * Shared product-style "brief" mockup for the Partner Network and GovDecision
 * Capital pages (SITE-015). Renders an Apple-like app window with a few labeled
 * fields and a highlighted "next step" row. All values are generic sample data
 * — the window badge reads "Illustrative" and the caption below makes clear it
 * is not a real customer case (or, on Capital, a financing offer).
 */
export function BriefMockup({
  windowTitle,
  briefTitle,
  illustrative,
  fields,
  nextStepLabel,
  nextStepValue,
  icon = "route",
}: {
  windowTitle: string;
  briefTitle: string;
  illustrative: string;
  fields: MockupField[];
  nextStepLabel: string;
  nextStepValue: string;
  icon?: IconName;
}) {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-[radial-gradient(60%_60%_at_70%_20%,rgba(229,106,58,0.18),transparent_70%)]"
      />
      <div className="relative animate-rise">
        <WindowFrame title={windowTitle} badge={illustrative}>
          <div className="flex items-center justify-between">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-coral">
              {briefTitle}
            </p>
            <Pill tone="coral">{illustrative}</Pill>
          </div>
          <div className="mt-4 divide-y divide-line/70">
            {fields.map((f) => (
              <FieldRow key={f.label} label={f.label} value={f.value} />
            ))}
          </div>
          <div className="mt-4 flex items-center gap-3 rounded-2xl bg-plum p-3.5 text-white">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10">
              <Icon name={icon} size={18} className="text-coral-200" />
            </span>
            <div>
              <p className="text-[0.6rem] font-semibold uppercase tracking-wide text-white/55">
                {nextStepLabel}
              </p>
              <p className="text-sm font-semibold">{nextStepValue}</p>
            </div>
          </div>
        </WindowFrame>
      </div>
    </div>
  );
}
