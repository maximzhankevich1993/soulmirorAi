import Link from "next/link";

import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";

const footerLinks = [
  {
    title: "Product",
    links: [
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
    ],
  },

  {
    title: "EON Ecosystem",
    links: [
      {
        label: "SoulMirror",
        href: "/",
      },
      {
        label: "Memora",
        href: "#",
      },
      {
        label: "Future Self",
        href: "#",
      },
      {
        label: "Parallel",
        href: "#",
      },
    ],
  },

  {
    title: "Company",
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
        label: "Careers",
        href: "#",
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
    <footer
      className="
        relative
        mt-24
        overflow-hidden
        border-t
        border-white/[0.06]
        bg-[#050505]
      "
    >
      {/* Ambient glow */}

      <div
        className="
          pointer-events-none
          absolute
          -top-40
          left-1/2
          h-[500px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-[#D6B25E]/[0.035]
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

      <Container className="relative py-20 md:py-24">
        <div
          className="
            grid
            gap-16
            lg:grid-cols-12
          "
        >
          {/* BRAND */}

          <div
            className="
              lg:col-span-4
            "
          >
            <Link
              href="/"
              className="
                inline-flex
                cursor-pointer
                transition-opacity
                duration-300
                hover:opacity-80
              "
            >
              <Logo />
            </Link>

            <p
              className="
                mt-7
                max-w-sm
                text-sm
                leading-7
                text-[#F4F1EA]/50
              "
            >
              SoulMirror AI is a personal intelligence
              experience created by EON AI — designed to
              explore identity, emotions, dreams and
              human potential.
            </p>

            <div
              className="
                mt-7
                flex
                items-center
                gap-3
              "
            >
              <div
                className="
                  h-px
                  w-8
                  bg-[#D6B25E]/50
                "
              />

              <span
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.4em]
                  text-[#D6B25E]/70
                "
              >
                A product by EON AI
              </span>
            </div>
          </div>

          {/* LINKS */}

          <div
            className="
              grid
              gap-12
              sm:grid-cols-2
              lg:col-span-8
              lg:grid-cols-4
            "
          >
            {footerLinks.map((group) => (
              <div key={group.title}>
                <h4
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.35em]
                    text-[#F4F1EA]/70
                  "
                >
                  {group.title}
                </h4>

                <ul className="mt-6 space-y-3.5">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="
                          group
                          inline-flex
                          cursor-pointer
                          items-center
                          text-sm
                          text-[#F4F1EA]/40
                          transition-all
                          duration-300
                          hover:translate-x-1
                          hover:text-[#D6B25E]
                        "
                      >
                        <span>{link.label}</span>

                        <span
                          className="
                            ml-2
                            w-0
                            overflow-hidden
                            text-[#D6B25E]/70
                            opacity-0
                            transition-all
                            duration-300
                            group-hover:w-3
                            group-hover:opacity-100
                          "
                        >
                          →
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM */}

        <div
          className="
            mt-20
            flex
            flex-col
            gap-6
            border-t
            border-white/[0.06]
            pt-8
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <div>
            <p
              className="
                text-xs
                text-[#F4F1EA]/35
              "
            >
              © {new Date().getFullYear()} EON AI.
              All rights reserved.
            </p>

            <p
              className="
                mt-2
                text-[10px]
                uppercase
                tracking-[0.25em]
                text-[#F4F1EA]/20
              "
            >
              SoulMirror AI · Personal Intelligence
            </p>
          </div>

          <div
            className="
              flex
              flex-wrap
              gap-x-6
              gap-y-2
              text-[10px]
              uppercase
              tracking-[0.25em]
              text-[#F4F1EA]/25
            "
          >
            <span>Conscious AI</span>

            <span>Human Evolution</span>

            <span>Personal Intelligence</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}