"use client";

import { motion } from "framer-motion";

import { SoulSpace } from "@/components/soul-space/SoulSpace";

export default function Page() {
  return (
    <motion.main
      initial={{
        opacity: 0,
        filter: "blur(8px)",
        scale: 0.985,
      }}
      animate={{
        opacity: 1,
        filter: "blur(0px)",
        scale: 1,
      }}
      transition={{
        duration: 1.4,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="min-h-screen"
    >
      <SoulSpace />
    </motion.main>
  );
}