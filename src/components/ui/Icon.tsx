import type { SVGProps } from "react";

export type IconName =
  | "target"
  | "shield"
  | "checklist"
  | "route"
  | "memo"
  | "award"
  | "check"
  | "arrow-right"
  | "globe"
  | "spark"
  | "layers"
  | "passport"
  | "compass"
  | "flag";

const paths: Record<IconName, React.ReactNode> = {
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 4.5 6v5.5c0 4.6 3.1 7.6 7.5 9.5 4.4-1.9 7.5-4.9 7.5-9.5V6Z" />
      <path d="m9 12 2 2 4-4.2" />
    </>
  ),
  checklist: (
    <>
      <path d="M9 5h10M9 12h10M9 19h10" />
      <path d="m3.5 4.6 1.2 1.2 2-2.2M3.5 11.6l1.2 1.2 2-2.2M3.5 18.6l1.2 1.2 2-2.2" />
    </>
  ),
  route: (
    <>
      <circle cx="6" cy="18.5" r="2.2" />
      <circle cx="18" cy="5.5" r="2.2" />
      <path d="M8.2 18.5h6.3a3.5 3.5 0 0 0 0-7H9.5a3.5 3.5 0 0 1 0-7h6.3" />
    </>
  ),
  memo: (
    <>
      <path d="M6 3h7l5 5v13H6Z" />
      <path d="M13 3v5h5" />
      <path d="M9 13h6M9 17h4" />
    </>
  ),
  award: (
    <>
      <circle cx="12" cy="9" r="5.5" />
      <path d="m9 13.5-1.6 7L12 18l4.6 2.5-1.6-7" />
      <path d="m10 9 1.4 1.4L14.5 7.5" />
    </>
  ),
  check: <path d="m4.5 12.5 4.5 4.5L19.5 6.5" />,
  "arrow-right": (
    <>
      <path d="M4 12h15" />
      <path d="m13 6 6 6-6 6" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.6 2.4 4 5.6 4 9s-1.4 6.6-4 9c-2.6-2.4-4-5.6-4-9s1.4-6.6 4-9Z" />
    </>
  ),
  spark: (
    <path d="M12 3c.5 4 1.5 5 5.5 6-4 1-5 2-5.5 6-.5-4-1.5-5-5.5-6 4-1 5-2 5.5-6Z" />
  ),
  layers: (
    <>
      <path d="m12 3 9 5-9 5-9-5Z" />
      <path d="m3 13 9 5 9-5" />
    </>
  ),
  passport: (
    <>
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <circle cx="12" cy="10" r="2.4" />
      <path d="M9 15.5c.8-1.2 4.2-1.2 6 0" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.5 8.5-2 5-5 2 2-5Z" />
    </>
  ),
  flag: (
    <>
      <path d="M6 21V4" />
      <path d="M6 4.5c3-1.5 6 1.5 9 0v7c-3 1.5-6-1.5-9 0" />
    </>
  ),
};

export function Icon({
  name,
  size = 24,
  ...props
}: { name: IconName; size?: number } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
