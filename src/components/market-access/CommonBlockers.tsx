import { Icon } from "@/components/ui/Icon";
import { Section, SectionHeader } from "@/components/ui/Section";
import type { DestinationView } from "@/i18n/destinations";

/**
 * "What usually blocks suppliers" — the friction this market tends to create.
 * Rendered as calm warning cards, not alarmist; each is a thing GovDecision
 * (and, for cross-border paths, Sax Global) is designed to surface early.
 */
export function CommonBlockers({ view }: { view: DestinationView }) {
  const { copy, chrome } = view;

  return (
    <Section tone="ivory">
      <SectionHeader
        eyebrow={chrome.blockersEyebrow}
        title={chrome.blockersTitle}
        lead={chrome.blockersLead}
      />

      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {copy.commonBlockers.map((b) => (
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
