"use client";

import { useState } from "react";
import { T } from "@/lib/theme";

interface Skill {
  name: string;
  context: string;
}

interface SkillSectionProps {
  number: string;
  label: string;
  accent: string;
  skills: Skill[];
}

export default function SkillSection({ number, label, accent, skills }: SkillSectionProps) {
  const [hovered, setHovered] = useState<string | null>(null);
  const activeSkill = skills.find((s) => s.name === hovered);

  return (
    <div
      className="skill-section"
      style={{
        display: "grid",
        gridTemplateColumns: "140px 1fr",
        gap: 48,
        paddingTop: 40,
        paddingBottom: 40,
        borderTop: `1px solid ${T.border}`,
      }}
    >
      {/* Left: number + label */}
      <div style={{ paddingTop: 4 }}>
        <div
          style={{
            fontFamily: "var(--font-playfair), serif",
            fontSize: 44,
            color: accent,
            lineHeight: 1,
            opacity: hovered ? 0.75 : 0.2,
            transition: "opacity 0.35s ease",
            userSelect: "none",
          }}
        >
          {number}
        </div>
        <div
          style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: 2.5,
            textTransform: "uppercase",
            color: hovered ? accent : T.muted,
            marginTop: 10,
            transition: "color 0.35s ease",
          }}
        >
          {label}
        </div>
      </div>

      {/* Right: chips + context panel */}
      <div>
        {/* Chips */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {skills.map((skill) => {
            const isActive = hovered === skill.name;
            return (
              <span
                key={skill.name}
                onMouseEnter={() => setHovered(skill.name)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: 14,
                  fontWeight: 500,
                  color: isActive ? accent : T.body,
                  background: isActive
                    ? accent.replace(")", "-tint-hover)")
                    : accent.replace(")", "-tint)"),
                  border: `1px solid ${isActive ? accent : accent.replace(")", "-tint-hover)")}`,
                  borderRadius: 999,
                  padding: "7px 18px",
                  cursor: "default",
                  transform: isActive ? "translateY(-2px)" : "translateY(0)",
                  transition:
                    "color 0.2s ease, background 0.2s ease, border-color 0.2s ease, transform 0.25s cubic-bezier(0.22,1,0.36,1)",
                }}
              >
                {skill.name}
              </span>
            );
          })}
        </div>

        {/* Context panel — smooth expand via grid trick */}
        <div
          style={{
            display: "grid",
            gridTemplateRows: hovered ? "1fr" : "0fr",
            transition: "grid-template-rows 0.35s cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          <div style={{ overflow: "hidden" }}>
            <div
              style={{
                marginTop: 18,
                paddingTop: 14,
                borderTop: `1px solid ${T.border}`,
                display: "flex",
                alignItems: "baseline",
                gap: 10,
                flexWrap: "wrap",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: 13,
                  fontWeight: 600,
                  color: accent,
                  whiteSpace: "nowrap",
                }}
              >
                {hovered}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-lora), serif",
                  fontSize: 14,
                  color: T.muted,
                  fontStyle: "italic",
                  lineHeight: 1.65,
                }}
              >
                {activeSkill?.context}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
