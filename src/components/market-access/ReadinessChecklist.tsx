import { Icon } from "@/components/ui/Icon";
import { Section, SectionHeader } from "@/components/ui/Section";
import {
  checklistStatusMeta,
  checklistStatusOrder,
  type DestinationPage,
} from "@/data/destinations";

/**
 * Basic readiness checklist — the centerpiece infographic. Each item carries a
 * nuanced status (Usually needed / Depends / Validate / Not usually required)
 * because requirements vary by buyer, category, procurement method, and
 * opportunity. A legend up top makes the statuses readable at a glance.
 */
export function ReadinessChecklist({ d }: { d: DestinationPage }) {
  return (
    <Section tone="surface" id="readiness">
      <SectionHeader
        eyebrow="Basic readiness checklist"
        title="What this market may ask of you."
        lead="A market-specific starting point — not legal advice. Requirements vary by buyer, category, procurement method, and opportunity, so validate each one before pursuing."
      />

      {/* Legend */}
      <div className="mt-8 flex flex-wrap gap-2.5">
        {checklistStatusOrder.map((status) => {
          const meta = checklistStatusMeta[status];
          return (
            <span
              key={status}
              className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${meta.chip}`}
            >
              <span className={`h-1.5 w-1.5 rounded-full ${meta.dot}`} />
              {meta.label}
            </span>
          );
        })}
      </div>

      <ul className="mt-6 grid gap-3 md:grid-cols-2">
        {d.basicChecklist.map((c) => {
          const meta = checklistStatusMeta[c.status];
          return (
            <li
              key={c.item}
              className="flex flex-col gap-2 rounded-2xl border border-line bg-white p-5 sm:flex-row sm:items-start sm:justify-between sm:gap-4"
            >
              <div className="sm:flex-1">
                <p className="font-bold text-plum">{c.item}</p>
                <p className="mt-1 text-sm leading-relaxed text-slate">
                  {c.description}
                </p>
              </div>
              <span
                className={`inline-flex shrink-0 items-center gap-1.5 self-start rounded-full px-2.5 py-1 text-[0.7rem] font-semibold ${meta.chip}`}
              >
                <span className={`h-1.5 w-1.5 rounded-full ${meta.dot}`} />
                {meta.label}
              </span>
            </li>
          );
        })}
      </ul>

      {/* Route options */}
      <div className="mt-8 rounded-3xl border border-line bg-white p-7 sm:p-8">
        <p className="flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-wide text-slate">
          <Icon name="route" size={15} className="text-plum/50" />
          Route-to-market options to weigh
        </p>
        <ul className="mt-4 flex flex-wrap gap-2.5">
          {d.routeOptions.map((r) => (
            <li
              key={r}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-3.5 py-1.5 text-sm font-medium text-plum"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-coral" />
              {r}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
