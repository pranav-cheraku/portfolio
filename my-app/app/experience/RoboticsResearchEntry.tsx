"use client";

import { useState } from "react";
import Image from "next/image";
import { Calendar, MapPin, Briefcase, Github } from "lucide-react";
import { T } from "@/lib/theme";

const SUMMARY =
  "Contributing to an ongoing research project focused on integrating human language into robotic movement to improve safety, flexibility, and awareness in human-robot collaboration. Work involves building a computer vision system for object recognition, a LLM-based speech communication layer, and autonomous pick-and-place routines using a Universal Robotics UR3e arm with a custom 3D-printed gripper.";

export default function RoboticsResearchEntry() {
  const [hovered, setHovered] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  return (
    <div style={{ display: "flex", alignItems: "flex-start" }}>

      {/* Card */}
      <div
        className="exp-card"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          flex: 1,
          background: T.surface,
          border: `1px solid ${T.border}`,
          borderRadius: 16,
          padding: 28,
          boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
          transform: hovered ? "translateY(-3px)" : "translateY(0)",
          transition: "transform 0.25s ease, box-shadow 0.25s ease",
        }}
      >
        {/* Header: Logo + Meta */}
        <div
          className="exp-header"
          style={{ display: "flex", gap: 18, alignItems: "center", marginBottom: 20 }}
        >
          {/* Logo */}
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 10,
              overflow: "hidden",
              flexShrink: 0,
              border: `1px solid ${T.border}`,
            }}
          >
            <Image
              src="/wwu_logo.jpg"
              alt="Western Washington University"
              width={72}
              height={72}
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </div>

          {/* Meta */}
          <div>
            <div
              className="exp-role"
              style={{
                fontFamily: "var(--font-playfair), serif",
                fontSize: 22,
                fontWeight: 600,
                color: T.heading,
                marginBottom: 4,
              }}
            >
              Undergraduate Researcher
            </div>
            <div
              style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: 15,
                fontWeight: 500,
                color: T.accent,
                marginBottom: 8,
              }}
            >
              Western Washington University's Minimalist Resilient Robotics for the Planet (MRRP) Lab
            </div>
            <div
              className="exp-meta-row"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 20,
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: 15,
                color: T.muted,
                flexWrap: "wrap",
              }}
            >
              <span style={{ display: "flex", alignItems: "center", gap: 5 }}>
                <Briefcase size={15} />
                Part-time
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: 5 }}>
                <Calendar size={15} />
                Apr 2025 – Present
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: 5 }}>
                <MapPin size={15} />
                Bellingham, Washington
              </span>
            </div>
          </div>
        </div>

        {/* Summary */}
        <p
          style={{
            fontFamily: "var(--font-lora), serif",
            fontSize: 15,
            color: T.body,
            lineHeight: 1.8,
            marginBottom: 20,
          }}
        >
          {SUMMARY}
        </p>

        {/* GitHub link */}
        <a
          href="https://github.com/MRRP-lab/colman"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setLinkHovered(true)}
          onMouseLeave={() => setLinkHovered(false)}
          onTouchStart={() => setLinkHovered(true)}
          onTouchEnd={() => setLinkHovered(false)}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: 13,
            fontWeight: 500,
            color: T.accent,
            textDecoration: "none",
            border: `1px solid ${linkHovered ? T.accent : T.border}`,
            borderRadius: 8,
            padding: "5px 12px",
            background: linkHovered ? T.accentSubtle : "transparent",
            cursor: "pointer",
            transition: "border-color 0.2s ease, background 0.2s ease",
          }}
        >
          <Github size={13} />
          <span>View on GitHub</span>
        </a>
      </div>
    </div>
  );
}
