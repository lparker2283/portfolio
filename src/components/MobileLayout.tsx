"use client";

import { PROJECTS } from "./data";

const EXPERIENCE = [
  "Youngest PM at TE Connectivity · $25M aerospace portfolio",
  "Exponent · 4th hire → 500K+ learners",
  "Shopify Academy · Senior Instructional Designer",
];

const SKILLS = [
  "Product Strategy",
  "0→1 Builds",
  "Curriculum Design",
  "Enablement",
  "Go-to-Market",
  "Systems Thinking",
];

const STATUS_COLORS: Record<string, string> = {
  active: "#6db87a",
  dev: "#9b8ec4",
  ongoing: "#c9a96e",
};

export default function MobileLayout() {
  return (
    <div style={{ padding: "48px 24px 64px", maxWidth: 480, margin: "0 auto" }}>
      {/* Identity */}
      <div style={{ marginBottom: 40 }}>
        <h1
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "2rem",
            fontWeight: 500,
            color: "#e8e8e0",
            marginBottom: 6,
          }}
        >
          Lindsey Parker
        </h1>
        <p
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "0.9rem",
            fontStyle: "italic",
            color: "#7a7a72",
            marginBottom: 20,
          }}
        >
          Product strategist. Curriculum architect. Systems thinker.
        </p>

        {EXPERIENCE.map((line, i) => (
          <p
            key={i}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.62rem",
              color: "#5a5a54",
              lineHeight: 2,
              letterSpacing: "0.02em",
            }}
          >
            {line}
          </p>
        ))}

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 5,
            marginTop: 16,
            marginBottom: 16,
          }}
        >
          {SKILLS.map((skill) => (
            <span
              key={skill}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.55rem",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "#6b6b63",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 2,
                padding: "3px 7px",
              }}
            >
              {skill}
            </span>
          ))}
        </div>

        <div style={{ display: "flex", gap: 16 }}>
          {[
            { label: "LinkedIn", href: "https://linkedin.com/in/lindsey-parker" },
            { label: "Email", href: "mailto:hello@lindseyparker.com" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.6rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#5a5a54",
                textDecoration: "none",
              }}
            >
              {label}
            </a>
          ))}
        </div>
      </div>

      {/* Project cards */}
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {PROJECTS.map((project) => {
          const { panel, colors } = project;
          const statusColor = STATUS_COLORS[panel.statusVariant];
          return (
            <div
              key={project.id}
              style={{
                borderLeft: `3px solid ${colors.primary}`,
                paddingLeft: 20,
                paddingTop: 16,
                paddingBottom: 16,
                background: colors.panelBg,
                borderRadius: "0 4px 4px 0",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.55rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: colors.primary,
                  marginBottom: 6,
                  opacity: 0.85,
                }}
              >
                {panel.category}
              </p>
              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.1rem",
                  fontWeight: 500,
                  color: "#e8e8e0",
                  marginBottom: 8,
                }}
              >
                {panel.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "0.85rem",
                  color: "#7a7a72",
                  lineHeight: 1.65,
                  marginBottom: 12,
                }}
              >
                {panel.description}
              </p>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.58rem",
                    letterSpacing: "0.06em",
                    color: statusColor,
                    border: `1px solid ${statusColor}`,
                    borderRadius: 2,
                    padding: "2px 7px",
                    opacity: 0.85,
                  }}
                >
                  {panel.status}
                </span>
                {panel.links[0] && (
                  <a
                    href={panel.links[0].href}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.6rem",
                      color: colors.primary,
                      textDecoration: "none",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {panel.links[0].label}
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
