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
    const { data, error } = await supabase
      .from("SoulScan")
      .select("id,archetype,emotion,insight,createdAt")
      .eq("userId", user.id)
      .order("createdAt", { ascending: false })
      .limit(20);

    if (error) {
      console.error("SOUL SCAN HISTORY DB ERROR:", error.message);
      throw new Error("Failed to load history");
    }

    return NextResponse.json(data ?? []);
  } catch (error) {
    console.error("SOUL SCAN HISTORY ERROR:", error);
    return NextResponse.json({ error: "Failed to load history" }, { status: 500 });
  }
}
