"use client";

import Link from "next/link";

import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { MobileNav } from "@/components/layout/mobile-nav";

const navigation = [
  {
    label: "Features",
    href: "#features",
  },
  {
    label: "Dreams",
    href: "#dreams",
  },
  {
    label: "Journal",
    href: "#journal",
  },
  {
    label: "Pricing",
    href: "#pricing",
  },
];

export function Navbar() {
  return (
    <header
      className="
        sticky
        top-0
        z-50
        border-b
        border-white/5
        bg-[#09090B]/70
        backdrop-blur-2xl
        supports-[backdrop-filter]:bg-[#09090B]/60
      "
    >
      <Container>
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="
                  relative
                  text-sm
                  text-[#F4F1EA]/70
                  transition-all
                  duration-300
                  hover:text-[#F4F1EA]
                "
              >
                <span>{item.label}</span>

                <span
                  className="
                    absolute
                    -bottom-2
                    left-1/2
                    h-px
                    w-0
                    -translate-x-1/2
                    bg-gradient-to-r
                    from-transparent
                    via-[#D6B25E]
                    to-transparent
                    transition-all
                    duration-300
                    group-hover:w-full
                  "
                />
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link
              href="#pricing"
              className="
                group
                relative
                inline-flex
                items-center
                justify-center
                overflow-hidden
                rounded-2xl
                border
                border-[#D6B25E]/30
                px-5
                py-2.5
                text-sm
                font-medium
                text-[#F4F1EA]
                transition-all
                duration-300
                hover:border-[#D6B25E]/60
                hover:shadow-[0_0_30px_rgba(214,178,94,0.15)]
              "
            >
              <span
                className="
                  absolute
                  inset-0
                  bg-gradient-to-r
                  from-[#D6B25E]/10
                  via-[#D6B25E]/5
                  to-[#8B5CF6]/10
                  opacity-100
                "
              />

              <span className="relative z-10">
                Start Your Journey
              </span>
            </Link>
          </div>

          {/* Mobile Navigation */}
          <MobileNav />
        </div>
      </Container>

      {/* Luxury Divider */}
      <div
        className="
          absolute
          bottom-0
          left-0
          h-px
          w-full
          bg-gradient-to-r
          from-transparent
          via-[#D6B25E]/30
          to-transparent
        "
      />
    </header>
  );
}