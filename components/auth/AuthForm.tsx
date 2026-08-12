"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { supabase } from "@/src/lib/supabaseClient";

export function AuthForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const [mode, setMode] = useState<"login" | "register">("login");

  const [message, setMessage] = useState<string | null>(null);

  async function handleAuth() {
    try {
      setLoading(true);
      setMessage(null);

      if (mode === "login") {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) {
          throw error;
        }

        setMessage("Welcome back to SoulMirror");
      } else {
        const { error } = await supabase.auth.signUp({
          email,
          password,
        });

        if (error) {
          throw error;
        }

        setMessage("Check your email to confirm account");
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        setMessage(error.message);
      } else {
        setMessage("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <div className="space-y-4">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
          autoComplete="email"
          className="
            w-full
            rounded-2xl
            border
            border-white/10
            bg-black/30
            px-5
            py-4
            text-sm
            text-[#F4F1EA]
            outline-none
            placeholder:text-white/30
            focus:border-[#D6B25E]/50
          "
        />

        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          autoComplete={
            mode === "login" ? "current-password" : "new-password"
          }
          className="
            w-full
            rounded-2xl
            border
            border-white/10
            bg-black/30
            px-5
            py-4
            text-sm
            text-[#F4F1EA]
            outline-none
            placeholder:text-white/30
            focus:border-[#D6B25E]/50
          "
        />
      </div>

      <motion.button
        type="button"
        whileHover={{
          scale: 1.02,
        }}
        whileTap={{
          scale: 0.98,
        }}
        disabled={loading}
        onClick={handleAuth}
        className="
          mt-6
          w-full
          rounded-2xl
          bg-[#D6B25E]
          py-4
          text-sm
          font-medium
          text-black
          transition
          disabled:opacity-50
        "
      >
        {loading
          ? "Entering..."
          : mode === "login"
            ? "Enter SoulMirror"
            : "Create Intelligence"}
      </motion.button>

      <div className="mt-6 text-center">
        <button
          type="button"
          onClick={() =>
            setMode((currentMode) =>
              currentMode === "login" ? "register" : "login"
            )
          }
          className="
            text-sm
            text-white/50
            transition
            hover:text-[#D6B25E]
          "
        >
          {mode === "login"
            ? "Create new account"
            : "Already have account?"}
        </button>
      </div>

      {message && (
        <p
          className="
            mt-5
            text-center
            text-xs
            text-white/50
          "
        >
          {message}
        </p>
      )}
    </div>
  );
}