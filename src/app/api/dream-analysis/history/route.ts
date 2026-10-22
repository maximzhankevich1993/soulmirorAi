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
      .from("DreamAnalysis")
      .select("id,dream,summary,emotion,interpretation,createdAt")
      .eq("userId", user.id)
      .order("createdAt", { ascending: false })
      .limit(20);

    if (error) {
      console.error("DREAM HISTORY DB ERROR:", error.message);
      throw new Error("Failed to load dream history");
    }

    return NextResponse.json(data ?? []);
  } catch (error) {
    console.error("DREAM HISTORY ERROR:", error);
    return NextResponse.json({ error: "Failed to load dream history" }, { status: 500 });
  }
}
