"use client";

import { useState } from "react";
import { Github, ExternalLink, Youtube } from "lucide-react";
import { T } from "@/lib/theme";

function LinkButton({
  href,
  accent,
  icon,
  label,
}: {
  href: string;
  accent: string;
  icon: "github" | "external" | "youtube";
  label: string;
}) {
  const [hovered, setHovered] = useState(false);

  const Icon =
    icon === "github" ? Github : icon === "youtube" ? Youtube : ExternalLink;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        fontFamily: "var(--font-dm-sans), sans-serif",
        fontSize: 12,
        fontWeight: 500,
        color: hovered ? T.heading : accent,
        textDecoration: "none",
        border: `1px solid ${accent}`,
        borderRadius: 999,
        padding: "6px 14px",
        width: "fit-content",
        background: hovered ? accent : "transparent",
        transform: hovered ? "translateY(-4px) scale(1.04)" : "translateY(0) scale(1)",
        boxShadow: hovered ? `0 8px 24px ${accent}40` : "none",
        transition:
          "transform 0.25s cubic-bezier(0.22,1,0.36,1), box-shadow 0.25s ease, background 0.2s ease, color 0.2s ease",
      }}
    >
      <Icon size={14} />
      {label}
    </a>
  );
}

export default function ProjectLinks({
  github,
  live,
  youtube,
  accent,
}: {
  github: string | null;
  live: string | null;
  youtube?: string | null;
  accent: string;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      {github && (
        <LinkButton href={github} accent={accent} icon="github" label="GitHub" />
      )}
      {youtube && (
        <LinkButton href={youtube} accent={accent} icon="youtube" label="Demo Videos" />
      )}
      {live && (
        <LinkButton href={live} accent={accent} icon="external" label="Live Demo" />
      )}
    </div>
  );
}
