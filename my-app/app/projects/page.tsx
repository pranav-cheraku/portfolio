import FadeIn from "@/components/FadeIn";
import { T } from "@/lib/theme";
import { PROJECTS } from "@/lib/projects";
import ProjectHero from "./ProjectHero";
import ProjectGridCard from "./ProjectGridCard";

export const metadata = {
  title: "Projects - Pranav Cheraku",
};

// Two-digit display number for a zero-based index.
function num(i: number): string {
  return String(i + 1).padStart(2, "0");
}

export default function ProjectsPage() {
  // Array order in lib/projects.ts is the display order:
  // [0] hero, [1..6] are the 2x3 grid.
  const hero = PROJECTS[0];
  const gridProjects = PROJECTS.slice(1);

  return (
    <div style={{ position: "relative" }}>
      {/* Heading */}
      <FadeIn immediate>
        <h2
          className="page-heading"
          style={{
            fontFamily: "var(--font-playfair), serif",
            fontSize: 42,
            fontWeight: 400,
            color: T.heading,
            marginBottom: 36,
          }}
        >
          Projects
        </h2>
      </FadeIn>

      {/* Hero — project 01 */}
      <FadeIn immediate delay={100}>
        <ProjectHero
          slug={hero.slug}
          number={num(0)}
          title={hero.title}
          subtitle={hero.subtitle}
          oneliner={hero.oneliner}
          tags={hero.tags}
          accent={hero.accent}
          award={hero.award}
        />
      </FadeIn>

      {/* Grid — projects 02–07 */}
      <FadeIn immediate delay={160}>
        <div
          className="projects-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 16,
            marginTop: 16,
          }}
        >
          {gridProjects.map((p, i) => (
            <ProjectGridCard
              key={p.slug}
              slug={p.slug}
              number={num(i + 1)}
              title={p.title}
              subtitle={p.subtitle}
              oneliner={p.oneliner}
              tags={p.tags}
              accent={p.accent}
            />
          ))}
        </div>
      </FadeIn>
    </div>
  );
}
