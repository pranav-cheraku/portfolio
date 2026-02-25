"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { T } from "@/lib/theme";

interface ResearchEntryProps {
  lab: string;
  field: string;
  professor: string;
  href: string;
}

// Single research entry with hover lift animation
export default function ResearchEntry({ lab, field, professor, href }: ResearchEntryProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        paddingLeft: 20,
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
        transition: "transform 0.25s ease",
      }}
    >
      {/* Left accent line */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: 2,
          background: `linear-gradient(to bottom, ${T.accent3}, ${T.accent2})`,
        }}
      />

      {/* Role */}
      <div
        style={{
          fontFamily: "var(--font-dm-sans), sans-serif",
          fontSize: 13,
          color: T.muted,
          letterSpacing: 1.5,
          textTransform: "uppercase",
          marginBottom: 8,
        }}
      >
        Undergraduate Research Assistant
      </div>

      {/* Lab name — clickable link */}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          fontFamily: "var(--font-playfair), serif",
          fontSize: 18,
          fontWeight: 400,
          color: T.heading,
          textDecoration: "none",
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          marginBottom: 6,
        }}
      >
        {lab} <ExternalLink size={14} color={T.accent3} />
      </a>

      {/* Full lab name */}
      <div
        style={{
          fontFamily: "var(--font-lora), serif",
          fontSize: 16,
          color: T.body,
          marginBottom: 6,
        }}
      >
        {field}
      </div>

      {/* Professor */}
      <div
        style={{
          fontFamily: "var(--font-dm-sans), sans-serif",
          fontSize: 15,
          color: T.muted,
        }}
      >
        {professor}
      </div>
    </div>
  );
}
