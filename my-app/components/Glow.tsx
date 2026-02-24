import { T } from "@/lib/theme";

interface GlowProps {
  color?: string;
  size?: number;
  top?: number | string;
  left?: number | string;
  right?: number | string;
  bottom?: number | string;
  opacity?: number;
}

// Decorative blurred circle that creates atmospheric depth behind content
export default function Glow({
  color = T.accent,
  size = 400,
  top,
  left,
  right,
  bottom,
  opacity = 0.06,
}: GlowProps) {
  return (
    <div
      style={{
        position: "absolute",
        width: size,
        height: size,
        borderRadius: "50%",
        background: color,
        // Blur radius = half the element size for a smooth, wide glow
        filter: `blur(${size / 2}px)`,
        opacity,
        top,
        left,
        right,
        bottom,
        pointerEvents: "none",
      }}
    />
  );
}
