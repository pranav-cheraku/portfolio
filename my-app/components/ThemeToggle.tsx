"use client";

import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { T } from "@/lib/theme";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [hovered, setHovered] = useState(false);

  // Sync with whatever data-theme was set by the inline script
  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme");
    if (current === "light") setTheme("light");
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
  };

  return (
    <button
      onClick={toggle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: 6,
        color: hovered ? T.body : T.muted,
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
        transition: "color 0.25s ease, transform 0.25s ease",
        display: "flex",
        alignItems: "center",
      }}
    >
      {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  );
}
