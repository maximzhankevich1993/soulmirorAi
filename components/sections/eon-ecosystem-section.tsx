
"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Brain,
  Sparkles,
  Clock,
  Globe2,
  X,
  type LucideIcon,
} from "lucide-react";
import { useState } from "react";

interface EcosystemProduct {
  name: string;
  category: string;
  description: string;
  icon: LucideIcon;
  active: boolean;
}

const products: EcosystemProduct[] = [
  {
    name: "SoulMirror",
    category: "Personal Intelligence",
    description:
      "AI reflection system for identity, archetypes, dreams and personal evolution.",
    icon: Brain,
    active: true,
  },
  {
    name: "Memora",
    category: "AI Memory System",
    description:
      "A personal AI memory layer that remembers your experiences, thoughts and knowledge, creating a continuous intelligent memory around you.",
    icon: Clock,
    active: false,
  },
  {
    name: "Future Self",
    category: "Identity Simulation",
    description:
      "Explore possible versions of yourself through AI-powered scenarios, decisions and simulations of your future identity.",
    icon: Sparkles,
    active: false,
  },
  {
    name: "Parallel",
    category: "AI Universe",
    description:
      "A new generation of interactive AI worlds and experiences where intelligence, imagination and exploration become one.",
    icon: Globe2,
    active: false,
  },
];

export function EonEcosystemSection() {
  const [selectedProduct, setSelectedProduct] =
    useState<EcosystemProduct | null>(null);

  const handleProductClick = (product: EcosystemProduct) => {
    /*
     * SoulMirror уже существует.
     * Поэтому не открываем отдельную страницу —
     * плавно переходим к Soul Scan.
     */
    if (product.active) {
      const target = document.getElementById("features");

      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      return;
    }

    /*
     * Остальные продукты пока не существуют как отдельные страницы.
     * Открываем cinematic preview.
     */
    setSelectedProduct(product);
  };

  const closePreview = () => {
    setSelectedProduct(null);
  };

  return (
    <>
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
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            relative
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
              <motion.button
                key={product.name}
                type="button"
                onClick={() => handleProductClick(product)}
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
                  amount: 0.15,
                }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{
                  y: -10,
                  scale: 1.015,
                }}
                whileTap={{
                  scale: 0.985,
                }}
                className="
                  group
                  relative
                  cursor-pointer
                  overflow-hidden
                  rounded-[32px]
                  border
                  border-white/10
                  bg-white/[0.025]
                  p-7
                  text-left
                  backdrop-blur-2xl
                  transition-all
                  duration-500

                  hover:border-[#D6B25E]/35
                  hover:bg-[#D6B25E]/[0.045]
                  hover:shadow-[0_25px_80px_rgba(214,178,94,0.12)]
                "
              >
                {/* =================================================
                    HOVER LIGHT
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
                    group-hover:bg-[#D6B25E]/15
                  "
                />

                {/* =================================================
                    TOP LIGHT LINE
                ================================================== */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    left-8
                    right-8
                    top-0
                    h-px
                    bg-gradient-to-r
                    from-transparent
                    via-[#D6B25E]/0
                    to-transparent
                    transition-all
                    duration-700
                    group-hover:via-[#D6B25E]/70
                  "
                />

                {/* =================================================
                    ICON
                ================================================== */}

                <div
                  className="
                    relative
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.035]
                    transition-all
                    duration-500
                    group-hover:border-[#D6B25E]/30
                    group-hover:bg-[#D6B25E]/10
                    group-hover:shadow-[0_0_35px_rgba(214,178,94,0.15)]
                  "
                >
                  <Icon
                    size={23}
                    strokeWidth={1.5}
                    className="
                      text-white/60
                      transition-all
                      duration-500
                      group-hover:scale-110
                      group-hover:text-[#D6B25E]
                    "
                  />
                </div>

                {/* =================================================
                    CONTENT
                ================================================== */}

                <p
                  className="
                    relative
                    mt-6
                    text-[10px]
                    uppercase
                    tracking-[0.3em]
                    text-[#D6B25E]/70
                  "
                >
                  {product.category}
                </p>

                <h3
                  className="
                    relative
                    mt-3
                    text-2xl
                    font-medium
                    text-[#F4F1EA]
                    transition-colors
                    duration-500
                    group-hover:text-white
                  "
                >
                  {product.name}
                </h3>

                <p
                  className="
                    relative
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
                    STATUS
                ================================================== */}

                <div className="relative mt-6 flex items-center justify-between">
                  {product.active ? (
                    <span
                      className="
                        text-[10px]
                        uppercase
                        tracking-[0.25em]
                        text-[#D6B25E]/60
                      "
                    >
                      Explore
                    </span>
                  ) : (
                    <span
                      className="
                        rounded-full
                        border
                        border-white/10
                        bg-white/[0.025]
                        px-3
                        py-1
                        text-[9px]
                        uppercase
                        tracking-[0.2em]
                        text-white/35
                        transition-all
                        duration-500
                        group-hover:border-[#D6B25E]/20
                        group-hover:text-[#D6B25E]/60
                      "
                    >
                      Coming Soon
                    </span>
                  )}

                  {/* Arrow */}

                  <span
                    className="
                      text-lg
                      text-white/20
                      transition-all
                      duration-500
                      group-hover:translate-x-1
                      group-hover:text-[#D6B25E]
                    "
                  >
                    →
                  </span>
                </div>
              </motion.button>
            );
          })}
        </div>
      </section>

      {/* =========================================================
          FUTURE PRODUCT CINEMATIC PREVIEW
      ========================================================= */}

      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            className="
              fixed
              inset-0
              z-[99999]
              overflow-y-auto
              bg-[#050505]
            "
            initial={{
              opacity: 0,
              scale: 1.025,
              filter: "blur(14px)",
            }}
            animate={{
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
            }}
            exit={{
              opacity: 0,
              scale: 1.015,
              filter: "blur(12px)",
            }}
            transition={{
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {/* =================================================
                DARK ATMOSPHERE
            ================================================== */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-[#050505]
              "
            />

            {/* =================================================
                GOLDEN ATMOSPHERE
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.6,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 1.2,
              }}
              transition={{
                duration: 1.5,
                ease: [0.16, 1, 0.3, 1],
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
                bg-[#D6B25E]/[0.055]
                blur-[180px]
              "
            />

            {/* =================================================
                HORIZONTAL LIGHT
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                scaleX: 0.2,
              }}
              animate={{
                opacity: 1,
                scaleX: 1,
              }}
              transition={{
                duration: 1.4,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                pointer-events-none
                absolute
                left-[-20%]
                top-1/2
                h-[220px]
                w-[140%]
                -translate-y-1/2
                rounded-full
                bg-[#D6B25E]/[0.035]
                blur-[100px]
              "
            />

            {/* =================================================
                CONTENT
            ================================================== */}

            <div
              className="
                relative
                z-10
                flex
                min-h-screen
                items-center
                justify-center
                px-6
                py-24
              "
            >
              <motion.div
                initial={{
                  opacity: 0,
                  y: 35,
                  scale: 0.97,
                  filter: "blur(12px)",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  filter: "blur(0px)",
                }}
                transition={{
                  delay: 0.1,
                  duration: 1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="
                  w-full
                  max-w-3xl
                  text-center
                "
              >
                {/* ICON */}

                <div
                  className="
                    mx-auto
                    flex
                    h-20
                    w-20
                    items-center
                    justify-center
                    rounded-[28px]
                    border
                    border-[#D6B25E]/20
                    bg-[#D6B25E]/[0.06]
                    shadow-[0_0_80px_rgba(214,178,94,0.12)]
                  "
                >
                  <selectedProduct.icon
                    size={34}
                    strokeWidth={1.3}
                    className="text-[#D6B25E]"
                  />
                </div>

                {/* CATEGORY */}

                <p
                  className="
                    mt-10
                    text-[10px]
                    uppercase
                    tracking-[0.45em]
                    text-[#D6B25E]
                  "
                >
                  {selectedProduct.category}
                </p>

                {/* TITLE */}

                <h2
                  className="
                    mt-5
                    font-[family:var(--font-cormorant)]
                    text-6xl
                    leading-none
                    text-[#F4F1EA]
                    md:text-8xl
                  "
                >
                  {selectedProduct.name}
                </h2>

                {/* DESCRIPTION */}

                <p
                  className="
                    mx-auto
                    mt-8
                    max-w-2xl
                    text-base
                    leading-8
                    text-white/50
                    md:text-lg
                  "
                >
                  {selectedProduct.description}
                </p>

                {/* STATUS */}

                <div className="mt-10">
                  <span
                    className="
                      inline-flex
                      rounded-full
                      border
                      border-[#D6B25E]/25
                      bg-[#D6B25E]/[0.05]
                      px-5
                      py-2
                      text-[10px]
                      uppercase
                      tracking-[0.35em]
                      text-[#D6B25E]/75
                    "
                  >
                    Coming Soon
                  </span>
                </div>

                <p
                  className="
                    mt-6
                    text-xs
                    tracking-[0.15em]
                    text-white/20
                  "
                >
                  A new intelligence system by EON AI
                </p>
              </motion.div>
            </div>

            {/* =================================================
                CLOSE BUTTON
            ================================================== */}

            <motion.button
              type="button"
              onClick={closePreview}
              initial={{
                opacity: 0,
                x: 20,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: 0.5,
                duration: 0.7,
              }}
              className="
                fixed
                right-5
                top-5
                z-20
                flex
                h-11
                items-center
                gap-3
                rounded-full
                border
                border-white/10
                bg-white/[0.025]
                px-4
                text-[10px]
                uppercase
                tracking-[0.25em]
                text-white/40
                backdrop-blur-xl
                transition-all
                duration-500
                hover:border-white/20
                hover:bg-white/[0.06]
                hover:text-white
                active:scale-95
                sm:right-8
                sm:top-8
              "
            >
              <X size={14} strokeWidth={1.5} />
              Close
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

