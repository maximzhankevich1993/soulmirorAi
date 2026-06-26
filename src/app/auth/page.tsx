"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function AuthPage() {
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

        if (error) throw error;

        setMessage("Logged in successfully");
      } else {
        const { error } = await supabase.auth.signUp({
          email,
          password,
        });

        if (error) throw error;

        setMessage("Check your email to confirm account");
      }
    } catch (err: any) {
      setMessage(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#09090B] text-white">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-8">
        <h1 className="mb-6 text-2xl font-bold">
          {mode === "login" ? "Login" : "Register"}
        </h1>

        <input
          className="mb-3 w-full rounded-lg border border-white/10 bg-black/30 p-3"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="mb-4 w-full rounded-lg border border-white/10 bg-black/30 p-3"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleAuth}
          disabled={loading}
          className="w-full rounded-lg bg-[#D6B25E] p-3 text-black font-semibold"
        >
          {loading
            ? "Loading..."
            : mode === "login"
            ? "Login"
            : "Create account"}
        </button>

        <p className="mt-4 text-center text-sm text-white/60">
          {mode === "login" ? (
            <>
              No account?{" "}
              <button onClick={() => setMode("register")}>
                Register
              </button>
            </>
          ) : (
            <>
              Already have account?{" "}
              <button onClick={() => setMode("login")}>
                Login
              </button>
            </>
          )}
        </p>

        {message && (
          <p className="mt-4 text-center text-sm text-white/70">
            {message}
          </p>
        )}
      </div>
    </div>
  );
}