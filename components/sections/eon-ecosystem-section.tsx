
"use client";

import { motion, AnimatePresence } from "framer-motion";
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
      "A personal AI memory layer that remembers your experiences, knowledge and meaningful moments.",
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
    /*
     * SoulMirror ведёт непосредственно
     * к Soul Analysis / Soul Scan.
     */
    if (product.active) {
      const element = document.getElementById("features");

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      return;
    }

    /*
     * Остальные продукты открывают
     * cinematic Coming Soon modal.
     */
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
            GOLD ATMOSPHERE
        ====================================================== */}

        <motion.div
          animate={{
            opacity: [0.35, 0.55, 0.35],
            scale: [1, 1.08, 1],
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
            duration: 0.8,
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
                  focus-visible:border-[#D6B25E]/50
                "
              >
                {/* =================================================
                    HOVER GOLD GLOW
                ================================================== */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -inset-20
                    opacity-0
                    transition-opacity
                    duration-700
                    group-hover:opacity-100
                  "
                  style={{
                    background:
                      "radial-gradient(circle at 50% 20%, rgba(214,178,94,0.16), transparent 55%)",
                  }}
                />

                {/* =================================================
                    TOP LIGHT
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

                <motion.div
                  whileHover={{
                    rotate: 3,
                    scale: 1.08,
                  }}
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
                    bg-[#D6B25E]/[0.06]
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
                      text-[#D6B25E]/70
                      transition-all
                      duration-500
                      group-hover:text-[#D6B25E]
                    "
                  />
                </motion.div>

                {/* =================================================
                    CONTENT
                ================================================== */}

                <div className="relative">
                  <p
                    className="
                      mt-6
                      text-xs
                      uppercase
                      tracking-[0.3em]
                      text-[#D6B25E]/70
                      transition-colors
                      duration-500
                      group-hover:text-[#D6B25E]
                    "
                  >
                    {product.category}
                  </p>

                  <h3
                    className="
                      mt-3
                      text-2xl
                      font-medium
                      text-[#F4F1EA]
                      transition-transform
                      duration-500
                      group-hover:translate-x-1
                    "
                  >
                    {product.name}
                  </h3>

                  <p
                    className="
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
                      BOTTOM ACTION
                  ================================================== */}

                  <div
                    className="
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
                          group-hover:text-[#D6B25E]/70
                        "
                      >
                        Coming Soon
                      </span>
                    ) : (
                      <span
                        className="
                          text-[9px]
                          uppercase
                          tracking-[0.25em]
                          text-[#D6B25E]/60
                          transition-colors
                          duration-500
                          group-hover:text-[#D6B25E]
                        "
                      >
                        Explore SoulMirror
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
                </div>
              </motion.button>
            );
          })}
        </div>
      </section>

      {/* =======================================================
          COMING SOON MODAL
      ======================================================== */}

      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            className="
              fixed
              inset-0
              z-[100000]
              flex
              items-center
              justify-center
              overflow-hidden
              bg-black/75
              px-6
              backdrop-blur-xl
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
            onClick={() => setSelectedProduct(null)}
          >
            {/* =================================================
                GOLD ATMOSPHERE
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
                duration: 0.8,
              }}
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-[600px]
                w-[600px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-[#D6B25E]/10
                blur-[180px]
              "
            />

            {/* =================================================
                MODAL
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 35,
                scale: 0.95,
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
              onClick={(event) => event.stopPropagation()}
              className="
                relative
                w-full
                max-w-xl
                overflow-hidden
                rounded-[36px]
                border
                border-[#D6B25E]/20
                bg-[#090909]/90
                p-8
                shadow-[0_30px_100px_rgba(0,0,0,0.6)]
                backdrop-blur-3xl
                md:p-12
              "
            >
              {/* Top gold line */}

              <div
                className="
                  absolute
                  left-12
                  right-12
                  top-0
                  h-px
                  bg-gradient-to-r
                  from-transparent
                  via-[#D6B25E]/60
                  to-transparent
                "
              />

              {/* Close */}

              <button
                type="button"
                onClick={() => setSelectedProduct(null)}
                className="
                  absolute
                  right-5
                  top-5
                  flex
                  h-9
                  w-9
                  cursor-pointer
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/[0.08]
                  bg-white/[0.03]
                  text-white/40
                  transition-all
                  duration-300
                  hover:border-white/20
                  hover:bg-white/[0.07]
                  hover:text-white
                "
              >
                <X size={16} />
              </button>

              {/* Icon */}

              <div
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-[#D6B25E]/20
                  bg-[#D6B25E]/10
                  shadow-[0_0_40px_rgba(214,178,94,0.08)]
                "
              >
                <selectedProduct.icon
                  size={26}
                  strokeWidth={1.5}
                  className="text-[#D6B25E]"
                />
              </div>

              {/* Category */}

              <p
                className="
                  mt-8
                  text-[10px]
                  uppercase
                  tracking-[0.4em]
                  text-[#D6B25E]
                "
              >
                {selectedProduct.category}
              </p>

              {/* Name */}

              <h3
                className="
                  mt-4
                  font-[family:var(--font-cormorant)]
                  text-5xl
                  text-[#F4F1EA]
                  md:text-6xl
                "
              >
                {selectedProduct.name}
              </h3>

              {/* Description */}

              <p
                className="
                  mt-6
                  max-w-lg
                  text-base
                  leading-7
                  text-white/50
                "
              >
                {selectedProduct.description}
              </p>

              {/* Coming Soon */}

              <div
                className="
                  mt-10
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-[#D6B25E]/20
                  bg-[#D6B25E]/[0.05]
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
                    tracking-[0.35em]
                    text-[#D6B25E]
                  "
                >
                  Coming Soon
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

