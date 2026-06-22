import { corridorHub, corridors, type Corridor } from "@/data/corridors";

/**
 * Abstract, premium global-corridors visualization.
 *
 * A dot-matrix world silhouette (no flags, seals, or clutter) with the listed
 * markets placed at their approximate geographic positions and coral corridor
 * arcs emanating from the Sax Global hub in Florida.
 *
 * The focus continents (the Americas and Africa) carry a soft wash and brighter
 * dots so the regions GovDecision works in read clearly, while Europe, Asia, and
 * Australia stay quietly in the background for context. It is a strategy visual,
 * not a GIS map.
 */

const W = 1000;
const H = 500;

// Equirectangular projection (decimal degrees -> canvas units).
function project(lat: number, lon: number) {
  return {
    x: ((lon + 180) / 360) * W,
    y: ((90 - lat) / 180) * H,
  };
}

// Rough continent ellipses used to mask the dot grid into a world silhouette.
// `focus` marks the regions GovDecision actively works (Americas + Africa).
type Land = { cx: number; cy: number; rx: number; ry: number; focus: boolean };
const land: Land[] = [
  { cx: 235, cy: 140, rx: 82, ry: 64, focus: true }, // North America
  { cx: 272, cy: 165, rx: 54, ry: 42, focus: true }, // SE US toward hub
  { cx: 248, cy: 206, rx: 42, ry: 38, focus: true }, // Mexico / Central America
  { cx: 352, cy: 285, rx: 48, ry: 46, focus: true }, // South America (north)
  { cx: 334, cy: 358, rx: 30, ry: 50, focus: true }, // South America (cone)
  { cx: 548, cy: 232, rx: 60, ry: 54, focus: true }, // Africa (north)
  { cx: 560, cy: 304, rx: 42, ry: 50, focus: true }, // Africa (south)
  { cx: 545, cy: 128, rx: 46, ry: 32, focus: false }, // Europe
  { cx: 730, cy: 155, rx: 135, ry: 82, focus: false }, // Asia
  { cx: 800, cy: 250, rx: 70, ry: 44, focus: false }, // South / SE Asia
  { cx: 868, cy: 335, rx: 52, ry: 33, focus: false }, // Australia
];

function inEllipse(x: number, y: number, e: Land) {
  return ((x - e.cx) / e.rx) ** 2 + ((y - e.cy) / e.ry) ** 2 <= 1;
}

// Soft, low-opacity wash blobs that make the focus continents evident without
// turning the panel into a literal map.
const regionWash: { cx: number; cy: number; rx: number; ry: number }[] = [
  { cx: 248, cy: 152, rx: 104, ry: 88 }, // North & Central America
  { cx: 346, cy: 314, rx: 60, ry: 94 }, // South America
  { cx: 553, cy: 268, rx: 68, ry: 96 }, // Africa
];

function dots() {
  const focus: { x: number; y: number }[] = [];
  const context: { x: number; y: number }[] = [];
  for (let y = 30; y <= 478; y += 17) {
    for (let x = 16; x <= 984; x += 17) {
      const hit = land.find((e) => inEllipse(x, y, e));
      if (!hit) continue;
      (hit.focus ? focus : context).push({ x, y });
    }
  }
  return { focus, context };
}

// Manual label placement so names never collide. `lines` overrides the rendered
// text (used to keep long names short on the map).
const labelPos: Record<
  string,
  { dx: number; dy: number; anchor: "start" | "middle" | "end"; lines?: string[] }
> = {
  canada: { dx: 0, dy: -15, anchor: "middle" },
  us: { dx: 16, dy: 3, anchor: "start" },
  mexico: { dx: -14, dy: 16, anchor: "end" },
  brazil: { dx: 15, dy: 4, anchor: "start" },
  paraguay: { dx: -14, dy: 16, anchor: "end" },
  africa: { dx: 16, dy: 4, anchor: "start", lines: ["African markets"] },
  multilateral: { dx: 0, dy: 26, anchor: "middle", lines: ["UN & World Bank"] },
};

function CorridorNode({
  c,
  tone,
  labels,
}: {
  c: Corridor;
  tone: "light" | "plum";
  labels?: Record<string, string[]>;
}) {
  const { x, y } = project(c.lat, c.lon);
  const coral = "#e56a3a";
  const neutral = tone === "plum" ? "#ffffff" : "#2b2440";
  const halo = tone === "plum" ? "#2b2440" : "#fbfaf7";
  const isActive = c.status === "Active focus";
  const isMulti = c.type === "multilateral";
  const lp = labelPos[c.id];
  // Localized compact labels override the default name when provided.
  const lines = labels?.[c.id] ?? lp.lines ?? [c.name];

  return (
    <g>
      {isActive ? (
        // Active focus: clean, solid coral disc (the ringed marker is the hub).
        <>
          <circle cx={x} cy={y} r={7} fill={coral} />
          <circle cx={x} cy={y} r={2.4} fill="#ffffff" />
        </>
      ) : isMulti ? (
        // Multilateral: coral diamond inside a ring — a distinct shape.
        <>
          <circle
            cx={x}
            cy={y}
            r={11}
            fill="none"
            stroke={coral}
            strokeOpacity={0.32}
            strokeWidth={1.5}
          />
          <rect
            x={x - 5}
            y={y - 5}
            width={10}
            height={10}
            transform={`rotate(45 ${x} ${y})`}
            fill={coral}
          />
          <circle cx={x} cy={y} r={1.8} fill="#ffffff" />
        </>
      ) : (
        // In development (and targeted): hollow outline marker.
        <>
          <circle
            cx={x}
            cy={y}
            r={9.5}
            fill="none"
            stroke={neutral}
            strokeOpacity={0.55}
            strokeWidth={1.6}
          />
          <circle cx={x} cy={y} r={3} fill={neutral} />
        </>
      )}

      {/* label */}
      <text
        x={x + lp.dx}
        y={y + lp.dy}
        textAnchor={lp.anchor}
        style={{ paintOrder: "stroke" }}
        stroke={halo}
        strokeWidth={4}
        strokeLinejoin="round"
        fill={neutral}
        fontSize={13}
        fontWeight={600}
      >
        {lines.map((line, i) => (
          <tspan key={line} x={x + lp.dx} dy={i === 0 ? 0 : 15}>
            {line}
          </tspan>
        ))}
      </text>
    </g>
  );
}

export function WorldMap({
  tone = "light",
  showLabels = true,
  className = "",
  labels,
}: {
  tone?: "light" | "plum";
  showLabels?: boolean;
  className?: string;
  /** Localized compact labels per corridor id; falls back to the default name. */
  labels?: Record<string, string[]>;
}) {
  const { focus, context } = dots();
  const hub = project(corridorHub.lat, corridorHub.lon);
  const dotColor = tone === "plum" ? "#ffffff" : "#2b2440";
  const washId = tone === "plum" ? "region-wash-plum" : "region-wash-light";

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className={`h-auto w-full ${className}`}
      role="img"
      aria-label="Abstract world map showing GovDecision government business corridors across the Americas, selected African markets, and multilateral institutions."
    >
      <defs>
        <linearGradient id="corridor-grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#2b2440" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#e56a3a" stopOpacity="0.55" />
        </linearGradient>
        <radialGradient id="hub-glow">
          <stop offset="0%" stopColor="#e56a3a" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#e56a3a" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="region-wash-plum">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.07" />
          <stop offset="70%" stopColor="#ffffff" stopOpacity="0.03" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="region-wash-light">
          <stop offset="0%" stopColor="#2b2440" stopOpacity="0.06" />
          <stop offset="70%" stopColor="#2b2440" stopOpacity="0.025" />
          <stop offset="100%" stopColor="#2b2440" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* soft wash behind the focus continents */}
      <g>
        {regionWash.map((r, i) => (
          <ellipse
            key={i}
            cx={r.cx}
            cy={r.cy}
            rx={r.rx}
            ry={r.ry}
            fill={`url(#${washId})`}
          />
        ))}
      </g>

      {/* dotted world silhouette — context regions sit quietly behind focus */}
      <g fill={dotColor} opacity={tone === "plum" ? 0.14 : 0.09}>
        {context.map((d, i) => (
          <circle key={i} cx={d.x} cy={d.y} r={1.7} />
        ))}
      </g>
      <g fill={dotColor} opacity={tone === "plum" ? 0.34 : 0.2}>
        {focus.map((d, i) => (
          <circle key={i} cx={d.x} cy={d.y} r={2.1} />
        ))}
      </g>

      {/* corridor arcs from the hub */}
      <g fill="none" stroke="url(#corridor-grad)">
        {corridors.map((c) => {
          const p = project(c.lat, c.lon);
          const mx = (hub.x + p.x) / 2;
          const my =
            (hub.y + p.y) / 2 - Math.hypot(p.x - hub.x, p.y - hub.y) * 0.22;
          return (
            <path
              key={c.id}
              d={`M ${hub.x} ${hub.y} Q ${mx} ${my} ${p.x} ${p.y}`}
              strokeWidth={c.status === "Active focus" ? 2 : 1.4}
              strokeOpacity={c.status === "Active focus" ? 0.9 : 0.5}
              strokeDasharray={c.status === "Active focus" ? undefined : "4 5"}
            />
          );
        })}
      </g>

      {/* hub */}
      <circle cx={hub.x} cy={hub.y} r={28} fill="url(#hub-glow)" />
      <circle
        cx={hub.x}
        cy={hub.y}
        r={10}
        fill="none"
        stroke="#e56a3a"
        strokeOpacity={0.5}
        strokeWidth={1.5}
      />
      <circle cx={hub.x} cy={hub.y} r={5.5} fill="#e56a3a" />
      <circle cx={hub.x} cy={hub.y} r={2} fill="#ffffff" />

      {/* market nodes */}
      {showLabels
        ? corridors.map((c) => (
            <CorridorNode key={c.id} c={c} tone={tone} labels={labels} />
          ))
        : corridors.map((c) => {
            const p = project(c.lat, c.lon);
            return (
              <circle
                key={c.id}
                cx={p.x}
                cy={p.y}
                r={5.5}
                fill={
                  c.status === "Active focus"
                    ? "#e56a3a"
                    : tone === "plum"
                      ? "#ffffff"
                      : "#2b2440"
                }
              />
            );
          })}
    </svg>
  );
}
