
"use client";

import { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
  const accent =
    color === "purple"
      ? "#8B5CF6"
      : "#D6B25E";

  const accentSoft =
    color === "purple"
      ? "rgba(139,92,246,0.12)"
      : "rgba(214,178,94,0.10)";

  return (
    <section className="mx-auto mt-24 w-full max-w-5xl px-6">
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
            rounded-[40px]
            border
            border-white/[0.08]
            bg-[#080808]/85
            p-7
            backdrop-blur-3xl
            md:p-10
          "
        >
          {/* =====================================================
              ATMOSPHERE
          ====================================================== */}

          <motion.div
            animate={{
              opacity: [0.25, 0.4, 0.25],
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 9,
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
              background: accentSoft,
            }}
          />

          <div
            className="
              pointer-events-none
              absolute
              inset-x-10
              top-0
              h-px
            "
            style={{
              background: `linear-gradient(
                90deg,
                transparent,
                ${accent}33,
                transparent
              )`,
            }}
          />

          {/* =====================================================
              CONTENT
          ====================================================== */}

          <div className="relative z-10">
            {/* HEADER */}

            <div className="flex items-start gap-5">
              <GlowIcon
                size="lg"
                color={color}
              >
                {icon}
              </GlowIcon>

              <div className="min-w-0">
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
                    leading-tight
                    tracking-[-0.02em]
                    text-[#F4F1EA]
                    md:text-5xl
                  "
                >
                  {title}
                </h2>
              </div>
            </div>

            {/* INPUT */}

            <div className="mt-10">
              <div
                className="
                  relative
                  rounded-[30px]
                  border
                  border-white/[0.07]
                  bg-white/[0.018]
                  p-1
                  transition-all
                  duration-700
                  focus-within:border-white/[0.14]
                  focus-within:bg-white/[0.025]
                "
              >
                <LuxuryTextarea
                  value={value}
                  onChange={(e) =>
                    onChange(e.target.value)
                  }
                  placeholder={placeholder}
                />
              </div>
            </div>

            {/* ACTION AREA */}

            <div
              className="
                mt-6
                flex
                flex-col
                gap-4
                sm:flex-row
                sm:items-center
                sm:justify-between
              "
            >
              <div
                className="
                  flex
                  items-center
                  gap-2
                  text-[9px]
                  uppercase
                  tracking-[0.3em]
                  text-white/25
                "
              >
                <span
                  className="
                    h-1.5
                    w-1.5
                    rounded-full
                    animate-pulse
                  "
                  style={{
                    backgroundColor: accent,
                  }}
                />

                EON Intelligence Engine
              </div>

              {/* PREMIUM AI BUTTON */}

              <motion.button
                type="button"
                onClick={onSubmit}
                disabled={loading}
                whileHover={
                  !loading
                    ? {
                        y: -2,
                        scale: 1.01,
                      }
                    : undefined
                }
                whileTap={
                  !loading
                    ? {
                        scale: 0.98,
                      }
                    : undefined
                }
                transition={{
                  type: "spring",
                  stiffness: 280,
                  damping: 22,
                }}
                className="
                  group/button
                  relative
                  isolate
                  w-full
                  overflow-hidden
                  rounded-full
                  border
                  px-7
                  py-3.5
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.3em]
                  text-[#050505]
                  shadow-[0_10px_40px_rgba(0,0,0,0.25)]
                  transition-all
                  duration-500
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                  sm:w-auto
                  sm:min-w-[220px]
                "
                style={{
                  backgroundColor: accent,
                  borderColor: `${accent}66`,
                  boxShadow: loading
                    ? `0 0 35px ${accent}22`
                    : `0 8px 35px ${accent}18`,
                }}
              >
                {/* BUTTON GLOW */}

                <span
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    -z-10
                    opacity-0
                    blur-xl
                    transition-opacity
                    duration-500
                    group-hover/button:opacity-100
                  "
                  style={{
                    backgroundColor: accent,
                  }}
                />

                {/* MOVING SHINE */}

                {!loading && (
                  <motion.span
                    initial={{
                      x: "-120%",
                    }}
                    animate={{
                      x: "120%",
                    }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      repeatDelay: 3,
                      ease: "easeInOut",
                    }}
                    className="
                      pointer-events-none
                      absolute
                      inset-y-0
                      w-20
                      rotate-[20deg]
                      bg-white/30
                      blur-md
                    "
                  />
                )}

                {/* LOADING */}

                {loading ? (
                  <span className="relative flex items-center justify-center gap-3">
                    <span
                      className="
                        h-3
                        w-3
                        animate-spin
                        rounded-full
                        border-2
                        border-black/20
                        border-t-black/80
                      "
                    />

                    {loadingText}
                  </span>
                ) : (
                  <span className="relative">
                    {buttonText}
                  </span>
                )}
              </motion.button>
            </div>

            {/* RESULT */}

            <AnimatePresence mode="wait">
              {result && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 30,
                    scale: 0.985,
                    filter: "blur(8px)",
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    filter: "blur(0px)",
                  }}
                  exit={{
                    opacity: 0,
                    y: -15,
                    scale: 0.99,
                    filter: "blur(6px)",
                  }}
                  transition={{
                    duration: 0.75,
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

