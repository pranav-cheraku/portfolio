"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp, Calendar, MapPin, Briefcase } from "lucide-react";
import { T } from "@/lib/theme";

const SUMMARY =
  "Joined FAST Enterprises LLC's Pennsylvania Department of Revenue project as a Software Implementation Consultant (Intern), serving on the Compliance & Registration team. Worked hands-on with GenTax, FAST's enterprise tax administration platform, to develop and configure live software features serving state agency employees and millions of Pennsylvania taxpayers.";

const BULLETS = [
  "Implemented production changes to a wide range of reports, letters, and jobs in GenTax by using VB.NET and SQL, delivering accurate and reliable system functionality that directly serves millions of taxpayers across Pennsylvania.",
  "Queried and analyzed over 110+ jobs, reviewing underlying code and SQL logic to assess functionality and relevance, ultimately retiring those that were no longer needed to improve long-term system performance and maintainability.",
  "Consulted with Subject Matter Experts (SMEs) and project leads to validate requirements and ensure that configuration within GenTax accurately reflected the intended business rules and functionality.",
  "Gained exposure to the full software development lifecycle, including requirements gathering, coding, testing, deployment, and documentation.",
];

const TECHS = ["SQL", "VB.NET", "Consulting", "Tax"];

export default function InternshipEntry() {
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

      {/* Timeline */}
      <div
        className="exp-timeline"
        style={{ width: 36, flexShrink: 0, position: "relative", alignSelf: "stretch" }}
      >
        {/* Line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: 2,
            bottom: 0,
            background: `linear-gradient(to bottom, ${T.accent3}, ${T.accent2})`,
            opacity: 1,
          }}
        />
        {/* Horizontal connector */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "50%",
            height: 2,
            background: T.accent3,
            opacity: 1,
          }}
        />
      </div>

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
              src="/fast_enterprises_logo.jpeg"
              alt="FAST Enterprises LLC"
              width={72}
              height={72}
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </div>

          {/* Meta */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-playfair), serif",
                fontSize: 22,
                fontWeight: 600,
                color: T.heading,
                marginBottom: 4,
              }}
            >
              Software Implementation Consultant
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
              FAST Enterprises LLC
            </div>
            <div
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
                Internship
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: 5 }}>
                <Calendar size={15} />
                Jun 2025 – Sep 2025
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: 5 }}>
                <MapPin size={15} />
                Harrisburg, Pennsylvania
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

        {/* Expandable content — grid trick for smooth height animation */}
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

              {/* Technologies Used */}
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
