
"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  Brain,
  Sparkles,
  Clock,
  Globe2,
  ArrowUpRight,
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
      "A personal AI memory layer that remembers your experiences, knowledge and meaningful moments.",
    icon: Clock,
    active: false,
  },
  {
    name: "Future Self",
    category: "Identity Simulation",
    description:
      "Explore possible versions of yourself through AI-powered scenarios and future identity simulations.",
    icon: Sparkles,
    active: false,
  },
  {
    name: "Parallel",
    category: "AI Universe",
    description:
      "A new generation of interactive AI worlds, characters and experiences built around your imagination.",
    icon: Globe2,
    active: false,
  },
];

export function EonEcosystemSection() {
  const [selectedProduct, setSelectedProduct] =
    useState<EcosystemProduct | null>(null);

  const handleProductClick = (product: EcosystemProduct) => {
    /*
     * SoulMirror открываем как основной продукт.
     * Если у тебя другой путь для Soul Analysis —
     * поменяй только эту строку.
     */
    if (product.active) {
      window.location.href = "/soul-analysis";
      return;
    }

    setSelectedProduct(product);
  };

  const closeModal = () => {
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

        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.35, 0.55, 0.35],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
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
            duration: 0.9,
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
                  y: 35,
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
                  border-white/[0.08]
                  bg-white/[0.025]
                  p-7
                  text-left
                  backdrop-blur-2xl
                  transition-colors
                  duration-500
                  hover:border-[#D6B25E]/35
                  hover:bg-white/[0.045]
                  focus:outline-none
                  focus-visible:ring-1
                  focus-visible:ring-[#D6B25E]/60
                "
              >
                {/* Hover glow */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-20
                    -top-20
                    h-48
                    w-48
                    rounded-full
                    bg-[#D6B25E]/0
                    blur-[80px]
                    transition-all
                    duration-700
                    group-hover:bg-[#D6B25E]/12
                  "
                />

                {/* Bottom line */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    bottom-0
                    left-7
                    right-7
                    h-px
                    origin-left
                    scale-x-0
                    bg-gradient-to-r
                    from-transparent
                    via-[#D6B25E]/60
                    to-transparent
                    transition-transform
                    duration-700
                    group-hover:scale-x-100
                  "
                />

                {/* Icon */}

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
                    border-white/[0.06]
                    bg-white/[0.025]
                    transition-all
                    duration-500
                    group-hover:border-[#D6B25E]/25
                    group-hover:bg-[#D6B25E]/10
                    group-hover:shadow-[0_0_35px_rgba(214,178,94,0.12)]
                  "
                >
                  <Icon
                    size={22}
                    strokeWidth={1.5}
                    className="
                      text-white/50
                      transition-all
                      duration-500
                      group-hover:scale-110
                      group-hover:text-[#D6B25E]
                    "
                  />
                </div>

                {/* Category */}

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

                {/* Name */}

                <div
                  className="
                    relative
                    mt-3
                    flex
                    items-center
                    justify-between
                    gap-3
                  "
                >
                  <h3
                    className="
                      text-2xl
                      font-light
                      text-[#F4F1EA]
                    "
                  >
                    {product.name}
                  </h3>

                  <ArrowUpRight
                    size={18}
                    className="
                      shrink-0
                      translate-y-1
                      -translate-x-1
                      text-white/20
                      opacity-0
                      transition-all
                      duration-500
                      group-hover:translate-x-0
                      group-hover:translate-y-0
                      group-hover:text-[#D6B25E]
                      group-hover:opacity-100
                    "
                  />
                </div>

                {/* Description */}

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

                {/* Coming Soon */}

                {!product.active && (
                  <span
                    className="
                      relative
                      mt-5
                      inline-flex
                      rounded-full
                      border
                      border-white/[0.08]
                      bg-white/[0.02]
                      px-3
                      py-1
                      text-[9px]
                      uppercase
                      tracking-[0.25em]
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
              </motion.button>
            );
          })}
        </div>
      </section>

      {/* =======================================================
          PRODUCT MODAL
      ======================================================== */}

      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            className="
              fixed
              inset-0
              z-[99990]
              flex
              items-center
              justify-center
              overflow-y-auto
              p-5
              md:p-10
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
              duration: 0.45,
            }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                closeModal();
              }
            }}
          >
            {/* =================================================
                BACKDROP
            ================================================== */}

            <motion.div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-black/75
                backdrop-blur-md
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
            />

            {/* =================================================
                HORIZONTAL WINDOW
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 45,
                scale: 0.96,
                filter: "blur(14px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                filter: "blur(0px)",
              }}
              exit={{
                opacity: 0,
                y: 25,
                scale: 0.98,
                filter: "blur(10px)",
              }}
              transition={{
                duration: 0.75,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                relative
                z-10
                w-full
                max-w-5xl
                overflow-hidden
                rounded-[32px]
                border
                border-white/[0.1]
                bg-[#080808]/95
                shadow-[0_30px_120px_rgba(0,0,0,0.65)]
                backdrop-blur-3xl
              "
            >
              {/* =================================================
                  GOLD HORIZONTAL LIGHT
              ================================================== */}

              <motion.div
                initial={{
                  x: "-100%",
                  opacity: 0,
                }}
                animate={{
                  x: "100%",
                  opacity: [0, 0.7, 0],
                }}
                transition={{
                  duration: 1.8,
                  delay: 0.25,
                  ease: "easeInOut",
                }}
                className="
                  pointer-events-none
                  absolute
                  left-0
                  top-0
                  h-px
                  w-1/2
                  bg-gradient-to-r
                  from-transparent
                  via-[#D6B25E]
                  to-transparent
                  blur-[1px]
                "
              />

              {/* Ambient glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-1/2
                  h-[400px]
                  w-[700px]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-[#D6B25E]/[0.035]
                  blur-[150px]
                "
              />

              {/* =================================================
                  CLOSE
              ================================================== */}

              <button
                type="button"
                onClick={closeModal}
                aria-label="Close"
                className="
                  absolute
                  right-5
                  top-5
                  z-20
                  flex
                  h-10
                  w-10
                  cursor-pointer
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/[0.08]
                  bg-white/[0.025]
                  text-white/40
                  transition-all
                  duration-500
                  hover:border-white/20
                  hover:bg-white/[0.07]
                  hover:text-white
                  active:scale-95
                "
              >
                <X size={17} />
              </button>

              {/* =================================================
                  CONTENT
              ================================================== */}

              <div
                className="
                  relative
                  grid
                  min-h-[360px]
                  md:grid-cols-[0.8fr_1.2fr]
                "
              >
                {/* LEFT */}

                <motion.div
                  initial={{
                    opacity: 0,
                    x: -35,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: 0.15,
                    duration: 0.7,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="
                    flex
                    flex-col
                    justify-center
                    border-b
                    border-white/[0.07]
                    p-8
                    md:border-b-0
                    md:border-r
                    md:p-12
                  "
                >
                  {/* Icon */}

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
                      delay: 0.3,
                      duration: 0.6,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-[#D6B25E]/20
                      bg-[#D6B25E]/[0.07]
                      shadow-[0_0_40px_rgba(214,178,94,0.08)]
                    "
                  >
                    <selectedProduct.icon
                      size={25}
                      strokeWidth={1.5}
                      className="text-[#D6B25E]"
                    />
                  </motion.div>

                  <motion.p
                    initial={{
                      opacity: 0,
                      y: 12,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.4,
                    }}
                    className="
                      mt-7
                      text-[10px]
                      uppercase
                      tracking-[0.35em]
                      text-[#D6B25E]
                    "
                  >
                    {selectedProduct.category}
                  </motion.p>

                  <motion.h3
                    initial={{
                      opacity: 0,
                      y: 15,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.5,
                    }}
                    className="
                      mt-3
                      text-4xl
                      font-light
                      tracking-tight
                      text-[#F4F1EA]
                      md:text-5xl
                    "
                  >
                    {selectedProduct.name}
                  </motion.h3>
                </motion.div>

                {/* RIGHT */}

                <motion.div
                  initial={{
                    opacity: 0,
                    x: 35,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: 0.25,
                    duration: 0.75,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="
                    flex
                    flex-col
                    justify-center
                    p-8
                    md:p-12
                  "
                >
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
                      delay: 0.55,
                    }}
                    className="
                      max-w-xl
                      text-lg
                      leading-8
                      text-white/55
                    "
                  >
                    {selectedProduct.description}
                  </motion.p>

                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 15,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.7,
                    }}
                    className="
                      mt-8
                      flex
                      items-center
                      gap-4
                    "
                  >
                    <span
                      className="
                        rounded-full
                        border
                        border-[#D6B25E]/20
                        bg-[#D6B25E]/[0.06]
                        px-4
                        py-2
                        text-[10px]
                        uppercase
                        tracking-[0.25em]
                        text-[#D6B25E]/70
                      "
                    >
                      Coming Soon
                    </span>

                    <span
                      className="
                        text-xs
                        text-white/25
                      "
                    >
                      EON AI
                    </span>
                  </motion.div>

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
                      delay: 0.85,
                      duration: 0.8,
                    }}
                    className="
                      mt-10
                      h-px
                      origin-left
                      bg-gradient-to-r
                      from-[#D6B25E]/40
                      via-white/10
                      to-transparent
                    "
                  />

                  <motion.p
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: 1,
                    }}
                    transition={{
                      delay: 1,
                    }}
                    className="
                      mt-5
                      text-[10px]
                      uppercase
                      tracking-[0.3em]
                      text-white/20
                    "
                  >
                    A new intelligence system is taking shape
                  </motion.p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

