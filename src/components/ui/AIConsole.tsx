"use client";

import { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { GlassCard } from "./GlassCard";
import { GlowIcon } from "./GlowIcon";
import { GradientButton } from "./GradientButton";
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
        }}
        transition={{
          duration: 0.7,
        }}
      >

        <GlassCard
          highlight
          className="relative overflow-hidden p-8 md:p-10"
        >

          {/* Glow */}

          <div
            className="
              pointer-events-none
              absolute
              right-0
              top-0
              h-56
              w-56
              rounded-full
              bg-[#D6B25E]/10
              blur-[120px]
            "
          />

          <div className="relative z-10">

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
                    text-[11px]
                    uppercase
                    tracking-[0.45em]
                    text-[#D6B25E]
                  "
                >
                  {eyebrow}
                </p>

                <h2
                  className="
                    mt-2
                    font-[family:var(--font-cormorant)]
                    text-4xl
                    font-light
                    text-[#F4F1EA]
                  "
                >
                  {title}
                </h2>

              </div>

            </div>

            <div className="mt-10">

              <LuxuryTextarea
                value={value}
                onChange={(e) =>
                  onChange(e.target.value)
                }
                placeholder={placeholder}
              />

            </div>

            <div className="mt-8 flex justify-end">

              <GradientButton
                onClick={onSubmit}
                disabled={loading}
                className="min-w-[220px]"
              >
                {loading
                  ? loadingText
                  : buttonText}
              </GradientButton>

            </div>

            <AnimatePresence>

              {result && (

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -10,
                  }}
                  transition={{
                    duration: 0.45,
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