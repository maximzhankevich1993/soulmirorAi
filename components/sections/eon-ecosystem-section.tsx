
"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  Brain,
  Sparkles,
  Clock,
  Globe2,
  X,
  ArrowRight,
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
      "A personal AI memory layer that remembers your experiences, thoughts and knowledge.",
    icon: Clock,
    active: false,
  },
  {
    name: "Future Self",
    category: "Identity Simulation",
    description:
      "Explore possible versions of yourself through AI-powered scenarios and simulations.",
    icon: Sparkles,
    active: false,
  },
  {
    name: "Parallel",
    category: "AI Universe",
    description:
      "A new generation of interactive AI worlds, characters and experiences.",
    icon: Globe2,
    active: false,
  },
];

export function EonEcosystemSection() {
  const [selectedProduct, setSelectedProduct] =
    useState<EcosystemProduct | null>(null);

  const handleProductClick = (product: EcosystemProduct) => {
    if (product.name === "SoulMirror") {
      window.location.href = "/soul-analysis";
      return;
    }

    setSelectedProduct(product);
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
            filter: "blur(12px)",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
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
                  filter: "blur(8px)",
                }}
                whileInView={{
                  opacity: product.active ? 1 : 0.72,
                  y: 0,
                  filter: "blur(0px)",
                }}
                whileHover={{
                  y: -10,
                  scale: 1.015,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
                viewport={{
                  once: true,
                }}
                className={`
                  group
                  relative
                  overflow-hidden
                  rounded-[32px]
                  border
                  p-7
                  text-left
                  backdrop-blur-2xl
                  transition-all
                  duration-500
                  cursor-pointer
                  focus:outline-none
                  focus-visible:ring-1
                  focus-visible:ring-[#D6B25E]/60

                  ${
                    product.active
                      ? `
                        border-[#D6B25E]/20
                        bg-gradient-to-br
                        from-[#D6B25E]/10
                        via-white/[0.035]
                        to-white/[0.015]
                      `
                      : `
                        border-white/[0.08]
                        bg-white/[0.025]
                      `
                  }

                  hover:border-[#D6B25E]/40
                  hover:bg-white/[0.055]
                  hover:shadow-[0_30px_100px_rgba(214,178,94,0.12)]
                `}
              >
                {/* =================================================
                    HOVER LIGHT
                ================================================== */}

                <motion.div
                  initial={{
                    opacity: 0,
                    x: "-100%",
                  }}
                  whileHover={{
                    opacity: 1,
                    x: "100%",
                  }}
                  transition={{
                    duration: 1.1,
                    ease: "easeInOut",
                  }}
                  className="
                    pointer-events-none
                    absolute
                    inset-y-0
                    left-[-60%]
                    w-[45%]
                    rotate-[18deg]
                    bg-gradient-to-r
                    from-transparent
                    via-[#D6B25E]/15
                    to-transparent
                    blur-xl
                  "
                />

                {/* =================================================
                    TOP GOLD LINE
                ================================================== */}

                <div
                  className="
                    absolute
                    left-7
                    right-7
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
                    border-[#D6B25E]/10
                    bg-[#D6B25E]/10
                    transition-all
                    duration-500
                    group-hover:border-[#D6B25E]/30
                    group-hover:bg-[#D6B25E]/15
                    group-hover:shadow-[0_0_35px_rgba(214,178,94,0.15)]
                  "
                >
                  <Icon
                    size={23}
                    strokeWidth={1.5}
                    className="
                      text-[#D6B25E]
                      transition-transform
                      duration-500
                      group-hover:scale-110
                    "
                  />
                </div>

                {/* =================================================
                    CATEGORY
                ================================================== */}

                <p
                  className="
                    relative
                    mt-6
                    text-xs
                    uppercase
                    tracking-[0.3em]
                    text-[#D6B25E]/80
                  "
                >
                  {product.category}
                </p>

                {/* =================================================
                    NAME
                ================================================== */}

                <h3
                  className="
                    relative
                    mt-3
                    text-2xl
                    text-[#F4F1EA]
                    transition-colors
                    duration-500
                    group-hover:text-[#D6B25E]
                  "
                >
                  {product.name}
                </h3>

                {/* =================================================
                    DESCRIPTION
                ================================================== */}

                <p
                  className="
                    relative
                    mt-4
                    text-sm
                    leading-6
                    text-white/45
                    transition-colors
                    duration-500
                    group-hover:text-white/60
                  "
                >
                  {product.description}
                </p>

                {/* =================================================
                    FOOTER
                ================================================== */}

                <div
                  className="
                    relative
                    mt-7
                    flex
                    items-center
                    justify-between
                  "
                >
                  {!product.active ? (
                    <span
                      className="
                        rounded-full
                        border
                        border-white/10
                        px-3
                        py-1
                        text-[10px]
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
                  ) : (
                    <span
                      className="
                        text-[10px]
                        uppercase
                        tracking-[0.2em]
                        text-[#D6B25E]/60
                      "
                    >
                      Explore
                    </span>
                  )}

                  <ArrowRight
                    size={16}
                    className="
                      text-white/20
                      transition-all
                      duration-500
                      group-hover:translate-x-1
                      group-hover:text-[#D6B25E]
                    "
                  />
                </div>
              </motion.button>
            );
          })}
        </div>
      </section>

      {/* =====================================================
          COMING SOON EXPERIENCE
      ====================================================== */}

      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            className="
              fixed
              inset-0
              z-[99999]
              flex
              items-center
              justify-center
              overflow-hidden
              bg-[#050505]/95
              px-6
              backdrop-blur-2xl
            "
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            onClick={() => setSelectedProduct(null)}
          >
            {/* =================================================
                BACKGROUND GOLD
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.5,
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
                duration: 1.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-[700px]
                w-[900px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-[#D6B25E]/[0.045]
                blur-[180px]
              "
            />

            {/* =================================================
                HORIZONTAL LIGHT
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                scaleX: 0,
              }}
              animate={{
                opacity: 1,
                scaleX: 1,
              }}
              exit={{
                opacity: 0,
                scaleX: 0,
              }}
              transition={{
                duration: 1.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-[1px]
                w-[80%]
                -translate-x-1/2
                bg-gradient-to-r
                from-transparent
                via-[#D6B25E]/40
                to-transparent
                blur-sm
              "
            />

            {/* =================================================
                CONTENT
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 40,
                scale: 0.96,
                filter: "blur(18px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                filter: "blur(0px)",
              }}
              exit={{
                opacity: 0,
                y: -25,
                scale: 1.02,
                filter: "blur(12px)",
              }}
              transition={{
                duration: 1,
                delay: 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              onClick={(event) => event.stopPropagation()}
              className="
                relative
                z-10
                w-full
                max-w-2xl
                rounded-[40px]
                border
                border-white/[0.08]
                bg-white/[0.025]
                p-10
                text-center
                shadow-[0_40px_120px_rgba(0,0,0,0.5)]
                backdrop-blur-3xl
                md:p-14
              "
            >
              {/* ICON */}

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
                  delay: 0.4,
                  duration: 0.7,
                }}
                className="
                  mx-auto
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-3xl
                  border
                  border-[#D6B25E]/20
                  bg-[#D6B25E]/10
                "
              >
                <selectedProduct.icon
                  size={28}
                  strokeWidth={1.4}
                  className="text-[#D6B25E]"
                />
              </motion.div>

              {/* CATEGORY */}

              <p
                className="
                  mt-8
                  text-xs
                  uppercase
                  tracking-[0.4em]
                  text-[#D6B25E]
                "
              >
                {selectedProduct.category}
              </p>

              {/* NAME */}

              <h2
                className="
                  mt-5
                  font-[family:var(--font-cormorant)]
                  text-5xl
                  text-[#F4F1EA]
                  md:text-6xl
                "
              >
                {selectedProduct.name}
              </h2>

              {/* DESCRIPTION */}

              <p
                className="
                  mx-auto
                  mt-6
                  max-w-xl
                  text-base
                  leading-8
                  text-white/50
                  md:text-lg
                "
              >
                {selectedProduct.description}
              </p>

              {/* STATUS */}

              <div
                className="
                  mt-9
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-[#D6B25E]/20
                  bg-[#D6B25E]/[0.06]
                  px-5
                  py-2.5
                "
              >
                <span
                  className="
                    h-1.5
                    w-1.5
                    animate-pulse
                    rounded-full
                    bg-[#D6B25E]
                    shadow-[0_0_12px_rgba(214,178,94,0.8)]
                  "
                />

                <span
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.3em]
                    text-[#D6B25E]/70
                  "
                >
                  Coming Soon
                </span>
              </div>
            </motion.div>

            {/* =================================================
                CLOSE
            ================================================== */}

            <motion.button
              type="button"
              onClick={() => setSelectedProduct(null)}
              initial={{
                opacity: 0,
                x: 20,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: 20,
              }}
              transition={{
                delay: 0.5,
                duration: 0.6,
              }}
              className="
                absolute
                right-6
                top-6
                z-20
                flex
                h-11
                w-11
                cursor-pointer
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-white/[0.03]
                text-white/40
                backdrop-blur-xl
                transition-all
                duration-500
                hover:border-[#D6B25E]/30
                hover:bg-[#D6B25E]/10
                hover:text-[#D6B25E]
                active:scale-90
                md:right-10
                md:top-10
              "
              aria-label="Close"
            >
              <X size={18} />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

