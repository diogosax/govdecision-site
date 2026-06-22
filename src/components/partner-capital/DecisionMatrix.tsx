import { Icon } from "@/components/ui/Icon";

export type MatrixCell = "strong" | "harder" | "check" | "none";

/**
 * "When a partner matters" decision matrix. Each context signal (row) shows how
 * three routes (Direct / Partner / Validate first) fit, using compact badges
 * instead of paragraphs. Cell tokens are structural (passed by the view); the
 * badge text is localized via `cellLabels`. Reads as a quick signal, not a
 * verdict — no guarantees implied.
 */
export function DecisionMatrix({
  columns,
  cellLabels,
  rows,
  cells,
}: {
  columns: { direct: string; partner: string; validate: string };
  cellLabels: { strong: string; harder: string; check: string; none: string };
  rows: string[];
  cells: [MatrixCell, MatrixCell, MatrixCell][];
}) {
  const colLabels = [columns.direct, columns.partner, columns.validate];

  const badge = (token: MatrixCell) => {
    if (token === "none") {
      return (
        <span className="text-sm font-semibold text-slate/40" aria-hidden>
          {cellLabels.none}
        </span>
      );
    }
    const styles: Record<Exclude<MatrixCell, "none">, string> = {
      strong: "bg-emerald-50 text-emerald-700",
      harder: "bg-amber-50 text-amber-700",
      check: "bg-plum/8 text-plum",
    };
    return (
      <span
        className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[0.7rem] font-semibold ${styles[token]}`}
      >
        {token === "strong" && <Icon name="check" size={11} />}
        {cellLabels[token]}
      </span>
    );
  };

  return (
    <div className="overflow-hidden rounded-3xl border border-line bg-white shadow-soft">
      {/* Header */}
      <div className="grid grid-cols-[1.5fr_repeat(3,1fr)] items-center gap-2 border-b border-line bg-surface/50 px-4 py-3 sm:px-6">
        <span aria-hidden />
        {colLabels.map((label) => (
          <span
            key={label}
            className="text-center text-[0.65rem] font-semibold uppercase tracking-wide text-plum/70 sm:text-xs"
          >
            {label}
          </span>
        ))}
      </div>
      {/* Rows */}
      <div className="divide-y divide-line/70">
        {rows.map((row, i) => (
          <div
            key={row}
            className="grid grid-cols-[1.5fr_repeat(3,1fr)] items-center gap-2 px-4 py-3.5 sm:px-6"
          >
            <span className="text-xs font-semibold leading-snug text-plum sm:text-sm">
              {row}
            </span>
            {(cells[i] ?? ["none", "none", "none"]).map((token, j) => (
              <span key={j} className="flex justify-center text-center">
                {badge(token)}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
