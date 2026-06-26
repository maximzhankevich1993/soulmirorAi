"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export function Login() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleLogin() {
    try {
      setLoading(true);
      setMessage("");

      const { error } = await supabase.auth.signInWithOtp({
        email,
      });

      if (error) throw error;

      setMessage("Check your email for login link");
    } catch (err: any) {
      setMessage(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-md mx-auto p-6 rounded-2xl bg-white/5 border border-white/10">
      <h2 className="text-xl text-white mb-4">Login</h2>

      <input
        className="w-full p-3 rounded-xl bg-black/30 border border-white/10 text-white"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button
        onClick={handleLogin}
        disabled={loading}
        className="mt-4 w-full p-3 rounded-xl bg-[#D6B25E] text-black font-medium"
      >
        {loading ? "Sending..." : "Send Magic Link"}
      </button>

      {message && (
        <p className="mt-3 text-sm text-white/70">{message}</p>
      )}
    </div>
  );
}