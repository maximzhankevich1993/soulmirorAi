import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { getActor } from "@/lib/getActor";

export async function GET() {
  try {
    const actor = await getActor();
    if (actor.type !== "user") return NextResponse.json(null);

    const supabase = createAdminClient();
    const { data, error } = await supabase
      .from("SoulScan")
      .select("archetype,emotion,insight")
      .eq("userId", actor.userId)
      .order("createdAt", { ascending: false })
      .limit(1)
      .maybeSingle();

    if (error) {
      console.error("SOUL MEMORY DB ERROR:", error.message);
      throw new Error("Unable to load soul memory");
    }

    if (!data) {
      return NextResponse.json({
        archetype: "Unknown",
        emotion: "Calm",
        insight: "",
        shadow: "",
      });
    }

    return NextResponse.json({
      archetype: data.archetype,
      emotion: data.emotion,
      insight: data.insight,
      shadow: "",
    });
  } catch (error) {
    console.error("SOUL MEMORY ERROR:", error);
    return NextResponse.json({ error: "Unable to load soul memory" }, { status: 500 });
  }
}
