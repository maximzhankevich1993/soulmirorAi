import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";

const footerGroups = [
  {
    title: "Explore",
    links: [
      {
        label: "Features",
        href: "/#features",
      },
      {
        label: "Dream Analysis",
        href: "/#dreams",
      },
      {
        label: "Journal",
        href: "/#journal",
      },
      {
        label: "Pricing",
        href: "/#pricing",
      },
    ],
  },

  {
    title: "SoulMirror",
    links: [
      {
        label: "About",
        href: "/about",
      },
      {
        label: "Contact",
        href: "/contact",
      },
      {
        label: "Sign In",
        href: "/auth",
      },
      {
        label: "Dashboard",
        href: "/dashboard",
      },
    ],
  },

  {
    title: "Legal",
    links: [
      {
        label: "Privacy Policy",
        href: "/privacy",
      },
      {
        label: "Terms of Service",
        href: "/terms",
      },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative mt-32 overflow-hidden border-t border-white/[0.07] bg-[#050505]">
      {/* Ambient glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-40
          -top-40
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#D6B25E]/[0.05]
          blur-[150px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-60
          -left-40
          h-[450px]
          w-[450px]
          rounded-full
          bg-[#8B5CF6]/[0.035]
          blur-[150px]
        "
      />

      {/* Top cinematic line */}
      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-0
          h-px
          w-full
          bg-gradient-to-r
          from-transparent
          via-[#D6B25E]/30
          to-transparent
        "
      />

      <Container className="relative z-10 py-20 md:py-28">
        {/* Main footer */}
        <div className="grid gap-16 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-5">
            <Link
              href="/"
              className="
                group
                inline-flex
                cursor-pointer
                items-center
                rounded-2xl
                transition-all
                duration-300
                hover:opacity-90
              "
            >
              <Logo />
            </Link>

            <p
              className="
                mt-7
                max-w-md
                text-sm
                leading-8
                text-white/45
              "
            >
              A personal intelligence experience for
              exploring identity, emotions, dreams and
              the patterns shaping your inner world.
            </p>

            <div
              className="
                mt-8
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-[#D6B25E]/15
                bg-[#D6B25E]/[0.04]
                px-4
                py-2
              "
            >
              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-[#D6B25E]
                  shadow-[0_0_12px_rgba(214,178,94,0.8)]
                "
              />

              <span
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.35em]
                  text-[#D6B25E]/70
                "
              >
                A product by EON AI
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div className="grid gap-12 sm:grid-cols-3 lg:col-span-7">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <p
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.4em]
                    text-[#D6B25E]/70
                  "
                >
                  {group.title}
                </p>

                <ul className="mt-6 space-y-4">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="
                          group
                          inline-flex
                          cursor-pointer
                          items-center
                          gap-2
                          text-sm
                          text-white/45
                          transition-all
                          duration-300
                          hover:text-[#F4F1EA]
                        "
                      >
                        <span>{link.label}</span>

                        <ArrowUpRight
                          size={12}
                          className="
                            opacity-0
                            -translate-x-1
                            transition-all
                            duration-300
                            group-hover:translate-x-0
                            group-hover:opacity-60
                            group-hover:text-[#D6B25E]
                          "
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Philosophy */}
        <div
          className="
            relative
            mt-24
            overflow-hidden
            rounded-[32px]
            border
            border-white/[0.07]
            bg-white/[0.02]
            px-7
            py-8
            backdrop-blur-2xl
            md:px-10
            md:py-9
          "
        >
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-r
              from-[#D6B25E]/[0.03]
              via-transparent
              to-[#8B5CF6]/[0.03]
            "
          />

          <div
            className="
              relative
              flex
              flex-col
              gap-5
              md:flex-row
              md:items-center
              md:justify-between
            "
          >
            <div>
              <p
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.4em]
                  text-[#D6B25E]/60
                "
              >
                SoulMirror Philosophy
              </p>

              <p
                className="
                  mt-3
                  font-[family:var(--font-cormorant)]
                  text-2xl
                  font-light
                  text-[#F4F1EA]
                  md:text-3xl
                "
              >
                Technology should help us understand
                ourselves.
              </p>
            </div>

            <span
              className="
                text-[9px]
                uppercase
                tracking-[0.35em]
                text-white/25
              "
            >
              Conscious AI
            </span>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="
            mt-10
            flex
            flex-col
            gap-5
            border-t
            border-white/[0.07]
            pt-7
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <div>
            <p className="text-xs text-white/30">
              © {new Date().getFullYear()} EON AI.
              All rights reserved.
            </p>

            <p className="mt-2 text-[10px] text-white/20">
              SoulMirror AI is a product by EON AI.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="
                cursor-pointer
                text-[10px]
                uppercase
                tracking-[0.25em]
                text-white/25
                transition-colors
                hover:text-[#D6B25E]
              "
            >
              Privacy
            </Link>

            <Link
              href="/terms"
              className="
                cursor-pointer
                text-[10px]
                uppercase
                tracking-[0.25em]
                text-white/25
                transition-colors
                hover:text-[#D6B25E]
              "
            >
              Terms
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}