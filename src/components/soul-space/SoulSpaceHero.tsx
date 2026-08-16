"use client";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import { ArrowRight } from "lucide-react";

import { useEffect, useRef, useState } from "react";

interface SoulSpaceHeroProps {
  onOpenAuth?: () => void;
}

const letters = "SoulMirror".split("");

export function SoulSpaceHero({
  onOpenAuth,
}: SoulSpaceHeroProps) {
  const ref = useRef<HTMLDivElement>(null);

  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setStarted(true);
    }, 100);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  /*
   * SCROLL ANIMATION
   */

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -140]
  );

  const heroScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 0.94]
  );

  const heroOpacity = useTransform(
    scrollYProgress,
    [0, 0.7, 1],
    [1, 1, 0]
  );

  const heroBlur = useTransform(
    scrollYProgress,
    [0, 0.7, 1],
    ["blur(0px)", "blur(0px)", "blur(8px)"]
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
        py-24
      "
    >
      {/* =====================================================
          AMBIENT BACKGROUND
      ====================================================== */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: started ? 1 : 0,
        }}
        transition={{
          duration: 2,
          ease: "easeOut",
        }}
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[700px]
          w-[1000px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#D6B25E]/[0.025]
          blur-[180px]
        "
      />

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: started ? 1 : 0,
        }}
        transition={{
          delay: 0.4,
          duration: 2,
        }}
        className="
          pointer-events-none
          absolute
          right-[-300px]
          top-[20%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#8B5CF6]/[0.018]
          blur-[180px]
        "
      />

      {/* =====================================================
          SIGN IN / SIGN UP
      ====================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: -15,
          filter: "blur(8px)",
        }}
        animate={{
          opacity: started ? 1 : 0,
          y: started ? 0 : -15,
          filter: started
            ? "blur(0px)"
            : "blur(8px)",
        }}
        transition={{
          delay: 0.6,
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          absolute
          right-5
          top-5
          z-30
          flex
          items-center
          gap-2
          sm:right-8
          sm:top-8
          md:right-10
          md:top-10
        "
      >
        <button
          type="button"
          onClick={onOpenAuth}
          className="
            cursor-pointer
            rounded-full
            border
            border-white/[0.08]
            bg-white/[0.025]
            px-5
            py-2.5
            text-[10px]
            uppercase
            tracking-[0.28em]
            text-white/45
            backdrop-blur-xl
            transition-all
            duration-500
            hover:border-white/[0.2]
            hover:bg-white/[0.06]
            hover:text-white
            active:scale-95
          "
        >
          Sign In
        </button>

        <button
          type="button"
          onClick={onOpenAuth}
          className="
            cursor-pointer
            rounded-full
            border
            border-white/[0.14]
            bg-white/[0.055]
            px-5
            py-2.5
            text-[10px]
            uppercase
            tracking-[0.28em]
            text-white/75
            backdrop-blur-xl
            shadow-[0_8px_30px_rgba(0,0,0,0.18)]
            transition-all
            duration-500
            hover:-translate-y-0.5
            hover:border-white/[0.28]
            hover:bg-white/[0.09]
            hover:text-white
            hover:shadow-[0_12px_40px_rgba(255,255,255,0.05)]
            active:translate-y-0
            active:scale-95
          "
        >
          Sign Up
        </button>
      </motion.div>

      {/* =====================================================
          HERO CONTENT
      ====================================================== */}

      <motion.div
        style={{
          y: heroY,
          scale: heroScale,
          opacity: heroOpacity,
          filter: heroBlur,
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
        {/* =================================================
            EON AI
        ================================================== */}

        <motion.p
          initial={{
            opacity: 0,
            y: 20,
            filter: "blur(10px)",
          }}
          animate={{
            opacity: started ? 1 : 0,
            y: started ? 0 : 20,
            filter: started
              ? "blur(0px)"
              : "blur(10px)",
          }}
          transition={{
            duration: 1,
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
          {letters.map((letter, index) => (
            <motion.span
              key={`${letter}-${index}`}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -140 : 140,
                y: index % 3 === 0 ? -60 : 60,
                scale: 0.7,
                rotate: index % 2 === 0 ? -8 : 8,
                filter: "blur(18px)",
              }}
              animate={
                started
                  ? {
                      opacity: 1,
                      x: 0,
                      y: 0,
                      scale: 1,
                      rotate: 0,
                      filter: "blur(0px)",
                    }
                  : {
                      opacity: 0,
                      x: index % 2 === 0 ? -140 : 140,
                      y: index % 3 === 0 ? -60 : 60,
                      scale: 0.7,
                      rotate: index % 2 === 0 ? -8 : 8,
                      filter: "blur(18px)",
                    }
              }
              transition={{
                delay: 0.25 + index * 0.11,
                duration: 1.25,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                inline-block
              "
            >
              {letter}
            </motion.span>
          ))}
        </h1>

        {/* =================================================
            GOLDEN LINE
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            scaleX: 0,
          }}
          animate={{
            opacity: started ? 1 : 0,
            scaleX: started ? 1 : 0,
          }}
          transition={{
            delay: 1.55,
            duration: 1,
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
            y: 15,
          }}
          animate={{
            opacity: started ? 1 : 0,
            y: started ? 0 : 15,
          }}
          transition={{
            delay: 1.8,
            duration: 1,
            ease: "easeOut",
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
            y: 20,
          }}
          animate={{
            opacity: started ? 1 : 0,
            y: started ? 0 : 20,
          }}
          transition={{
            delay: 2.05,
            duration: 1,
            ease: "easeOut",
          }}
          className="
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
        </motion.p>

        {/* =================================================
            ACTIONS
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: started ? 1 : 0,
            y: started ? 0 : 20,
          }}
          transition={{
            delay: 2.35,
            duration: 1,
            ease: "easeOut",
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
          {/* START EXPERIENCE */}

          <button
            type="button"
            onClick={onOpenAuth}
            className="
              group
              flex
              cursor-pointer
              items-center
              gap-3
              rounded-full
              border
              border-white/[0.16]
              bg-white/[0.07]
              px-8
              py-4
              text-sm
              font-medium
              text-white
              backdrop-blur-2xl
              shadow-[0_10px_40px_rgba(0,0,0,0.25)]
              transition-all
              duration-500
              hover:-translate-y-0.5
              hover:border-white/[0.3]
              hover:bg-white/[0.11]
              hover:shadow-[0_15px_60px_rgba(255,255,255,0.08)]
              active:translate-y-0
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

          {/* EXPLORE ECOSYSTEM */}

          <a
            href="#ecosystem"
            className="
              cursor-pointer
              rounded-full
              border
              border-white/[0.07]
              bg-transparent
              px-8
              py-4
              text-[10px]
              uppercase
              tracking-[0.3em]
              text-white/45
              transition-all
              duration-500
              hover:-translate-y-0.5
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