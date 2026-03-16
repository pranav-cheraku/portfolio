export const T = {
  bg: "var(--color-bg)",
  surface: "var(--color-surface)",
  border: "var(--color-border)",
  heading: "var(--color-heading)",
  body: "var(--color-body)",
  muted: "var(--color-muted)",
  accent: "var(--color-accent)",
  accentGlow: "var(--color-accent-glow)",
  accentSubtle: "var(--color-accent-subtle)",
  accentGradientEnd: "var(--color-accent-gradient-end)",
  accent2: "var(--color-accent2)",
  accent3: "var(--color-accent3)",
  error: "var(--color-error)",
};

// Explicit tint lookups — use these instead of string.replace() on CSS variable names
export const tintOf: Record<string, string> = {
  [T.accent]:  "var(--color-accent-tint)",
  [T.accent2]: "var(--color-accent2-tint)",
  [T.accent3]: "var(--color-accent3-tint)",
};

export const tintHoverOf: Record<string, string> = {
  [T.accent]:  "var(--color-accent-tint-hover)",
  [T.accent2]: "var(--color-accent2-tint-hover)",
  [T.accent3]: "var(--color-accent3-tint-hover)",
};
