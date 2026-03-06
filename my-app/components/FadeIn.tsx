"use client"; // Needs useState + useEffect — must be a client component

import { useState, useEffect, useRef } from "react";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number; // ms before the animation starts (used for stagger)
  direction?: "up" | "left" | "right" | "none";
  style?: React.CSSProperties;
}

// Reusable wrapper that fades + slides children in when they enter the viewport
export default function FadeIn({
  children,
  delay = 0,
  direction = "up",
  style = {},
}: FadeInProps) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let timer: ReturnType<typeof setTimeout>;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Trigger animation once element enters viewport, respecting stagger delay
          timer = setTimeout(() => setVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
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
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translate(0)" : startTransforms[direction],
        transition: "opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
