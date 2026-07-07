"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { MobileNav } from "@/components/layout/mobile-nav";
import { AuthWidget } from "@/components/auth/auth-widget";

const navigation = [
  { label: "Features", href: "#features" },
  { label: "Dreams", href: "#dreams" },
  { label: "Journal", href: "#journal" },
  { label: "Pricing", href: "#pricing" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed
        top-0
        z-50
        w-full
        transition-all
        duration-300
        border-b
        ${
          scrolled
            ? "bg-[#09090B]/70 backdrop-blur-2xl border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
            : "bg-transparent border-transparent"
        }
      `}
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
                  group
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

          {/* Desktop Actions */}
<div className="hidden lg:flex items-center gap-4">
  <Link
    href="#pricing"
    className="
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
    <span className="absolute inset-0 bg-gradient-to-r from-[#D6B25E]/10 via-transparent to-[#8B5CF6]/10" />
    <span className="relative z-10">Start Journey</span>
  </Link>

  <AuthWidget />
</div>

          {/* Mobile */}
          <MobileNav />
        </div>
      </Container>

      {/* Luxury bottom glow line */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          h-px
          w-full
          bg-gradient-to-r
          from-transparent
          via-[#D6B25E]/30
          to-transparent
          opacity-60
        "
      />
    </header>
  );
}