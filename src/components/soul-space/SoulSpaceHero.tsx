"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

const letters = "SoulMirror".split("");

export function SoulSpaceHero() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

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
        flex
        min-h-screen
        items-center
        justify-center
        overflow-hidden
        px-6
        py-24
      "
    >
      {/* Background */}

      <div
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
        style={{ y, opacity }}
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

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.2,
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

        {/* SoulMirror */}

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
                x: index % 2 === 0 ? -70 : 70,
                y: index % 3 === 0 ? -25 : 25,
                scale: 0.85,
                filter: "blur(10px)",
              }}
              animate={{
                opacity: 1,
                x: 0,
                y: 0,
                scale: 1,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 1,
                delay: 0.4 + index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="inline-block"
            >
              {letter}
            </motion.span>
          ))}
        </h1>

        {/* Line */}

        <motion.div
          initial={{
            opacity: 0,
            scaleX: 0,
          }}
          animate={{
            opacity: 1,
            scaleX: 1,
          }}
          transition={{
            duration: 1,
            delay: 1.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mt-8
            h-px
            w-[120px]
            origin-center
            bg-[#D6B25E]/60
          "
        />

        {/* Tagline */}

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 1.8,
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

        {/* Description */}

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 2.05,
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

        {/* Buttons */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 2.35,
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
              backdrop-blur-xl
              transition-all
              duration-500
              hover:border-white/[0.28]
              hover:bg-white/[0.09]
              active:scale-95
            "
          >
            Start Experience

            <ArrowRight
              size={16}
              strokeWidth={1.5}
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
              cursor-pointer
              rounded-full
              border
              border-white/[0.08]
              px-7
              py-3.5
              text-[10px]
              uppercase
              tracking-[0.3em]
              text-white/45
              transition-all
              duration-500
              hover:border-white/[0.2]
              hover:bg-white/[0.035]
              hover:text-white/80
              active:scale-95
            "
          >
            Explore Ecosystem
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}