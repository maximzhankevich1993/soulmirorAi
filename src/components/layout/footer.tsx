
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";

const footerLinks = [
  {
    title: "Product",
    links: [
      {
        label: "Features",
        href: "/#features",
      },
      {
        label: "Dreams",
        href: "/#dreams",
      },
      {
        label: "Journal",
        href: "/#journal",
      },
    ],
  },

  {
    title: "Company",
    links: [
      {
        label: "About SoulMirror",
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
        border-t
        border-white/5
        bg-[#050505]
      "
    >
      {/* Cinematic gold line */}

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

          <div className="lg:col-span-6">
            {/* Logo already contains its own Link */}

            <Logo />

            <div className="mt-7 max-w-md">
              <p
                className="
                  text-sm
                  leading-7
                  text-[#F4F1EA]/55
                "
              >
                SoulMirror AI is a personal intelligence
                experience designed to help you explore
                emotions, dreams, identity and the patterns
                shaping your inner world.
              </p>
            </div>

            <div
              className="
                mt-7
                text-[10px]
                uppercase
                tracking-[0.4em]
                text-[#D6B25E]/70
              "
            >
              A product by EON AI
            </div>
          </div>

          {/* LINKS */}

          <div
            className="
              grid
              gap-10
              sm:grid-cols-3
              lg:col-span-6
            "
          >
            {footerLinks.map((group) => (
              <div key={group.title}>
                <h4
                  className="
                    text-xs
                    font-medium
                    uppercase
                    tracking-[0.25em]
                    text-[#F4F1EA]
                  "
                >
                  {group.title}
                </h4>

                <ul className="mt-6 space-y-4">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      {link.href === "#" ? (
                        <span
                          className="
                            cursor-default
                            text-sm
                            text-[#F4F1EA]/25
                          "
                        >
                          {link.label}
                        </span>
                      ) : (
                        <a
                          href={link.href}
                          className="
                            text-sm
                            text-[#F4F1EA]/45
                            transition-all
                            duration-300
                            hover:text-[#D6B25E]
                          "
                        >
                          {link.label}
                        </a>
                      )}
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
                text-[#F4F1EA]/40
              "
            >
              © {new Date().getFullYear()} EON AI.
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
            <span>Conscious AI</span>
            <span>Personal Intelligence</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}

