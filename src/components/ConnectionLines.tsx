"use client";

import { CENTER, PROJECTS, STARS } from "./data";

// Cross-connections only between the 3 main project nodes
const MAIN_PROJECT_IDS = ["corpus", "hod", "stone"];

export default function ConnectionLines() {
  const mainProjects = PROJECTS.filter((p) => MAIN_PROJECT_IDS.includes(p.id));

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
      <defs>
        <radialGradient id="center-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="white" stopOpacity="0.04" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>

        {/*
          Hub mask: white everywhere EXCEPT an ellipse over the center text area.
          Lines inside the ellipse become invisible, so they appear to start cleanly
          at its edge rather than cutting through the text.
          The ellipse covers the full hub content area — shifted up (cy=49) and
          taller (ry=22) so lines to Corpus and TE Connectivity don't cut through
          the name/tagline/experience text above the SVG center point.
        */}
        <mask id="hub-mask">
          <rect width="100" height="100" fill="white" />
          <ellipse cx={CENTER.x} cy="49" rx="18" ry="22" fill="black" />
        </mask>
      </defs>

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

      {/* Radial glow — rendered outside the mask so it stays visible */}
      <ellipse
        cx={CENTER.x}
        cy={CENTER.y}
        rx={28}
        ry={22}
        fill="url(#center-glow)"
      />

      {/* All hub → node lines, masked to avoid center text */}
      <g mask="url(#hub-mask)">
        {PROJECTS.map((p) => (
          <line
            key={p.id}
            x1={CENTER.x} y1={CENTER.y}
            x2={p.x} y2={p.y}
            stroke={p.colors.primary}
            strokeWidth={0.15}
            strokeDasharray="1.4 1.2"
            opacity={0.2}
          />
        ))}

        {/* Faint cross-connections between the 3 main project nodes */}
        {[
          [mainProjects[0], mainProjects[1]],
          [mainProjects[1], mainProjects[2]],
          [mainProjects[0], mainProjects[2]],
        ].map(([a, b], i) => (
          <line
            key={i}
            x1={a.x} y1={a.y}
            x2={b.x} y2={b.y}
            stroke="white"
            strokeWidth={0.1}
            strokeDasharray="0.5 1.8"
            opacity={0.08}
          />
        ))}
      </g>
    </svg>
  );
}
