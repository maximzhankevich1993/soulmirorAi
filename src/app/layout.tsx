import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";

import "./globals.css";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "SoulMirror AI",
  description:
    "Discover your archetypes, decode dreams, explore tarot symbolism, and unlock deeper self-understanding with AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`
          ${inter.variable}
          ${cormorant.variable}
          bg-[#09090B]
          text-[#F4F1EA]
          antialiased
        `}
      >
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}