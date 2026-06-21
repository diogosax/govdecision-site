/**
 * Origin → target route visual: two market chips connected by a dashed line
 * with a coral decision checkpoint at the midpoint. Pure presentation, so it
 * works inside both server and client components.
 */
export function PathRoute({
  origin,
  target,
}: {
  origin: string;
  target: string;
}) {
  const chip =
    "rounded-lg border border-line bg-surface px-2.5 py-1 text-xs font-semibold text-plum";
  return (
    <div className="flex items-center gap-2.5">
      <span className={chip}>{origin}</span>
      <span aria-hidden className="relative h-5 flex-1">
        <span className="absolute left-0 top-1/2 w-full -translate-y-1/2 border-t border-dashed border-line" />
        <span className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-coral ring-4 ring-coral/15" />
      </span>
      <span className={`${chip} text-right`}>{target}</span>
    </div>
  );
}
