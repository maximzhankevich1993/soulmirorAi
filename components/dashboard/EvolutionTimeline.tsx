"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface JourneyEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  type: "soul" | "dream" | "tarot";
}

const typeLabel: Record<
  JourneyEvent["type"],
  string
> = {
  soul: "Soul Scan",
  dream: "Dream",
  tarot: "Tarot",
};

const typeColor: Record<
  JourneyEvent["type"],
  string
> = {
  soul: "bg-[#D6B25E]",
  dream: "bg-[#8B5CF6]",
  tarot: "bg-white/40",
};

interface EvolutionTimelineProps {
  events?: JourneyEvent[];
}

export function EvolutionTimeline({
  events = [],
}: EvolutionTimelineProps) {
  /*
   * =========================================
   * EMPTY STATE
   * =========================================
   */

  if (!events.length) {
    return (
      <div
        className="
          border-t
          border-white/[0.06]
          py-10
          sm:py-14
        "
      >
        <div className="max-w-xl">
          <p
            className="
              font-[family:var(--font-cormorant)]
              text-[1.6rem]
              font-light
              leading-tight
              text-white/45
              sm:text-3xl
            "
          >
            Your journey is just beginning.
          </p>

          <p
            className="
              mt-3
              text-[13px]
              leading-6
              text-white/25
              sm:mt-4
              sm:text-sm
              sm:leading-7
            "
          >
            Your reflections, discoveries, and
            insights will appear here as you
            explore SoulMirror.
          </p>
        </div>
      </div>
    );
  }

  /*
   * =========================================
   * TIMELINE
   * =========================================
   */

  return (
    <div className="w-full">
      <div className="border-t border-white/[0.06]">
        {events.map((event, index) => (
          <motion.article
            key={event.id}
            initial={{
              opacity: 0,
              y: 18,
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
              delay: index * 0.07,
              duration: 0.75,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              group
              border-b
              border-white/[0.06]
              py-6
              sm:py-9
              md:py-11
            "
          >
            <div
              className="
                grid
                grid-cols-1
                gap-4
                md:grid-cols-[120px_1fr_auto]
                md:items-start
                md:gap-10
              "
            >
              {/* =========================================
                  DATE
              ========================================== */}

              <div className="pt-0.5">
                <p
                  className="
                    text-[8px]
                    uppercase
                    tracking-[0.3em]
                    text-white/20
                    sm:text-[9px]
                    sm:tracking-[0.35em]
                  "
                >
                  {event.date}
                </p>
              </div>

              {/* =========================================
                  CONTENT
              ========================================== */}

              <div
                className="
                  relative
                  min-w-0
                  pr-12
                  md:pr-0
                "
              >
                {/* TYPE */}

                <div className="flex items-center gap-3">
                  <span
                    className={`
                      h-1.5
                      w-1.5
                      shrink-0
                      rounded-full
                      ${typeColor[event.type]}
                    `}
                  />

                  <span
                    className="
                      text-[7px]
                      uppercase
                      tracking-[0.35em]
                      text-white/20
                      sm:text-[8px]
                    "
                  >
                    {typeLabel[event.type]}
                  </span>
                </div>

                {/* TITLE */}

                <h4
                  className="
                    mt-3
                    font-[family:var(--font-cormorant)]
                    text-[1.65rem]
                    font-light
                    leading-[1.05]
                    text-[#F4F1EA]
                    transition-colors
                    duration-500
                    group-hover:text-white
                    sm:mt-5
                    sm:text-4xl
                  "
                >
                  {event.title}
                </h4>

                {/* DESCRIPTION */}

                <p
                  className="
                    mt-2.5
                    max-w-2xl
                    text-[13px]
                    leading-6
                    text-white/30
                    sm:mt-4
                    sm:text-sm
                    sm:leading-7
                  "
                >
                  {event.description}
                </p>

                {/* MOBILE ARROW */}

                <div
                  className="
                    absolute
                    right-0
                    top-0
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    border
                    border-white/[0.08]
                    text-white/25
                    md:hidden
                  "
                >
                  <ArrowUpRight
                    size={14}
                    strokeWidth={1.25}
                  />
                </div>
              </div>

              {/* =========================================
                  DESKTOP ACTION
              ========================================== */}

              <div
                className="
                  hidden
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  border
                  border-white/[0.08]
                  text-white/25
                  transition-all
                  duration-500
                  group-hover:border-[#D6B25E]/30
                  group-hover:text-[#D6B25E]
                  md:flex
                "
              >
                <ArrowUpRight
                  size={15}
                  strokeWidth={1.25}
                />
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* =========================================
          FOOTNOTE
      ========================================== */}

      <motion.p
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{
          once: true,
          amount: 0.5,
        }}
        transition={{
          delay: 0.3,
          duration: 0.8,
        }}
        className="
          mt-6
          text-[7px]
          uppercase
          tracking-[0.35em]
          text-white/15
          sm:mt-8
          sm:text-[8px]
        "
      >
        Your journey evolves with every reflection.
      </motion.p>
    </div>
  );
}