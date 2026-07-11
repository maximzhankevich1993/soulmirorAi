"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SoulAwakeningProps {
  children: React.ReactNode;
}

export function SoulAwakening({
  children,
}: SoulAwakeningProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="fixed inset-0 z-[999] flex items-center justify-center overflow-hidden bg-[#070709]"
          >

            {/* Aura */}
            <motion.div
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="absolute h-96 w-96 rounded-full bg-[#D6B25E]/20 blur-[120px]"
            />

            {/* Core */}
            <motion.div
              initial={{
                scale: 0,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              transition={{
                duration: 1,
                ease: "easeOut",
              }}
              className="relative flex h-32 w-32 items-center justify-center rounded-full border border-[#D6B25E]/30 bg-gradient-to-br from-[#D6B25E]/40 to-[#8B5CF6]/20 shadow-[0_0_100px_rgba(214,178,94,.5)]"
            >

              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
                className="h-10 w-10 rounded-full bg-[#F4F1EA]"
              />

            </motion.div>

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.8,
              }}
              className="absolute mt-72 text-xs uppercase tracking-[0.5em] text-[#D6B25E]"
            >
              Awakening Soul
            </motion.p>

          </motion.div>
        )}
      </AnimatePresence>

      {children}
    </>
  );
}