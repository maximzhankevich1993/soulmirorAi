"use client";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import { ArrowRight } from "lucide-react";
import { useRef } from "react";

const title = "SoulMirror";

const letterVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    x: 0,
    scale: 0.94,
    filter: "blur(14px)",
  },

  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    filter: "blur(0px)",

    transition: {
      delay: 0.35 + index * 0.075,
      duration: 1.1,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export function SoulSpaceHero() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -120]
  );

  const heroOpacity = useTransform(
    scrollYProgress,
    [0, 0.75],
    [1, 0]
  );

  return (
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
        pt-24
        pb-24
      "
    >
      {/* =====================================================
          CINEMATIC ATMOSPHERE
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[-180px]
          h-[700px]
          w-[1000px]
          -translate-x-1/2
          rounded-full
          bg-[#D6B25E]/[0.025]
          blur-[200px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[30%]
          h-[500px]
          w-[900px]
          -translate-x-1/2
          rounded-full
          bg-white/[0.012]
          blur-[180px]
        "
      />

      {/* very subtle center glow */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.7,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 3,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[260px]
          w-[700px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-white/[0.008]
          blur-[120px]
        "
      />

      {/* =====================================================
          HERO CONTENT
      ====================================================== */}

      <motion.div
        style={{
          y: heroY,
          opacity: heroOpacity,
        }}
        className="
          relative
          z-10
          mx-auto
          flex
          w-full
          max-w-7xl
          flex-col
          items-center
          text-center
        "
      >
        {/* =================================================
            EON AI
        ================================================= */}

        <motion.p
          initial={{
            opacity: 0,
            y: 18,
            filter: "blur(8px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            text-[10px]
            uppercase
            tracking-[0.65em]
            text-[#D6B25E]/80
          "
        >
          EON AI
        </motion.p>

        {/* =================================================
            SOULMIRROR
            LETTER-BY-LETTER REVEAL
        ================================================== */}

        <motion.h1
          aria-label="SoulMirror"
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
          {title.split("").map((letter, index) => (
            <motion.span
              key={`${letter}-${index}`}
              custom={index}
              variants={letterVariants}
              initial="hidden"
              animate="visible"
              className="inline-block"
            >
              {letter}
            </motion.span>
          ))}
        </motion.h1>

        {/* =================================================
            GOLDEN LINE
        ================================================== */}

        <motion.div
          initial={{
            scaleX: 0,
            opacity: 0,
          }}
          animate={{
            scaleX: 1,
            opacity: 1,
          }}
          transition={{
            delay: 1.35,
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mt-8
            h-px
            w-[120px]
            origin-center
            bg-gradient-to-r
            from-transparent
            via-[#D6B25E]/70
            to-transparent
          "
        />

        {/* =================================================
            TAGLINE
        ================================================== */}

        <motion.p
          initial={{
            opacity: 0,
            y: 12,
            filter: "blur(6px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            delay: 1.65,
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mt-7
            text-[10px]
            uppercase
            tracking-[0.5em]
            text-white/40
          "
        >
          Reflect · Understand · Evolve
        </motion.p>

        {/* =================================================
            DESCRIPTION
        ================================================== */}

        <motion.p
          initial={{
            opacity: 0,
            y: 18,
            filter: "blur(7px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            delay: 1.9,
            duration: 1.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mt-8
            max-w-xl
            text-center
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
        </motion.p>

        {/* =================================================
            BUTTONS
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
            filter: "blur(7px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            delay: 2.25,
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mt-12
            flex
            flex-col
            items-center
            gap-3
            sm:flex-row
          "
        >
          {/* PRIMARY */}

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
            <span>Start Experience</span>

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

          {/* SECONDARY */}

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
        </motion.div>
      </motion.div>
    </section>
  );
}