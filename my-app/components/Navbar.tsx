"use client"; // Required for usePathname() to read the browser URL

import Link from "next/link";
import { usePathname } from "next/navigation"; // Hook that tells the page currently on
import { T } from "@/lib/theme"; // Our color tokens

// The pages links in the navbar
const LINKS = ["about", "experience", "projects", "contact"];

export default function Navbar() {
  // pathname is something like "/about" or "/projects"
  const pathname = usePathname();

  return (
    // Sticky nav bar
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "rgba(14,17,23,0.9)",
        backdropFilter: "blur(14px)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
        padding: "0 48px",
      }}
    >
      {/* Inner wrapper — centers content and caps width */}
      <div
        style={{
          maxWidth: 1080,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: 64,
        }}
      >
        {/* Logo — clicking navigates back to the home page */}
        <Link
          href="/"
          style={{
            fontFamily: "var(--font-playfair), serif",
            fontSize: 20,
            color: T.heading,
            textDecoration: "none",
          }}
        >
          Pranav<span style={{ fontStyle: "italic", color: T.accent }}>C</span>
        </Link>

        {/* Nav links — looping over the LINKS array so no repeat */}
        <div style={{ display: "flex", gap: 2 }}>
          {LINKS.map((link) => {
            // Check if this link matches the current page
            const isActive = pathname === `/${link}`;
            return (
              <Link
                key={link}
                href={`/${link}`}
                style={{
                  background: isActive ? `${T.accent}10` : "none",
                  color: isActive ? T.accent : T.muted,
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: 13,
                  fontWeight: isActive ? 500 : 400,
                  padding: "7px 16px",
                  borderRadius: 50,
                  textDecoration: "none",
                  transition: "all 0.25s",
                }}
              >
                {/* Capitalize the first letter: "about" → "About" */}
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
