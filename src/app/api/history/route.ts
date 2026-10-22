import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { getUser } from "@/lib/getUser";

export async function GET() {
  try {
    const user = await getUser();
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const supabase = createAdminClient();
    const userId = user.id;

    const [soulResult, dreamResult, tarotResult] = await Promise.all([
      supabase.from("SoulScan").select("id,archetype,insight,createdAt").eq("userId", userId).order("createdAt", { ascending: false }).limit(20),
      supabase.from("DreamAnalysis").select("id,summary,interpretation,createdAt").eq("userId", userId).order("createdAt", { ascending: false }).limit(20),
      supabase.from("TarotReading").select("id,card,meaning,guidance,createdAt").eq("userId", userId).order("createdAt", { ascending: false }).limit(20),
    ]);

    for (const result of [soulResult, dreamResult, tarotResult]) {
      if (result.error) {
        console.error("HISTORY DB ERROR:", result.error.message);
        throw new Error("Failed to load history");
      }
    }

    const history = [
      ...(soulResult.data ?? []).map((item) => ({
        id: item.id,
        type: "soul-scan" as const,
        title: item.archetype || "Soul Scan",
        description: item.insight || "Soul analysis completed.",
        date: item.createdAt,
      })),
      ...(dreamResult.data ?? []).map((item) => ({
        id: item.id,
        type: "dream-analysis" as const,
        title: "Dream Analysis",
        description: item.interpretation || item.summary || "Dream analysis completed.",
        date: item.createdAt,
      })),
      ...(tarotResult.data ?? []).map((item) => ({
        id: item.id,
        type: "tarot" as const,
        title: item.card || "Tarot Reading",
        description: item.guidance || item.meaning || "Tarot reading completed.",
        date: item.createdAt,
      })),
    ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return NextResponse.json(history);
  } catch (error) {
    console.error("HISTORY API ERROR:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
