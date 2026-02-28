import FadeIn from "@/components/FadeIn";
import Glow from "@/components/Glow";
import { T } from "@/lib/theme";
import InternshipEntry from "./InternshipEntry";

export const metadata = {
  title: "Experience - Pranav Cheraku",
};

export default function ExperiencePage() {
  return (
    <div style={{ position: "relative" }}>
      {/* Accent glow orb */}
      <Glow color={T.accent} size={280} top={-30} right={-60} opacity={0.03} />

      {/* Page heading */}
      <FadeIn>
        <h2
          className="page-heading"
          style={{
            fontFamily: "var(--font-playfair), serif",
            fontSize: 42,
            fontWeight: 400,
            color: T.heading,
            marginBottom: 48,
          }}
        >
          Experience
        </h2>
      </FadeIn>

      {/* Internship */}
      <FadeIn delay={80}>
        <InternshipEntry />
      </FadeIn>
    </div>
  );
}
