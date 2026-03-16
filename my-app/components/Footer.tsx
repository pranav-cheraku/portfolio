import { T } from "@/lib/theme"; // Color tokens

export default function Footer() {
  return (
    // Thin top border to separate footer from page content
    <footer
      style={{
        borderTop: `1px solid ${T.border}`,
        padding: "24px 48px",
        background: T.bg,
        position: "relative",
        zIndex: 1,
      }}
    >
      {/* Inner wrapper — centered */}
      <div
        style={{
          maxWidth: 1080,
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-lora), serif",
            fontSize: 12,
            color: T.muted,
          }}
        >
          © 2026 Pranav Cheraku
        </span>
      </div>
    </footer>
  );
}
