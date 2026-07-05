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
  const [usage, setUsage] = useState<Usage>({
    soulScan: 0,
    dream: 0,
    tarot: 0,
  });

  const [loading, setLoading] = useState(true);

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const LIMIT = 1;

  useEffect(() => {
    async function load() {
      try {
        const {
          data: { user },
        } = await supabase.auth.getUser();

        setUser(user);

        if (!user) {
          setLoading(false);
          return;
        }

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

  const getProgress = (value: number) =>
    Math.min((value / LIMIT) * 100, 100);

  const Card = ({
    title,
    value,
    emoji,
  }: {
    title: string;
    value: number;
    emoji: string;
  }) => {
    const progress = getProgress(value);
    const isLocked = value >= LIMIT;

    return (
      <div className="p-5 rounded-xl border border-white/10 bg-white/5">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-medium">
            {emoji} {title}
          </h3>
          <span
            className={`text-sm ${
              isLocked ? "text-red-400" : "text-green-400"
            }`}
          >
            {value} / {LIMIT}
          </span>
        </div>

        {/* PROGRESS BAR */}
        <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
          <div
            className={`h-full transition-all ${
              isLocked ? "bg-red-500" : "bg-green-500"
            }`}
            style={{ width: `${progress}%` }}
          />
        </div>

        {isLocked && (
          <p className="text-xs text-red-400 mt-2">
            Limit reached. Upgrade to continue.
          </p>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white p-10">
      {/* HEADER */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold">
          Welcome back 👋
        </h1>
        <p className="text-white/60">{user.email}</p>
      </div>

      {/* USAGE GRID */}
      <div className="grid gap-5 md:grid-cols-3 mb-10">
        <Card
          title="Soul Scan"
          value={usage.soulScan}
          emoji="🧠"
        />
        <Card
          title="Dream Analysis"
          value={usage.dream}
          emoji="🌙"
        />
        <Card
          title="Tarot Reading"
          value={usage.tarot}
          emoji="🔮"
        />
      </div>

      {/* UPGRADE SECTION */}
      <div className="p-6 border border-yellow-500/30 bg-yellow-500/5 rounded-xl">
        <h2 className="text-xl mb-2">Upgrade to Pro 🚀</h2>
        <p className="text-white/60 mb-4">
          Remove limits and unlock full Soul Journey experience.
        </p>

        <button className="px-5 py-2 bg-yellow-500 text-black rounded-lg">
          Upgrade (CryptoCloud later)
        </button>
      </div>
    </div>
  );
}