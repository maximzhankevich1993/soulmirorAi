import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import {
  YANDEX_API_KEY,
  YANDEX_API_URL,
  YANDEX_FOLDER_ID,
} from "@/lib/yandex";
import { getUser } from "@/lib/getUser";
import { getPlanLimits, type PlanType } from "@/lib/plans";

const tarotCards = [
  "The Fool",
  "The Magician",
  "The High Priestess",
  "The Empress",
  "The Emperor",
  "The Lovers",
  "The Chariot",
  "Strength",
  "The Hermit",
  "Wheel of Fortune",
  "Justice",
  "The Hanged Man",
  "Death",
  "Temperance",
  "The Devil",
  "The Tower",
  "The Star",
  "The Moon",
  "The Sun",
  "Judgement",
  "The World",
];

function getRandomCard() {
  return tarotCards[Math.floor(Math.random() * tarotCards.length)];
}

async function checkLimit(userId: string, plan: PlanType) {
  const limits = getPlanLimits(plan);

  if (limits.tarotLimit === Infinity) {
    return { allowed: true };
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const usage = await prisma.userUsage.findFirst({
    where: {
      userId,
      date: {
        gte: today,
      },
    },
  });

  if (!usage) {
    return { allowed: true };
  }

  return {
    allowed: usage.tarot < limits.tarotLimit,
  };
}

async function incrementUsage(userId: string) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  await prisma.userUsage.upsert({
    where: {
      userId_date: {
        userId,
        date: today,
      },
    },
    create: {
      userId,
      date: today,
      tarot: 1,
    },
    update: {
      tarot: {
        increment: 1,
      },
    },
  });
}

export async function POST() {
  try {
    const user = await getUser();

    if (!user) {
      return NextResponse.json(
        {
          error: "Unauthorized",
        },
        {
          status: 401,
        }
      );
    }

    const userId = user.id;

    // Пока всегда Free.
    // После CryptoCloud будем брать тариф из БД.
    const plan: PlanType = "free";

    const limit = await checkLimit(userId, plan);

    if (!limit.allowed) {
      return NextResponse.json(
        {
          error: "Daily limit reached",
        },
        {
          status: 403,
        }
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
        completionOptions: {
          stream: false,
          temperature: 0.8,
          maxTokens: 800,
        },
        messages: [
          {
            role: "system",
            text: `
You are Tarot AI.

Return ONLY valid JSON:

{
  "meaning": "",
  "guidance": ""
}

No markdown. No explanation.
            `,
          },
          {
            role: "user",
            text: `Card: ${card}`,
          },
        ],
      }),
    });

    // ✅ ВАЖНО
    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`Yandex error: ${errText}`);
    }

    const data = await response.json();

    const content =
      data?.result?.alternatives?.[0]?.message?.text;

    if (!content) {
      throw new Error("Empty AI response");
    }

    let parsed;

    try {
      parsed = JSON.parse(
        content.replace(/```json/g, "").replace(/```/g, "").trim()
      );
    } catch {
      parsed = {
        meaning: content,
        guidance: "Trust your intuition.",
      };
    }

    const result = {
      card,
      meaning:
        parsed.meaning || "Mystical energy surrounds this card.",
      guidance: parsed.guidance || "Trust your intuition.",
    };

    // 💾 Save reading
await prisma.tarotReading.create({
  data: {
    userId,
    card: result.card,
    meaning: result.meaning,
    guidance: result.guidance,
  },
});

// 📊 Increment usage
if (plan === "free") {
  await incrementUsage(userId);
}

    return NextResponse.json(result);
  } catch (error: any) {
    console.error("TAROT ERROR:", error);

    return NextResponse.json(
      { error: error?.message || "Tarot reading failed" },
      { status: 500 }
    );
  }
}