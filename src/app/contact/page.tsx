
import Link from "next/link";
import {
  ArrowUpRight,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
  Twitter,
} from "lucide-react";

import { Container } from "@/components/ui/container";

export const metadata = {
  title: "Contact SoulMirror AI",
  description:
    "Connect with SoulMirror AI for support, partnerships, feedback and collaboration.",
};

const socialLinks = [
  {
    name: "X",
    href: "#",
    icon: Twitter,
  },
  {
    name: "Instagram",
    href: "#",
    icon: Instagram,
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: Linkedin,
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#09090B] text-[#F4F1EA]">
      {/* HERO */}

      <section className="relative pt-36 pb-24 md:pt-44 md:pb-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#D6B25E]/[0.05] blur-[150px]" />

          <div className="absolute right-[-200px] top-[250px] h-[450px] w-[450px] rounded-full bg-[#8B5CF6]/[0.04] blur-[150px]" />
        </div>

        <Container>
          <section className="relative mx-auto max-w-5xl">
            <p className="text-xs uppercase tracking-[0.45em] text-[#D6B25E]">
              Contact SoulMirror
            </p>

            <h1
              className="
                mt-7
                max-w-4xl
                font-[family:var(--font-cormorant)]
                text-6xl
                font-light
                leading-[0.95]
                tracking-tight
                md:text-8xl
              "
            >
              Let&apos;s connect
              <span className="text-[#D6B25E]">.</span>
            </h1>

            <p
              className="
                mt-8
                max-w-2xl
                text-lg
                leading-8
                text-white/55
                md:text-xl
              "
            >
              Whether you have a question, an idea, feedback about
              SoulMirror or want to explore a collaboration, we&apos;d
              love to hear from you.
            </p>
          </section>
        </Container>
      </section>

      {/* CONTACT CARDS */}

      <section className="relative pb-24 md:pb-32">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {/* SUPPORT */}

            <div
              className="
                group
                relative
                overflow-hidden
                rounded-[40px]
                border
                border-white/10
                bg-white/[0.03]
                p-8
                backdrop-blur-3xl
                transition-all
                duration-500
                hover:border-[#D6B25E]/20
                hover:bg-white/[0.045]
                md:p-10
              "
            >
              <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#D6B25E]/[0.07] blur-[100px] transition-all duration-700 group-hover:bg-[#D6B25E]/[0.11]" />

              <div className="relative">
                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-[#D6B25E]/20
                    bg-[#D6B25E]/[0.06]
                  "
                >
                  <Mail
                    size={22}
                    className="text-[#D6B25E]"
                  />
                </div>

                <p className="mt-8 text-[10px] uppercase tracking-[0.4em] text-[#D6B25E]">
                  Support
                </p>

                <h2 className="mt-4 font-[family:var(--font-cormorant)] text-4xl font-light">
                  Customer Care
                </h2>

                <p className="mt-4 max-w-md leading-7 text-white/50">
                  Questions about your account, SoulMirror features or
                  your experience? Reach out and our team will help.
                </p>

                <a
                  href="mailto:support@soulmirror.ai"
                  className="
                    mt-8
                    inline-flex
                    items-center
                    gap-2
                    text-sm
                    text-[#F4F1EA]
                    transition-colors
                    hover:text-[#D6B25E]
                  "
                >
                  support@soulmirror.ai
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </div>

            {/* PARTNERSHIPS */}

            <div
              className="
                group
                relative
                overflow-hidden
                rounded-[40px]
                border
                border-white/10
                bg-white/[0.03]
                p-8
                backdrop-blur-3xl
                transition-all
                duration-500
                hover:border-[#8B5CF6]/20
                hover:bg-white/[0.045]
                md:p-10
              "
            >
              <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-[#8B5CF6]/[0.06] blur-[100px] transition-all duration-700 group-hover:bg-[#8B5CF6]/[0.1]" />

              <div className="relative">
                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-[#8B5CF6]/20
                    bg-[#8B5CF6]/[0.06]
                  "
                >
                  <MessageCircle
                    size={22}
                    className="text-[#D6B25E]"
                  />
                </div>

                <p className="mt-8 text-[10px] uppercase tracking-[0.4em] text-[#D6B25E]">
                  Partnerships
                </p>

                <h2 className="mt-4 font-[family:var(--font-cormorant)] text-4xl font-light">
                  Let&apos;s build together
                </h2>

                <p className="mt-4 max-w-md leading-7 text-white/50">
                  Partnerships, media, creative collaborations and
                  opportunities to build the future of personal
                  intelligence.
                </p>

                <a
                  href="mailto:hello@soulmirror.ai"
                  className="
                    mt-8
                    inline-flex
                    items-center
                    gap-2
                    text-sm
                    text-[#F4F1EA]
                    transition-colors
                    hover:text-[#D6B25E]
                  "
                >
                  hello@soulmirror.ai
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SOCIAL */}

      <section className="relative pb-32 md:pb-44">
        <Container>
          <div
            className="
              relative
              overflow-hidden
              rounded-[44px]
              border
              border-white/10
              bg-white/[0.025]
              px-8
              py-12
              backdrop-blur-3xl
              md:px-12
              md:py-16
            "
          >
            <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-[500px] -translate-x-1/2 rounded-full bg-[#D6B25E]/[0.04] blur-[100px]" />

            <div className="relative flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.4em] text-[#D6B25E]">
                  Follow the journey
                </p>

                <h2 className="mt-4 font-[family:var(--font-cormorant)] text-4xl font-light md:text-5xl">
                  SoulMirror online
                </h2>

                <p className="mt-4 max-w-xl leading-7 text-white/45">
                  Follow SoulMirror and EON AI as we explore the future
                  of personal intelligence.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <Link
                      key={social.name}
                      href={social.href}
                      target={social.href !== "#" ? "_blank" : undefined}
                      rel={
                        social.href !== "#"
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="
                        group
                        flex
                        items-center
                        gap-3
                        rounded-2xl
                        border
                        border-white/10
                        bg-white/[0.03]
                        px-5
                        py-3
                        text-sm
                        text-white/60
                        transition-all
                        duration-300
                        hover:border-[#D6B25E]/25
                        hover:bg-[#D6B25E]/[0.05]
                        hover:text-[#F4F1EA]
                      "
                    >
                      <Icon
                        size={17}
                        className="transition-colors group-hover:text-[#D6B25E]"
                      />

                      {social.name}

                      <ArrowUpRight
                        size={14}
                        className="text-white/20 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#D6B25E]"
                      />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

