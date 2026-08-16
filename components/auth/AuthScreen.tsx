"use client";

import { motion } from "framer-motion";

import { AuthBackground } from "./AuthBackground";
import { AuthLogo } from "./AuthLogo";
import { AuthCard } from "./AuthCard";
import { AuthForm } from "./AuthForm";

interface AuthScreenProps {
  initialMode?: "login" | "register";
}

export function AuthScreen({
  initialMode = "login",
}: AuthScreenProps) {
  return (
    <main
      className="
        relative
        flex
        min-h-screen
        items-center
        justify-center
        overflow-hidden
        bg-[#050505]
        px-6
        py-16
        text-[#F4F1EA]
      "
    >
      <AuthBackground />

      {/* =====================================================
          CINEMATIC LIGHT
      ====================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.7,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 2.2,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[650px]
          w-[950px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-white/[0.018]
          blur-[180px]
        "
      />

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          delay: 0.25,
          duration: 2.4,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[35%]
          h-[450px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-[#D6B25E]/[0.018]
          blur-[160px]
        "
      />

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-10
          flex
          w-full
          max-w-md
          flex-col
          items-center
        "
      >
        {/* =================================================
            SOULMIRROR BRAND
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: -70,
            scale: 0.88,
            filter: "blur(18px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 1.35,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <AuthLogo />
        </motion.div>

        {/* =================================================
            AUTH CARD
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 100,
            scale: 0.92,
            rotateX: 8,
            filter: "blur(20px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            filter: "blur(0px)",
          }}
          transition={{
            delay: 0.35,
            duration: 1.25,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            mt-12
            w-full
            [perspective:1200px]
          "
        >
          <AuthCard>
            <AuthForm initialMode={initialMode} />
          </AuthCard>
        </motion.div>

        {/* =================================================
            BRAND FOOTER
        ================================================== */}

        <motion.p
          initial={{
            opacity: 0,
            y: 25,
            filter: "blur(8px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            delay: 0.9,
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mt-8
            text-center
            text-[9px]
            uppercase
            tracking-[0.5em]
            text-white/20
          "
        >
          EON AI · Personal Intelligence
        </motion.p>
      </div>
    </main>
  );
}