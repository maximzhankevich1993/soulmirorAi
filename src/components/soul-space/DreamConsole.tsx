"use client";

import {
  Moon,
  Sparkles,
  Brain,
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
                    {result.usage.remaining} free
                    {" "}
                    {result.usage.remaining === 1
                      ? "analysis"
                      : "analyses"}
                    {" "}
                    left
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        )
      }
    />
  );
}