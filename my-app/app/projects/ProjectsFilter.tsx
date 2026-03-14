"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { T } from "@/lib/theme";
import { PROJECTS } from "@/lib/projects";
import type { ProjectCategory } from "@/lib/projects";
import ProjectCard from "./ProjectCard";

type FilterOption = "Featured" | "All" | ProjectCategory;


const FILTERS: FilterOption[] = [
  "Featured",
  "Machine Learning",
  "Systems Programming",
  "Algorithms",
  "Databases",
  "Hackathon",
  "Mobile",
];

export default function ProjectsFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [active, setActive] = useState<FilterOption>(() => {
    const param = searchParams.get("filter");
    const valid: FilterOption[] = [...FILTERS, "All"];
    return (valid.includes(param as FilterOption) ? param : "Featured") as FilterOption;
  });

  const [frame, setFrame] = useState({ left: 0, width: 0, opacity: 0 });
  const [visible, setVisible] = useState(true);
  const [displayedFilter, setDisplayedFilter] = useState<FilterOption>(active);
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  function handleSetActive(filter: FilterOption) {
    setActive(filter);
    router.replace(`/projects?filter=${encodeURIComponent(filter)}`, { scroll: false });
  }

  useEffect(() => {
    const idx = FILTERS.indexOf(active);
    const btn = buttonRefs.current[idx];
    const container = containerRef.current;
    if (!btn || !container) return;
    const bRect = btn.getBoundingClientRect();
    const cRect = container.getBoundingClientRect();
    setFrame({ left: bRect.left - cRect.left, width: bRect.width, opacity: 1 });
  }, [active]);

  useEffect(() => {
    setVisible(false);
    const t = setTimeout(() => {
      setDisplayedFilter(active);
      setVisible(true);
    }, 160);
    return () => clearTimeout(t);
  }, [active]);

  const alphabetical = (arr: typeof PROJECTS) =>
    [...arr].sort((a, b) => a.title.localeCompare(b.title));

  const filtered =
    displayedFilter === "Featured"
      ? PROJECTS.filter((p) => p.featured).sort((a, b) => (a.featuredOrder ?? 99) - (b.featuredOrder ?? 99))
      : displayedFilter === "All"
      ? alphabetical(PROJECTS)
      : alphabetical(PROJECTS.filter((p) => p.category === displayedFilter));

  return (
    <div>
      {/* All projects link */}
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 8 }}>
        <button
          onClick={() => handleSetActive("All")}
          style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: "0.05em",
            color: active === "All" ? T.accent : T.muted,
            background: active === "All" ? T.accentSubtle : "transparent",
            border: `1px solid ${active === "All" ? T.accent : T.border}`,
            borderRadius: 6,
            cursor: "pointer",
            padding: "7px 14px",
            transition: "color 0.2s ease, border-color 0.2s ease, background 0.2s ease",
          }}
        >
          All Projects ({PROJECTS.length})
        </button>
      </div>

      {/* Filter band */}
      <div
        ref={containerRef}
        className="projects-filter-bar"
        style={{
          position: "relative",
          display: "flex",
          borderTop: `1px solid ${T.border}`,
          borderBottom: `1px solid ${T.border}`,
          marginBottom: 40,
          overflowX: "auto",
        }}
      >
        {/* Sliding frame */}
        <div
          style={{
            position: "absolute",
            top: 4,
            bottom: 4,
            left: frame.left,
            width: frame.width,
            border: `1px solid ${T.accent}`,
            opacity: active === "All" ? 0 : frame.opacity,
            transition:
              "left 0.35s cubic-bezier(0.22,1,0.36,1), width 0.35s cubic-bezier(0.22,1,0.36,1), opacity 0.2s ease",
            pointerEvents: "none",
          }}
        />

        {FILTERS.map((filter, i) => {
          const count =
            filter === "Featured"
              ? PROJECTS.filter((p) => p.featured).length
              : filter === "All"
              ? PROJECTS.length
              : PROJECTS.filter((p) => p.category === filter).length;
          const isActive = active === filter;

          return (
            <button
              key={filter}
              ref={(el) => { buttonRefs.current[i] = el; }}
              onClick={() => handleSetActive(filter)}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 5,
                padding: "16px 20px",
                background: "none",
                border: "none",
                cursor: "pointer",
                flex: 1,
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: isActive && active !== "All" ? T.accent : T.muted,
                  transition: "color 0.25s ease",
                  whiteSpace: "nowrap",
                }}
              >
                {filter}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-playfair), serif",
                  fontSize: 22,
                  fontWeight: 400,
                  lineHeight: 1,
                  color: isActive && active !== "All" ? T.accent : T.body,
                  opacity: isActive && active !== "All" ? 1 : 0.4,
                  transition: "color 0.25s ease, opacity 0.25s ease",
                }}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <div
        className="projects-grid"
        style={{
          display: "grid",
          gridTemplateColumns: displayedFilter === "Featured" ? "1fr" : "repeat(2, 1fr)",
          gap: 16,
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(10px)",
          transition: "opacity 0.2s ease, transform 0.2s ease",
        }}
      >
        {filtered.map((project) => (
          <ProjectCard
            key={project.slug}
            {...project}
            fromFilter={active}
          />
        ))}
      </div>
    </div>
  );
}
