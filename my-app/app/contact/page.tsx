import FadeIn from "@/components/FadeIn";
import Glow from "@/components/Glow";
import ContactLinks from "./ContactLinks";
import { T } from "@/lib/theme";

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
          I&apos;m always open to new opportunities and conversations.
        </p>
      </FadeIn>

      {/* Contact link rows */}
      <FadeIn delay={120}>
        <ContactLinks />
      </FadeIn>
    </div>
  );
}
