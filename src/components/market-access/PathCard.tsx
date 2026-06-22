import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import {
  pathTypeIcon,
  pathTypeStyles,
  type MarketAccessPath,
} from "@/data/market-access";
import { PathRoute } from "./PathRoute";

/** A single market access path card, driven entirely by the data file. */
export function PathCard({ path }: { path: MarketAccessPath }) {
  return (
    <article className="flex h-full flex-col rounded-3xl border border-line bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
      {/* Type + status */}
      <div className="flex items-center justify-between gap-3">
        <span
          className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wide ${pathTypeStyles[path.pathType]}`}
        >
          <Icon name={pathTypeIcon[path.pathType]} size={13} />
          {path.pathType}
        </span>
        <span className="text-[0.65rem] font-semibold uppercase tracking-wide text-slate">
          {path.status}
        </span>
      </div>

      {/* Origin → target */}
      <div className="mt-5">
        <PathRoute origin={path.originCountry} target={path.targetMarket} />
      </div>

      {/* Title + summary */}
      <h3 className="mt-5 text-lg font-bold leading-snug text-plum">
        {path.title}
      </h3>
      <p className="mt-2.5 text-sm leading-relaxed text-slate">
        {path.summary}
      </p>

      {/* Focus areas — grows so cards of varying copy stay equal height */}
      <ul className="mt-5 flex-1 space-y-2 border-t border-line/70 pt-5">
        {path.focusAreas.map((area) => (
          <li
            key={area}
            className="flex items-start gap-2.5 text-sm text-plum/85"
          >
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />
            {area}
          </li>
        ))}
      </ul>

      {/* CTA pinned to the bottom so buttons align across the grid */}
      <div className="mt-auto pt-6">
        <Button
          href={path.ctaHref}
          variant="ghost"
          size="md"
          withArrow
          className="w-full"
        >
          {path.ctaLabel}
        </Button>
      </div>
    </article>
  );
}
