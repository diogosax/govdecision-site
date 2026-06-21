import { Icon } from "@/components/ui/Icon";
import { Section, SectionHeader } from "@/components/ui/Section";
import type { DestinationPage } from "@/data/destinations";

/**
 * Market snapshot: 3–6 sourced metric cards plus a clean "Market data sources"
 * line. Figures come from official / authoritative sources in the data file;
 * any estimate is labelled as such via the metric note.
 */
export function MarketSnapshot({ d }: { d: DestinationPage }) {
  const { metrics, sourceNotes } = d.marketSnapshot;

  return (
    <Section tone="white">
      <SectionHeader
        eyebrow="Market snapshot"
        title={`${d.targetMarket} at a glance.`}
        lead="A short, sourced read on the market — not an exhaustive report. Figures use the latest available official or authoritative data."
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {metrics.map((m) => (
          <div
            key={m.label}
            className="rounded-3xl border border-line bg-surface/40 p-6"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-plum shadow-soft">
              <Icon name={m.icon} size={20} />
            </span>
            <p className="mt-4 text-[0.7rem] font-semibold uppercase tracking-wide text-slate">
              {m.label}
            </p>
            <p className="mt-1 text-2xl font-bold tracking-tight text-plum">
              {m.value}
            </p>
            {m.note && (
              <p className="mt-1 text-xs font-medium text-coral-600">{m.note}</p>
            )}
          </div>
        ))}
      </div>

      {/* Market data sources */}
      <div className="mt-8 rounded-2xl border border-line bg-white p-6">
        <p className="flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-wide text-slate">
          <Icon name="memo" size={15} className="text-plum/50" />
          Market data sources
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
