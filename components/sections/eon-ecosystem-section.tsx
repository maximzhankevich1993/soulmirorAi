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
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

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
      "A new generation of interactive AI worlds where imagination, identity and artificial intelligence become one experience.",
    icon: Globe2,
    active: false,
  },
];

export function EonEcosystemSection() {
  const router = useRouter();

  const [selectedProduct, setSelectedProduct] =
    useState<EcosystemProduct | null>(null);

  /*
   * Prevent background scrolling while modal is open.
   */

  useEffect(() => {
    if (!selectedProduct) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedProduct]);

  const handleProductClick = (product: EcosystemProduct) => {
    /*
     * SoulMirror opens the actual Soul Space.
     */

    if (product.active) {
      router.push("/soul-space");
      return;
    }

    /*
     * Other products open the cinematic preview.
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
            AMBIENT GLOW
        ====================================================== */}

        <motion.div
          animate={{
            opacity: [0.25, 0.45, 0.25],
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
                type="button"
                key={product.name}
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
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{
                  y: -10,
                  scale: 1.015,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                onClick={() => handleProductClick(product)}
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
                  transition-all
                  duration-700
                  hover:border-[#D6B25E]/35
                  hover:bg-white/[0.045]
                  hover:shadow-[0_25px_80px_rgba(214,178,94,0.12)]
                  focus:outline-none
                  focus:ring-1
                  focus:ring-[#D6B25E]/40
                "
              >
                {/* =================================================
                    HOVER GOLD LIGHT
                ================================================== */}

                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.7,
                  }}
                  whileHover={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.7,
                  }}
                  className="
                    pointer-events-none
                    absolute
                    -right-20
                    -top-20
                    h-56
                    w-56
                    rounded-full
                    bg-[#D6B25E]/10
                    blur-[70px]
                  "
                />

                {/* =================================================
                    TOP LINE
                ================================================== */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    left-7
                    right-7
                    top-0
                    h-px
                    bg-gradient-to-r
                    from-transparent
                    via-white/10
                    to-transparent
                    transition-all
                    duration-700
                    group-hover:via-[#D6B25E]/60
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
                    border-white/[0.07]
                    bg-white/[0.035]
                    transition-all
                    duration-700
                    group-hover:border-[#D6B25E]/30
                    group-hover:bg-[#D6B25E]/10
                    group-hover:shadow-[0_0_35px_rgba(214,178,94,0.15)]
                  "
                >
                  <Icon
                    size={22}
                    strokeWidth={1.5}
                    className="
                      text-white/60
                      transition-all
                      duration-700
                      group-hover:scale-110
                      group-hover:text-[#D6B25E]
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
                    text-white/35
                    transition-colors
                    duration-500
                    group-hover:text-[#D6B25E]/80
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
                    font-light
                    text-[#F4F1EA]
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
                    text-white/40
                    transition-colors
                    duration-500
                    group-hover:text-white/55
                  "
                >
                  {product.description}
                </p>

                {/* =================================================
                    BOTTOM ACTION
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
                        border-white/[0.08]
                        bg-white/[0.025]
                        px-3
                        py-1.5
                        text-[9px]
                        uppercase
                        tracking-[0.25em]
                        text-white/35
                        transition-all
                        duration-500
                        group-hover:border-[#D6B25E]/25
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
                        text-white/35
                        transition-colors
                        duration-500
                        group-hover:text-[#D6B25E]
                      "
                    >
                      Explore
                    </span>
                  )}

                  <ArrowRight
                    size={16}
                    strokeWidth={1.5}
                    className="
                      text-white/20
                      transition-all
                      duration-700
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

      {/* =========================================================
          CINEMATIC PRODUCT MODAL
      ========================================================== */}

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
              px-5
              py-10
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
          >
            {/* BACKDROP */}

            <motion.button
              type="button"
              aria-label="Close"
              onClick={() => setSelectedProduct(null)}
              className="
                absolute
                inset-0
                cursor-default
                bg-[#050505]/90
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
            />

            {/* GOLD ATMOSPHERE */}

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
                scale: 1.3,
              }}
              transition={{
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-[500px]
                w-[700px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-[#D6B25E]/10
                blur-[150px]
              "
            />

            {/* CARD */}

            <motion.div
              initial={{
                opacity: 0,
                y: 45,
                scale: 0.94,
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
                y: -25,
                scale: 1.03,
                filter: "blur(10px)",
              }}
              transition={{
                duration: 0.85,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                relative
                z-10
                w-full
                max-w-2xl
                overflow-hidden
                rounded-[40px]
                border
                border-white/[0.1]
                bg-[#0a0a0a]/95
                p-8
                shadow-[0_40px_120px_rgba(0,0,0,0.7)]
                backdrop-blur-3xl
                md:p-12
              "
            >
              {/* TOP GOLD LINE */}

              <div
                className="
                  absolute
                  left-10
                  right-10
                  top-0
                  h-px
                  bg-gradient-to-r
                  from-transparent
                  via-[#D6B25E]/70
                  to-transparent
                "
              />

              {/* CLOSE */}

              <button
                type="button"
                onClick={() => setSelectedProduct(null)}
                className="
                  absolute
                  right-6
                  top-6
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
                  hover:border-[#D6B25E]/30
                  hover:bg-[#D6B25E]/10
                  hover:text-[#D6B25E]
                "
              >
                <X size={17} strokeWidth={1.5} />
              </button>

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
                  delay: 0.15,
                  duration: 0.6,
                }}
                className="
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-3xl
                  border
                  border-[#D6B25E]/20
                  bg-[#D6B25E]/10
                  shadow-[0_0_50px_rgba(214,178,94,0.1)]
                "
              >
                <selectedProduct.icon
                  size={28}
                  strokeWidth={1.4}
                  className="text-[#D6B25E]"
                />
              </motion.div>

              {/* CATEGORY */}

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
                  delay: 0.25,
                }}
                className="
                  mt-8
                  text-[10px]
                  uppercase
                  tracking-[0.4em]
                  text-[#D6B25E]
                "
              >
                {selectedProduct.category}
              </motion.p>

              {/* TITLE */}

              <motion.h2
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.3,
                }}
                className="
                  mt-4
                  text-4xl
                  font-light
                  tracking-tight
                  text-[#F4F1EA]
                  md:text-5xl
                "
              >
                {selectedProduct.name}
              </motion.h2>

              {/* COMING SOON */}

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
                  delay: 0.4,
                }}
                className="
                  mt-6
                  inline-flex
                  rounded-full
                  border
                  border-[#D6B25E]/20
                  bg-[#D6B25E]/[0.06]
                  px-4
                  py-2
                  text-[9px]
                  uppercase
                  tracking-[0.3em]
                  text-[#D6B25E]/80
                "
              >
                Coming Soon
              </motion.div>

              {/* DESCRIPTION */}

              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  delay: 0.55,
                  duration: 0.8,
                }}
                className="
                  mt-8
                  min-h-[120px]
                  text-base
                  leading-8
                  text-white/50
                "
              >
                {selectedProduct.description}
              </motion.p>

              {/* BOTTOM */}

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
                  mt-10
                  flex
                  items-center
                  justify-between
                  border-t
                  border-white/[0.07]
                  pt-6
                "
              >
                <span
                  className="
                    text-[9px]
                    uppercase
                    tracking-[0.3em]
                    text-white/25
                  "
                >
                  EON AI
                </span>

                <span
                  className="
                    text-[9px]
                    uppercase
                    tracking-[0.3em]
                    text-white/25
                  "
                >
                  In development
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}