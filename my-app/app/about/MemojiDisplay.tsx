"use client";

import { useState } from "react";
import { T } from "@/lib/theme";

export default function MemojiDisplay() {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="about-memoji-wrap"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        minHeight: 300,
        cursor: "default",
      }}
    >
      {/* Gradient circle */}
      <div
        style={{
          position: "absolute",
          width: 265,
          height: 265,
          borderRadius: "50%",
          background: `linear-gradient(135deg, ${T.accent2}, ${T.accent3})`,
          transform: hovered ? "scale(1.04)" : "scale(1)",
          transition: "transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      />
      {/* Memoji */}
      <img
        src="/transparent_memoji.png"
        alt="Pranav Cheraku"
        style={{
          width: "78%",
          position: "relative",
          zIndex: 1,
          transform: hovered ? "translateY(-10px) scale(1.05)" : "translateY(0) scale(1)",
          transition: "transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      />
    </div>
  );
}
