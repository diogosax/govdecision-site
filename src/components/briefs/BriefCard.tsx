import { TrackedButton } from "@/components/analytics/TrackedButton";
import { Icon, type IconName } from "@/components/ui/Icon";
import {
  briefPathTypeIcon,
  briefStatusStyles,
  type BriefPathType,
  type BriefStatus,
} from "@/data/opportunity-briefs";

/** A fully locale-resolved index card model (serializable for the client grid). */
export type BriefGridItem = {
  slug: string;
  /** Canonical EN market — stable analytics key, not shown. */
  market: string;
  marketLabel: string;
  pathType: BriefPathType;
  pathTypeLabel: string;
  status: BriefStatus;
  statusLabel: string;
  icon: IconName;
  opportunityType: string;
  buyerType: string;
  sourceName: string;
  shortTitle: string;
  whySuppliersCare: string[];
  detailHref: string;
};

export type BriefCardLabels = {
  cardCta: string;
  cardWhyLabel: string;
  opportunityField: string;
  buyerField: string;
  sourceField: string;
};

/**
 * A single Opportunity Brief card. Premium, equal-height, with the CTA pinned to
 * the bottom so buttons align across the grid (same discipline as PathCard). The
 * CTA fires `opportunity_brief_clicked` with stable identifiers.
 */
export function BriefCard({
  item,
  labels,
  locale,
}: {
  item: BriefGridItem;
  labels: BriefCardLabels;
  locale: string;
}) {
  return (
    <article className="flex h-full flex-col rounded-3xl border border-line bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
      {/* Market + path type · status */}
      <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1.5">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-plum/5 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-plum">
          <Icon name={briefPathTypeIcon[item.pathType]} size={13} />
          {item.marketLabel}
        </span>
        <span
          className={`inline-flex items-center rounded-full px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wide ${briefStatusStyles[item.status]}`}
        >
          {item.statusLabel}
        </span>
      </div>

      {/* Icon + title */}
      <span className="mt-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-coral/10 text-coral">
        <Icon name={item.icon} size={22} />
      </span>
      <h3 className="mt-4 text-lg font-bold leading-snug text-plum">
        {item.shortTitle}
      </h3>
      <p className="mt-1.5 text-sm font-medium text-slate">{item.opportunityType}</p>
      <p className="mt-1 text-xs text-slate">{item.buyerType}</p>

      {/* Why it matters — grows so cards stay equal height */}
      <p className="mt-5 border-t border-line/70 pt-5 text-[0.65rem] font-semibold uppercase tracking-wide text-slate">
        {labels.cardWhyLabel}
      </p>
      <ul className="mt-3 flex-1 space-y-2">
        {item.whySuppliersCare.slice(0, 2).map((point) => (
          <li key={point} className="flex items-start gap-2.5 text-sm text-plum/85">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />
            {point}
          </li>
        ))}
      </ul>

      {/* Source */}
      <p className="mt-5 flex items-start gap-2 text-xs text-slate">
        <Icon name="globe" size={14} className="mt-0.5 shrink-0 text-plum/40" />
        <span>
          <span className="font-semibold text-plum/70">{labels.sourceField}:</span>{" "}
          {item.sourceName}
        </span>
      </p>

      {/* CTA pinned to the bottom */}
      <div className="mt-auto pt-6">
        <TrackedButton
          href={item.detailHref}
          variant="ghost"
          size="md"
          withArrow
          className="w-full"
          event="opportunity_brief_clicked"
          eventProps={{
            locale,
            page: "/opportunity-briefs",
            section: "brief_card",
            slug: item.slug,
            market: item.market,
            opportunityType: item.opportunityType,
            pathType: item.pathType,
            cta: labels.cardCta,
            href: item.detailHref,
          }}
        >
          {labels.cardCta}
        </TrackedButton>
      </div>
    </article>
  );
}
