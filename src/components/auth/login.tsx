
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleLogin() {
    const normalizedEmail = email.trim().toLowerCase();

    if (!normalizedEmail) {
      setMessage("Please enter your email");
      return;
    }

    try {
      setLoading(true);
      setMessage("");

      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          email: normalizedEmail,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.error || "Login failed"
        );
      }

      /*
       * If the API uses a magic-link flow,
       * show the confirmation message.
       */

      if (data?.message) {
        setMessage(data.message);
        return;
      }

      /*
       * If the API creates the session immediately,
       * go directly to the dashboard.
       */

      router.push("/dashboard");
      router.refresh();
    } catch (error) {
      console.error("Login error:", error);

      setMessage(
        error instanceof Error
          ? error.message
          : "Login failed"
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-md rounded-2xl border border-white/10 bg-white/5 p-6">
      <h2 className="mb-4 text-xl text-white">
        Login
      </h2>

      <input
        type="email"
        autoComplete="email"
        className="
          w-full
          rounded-xl
          border
          border-white/10
          bg-black/30
          p-3
          text-white
          outline-none
          transition
          focus:border-[#D6B25E]/50
        "
        placeholder="Email"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleLogin();
          }
        }}
        disabled={loading}
      />

      <button
        type="button"
        onClick={handleLogin}
        disabled={loading}
        className="
          mt-4
          w-full
          rounded-xl
          bg-[#D6B25E]
          p-3
          font-medium
          text-black
          transition
          hover:bg-[#e2c477]
          disabled:cursor-not-allowed
          disabled:opacity-50
        "
      >
        {loading
          ? "Signing in..."
          : "Continue"}
      </button>

      {message && (
        <p className="mt-3 text-sm text-white/70">
          {message}
        </p>
      )}
    </div>
  );
}

