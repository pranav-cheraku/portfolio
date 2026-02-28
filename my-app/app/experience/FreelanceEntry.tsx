"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp, Calendar, MapPin, Briefcase } from "lucide-react";
import { T } from "@/lib/theme";

const SUMMARY =
  "Developed and launched the official website for the Olympia Hindu Temple & Cultural Center (OHTCC), a nonprofit serving the local Hindu community in Olympia, Washington. Delivered a fully responsive, user-friendly platform to streamline event management, community engagement, and donation processing.";

const BULLETS = [
  "Built a responsive UI using HTML, JavaScript, and Tailwind CSS, ensuring cross-browser compatibility and mobile optimization.",
  "Implemented dynamic content features including a daily Panchang and an interactive Events Calendar.",
  "Integrated a chatbot assistant to handle visitor inquiries and improve user accessibility.",
  "Deployed the site on Netlify and configured automated pipelines to ensure smooth, continuous updates.",
];

const TECHS = ["HTML", "JavaScript", "Tailwind CSS", "Netlify"];

export default function FreelanceEntry() {
  const [expanded, setExpanded] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [labelVisible, setLabelVisible] = useState(true);
  const [animKey, setAnimKey] = useState(0);

  const handleToggle = () => {
    setLabelVisible(false);
    const next = !expanded;
    setTimeout(() => {
      setExpanded(next);
      if (next) setAnimKey(k => k + 1);
      setLabelVisible(true);
    }, 140);
  };

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
              src="/ohtcc_logo.png"
              alt="Olympia Hindu Temple & Cultural Center"
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
              Web Developer
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
              Olympia Hindu Temple & Cultural Center
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
                Freelance
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: 5 }}>
                <Calendar size={15} />
                May 2025 – Jun 2025
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: 5 }}>
                <MapPin size={15} />
                Olympia, Washington
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

        {/* Toggle */}
        <button
          onClick={handleToggle}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            background: "none",
            border: "none",
            cursor: "pointer",
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: 14,
            fontWeight: 500,
            color: T.accent,
            padding: 0,
            marginBottom: 0,
            opacity: labelVisible ? 1 : 0,
            transition: "opacity 0.14s ease",
          }}
        >
          {expanded
            ? <><span>Show Less</span><ChevronUp size={15} /></>
            : <><span>Key Achievements &amp; Skills</span><ChevronDown size={15} /></>
          }
        </button>

        {/* Expandable content */}
        <div
          style={{
            display: "grid",
            gridTemplateRows: expanded ? "1fr" : "0fr",
            transition: "grid-template-rows 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          <div style={{ overflow: "hidden" }}>
            <div style={{ paddingTop: 22 }}>
              {/* Bullets */}
              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 24 }}>
                {BULLETS.map((bullet, i) => (
                  <div
                    key={`${animKey}-${i}`}
                    style={{
                      display: "flex",
                      gap: 12,
                      alignItems: "flex-start",
                      animation: "bulletFadeIn 0.4s ease both",
                      animationDelay: `${i * 0.08}s`,
                    }}
                  >
                    <span
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: T.accent,
                        flexShrink: 0,
                        marginTop: 8,
                      }}
                    />
                    <span
                      style={{
                        fontFamily: "var(--font-dm-sans), sans-serif",
                        fontSize: 14,
                        color: T.body,
                        lineHeight: 1.75,
                      }}
                    >
                      {bullet}
                    </span>
                  </div>
                ))}
              </div>

              {/* Skills */}
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontSize: 12,
                    fontWeight: 600,
                    color: T.muted,
                    letterSpacing: 1.5,
                    textTransform: "uppercase",
                    marginBottom: 12,
                  }}
                >
                  Skills
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {TECHS.map((tech) => (
                    <span
                      key={tech}
                      className="tech-chip"
                      style={{
                        fontFamily: "var(--font-dm-sans), sans-serif",
                        fontSize: 13,
                        color: T.body,
                        border: `1px solid ${T.border}`,
                        borderRadius: 6,
                        padding: "4px 12px",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
