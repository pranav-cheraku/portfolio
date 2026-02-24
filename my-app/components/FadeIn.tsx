"use client"; // Needs useState + useEffect — must be a client component

import { useState, useEffect } from "react";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number; // ms before the animation starts
  direction?: "up" | "left" | "right" | "none";
  style?: React.CSSProperties;
}

// Reusable wrapper that fades + slides children in on mount
export default function FadeIn({
  children,
  delay = 0,
  direction = "up",
  style = {},
}: FadeInProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Small base delay (70ms) + the custom delay before revealing
    const timer = setTimeout(() => setVisible(true), 70 + delay);
    return () => clearTimeout(timer);
  }, [delay]);

  // Starting transform based on direction — element slides to its natural position
  const startTransforms: Record<string, string> = {
    up: "translateY(22px)",
    left: "translateX(-18px)",
    right: "translateX(18px)",
    none: "none",
  };

  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translate(0)" : startTransforms[direction],
        transition: "all 0.7s cubic-bezier(0.22,1,0.36,1)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
