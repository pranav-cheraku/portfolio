import FadeIn from "@/components/FadeIn";
import Glow from "@/components/Glow";
import CourseChip from "@/components/CourseChip";
import UniversityCard from "./UniversityCard";
import { T } from "@/lib/theme";

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
              fontSize: 13,
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
                fontSize: 14,
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
                fontSize: 14,
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
    </div>
  );
}
