
"use client";

import { motion } from "framer-motion";

import { AuthBackground } from "./AuthBackground";
import { AuthLogo } from "./AuthLogo";
import { AuthCard } from "./AuthCard";
import { AuthForm } from "./AuthForm";

export function AuthScreen() {
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
      {/* Background */}

      <AuthBackground />

      {/* Main cinematic atmosphere */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 2,
          ease: "easeOut",
        }}
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[600px]
          w-[900px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#D6B25E]/[0.025]
          blur-[180px]
        "
      />

      {/* Content */}

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
        {/* Logo */}

        <AuthLogo />

        {/* Authentication */}

        <motion.div
          initial={{
            opacity: 0,
            y: 45,
            scale: 0.97,
            filter: "blur(12px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
          }}
          transition={{
            delay: 1.65,
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mt-12
            w-full
          "
        >
          <AuthCard>
            <AuthForm />
          </AuthCard>
        </motion.div>

        {/* Bottom brand */}

        <motion.p
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 2.25,
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mt-8
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

