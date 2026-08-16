"use client";

import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const title = "SoulMirror";

export function SoulSpaceHero() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      <style jsx>{`
        @keyframes soul-eon-fade {
          0% {
            opacity: 0;
            transform: translateY(25px);
            filter: blur(12px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        @keyframes soul-letter-left {
          0% {
            opacity: 0;
            transform: translateX(-100px) translateY(25px) scale(0.82);
            filter: blur(14px);
          }

          70% {
            opacity: 1;
          }

          100% {
            opacity: 1;
            transform: translateX(0) translateY(0) scale(1);
            filter: blur(0);
          }
        }

        @keyframes soul-letter-right {
          0% {
            opacity: 0;
            transform: translateX(100px) translateY(25px) scale(0.82);
            filter: blur(14px);
          }

          70% {
            opacity: 1;
          }

          100% {
            opacity: 1;
            transform: translateX(0) translateY(0) scale(1);
            filter: blur(0);
          }
        }

        @keyframes soul-line {
          0% {
            width: 0;
            opacity: 0;
          }

          100% {
            width: 120px;
            opacity: 1;
          }
        }

        @keyframes soul-content {
          0% {
            opacity: 0;
            transform: translateY(18px);
            filter: blur(8px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        @keyframes soul-glow {
          0% {
            opacity: 0;
            transform: scale(0.7);
          }

          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .soul-eon {
          opacity: 0;
          animation: soul-eon-fade 1.2s
            cubic-bezier(0.22, 1, 0.36, 1)
            0.1s forwards;
        }

        .soul-letter {
          display: inline-block;
          opacity: 0;
        }

        .soul-letter-left {
          animation: soul-letter-left 1.15s
            cubic-bezier(0.22, 1, 0.36, 1)
            forwards;
        }

        .soul-letter-right {
          animation: soul-letter-right 1.15s
            cubic-bezier(0.22, 1, 0.36, 1)
            forwards;
        }

        .soul-line {
          height: 1px;
          width: 0;
          opacity: 0;
          animation: soul-line 1.1s
            cubic-bezier(0.22, 1, 0.36, 1)
            1.55s forwards;
        }

        .soul-tagline {
          opacity: 0;
          animation: soul-content 1s
            cubic-bezier(0.22, 1, 0.36, 1)
            1.8s forwards;
        }

        .soul-description {
          opacity: 0;
          animation: soul-content 1s
            cubic-bezier(0.22, 1, 0.36, 1)
            2.05s forwards;
        }

        .soul-actions {
          opacity: 0;
          animation: soul-content 1s
            cubic-bezier(0.22, 1, 0.36, 1)
            2.35s forwards;
        }

        .soul-glow {
          opacity: 0;
          animation: soul-glow 3s
            cubic-bezier(0.22, 1, 0.36, 1)
            forwards;
        }
      `}</style>

      <section
        ref={ref}
        className="
          relative
          flex
          min-h-screen
          items-center
          justify-center
          overflow-hidden
          px-6
          py-24
        "
      >
        {/* =================================================
            AMBIENT BACKGROUND
        ================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[650px]
            w-[1000px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#D6B25E]/[0.025]
            blur-[190px]
            soul-glow
          "
        />

        {/* =================================================
            HERO
        ================================================== */}

        <motion.div
          style={{
            y,
            opacity,
          }}
          className="
            relative
            z-10
            flex
            w-full
            max-w-7xl
            flex-col
            items-center
            text-center
          "
        >
          {/* EON AI */}

          <div
            className="
              soul-eon
              text-[10px]
              uppercase
              tracking-[0.65em]
              text-[#D6B25E]/80
            "
          >
            EON AI
          </div>

          {/* =================================================
              SOULMIRROR
          ================================================== */}

          <h1
            className="
              mt-8
              flex
              whitespace-nowrap
              font-[family:var(--font-cormorant)]
              text-[56px]
              font-light
              leading-none
              tracking-[0.025em]
              text-[#F4F1EA]
              sm:text-[76px]
              md:text-[104px]
              lg:text-[128px]
            "
          >
            {title.split("").map((letter, index) => {
              const isLeft = index % 2 === 0;

              return (
                <span
                  key={`${letter}-${index}`}
                  className={`
                    soul-letter
                    ${
                      isLeft
                        ? "soul-letter-left"
                        : "soul-letter-right"
                    }
                  `}
                  style={{
                    animationDelay: `${0.4 + index * 0.09}s`,
                  }}
                >
                  {letter}
                </span>
              );
            })}
          </h1>

          {/* =================================================
              GOLD LINE
          ================================================== */}

          <div
            className="
              soul-line
              bg-gradient-to-r
              from-transparent
              via-[#D6B25E]/70
              to-transparent
            "
          />

          {/* =================================================
              TAGLINE
          ================================================== */}

          <p
            className="
              soul-tagline
              mt-7
              text-[10px]
              uppercase
              tracking-[0.5em]
              text-white/40
            "
          >
            Reflect · Understand · Evolve
          </p>

          {/* =================================================
              DESCRIPTION
          ================================================== */}

          <p
            className="
              soul-description
              mt-8
              max-w-xl
              text-base
              leading-8
              text-white/45
              md:text-lg
            "
          >
            Your personal intelligence mirror.
            <br />
            AI designed to understand identity,
            dreams, archetypes and evolution.
          </p>

          {/* =================================================
              BUTTONS
          ================================================== */}

          <div
            className="
              soul-actions
              mt-12
              flex
              flex-col
              items-center
              gap-3
              sm:flex-row
            "
          >
            {/* START */}

            <button
              type="button"
              className="
                group
                flex
                cursor-pointer
                items-center
                gap-3
                rounded-full
                border
                border-white/[0.14]
                bg-white/[0.055]
                px-7
                py-3.5
                text-sm
                font-medium
                text-white
                backdrop-blur-2xl
                shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]
                transition-all
                duration-500
                hover:border-white/[0.28]
                hover:bg-white/[0.09]
                hover:shadow-[0_0_45px_rgba(255,255,255,0.08)]
                active:scale-[0.97]
              "
            >
              Start Experience

              <ArrowRight
                size={16}
                strokeWidth={1.5}
                className="
                  transition-transform
                  duration-500
                  group-hover:translate-x-1
                "
              />
            </button>

            {/* EXPLORE */}

            <a
              href="#ecosystem"
              className="
                cursor-pointer
                rounded-full
                border
                border-white/[0.08]
                bg-transparent
                px-7
                py-3.5
                text-[10px]
                uppercase
                tracking-[0.3em]
                text-white/45
                transition-all
                duration-500
                hover:border-white/[0.18]
                hover:bg-white/[0.035]
                hover:text-white/80
                active:scale-[0.97]
              "
            >
              Explore Ecosystem
            </a>
          </div>
        </motion.div>
      </section>
    </>
  );
}