"use client";

import { useState } from "react";
import { T } from "@/lib/theme";

export default function HeroResumeBtn() {
  const [hovered, setHovered] = useState(false);

  return (
    <div style={{ marginTop: 14 }}>
      <a
        href="/PranavCheraku_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          display: "inline-block",
          fontFamily: "var(--font-dm-sans), sans-serif",
          fontSize: 13,
          fontWeight: 500,
          color: T.bg,
          background: `linear-gradient(135deg, ${T.accent2}, ${T.accent3})`,
          border: "none",
          borderRadius: 50,
          padding: "10px 26px",
          textDecoration: "none",
          opacity: hovered ? 0.88 : 1,
          transform: hovered ? "translateY(-2px)" : "translateY(0)",
          transition: "opacity 0.25s ease, transform 0.25s ease",
        }}
      >
        View Resume
      </a>
    </div>
  );
}
