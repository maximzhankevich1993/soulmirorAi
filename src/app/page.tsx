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

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <main className="relative min-h-screen">

      {/* SoulMirror */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: loading ? 0 : 1,
        }}
        transition={{
          duration: 1.4,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <SoulSpace />
      </motion.div>

      {/* EON AI Cinematic Loader */}

      <AnimatePresence mode="wait">
        {loading && (
          <CinematicLoader />
        )}
      </AnimatePresence>

    </main>
  );
}