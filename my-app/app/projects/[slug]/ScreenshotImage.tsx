"use client";

import { useState } from "react";
import { T } from "@/lib/theme";

interface ScreenshotImageProps {
  src: string;
  alt: string;
  caption: string;
}

export default function ScreenshotImage({ src, alt, caption }: ScreenshotImageProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div>
      <a href={src} target="_blank" rel="noopener noreferrer" style={{ display: "block" }}>
        <img
          src={src}
          alt={alt}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            borderRadius: 10,
            border: `1px solid ${T.border}`,
            cursor: "pointer",
            transform: hovered ? "scale(1.01) translateY(-1px)" : "scale(1) translateY(0)",
            boxShadow: hovered ? "0 6px 20px rgba(0,0,0,0.2)" : "none",
            transition: "transform 0.35s cubic-bezier(0.22,1,0.36,1), box-shadow 0.35s ease",
          }}
        />
      </a>
      <p style={{
        fontFamily: "var(--font-lora), serif",
        fontSize: 14,
        color: T.muted,
        fontStyle: "italic",
        lineHeight: 1.7,
        marginTop: 10,
        marginBottom: 0,
      }}>
        {caption}
      </p>
    </div>
  );
}
