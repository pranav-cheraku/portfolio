"use client";

import { useState } from "react";
import { T } from "@/lib/theme";

interface LeadershipCardProps {
  role: string;
  program: string;
  detail: string;
}

// Leadership card with hover lift animation
export default function LeadershipCard({ role, program, detail }: LeadershipCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: "18px 20px",
        background: T.surface,
        border: `1px solid ${T.border}`,
        borderTop: `2px solid ${T.accent}`,
        borderRadius: 16,
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
        transition: "transform 0.25s ease",
      }}
    >
      {/* Role title */}
      <div
        style={{
          fontFamily: "var(--font-playfair), serif",
          fontSize: 28,
          fontWeight: 400,
          fontStyle: "italic",
          color: T.accent,
          marginBottom: 16,
          lineHeight: 1,
        }}
      >
        {role}
      </div>

      {/* Program name */}
      <div
        style={{
          fontFamily: "var(--font-dm-sans), sans-serif",
          fontSize: 16,
          fontWeight: 500,
          color: T.heading,
          marginBottom: 8,
        }}
      >
        {program}
      </div>

      {/* One-liner detail */}
      <div
        style={{
          fontFamily: "var(--font-lora), serif",
          fontSize: 15,
          color: T.body,
          fontStyle: "italic",
        }}
      >
        {detail}
      </div>
    </div>
  );
}
