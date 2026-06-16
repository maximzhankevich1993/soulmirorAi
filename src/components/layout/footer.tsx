import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";

const footerLinks = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Dreams", href: "#dreams" },
      { label: "Journal", href: "#journal" },
      { label: "Pricing", href: "#pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/5 bg-[#09090B]">
      {/* Glow Divider */}
      <div className="pointer-events-none absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#D6B25E]/30 to-transparent" />

      <Container className="py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-5">
            <Logo />

            <p className="mt-6 max-w-md text-sm leading-relaxed text-[#F4F1EA]/60">
              SoulMirror AI helps you explore your subconscious mind
              through archetypes, dreams, tarot symbolism and AI-powered
              reflection tools.
            </p>

            <div className="mt-6 text-xs tracking-[0.3em] text-[#D6B25E]/60 uppercase">
              AI • Psychology • Self-Discovery
            </div>
          </div>

          {/* Links */}
          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-7">
            {footerLinks.map((group) => (
              <div key={group.title}>
                <h4 className="text-sm font-medium text-[#F4F1EA]">
                  {group.title}
                </h4>

                <ul className="mt-4 space-y-3">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="
                          text-sm
                          text-[#F4F1EA]/60
                          transition-all
                          duration-300
                          hover:text-[#D6B25E]
                        "
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-xs text-[#F4F1EA]/40">
            © {new Date().getFullYear()} SoulMirror AI. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-xs text-[#F4F1EA]/40">
            <span className="hover:text-[#D6B25E] transition-colors cursor-default">
              Made with intention
            </span>
            <span className="hover:text-[#D6B25E] transition-colors cursor-default">
              Conscious AI
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}