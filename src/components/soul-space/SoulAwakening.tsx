"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { CinematicLoader } from "../../../components/loading/CinematicLoader";

interface SoulAwakeningProps {
  children: React.ReactNode;
}

const LOADING_TIME = 4000;

export function SoulAwakening({
  children,
}: SoulAwakeningProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setLoading(false);
    }, LOADING_TIME);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen">
      <motion.div
        animate={{
          opacity: loading ? 0 : 1,
        }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </motion.div>

      <AnimatePresence>
        {loading && (
          <motion.div
            key="cinematic-loader"
            className="fixed inset-0 z-[99999]"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <CinematicLoader />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}