"use client";

import { useState } from "react";
import { T } from "@/lib/theme";

export default function ProfilePhoto({
  size = 265,
  glow = "normal",
}: {
  size?: number;
  glow?: "normal" | "subtle";
}) {
  const [hovered, setHovered] = useState(false);

  const g =
    glow === "subtle"
      ? { inset: -3, radius: 26, blur: 12, opacity: 0.2, hoverOpacity: 0.4, hoverScale: 1.03 }
      : { inset: -6, radius: 28, blur: 20, opacity: 0.35, hoverOpacity: 0.6, hoverScale: 1.04 };

  return (
    <div
      className="about-photo-wrap"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: size + 40,
      }}
    >
      <div style={{ position: "relative", width: size, height: size }}>
        {/* Gradient glow */}
        <div
          style={{
            position: "absolute",
            inset: g.inset,
            borderRadius: g.radius,
            background: `linear-gradient(135deg, ${T.accent2}, ${T.accent3})`,
            filter: `blur(${g.blur}px)`,
            opacity: hovered ? g.hoverOpacity : g.opacity,
            transform: hovered ? `scale(${g.hoverScale})` : "scale(1)",
            transition:
              "opacity 0.3s cubic-bezier(0.22, 1, 0.36, 1), transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        />
        {/* Photo */}
        <img
          src="/pfp.jpg"
          alt="Pranav Cheraku"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: 24,
            position: "relative",
            zIndex: 1,
            transform: hovered ? "translateY(-6px) scale(1.02)" : "translateY(0) scale(1)",
            transition: "transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        />
      </div>
    </div>
  );
}
