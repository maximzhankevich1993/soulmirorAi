"use client";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import { ArrowRight } from "lucide-react";
import { useRef } from "react";

import { SoulOrb3D } from "./SoulOrb3D";

export function SoulSpaceHero() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const orbY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -180]
  );

  const orbScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 0.85]
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
      {/* =========================
          CINEMATIC BACKGROUND
      ========================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-20
          h-[700px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-[#D6B25E]/10
          blur-[180px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[-200px]
          top-1/3
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#8B5CF6]/10
          blur-[180px]
        "
      />

      {/* =========================
          HERO CONTENT
      ========================== */}

      <motion.div
        style={{ opacity }}
        className="
          relative
          z-10
          mx-auto
          flex
          max-w-6xl
          flex-col
          items-center
        "
      >
        {/* EON AI */}

        <motion.p
          initial={{
            opacity: 0,
            y: 20,
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
            tracking-[0.6em]
            text-[#D6B25E]
          "
        >
          EON AI
        </motion.p>

        {/* =========================
            SOULMIRROR
        ========================== */}

        <motion.h1
          initial={{
            opacity: 0,
            y: 30,
            scale: 0.96,
            filter: "blur(12px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
          }}
          transition={{
            delay: 0.2,
            duration: 1.4,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mt-8
            whitespace-nowrap
            text-center
            font-[family:var(--font-cormorant)]
            text-[64px]
            font-light
            leading-none
            tracking-[0.04em]
            text-[#F4F1EA]
            sm:text-[82px]
            md:text-[110px]
            lg:text-[132px]
          "
        >
          SoulMirror
        </motion.h1>

        {/* Golden line */}

        <motion.div
          initial={{
            width: 0,
            opacity: 0,
          }}
          animate={{
            width: 120,
            opacity: 1,
          }}
          transition={{
            delay: 0.9,
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mt-8
            h-px
            bg-gradient-to-r
            from-transparent
            via-[#D6B25E]
            to-transparent
          "
        />

        {/* Tagline */}

        <motion.p
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1.1,
            duration: 1,
          }}
          className="
            mt-7
            text-[10px]
            uppercase
            tracking-[0.45em]
            text-white/40
          "
        >
          Reflect · Understand · Evolve
        </motion.p>

        {/* Description */}

        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1.35,
            duration: 1,
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

        {/* =========================
            SOUL ORB
        ========================== */}

        <motion.div
          style={{
            y: orbY,
            scale: orbScale,
          }}
          initial={{
            opacity: 0,
            scale: 0.8,
            filter: "blur(10px)",
          }}
          animate={{
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
          }}
          transition={{
            delay: 1.6,
            duration: 1.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-16"
        >
          <SoulOrb3D />
        </motion.div>

        {/* =========================
            ACTIONS
        ========================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 2,
            duration: 1,
          }}
          className="
            mt-10
            flex
            flex-col
            items-center
            gap-5
            sm:flex-row
          "
        >
          <button
            className="
              group
              flex
              items-center
              gap-3
              rounded-full
              bg-[#D6B25E]
              px-8
              py-4
              font-semibold
              text-black
              shadow-[0_0_60px_rgba(214,178,94,.35)]
              transition-transform
              duration-300
              hover:scale-[1.03]
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

          <a
            href="#ecosystem"
            className="
              rounded-full
              border
              border-white/10
              bg-white/[0.03]
              px-8
              py-4
              text-xs
              uppercase
              tracking-[0.3em]
              text-white/70
              backdrop-blur-xl
              transition-all
              duration-300
              hover:border-white/20
              hover:bg-white/[0.06]
            "
          >
            Explore Ecosystem
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}