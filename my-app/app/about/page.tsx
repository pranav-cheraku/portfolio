import FadeIn from "@/components/FadeIn";
import { T } from "@/lib/theme";
import MemojiDisplay from "./MemojiDisplay";

export const metadata = {
  title: "About - Pranav Cheraku",
};

export default function AboutPage() {
  return (
    <div style={{ position: "relative" }}>

      {/* Page heading */}
      <FadeIn>
        <h2
          className="page-heading"
          style={{
            fontFamily: "var(--font-playfair), serif",
            fontSize: 42,
            fontWeight: 400,
            color: T.heading,
            marginBottom: 24,
          }}
        >
          About
        </h2>
      </FadeIn>

      {/* Two-column layout */}
      <div
        className="bento-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "320px 1fr",
          columnGap: 48,
          alignItems: "stretch",
          rowGap: 0,
        }}
      >

        {/* ── Left column: memoji top, stats bottom ── */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>

          <FadeIn delay={80} direction="left">
            <MemojiDisplay />
          </FadeIn>

          <FadeIn delay={160} direction="left">
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {[
                { label: "Graduating", value: "June 2026" },
                { label: "Current Location", value: "Greater Seattle Area" },
                { label: "Status", value: "Seeking New Grad Roles", accent: true },
              ].map(({ label, value, accent }, i) => (
                <div key={label}>
                  {i > 0 && (
                    <div style={{ borderTop: `1px solid ${T.border}`, margin: "20px 0" }} />
                  )}
                  <div
                    style={{
                      fontFamily: "var(--font-dm-sans), sans-serif",
                      fontSize: 13,
                      color: T.muted,
                      letterSpacing: 2,
                      textTransform: "uppercase",
                      marginBottom: 6,
                    }}
                  >
                    {label}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-playfair), serif",
                      fontSize: 22,
                      fontWeight: 400,
                      color: accent ? T.accent : T.heading,
                      fontStyle: accent ? "italic" : "normal",
                    }}
                  >
                    {value}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

        </div>

        {/* ── Right column: name + full bio ── */}
        <FadeIn delay={120} direction="right">
          <div className="about-bio">

            {/* Hello label */}
            <div
              className="about-hello"
              style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: 18,
                color: T.muted,
                letterSpacing: 3,
                textTransform: "uppercase",
                marginBottom: 14,
              }}
            >
              Hello, I&apos;m
            </div>

            {/* Name on one line */}
            <div
              className="about-name"
              style={{
                fontFamily: "var(--font-playfair), serif",
                fontSize: 62,
                fontWeight: 400,
                lineHeight: 1.05,
                marginBottom: 18,
              }}
            >
              <span style={{ color: T.heading }}>Pranav </span>
              <span
                style={{
                  color: T.accent,
                  fontStyle: "italic",
                  textShadow: `0 0 32px ${T.accentGlow}`,
                }}
              >
                Cheraku
              </span>
            </div>

            {/* Accent divider */}
            <div
              style={{
                width: 48,
                height: 2,
                background: T.accent,
                borderRadius: 999,
                marginBottom: 24,
              }}
            />

            {/* Bio */}
            <p
              style={{
                fontFamily: "var(--font-lora), serif",
                fontSize: 15,
                color: T.body,
                lineHeight: 1.85,
                marginTop: 0,
                marginBottom: 18,
              }}
            >
              I&apos;m a Computer Science student at Western Washington University, minoring in
              Mathematics and graduating in June 2026. My interests sit at the intersection of
              software engineering and AI, encompassing everything from applying machine learning
              in creative ways to building scalable, impactful software. I&apos;m drawn to work
              that challenges me both technically and creatively, and I find the most satisfaction
              in projects where thoughtful engineering creates meaningful impact.
            </p>
            <p
              style={{
                fontFamily: "var(--font-lora), serif",
                fontSize: 15,
                color: T.body,
                lineHeight: 1.85,
                marginTop: 0,
                marginBottom: 0,
              }}
            >
              Beyond coursework, I contribute to two research labs at WWU, where I work on
              everything from computer vision and LLMs for a robotic arm to neural simulations
              for studying seizure behavior. I also interned at FAST Enterprises as a Software
              Implementation Consultant, where I worked on production tax software that directly
              affects millions of Pennsylvania taxpayers. Outside of that, I mentor and tutor
              fellow CS students while participating in hackathons and tech events to collaborate,
              explore new ideas, and stay connected. I&apos;m always open to connecting with
              others in the field, whether to exchange ideas, learn something new, or explore
              new opportunities.
            </p>

          </div>
        </FadeIn>

      </div>
    </div>
  );
}
