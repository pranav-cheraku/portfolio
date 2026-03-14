import FadeIn from "@/components/FadeIn";
import Glow from "@/components/Glow";
import { T } from "@/lib/theme";
import InternshipEntry from "./InternshipEntry";
import FreelanceEntry from "./FreelanceEntry";
import RoboticsResearchEntry from "./RoboticsResearchEntry";
import NeuroscienceResearchEntry from "./NeuroscienceResearchEntry";

export const metadata = {
  title: "Experience - Pranav Cheraku",
};

export default function ExperiencePage() {
  return (
    <div style={{ position: "relative" }}>
      {/* Accent glow orb */}
      <Glow color={T.accent} size={280} top={-30} right={-60} opacity={0.03} />

      {/* Page heading */}
      <FadeIn immediate>
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
        <FadeIn immediate direction="none" style={{ alignSelf: "stretch", flexShrink: 0 }}>
          <div
            className="exp-timeline"
            style={{ width: 36, position: "relative", height: "100%" }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                left: "50%",
                transform: "translateX(-50%)",
                width: 3,
                background: T.accent3,
                borderRadius: 999,
              }}
            />
          </div>
        </FadeIn>

        {/* Entries */}
        <div style={{ flex: 1 }}>

          {/* Internship */}
          <FadeIn immediate delay={80}>
            <div style={{ position: "relative" }}>
              <div style={{
                position: "absolute",
                left: -23,
                top: 60,
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: T.accent2,
                zIndex: 2,
              }} />
              <div style={{
                position: "absolute",
                left: -18,
                top: 64,
                width: 18,
                height: 2,
                background: T.accent2,
              }} />
              <InternshipEntry />
            </div>
          </FadeIn>

          {/* Freelance */}
          <FadeIn immediate delay={160}>
            <div style={{ marginTop: 40, paddingTop: 40, borderTop: `1px solid ${T.border}`, position: "relative" }}>
              <div style={{
                position: "absolute",
                left: -23,
                top: 100,
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: T.accent2,
                zIndex: 2,
              }} />
              <div style={{
                position: "absolute",
                left: -18,
                top: 104,
                width: 18,
                height: 2,
                background: T.accent2,
              }} />
              <FreelanceEntry />
            </div>
          </FadeIn>

          {/* Robotics Research */}
          <FadeIn immediate delay={240}>
            <div style={{ marginTop: 40, paddingTop: 40, borderTop: `1px solid ${T.border}`, position: "relative" }}>
              <div style={{
                position: "absolute",
                left: -23,
                top: 100,
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: T.accent2,
                zIndex: 2,
              }} />
              <div style={{
                position: "absolute",
                left: -18,
                top: 104,
                width: 18,
                height: 2,
                background: T.accent2,
              }} />
              <RoboticsResearchEntry />
            </div>
          </FadeIn>

          {/* Neuroscience Research */}
          <FadeIn immediate delay={320}>
            <div style={{ marginTop: 40, paddingTop: 40, borderTop: `1px solid ${T.border}`, position: "relative" }}>
              <div style={{
                position: "absolute",
                left: -23,
                top: 100,
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: T.accent2,
                zIndex: 2,
              }} />
              <div style={{
                position: "absolute",
                left: -18,
                top: 104,
                width: 18,
                height: 2,
                background: T.accent2,
              }} />
              <NeuroscienceResearchEntry />
            </div>
          </FadeIn>

        </div>
      </div>
    </div>
  );
}
