"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Archive,
  ArrowUpRight,
  Brain,
  ChevronDown,
  Sparkles,
} from "lucide-react";

import { Container } from "@/components/ui/container";
import type { SoulScanHistoryItem } from "@/types/history";

export function HistorySection() {
  const [history, setHistory] = useState<SoulScanHistoryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    async function loadHistory() {
      try {
        setError(null);

        const response = await fetch("/api/soul-scan/history");

        if (!response.ok) {
          throw new Error("Failed to load history");
        }

        const data = await response.json();

        setHistory(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("History load error:", err);
        setError("Unable to load your analysis archive right now.");
      } finally {
        setLoading(false);
      }
    }

    loadHistory();
  }, []);

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const formatTime = (date: string) => {
    return new Date(date).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const truncate = (text: string, max = 180) => {
    if (!text) return "";

    return text.length > max
      ? `${text.slice(0, max).trim()}...`
      : text;
  };

  const toggleItem = (id: string) => {
    setExpandedId((current) => (current === id ? null : id));
  };

  return (
    <section
      id="history"
      className="
        relative
        py-28
        md:py-36
      "
    >
      {/* =====================================================
          ATMOSPHERE
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[500px]
          w-[900px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#D6B25E]/[0.025]
          blur-[150px]
        "
      />

      <Container>
        {/* =================================================
            HEADER
        ================================================== */}

        <motion.div
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
            margin: "-80px",
          }}
          transition={{
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            relative
            z-10
            mx-auto
            max-w-3xl
            text-center
          "
        >
          <div className="mb-5 flex justify-center">
            <div
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-2xl
                border
                border-[#D6B25E]/15
                bg-[#D6B25E]/[0.05]
                shadow-[0_0_40px_rgba(214,178,94,0.06)]
              "
            >
              <Archive
                size={20}
                className="text-[#D6B25E]"
              />
            </div>
          </div>

          <p
            className="
              text-[10px]
              uppercase
              tracking-[0.45em]
              text-[#D6B25E]
            "
          >
            Soul Archive
          </p>

          <h2
            className="
              mt-5
              font-[family:var(--font-cormorant)]
              text-5xl
              font-light
              leading-tight
              tracking-[-0.02em]
              text-[#F4F1EA]
              md:text-6xl
            "
          >
            Your Previous Insights
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-sm
              leading-7
              text-white/40
              md:text-base
            "
          >
            A private archive of the moments,
            patterns and insights discovered
            throughout your SoulMirror journey.
          </p>
        </motion.div>

        {/* =================================================
            LOADING
        ================================================== */}

        {loading && (
          <div
            className="
              relative
              z-10
              mx-auto
              mt-14
              max-w-4xl
              space-y-4
            "
          >
            {[0, 1, 2].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: item * 0.1,
                }}
                className="
                  relative
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-white/[0.06]
                  bg-white/[0.025]
                  p-6
                "
              >
                <motion.div
                  animate={{
                    x: ["-100%", "200%"],
                  }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    ease: "linear",
                    delay: item * 0.15,
                  }}
                  className="
                    absolute
                    inset-y-0
                    w-1/2
                    bg-gradient-to-r
                    from-transparent
                    via-white/[0.04]
                    to-transparent
                  "
                />

                <div className="relative space-y-4">
                  <div className="h-3 w-24 rounded-full bg-white/[0.06]" />
                  <div className="h-7 w-48 rounded-full bg-white/[0.06]" />
                  <div className="h-3 w-full rounded-full bg-white/[0.04]" />
                  <div className="h-3 w-2/3 rounded-full bg-white/[0.04]" />
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* =================================================
            ERROR
        ================================================== */}

        {!loading && error && (
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
              relative
              z-10
              mx-auto
              mt-14
              max-w-2xl
              rounded-[28px]
              border
              border-white/[0.07]
              bg-white/[0.025]
              p-8
              text-center
            "
          >
            <Sparkles
              size={22}
              className="
                mx-auto
                text-[#D6B25E]/70
              "
            />

            <p
              className="
                mt-5
                text-sm
                text-white/50
              "
            >
              {error}
            </p>
          </motion.div>
        )}

        {/* =================================================
            EMPTY STATE
        ================================================== */}

        {!loading && !error && history.length === 0 && (
          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
            className="
              relative
              z-10
              mx-auto
              mt-14
              max-w-3xl
              overflow-hidden
              rounded-[36px]
              border
              border-white/[0.07]
              bg-white/[0.025]
              p-10
              text-center
              backdrop-blur-3xl
              md:p-14
            "
          >
            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-0
                h-48
                w-48
                -translate-x-1/2
                rounded-full
                bg-[#D6B25E]/[0.06]
                blur-[90px]
              "
            />

            <div
              className="
                relative
                mx-auto
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-2xl
                border
                border-[#D6B25E]/15
                bg-[#D6B25E]/[0.05]
              "
            >
              <Brain
                size={25}
                className="text-[#D6B25E]"
              />
            </div>

            <p
              className="
                relative
                mt-7
                font-[family:var(--font-cormorant)]
                text-3xl
                font-light
                text-[#F4F1EA]
              "
            >
              Your archive is waiting.
            </p>

            <p
              className="
                relative
                mx-auto
                mt-4
                max-w-md
                text-sm
                leading-7
                text-white/40
              "
            >
              Complete your first Soul Scan to
              create your first personal insight
              and begin building your archive.
            </p>
          </motion.div>
        )}

        {/* =================================================
            ARCHIVE
        ================================================== */}

        {!loading && !error && history.length > 0 && (
          <div
            className="
              relative
              z-10
              mx-auto
              mt-14
              max-w-4xl
              space-y-4
            "
          >
            {history.map((item, index) => {
              const isExpanded =
                expandedId === item.id;

              return (
                <motion.div
                  key={item.id}
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    margin: "-40px",
                  }}
                  transition={{
                    duration: 0.65,
                    delay: Math.min(index * 0.06, 0.3),
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="relative"
                >
                  <motion.button
                    type="button"
                    onClick={() => toggleItem(item.id)}
                    whileHover={{
                      y: -3,
                    }}
                    whileTap={{
                      scale: 0.995,
                    }}
                    transition={{
                      duration: 0.35,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="
                      group
                      relative
                      w-full
                      cursor-pointer
                      overflow-hidden
                      rounded-[28px]
                      border
                      border-white/[0.07]
                      bg-[#080808]/80
                      p-6
                      text-left
                      backdrop-blur-3xl
                      transition-all
                      duration-500
                      hover:border-[#D6B25E]/20
                      hover:bg-white/[0.035]
                      hover:shadow-[0_20px_80px_rgba(0,0,0,0.3)]
                      md:p-7
                    "
                  >
                    {/* Hover glow */}

                    <div
                      className="
                        pointer-events-none
                        absolute
                        -right-20
                        -top-20
                        h-48
                        w-48
                        rounded-full
                        bg-[#D6B25E]/[0.035]
                        blur-[70px]
                        transition-all
                        duration-700
                        group-hover:bg-[#D6B25E]/[0.08]
                      "
                    />

                    {/* Top line */}

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
                        group-hover:via-[#D6B25E]/30
                      "
                    />

                    <div className="relative z-10 flex items-start gap-5">
                      {/* Icon */}

                      <div
                        className="
                          hidden
                          h-11
                          w-11
                          shrink-0
                          items-center
                          justify-center
                          rounded-2xl
                          border
                          border-white/[0.07]
                          bg-white/[0.025]
                          sm:flex
                        "
                      >
                        <Brain
                          size={19}
                          className="
                            text-[#D6B25E]
                            transition-transform
                            duration-500
                            group-hover:scale-110
                          "
                        />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div
                          className="
                            flex
                            flex-col
                            gap-2
                            sm:flex-row
                            sm:items-center
                            sm:justify-between
                          "
                        >
                          <p
                            className="
                              text-[9px]
                              uppercase
                              tracking-[0.35em]
                              text-[#D6B25E]/70
                            "
                          >
                            Soul Scan
                          </p>

                          <div
                            className="
                              flex
                              items-center
                              gap-3
                              text-[9px]
                              uppercase
                              tracking-[0.25em]
                              text-white/25
                            "
                          >
                            <span>
                              {formatDate(item.createdAt)}
                            </span>

                            <span className="hidden text-white/10 sm:inline">
                              •
                            </span>

                            <span className="hidden sm:inline">
                              {formatTime(item.createdAt)}
                            </span>
                          </div>
                        </div>

                        <div
                          className="
                            mt-4
                            flex
                            items-center
                            justify-between
                            gap-4
                          "
                        >
                          <h3
                            className="
                              font-[family:var(--font-cormorant)]
                              text-2xl
                              font-light
                              text-[#F4F1EA]
                              transition-colors
                              duration-500
                              group-hover:text-white
                              md:text-3xl
                            "
                          >
                            {item.archetype ||
                              "Unknown Archetype"}
                          </h3>

                          <motion.div
                            animate={{
                              rotate: isExpanded ? 45 : 0,
                            }}
                            transition={{
                              duration: 0.4,
                            }}
                            className="
                              flex
                              h-9
                              w-9
                              shrink-0
                              items-center
                              justify-center
                              rounded-full
                              border
                              border-white/[0.07]
                              bg-white/[0.025]
                              text-white/30
                              transition-colors
                              duration-500
                              group-hover:border-[#D6B25E]/20
                              group-hover:text-[#D6B25E]
                            "
                          >
                            <ArrowUpRight size={15} />
                          </motion.div>
                        </div>

                        <div
                          className="
                            mt-4
                            flex
                            items-center
                            gap-3
                          "
                        >
                          <span
                            className="
                              rounded-full
                              border
                              border-[#D6B25E]/15
                              bg-[#D6B25E]/[0.04]
                              px-3
                              py-1
                              text-[9px]
                              uppercase
                              tracking-[0.25em]
                              text-[#D6B25E]/70
                            "
                          >
                            {item.emotion ||
                              "Balanced"}
                          </span>

                          {!isExpanded && (
                            <p
                              className="
                                hidden
                                truncate
                                text-xs
                                text-white/25
                                md:block
                              "
                            >
                              {truncate(item.insight, 100)}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Expanded content */}

                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{
                            height: 0,
                            opacity: 0,
                          }}
                          animate={{
                            height: "auto",
                            opacity: 1,
                          }}
                          exit={{
                            height: 0,
                            opacity: 0,
                          }}
                          transition={{
                            duration: 0.5,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                          className="relative z-10 overflow-hidden"
                        >
                          <div
                            className="
                              mt-7
                              border-t
                              border-white/[0.07]
                              pt-7
                            "
                          >
                            <p
                              className="
                                text-[9px]
                                uppercase
                                tracking-[0.4em]
                                text-white/25
                              "
                            >
                              Personal Insight
                            </p>

                            <p
                              className="
                                mt-4
                                max-w-3xl
                                text-sm
                                leading-8
                                text-white/60
                              "
                            >
                              {item.insight ||
                                "No additional insight is available for this analysis."}
                            </p>

                            <div
                              className="
                                mt-7
                                flex
                                items-center
                                gap-2
                              "
                            >
                              <span
                                className="
                                  h-1.5
                                  w-1.5
                                  rounded-full
                                  bg-[#D6B25E]
                                "
                              />

                              <span
                                className="
                                  text-[9px]
                                  uppercase
                                  tracking-[0.3em]
                                  text-white/25
                                "
                              >
                                EON Intelligence Engine
                              </span>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Bottom hint */}

                    <div
                      className="
                        relative
                        z-10
                        mt-5
                        flex
                        items-center
                        justify-end
                        gap-2
                        text-[8px]
                        uppercase
                        tracking-[0.3em]
                        text-white/15
                        transition-colors
                        duration-500
                        group-hover:text-[#D6B25E]/40
                      "
                    >
                      <span>
                        {isExpanded
                          ? "Collapse"
                          : "Open insight"}
                      </span>

                      <ChevronDown
                        size={12}
                        className={`
                          transition-transform
                          duration-500
                          ${
                            isExpanded
                              ? "rotate-180"
                              : ""
                          }
                        `}
                      />
                    </div>
                  </motion.button>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* =================================================
            FOOTER
        ================================================== */}

        {!loading && !error && history.length > 0 && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.4,
            }}
            className="
              relative
              z-10
              mx-auto
              mt-10
              flex
              justify-center
            "
          >
            <div
              className="
                rounded-full
                border
                border-[#D6B25E]/10
                bg-white/[0.02]
                px-6
                py-3
                backdrop-blur-xl
              "
            >
              <p
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.4em]
                  text-white/25
                "
              >
                EON Intelligence Engine •
                Personal Memory Archive
              </p>
            </div>
          </motion.div>
        )}
      </Container>
    </section>
  );
}