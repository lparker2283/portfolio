"use client";

import { useState } from "react";
import { type Project } from "./data";

interface Props {
  project: Project;
  isSelected: boolean;
  onClick: () => void;
}

const NODE_SIZE = 56;

export default function ProjectNode({ project, isSelected, onClick }: Props) {
  const [hovered, setHovered] = useState(false);
  const { label, x, y, floatClass, colors } = project;

  const active = hovered || isSelected;

  return (
    <div
      style={{
        position: "absolute",
        left: `${x}%`,
        top: `${y}%`,
        transform: "translate(-50%, -50%)",
        zIndex: 10,
        cursor: "pointer",
      }}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={floatClass}>
        {/* Node circle container */}
        <div
          style={{
            position: "relative",
            width: NODE_SIZE,
            height: NODE_SIZE,
            margin: "0 auto",
          }}
        >
          {/* Glow background */}
          <div
            style={{
              position: "absolute",
              inset: 10,
              borderRadius: "50%",
              background: colors.glow,
              filter: "blur(10px)",
              opacity: active ? 1.5 : 0.8,
              transition: "opacity 0.3s ease",
            }}
          />

          {/* Outer ring */}
          <div
            style={{
              position: "absolute",
              inset: 6,
              borderRadius: "50%",
              border: `1px solid ${colors.border}`,
              opacity: active ? 1 : 0.6,
              transition: "opacity 0.3s ease, border-color 0.3s ease",
              borderColor: active ? colors.primary : colors.border,
            }}
          />

          {/* Pulse ring (shown on hover/active) */}
          {active && (
            <div
              className="pulse-ring"
              style={{
                color: colors.primary,
                inset: 6,
                position: "absolute",
                top: "50%",
                left: "50%",
                width: `${NODE_SIZE - 12}px`,
                height: `${NODE_SIZE - 12}px`,
              }}
            />
          )}

          {/* Center dot */}
          <div
            style={{
              position: "absolute",
              inset: 24,
              borderRadius: "50%",
              background: colors.primary,
              opacity: active ? 1 : 0.7,
              transition: "opacity 0.3s ease",
              boxShadow: active
                ? `0 0 8px ${colors.primary}`
                : "none",
            }}
          />
        </div>

        {/* Label */}
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.6rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: active ? "#e8e8e0" : colors.primary,
            textAlign: "center",
            marginTop: 8,
            transition: "color 0.3s ease",
            whiteSpace: "nowrap",
            opacity: active ? 1 : 0.7,
          }}
        >
          {label}
        </p>
      </div>
    </div>
  );
}
