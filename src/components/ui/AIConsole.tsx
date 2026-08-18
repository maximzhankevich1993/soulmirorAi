"use client";

import { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Loader2 } from "lucide-react";

import { GlassCard } from "./GlassCard";
import { GlowIcon } from "./GlowIcon";
import { LuxuryTextarea } from "./LuxuryTextarea";

interface AIConsoleProps {
  icon: ReactNode;
  eyebrow: string;
  title: string;
  placeholder: string;

  value: string;
  onChange: (value: string) => void;

  onSubmit: () => void;

  loading: boolean;

  buttonText: string;
  loadingText: string;

  result?: ReactNode;

  color?: "gold" | "purple";
}

export function AIConsole({
  icon,
  eyebrow,
  title,
  placeholder,
  value,
  onChange,
  onSubmit,
  loading,
  buttonText,
  loadingText,
  result,
  color = "gold",
}: AIConsoleProps) {
  const isPurple = color === "purple";

  const accent = isPurple
    ? "#8B5CF6"
    : "#D6B25E";

  return (
    <section className="mx-auto mt-24 w-full max-w-5xl px-6">
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
          margin: "-80px",
        }}
        transition={{
          duration: 0.9,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <GlassCard
          highlight
          className="
            group
            relative
            overflow-hidden
            rounded-[36px]
            border
            border-white/[0.08]
            bg-[#080808]/80
            p-7
            backdrop-blur-3xl
            md:p-10
          "
        >
          {/* =====================================================
              ATMOSPHERIC GLOW
          ====================================================== */}

          <motion.div
            animate={{
              opacity: [0.25, 0.4, 0.25],
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
              h-[420px]
              w-[420px]
              rounded-full
              blur-[130px]
            "
            style={{
              background: accent,
              opacity: 0.06,
            }}
          />

          {/* =====================================================
              TOP LIGHT
          ====================================================== */}

          <div
            className="
              pointer-events-none
              absolute
              left-10
              right-10
              top-0
              h-px
              bg-gradient-to-r
              from-transparent
              via-white/[0.12]
              to-transparent
            "
          />

          <div className="relative z-10">
            {/* =================================================
                HEADER
            ================================================== */}

            <div className="flex items-center gap-5">
              <GlowIcon
                size="lg"
                color={color}
              >
                {icon}
              </GlowIcon>

              <div>
                <p
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.45em]
                  "
                  style={{
                    color: accent,
                  }}
                >
                  {eyebrow}
                </p>

                <h2
                  className="
                    mt-2
                    font-[family:var(--font-cormorant)]
                    text-4xl
                    font-light
                    tracking-tight
                    text-[#F4F1EA]
                  "
                >
                  {title}
                </h2>
              </div>
            </div>

            {/* =================================================
                TEXTAREA
            ================================================== */}

            <div className="mt-10">
              <LuxuryTextarea
                value={value}
                onChange={(e) =>
                  onChange(e.target.value)
                }
                placeholder={placeholder}
              />
            </div>

            {/* =================================================
                ACTION
            ================================================== */}

            <div className="mt-7 flex justify-end">
              <motion.button
                type="button"
                onClick={onSubmit}
                disabled={loading}
                whileHover={
                  loading
                    ? {}
                    : {
                        y: -2,
                        scale: 1.015,
                      }
                }
                whileTap={
                  loading
                    ? {}
                    : {
                        scale: 0.985,
                      }
                }
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 22,
                }}
                className="
                  group/button
                  relative
                  flex
                  min-h-[52px]
                  min-w-[220px]
                  cursor-pointer
                  items-center
                  justify-center
                  gap-4
                  overflow-hidden
                  rounded-full
                  border
                  bg-white/[0.025]
                  px-7
                  py-3
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.28em]
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  disabled:cursor-not-allowed
                  disabled:opacity-50
                "
                style={{
                  borderColor: `${accent}33`,
                  color: accent,
                }}
              >
                {/* Hover background */}

                <span
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover/button:opacity-100
                  "
                  style={{
                    background: `radial-gradient(
                      circle at 50% 120%,
                      ${accent}22,
                      transparent 65%
                    )`,
                  }}
                />

                {/* Border glow */}

                <span
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    rounded-full
                    opacity-0
                    blur-md
                    transition-opacity
                    duration-500
                    group-hover/button:opacity-100
                  "
                  style={{
                    boxShadow: `0 0 35px ${accent}20`,
                  }}
                />

                {/* Loading / label */}

                <span className="relative z-10 flex items-center gap-3">
                  {loading && (
                    <Loader2
                      size={15}
                      className="animate-spin"
                    />
                  )}

                  <span>
                    {loading
                      ? loadingText
                      : buttonText}
                  </span>

                  {!loading && (
                    <ArrowUpRight
                      size={16}
                      className="
                        transition-transform
                        duration-500
                        group-hover/button:-translate-y-0.5
                        group-hover/button:translate-x-0.5
                      "
                    />
                  )}
                </span>

                {/* Bottom light */}

                <span
                  className="
                    pointer-events-none
                    absolute
                    bottom-0
                    left-1/2
                    h-px
                    w-1/2
                    -translate-x-1/2
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover/button:opacity-100
                  "
                  style={{
                    background: `linear-gradient(
                      to right,
                      transparent,
                      ${accent},
                      transparent
                    )`,
                  }}
                />
              </motion.button>
            </div>

            {/* =================================================
                RESULT
            ================================================== */}

            <AnimatePresence mode="wait">
              {result && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 30,
                    filter: "blur(8px)",
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                  }}
                  exit={{
                    opacity: 0,
                    y: -15,
                    filter: "blur(6px)",
                  }}
                  transition={{
                    duration: 0.7,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="mt-10"
                >
                  {result}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </GlassCard>
      </motion.div>
    </section>
  );
}