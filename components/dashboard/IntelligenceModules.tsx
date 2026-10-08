"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  Brain,
  Moon,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

interface IntelligenceModule {
  id: string;
  label: string;
  title: string;
  description: string;
  icon: typeof Brain;
  href: string;
  status: string;
}

const modules: IntelligenceModule[] = [
  {
    id: "soul-scan",
    label: "01",
    title: "Soul Scan",
    description:
      "A deeper reading of your inner patterns, emotional state, and emerging archetypal themes.",
    icon: Brain,
    href: "/soul-scan",
    status: "Available",
  },
  {
    id: "dream-analysis",
    label: "02",
    title: "Dream Analysis",
    description:
      "Explore the symbols, emotions, and hidden patterns within your dreams.",
    icon: Moon,
    href: "/dream-analysis",
    status: "Available",
  },
  {
    id: "tarot",
    label: "03",
    title: "Symbolic Intelligence",
    description:
      "Use symbolic reflection to explore questions, patterns, and perspectives from another angle.",
    icon: Sparkles,
    href: "/tarot",
    status: "Available",
  },
];

export function IntelligenceModules() {
  const router = useRouter();

  return (
    <div className="w-full">
      {/* =========================================
          MODULE LIST
      ========================================== */}

      <div className="mt-10 sm:mt-16">
        {modules.map((module, index) => {
          const Icon = module.icon;
          const isFirst = index === 0;

          return (
            <motion.div
              key={module.id}
              initial={{
                opacity: 0,
                y: 24,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
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
                border-white/[0.06]
                ${
                  isFirst
                    ? "py-7 sm:py-10"
                    : "py-6 sm:py-8"
                }
              `}
            >
              <div
                className="
                  flex
                  flex-col
                  gap-5
                  md:flex-row
                  md:items-center
                  md:gap-10
                "
              >
                {/* =========================================
                    NUMBER + ICON
                ========================================== */}

                <div
                  className="
                    flex
                    shrink-0
                    items-center
                    gap-4
                    md:w-[210px]
                  "
                >
                  <span
                    className="
                      text-[8px]
                      uppercase
                      tracking-[0.35em]
                      text-white/15
                    "
                  >
                    {module.label}
                  </span>

                  <div
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      border
                      border-white/[0.08]
                      text-white/45
                      transition-colors
                      duration-500
                      group-hover:border-[#D6B25E]/30
                      group-hover:text-[#D6B25E]
                    "
                  >
                    <Icon
                      size={17}
                      strokeWidth={1.25}
                    />
                  </div>
                </div>

                {/* =========================================
                    CONTENT
                ========================================== */}

                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-3">
                    <h4
                      className={`
                        font-[family:var(--font-cormorant)]
                        font-light
                        leading-none
                        tracking-[-0.01em]
                        text-[#F4F1EA]
                        ${
                          isFirst
                            ? "text-[1.7rem] sm:text-4xl"
                            : "text-[1.45rem] sm:text-3xl"
                        }
                      `}
                    >
                      {module.title}
                    </h4>

                    <span
                      className="
                        h-1
                        w-1
                        shrink-0
                        rounded-full
                        bg-[#D6B25E]/60
                      "
                    />
                  </div>

                  <p
                    className="
                      mt-2.5
                      max-w-2xl
                      text-[13px]
                      leading-6
                      text-white/35
                      sm:mt-4
                      sm:text-sm
                      sm:leading-7
                    "
                  >
                    {module.description}
                  </p>

                  <p
                    className="
                      mt-3
                      text-[7px]
                      uppercase
                      tracking-[0.35em]
                      text-white/15
                      sm:mt-4
                      sm:text-[8px]
                    "
                  >
                    {module.status}
                  </p>
                </div>

                {/* =========================================
                    ACTION
                ========================================== */}

                <div
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    pt-1
                    md:w-auto
                    md:shrink-0
                    md:justify-end
                    md:pt-0
                  "
                >
                  <span
                    className="
                      text-[8px]
                      uppercase
                      tracking-[0.35em]
                      text-white/20
                      transition-colors
                      duration-500
                      group-hover:text-[#D6B25E]/60
                      sm:hidden
                    "
                  >
                    Explore
                  </span>

                  <button
                    type="button"
                    aria-label={`Open ${module.title}`}
                    onClick={() =>
                      router.push(module.href)
                    }
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      border
                      border-white/[0.08]
                      text-white/35
                      outline-none
                      transition-all
                      duration-500
                      active:border-[#D6B25E]/40
                      active:text-[#D6B25E]
                      sm:h-11
                      sm:w-11
                      md:group-hover:border-[#D6B25E]/30
                      md:group-hover:text-[#D6B25E]
                    "
                  >
                    <ArrowUpRight
                      size={15}
                      strokeWidth={1.25}
                    />
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}

        {/* =========================================
            BOTTOM BORDER
        ========================================== */}

        <div className="border-t border-white/[0.06]" />
      </div>
    </div>
  );
}