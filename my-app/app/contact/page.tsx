import FadeIn from "@/components/FadeIn";
import Glow from "@/components/Glow";
import ContactLinks from "./ContactLinks";
import ContactForm from "./ContactForm";
import ResumeDownload from "./ResumeDownload";
import { T } from "@/lib/theme";

const ROLES = ["Software Engineer", "AI/ML Engineer", "Data Scientist"];

export const metadata = {
  title: "Pranav Cheraku - Contact",
};

// Contact page — links and form
export default function ContactPage() {
  return (
    <div style={{ position: "relative" }}>
      {/* Gold glow orb top right */}
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
            marginBottom: 12,
          }}
        >
          Contact
        </h2>
      </FadeIn>

      {/* Italic intro line */}
      <FadeIn delay={60}>
        <p
          style={{
            fontFamily: "var(--font-lora), serif",
            fontSize: 16,
            color: T.body,
            fontStyle: "italic",
            marginBottom: 36,
            marginTop: 0,
          }}
        >
          I&apos;m actively seeking new tech opportunities
          <span style={{ margin: "0 16px", color: T.border }}>|</span>
          Open to connecting, sharing ideas, and exploring possibilities
        </p>
      </FadeIn>

      {/* Stats row — full width */}
      <FadeIn delay={100}>
        <div
          className="contact-stats"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, auto)",
            justifyContent: "space-between",
            gap: "0",
            paddingBottom: 28,
            borderBottom: `1px solid ${T.border}`,
            marginBottom: 32,
          }}
        >
          {[
            { label: "Actively Seeking", value: "New Grad Roles" },
            { label: "Graduating", value: "June 2026" },
            { label: "Availability", value: "Full-time" },
            { label: "Location", value: "Open to relocation" },
          ].map(({ label, value }) => (
            <div key={label}>
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
                  fontSize: 20,
                  color: T.heading,
                }}
              >
                {value}
              </div>
            </div>
          ))}

          {/* Resume — fifth column */}
          <ResumeDownload />

        </div>
      </FadeIn>

      {/* Two-column layout — seeking+links left, form right */}
      <div className="contact-layout" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>

        {/* Left column: seeking roles + contact links */}
        <FadeIn delay={160} direction="left">
          <div>
            {/* Seeking label */}
            <div
              style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: 13,
                color: T.muted,
                letterSpacing: 2,
                textTransform: "uppercase",
                marginBottom: 12,
              }}
            >
              Target Roles
            </div>

            {/* Role types — all on one line, wraps on mobile */}
            <div className="contact-roles" style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 40 }}>
              {ROLES.map((role, i) => (
                <span key={role} style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <span
                    style={{
                      fontFamily: "var(--font-playfair), serif",
                      fontSize: 20,
                      fontWeight: 400,
                      fontStyle: "italic",
                      color: T.accent,
                      textShadow: `0 0 20px ${T.accent}60`,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {role}
                  </span>
                  {i < ROLES.length - 1 && (
                    <span className="contact-role-sep" style={{ color: T.border }}>—</span>
                  )}
                </span>
              ))}
            </div>

            {/* Contact links */}
            <ContactLinks />
          </div>
        </FadeIn>

        {/* Right column: contact form */}
        <FadeIn delay={200} direction="right">
          <ContactForm />
        </FadeIn>

      </div>
    </div>
  );
}
