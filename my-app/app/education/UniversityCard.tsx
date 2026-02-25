"use client";

import { useState } from "react";
import { GraduationCap } from "lucide-react";
import { T } from "@/lib/theme";

// University card with hover pop-out animation
export default function UniversityCard() {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="edu-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: 32,
        background: T.surface,
        border: `1px solid ${T.border}`,
        borderTop: `2px solid ${T.accent}`,
        borderRadius: 16,
        boxShadow: `0 8px 32px rgba(0,0,0,0.3)`,
        display: "flex",
        gap: 32,
        alignItems: "flex-start",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
        transition: "transform 0.25s ease, box-shadow 0.25s ease",
      }}
    >
      {/* WWU logo */}
      <img
        src="/wwu_logo.jpg"
        alt="Western Washington University"
        style={{
          width: 72,
          height: 72,
          objectFit: "contain",
          borderRadius: 8,
          flexShrink: 0,
        }}
      />

      {/* University details */}
      <div style={{ flex: 1 }}>
        <h3
          style={{
            fontFamily: "var(--font-playfair), serif",
            fontSize: 22,
            fontWeight: 400,
            color: T.heading,
            margin: "0 0 6px",
          }}
        >
          Western Washington University
        </h3>
        <div
          style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: 14,
            color: T.accent,
            fontWeight: 500,
            marginBottom: 12,
          }}
        >
          Bachelor of Science in Computer Science &nbsp;·&nbsp; Minor in Mathematics
        </div>
      </div>

      {/* Graduation — top right on desktop, bottom on mobile */}
      <div
        className="edu-graduation"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          fontFamily: "var(--font-lora), serif",
          fontSize: 14,
          color: T.body,
          fontStyle: "italic",
        }}
      >
        <GraduationCap size={16} color={T.body} />
        Expected Graduation - June 2026
      </div>
    </div>
  );
}
