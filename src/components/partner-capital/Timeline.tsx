import { Icon } from "@/components/ui/Icon";
import type { TitleDesc } from "@/i18n/partner-capital/types";

/**
 * Numbered step timeline. Horizontal on large screens (nodes connected by a
 * coral arrow), stacked on smaller screens. Used for the partner-route timeline
 * (6 steps) and the GovDecision Capital funding-route flow (5 steps).
 */

// Static class strings so Tailwind's JIT emits them.
const lgColsClass: Record<number, string> = {
  4: "lg:grid-cols-4",
  5: "lg:grid-cols-5",
  6: "lg:grid-cols-6",
};

export function Timeline({ steps }: { steps: TitleDesc[] }) {
  const lgCols = lgColsClass[steps.length] ?? "lg:grid-cols-3";
  return (
    <ol className={`grid gap-x-4 gap-y-8 sm:grid-cols-2 ${lgCols}`}>
      {steps.map((step, i) => (
        <li key={step.title} className="relative">
          {i < steps.length - 1 && (
            <span
              aria-hidden
              className="absolute -right-3 top-4 hidden text-coral lg:block"
            >
              <Icon name="arrow-right" size={16} />
            </span>
          )}
          <div className="flex items-center gap-3 lg:block">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-plum text-sm font-bold text-white">
              {i + 1}
            </span>
            <h3 className="text-sm font-bold text-plum lg:mt-4">{step.title}</h3>
          </div>
          <p className="mt-2 text-xs leading-relaxed text-slate">
            {step.description}
          </p>
        </li>
      ))}
    </ol>
  );
}
