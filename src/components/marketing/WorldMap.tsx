import { corridorHub, corridors, type Corridor } from "@/data/corridors";

/**
 * Abstract, premium global-corridors visualization.
 *
 * A dot-matrix world silhouette (no flags, seals, or clutter) with the listed
 * markets placed at their approximate geographic positions and coral corridor
 * arcs emanating from the Sax Global hub in Florida.
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
const land: { cx: number; cy: number; rx: number; ry: number }[] = [
  { cx: 235, cy: 140, rx: 80, ry: 62 }, // North America
  { cx: 270, cy: 162, rx: 55, ry: 44 }, // SE US toward hub
  { cx: 250, cy: 205, rx: 40, ry: 36 }, // Mexico / Central America
  { cx: 352, cy: 285, rx: 46, ry: 46 }, // South America (north)
  { cx: 332, cy: 356, rx: 30, ry: 48 }, // South America (cone)
  { cx: 548, cy: 235, rx: 58, ry: 52 }, // Africa (north)
  { cx: 560, cy: 302, rx: 40, ry: 48 }, // Africa (south)
  { cx: 545, cy: 128, rx: 46, ry: 32 }, // Europe
  { cx: 730, cy: 155, rx: 135, ry: 82 }, // Asia
  { cx: 800, cy: 250, rx: 70, ry: 44 }, // South / SE Asia
  { cx: 868, cy: 335, rx: 52, ry: 33 }, // Australia
];

function isLand(x: number, y: number) {
  return land.some(
    (e) => ((x - e.cx) / e.rx) ** 2 + ((y - e.cy) / e.ry) ** 2 <= 1,
  );
}

function dots() {
  const out: { x: number; y: number }[] = [];
  for (let y = 30; y <= 478; y += 17) {
    for (let x = 16; x <= 984; x += 17) {
      if (isLand(x, y)) out.push({ x, y });
    }
  }
  return out;
}

// Manual label placement so names never collide.
const labelPos: Record<
  string,
  { dx: number; dy: number; anchor: "start" | "middle" | "end" }
> = {
  us: { dx: 14, dy: 4, anchor: "start" },
  canada: { dx: -12, dy: -10, anchor: "end" },
  mexico: { dx: -12, dy: 16, anchor: "end" },
  brazil: { dx: 14, dy: 4, anchor: "start" },
  paraguay: { dx: 12, dy: 18, anchor: "start" },
  africa: { dx: 14, dy: 4, anchor: "start" },
  multilateral: { dx: 0, dy: -16, anchor: "middle" },
};

function CorridorNode({
  c,
  tone,
}: {
  c: Corridor;
  tone: "light" | "plum";
}) {
  const { x, y } = project(c.lat, c.lon);
  const coral = "#e56a3a";
  const plum = tone === "plum" ? "#ffffff" : "#2b2440";
  const isActive = c.status === "Active focus";
  const isMulti = c.type === "multilateral";
  const lp = labelPos[c.id];
  const halo = tone === "plum" ? "#2b2440" : "#fbfaf7";

  return (
    <g>
      {/* outer ring */}
      <circle
        cx={x}
        cy={y}
        r={isActive ? 13 : 10}
        fill="none"
        stroke={isActive ? coral : plum}
        strokeOpacity={isActive ? 0.35 : 0.28}
        strokeWidth={1.5}
        strokeDasharray={c.status === "Targeted" ? "2 3" : undefined}
      />
      {isMulti ? (
        // multilateral marker: rotated square (diamond)
        <rect
          x={x - 5}
          y={y - 5}
          width={10}
          height={10}
          transform={`rotate(45 ${x} ${y})`}
          fill={coral}
        />
      ) : (
        <circle cx={x} cy={y} r={6} fill={isActive ? coral : plum} />
      )}
      <circle cx={x} cy={y} r={2.2} fill="#ffffff" />

      {/* label */}
      <text
        x={x + lp.dx}
        y={y + lp.dy}
        textAnchor={lp.anchor}
        style={{ paintOrder: "stroke" }}
        stroke={halo}
        strokeWidth={3.5}
        strokeLinejoin="round"
        fill={tone === "plum" ? "#ffffff" : "#2b2440"}
        fontSize={13}
        fontWeight={600}
      >
        {c.name}
      </text>
    </g>
  );
}

export function WorldMap({
  tone = "light",
  showLabels = true,
  className = "",
}: {
  tone?: "light" | "plum";
  showLabels?: boolean;
  className?: string;
}) {
  const grid = dots();
  const hub = project(corridorHub.lat, corridorHub.lon);
  const dotColor = tone === "plum" ? "#ffffff" : "#2b2440";

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
      </defs>

      {/* dotted world silhouette */}
      <g fill={dotColor} opacity={tone === "plum" ? 0.16 : 0.13}>
        {grid.map((d, i) => (
          <circle key={i} cx={d.x} cy={d.y} r={2} />
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
              strokeOpacity={c.status === "Active focus" ? 0.9 : 0.55}
              strokeDasharray={
                c.status === "In development" || c.status === "Targeted"
                  ? "4 5"
                  : undefined
              }
            />
          );
        })}
      </g>

      {/* hub */}
      <circle cx={hub.x} cy={hub.y} r={26} fill="url(#hub-glow)" />
      <circle cx={hub.x} cy={hub.y} r={5.5} fill="#e56a3a" />
      <circle cx={hub.x} cy={hub.y} r={2} fill="#ffffff" />

      {/* market nodes */}
      {showLabels
        ? corridors.map((c) => <CorridorNode key={c.id} c={c} tone={tone} />)
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
