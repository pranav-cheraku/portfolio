"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { T } from "@/lib/theme";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ slug, title, oneliner, tags, accent, fromFilter }: Project & { fromFilter?: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={`/projects/${slug}${fromFilter ? `?from=${encodeURIComponent(fromFilter)}` : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "block",
        textDecoration: "none",
        background: T.surface,
        border: `1px solid ${T.border}`,
        borderTop: `2px solid ${accent}`,
        borderRadius: 16,
        padding: "28px",
        boxShadow: hovered
          ? "0 16px 40px rgba(0,0,0,0.35)"
          : "0 4px 20px rgba(0,0,0,0.18)",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
        transition: "transform 0.25s ease, box-shadow 0.25s ease",
      }}
    >
      {/* Title + arrow */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: 12,
          marginBottom: 12,
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-playfair), serif",
            fontSize: 22,
            fontWeight: 400,
            color: T.heading,
            lineHeight: 1.3,
          }}
        >
          {title}
        </div>
        <ArrowUpRight
          size={18}
          style={{
            flexShrink: 0,
            marginTop: 3,
            color: hovered ? accent : T.muted,
            transition: "color 0.25s ease",
          }}
        />
      </div>

      {/* One-liner */}
      <div
        className="project-card-desc"
        style={{
          fontFamily: "var(--font-lora), serif",
          fontSize: 14,
          color: T.body,
          lineHeight: 1.75,
          marginBottom: 22,
        }}
      >
        {oneliner}
      </div>

      {/* Tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {tags.map((tag) => (
          <span
            key={tag}
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: 12,
              color: accent,
              background: accent.replace(")", "-tint)"),
              border: `1px solid ${accent.replace(")", "-tint-hover)")}`,
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
