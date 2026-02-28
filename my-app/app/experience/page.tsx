import FadeIn from "@/components/FadeIn";
import Glow from "@/components/Glow";
import { T } from "@/lib/theme";
import InternshipEntry from "./InternshipEntry";
import FreelanceEntry from "./FreelanceEntry";

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

      {/* Timeline + Entries */}
      <div style={{ display: "flex", alignItems: "flex-start" }}>

        {/* Continuous timeline bar */}
        <div
          className="exp-timeline"
          style={{ width: 36, flexShrink: 0, position: "relative", alignSelf: "stretch" }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: 2,
              background: `linear-gradient(to bottom, ${T.accent3}, ${T.accent2})`,
            }}
          />
        </div>

        {/* Entries */}
        <div style={{ flex: 1 }}>

          {/* Internship */}
          <FadeIn delay={80}>
            <div style={{ position: "relative" }}>
              {/* Horizontal connector — aligns with logo center (28px card padding + 36px half logo) */}
              <div className="exp-timeline" style={{
                position: "absolute",
                left: -18,
                top: 64,
                width: 18,
                height: 2,
                background: T.accent3,
              }} />
              <InternshipEntry />
            </div>
          </FadeIn>

          {/* Freelance */}
          <FadeIn delay={160}>
            <div style={{ marginTop: 40, paddingTop: 40, borderTop: `1px solid ${T.border}`, position: "relative" }}>
              {/* Horizontal connector — 40px paddingTop + 28px card padding + 36px half logo */}
              <div className="exp-timeline" style={{
                position: "absolute",
                left: -18,
                top: 104,
                width: 18,
                height: 2,
                background: T.accent3,
              }} />
              <FreelanceEntry />
            </div>
          </FadeIn>

        </div>
      </div>
    </div>
  );
}
