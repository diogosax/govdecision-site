import { FieldRow, Pill, WindowFrame } from "@/components/marketing/MockupKit";
import { Icon, type IconName } from "@/components/ui/Icon";
import type { MockupField } from "@/i18n/partner-capital/types";

/**
 * Shared product-style "brief" mockup for the Partner Network and GovDecision
 * Capital pages. Renders an Apple-like app window with labeled fields, an
 * optional validation checklist, and a highlighted footer row (the decision or
 * next step). All values are generic sample data — the window badge reads
 * "Illustrative" and the page caption makes clear it is not a real customer case
 * (or, on Capital, a financing offer).
 */
export function BriefMockup({
  windowTitle,
  briefTitle,
  illustrative,
  fields,
  checklist,
  footerLabel,
  footerValue,
  icon = "route",
}: {
  windowTitle: string;
  briefTitle: string;
  illustrative: string;
  fields: MockupField[];
  checklist?: { label: string; items: string[] };
  footerLabel: string;
  footerValue: string;
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

          {checklist && (
            <div className="mt-4 rounded-2xl bg-surface/60 p-3.5">
              <p className="text-[0.6rem] font-semibold uppercase tracking-wide text-slate">
                {checklist.label}
              </p>
              <ul className="mt-2 grid gap-1.5 sm:grid-cols-2">
                {checklist.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-xs font-medium text-plum/85"
                  >
                    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-coral/40 text-coral">
                      <Icon name="check" size={9} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-4 flex items-center gap-3 rounded-2xl bg-plum p-3.5 text-white">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10">
              <Icon name={icon} size={18} className="text-coral-200" />
            </span>
            <div>
              <p className="text-[0.6rem] font-semibold uppercase tracking-wide text-white/55">
                {footerLabel}
              </p>
              <p className="text-sm font-semibold">{footerValue}</p>
            </div>
          </div>
        </WindowFrame>
      </div>
    </div>
  );
}
