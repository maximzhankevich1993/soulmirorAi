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
"A personal AI memory layer that remembers your experiences, knowledge and meaningful moments.",
icon: Clock,
},
{
name: "Future Self",
category: "Identity Simulation",
description:
"Explore possible versions of yourself through AI-powered scenarios, decisions and future paths.",
icon: Sparkles,
},
{
name: "Parallel",
category: "AI Universe",
description:
"A new generation of interactive AI worlds where stories, characters and experiences become alive.",
icon: Globe2,
},
];

export function EonEcosystemSection() {
const [selectedProduct, setSelectedProduct] =
useState<EcosystemProduct | null>(null);

const handleProductClick = (product: EcosystemProduct) => {
setSelectedProduct((current) =>
current?.name === product.name ? null : product
);
};

const handleSoulMirrorOpen = () => {
setSelectedProduct(null);

```
setTimeout(() => {
  document
    .getElementById("features")
    ?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
}, 150);
```

};

return ( <section
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
ATMOSPHERE
====================================================== */}

```
  <div
    className="
      pointer-events-none
      absolute
      left-1/2
      top-0
      h-[600px]
      w-[600px]
      -translate-x-1/2
      rounded-full
      bg-[#D6B25E]/[0.045]
      blur-[180px]
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

      const isSelected =
        selectedProduct?.name === product.name;

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
          }}
          transition={{
            delay: index * 0.1,
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
          whileHover={{
            y: -8,
          }}
          whileTap={{
            scale: 0.985,
          }}
          className={`
            group
            relative
            min-h-[290px]
            cursor-pointer
            overflow-hidden
            rounded-[32px]
            border
            p-7
            text-left
            backdrop-blur-2xl
            transition-all
            duration-700
            focus:outline-none
            ${
              isSelected
                ? `
                  border-[#D6B25E]/35
                  bg-white/[0.055]
                  shadow-[0_20px_80px_rgba(214,178,94,0.10)]
                `
                : `
                  border-white/[0.08]
                  bg-white/[0.025]
                  hover:border-[#D6B25E]/30
                  hover:bg-white/[0.05]
                  hover:shadow-[0_20px_80px_rgba(214,178,94,0.08)]
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
              h-56
              w-56
              rounded-full
              bg-[#D6B25E]/0
              blur-[80px]
              transition-all
              duration-700
              group-hover:bg-[#D6B25E]/[0.12]
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
              via-[#D6B25E]/0
              to-transparent
              transition-all
              duration-700
              group-hover:via-[#D6B25E]/50
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
              border-white/[0.06]
              bg-white/[0.025]
              transition-all
              duration-500
              group-hover:border-[#D6B25E]/25
              group-hover:bg-[#D6B25E]/10
              group-hover:scale-105
            "
          >
            <Icon
              size={23}
              strokeWidth={1.5}
              className="
                text-white/45
                transition-all
                duration-500
                group-hover:text-[#D6B25E]
              "
            />
          </div>

          {/* =================================================
              CONTENT
          ================================================== */}

          <div className="relative">
            <p
              className="
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
                mt-3
                text-2xl
                font-medium
                text-[#F4F1EA]
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
                STATUS / ACTION
            ================================================== */}

            <div
              className="
                mt-6
                flex
                items-center
                justify-between
              "
            >
              <span
                className="
                  rounded-full
                  border
                  border-white/[0.08]
                  px-3
                  py-1
                  text-[9px]
                  uppercase
                  tracking-[0.22em]
                  text-white/30
                  transition-all
                  duration-500
                  group-hover:border-[#D6B25E]/20
                  group-hover:text-[#D6B25E]/60
                "
              >
                {product.name === "SoulMirror"
                  ? "Explore"
                  : "Coming Soon"}
              </span>

              <ArrowUpRight
                size={17}
                className="
                  text-white/20
                  transition-all
                  duration-500
                  group-hover:-translate-y-1
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

  {/* =====================================================
      HORIZONTAL PRODUCT MODAL
  ====================================================== */}

  <AnimatePresence initial={false} mode="wait">
    {selectedProduct && (
      <motion.div
        key={selectedProduct.name}
        initial={{
          opacity: 0,
          height: 0,
          y: -15,
        }}
        animate={{
          opacity: 1,
          height: "auto",
          y: 0,
        }}
        exit={{
          opacity: 0,
          height: 0,
          y: -15,
        }}
        transition={{
          duration: 0.65,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="
          relative
          z-20
          mt-5
          overflow-hidden
        "
      >
        <div
          className="
            relative
            overflow-hidden
            rounded-[32px]
            border
            border-[#D6B25E]/20
            bg-[#090909]/95
            shadow-[0_30px_100px_rgba(0,0,0,0.55)]
            backdrop-blur-3xl
          "
        >
          {/* =================================================
              GOLD ATMOSPHERE
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -200,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              pointer-events-none
              absolute
              left-[-120px]
              top-1/2
              h-[300px]
              w-[500px]
              -translate-y-1/2
              rounded-full
              bg-[#D6B25E]/[0.07]
              blur-[100px]
            "
          />

          {/* =================================================
              HORIZONTAL LIGHT
          ================================================== */}

          <motion.div
            initial={{
              scaleX: 0,
              opacity: 0,
            }}
            animate={{
              scaleX: 1,
              opacity: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              pointer-events-none
              absolute
              left-0
              right-0
              top-0
              h-px
              origin-left
              bg-gradient-to-r
              from-transparent
              via-[#D6B25E]/60
              to-transparent
            "
          />

          {/* =================================================
              CLOSE
          ================================================== */}

          <button
            type="button"
            onClick={() => setSelectedProduct(null)}
            className="
              absolute
              right-5
              top-5
              z-30
              flex
              h-9
              w-9
              cursor-pointer
              items-center
              justify-center
              rounded-full
              border
              border-white/[0.08]
              bg-white/[0.025]
              text-white/35
              transition-all
              duration-500
              hover:border-white/20
              hover:bg-white/[0.07]
              hover:text-white
              active:scale-90
            "
            aria-label="Close"
          >
            <X size={15} />
          </button>

          {/* =================================================
              CONTENT
          ================================================== */}

          <div
            className="
              grid
              gap-10
              p-8
              pt-10
              md:grid-cols-[0.8fr_1.4fr_0.8fr]
              md:items-center
              md:p-10
            "
          >
            {/* LEFT */}

            <motion.div
              initial={{
                opacity: 0,
                x: -25,
                filter: "blur(10px)",
              }}
              animate={{
                opacity: 1,
                x: 0,
                filter: "blur(0px)",
              }}
              transition={{
                delay: 0.15,
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
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
                  mt-4
                  text-4xl
                  text-[#F4F1EA]
                  md:text-5xl
                "
              >
                {selectedProduct.name}
              </h3>
            </motion.div>

            {/* CENTER */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
                filter: "blur(10px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <p
                className="
                  text-base
                  leading-7
                  text-white/50
                "
              >
                {selectedProduct.description}
              </p>

              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  delay: 0.65,
                }}
                className="
                  mt-5
                  text-xs
                  uppercase
                  tracking-[0.25em]
                  text-white/25
                "
              >
                A new EON intelligence system
              </motion.p>
            </motion.div>

            {/* RIGHT */}

            <motion.div
              initial={{
                opacity: 0,
                x: 25,
                filter: "blur(10px)",
              }}
              animate={{
                opacity: 1,
                x: 0,
                filter: "blur(0px)",
              }}
              transition={{
                delay: 0.45,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                flex
                flex-col
                items-start
                md:items-end
              "
            >
              {selectedProduct.name === "SoulMirror" ? (
                <button
                  type="button"
                  onClick={handleSoulMirrorOpen}
                  className="
                    group
                    inline-flex
                    cursor-pointer
                    items-center
                    gap-3
                    rounded-full
                    border
                    border-[#D6B25E]/30
                    bg-[#D6B25E]/[0.08]
                    px-5
                    py-3
                    text-[10px]
                    uppercase
                    tracking-[0.25em]
                    text-[#D6B25E]
                    transition-all
                    duration-500
                    hover:border-[#D6B25E]/60
                    hover:bg-[#D6B25E]/[0.14]
                    hover:shadow-[0_10px_40px_rgba(214,178,94,0.12)]
                    active:scale-95
                  "
                >
                  Open Soul Scan

                  <ArrowUpRight
                    size={14}
                    className="
                      transition-transform
                      duration-500
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                    "
                  />
                </button>
              ) : (
                <div
                  className="
                    rounded-full
                    border
                    border-white/[0.08]
                    bg-white/[0.025]
                    px-5
                    py-3
                    text-[10px]
                    uppercase
                    tracking-[0.25em]
                    text-white/35
                  "
                >
                  Coming Soon
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
</section>


);
}
