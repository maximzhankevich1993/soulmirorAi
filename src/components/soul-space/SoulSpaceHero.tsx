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
    y: 35,
    filter: "blur(12px)",
    scale: 0.96,
  },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    scale: 1,
    transition: {
      delay: 0.35 + index * 0.055,
      duration: 1.05,
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

  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -100]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.8],
    [1, 0]
  );

  return (
    <section
      ref={ref}
      className="
        relative
        min-h-screen
        overflow-hidden
        px-6
        pt-40
      "
    >
      {/* =================================
          CINEMATIC ATMOSPHERE
      ================================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[-120px]
          h-[650px]
          w-[1000px]
          -translate-x-1/2
          rounded-full
          bg-[#D6B25E]/[0.035]
          blur-[180px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[35%]
          h-[500px]
          w-[900px]
          -translate-x-1/2
          rounded-full
          bg-white/[0.012]
          blur-[160px]
        "
      />

      {/* =================================
          HERO
      ================================= */}

      <motion.div
        style={{
          y: contentY,
          opacity,
        }}
        className="
          relative
          z-10
          mx-auto
          flex
          max-w-7xl
          flex-col
          items-center
        "
      >
        {/* EON AI */}

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
            text-[#D6B25E]
          "
        >
          EON AI
        </motion.p>

        {/* =================================
            SOULMIRROR LETTER ANIMATION
        ================================= */}

        <motion.h1
          aria-label="SoulMirror"
          className="
            mt-8
            flex
            whitespace-nowrap
            text-center
            font-[family:var(--font-cormorant)]
            text-[58px]
            font-light
            leading-none
            tracking-[0.025em]
            text-[#F4F1EA]
            sm:text-[78px]
            md:text-[105px]
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

        {/* =================================
            GOLDEN LINE
        ================================= */}

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
            delay: 1.15,
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
            via-[#D6B25E]
            to-transparent
          "
        />

        {/* =================================
            TAGLINE
        ================================= */}

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
            delay: 1.45,
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

        {/* =================================
            DESCRIPTION
        ================================= */}

        <motion.p
          initial={{
            opacity: 0,
            y: 18,
            filter: "blur(6px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            delay: 1.7,
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mt-8
            max-w-xl
            text-center
            text-base
            leading-8
            text-white/50
            md:text-lg
          "
        >
          Your personal intelligence mirror.
          <br />
          AI designed to understand identity,
          dreams, archetypes and evolution.
        </motion.p>

        {/* =================================
            ACTIONS
        ================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 22,
            filter: "blur(6px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            delay: 2.05,
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mt-12
            flex
            flex-col
            items-center
            gap-4
            sm:flex-row
          "
        >
          {/* Primary */}

          <button
            type="button"
            className="
              group
              flex
              cursor-pointer
              items-center
              gap-3
              rounded-full
              bg-[#D6B25E]
              px-8
              py-4
              font-medium
              text-black
              shadow-[0_0_50px_rgba(214,178,94,.2)]
              transition-all
              duration-300
              hover:scale-[1.03]
              hover:shadow-[0_0_70px_rgba(214,178,94,.35)]
              active:scale-[0.98]
            "
          >
            Start Experience

            <ArrowRight
              size={18}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </button>

          {/* Secondary */}

          <a
            href="#ecosystem"
            className="
              cursor-pointer
              rounded-full
              border
              border-white/10
              bg-white/[0.025]
              px-8
              py-4
              text-xs
              uppercase
              tracking-[0.3em]
              text-white/65
              backdrop-blur-xl
              transition-all
              duration-300
              hover:border-white/20
              hover:bg-white/[0.06]
              hover:text-white
              active:scale-[0.98]
            "
          >
            Explore Ecosystem
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}