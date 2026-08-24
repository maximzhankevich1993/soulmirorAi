
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";

const footerGroups = [
  {
    title: "Explore",
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
        label: "Start Experience",
        href: "#soul-scan",
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
        label: "Future Self",
        href: "#",
      },
      {
        label: "Memora",
        href: "#",
      },
      {
        label: "Parallel",
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
        mt-32
        overflow-hidden
        border-t
        border-white/5
        bg-[#050505]
      "
    >
      {/* Cinematic top glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-px
          w-full
          max-w-5xl
          -translate-x-1/2
          bg-gradient-to-r
          from-transparent
          via-[#D6B25E]/40
          to-transparent
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-80
          w-[600px]
          -translate-x-1/2
          rounded-full
          bg-[#D6B25E]/[0.035]
          blur-[120px]
        "
      />

      <Container className="relative py-20 md:py-24">
        {/* Main footer */}
        <div
          className="
            grid
            gap-16
            lg:grid-cols-12
          "
        >
          {/* Brand */}
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
              experience designed to help you explore
              emotions, dreams, identity and the patterns
              that shape your inner world.
            </p>

            <div
              className="
                mt-7
                inline-flex
                items-center
                gap-3
                text-[10px]
                uppercase
                tracking-[0.35em]
                text-[#D6B25E]/70
              "
            >
              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-[#D6B25E]
                  shadow-[0_0_12px_rgba(214,178,94,0.7)]
                "
              />

              A product by EON AI
            </div>
          </div>

          {/* Links */}
          <div
            className="
              grid
              gap-10
              sm:grid-cols-2
              lg:col-span-8
              lg:grid-cols-4
            "
          >
            {footerGroups.map((group) => (
              <div key={group.title}>
                <p
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.35em]
                    text-[#D6B25E]/70
                  "
                >
                  {group.title}
                </p>

                <ul className="mt-5 space-y-3">
                  {group.links.map((link) => {
                    const isComingSoon =
                      link.href === "#";

                    return (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          scroll={
                            link.href.startsWith("#")
                              ? false
                              : true
                          }
                          className="
                            group
                            inline-flex
                            cursor-pointer
                            items-center
                            gap-2
                            text-sm
                            text-[#F4F1EA]/50
                            transition-all
                            duration-300
                            hover:text-[#F4F1EA]
                          "
                        >
                          <span
                            className="
                              relative
                              transition-colors
                              duration-300
                              group-hover:text-[#D6B25E]
                            "
                          >
                            {link.label}
                          </span>

                          {isComingSoon && (
                            <span
                              className="
                                rounded-full
                                border
                                border-[#8B5CF6]/20
                                bg-[#8B5CF6]/5
                                px-2
                                py-0.5
                                text-[7px]
                                uppercase
                                tracking-[0.2em]
                                text-purple-300/60
                              "
                            >
                              Soon
                            </span>
                          )}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div
          className="
            mt-20
            h-px
            bg-gradient-to-r
            from-transparent
            via-white/10
            to-transparent
          "
        />

        {/* Bottom */}
        <div
          className="
            mt-8
            flex
            flex-col
            gap-6
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <div>
            <p
              className="
                text-xs
                text-[#F4F1EA]/40
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
              items-center
              gap-x-6
              gap-y-2
              text-[10px]
              uppercase
              tracking-[0.25em]
              text-[#F4F1EA]/25
            "
          >
            <span>Conscious AI</span>

            <span className="hidden h-1 w-1 rounded-full bg-[#D6B25E]/40 sm:block" />

            <span>Personal Intelligence</span>

            <span className="hidden h-1 w-1 rounded-full bg-[#D6B25E]/40 sm:block" />

            <span>EON AI</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}

