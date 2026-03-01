"use client";

import { useState, useCallback } from "react";
import CenterHub from "./CenterHub";
import ProjectNode from "./ProjectNode";
import ConnectionLines from "./ConnectionLines";
import DetailPanel from "./DetailPanel";
import MobileLayout from "./MobileLayout";
import { PROJECTS } from "./data";

export default function SpatialLayout() {
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = useCallback((id: string) => {
    setSelected((prev) => (prev === id ? null : id));
  }, []);

  const handleClose = useCallback(() => {
    setSelected(null);
  }, []);

  return (
    <>
      {/* Grain overlay */}
      <div className="grain-overlay" />

      {/* Desktop spatial view */}
      <div
        className="hidden md:block"
        style={{
          position: "relative",
          width: "100vw",
          height: "100vh",
          background: "#0d0d0f",
          overflow: "hidden",
        }}
      >
        {/* SVG connection lines (behind everything) */}
        <ConnectionLines selected={selected} />

        {/* Center hub */}
        <CenterHub />

        {/* Project nodes */}
        {PROJECTS.map((project) => (
          <ProjectNode
            key={project.id}
            project={project}
            isSelected={selected === project.id}
            onClick={() => handleSelect(project.id)}
          />
        ))}

        {/* Detail panel */}
        <DetailPanel selected={selected} onClose={handleClose} />
      </div>

      {/* Mobile stacked view */}
      <div
        className="block md:hidden"
        style={{ background: "#0d0d0f", minHeight: "100vh" }}
      >
        <MobileLayout />
      </div>
    </>
  );
}
