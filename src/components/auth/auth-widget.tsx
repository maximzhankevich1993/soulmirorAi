"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export function AuthWidget() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    async function getUser() {
      const { data } = await supabase.auth.getUser();
      setUser(data.user);
    }

    getUser();

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user || null);
      }
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  async function logout() {
    await supabase.auth.signOut();
  }

  if (!user) {
    return (
      <div className="flex gap-3">
        <a
          href="/auth"
          className="rounded-lg border border-white/10 px-4 py-2 text-sm text-white/80 hover:bg-white/5"
        >
          Sign in
        </a>

        <a
          href="/auth"
          className="rounded-lg bg-[#D6B25E] px-4 py-2 text-sm font-medium text-black"
        >
          Sign up
        </a>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-white/70">
        {user.email}
      </span>

      <button
        onClick={logout}
        className="rounded-lg border border-white/10 px-3 py-2 text-sm text-white/70 hover:bg-white/5"
      >
        Logout
      </button>
    </div>
  );
}