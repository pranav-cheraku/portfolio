"use client";

import { useState } from "react";
import Link from "next/link";
import { T } from "@/lib/theme";

const SECTIONS = [
  { href: "/about",      label: "About",      accent: T.accent2, index: 1 },
  { href: "/experience", label: "Experience", accent: T.accent3, index: 2 },
  { href: "/projects",   label: "Projects",   accent: T.accent2, index: 3 },
  { href: "/skills",     label: "Skills",     accent: T.accent3, index: 4 },
  { href: "/education",  label: "Education",  accent: T.accent2, index: 5 },
  { href: "/contact",    label: "Contact",    accent: T.accent3, index: 6 },
];

function BentoCard({ href, label, accent, index }: (typeof SECTIONS)[0]) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "16px 20px",
        background: hovered ? T.surface : T.bg,
        textDecoration: "none",
        borderTop: `2px solid ${hovered ? accent : T.border}`,
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
        transition: "background 0.2s ease, border-color 0.2s ease, transform 0.25s cubic-bezier(0.22, 1, 0.36, 1)",
        minHeight: 100,
      }}
    >
      {/* Top row: index + arrow */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
        <span
          style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: 11,
            color: hovered ? accent : T.muted,
            letterSpacing: 2,
            textTransform: "uppercase",
            transition: "color 0.2s ease",
          }}
        >
          {String(index).padStart(2, "0")}
        </span>
        <span
          style={{
            fontSize: 15,
            color: hovered ? accent : T.muted,
            transform: hovered ? "translate(2px, -2px)" : "translate(0, 0)",
            transition: "color 0.2s ease, transform 0.2s ease",
          }}
        >
          →
        </span>
      </div>

      {/* Bottom: label */}
      <div>
        <div
          className="bento-label"
          style={{
            fontFamily: "var(--font-playfair), serif",
            fontSize: 22,
            fontWeight: 400,
            color: hovered ? T.heading : T.body,
            marginBottom: 6,
            transition: "color 0.2s ease",
          }}
        >
          {label}
        </div>
      </div>
    </Link>
  );
}

export default function HomeNavBento() {
  return (
    <div
      className="home-bento-grid"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 1,
        background: T.border,
      }}
    >
      {SECTIONS.map((section) => (
        <BentoCard key={section.href} {...section} />
      ))}
    </div>
  );
}
