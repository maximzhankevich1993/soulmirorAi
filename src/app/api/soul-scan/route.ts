import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import {
  YANDEX_API_KEY,
  YANDEX_API_URL,
  YANDEX_FOLDER_ID,
} from "@/lib/yandex";
import {
  checkAccess,
  increaseUsage,
  increaseGuestUsage,
} from "@/lib/usage";
import { getActor } from "@/lib/getActor";

export async function POST(req: Request) {
  try {
    const actor = await getActor();
    const access = await checkAccess("soulScan");

    if (!access.allowed) {
      return NextResponse.json(
        { error: access.reason || "FREE_LIMIT_REACHED", remaining: 0, plan: access.plan },
        { status: 403 }
      );
    }

    const body = await req.json();
    const text = typeof body?.text === "string" ? body.text.trim() : "";

    if (!text) {
      return NextResponse.json({ error: "Text required" }, { status: 400 });
    }
    if (text.length > 5000) {
      return NextResponse.json({ error: "Text too long" }, { status: 400 });
    }

    const response = await fetch(YANDEX_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Api-Key ${YANDEX_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        modelUri: `gpt://${YANDEX_FOLDER_ID}/yandexgpt-lite/latest`,
        completionOptions: { stream: false, temperature: 0.7, maxTokens: 1200 },
        messages: [
          {
            role: "system",
            text: `Return ONLY valid JSON.
{
  "archetype": "",
  "emotion": "",
  "shadow": "",
  "reflection": "",
  "insight": ""
}`,
          },
          { role: "user", text },
        ],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("YANDEX API ERROR:", response.status, errorText);
      throw new Error("Yandex AI request failed");
    }

    const data = await response.json();
    const content = data?.result?.alternatives?.[0]?.message?.text;
    if (!content) throw new Error("Empty AI response");

    const clean = content.replace(/\x60\x60\x60json/g, "").replace(/\x60\x60\x60/g, "").trim();
    const parsed = JSON.parse(clean);

    const result = {
      archetype: typeof parsed.archetype === "string" ? parsed.archetype : "Explorer",
      emotion: typeof parsed.emotion === "string" ? parsed.emotion : "Calm",
      shadow: typeof parsed.shadow === "string" ? parsed.shadow : "",
      reflection: typeof parsed.reflection === "string" ? parsed.reflection : "",
      insight: typeof parsed.insight === "string" ? parsed.insight : "",
    };

    if (actor.type === "user") {
      const supabase = createAdminClient();
      const { error } = await supabase.from("SoulScan").insert({
        id: crypto.randomUUID(),
        userId: actor.userId,
        input: text,
        archetype: result.archetype,
        emotion: result.emotion,
        insight: result.insight,
        createdAt: new Date().toISOString(),
      });
      if (error) {
        console.error("SOUL SCAN SAVE ERROR:", error.message);
        throw new Error("Failed to save soul scan");
      }
      await increaseUsage(actor.userId, "soulScan");
    } else {
      await increaseGuestUsage(actor.guestId, "soulScan");
    }

    return NextResponse.json({
      ...result,
      usage: {
        remaining: access.plan === "free" ? Math.max(access.remaining - 1, 0) : null,
        plan: access.plan,
        guest: actor.type === "guest",
      },
    });
  } catch (error) {
    console.error("SOUL SCAN ERROR:", error);
    return NextResponse.json({ error: "Soul scan failed" }, { status: 500 });
  }
}
