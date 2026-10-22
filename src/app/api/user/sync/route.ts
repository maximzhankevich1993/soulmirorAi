import { NextResponse } from "next/server";
import { getUser } from "@/lib/getUser";
import { createAdminClient } from "@/lib/supabase/admin";

export async function POST() {
  try {
    const user = await getUser();

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    if (!user.email) {
      return NextResponse.json({ error: "User email is missing" }, { status: 400 });
    }

    const supabase = createAdminClient();

    const { error: userError } = await supabase
      .from("User")
      .upsert(
        { id: user.id, email: user.email },
        { onConflict: "id" }
      );

    if (userError) {
      console.error("USER SYNC DB ERROR:", userError.message);
      throw new Error("Failed to sync user");
    }

    const now = new Date().toISOString();
    const { error: planError } = await supabase
      .from("UserPlan")
      .upsert(
        {
          id: crypto.randomUUID(),
          userId: user.id,
          plan: "free",
          createdAt: now,
          updatedAt: now,
        },
        { onConflict: "userId", ignoreDuplicates: true }
      );

    if (planError) {
      console.error("USER PLAN INIT ERROR:", planError.message);
      throw new Error("Failed to initialize user plan");
    }

    return NextResponse.json({ success: true, userId: user.id });
  } catch (error) {
    console.error("USER SYNC API ERROR:", error);
    return NextResponse.json(
      { error: "Failed to sync user" },
      { status: 500 }
    );
  }
}
