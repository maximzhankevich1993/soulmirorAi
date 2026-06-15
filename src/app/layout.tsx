import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SoulMirror AI",
  description: "AI-powered self-discovery platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}