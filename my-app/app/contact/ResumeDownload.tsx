"use client";

import { useState } from "react";
import { Download } from "lucide-react";
import { T } from "@/lib/theme";

// Resume column — matches the stat label/value style in the stats grid
export default function ResumeDownload() {
  const [hovered, setHovered] = useState(false);

  return (
    <div style={{ marginRight: 40 }}>
      {/* Label — same style as STATUS, GRADUATING, etc. */}
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

      {/* Download button — sits where the stat value would be */}
      <a
        href="/resume.pdf"
        download
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          fontFamily: "var(--font-playfair), serif",
          fontSize: 20,
          color: hovered ? T.accent : T.heading,
          textDecoration: "none",
          transform: hovered ? "translateY(-2px)" : "translateY(0)",
          transition: "color 0.25s ease, transform 0.25s ease",
        }}
      >
        <Download size={16} color={hovered ? T.accent : T.body} style={{ transition: "color 0.25s ease" }} />
        Download
      </a>
    </div>
  );
}
