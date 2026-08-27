"use client";

import { motion } from "framer-motion";

import {
  Brain,
  Moon,
  Sparkles,
  Eye,
  ArrowUpRight,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

const modules: {
  title: string;
  description: string;
  status: string;
  number: string;
  icon: LucideIcon;
}[] = [
  {
    number: "01",
    title: "Identity System",
    description:
      "Understand your personality patterns, archetypes and the deeper structures shaping who you are.",
    status: "Active",
    icon: Brain,
  },
  {
    number: "02",
    title: "Dream Intelligence",
    description:
      "Explore symbols, emotions and subconscious signals hidden inside your dreams.",
    status: "3 Insights",
    icon: Moon,
  },
  {
    number: "03",
    title: "Reflection Engine",
    description:
      "Discover recurring patterns through intelligent reflection and personal AI analysis.",
    status: "Online",
    icon: Sparkles,
  },
  {
    number: "04",
    title: "Shadow Analysis",
    description:
      "Explore deeper emotional layers and the parts of yourself asking to be understood.",
    status: "Unlocked",
    icon: Eye,
  },
];

export function IntelligenceModules() {
  return (
    <section className="relative">
      {/* =========================================
          INTRO
      ========================================== */}

      <div className="max-w-3xl">
        <motion.p
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: "-100px",
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            text-[10px]
            uppercase
            tracking-[0.5em]
            text-[#D6B25E]
          "
        >
          Explore yourself
        </motion.p>

        <motion.h2
          initial={{
            opacity: 0,
            y: 25,
            filter: "blur(10px)",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          viewport={{
            once: true,
            margin: "-100px",
          }}
          transition={{
            delay: 0.08,
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            mt-5
            font-[family:var(--font-cormorant)]
            text-5xl
            font-light
            leading-[1.05]
            text-[#F4F1EA]
            sm:text-6xl
            md:text-7xl
          "
        >
          Your intelligence
          <br />
          <span className="text-white/30">
            tools.
          </span>
        </motion.h2>

        <motion.p
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: "-100px",
          }}
          transition={{
            delay: 0.2,
            duration: 0.8,
          }}
          className="
            mt-7
            max-w-xl
            text-sm
            leading-7
            text-white/40
          "
        >
          A collection of intelligence systems designed
          to help you understand yourself from different
          perspectives.
        </motion.p>
      </div>

      {/* =========================================
          MODULES
      ========================================== */}

      <div className="mt-16">
        {modules.map((module, index) => {
          const Icon = module.icon;
          const isFirst = index === 0;

          return (
            <motion.div
              key={module.title}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                margin: "-80px",
              }}
              transition={{
                delay: index * 0.08,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`
                group
                relative
                border-t
                border-white/[0.07]
                ${index === modules.length - 1 ? "border-b" : ""}
              `}
            >
              <div
                className={`
                  relative
                  flex
                  flex-col
                  gap-7
                  py-8
                  transition-all
                  duration-700
                  md:flex-row
                  md:items-center
                  md:gap-10
                  ${isFirst ? "py-10 md:py-12" : ""}
                `}
              >
                {/* =================================
                    NUMBER
                ================================= */}

                <div
                  className="
                    hidden
                    w-12
                    shrink-0
                    md:block
                  "
                >
                  <span
                    className="
                      text-[9px]
                      uppercase
                      tracking-[0.3em]
                      text-white/20
                      transition-colors
                      duration-500
                      group-hover:text-[#D6B25E]/60
                    "
                  >
                    {module.number}
                  </span>
                </div>

                {/* =================================
                    ICON
                ================================= */}

                <div
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/[0.08]
                    bg-white/[0.025]
                    transition-all
                    duration-700
                    group-hover:border-[#D6B25E]/30
                    group-hover:bg-[#D6B25E]/[0.06]
                    group-hover:scale-105
                  "
                >
                  <Icon
                    size={17}
                    strokeWidth={1.4}
                    className="
                      text-white/45
                      transition-colors
                      duration-500
                      group-hover:text-[#D6B25E]
                    "
                  />
                </div>

                {/* =================================
                    TITLE
                ================================= */}

                <div
                  className={`
                    shrink-0
                    md:w-[250px]
                    ${isFirst ? "md:w-[280px]" : ""}
                  `}
                >
                  <h3
                    className={`
                      font-[family:var(--font-cormorant)]
                      font-light
                      leading-tight
                      text-[#F4F1EA]
                      transition-transform
                      duration-700
                      group-hover:translate-x-1
                      ${
                        isFirst
                          ? "text-3xl sm:text-4xl"
                          : "text-2xl sm:text-3xl"
                      }
                    `}
                  >
                    {module.title}
                  </h3>

                  <p
                    className="
                      mt-2
                      text-[8px]
                      uppercase
                      tracking-[0.3em]
                      text-white/20
                    "
                  >
                    {module.status}
                  </p>
                </div>

                {/* =================================
                    DESCRIPTION
                ================================= */}

                <p
                  className="
                    max-w-xl
                    flex-1
                    text-sm
                    leading-7
                    text-white/35
                    transition-colors
                    duration-500
                    group-hover:text-white/50
                  "
                >
                  {module.description}
                </p>

                {/* =================================
                    ACTION
                ================================= */}

                <div
                  className="
                    flex
                    shrink-0
                    items-center
                    justify-between
                    md:justify-end
                  "
                >
                  <span
                    className="
                      text-[8px]
                      uppercase
                      tracking-[0.35em]
                      text-white/20
                      md:hidden
                    "
                  >
                    Explore
                  </span>

                  <div
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/[0.07]
                      opacity-60
                      transition-all
                      duration-500
                      group-hover:border-[#D6B25E]/30
                      group-hover:bg-[#D6B25E]/[0.05]
                      group-hover:opacity-100
                    "
                  >
                    <ArrowUpRight
                      size={15}
                      strokeWidth={1.3}
                      className="
                        text-white/40
                        transition-all
                        duration-500
                        group-hover:text-[#D6B25E]
                        group-hover:translate-x-0.5
                        group-hover:-translate-y-0.5
                      "
                    />
                  </div>
                </div>

                {/* =================================
                    HOVER LIGHT
                ================================= */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-y-0
                    left-0
                    w-1/2
                    -translate-x-8
                    bg-gradient-to-r
                    from-[#D6B25E]/[0.025]
                    to-transparent
                    opacity-0
                    transition-all
                    duration-700
                    group-hover:translate-x-0
                    group-hover:opacity-100
                  "
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* =========================================
          BOTTOM NOTE
      ========================================== */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          delay: 0.4,
          duration: 0.8,
        }}
        className="
          mt-8
          flex
          items-center
          gap-3
        "
      >
        <span
          className="
            h-1
            w-1
            rounded-full
            bg-[#D6B25E]
            shadow-[0_0_10px_rgba(214,178,94,0.7)]
          "
        />

        <span
          className="
            text-[8px]
            uppercase
            tracking-[0.35em]
            text-white/20
          "
        >
          Intelligence evolves with you
        </span>
      </motion.div>
    </section>
  );
}