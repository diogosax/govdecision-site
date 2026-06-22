import { Icon } from "@/components/ui/Icon";
import { Section, SectionHeader } from "@/components/ui/Section";
import type { DestinationView } from "@/i18n/destinations";

/**
 * Market snapshot: 3–6 sourced metric cards plus a clean "Market data sources"
 * line. Figures come from official / authoritative sources in the data file;
 * metric labels/notes are localized while the figures themselves are preserved.
 */
export function MarketSnapshot({ view }: { view: DestinationView }) {
  const { d, copy, chrome } = view;
  const { sourceNotes } = d.marketSnapshot;

  return (
    <Section tone="white">
      <SectionHeader
        eyebrow={chrome.snapshotEyebrow}
        title={chrome.snapshotTitle.replace("{market}", copy.targetLabel)}
        lead={chrome.snapshotLead}
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {d.marketSnapshot.metrics.map((m, i) => {
          const localized = copy.metrics[i] ?? { label: m.label, value: m.value, note: m.note };
          return (
            <div
              key={m.label}
              className="rounded-3xl border border-line bg-surface/40 p-6"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-plum shadow-soft">
                <Icon name={m.icon} size={20} />
              </span>
              <p className="mt-4 text-[0.7rem] font-semibold uppercase tracking-wide text-slate">
                {localized.label}
              </p>
              <p className="mt-1 text-2xl font-bold tracking-tight text-plum">
                {localized.value}
              </p>
              {localized.note && (
                <p className="mt-1 text-xs font-medium text-coral-600">
                  {localized.note}
                </p>
              )}
            </div>
          );
        })}
      </div>

      {/* Market data sources */}
      <div className="mt-8 rounded-2xl border border-line bg-white p-6">
        <p className="flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-wide text-slate">
          <Icon name="memo" size={15} className="text-plum/50" />
          {chrome.dataSources}
        </p>
        <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {sourceNotes.map((s) => (
            <li key={s.url}>
              <a
                href={s.url}
                target="_blank"
                rel="noreferrer noopener"
                className="font-medium text-plum underline-offset-4 hover:text-coral-600 hover:underline"
              >
                {s.label}
              </a>
              {s.year && (
                <span className="ml-1.5 text-xs text-slate">({s.year})</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
