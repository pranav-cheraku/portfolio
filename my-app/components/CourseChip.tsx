"use client";

import { useState } from "react";

interface CourseChipProps {
  name: string;
  variant: "accent2" | "accent3";
}

// Course chip with a left accent bar and hover animation (lift + background brighten)
export default function CourseChip({ name, variant }: CourseChipProps) {
  const [hovered, setHovered] = useState(false);

  const color = `var(--color-${variant})`;
  const bg = hovered ? `var(--color-${variant}-tint-hover)` : `var(--color-${variant}-tint)`;

  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: "var(--font-dm-sans), sans-serif",
        fontSize: 13,
        color: color,
        padding: "6px 14px",
        background: bg,
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
