import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { getUser } from "@/lib/getUser";

export async function GET() {
  try {
    const user = await getUser();
    if (!user) return NextResponse.json([]);

    const supabase = createAdminClient();
    const userId = user.id;

    const [soulResult, dreamResult, tarotResult] = await Promise.all([
      supabase.from("SoulScan").select("id,archetype,insight,createdAt").eq("userId", userId).order("createdAt", { ascending: false }).limit(20),
      supabase.from("DreamAnalysis").select("id,summary,interpretation,createdAt").eq("userId", userId).order("createdAt", { ascending: false }).limit(20),
      supabase.from("TarotReading").select("id,card,meaning,guidance,createdAt").eq("userId", userId).order("createdAt", { ascending: false }).limit(20),
    ]);

    for (const result of [soulResult, dreamResult, tarotResult]) {
      if (result.error) {
        console.error("JOURNEY DB ERROR:", result.error.message);
        throw new Error("Failed to load journey");
      }
    }

    const journey = [
      ...(soulResult.data ?? []).map((item) => ({
        id: item.id,
        type: "soul" as const,
        title: item.archetype || "Soul Scan",
        description: item.insight || "Soul analysis completed.",
        createdAt: item.createdAt,
      })),
      ...(dreamResult.data ?? []).map((item) => ({
        id: item.id,
        type: "dream" as const,
        title: "Dream Analysis",
        description: item.interpretation || item.summary || "Dream interpreted.",
        createdAt: item.createdAt,
      })),
      ...(tarotResult.data ?? []).map((item) => ({
        id: item.id,
        type: "tarot" as const,
        title: item.card || "Tarot Reading",
        description: item.guidance || item.meaning || "Symbolic guidance generated.",
        createdAt: item.createdAt,
      })),
    ].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

    return NextResponse.json(
      journey.map((item) => ({
        id: item.id,
        type: item.type,
        title: item.title,
        description: item.description,
        date: new Intl.DateTimeFormat("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        }).format(new Date(item.createdAt)),
      }))
    );
  } catch (error) {
    console.error("JOURNEY API ERROR:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
