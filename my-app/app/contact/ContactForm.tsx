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
    background: "var(--color-surface)",
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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const formData = new FormData(e.currentTarget);
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    setLoading(false);
    if (data.success) {
      setSubmitted(true);
    } else {
      setError("Something went wrong — please try again.");
    }
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
          Message Sent
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

      {/* Web3Forms access key — loaded from .env */}
      <input type="hidden" name="access_key" value={process.env.NEXT_PUBLIC_WEB3FORMS_KEY} />

      {/* Name field */}
      <div style={{ marginBottom: 16 }}>
        <label style={labelStyle()}>Name</label>
        <input
          type="text"
          name="name"
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
          name="email"
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
          name="message"
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
        disabled={loading}
        onMouseEnter={() => setBtnHovered(true)}
        onMouseLeave={() => setBtnHovered(false)}
        style={{
          fontFamily: "var(--font-dm-sans), sans-serif",
          fontSize: 15,
          fontWeight: 500,
          color: "#1a1208",
          background: `linear-gradient(135deg, ${T.accent}, ${T.accentGradientEnd})`,
          border: "none",
          borderRadius: 50,
          padding: "14px 36px",
          cursor: loading ? "not-allowed" : "pointer",
          opacity: loading ? 0.6 : btnHovered ? 0.88 : 1,
          transform: btnHovered && !loading ? "translateY(-2px)" : "translateY(0)",
          transition: "opacity 0.25s ease, transform 0.25s ease",
        }}
      >
        {loading ? "Sending…" : "Send Message"}
      </button>

      {/* Inline error message */}
      {error && (
        <p style={{ marginTop: 12, fontSize: 13, color: "#e07070", fontFamily: "var(--font-dm-sans), sans-serif" }}>
          {error}
        </p>
      )}

    </form>
  );
}
