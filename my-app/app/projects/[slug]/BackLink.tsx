"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { T } from "@/lib/theme";

const LABEL_MAP: Record<string, string> = {
  Featured: "Featured Projects",
  All: "All Projects",
  "Systems Programming": "Systems Programming",
  "Machine Learning": "Machine Learning",
  Mobile: "Mobile",
  Algorithms: "Algorithms",
  Databases: "Databases",
};

export default function BackLink({ accent }: { accent: string }) {
  const [hovered, setHovered] = useState(false);
  const searchParams = useSearchParams();
  const from = searchParams.get("from") ?? "Featured";
  const label = LABEL_MAP[from] ?? "Projects";
  const href = `/projects?filter=${encodeURIComponent(from)}`;

  return (
    <Link
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        fontFamily: "var(--font-dm-sans), sans-serif",
        fontSize: 14,
        fontWeight: 500,
        color: hovered ? T.heading : accent,
        textDecoration: "none",
        marginBottom: 20,
        border: `1px solid ${accent}`,
        borderRadius: 999,
        padding: "8px 16px",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
        filter: hovered ? "brightness(1.25)" : "none",
        transition: "color 0.2s ease, transform 0.25s cubic-bezier(0.22,1,0.36,1), filter 0.25s ease",
      }}
    >
      <ChevronLeft size={15} />
      {label}
    </Link>
  );
}
