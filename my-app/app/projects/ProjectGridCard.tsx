"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { T, tintOf, tintHoverOf } from "@/lib/theme";

interface ProjectGridCardProps {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  oneliner: string;
  tags: string[];
  accent: string;
}

export default function ProjectGridCard({
  slug,
  number,
  title,
  subtitle,
  oneliner,
  tags,
  accent,
}: ProjectGridCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={`/projects/${slug}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 8,
        height: "100%",
        boxSizing: "border-box",
        textDecoration: "none",
        background: T.surface,
        border: `1px solid ${T.border}`,
        borderTop: `2px solid ${accent}`,
        borderRadius: 16,
        padding: 28,
        boxShadow: hovered
          ? "0 16px 40px rgba(0,0,0,0.35)"
          : "0 4px 20px rgba(0,0,0,0.18)",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
        transition: "transform 0.25s ease, box-shadow 0.25s ease",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span
          style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: 13,
            color: accent,
            letterSpacing: 1,
          }}
        >
          {number}
        </span>
        <ArrowUpRight
          size={18}
          style={{ color: hovered ? accent : T.muted, transition: "color 0.25s ease" }}
        />
      </div>

      <div
        style={{
          fontFamily: "var(--font-playfair), serif",
          fontSize: 20,
          fontWeight: 400,
          color: T.heading,
          lineHeight: 1.3,
        }}
      >
        {title}
      </div>

      <div
        style={{
          fontFamily: "var(--font-lora), serif",
          fontSize: 13,
          fontStyle: "italic",
          color: accent,
        }}
      >
        {subtitle}
      </div>

      <div
        style={{
          fontFamily: "var(--font-lora), serif",
          fontSize: 14,
          color: T.body,
          lineHeight: 1.7,
          marginTop: 2,
        }}
      >
        {oneliner}
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: "auto", paddingTop: 10 }}>
        {tags.map((tag) => (
          <span
            key={tag}
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: 12,
              color: accent,
              background: tintOf[accent],
              border: `1px solid ${tintHoverOf[accent]}`,
              borderRadius: 999,
              padding: "3px 12px",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}
