import { Icon } from "@/components/ui/Icon";
import { Section, SectionHeader } from "@/components/ui/Section";
import type { DestinationPage } from "@/data/destinations";

/**
 * "What usually blocks suppliers" — the friction this market tends to create.
 * Rendered as calm warning cards, not alarmist; each is a thing GovDecision
 * (and, for cross-border paths, Sax Global) is designed to surface early.
 */
export function CommonBlockers({ d }: { d: DestinationPage }) {
  return (
    <Section tone="ivory">
      <SectionHeader
        eyebrow="Common blockers"
        title="What usually blocks suppliers."
        lead="Most missed opportunities don't fail at the bid — they fail earlier, on readiness. These are the patterns worth catching first."
      />

      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {d.commonBlockers.map((b) => (
          <li
            key={b}
            className="flex items-start gap-3 rounded-2xl border border-line bg-white p-5"
          >
            <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
              <Icon name="shield" size={16} />
            </span>
            <p className="text-sm font-medium leading-relaxed text-plum/90">
              {b}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
