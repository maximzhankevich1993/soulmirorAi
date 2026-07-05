"use client";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

type Usage = {
  soulScan: number;
  dream: number;
  tarot: number;
};

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null);
  const [usage, setUsage] = useState<Usage | null>(null);
  const [loading, setLoading] = useState(true);

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  useEffect(() => {
    async function load() {
      try {
        const {
          data: { user },
        } = await supabase.auth.getUser();

        setUser(user);

        if (!user) return;

        const res = await fetch("/api/usage");

        if (res.ok) {
          const data = await res.json();
          setUsage(data);
        }
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  if (loading) {
    return (
      <div className="p-10 text-white">
        Loading dashboard...
      </div>
    );
  }

  if (!user) {
    return (
      <div className="p-10 text-white">
        Please login to access dashboard
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-3xl font-bold mb-6">
        Welcome, {user.email}
      </h1>

      {/* PLAN */}
      <div className="mb-6 p-4 border border-white/10 rounded-xl">
        <h2 className="text-xl mb-2">Plan</h2>
        <p className="text-green-400">Free Plan</p>
      </div>

      {/* USAGE */}
      <div className="mb-6 p-4 border border-white/10 rounded-xl">
        <h2 className="text-xl mb-4">Today's Usage</h2>

        <div className="space-y-2">
          <p>🧠 Soul Scan: {usage?.soulScan ?? 0} / 1</p>
          <p>🌙 Dream: {usage?.dream ?? 0} / 1</p>
          <p>🔮 Tarot: {usage?.tarot ?? 0} / 1</p>
        </div>
      </div>

      {/* UPGRADE */}
      <div className="p-4 border border-yellow-500/30 rounded-xl">
        <h2 className="text-xl mb-2">Upgrade</h2>
        <button className="px-4 py-2 bg-yellow-500 text-black rounded-lg">
          Upgrade to Pro (soon)
        </button>
      </div>
    </div>
  );
}