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
      .from("UserUsage")
      .select("soulScan,dream,tarot")
      .eq("userId", user.id)
      .maybeSingle();

    if (error) {
      console.error("USAGE API DB ERROR:", error.message);
      throw new Error("Failed to load usage");
    }

    return NextResponse.json({
      soulScan: Number(data?.soulScan ?? 0),
      dream: Number(data?.dream ?? 0),
      tarot: Number(data?.tarot ?? 0),
    });
  } catch (error) {
    console.error("USAGE API ERROR:", error);
    return NextResponse.json(
      { error: "Failed to load usage" },
      { status: 500 }
    );
  }
}
