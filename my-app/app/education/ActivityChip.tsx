"use client";

import { useState } from "react";
import { T } from "@/lib/theme";

interface ActivityChipProps {
  name: string;
}

// Activity chip with hover lift and border highlight animation
export default function ActivityChip({ name }: ActivityChipProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: "var(--font-dm-sans), sans-serif",
        fontSize: 14,
        color: hovered ? T.heading : T.body,
        padding: "8px 16px",
        background: hovered ? "var(--color-surface)" : T.surface,
        border: `1px solid ${hovered ? T.accent : T.border}`,
        borderRadius: 8,
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
        transition: "background 0.25s ease, transform 0.25s ease, border-color 0.25s ease, color 0.25s ease",
        cursor: "default",
      }}
    >
      {name}
    </div>
  );
}
