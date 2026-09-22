"use client";

import {
  Moon,
  Brain,
  LockKeyhole,
} from "lucide-react";

import { useState } from "react";

import { motion } from "framer-motion";

import {
  AIConsole,
} from "@/components/ui/AIConsole";

import {
  useSoulMemoryStore,
} from "@/store/soul-memory-store";

import {
  useSoulOrbStore,
} from "@/store/soul-orb-store";

interface DreamResult {
  summary: string;
  symbols: string[];
  emotion: string;
  interpretation: string;
  usage?: {
    remaining: number;
    plan: string;
    guest: boolean;
  };
}

export function DreamConsole() {
  const [text, setText] = useState("");

  const [loading, setLoading] =
    useState(false);

  const [result, setResult] =
    useState<DreamResult | null>(null);

  const [limitReached, setLimitReached] =
    useState(false);

  const setMemory =
    useSoulMemoryStore(
      (state) => state.setMemory
    );

  const setOrbState =
    useSoulOrbStore(
      (state) => state.setState
    );

  async function analyzeDream() {
    if (!text.trim()) return;

    try {
      setLoading(true);
      setLimitReached(false);

      const response = await fetch(
        "/api/dream-analysis",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            dream: text,
          }),
        }
      );

      const data =
        await response.json();

      if (!response.ok) {
        if (
          response.status === 403 &&
          data.error ===
            "FREE_LIMIT_REACHED"
        ) {
          setLimitReached(true);
          setResult(null);
          return;
        }

        throw new Error(
          data.error ||
            "Dream analysis failed"
        );
      }

      setResult(data);

      setMemory({
        insight:
          data.interpretation ||
          data.summary ||
          "",

        emotion:
          data.emotion ||
          "Dream",
      });

      setOrbState("awakening");

      setText("");
    } catch (error) {
      console.error(
        "Dream analysis error:",
        error
      );
    } finally {
      setLoading(false);
    }
  }

  function handleUpgrade() {
    const pricingSection =
      document.getElementById("pricing");

    if (pricingSection) {
      pricingSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }

  return (
    <AIConsole
      icon={
        <Moon
          size={22}
          className="
            text-[#8B5CF6]
          "
        />
      }

      eyebrow="Dream Intelligence"

      title="Decode your subconscious"

      placeholder="
        Describe your dream,
        symbols or visions...
      "

      value={text}

      onChange={setText}

      onSubmit={analyzeDream}

      loading={loading}

      buttonText="Analyze Dream"

      loadingText="Reading subconscious..."

      color="purple"

      result={
        limitReached ? (
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="
              rounded-[32px]
              border
              border-purple-400/20
              bg-purple-500/5
              p-8
              text-center
            "
          >
            <div
              className="
                mx-auto
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-full
                border
                border-purple-400/20
                bg-purple-500/10
              "
            >
              <LockKeyhole
                size={22}
                className="
                  text-purple-300
                "
              />
            </div>

            <p
              className="
                mt-5
                text-[10px]
                uppercase
                tracking-[0.35em]
                text-purple-300
              "
            >
              Free Limit Reached
            </p>

            <h3
              className="
                mt-3
                text-2xl
                font-light
                text-[#F4F1EA]
              "
            >
              Your free Dream Analyses
              are complete.
            </h3>

            <p
              className="
                mx-auto
                mt-4
                max-w-md
                text-sm
                leading-7
                text-white/50
              "
            >
              You’ve used your 2 free
              Dream Analyses. Unlock
              unlimited Dream Intelligence
              with Pro.
            </p>

            <button
              type="button"
              onClick={handleUpgrade}
              className="
                mx-auto
                mt-7
                flex
                cursor-pointer
                items-center
                justify-center
                gap-3
                rounded-full
                border
                border-[#D6B25E]/30
                bg-[#D6B25E]/10
                px-6
                py-3
                text-xs
                uppercase
                tracking-[0.2em]
                text-[#F4F1EA]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:border-[#D6B25E]/60
                hover:bg-[#D6B25E]/20
                hover:text-white
                active:translate-y-0
                focus:outline-none
                focus:ring-2
                focus:ring-[#D6B25E]/30
              "
            >
              Unlock with Pro

              <span
                className="
                  text-base
                "
              >
                →
              </span>
            </button>
          </motion.div>
        ) : (
          result && (
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              className="
                space-y-6
                rounded-[32px]
                border
                border-purple-400/20
                bg-purple-500/5
                p-7
              "
            >
              <div
                className="
                  flex
                  items-center
                  gap-3
                "
              >
                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-2xl
                    bg-purple-500/10
                  "
                >
                  <Brain
                    size={20}
                    className="
                      text-purple-300
                    "
                  />
                </div>

                <div>
                  <p
                    className="
                      text-[10px]
                      uppercase
                      tracking-[0.35em]
                      text-purple-300
                    "
                  >
                    Dream Insight
                  </p>

                  <p
                    className="
                      text-xs
                      text-white/40
                    "
                  >
                    EON Subconscious Engine
                  </p>
                </div>
              </div>

              <div>
                <p
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.35em]
                    text-white/40
                  "
                >
                  Dream
                </p>

                <h3
                  className="
                    mt-3
                    text-2xl
                    font-light
                    leading-relaxed
                    text-[#F4F1EA]
                  "
                >
                  {result.summary}
                </h3>
              </div>

              <div>
                <p
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.35em]
                    text-white/40
                  "
                >
                  Symbols
                </p>

                <div
                  className="
                    mt-4
                    flex
                    flex-wrap
                    gap-2
                  "
                >
                  {result.symbols.map(
                    (symbol, index) => (
                      <span
                        key={`${symbol}-${index}`}
                        className="
                          rounded-full
                          border
                          border-purple-400/20
                          bg-purple-500/10
                          px-4
                          py-2
                          text-xs
                          text-purple-200
                        "
                      >
                        {symbol}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div>
                <p
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.35em]
                    text-white/40
                  "
                >
                  Emotion
                </p>

                <p
                  className="
                    mt-3
                    text-lg
                    font-light
                    text-purple-200
                  "
                >
                  {result.emotion}
                </p>
              </div>

              <div>
                <p
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.35em]
                    text-white/40
                  "
                >
                  Interpretation
                </p>

                <p
                  className="
                    mt-3
                    leading-8
                    text-white/70
                  "
                >
                  {result.interpretation}
                </p>
              </div>

              <div
                className="
                  border-t
                  border-white/10
                  pt-5
                "
              >
                <div
                  className="
                    flex
                    items-center
                    justify-between
                    gap-4
                  "
                >
                  <p
                    className="
                      text-[10px]
                      uppercase
                      tracking-[0.4em]
                      text-white/30
                    "
                  >
                    Powered by EON Dream Intelligence
                  </p>

                  {result.usage && (
                    <p
                      className="
                        whitespace-nowrap
                        text-[10px]
                        uppercase
                        tracking-[0.2em]
                        text-white/30
                      "
                    >
                      {result.usage.remaining} free{" "}
                      {result.usage.remaining === 1
                        ? "analysis"
                        : "analyses"}{" "}
                      left
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          )
        )
      }
    />
  );
}