"use client";

import { useState } from "react";
import { T } from "@/lib/theme";

// Tracks which field is currently focused for accent border highlight
type FocusedField = "name" | "email" | "message" | null;

// Shared input style — slightly rounded, border brightens on focus
function inputStyle(focused: boolean): React.CSSProperties {
  return {
    width: "100%",
    boxSizing: "border-box",
    background: "rgba(255,255,255,0.04)",
    border: `1px solid ${focused ? T.accent : T.border}`,
    borderRadius: 12,
    padding: "14px 18px",
    fontFamily: "var(--font-dm-sans), sans-serif",
    fontSize: 14,
    color: T.heading,
    outline: "none",
    transition: "border-color 0.25s ease",
  };
}

// Shared label style
function labelStyle(): React.CSSProperties {
  return {
    display: "block",
    fontFamily: "var(--font-dm-sans), sans-serif",
    fontSize: 13,
    color: T.muted,
    letterSpacing: 2,
    textTransform: "uppercase",
    marginBottom: 10,
  };
}

// Contact form with name, email, message fields and a success state on submit
export default function ContactForm() {
  const [focused, setFocused] = useState<FocusedField>(null);
  const [submitted, setSubmitted] = useState(false);
  const [btnHovered, setBtnHovered] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={{ paddingTop: 8 }}>
        {/* Success heading */}
        <div
          style={{
            fontFamily: "var(--font-playfair), serif",
            fontSize: 28,
            fontWeight: 400,
            fontStyle: "italic",
            color: T.accent,
            marginBottom: 10,
          }}
        >
          Message sent.
        </div>

        {/* Success subtext */}
        <div
          style={{
            fontFamily: "var(--font-lora), serif",
            fontSize: 15,
            color: T.body,
            fontStyle: "italic",
          }}
        >
          Thanks for reaching out, I&apos;ll get back to you soon!
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>

      {/* Name field */}
      <div style={{ marginBottom: 16 }}>
        <label style={labelStyle()}>Name</label>
        <input
          type="text"
          placeholder="What should I call you?"
          required
          onFocus={() => setFocused("name")}
          onBlur={() => setFocused(null)}
          style={inputStyle(focused === "name")}
        />
      </div>

      {/* Email field */}
      <div style={{ marginBottom: 16 }}>
        <label style={labelStyle()}>Email</label>
        <input
          type="email"
          placeholder="Where can I reply?"
          required
          onFocus={() => setFocused("email")}
          onBlur={() => setFocused(null)}
          style={inputStyle(focused === "email")}
        />
      </div>

      {/* Message field */}
      <div style={{ marginBottom: 24 }}>
        <label style={labelStyle()}>Message</label>
        <textarea
          rows={6}
          placeholder="What's on your mind?"
          required
          onFocus={() => setFocused("message")}
          onBlur={() => setFocused(null)}
          style={{ ...inputStyle(focused === "message"), resize: "vertical" }}
        />
      </div>

      {/* Submit button — pill shape, warm gradient, left-aligned */}
      <button
        type="submit"
        onMouseEnter={() => setBtnHovered(true)}
        onMouseLeave={() => setBtnHovered(false)}
        style={{
          fontFamily: "var(--font-dm-sans), sans-serif",
          fontSize: 15,
          fontWeight: 500,
          color: "#1a1208",
          background: `linear-gradient(135deg, ${T.accent}, #d4a0c0)`,
          border: "none",
          borderRadius: 50,
          padding: "14px 36px",
          cursor: "pointer",
          opacity: btnHovered ? 0.88 : 1,
          transform: btnHovered ? "translateY(-2px)" : "translateY(0)",
          transition: "opacity 0.25s ease, transform 0.25s ease",
        }}
      >
        Send it
      </button>

    </form>
  );
}
