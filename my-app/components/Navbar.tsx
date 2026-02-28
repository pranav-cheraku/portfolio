"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { T } from "@/lib/theme";
import ThemeToggle from "./ThemeToggle";

const LINKS = ["about", "education", "experience", "projects", "contact"];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const closeMenu = () => {
    setIsClosing(true);
    setTimeout(() => {
      setMenuOpen(false);
      setIsClosing(false);
    }, 250);
  };

  return (
    <>
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          background: "var(--color-nav-bg)",
          backdropFilter: "blur(14px)",
          borderBottom: "1px solid var(--color-nav-border)",
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
          {/* Logo */}
          <Link
            href="/"
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: 20,
              color: T.heading,
              textDecoration: "none",
            }}
          >
            Pranav <span style={{ fontStyle: "italic", color: T.accent }}>C</span>
          </Link>

          {/* Desktop nav links — hidden on mobile */}
          <div className="nav-links" style={{ display: "flex", gap: 2 }}>
            {LINKS.map((link) => {
              const isActive = pathname === `/${link}`;
              return (
                <Link
                  key={link}
                  href={`/${link}`}
                  style={{
                    background: isActive ? T.accentSubtle : "none",
                    color: isActive ? T.accent : T.body,
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontSize: 13,
                    fontWeight: 500,
                    padding: "7px 16px",
                    borderRadius: 50,
                    textDecoration: "none",
                    transition: "all 0.25s",
                  }}
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </Link>
              );
            })}
          </div>

          {/* Right-side controls: theme toggle + mobile hamburger */}
          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <ThemeToggle />

            {/* Mobile toggle button — three lines collapse to one */}
            <button
              className="nav-mobile-btn"
              onClick={() => (menuOpen && !isClosing ? closeMenu() : setMenuOpen(true))}
              aria-label="Toggle menu"
              style={{
                display: "none",
                flexDirection: "column",
                justifyContent: "center",
                gap: 5,
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 4,
              }}
            >
              <span
                style={{
                  display: "block",
                  width: 22,
                  height: 2,
                  background: T.body,
                  borderRadius: 2,
                  opacity: menuOpen ? 0 : 1,
                  transform: menuOpen ? "translateY(7px)" : "none",
                  transition: "opacity 0.25s ease, transform 0.25s ease",
                }}
              />
              <span
                style={{
                  display: "block",
                  width: 22,
                  height: 2,
                  background: T.body,
                  borderRadius: 2,
                  transition: "background 0.25s ease",
                }}
              />
              <span
                style={{
                  display: "block",
                  width: 22,
                  height: 2,
                  background: T.body,
                  borderRadius: 2,
                  opacity: menuOpen ? 0 : 1,
                  transform: menuOpen ? "translateY(-7px)" : "none",
                  transition: "opacity 0.25s ease, transform 0.25s ease",
                }}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile dropdown — rendered outside nav so it doesn't affect sticky layout */}
      {(menuOpen || isClosing) && (
        <>
          {/* Invisible backdrop — closes menu on outside tap */}
          <div
            onClick={closeMenu}
            style={{ position: "fixed", inset: 0, zIndex: 98 }}
          />

          {/* Menu panel */}
          <div
            className={isClosing ? "nav-mobile-menu-closing" : "nav-mobile-menu"}
            style={{
              position: "fixed",
              top: 64,
              left: 0,
              right: 0,
              zIndex: 99,
              background: "var(--color-nav-bg-solid)",
              backdropFilter: "blur(14px)",
              borderBottom: "1px solid var(--color-nav-border)",
              padding: "8px 28px 20px",
              overflow: "hidden",
            }}
          >
            {LINKS.map((link) => {
              const isActive = pathname === `/${link}`;
              return (
                <Link
                  key={link}
                  href={`/${link}`}
                  onClick={closeMenu}
                  style={{
                    display: "block",
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontSize: 16,
                    color: isActive ? T.accent : T.body,
                    fontWeight: 500,
                    padding: "11px 12px",
                    borderLeft: isActive ? `2px solid ${T.accent}` : "2px solid transparent",
                    textDecoration: "none",
                    transition: "color 0.2s ease",
                  }}
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </Link>
              );
            })}
          </div>
        </>
      )}
    </>
  );
}
