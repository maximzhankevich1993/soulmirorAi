"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { SoulSpace } from "@/components/soul-space/SoulSpace";
import { CinematicLoader } from "../../components/loading/CinematicLoader";

const LOADING_DURATION = 4000;

export default function Page() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setLoading(false);
    }, LOADING_DURATION);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <main className="relative min-h-screen">
      {/* Main application */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: loading ? 0 : 1,
        }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <SoulSpace />
      </motion.div>

      {/* Single cinematic loading screen */}
      <AnimatePresence>
        {loading && (
          <motion.div
            key="cinematic-loader"
            className="fixed inset-0 z-[99999]"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{
              opacity: 0,
              scale: 1.01,
              filter: "blur(4px)",
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
    </main>
  );
}