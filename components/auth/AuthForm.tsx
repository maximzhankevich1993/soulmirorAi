
"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { supabase } from "../../src/lib/supabaseClient";

export function AuthForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const [mode, setMode] = useState<"login" | "register">(
    "login"
  );

  const [message, setMessage] = useState<string | null>(
    null
  );

  async function handleAuth() {
    try {
      setLoading(true);
      setMessage(null);

      if (!email.trim() || !password.trim()) {
        setMessage(
          "Please enter your email and password."
        );
        return;
      }

      if (mode === "login") {
        const { error } =
          await supabase.auth.signInWithPassword({
            email: email.trim(),
            password,
          });

        if (error) {
          throw error;
        }

        setMessage(
          "Welcome back to SoulMirror"
        );
      } else {
        const { error } =
          await supabase.auth.signUp({
            email: email.trim(),
            password,
          });

        if (error) {
          throw error;
        }

        setMessage(
          "Check your email to confirm your account."
        );
      }
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Authentication failed.";

      setMessage(errorMessage);
    } finally {
      setLoading(false);
    }
  }

  const isLogin = mode === "login";

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
        filter: "blur(10px)",
      }}
      animate={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      transition={{
        delay: 1.7,
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="w-full"
    >
      {/* =========================================
          FORM TITLE
      ========================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 1.9,
          duration: 0.8,
        }}
        className="mb-8 text-center"
      >
        <p
          className="
            text-[10px]
            uppercase
            tracking-[0.45em]
            text-white/35
          "
        >
          {isLogin
            ? "Return to your inner world"
            : "Begin your journey"}
        </p>
      </motion.div>

      {/* =========================================
          INPUTS
      ========================================== */}

      <div className="space-y-3">
        {/* EMAIL */}

        <motion.div
          initial={{
            opacity: 0,
            x: -15,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            delay: 2,
            duration: 0.7,
          }}
          className="relative"
        >
          <input
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            type="email"
            placeholder="Email"
            autoComplete="email"
            className="
              peer
              h-14
              w-full
              cursor-text
              rounded-2xl
              border
              border-white/[0.08]
              bg-white/[0.025]
              px-5
              text-sm
              text-[#F4F1EA]
              outline-none
              backdrop-blur-xl
              transition-all
              duration-500
              placeholder:text-white/25
              hover:border-white/[0.14]
              hover:bg-white/[0.04]
              focus:border-white/[0.22]
              focus:bg-white/[0.05]
              focus:shadow-[0_0_35px_rgba(255,255,255,0.035)]
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              bottom-0
              left-5
              right-5
              h-px
              origin-left
              scale-x-0
              bg-gradient-to-r
              from-transparent
              via-white/30
              to-transparent
              transition-transform
              duration-500
              peer-focus:scale-x-100
            "
          />
        </motion.div>

        {/* PASSWORD */}

        <motion.div
          initial={{
            opacity: 0,
            x: 15,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            delay: 2.1,
            duration: 0.7,
          }}
          className="relative"
        >
          <input
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            type="password"
            placeholder="Password"
            autoComplete={
              isLogin
                ? "current-password"
                : "new-password"
            }
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleAuth();
              }
            }}
            className="
              peer
              h-14
              w-full
              cursor-text
              rounded-2xl
              border
              border-white/[0.08]
              bg-white/[0.025]
              px-5
              text-sm
              text-[#F4F1EA]
              outline-none
              backdrop-blur-xl
              transition-all
              duration-500
              placeholder:text-white/25
              hover:border-white/[0.14]
              hover:bg-white/[0.04]
              focus:border-white/[0.22]
              focus:bg-white/[0.05]
              focus:shadow-[0_0_35px_rgba(255,255,255,0.035)]
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              bottom-0
              left-5
              right-5
              h-px
              origin-left
              scale-x-0
              bg-gradient-to-r
              from-transparent
              via-white/30
              to-transparent
              transition-transform
              duration-500
              peer-focus:scale-x-100
            "
          />
        </motion.div>
      </div>

      {/* =========================================
          MAIN ACTION
      ========================================== */}

      <motion.button
        type="button"
        whileHover={{
          y: -2,
        }}
        whileTap={{
          scale: 0.98,
        }}
        disabled={loading}
        onClick={handleAuth}
        initial={{
          opacity: 0,
          y: 15,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 2.3,
          duration: 0.8,
        }}
        className="
          group
          relative
          mt-6
          flex
          h-14
          w-full
          cursor-pointer
          items-center
          justify-center
          overflow-hidden
          rounded-2xl
          border
          border-white/[0.14]
          bg-white/[0.07]
          text-sm
          font-medium
          text-white
          backdrop-blur-2xl
          shadow-[0_10px_40px_rgba(0,0,0,0.25)]
          transition-all
          duration-500
          hover:border-white/[0.28]
          hover:bg-white/[0.11]
          hover:shadow-[0_15px_55px_rgba(255,255,255,0.06)]
          disabled:cursor-not-allowed
          disabled:opacity-40
        "
      >
        {/* Hover light */}

        <span
          className="
            pointer-events-none
            absolute
            inset-0
            -translate-x-full
            bg-gradient-to-r
            from-transparent
            via-white/[0.07]
            to-transparent
            transition-transform
            duration-1000
            group-hover:translate-x-full
          "
        />

        <span className="relative z-10">
          {loading
            ? "Entering..."
            : isLogin
              ? "Enter SoulMirror"
              : "Create Intelligence"}
        </span>
      </motion.button>

      {/* =========================================
          MODE SWITCH
      ========================================== */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 2.5,
          duration: 0.8,
        }}
        className="mt-7 text-center"
      >
        <button
          type="button"
          onClick={() => {
            setMessage(null);

            setMode(
              isLogin
                ? "register"
                : "login"
            );
          }}
          className="
            cursor-pointer
            text-[11px]
            uppercase
            tracking-[0.28em]
            text-white/35
            transition-all
            duration-500
            hover:text-white/80
          "
        >
          {isLogin
            ? "Create new account"
            : "Already have an account?"}
        </button>
      </motion.div>

      {/* =========================================
          MESSAGE
      ========================================== */}

      {message && (
        <motion.p
          initial={{
            opacity: 0,
            y: 8,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="
            mt-6
            text-center
            text-xs
            leading-6
            text-white/45
          "
        >
          {message}
        </motion.p>
      )}
    </motion.div>
  );
}

