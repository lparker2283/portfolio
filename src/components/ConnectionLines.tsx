"use client";

import { CENTER, PROJECTS, STARS } from "./data";

interface Props {
  selected: string | null;
}

export default function ConnectionLines({ selected }: Props) {
  // Hub-to-node connections
  const hubLines = PROJECTS.map((p) => ({
    id: `hub-${p.id}`,
    x1: CENTER.x,
    y1: CENTER.y,
    x2: p.x,
    y2: p.y,
    opacity: selected === p.id ? 0.55 : 0.28,
    width: 0.18,
    dasharray: "1.6 1.1",
    delay: 0,
  }));

  // Cross-connections between nodes (faint)
  const crossLines = [
    { a: PROJECTS[0], b: PROJECTS[1] },
    { a: PROJECTS[0], b: PROJECTS[2] },
    { a: PROJECTS[1], b: PROJECTS[2] },
  ].map(({ a, b }, i) => ({
    id: `cross-${i}`,
    x1: a.x,
    y1: a.y,
    x2: b.x,
    y2: b.y,
    opacity:
      selected === a.id || selected === b.id ? 0.2 : 0.09,
    width: 0.1,
    dasharray: "0.5 1.8",
    delay: 0.6 + i * 0.2,
  }));

  const allLines = [...hubLines, ...crossLines];

  return (
    <svg
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 1,
      }}
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      {/* Background stars */}
      {STARS.map((s, i) => (
        <circle
          key={i}
          cx={s.x}
          cy={s.y}
          r={0.12}
          fill="white"
          opacity={0.18 + (i % 3) * 0.07}
        />
      ))}

      {/* Radial glow from center */}
      <defs>
        <radialGradient id="center-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="white" stopOpacity="0.04" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse
        cx={CENTER.x}
        cy={CENTER.y}
        rx={28}
        ry={22}
        fill="url(#center-glow)"
      />

      {/* Connection lines */}
      {allLines.map((line) => (
        <line
          key={line.id}
          x1={line.x1}
          y1={line.y1}
          x2={line.x2}
          y2={line.y2}
          stroke="white"
          strokeWidth={line.width}
          strokeDasharray={line.dasharray}
          opacity={line.opacity}
          style={{
            transition: "opacity 0.4s ease",
          }}
        />
      ))}
    </svg>
  );
}
