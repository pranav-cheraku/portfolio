"use client";

import { useState } from "react";

interface CourseChipProps {
  name: string;
  color: string; // Accent color - drives the left border, text, and background tint
}

// Course chip with a left accent bar and hover animation (lift + background brighten)
export default function CourseChip({ name, color }: CourseChipProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: "var(--font-dm-sans), sans-serif",
        fontSize: 13,
        color: color,
        padding: "6px 14px",
        background: hovered ? `${color}18` : `${color}08`,
        borderLeft: `3px solid ${color}`,
        borderRadius: 0,
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
        transition: "background 0.25s ease, transform 0.25s ease",
        cursor: "default",
      }}
    >
      {name}
    </span>
  );
}
