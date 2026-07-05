import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import {
  YANDEX_API_KEY,
  YANDEX_API_URL,
  YANDEX_FOLDER_ID,
} from "@/lib/yandex";

import { getUser } from "@/lib/getUser";

type PlanType = "free" | "day" | "pro";



/**
 * CHECK LIMIT
 */
async function checkLimit(userId: string, type: "dream") {
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

  if (!usage) return { allowed: true };

  if (usage.dream >= 1) {
    return { allowed: false };
  }

  return { allowed: true };
}

/**
 * INCREMENT USAGE
 */
async function incrementUsage(userId: string, type: "dream") {
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
      dream: 1,
    },
    update: {
      dream: {
        increment: 1,
      },
    },
  });
}

export async function POST(req: Request) {
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

// Пока оставляем бесплатный тариф.
// После интеграции CryptoCloud будем получать
// его из базы данных.
const plan: PlanType = "free";

    // 🚀 FREE LIMIT CHECK (day/pro bypass)
    if (plan === "free") {
      const limit = await checkLimit(userId, "dream");

      if (!limit.allowed) {
        return NextResponse.json(
          {
            error: "Daily limit reached (Free plan)",
          },
          { status: 403 }
        );
      }
    }

    const body = await req.json();
    const dream = body.dream?.trim();

    if (!dream) {
      return NextResponse.json(
        { error: "Dream is required" },
        { status: 400 }
      );
    }

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
          temperature: 0.7,
          maxTokens: 1200,
        },
        messages: [
          {
            role: "system",
            text: `
You are Dream Interpreter AI.

Return ONLY valid JSON:

{
  "summary": "",
  "symbols": [],
  "emotion": "",
  "interpretation": ""
}

Rules:
- symbols must be array of strings
- no markdown
- JSON only
            `,
          },
          {
            role: "user",
            text: dream,
          },
        ],
      }),
    });

    let data;

    try {
      data = await response.json();
    } catch {
      data = null;
    }

    const content =
      data?.result?.alternatives?.[0]?.message?.text;

    let result = {
      summary: "",
      symbols: [] as string[],
      emotion: "",
      interpretation: "",
    };

    if (content) {
      try {
        const cleaned = content
          .replace(/```json/g, "")
          .replace(/```/g, "")
          .trim();

        const parsed = JSON.parse(cleaned);

        result = {
          summary:
            parsed.summary || "Dream interpretation generated.",
          symbols: Array.isArray(parsed.symbols)
            ? parsed.symbols
            : [],
          emotion: parsed.emotion || "Reflection",
          interpretation: parsed.interpretation || "",
        };
      } catch {
        result = {
          summary: "Dream interpretation generated.",
          symbols: [],
          emotion: "Reflection",
          interpretation: content || "",
        };
      }
    }

    // 💾 SAVE RESULT
    await prisma.dreamAnalysis.create({
      data: {
        dream,
        summary: result.summary,
        symbols: result.symbols,
        emotion: result.emotion,
        interpretation: result.interpretation,
      },
    });

    // 📊 INCREMENT USAGE (only free)
    if (plan === "free") {
      await incrementUsage(userId, "dream");
    }

    return NextResponse.json(result);
  } catch (error) {
    console.error("DREAM API ERROR:", error);

    return NextResponse.json(
      {
        summary: "Dream interpretation unavailable.",
        symbols: [],
        emotion: "Unknown",
        interpretation:
          "We could not fully analyze this dream, but it still carries meaning.",
      },
      { status: 200 }
    );
  }
}