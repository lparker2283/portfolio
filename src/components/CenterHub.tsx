"use client";

import { CENTER } from "./data";

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

export default function CenterHub() {
  return (
    <div
      style={{
        position: "absolute",
        left: `${CENTER.x}%`,
        top: `${CENTER.y}%`,
        transform: "translate(-50%, -50%)",
        zIndex: 10,
        width: 300,
        textAlign: "center",
      }}
    >
      {/* Center dot */}
      <div
        style={{
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: "#e8e8e0",
          margin: "0 auto 20px",
          boxShadow: "0 0 12px rgba(232,232,224,0.5)",
        }}
      />

      {/* Name */}
      <h1
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "1.75rem",
          fontWeight: 500,
          color: "#e8e8e0",
          letterSpacing: "-0.01em",
          lineHeight: 1.1,
        }}
      >
        Lindsey Parker
      </h1>

      {/* Tagline */}
      <p
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "0.8rem",
          fontStyle: "italic",
          color: "#7a7a72",
          marginTop: 6,
          lineHeight: 1.5,
        }}
      >
        Product strategist. Curriculum architect. Systems thinker.
      </p>

      {/* Divider */}
      <div
        style={{
          width: 40,
          height: 1,
          background: "rgba(255,255,255,0.1)",
          margin: "14px auto",
        }}
      />

      {/* Experience */}
      <div style={{ marginBottom: 12 }}>
        {EXPERIENCE.map((line, i) => (
          <p
            key={i}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.58rem",
              color: "#5a5a54",
              lineHeight: 1.9,
              letterSpacing: "0.02em",
            }}
          >
            {line}
          </p>
        ))}
      </div>

      {/* Skill pills */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 5,
          justifyContent: "center",
          marginBottom: 14,
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

      {/* Contact links */}
      <div style={{ display: "flex", gap: 18, justifyContent: "center" }}>
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
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.color = "#a0a098")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.color = "#5a5a54")
            }
          >
            {label}
          </a>
        ))}
      </div>
    </div>
  );
}
