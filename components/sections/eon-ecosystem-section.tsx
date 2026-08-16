
"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  Brain,
  Sparkles,
  Clock,
  Globe2,
  X,
  ArrowUpRight,
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
      "Explore possible versions of yourself through AI-powered scenarios, decisions and future identities.",
    icon: Sparkles,
    active: false,
  },
  {
    name: "Parallel",
    category: "AI Universe",
    description:
      "A new generation of interactive AI worlds where stories, characters and experiences evolve around you.",
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
     * Поэтому вместо модального окна отправляем пользователя
     * непосредственно к Soul Scan.
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
            filter: "blur(10px)",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          viewport={{
            once: true,
            margin: "-100px",
          }}
          transition={{
            duration: 1,
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
                  margin: "-50px",
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
                whileTap={{
                  scale: 0.985,
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
                  outline-none
                  transition-colors
                  duration-500
                  ${
                    product.active
                      ? `
                        border-[#D6B25E]/25
                        bg-gradient-to-br
                        from-[#D6B25E]/10
                        to-white/[0.03]
                      `
                      : `
                        border-white/[0.08]
                        bg-white/[0.025]
                      `
                  }
                  hover:border-[#D6B25E]/35
                  hover:bg-white/[0.055]
                  focus-visible:border-[#D6B25E]/50
                `}
              >
                {/* =================================================
                    HOVER GOLD LIGHT
                ================================================== */}

                <motion.div
                  initial={{
                    opacity: 0,
                    x: "-120%",
                  }}
                  whileHover={{
                    opacity: 1,
                    x: "120%",
                  }}
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                  }}
                  className="
                    pointer-events-none
                    absolute
                    inset-y-0
                    left-0
                    w-[45%]
                    skew-x-[-18deg]
                    bg-gradient-to-r
                    from-transparent
                    via-[#D6B25E]/10
                    to-transparent
                    blur-xl
                  "
                />

                {/* =================================================
                    TOP GLOW
                ================================================== */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-16
                    -top-16
                    h-40
                    w-40
                    rounded-full
                    bg-[#D6B25E]/0
                    blur-[70px]
                    transition-all
                    duration-700
                    group-hover:bg-[#D6B25E]/15
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
                    group-hover:shadow-[0_0_35px_rgba(214,178,94,0.12)]
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
                    text-[10px]
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
                    font-medium
                    text-[#F4F1EA]
                    transition-colors
                    duration-500
                    group-hover:text-white
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
                    BOTTOM
                ================================================== */}

                <div className="relative mt-6 flex items-center justify-between">
                  {!product.active ? (
                    <span
                      className="
                        rounded-full
                        border
                        border-white/10
                        px-3
                        py-1
                        text-[9px]
                        uppercase
                        tracking-[0.22em]
                        text-white/35
                        transition-all
                        duration-500
                        group-hover:border-[#D6B25E]/20
                        group-hover:text-[#D6B25E]/70
                      "
                    >
                      Coming Soon
                    </span>
                  ) : (
                    <span
                      className="
                        rounded-full
                        border
                        border-[#D6B25E]/20
                        bg-[#D6B25E]/5
                        px-3
                        py-1
                        text-[9px]
                        uppercase
                        tracking-[0.22em]
                        text-[#D6B25E]/80
                      "
                    >
                      Available
                    </span>
                  )}

                  <ArrowUpRight
                    size={17}
                    strokeWidth={1.5}
                    className="
                      text-white/25
                      transition-all
                      duration-500
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                      group-hover:text-[#D6B25E]
                    "
                  />
                </div>
              </motion.button>
            );
          })}
        </div>
      </section>

      {/* =========================================================
          PRODUCT MODAL
      ========================================================== */}

      <AnimatePresence>
        {selectedProduct && (
          <>
            {/* BACKDROP */}

            <motion.div
              key="ecosystem-backdrop"
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
                ease: "easeOut",
              }}
              onClick={closeModal}
              className="
                fixed
                inset-0
                z-[9998]
                bg-black/70
                backdrop-blur-md
              "
            />

            {/* MODAL */}

            <motion.div
              key="ecosystem-modal"
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
              exit={{
                opacity: 0,
                y: 20,
                scale: 0.97,
                filter: "blur(10px)",
              }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                fixed
                left-1/2
                top-1/2
                z-[9999]
                w-[calc(100%-32px)]
                max-w-5xl
                -translate-x-1/2
                -translate-y-1/2
              "
            >
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[36px]
                  border
                  border-white/[0.1]
                  bg-[#090909]/95
                  shadow-[0_30px_120px_rgba(0,0,0,0.65)]
                  backdrop-blur-3xl
                "
              >
                {/* =================================================
                    MODAL GOLD GLOW
                ================================================== */}

                <motion.div
                  animate={{
                    opacity: [0.15, 0.3, 0.15],
                    scale: [1, 1.08, 1],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    pointer-events-none
                    absolute
                    -right-32
                    -top-32
                    h-[400px]
                    w-[400px]
                    rounded-full
                    bg-[#D6B25E]/10
                    blur-[120px]
                  "
                />

                {/* =================================================
                    HORIZONTAL LIGHT
                ================================================== */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    left-0
                    right-0
                    top-0
                    h-px
                    bg-gradient-to-r
                    from-transparent
                    via-[#D6B25E]/40
                    to-transparent
                  "
                />

                {/* =================================================
                    CONTENT
                ================================================== */}

                <div
                  className="
                    relative
                    flex
                    flex-col
                    gap-8
                    p-7
                    sm:p-10
                    md:flex-row
                    md:items-center
                    md:gap-12
                    md:p-12
                  "
                >
                  {/* ICON */}

                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    transition={{
                      delay: 0.15,
                      duration: 0.6,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="
                      flex
                      h-20
                      w-20
                      shrink-0
                      items-center
                      justify-center
                      rounded-[26px]
                      border
                      border-[#D6B25E]/20
                      bg-[#D6B25E]/10
                      shadow-[0_0_50px_rgba(214,178,94,0.08)]
                    "
                  >
                    <selectedProduct.icon
                      size={34}
                      strokeWidth={1.3}
                      className="text-[#D6B25E]"
                    />
                  </motion.div>

                  {/* TEXT */}

                  <motion.div
                    initial={{
                      opacity: 0,
                      x: 25,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: 0.2,
                      duration: 0.7,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="min-w-0 flex-1"
                  >
                    <p
                      className="
                        text-[10px]
                        uppercase
                        tracking-[0.35em]
                        text-[#D6B25E]
                      "
                    >
                      {selectedProduct.category}
                    </p>

                    <h3
                      className="
                        mt-3
                        text-4xl
                        font-medium
                        tracking-tight
                        text-[#F4F1EA]
                        sm:text-5xl
                      "
                    >
                      {selectedProduct.name}
                    </h3>

                    <p
                      className="
                        mt-5
                        max-w-2xl
                        text-sm
                        leading-7
                        text-white/50
                        sm:text-base
                      "
                    >
                      {selectedProduct.description}
                    </p>

                    <div className="mt-7">
                      <span
                        className="
                          inline-flex
                          rounded-full
                          border
                          border-white/10
                          bg-white/[0.025]
                          px-4
                          py-2
                          text-[10px]
                          uppercase
                          tracking-[0.25em]
                          text-white/40
                        "
                      >
                        Coming Soon
                      </span>
                    </div>
                  </motion.div>

                  {/* CLOSE */}

                  <motion.button
                    type="button"
                    onClick={closeModal}
                    aria-label="Close"
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    transition={{
                      delay: 0.35,
                      duration: 0.5,
                    }}
                    className="
                      absolute
                      right-5
                      top-5
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/[0.08]
                      bg-white/[0.025]
                      text-white/40
                      transition-all
                      duration-300
                      hover:border-white/20
                      hover:bg-white/[0.06]
                      hover:text-white
                      active:scale-90
                    "
                  >
                    <X size={17} strokeWidth={1.5} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

