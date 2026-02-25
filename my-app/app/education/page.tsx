import FadeIn from "@/components/FadeIn";
import Glow from "@/components/Glow";
import CourseChip from "@/components/CourseChip";
import UniversityCard from "./UniversityCard";
import { T } from "@/lib/theme";
import ResearchEntry from "./ResearchEntry";
import LeadershipCard from "./LeadershipCard";
import ActivityChip from "./ActivityChip";

const CS_COURSES = [
  "Data Structures & Algorithms",
  "Object-Oriented Programming",
  "Computer Systems",
  "Machine Learning",
  "Database Systems",
  "Operating Systems",
  "Deep Learning",
  "Natural Language Processing",
  "Mobile Application Development",
  "Formal Language & Functional Programming",
];

const MATH_COURSES = [
  "Linear Algebra",
  "Probability & Statistics",
  "Multivariable Calculus",
  "Numerical Computation",
];

export const metadata = {
  title: "Pranav Cheraku - Education",
};

export default function EducationPage() {
  return (
    <div style={{ position: "relative" }}>
      {/* Lavender glow orb */}
      <Glow color={T.accent2} size={280} top={-30} right={-60} opacity={0.03} />

      {/* Page heading */}
      <FadeIn>
        <h2
          style={{
            fontFamily: "var(--font-playfair), serif",
            fontSize: 42,
            fontWeight: 400,
            color: T.heading,
            marginBottom: 48,
          }}
        >
          Education
        </h2>
      </FadeIn>

      {/* University card */}
      <FadeIn delay={80}>
        <UniversityCard />
      </FadeIn>

      {/* Relevant Coursework */}
      <FadeIn delay={160}>
        <div style={{ marginTop: 40 }}>
          <div
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: 15,
              color: T.muted,
              letterSpacing: 2,
              textTransform: "uppercase",
              marginBottom: 20,
            }}
          >
            Relevant Coursework
          </div>

          {/* Computer Science — light blue */}
          <div style={{ marginBottom: 18 }}>
            <div
              style={{
                fontFamily: "var(--font-lora), serif",
                fontSize: 16,
                color: T.muted,
                fontStyle: "italic",
                marginBottom: 10,
              }}
            >
              Computer Science
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {CS_COURSES.map((course) => (
                <CourseChip key={course} name={course} color={T.accent3} />
              ))}
            </div>
          </div>

          {/* Mathematics — lavender */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-lora), serif",
                fontSize: 16,
                color: T.muted,
                fontStyle: "italic",
                marginBottom: 10,
              }}
            >
              Mathematics
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {MATH_COURSES.map((course) => (
                <CourseChip key={course} name={course} color={T.accent2} />
              ))}
            </div>
          </div>
        </div>
      </FadeIn>
      {/* Research */}
      <FadeIn delay={240}>
        <div style={{ marginTop: 40, paddingTop: 28, borderTop: `1px solid ${T.border}` }}>
          <div
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: 15,
              color: T.muted,
              letterSpacing: 2,
              textTransform: "uppercase",
              marginBottom: 20,
            }}
          >
            Research
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
            <FadeIn delay={260} direction="left">
              <ResearchEntry
                lab="Glomerulus Lab"
                field="Computational Neuroscience Research Group"
                professor="Professor Kameron Harris"
                href="https://glomerul.us/"
              />
            </FadeIn>
            <FadeIn delay={360} direction="right">
              <ResearchEntry
                lab="MRRP Lab"
                field="Minimalist Resilient Robotics for the Planet"
                professor="Professor Alexandra Nilles"
                href="https://mrrp.cs.wwu.edu/"
              />
            </FadeIn>
          </div>
        </div>
      </FadeIn>
      {/* ── Leadership ── */}
      <FadeIn delay={320}>
        <div style={{ marginTop: 40, paddingTop: 28, borderTop: `1px solid ${T.border}` }}>
          <div
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: 15,
              color: T.muted,
              letterSpacing: 2,
              textTransform: "uppercase",
              marginBottom: 28,
            }}
          >
            Leadership
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            <FadeIn delay={360} direction="left">
              <LeadershipCard
                role="Tutor"
                program="Computer Science Tutoring Program"
                detail="One-on-one teaching · WWU"
              />
            </FadeIn>
            <FadeIn delay={460} direction="right">
              <LeadershipCard
                role="Mentor"
                program="Computer Science Mentoring Program"
                detail="Academic guidance · WWU"
              />
            </FadeIn>
          </div>
        </div>
      </FadeIn>

      {/* Activities & Societies */}
      <FadeIn delay={400}>
        <div style={{ marginTop: 40, paddingTop: 28, borderTop: `1px solid ${T.border}` }}>
          <div
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: 15,
              color: T.muted,
              letterSpacing: 2,
              textTransform: "uppercase",
              marginBottom: 28,
            }}
          >
            Activities &amp; Societies
          </div>

          <FadeIn delay={440}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {[
                "South Asian Student Association",
                "Competitive Programming Club",
                "Tennis Club",
                "Recreational Volleyball",
              ].map((activity) => (
                <ActivityChip key={activity} name={activity} />
              ))}
            </div>
          </FadeIn>
        </div>
      </FadeIn>
    </div>
  );
}
