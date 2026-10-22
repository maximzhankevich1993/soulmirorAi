import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import {
  YANDEX_API_KEY,
  YANDEX_API_URL,
  YANDEX_FOLDER_ID,
} from "@/lib/yandex";
import { getActor } from "@/lib/getActor";
import {
  checkAccess,
  increaseUsage,
  increaseGuestUsage,
} from "@/lib/usage";

const tarotCards = [
  "The Fool", "The Magician", "The High Priestess", "The Empress", "The Emperor",
  "The Lovers", "The Chariot", "Strength", "The Hermit", "Wheel of Fortune",
  "Justice", "The Hanged Man", "Death", "Temperance", "The Devil", "The Tower",
  "The Star", "The Moon", "The Sun", "Judgement", "The World",
];

function getRandomCard() {
  return tarotCards[Math.floor(Math.random() * tarotCards.length)];
}

export async function POST() {
  try {
    const actor = await getActor();
    const access = await checkAccess("tarot");

    if (!access.allowed) {
      return NextResponse.json(
        { error: access.reason || "FREE_LIMIT_REACHED", remaining: 0, plan: access.plan, guest: access.guest },
        { status: 403 }
      );
    }

    const card = getRandomCard();
    const response = await fetch(YANDEX_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Api-Key ${YANDEX_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        modelUri: `gpt://${YANDEX_FOLDER_ID}/yandexgpt-lite/latest`,
        completionOptions: { stream: false, temperature: 0.8, maxTokens: 800 },
        messages: [
          {
            role: "system",
            text: `You are Tarot AI. Return ONLY valid JSON: {"meaning":"","guidance":""}. No markdown.`,
          },
          { role: "user", text: `Card: ${card}` },
        ],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("YANDEX TAROT ERROR:", response.status, errorText);
      throw new Error("Yandex AI request failed");
    }

    const data = await response.json();
    const content = data?.result?.alternatives?.[0]?.message?.text;
    if (!content) throw new Error("Empty AI response");

    const cleaned = content.replace(/\x60\x60\x60json/g, "").replace(/\x60\x60\x60/g, "").trim();
    const parsed = JSON.parse(cleaned);

    const result = {
      card,
      meaning: typeof parsed.meaning === "string" ? parsed.meaning : "Mystical energy surrounds this card.",
      guidance: typeof parsed.guidance === "string" ? parsed.guidance : "Trust your intuition.",
    };

    const supabase = createAdminClient();
    const now = new Date().toISOString();
    const record = {
      id: crypto.randomUUID(),
      card: result.card,
      meaning: result.meaning,
      guidance: result.guidance,
      createdAt: now,
      ...(actor.type === "user" ? { userId: actor.userId } : { guestId: actor.guestId }),
    };

    const { error } = await supabase.from("TarotReading").insert(record);
    if (error) {
      console.error("TAROT SAVE ERROR:", error.message);
      throw new Error("Failed to save tarot reading");
    }

    if (actor.type === "user") {
      await increaseUsage(actor.userId, "tarot");
    } else {
      await increaseGuestUsage(actor.guestId, "tarot");
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
    console.error("TAROT ERROR:", error);
    return NextResponse.json({ error: "Tarot reading failed" }, { status: 500 });
  }
}
