"use client";

import { motion } from "framer-motion";

export function CinematicLoader() {
  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden bg-[#050505]">
      {/* Ambient glow */}
      <motion.div
        className="absolute h-[420px] w-[420px] rounded-full bg-[#D6B25E]/10 blur-[120px]"
        animate={{
          scale: [1, 1.18, 1],
          opacity: [0.25, 0.5, 0.25],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Orb */}
        <motion.div
          className="relative flex h-32 w-32 items-center justify-center"
          initial={{
            opacity: 0,
            scale: 0.7,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.4,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {/* Outer ring */}
          <motion.div
            className="absolute inset-0 rounded-full border border-[#D6B25E]/30"
            animate={{
              scale: [1, 1.08, 1],
              rotate: [0, 360],
            }}
            transition={{
              scale: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              },
              rotate: {
                duration: 18,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          />

          {/* Second ring */}
          <motion.div
            className="absolute h-24 w-24 rounded-full border border-[#D6B25E]/20"
            animate={{
              rotate: [360, 0],
              scale: [1, 0.92, 1],
            }}
            transition={{
              rotate: {
                duration: 12,
                repeat: Infinity,
                ease: "linear",
              },
              scale: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          />

          {/* Core */}
          <motion.div
            className="h-12 w-12 rounded-full bg-gradient-to-br from-[#F4F1EA] via-[#D6B25E] to-[#8B5CF6] shadow-[0_0_70px_rgba(214,178,94,0.6)]"
            animate={{
              scale: [1, 1.12, 1],
              opacity: [0.85, 1, 0.85],
            }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Branding */}
        <motion.div
          className="mt-14 text-center"
          initial={{
            opacity: 0,
            y: 20,
            filter: "blur(8px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            delay: 0.6,
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <p className="text-[10px] uppercase tracking-[0.6em] text-[#D6B25E]">
            EON AI
          </p>

          <h1 className="mt-4 text-5xl font-light tracking-[0.08em] text-[#F4F1EA]">
            SoulMirror
          </h1>

          <p className="mt-5 text-[10px] uppercase tracking-[0.45em] text-white/35">
            Reflect · Understand · Evolve
          </p>
        </motion.div>

        {/* Progress */}
        <motion.div
          className="mt-12 h-px w-28 overflow-hidden bg-white/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1,
            duration: 0.8,
          }}
        >
          <motion.div
            className="h-full origin-left bg-[#D6B25E]/70"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              delay: 1,
              duration: 2.5,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        </motion.div>
      </div>

      {/* Footer */}
      <motion.p
        className="absolute bottom-10 text-[8px] uppercase tracking-[0.5em] text-white/20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{
          delay: 1.2,
          duration: 1,
        }}
      >
        Personal Intelligence · EON AI
      </motion.p>
    </div>
  );
}