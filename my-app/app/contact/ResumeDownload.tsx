"use client";

import { useState } from "react";
import { T } from "@/lib/theme";

// Resume stat column — same label/value style as the other stats
export default function ResumeDownload() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="contact-resume" style={{ marginRight: 40 }}>
      {/* Label — matches STATUS, GRADUATING, etc. */}
      <div
        style={{
          fontFamily: "var(--font-dm-sans), sans-serif",
          fontSize: 13,
          color: T.muted,
          letterSpacing: 2,
          textTransform: "uppercase",
          marginBottom: 6,
        }}
      >
        Resume
      </div>

      {/* Value — simple text link in accent color */}
      <a
        href="/PranavCheraku_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          fontFamily: "var(--font-playfair), serif",
          fontSize: 20,
          color: T.accent,
          textShadow: `0 0 20px ${T.accentGlow}`,
          textDecoration: "underline",
          textUnderlineOffset: 4,
          transform: hovered ? "translateY(-2px)" : "translateY(0)",
          transition: "all 0.25s ease",
          display: "inline-block",
          paddingBottom: 2,
        }}
      >
        View PDF
      </a>
    </div>
  );
}
