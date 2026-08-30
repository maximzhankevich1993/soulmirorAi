
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type User = {
  id: string;
  email: string;
  name?: string;
};

export function AuthWidget() {
  const router = useRouter();

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [loggingOut, setLoggingOut] = useState(false);

  useEffect(() => {
    async function loadUser() {
      try {
        const response = await fetch("/api/auth/me", {
          method: "GET",
          credentials: "include",
          cache: "no-store",
        });

        if (!response.ok) {
          setUser(null);
          return;
        }

        const data = await response.json();

        setUser(data.user ?? null);
      } catch (error) {
        console.error("Auth widget loading error:", error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    }

    loadUser();
  }, []);

  async function logout() {
    if (loggingOut) return;

    try {
      setLoggingOut(true);

      const response = await fetch("/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Logout failed");
      }

      setUser(null);

      router.refresh();
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      setLoggingOut(false);
    }
  }

  if (loading) {
    return (
      <div className="flex items-center gap-3">
        <div className="h-9 w-20 animate-pulse rounded-lg bg-white/5" />
        <div className="h-9 w-20 animate-pulse rounded-lg bg-white/5" />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex gap-3">
        <a
          href="/auth"
          className="
            rounded-lg
            border
            border-white/10
            px-4
            py-2
            text-sm
            text-white/80
            transition
            hover:bg-white/5
          "
        >
          Sign in
        </a>

        <a
          href="/auth"
          className="
            rounded-lg
            bg-[#D6B25E]
            px-4
            py-2
            text-sm
            font-medium
            text-black
            transition
            hover:bg-[#e2c477]
          "
        >
          Sign up
        </a>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <span className="max-w-[180px] truncate text-sm text-white/70">
        {user.email}
      </span>

      <button
        type="button"
        onClick={logout}
        disabled={loggingOut}
        className="
          rounded-lg
          border
          border-white/10
          px-3
          py-2
          text-sm
          text-white/70
          transition
          hover:bg-white/5
          disabled:cursor-not-allowed
          disabled:opacity-40
        "
      >
        {loggingOut ? "Leaving..." : "Logout"}
      </button>
    </div>
  );
}

