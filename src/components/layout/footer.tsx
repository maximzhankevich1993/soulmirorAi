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
        href: "/pricing",
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
        label: "Ecosystem",
        href: "#ecosystem",
      },
    ],
  },

  {
    title: "EON AI",
    links: [
      {
        label: "EON AI",
        href: "#",
      },
      {
        label: "Future Self",
        href: "#",
      },
      {
        label: "Memora",
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
        border-t
        border-white/5
        bg-[#050505]
      "
    >
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
          via-[#D6B25E]/40
          to-transparent
        "
      />

      <Container className="py-20">
        <div
          className="
            grid
            gap-14
            lg:grid-cols-12
          "
        >
          {/* BRAND */}

          <div className="lg:col-span-4">
            <Link
              href="/"
              className="
                inline-flex
                flex-col
                transition-opacity
                duration-300
                hover:opacity-80
              "
            >
              <div
                className="
                  font-[family:var(--font-cormorant)]
                  text-4xl
                  font-light
                  tracking-tight
                  text-[#F4F1EA]
                "
              >
                SoulMirror
              </div>

              <div
                className="
                  mt-1
                  text-[10px]
                  uppercase
                  tracking-[0.45em]
                  text-white/35
                "
              >
                AI
              </div>
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
              A personal AI intelligence experience
              for exploring identity, emotions, dreams
              and the patterns within your inner world.
            </p>

            {/* EON BRAND */}

            <div className="mt-7">
              <p
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.4em]
                  text-[#D6B25E]/70
                "
              >
                A product by
              </p>

              <p
                className="
                  mt-2
                  text-xs
                  font-medium
                  tracking-[0.2em]
                  text-white/50
                "
              >
                EON AI
              </p>
            </div>
          </div>

          {/* LINKS */}

          <div
            className="
              grid
              gap-10
              sm:grid-cols-2
              lg:col-span-8
              lg:grid-cols-4
            "
          >
            {footerLinks.map((group) => (
              <div key={group.title}>
                <h4
                  className="
                    text-[11px]
                    uppercase
                    tracking-[0.3em]
                    text-[#F4F1EA]
                  "
                >
                  {group.title}
                </h4>

                <ul className="mt-5 space-y-3">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="
                          group
                          inline-flex
                          text-sm
                          text-[#F4F1EA]/45
                          transition-all
                          duration-300
                          hover:text-[#D6B25E]
                        "
                      >
                        <span
                          className="
                            transition-transform
                            duration-300
                            group-hover:translate-x-1
                          "
                        >
                          {link.label}
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
            mt-16
            flex
            flex-col
            gap-6
            border-t
            border-white/5
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
              © {new Date().getFullYear()} SoulMirror AI.
              All rights reserved.
            </p>

            <p
              className="
                mt-2
                text-xs
                text-[#F4F1EA]/25
              "
            >
              SoulMirror AI is a product by EON AI.
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
            <span>Personal Intelligence</span>

            <span>Conscious AI</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}