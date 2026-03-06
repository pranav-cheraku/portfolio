"use client";

import { useState } from "react";

interface SkillTagProps {
  tag: string;
  accent: string;
}

export default function SkillTag({ tag, accent }: SkillTagProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: "var(--font-dm-sans), sans-serif",
        fontSize: 13,
        color: accent,
        background: accent.replace(")", "-tint)"),
        border: `1px solid ${accent.replace(")", "-tint-hover)")}`,
        borderRadius: 999,
        padding: "4px 12px",
        display: "inline-block",
        transform: hovered ? "translateY(-1px) scale(1.015)" : "translateY(0) scale(1)",
        filter: hovered ? "brightness(1.08)" : "none",
        boxShadow: hovered ? "0 2px 8px rgba(0,0,0,0.12)" : "none",
        transition: "transform 0.25s cubic-bezier(0.22,1,0.36,1), filter 0.25s ease, box-shadow 0.25s ease",
        cursor: "default",
      }}
    >
      {tag}
    </span>
  );
}
