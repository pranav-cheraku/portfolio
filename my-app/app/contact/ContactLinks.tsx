"use client";

import { useState } from "react";
import { Mail, Linkedin, Github } from "lucide-react";
import { T } from "@/lib/theme";

const LINKS = [
  {
    label: "Email",
    handle: "pranavcheraku@gmail.com",
    href: "mailto:pranavcheraku@gmail.com",
    Icon: Mail,
  },
  {
    label: "LinkedIn",
    handle: "linkedin.com/in/pranav-cheraku",
    href: "https://linkedin.com/in/pranav-cheraku",
    Icon: Linkedin,
  },
  {
    label: "GitHub",
    handle: "github.com/pranav-cheraku",
    href: "https://github.com/pranav-cheraku",
    Icon: Github,
  },
];

// Single row — icon + platform name always visible, handle slides in from the right on hover
function ContactRow({ label, handle, href, Icon }: (typeof LINKS)[number]) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      target={href.startsWith("mailto") ? "_self" : "_blank"}
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "22px 0",
        borderTop: `1px solid ${T.border}`,
        textDecoration: "none",
        cursor: "pointer",
        transform: hovered ? "translateX(6px)" : "translateX(0)",
        transition: "transform 0.25s ease",
      }}
    >
      {/* Left: gold icon + platform name */}
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <Icon size={20} color={T.accent} style={{ flexShrink: 0 }} />
        <span
          style={{
            fontFamily: "var(--font-playfair), serif",
            fontSize: 20,
            fontWeight: 400,
            color: hovered ? T.accent : T.heading,
            transition: "color 0.25s ease",
          }}
        >
          {label}
        </span>
      </div>

      {/* Right: handle slides in on hover */}
      <span
        style={{
          fontFamily: "var(--font-dm-sans), sans-serif",
          fontSize: 13,
          color: T.muted,
          opacity: hovered ? 1 : 0,
          transform: hovered ? "translateX(0)" : "translateX(14px)",
          transition: "opacity 0.3s ease, transform 0.3s ease",
          whiteSpace: "nowrap",
        }}
      >
        {handle}
      </span>
    </a>
  );
}

// List of contact rows with separator lines
export default function ContactLinks() {
  return (
    <div style={{ borderBottom: `1px solid ${T.border}` }}>
      {LINKS.map((link) => (
        <ContactRow key={link.label} {...link} />
      ))}
    </div>
  );
}
