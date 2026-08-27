"use client";

import { motion } from "framer-motion";

import {
  Sparkles,
  Moon,
  CreditCard,
  ArrowUpRight,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

import { useSoulJourney } from "../../src/hooks/useSoulJourney";

type JourneyType = "soul" | "dream" | "tarot";

interface JourneyItem {
  id: string;
  type: JourneyType;
  title: string;
  description: string;
  date: string;
}

const icons: Record<JourneyType, LucideIcon> = {
  soul: Sparkles,
  dream: Moon,
  tarot: CreditCard,
};

export function EvolutionTimeline() {
  const { items, loading } = useSoulJourney();

  const journeyItems = items as JourneyItem[];

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
          Your journey
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
          A memory
          <br />
          <span className="text-white/30">
            of becoming.
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
          Every interaction becomes part of your evolving
          personal intelligence. Over time, these moments
          form a picture of who you are becoming.
        </motion.p>
      </div>

      {/* =========================================
          JOURNEY
      ========================================== */}

      <div className="mt-16">
        {/* LOADING */}

        {loading && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            className="
              border-t
              border-white/[0.07]
              py-10
            "
          >
            <div className="flex items-center gap-4">
              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-[#D6B25E]
                  shadow-[0_0_12px_rgba(214,178,94,0.7)]
                "
              />

              <p
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.35em]
                  text-white/25
                "
              >
                Synchronizing memory
              </p>
            </div>
          </motion.div>
        )}

        {/* EMPTY */}

        {!loading && journeyItems.length === 0 && (
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="
              border-y
              border-white/[0.07]
              py-14
            "
          >
            <div
              className="
                flex
                flex-col
                gap-5
                sm:flex-row
                sm:items-center
                sm:justify-between
              "
            >
              <div>
                <p
                  className="
                    text-[9px]
                    uppercase
                    tracking-[0.35em]
                    text-[#D6B25E]/70
                  "
                >
                  The journey begins here
                </p>

                <p
                  className="
                    mt-3
                    max-w-lg
                    text-sm
                    leading-7
                    text-white/35
                  "
                >
                  Your personal evolution memory will grow
                  as you explore SoulMirror.
                </p>
              </div>

              <Sparkles
                size={20}
                strokeWidth={1.2}
                className="
                  shrink-0
                  text-white/20
                "
              />
            </div>
          </motion.div>
        )}

        {/* EVENTS */}

        {!loading && journeyItems.length > 0 && (
          <div>
            {journeyItems.map((item, index) => {
              const Icon = icons[item.type] || Sparkles;

              return (
                <motion.article
                  key={item.id}
                  initial={{
                    opacity: 0,
                    y: 35,
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
                    delay: Math.min(index * 0.08, 0.4),
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="
                    group
                    relative
                    border-t
                    border-white/[0.07]
                  "
                >
                  <div
                    className="
                      relative
                      flex
                      flex-col
                      gap-7
                      py-9
                      transition-all
                      duration-700
                      md:grid
                      md:grid-cols-[120px_1fr_auto]
                      md:items-start
                      md:gap-10
                      md:py-11
                    "
                  >
                    {/* =================================
                        DATE
                    ================================== */}

                    <div>
                      <p
                        className="
                          text-[9px]
                          uppercase
                          tracking-[0.3em]
                          text-white/25
                          transition-colors
                          duration-500
                          group-hover:text-[#D6B25E]/60
                        "
                      >
                        {item.date}
                      </p>
                    </div>

                    {/* =================================
                        CONTENT
                    ================================== */}

                    <div className="max-w-2xl">
                      <div
                        className="
                          flex
                          items-center
                          gap-3
                        "
                      >
                        <div
                          className="
                            flex
                            h-9
                            w-9
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-white/[0.08]
                            bg-white/[0.025]
                            transition-all
                            duration-500
                            group-hover:border-[#D6B25E]/25
                            group-hover:bg-[#D6B25E]/[0.05]
                          "
                        >
                          <Icon
                            size={15}
                            strokeWidth={1.4}
                            className="
                              text-white/40
                              transition-colors
                              duration-500
                              group-hover:text-[#D6B25E]
                            "
                          />
                        </div>

                        <span
                          className="
                            text-[8px]
                            uppercase
                            tracking-[0.3em]
                            text-white/20
                          "
                        >
                          {item.type}
                        </span>
                      </div>

                      <h3
                        className="
                          mt-5
                          font-[family:var(--font-cormorant)]
                          text-3xl
                          font-light
                          leading-tight
                          text-[#F4F1EA]
                          transition-transform
                          duration-700
                          group-hover:translate-x-1
                          sm:text-4xl
                        "
                      >
                        {item.title}
                      </h3>

                      <p
                        className="
                          mt-4
                          max-w-xl
                          text-sm
                          leading-7
                          text-white/35
                          transition-colors
                          duration-500
                          group-hover:text-white/50
                        "
                      >
                        {item.description}
                      </p>
                    </div>

                    {/* =================================
                        ARROW
                    ================================== */}

                    <div
                      className="
                        flex
                        items-center
                        justify-end
                        md:pt-1
                      "
                    >
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
                          opacity-50
                          transition-all
                          duration-500
                          group-hover:border-[#D6B25E]/25
                          group-hover:bg-[#D6B25E]/[0.04]
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
                            group-hover:-translate-y-0.5
                            group-hover:translate-x-0.5
                            group-hover:text-[#D6B25E]
                          "
                        />
                      </div>
                    </div>

                    {/* =================================
                        HOVER LIGHT
                    ================================== */}

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
                </motion.article>
              );
            })}

            {/* END LINE */}

            <div
              className="
                border-t
                border-white/[0.07]
              "
            />
          </div>
        )}
      </div>

      {/* =========================================
          FOOT NOTE
      ========================================== */}

      {!loading && journeyItems.length > 0 && (
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
            Your story continues
          </span>
        </motion.div>
      )}
    </section>
  );
}