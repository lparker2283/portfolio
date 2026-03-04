"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PROJECTS, type Project } from "./data";

interface Props {
  selected: string | null;
  onClose: () => void;
}

const STATUS_COLORS: Record<string, string> = {
  active: "#6db87a",
  dev: "#9b8ec4",
  ongoing: "#c9a96e",
};

function Panel({ project, onClose }: { project: Project; onClose: () => void }) {
  const { panel, colors } = project;
  const statusColor = STATUS_COLORS[panel.statusVariant];

  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.4)",
          zIndex: 40,
        }}
      />

      {/* Panel */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 32, stiffness: 320, mass: 0.8 }}
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          height: "100%",
          width: 400,
          background: `linear-gradient(160deg, ${colors.panelBg} 0%, rgba(13,13,15,0.97) 40%)`,
          borderLeft: `1px solid ${colors.border}`,
          zIndex: 50,
          display: "flex",
          flexDirection: "column",
          padding: "40px 36px",
          overflowY: "auto",
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: 20,
            right: 20,
            background: "none",
            border: "none",
            color: "#5a5a54",
            cursor: "pointer",
            fontFamily: "var(--font-mono)",
            fontSize: "0.8rem",
            letterSpacing: "0.05em",
            padding: "4px 8px",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) =>
            ((e.target as HTMLElement).style.color = "#a0a098")
          }
          onMouseLeave={(e) =>
            ((e.target as HTMLElement).style.color = "#5a5a54")
          }
        >
          ✕
        </button>

        {/* Category */}
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.68rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: colors.primary,
            marginBottom: 12,
            opacity: 0.85,
          }}
        >
          {panel.category}
        </p>

        {/* Title */}
        <h2
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "1.85rem",
            fontWeight: 500,
            color: "#e8e8e0",
            lineHeight: 1.15,
            marginBottom: 24,
          }}
        >
          {panel.title}
        </h2>

        {/* Divider */}
        <div
          style={{
            height: 1,
            background: colors.border,
            marginBottom: 24,
          }}
        />

        {/* Description */}
        <p
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "1.05rem",
            color: "#a0a098",
            lineHeight: 1.75,
            marginBottom: 28,
          }}
        >
          {panel.description}
        </p>

        {/* Metadata */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 32 }}>
          {panel.date && (
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.68rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#5a5a54",
                }}
              >
                Date
              </span>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  color: "#a0a098",
                }}
              >
                {panel.date}
              </span>
            </div>
          )}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.68rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#5a5a54",
              }}
            >
              Role
            </span>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                color: "#a0a098",
              }}
            >
              {panel.role}
            </span>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.68rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#5a5a54",
              }}
            >
              Status
            </span>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.7rem",
                letterSpacing: "0.06em",
                color: statusColor,
                border: `1px solid ${statusColor}`,
                borderRadius: 2,
                padding: "2px 8px",
                opacity: 0.9,
              }}
            >
              {panel.status}
            </span>
          </div>
        </div>

        {/* Links */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {panel.links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                letterSpacing: "0.06em",
                color: colors.primary,
                textDecoration: "none",
                borderBottom: `1px solid ${colors.border}`,
                paddingBottom: 8,
                transition: "opacity 0.2s",
                display: "block",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.opacity = "0.7")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.opacity = "1")
              }
            >
              {label}
            </a>
          ))}
        </div>
      </motion.div>
    </>
  );
}

export default function DetailPanel({ selected, onClose }: Props) {
  const project = PROJECTS.find((p) => p.id === selected) ?? null;

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <AnimatePresence>
      {project && <Panel key={project.id} project={project} onClose={onClose} />}
    </AnimatePresence>
  );
}
