import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";

export function Footer() {
  const productLinks = [
    {
      label: "Tarot Readings",
      href: "#features",
    },
    {
      label: "Dream Analysis",
      href: "#dreams",
    },
    {
      label: "AI Journal",
      href: "#journal",
    },
    {
      label: "Archetypes",
      href: "#archetypes",
    },
  ];

  const legalLinks = [
    {
      label: "Privacy Policy",
      href: "/privacy",
    },
    {
      label: "Terms of Service",
      href: "/terms",
    },
    {
      label: "Cookie Policy",
      href: "/cookies",
    },
  ];

  const socialLinks = [
    {
      label: "X",
      href: "https://x.com",
    },
    {
      label: "Discord",
      href: "https://discord.com",
    },
    {
      label: "GitHub",
      href: "https://github.com",
    },
  ];

  return (
    <footer className="relative border-t border-white/10 bg-[#09090B]">
      {/* Luxury Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D6B25E]/60 to-transparent" />

      <Container>
        <div className="py-16">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div className="space-y-6">
              <Logo />

              <p className="max-w-sm text-sm leading-relaxed text-[#F4F1EA]/60">
                Discover your inner archetypes, decode dreams, and
                explore the symbolic language of the soul through
                advanced AI-powered guidance.
              </p>

              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-[#D6B25E]" />
                <span className="text-xs uppercase tracking-[0.3em] text-[#D6B25E]">
                  SoulMirror Pro
                </span>
              </div>
            </div>

            {/* Product */}
            <div>
              <h3 className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-[#D6B25E]">
                Product
              </h3>

              <ul className="space-y-3">
                {productLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#F4F1EA]/60 transition-colors duration-300 hover:text-[#F4F1EA]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-[#D6B25E]">
                Legal
              </h3>

              <ul className="space-y-3">
                {legalLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#F4F1EA]/60 transition-colors duration-300 hover:text-[#F4F1EA]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div>
              <h3 className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-[#D6B25E]">
                Community
              </h3>

              <ul className="space-y-3">
                {socialLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#F4F1EA]/60 transition-colors duration-300 hover:text-[#8B5CF6]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-16 border-t border-white/10 pt-8">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <p className="text-xs tracking-wide text-[#F4F1EA]/40">
                © {new Date().getFullYear()} SoulMirror AI.
                All rights reserved.
              </p>

              <p className="text-xs uppercase tracking-[0.25em] text-[#F4F1EA]/30">
                Dark Luxury Mysticism
              </p>
            </div>
          </div>
        </div>
      </Container>

      {/* Ambient Glow */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#8B5CF6]/10 via-transparent to-transparent" />
    </footer>
  );
}