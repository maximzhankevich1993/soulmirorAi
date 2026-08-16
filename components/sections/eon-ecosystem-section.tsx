"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Sparkles,
  Clock,
  Globe2,
  type LucideIcon,
} from "lucide-react";

interface EcosystemProduct {
  name: string;
  category: string;
  description: string;
  icon: LucideIcon;
}

const products: EcosystemProduct[] = [
  {
    name: "SoulMirror",
    category: "Personal Intelligence",
    description:
      "AI reflection system for identity, archetypes, dreams and personal evolution.",
    icon: Brain,
  },
  {
    name: "Memora",
    category: "AI Memory System",
    description:
      "A personal AI memory layer that remembers your experiences and knowledge.",
    icon: Clock,
  },
  {
    name: "Future Self",
    category: "Identity Simulation",
    description:
      "Explore possible versions of yourself through AI-powered scenarios.",
    icon: Sparkles,
  },
  {
    name: "Parallel",
    category: "AI Universe",
    description:
      "A new generation of interactive AI worlds and experiences.",
    icon: Globe2,
  },
];

export function EonEcosystemSection() {
  return (
    <section
      id="ecosystem"
      className="
        relative
        mx-auto
        mt-32
        w-full
        max-w-7xl
        px-6
      "
    >
      {/* =====================================================
          AMBIENT GLOW
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-[500px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-[#D6B25E]/5
          blur-[160px]
        "
      />

      {/* =====================================================
          HEADER
      ====================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
        transition={{
          duration: 0.9,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="
          relative
          z-10
          text-center
        "
      >
        <p
          className="
            text-xs
            uppercase
            tracking-[0.45em]
            text-[#D6B25E]
          "
        >
          EON AI Ecosystem
        </p>

        <h2
          className="
            mt-6
            font-[family:var(--font-cormorant)]
            text-5xl
            leading-tight
            text-[#F4F1EA]
            md:text-6xl
          "
        >
          Intelligence beyond
          <br />
          a single experience.
        </h2>

        <p
          className="
            mx-auto
            mt-6
            max-w-2xl
            text-lg
            leading-8
            text-white/50
          "
        >
          SoulMirror is the first product created by EON AI.
          <br />
          A growing ecosystem of AI systems designed to understand identity,
          memory and human evolution.
        </p>
      </motion.div>

      {/* =====================================================
          PRODUCTS
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mt-16
          grid
          gap-5
          md:grid-cols-2
          xl:grid-cols-4
        "
      >
        {products.map((product, index) => {
          const Icon = product.icon;

          return (
            <motion.div
              key={product.name}
              initial={{
                opacity: 0,
                y: 30,
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
                delay: index * 0.1,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{
                y: -10,
                scale: 1.015,
              }}
              className="
                group
                relative
                cursor-pointer
                overflow-hidden
                rounded-[32px]
                border
                border-white/[0.08]
                bg-white/[0.025]
                p-7
                backdrop-blur-2xl
                transition-all
                duration-700
                ease-[cubic-bezier(0.16,1,0.3,1)]
                hover:border-[#D6B25E]/35
                hover:bg-white/[0.045]
                hover:shadow-[0_20px_80px_rgba(214,178,94,0.10)]
              "
            >
              {/* =================================================
                  HOVER GOLDEN LIGHT
              ================================================== */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-24
                  -top-24
                  h-56
                  w-56
                  rounded-full
                  bg-[#D6B25E]/0
                  blur-[80px]
                  transition-all
                  duration-700
                  group-hover:bg-[#D6B25E]/[0.14]
                "
              />

              {/* =================================================
                  HOVER INNER GLOW
              ================================================== */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  rounded-[32px]
                  opacity-0
                  transition-opacity
                  duration-700
                  group-hover:opacity-100
                  bg-[radial-gradient(circle_at_20%_0%,rgba(214,178,94,0.12),transparent_45%)]
                "
              />

              {/* =================================================
                  TOP SHINE
              ================================================== */}

              <div
                className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-0
                  h-px
                  w-0
                  -translate-x-1/2
                  bg-gradient-to-r
                  from-transparent
                  via-[#D6B25E]
                  to-transparent
                  opacity-0
                  transition-all
                  duration-700
                  group-hover:w-[70%]
                  group-hover:opacity-70
                "
              />

              {/* =================================================
                  ICON
              ================================================== */}

              <div
                className="
                  relative
                  z-10
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-white/[0.06]
                  bg-white/[0.035]
                  transition-all
                  duration-500
                  group-hover:border-[#D6B25E]/30
                  group-hover:bg-[#D6B25E]/10
                  group-hover:scale-110
                  group-hover:shadow-[0_0_30px_rgba(214,178,94,0.15)]
                "
              >
                <Icon
                  size={22}
                  strokeWidth={1.5}
                  className="
                    text-white/50
                    transition-all
                    duration-500
                    group-hover:text-[#D6B25E]
                    group-hover:scale-110
                  "
                />
              </div>

              {/* =================================================
                  CONTENT
              ================================================== */}

              <div className="relative z-10">
                <p
                  className="
                    mt-6
                    text-xs
                    uppercase
                    tracking-[0.3em]
                    text-white/35
                    transition-colors
                    duration-500
                    group-hover:text-[#D6B25E]/80
                  "
                >
                  {product.category}
                </p>

                <h3
                  className="
                    mt-3
                    text-2xl
                    text-[#F4F1EA]
                    transition-all
                    duration-500
                    group-hover:text-white
                  "
                >
                  {product.name}
                </h3>

                <p
                  className="
                    mt-4
                    text-sm
                    leading-6
                    text-white/40
                    transition-colors
                    duration-500
                    group-hover:text-white/55
                  "
                >
                  {product.description}
                </p>

                {/* =================================================
                    COMING SOON
                ================================================== */}

                {product.name !== "SoulMirror" && (
                  <span
                    className="
                      mt-5
                      inline-block
                      rounded-full
                      border
                      border-white/[0.08]
                      bg-white/[0.02]
                      px-3
                      py-1
                      text-[10px]
                      uppercase
                      tracking-widest
                      text-white/30
                      transition-all
                      duration-500
                      group-hover:border-[#D6B25E]/20
                      group-hover:text-[#D6B25E]/60
                    "
                  >
                    Coming Soon
                  </span>
                )}
              </div>

              {/* =================================================
                  BOTTOM GLOW
              ================================================== */}

              <div
                className="
                  pointer-events-none
                  absolute
                  bottom-[-100px]
                  left-1/2
                  h-40
                  w-40
                  -translate-x-1/2
                  rounded-full
                  bg-[#D6B25E]/0
                  blur-[70px]
                  transition-all
                  duration-700
                  group-hover:bg-[#D6B25E]/[0.08]
                "
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}