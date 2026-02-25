import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, Lora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Load Playfair Display
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
});

// Load DM Sans
const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

// Load Lora
const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
});

// Metadata shows up in browser tab titles and Google search results
export const metadata: Metadata = {
  title: "Pranav Cheraku — Portfolio",
  description: "Hello this is my personal website to showcase my work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Font variables and dark background applied globally */}
      <body
        className={`${playfair.variable} ${dmSans.variable} ${lora.variable}`}
        style={{
          background: "#0e1117",
          color: "#f2ece4",
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Navbar renders on every page */}
        <Navbar />

        {/* Main content area */}
        <main
          style={{
            flex: 1,
            maxWidth: 1080,
            width: "100%",
            margin: "0 auto",
            padding: "40px 48px 72px",
            boxSizing: "border-box",
          }}
        >
          {/* Each page's content gets injected here */}
          {children}
        </main>

        {/* Footer renders on every page */}
        <Footer />
      </body>
    </html>
  );
}
