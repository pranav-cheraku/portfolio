import FadeIn from "@/components/FadeIn";
import { T } from "@/lib/theme";
import MemojiDisplay from "@/app/about/MemojiDisplay";

export const metadata = {
  title: "Pranav Cheraku",
};

export default function Home() {
  return (
    <div
      className="hero-grid"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 370px",
        gap: 64,
        alignItems: "center",
        minHeight: "80vh",
        paddingTop: 0,
        marginTop: -24,
        paddingBottom: 80,
      }}
    >

      {/* Left */}
      <div>

        {/* Name */}
        <FadeIn immediate>
          <div
            className="hero-name"
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontWeight: 400,
              lineHeight: 1.05,
              marginBottom: 20,
            }}
          >
            <span style={{ color: T.heading }}>Pranav </span>
            <span
              style={{
                color: T.accent,
                fontStyle: "italic",
                textShadow: `0 0 40px ${T.accentGlow}`,
              }}
            >
              Cheraku
            </span>
          </div>
        </FadeIn>

        {/* Accent bar */}
        <FadeIn immediate delay={60}>
          <div
            style={{
              width: 48,
              height: 2,
              background: T.accent,
              borderRadius: 999,
              marginBottom: 24,
            }}
          />
        </FadeIn>

        {/* Specialties */}
        <FadeIn immediate delay={100}>
          <div
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: 19,
              letterSpacing: 0.3,
              marginBottom: 28,
            }}
          >
            <span style={{ color: T.accent3 }}>Software Engineering</span>
            <span style={{ margin: "0 12px", borderLeft: `1px solid ${T.muted}`, display: "inline-block", height: "0.9em", verticalAlign: "middle" }} />
            <span style={{ color: T.accent3 }}>AI / ML</span>
            <span style={{ margin: "0 12px", borderLeft: `1px solid ${T.muted}`, display: "inline-block", height: "0.9em", verticalAlign: "middle" }} />
            <span style={{ color: T.accent3 }}>Data Science</span>
          </div>
        </FadeIn>

        {/* Major + graduation + status */}
        <FadeIn immediate delay={160}>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 44 }}>
            <div
              style={{
                fontFamily: "var(--font-lora), serif",
                fontSize: 18,
                color: T.body,
                fontStyle: "italic",
              }}
            >
              Computer Science Major, Graduating June 2026
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span className="status-dot" />
              <span
                style={{
                  fontFamily: "var(--font-playfair), serif",
                  fontSize: 22,
                  color: T.accent,
                  fontStyle: "italic",
                  textShadow: `0 0 20px ${T.accentGlow}`,
                }}
              >
                Seeking New Grad Roles
              </span>
            </div>
          </div>
        </FadeIn>

      </div>

      {/* Right: memoji */}
      <FadeIn immediate delay={100} direction="right">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <MemojiDisplay size={310} />
        </div>
      </FadeIn>

    </div>
  );
}
