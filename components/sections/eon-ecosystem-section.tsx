
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
  expandedDescription?: string;
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
      "A personal AI memory layer that remembers your experiences and knowledge.",
    expandedDescription:
      "Memora is designed to become a persistent layer of personal intelligence. It remembers the moments, knowledge and experiences that shape you, creating a continuous memory foundation for your future AI interactions.",
    icon: Clock,
    active: false,
  },
  {
    name: "Future Self",
    category: "Identity Simulation",
    description:
      "Explore possible versions of yourself through AI-powered scenarios.",
    expandedDescription:
      "Future Self explores possible versions of who you could become. Through AI-powered scenarios, reflections and simulations, the system will allow you to explore different paths, decisions and identities before they become reality.",
    icon: Sparkles,
    active: false,
  },
  {
    name: "Parallel",
    category: "AI Universe",
    description:
      "A new generation of interactive AI worlds and experiences.",
    expandedDescription:
      "Parallel is an upcoming AI universe built around interactive worlds, characters and experiences. It will explore a new way of interacting with artificial intelligence through immersive environments and evolving digital realities.",
    icon: Globe2,
    active: false,
  },
];

interface EonEcosystemSectionProps {
  onOpenSoulScan?: () => void;
}

export function EonEcosystemSection({
  onOpenSoulScan,
}: EonEcosystemSectionProps) {
  const [expandedProduct, setExpandedProduct] = useState<string | null>(null);

  const handleProductClick = (product: EcosystemProduct) => {
    /*
     * SoulMirror is the only currently active product.
     * Open the existing Soul Scan instead of opening
     * another overlay/page.
     */
    if (product.active) {
      if (onOpenSoulScan) {
        onOpenSoulScan();
      } else {
        const target = document.getElementById("features");

        target?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      return;
    }

    /*
     * Other products simply expand inside the ecosystem.
     */
    setExpandedProduct((current) =>
      current === product.name ? null : product.name,
    );
  };

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
        pb-20
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
          const isExpanded = expandedProduct === product.name;

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
                amount: 0.15,
              }}
              transition={{
                delay: index * 0.1,
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              layout
              className="relative"
            >
              <motion.div
                layout
                onClick={() => handleProductClick(product)}
                whileHover={{
                  y: -8,
                }}
                whileTap={{
                  scale: 0.985,
                }}
                transition={{
                  duration: 0.35,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`
                  group
                  relative
                  cursor-pointer
                  overflow-hidden
                  rounded-[32px]
                  border
                  p-7
                  backdrop-blur-2xl
                  transition-all
                  duration-500

                  ${
                    isExpanded
                      ? `
                        border-[#D6B25E]/40
                        bg-gradient-to-br
                        from-[#D6B25E]/10
                        via-white/[0.04]
                        to-white/[0.02]
                        shadow-[0_25px_80px_rgba(214,178,94,0.10)]
                      `
                      : `
                        border-white/10
                        bg-white/[0.025]

                        hover:border-[#D6B25E]/35
                        hover:bg-white/[0.045]
                        hover:shadow-[0_25px_80px_rgba(214,178,94,0.08)]
                      `
                  }
                `}
              >
                {/* =================================================
                    HOVER GOLD LIGHT
                ================================================== */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-24
                    -top-24
                    h-48
                    w-48
                    rounded-full
                    bg-[#D6B25E]/0
                    blur-[70px]
                    transition-all
                    duration-700
                    group-hover:bg-[#D6B25E]/15
                  "
                />

                {/* =================================================
                    TOP SHINE
                ================================================== */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-x-8
                    top-0
                    h-px
                    bg-gradient-to-r
                    from-transparent
                    via-white/20
                    to-transparent
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />

                {/* =================================================
                    ICON
                ================================================== */}

                <motion.div
                  animate={{
                    scale: isExpanded ? 1.05 : 1,
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
                    bg-[#D6B25E]/10
                    transition-all
                    duration-500
                    group-hover:border-[#D6B25E]/30
                    group-hover:bg-[#D6B25E]/15
                  "
                >
                  <Icon
                    size={24}
                    strokeWidth={1.5}
                    className="
                      text-[#D6B25E]
                      transition-transform
                      duration-500
                      group-hover:scale-110
                    "
                  />
                </motion.div>

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
                    text-[#D6B25E]
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
                    text-white/50
                  "
                >
                  {product.description}
                </p>

                {/* =================================================
                    STATUS / ACTION
                ================================================== */}

                <div
                  className="
                    relative
                    mt-6
                    flex
                    items-center
                    justify-between
                    gap-4
                  "
                >
                  {!product.active ? (
                    <span
                      className="
                        rounded-full
                        border
                        border-white/10
                        bg-white/[0.02]
                        px-3
                        py-1
                        text-[10px]
                        uppercase
                        tracking-[0.2em]
                        text-white/40
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
                        text-[10px]
                        uppercase
                        tracking-[0.2em]
                        text-[#D6B25E]/70
                      "
                    >
                      Available
                    </span>
                  )}

                  <motion.div
                    animate={{
                      rotate: isExpanded ? 90 : 0,
                      x: isExpanded ? 2 : 0,
                    }}
                    className="
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/10
                      text-white/30
                      transition-all
                      duration-500
                      group-hover:border-[#D6B25E]/30
                      group-hover:text-[#D6B25E]
                    "
                  >
                    <ArrowRight size={14} />
                  </motion.div>
                </div>

                {/* =================================================
                    EXPANDED CONTENT
                ================================================== */}

                <AnimatePresence initial={false}>
                  {isExpanded && !product.active && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        height: 0,
                        y: -10,
                      }}
                      animate={{
                        opacity: 1,
                        height: "auto",
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        height: 0,
                        y: -10,
                      }}
                      transition={{
                        duration: 0.6,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="overflow-hidden"
                    >
                      <div className="mt-7 border-t border-white/[0.08] pt-6">
                        <p
                          className="
                            text-sm
                            leading-7
                            text-white/55
                          "
                        >
                          {product.expandedDescription}
                        </p>

                        <div
                          className="
                            mt-6
                            flex
                            items-center
                            justify-between
                            rounded-2xl
                            border
                            border-[#D6B25E]/10
                            bg-[#D6B25E]/[0.035]
                            px-4
                            py-3
                          "
                        >
                          <span
                            className="
                              text-[10px]
                              uppercase
                              tracking-[0.25em]
                              text-[#D6B25E]/70
                            "
                          >
                            In development
                          </span>

                          <button
                            type="button"
                            onClick={(event) => {
                              event.stopPropagation();
                              setExpandedProduct(null);
                            }}
                            className="
                              flex
                              h-7
                              w-7
                              cursor-pointer
                              items-center
                              justify-center
                              rounded-full
                              border
                              border-white/10
                              text-white/40
                              transition-all
                              duration-300
                              hover:border-white/20
                              hover:bg-white/[0.06]
                              hover:text-white
                            "
                            aria-label={`Close ${product.name}`}
                          >
                            <X size={13} />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

