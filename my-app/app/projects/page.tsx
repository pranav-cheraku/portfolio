import { Suspense } from "react";
import FadeIn from "@/components/FadeIn";
import { T } from "@/lib/theme";
import ProjectsFilter from "./ProjectsFilter";

export const metadata = {
  title: "Projects - Pranav Cheraku",
};

export default function ProjectsPage() {
  return (
    <div style={{ position: "relative" }}>
      
      <FadeIn immediate>
        <h2
          className="page-heading"
          style={{
            fontFamily: "var(--font-playfair), serif",
            fontSize: 42,
            fontWeight: 400,
            color: T.heading,
            marginBottom: 12,
          }}
        >
          Projects
        </h2>
      </FadeIn>

      <FadeIn immediate delay={60}>
        <Suspense fallback={<div />}>
          <ProjectsFilter />
        </Suspense>
      </FadeIn>
    </div>
  );
}
