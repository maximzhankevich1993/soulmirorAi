import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { getActor } from "@/lib/getActor";

export async function POST(req: Request) {
  try {
    const actor = await getActor();
    const body = await req.json();

    const input = typeof body?.input === "string" ? body.input.trim() : "";
    const archetype = typeof body?.archetype === "string" ? body.archetype.trim() : "";
    const emotion = typeof body?.emotion === "string" ? body.emotion.trim() : "";
    const insight = typeof body?.insight === "string" ? body.insight.trim() : "";

    if (!input || !archetype || !emotion || !insight) {
      return NextResponse.json({ error: "Missing required scan fields" }, { status: 400 });
    }
    if (input.length > 5000) {
      return NextResponse.json({ error: "Input too long" }, { status: 400 });
    }

    const supabase = createAdminClient();
    const { data, error } = await supabase
      .from("SoulScan")
      .insert({
        id: crypto.randomUUID(),
        ...(actor.type === "user" ? { userId: actor.userId } : { guestId: actor.guestId }),
        input,
        archetype,
        emotion,
        insight,
        createdAt: new Date().toISOString(),
      })
      .select("id,userId,guestId,input,archetype,emotion,insight,createdAt")
      .single();

    if (error) {
      console.error("SOUL SCAN SAVE DB ERROR:", error.message);
      throw new Error("Failed to save scan");
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("SOUL SCAN SAVE ERROR:", error);
    return NextResponse.json({ error: "Failed to save scan" }, { status: 500 });
  }
}
