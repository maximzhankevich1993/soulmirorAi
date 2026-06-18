"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Logo() {
  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-3"
    >
      {/* Symbol */}
      <div className="relative flex h-11 w-11 items-center justify-center">
        {/* Glow */}
        <div className="absolute inset-0 rounded-full bg-[#D6B25E]/15 blur-xl transition-all duration-500 group-hover:bg-[#D6B25E]/30" />

        {/* Orb */}
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            relative
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            border
            border-[#D6B25E]/30
            bg-gradient-to-br
            from-[#D6B25E]/15
            via-transparent
            to-[#8B5CF6]/15
            backdrop-blur-xl
          "
        >
          {/* Inner Ring */}
          <div className="absolute inset-1 rounded-full border border-[#D6B25E]/10" />

          {/* Moon */}
          <div className="relative h-4 w-4 rounded-full border border-[#D6B25E]/70">
            <div className="absolute -right-1 top-0 h-4 w-4 rounded-full bg-[#09090B]" />
          </div>
        </motion.div>
      </div>

      {/* Text */}
      <div className="flex flex-col leading-none">
        <span
          className="
            font-[family:var(--font-cormorant)]
            text-2xl
            font-semibold
            tracking-[0.04em]
            text-[#F4F1EA]
            transition-all
            duration-300
            group-hover:text-white
          "
        >
          SoulMirror
        </span>

        <span
          className="
            text-[10px]
            uppercase
            tracking-[0.4em]
            text-[#D6B25E]
          "
        >
          AI
        </span>
      </div>
    </Link>
  );
}