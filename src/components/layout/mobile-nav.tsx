"use client";

import Link from "next/link";
import { useState } from "react";

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

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="lg:hidden">
      {/* Trigger */}
      <button
        type="button"
        aria-label="Toggle navigation"
        onClick={() => setIsOpen((prev) => !prev)}
        className="
          relative
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-xl
          border
          border-white/10
          bg-white/5
          backdrop-blur-xl
          transition-all
          duration-300
          hover:border-[#D6B25E]/30
          hover:bg-white/10
        "
      >
        <span
          className={`
            absolute h-[2px] w-5 bg-[#F4F1EA]
            transition-all duration-300
            ${isOpen ? "rotate-45" : "-translate-y-1.5"}
          `}
        />

        <span
          className={`
            absolute h-[2px] w-5 bg-[#F4F1EA]
            transition-all duration-300
            ${isOpen ? "opacity-0" : "opacity-100"}
          `}
        />

        <span
          className={`
            absolute h-[2px] w-5 bg-[#F4F1EA]
            transition-all duration-300
            ${isOpen ? "-rotate-45" : "translate-y-1.5"}
          `}
        />
      </button>

      {/* Backdrop */}
      <div
        className={`
          fixed inset-0 z-40 bg-black/60 backdrop-blur-sm
          transition-all duration-300
          ${
            isOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }
        `}
        onClick={closeMenu}
      />

      {/* Panel */}
      <div
        className={`
          fixed
          right-4
          top-20
          z-50
          w-[calc(100%-2rem)]
          max-w-sm
          rounded-3xl
          border
          border-white/10
          bg-[#09090B]/95
          p-6
          backdrop-blur-2xl
          transition-all
          duration-300
          ${
            isOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-4 opacity-0 pointer-events-none"
          }
        `}
      >
        {/* Glow */}
        <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-[#D6B25E]/5 via-transparent to-[#8B5CF6]/5" />

        <div className="relative z-10">
          {/* Navigation */}
          <nav className="flex flex-col gap-2">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                className="
                  rounded-xl
                  px-4
                  py-3
                  text-[#F4F1EA]/80
                  transition-all
                  duration-300
                  hover:bg-white/5
                  hover:text-[#F4F1EA]
                "
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Divider */}
          <div className="my-6 h-px bg-gradient-to-r from-transparent via-[#D6B25E]/40 to-transparent" />

          {/* CTA */}
          <Link
            href="#pricing"
            onClick={closeMenu}
            className="
              flex
              w-full
              items-center
              justify-center
              rounded-2xl
              border
              border-[#D6B25E]/30
              bg-gradient-to-r
              from-[#D6B25E]/15
              to-[#8B5CF6]/15
              px-5
              py-3
              text-sm
              font-medium
              text-[#F4F1EA]
              transition-all
              duration-300
              hover:border-[#D6B25E]/60
              hover:shadow-[0_0_30px_rgba(214,178,94,0.15)]
            "
          >
            Start Your Journey
          </Link>

          {/* Footer Text */}
          <p className="mt-5 text-center text-xs tracking-[0.25em] text-[#D6B25E]/70 uppercase">
            SoulMirror AI
          </p>
        </div>
      </div>
    </div>
  );
}