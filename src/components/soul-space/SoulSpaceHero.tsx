"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { SoulOrb3D } from "./SoulOrb3D";

export function SoulSpaceHero() {
  return (
    <section
      className="
      relative
      flex
      min-h-[920px]
      items-center
      justify-center
      overflow-hidden
      px-6
      pt-32
      "
    >

      {/* Background Glow */}

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
        right-0
        top-40
        h-[420px]
        w-[420px]
        rounded-full
        bg-[#8B5CF6]/10
        blur-[180px]
        "
      />

      <div
        className="
        relative
        z-10
        mx-auto
        flex
        w-full
        max-w-6xl
        flex-col
        items-center
        "
      >

        <motion.p
          initial={{
            opacity:0,
            y:20,
          }}
          animate={{
            opacity:1,
            y:0,
          }}
          transition={{
            duration:0.8,
          }}
          className="
          text-[11px]
          uppercase
          tracking-[0.55em]
          text-[#D6B25E]
          "
        >
          EON AI presents
        </motion.p>

        <motion.h1
          initial={{
            opacity:0,
            y:30,
          }}
          animate={{
            opacity:1,
            y:0,
          }}
          transition={{
            delay:0.2,
            duration:1,
          }}
          className="
          mt-8
          text-center
          font-[family:var(--font-cormorant)]
          text-6xl
          font-light
          leading-[0.9]
          tracking-tight
          text-[#F4F1EA]
          md:text-8xl
          "
        >
          SOUL
          <br />
          MIRROR
        </motion.h1>

        <motion.p
          initial={{
            opacity:0,
          }}
          animate={{
            opacity:1,
          }}
          transition={{
            delay:0.45,
          }}
          className="
          mt-8
          text-sm
          uppercase
          tracking-[0.45em]
          text-[#D6B25E]
          "
        >
          Personal Intelligence Experience
        </motion.p>

        <motion.p
          initial={{
            opacity:0,
          }}
          animate={{
            opacity:1,
          }}
          transition={{
            delay:0.6,
          }}
          className="
          mt-8
          max-w-2xl
          text-center
          text-lg
          leading-8
          text-white/60
          "
        >
          Your personal intelligence mirror.
          <br />
          An AI system designed to understand
          identity, dreams, archetypes
          and human evolution.
        </motion.p>
                <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            delay: 0.8,
            duration: 1,
          }}
          className="my-14"
        >
          <SoulOrb3D />
        </motion.div>

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
            delay: 1,
          }}
          className="
            rounded-full
            border
            border-[#D6B25E]/20
            bg-white/[0.03]
            px-6
            py-2
            backdrop-blur-2xl
          "
        >
          <span
            className="
              text-[11px]
              uppercase
              tracking-[0.35em]
              text-[#D6B25E]
            "
          >
            A Product by EON AI
          </span>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1.2,
          }}
          className="
            mt-10
            rounded-[30px]
            border
            border-white/10
            bg-white/[0.03]
            px-10
            py-8
            backdrop-blur-3xl
          "
        >

          <p
            className="
              text-xs
              uppercase
              tracking-[0.4em]
              text-[#D6B25E]
            "
          >
            Powered by EON AI
          </p>

          <h2
            className="
              mt-4
              text-center
              text-3xl
              font-light
              text-[#F4F1EA]
            "
          >
            First Generation
          </h2>

          <p
            className="
              mt-3
              text-center
              text-white/55
            "
          >
            Personal Intelligence System
          </p>

        </motion.div>
                <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1.4,
            duration: 0.8,
          }}
          className="
            mt-12
            flex
            flex-col
            items-center
            gap-5
            sm:flex-row
          "
        >

          <motion.button
            whileHover={{
              scale: 1.04,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="
              group
              flex
              items-center
              gap-3
              rounded-full
              bg-[#D6B25E]
              px-8
              py-4
              text-base
              font-semibold
              text-[#050505]
              shadow-[0_0_60px_rgba(214,178,94,.35)]
              transition-all
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

          </motion.button>

          <motion.a
            whileHover={{
              scale: 1.02,
            }}
            href="#ecosystem"
            className="
              rounded-full
              border
              border-white/10
              bg-white/[0.03]
              px-8
              py-4
              text-sm
              uppercase
              tracking-[0.25em]
              text-white/70
              backdrop-blur-xl
              transition-all
              hover:border-[#D6B25E]/30
              hover:text-[#F4F1EA]
            "
          >
            Explore Ecosystem
          </motion.a>

        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.7,
          }}
          className="
            mt-16
            flex
            flex-wrap
            items-center
            justify-center
            gap-8
            text-[11px]
            uppercase
            tracking-[0.35em]
            text-white/30
          "
        >

          <span>Identity</span>

          <span>Dreams</span>

          <span>Archetypes</span>

          <span>Emotions</span>

          <span>Evolution</span>

        </motion.div>
              </div>

    </section>
  );
}