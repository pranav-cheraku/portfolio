import { Suspense } from "react";
import { notFound } from "next/navigation";
import FadeIn from "@/components/FadeIn";
import Glow from "@/components/Glow";
import { T } from "@/lib/theme";
import { PROJECTS } from "@/lib/projects";
import SkillTag from "./SkillTag";
import BackLink from "./BackLink";
import ScreenshotImage from "./ScreenshotImage";
import ProjectLinks from "./ProjectLink";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  return {
    title: project ? `${project.title} - Pranav Cheraku` : "Project Not Found",
  };
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        fontFamily: "var(--font-dm-sans), sans-serif",
        fontSize: 16,
        fontWeight: 600,
        letterSpacing: 2.5,
        textTransform: "uppercase",
        color: T.muted,
        marginBottom: 16,
      }}
    >
      {children}
    </div>
  );
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) notFound();

  const { title, subtitle, description, bullets, tags, accent, github, live, youtube, devpost, screenshots, screenshotGridCount, screenshotColumns } = project;

  return (
    <div style={{ position: "relative" }}>
      <Glow color={accent} size={300} top={-60} right={-80} opacity={0.04} />

      <FadeIn immediate>
      {/* Back link */}
        <Suspense fallback={<div style={{ height: 40 }} />}>
          <BackLink accent={accent} />
        </Suspense>

      {/* Header */}
        <h1
          className="project-title"
          style={{
            fontFamily: "var(--font-playfair), serif",
            fontSize: 56,
            fontWeight: 400,
            color: T.heading,
            margin: "0 0 12px",
            lineHeight: 1.08,
          }}
        >
          {title}
        </h1>
        <div
          style={{
            fontFamily: "var(--font-lora), serif",
            fontSize: 19,
            color: accent,
            fontStyle: "italic",
            marginBottom: 36,
          }}
        >
          {subtitle}
        </div>
        <div style={{ borderTop: `1px solid ${T.border}` }} />

      {/* About */}
        <div style={{ marginTop: 24, marginBottom: 24 }}>
          <SectionLabel>About</SectionLabel>
          <p
            style={{
              fontFamily: "var(--font-lora), serif",
              fontSize: 16,
              color: T.body,
              lineHeight: 1.9,
              margin: 0,
            }}
          >
            {description}
          </p>
        </div>

      {/* Key Highlights + Skills side by side */}
      {bullets && bullets.length > 0 && (
        <div
          className="project-detail-layout"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 260px",
            gap: 56,
            alignItems: "start",
            paddingTop: 20,
            borderTop: `1px solid ${T.border}`,
          }}
        >
          {/* Key Highlights */}
            <div>
              <SectionLabel>Key Highlights</SectionLabel>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {bullets.map((bullet, i) => (
                  <div
                    key={i}
                    style={{
                      fontFamily: "var(--font-dm-sans), sans-serif",
                      fontSize: 15,
                      color: T.body,
                      lineHeight: 1.8,
                      paddingLeft: 22,
                      textIndent: -22,
                    }}
                  >
                    <span style={{ color: accent, marginRight: 10 }}>—</span>
                    {bullet}
                  </div>
                ))}
              </div>
            </div>

          {/* Skills + Links */}
            <div className="project-detail-sidebar" style={{ position: "sticky", top: 96 }}>
              <SectionLabel>Skills</SectionLabel>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                {tags.map((tag) => (
                  <SkillTag key={tag} tag={tag} accent={accent} />
                ))}
              </div>

              {(github || live || youtube || devpost) && (
                <div style={{ paddingTop: 24, marginTop: 24, borderTop: `1px solid ${T.border}` }}>
                  <SectionLabel>Links</SectionLabel>
                  <ProjectLinks github={github} live={live} youtube={youtube} devpost={devpost} accent={accent} />
                </div>
              )}
            </div>
        </div>
      )}

      {/* Images */}
      {screenshots && screenshots.length > 0 && (
          <div style={{ paddingTop: 20, marginTop: 24, borderTop: `1px solid ${T.border}` }}>
            <SectionLabel>Images</SectionLabel>

            {/* Screenshot layout — screenshotGridCount controls how many go in the 2-col grid */}
            {(() => {
              const gridCount = screenshotGridCount ?? (screenshots.length % 2 !== 0 ? screenshots.length - 1 : screenshots.length);
              const grid = screenshots.slice(0, gridCount);
              const fullWidth = screenshots.slice(gridCount);
              return (
                <>
                  {grid.length > 0 && (
                    <div
                      className="screenshot-grid"
                      style={{ display: "grid", gridTemplateColumns: `repeat(${screenshotColumns ?? 2}, 1fr)`, gap: 32, alignItems: "start" }}
                    >
                      {grid.map((s, i) => (
                        <ScreenshotImage key={i} src={s.src} alt={s.caption} caption={s.caption} lightBg={s.src.endsWith(".svg")} />
                      ))}
                    </div>
                  )}

                  {/* Full-width screenshots */}
                  {fullWidth.map((s, i) => (
                    <div key={i} style={{ marginTop: 32 }}>
                      <ScreenshotImage src={s.src} alt={s.caption} caption={s.caption} lightBg={s.src.endsWith(".svg")} maxWidth={s.maxWidth} />
                    </div>
                  ))}
                </>
              );
            })()}
          </div>
      )}
      </FadeIn>
    </div>
  );
}
