import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import {
  YANDEX_API_KEY,
  YANDEX_API_URL,
  YANDEX_FOLDER_ID,
} from "@/lib/yandex";

import { getUser } from "@/lib/getUser";

const FREE_LIMIT = 1;

export async function POST(req: Request) {
  try {
    // 👤 1. получаем пользователя
    const user = await getUser();

    if (!user) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    // 📊 2. проверяем usage
    const usage = await prisma.userUsage.findFirst({
      where: {
        userId: user.id,
      },
    });

    if (usage && usage.soulScan >= FREE_LIMIT) {
      return NextResponse.json(
        { error: "Free limit reached" },
        { status: 403 }
      );
    }

    // 📥 3. читаем input
    const body = await req.json();
    const text = body.text?.trim();

    if (!text) {
      return NextResponse.json(
        { error: "Text is required" },
        { status: 400 }
      );
    }

    // 🧠 4. вызываем AI
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
You are Soul AI.

Return ONLY valid JSON:
{
  "archetype": "",
  "emotion": "",
  "shadow": "",
  "reflection": "",
  "insight": ""
}
            `,
          },
          {
            role: "user",
            text,
          },
        ],
      }),
    });

    const data = await response.json();

    const content =
      data?.result?.alternatives?.[0]?.message?.text;

    if (!content) {
      throw new Error("Empty AI response");
    }

    const parsed = JSON.parse(
      content.replace(/```json/g, "").replace(/```/g, "").trim()
    );

    const result = {
      archetype: parsed.archetype || "Unknown",
      emotion: parsed.emotion || "Neutral",
      shadow: parsed.shadow || "",
      reflection: parsed.reflection || "",
      insight: parsed.insight || "",
    };

    // 💾 5. сохраняем результат
    await prisma.soulScan.create({
      data: {
        userId: user.id,
        input: text,
        archetype: result.archetype,
        emotion: result.emotion,
        insight: result.insight,
      },
    });

    // 📈 6. увеличиваем usage
    await prisma.userUsage.upsert({
      where: {
        userId: user.id,
      },
      update: {
        soulScan: {
          increment: 1,
        },
      },
      create: {
        userId: user.id,
        soulScan: 1,
        dream: 0,
        tarot: 0,
      },
    });

    // 📤 7. ответ фронту
    return NextResponse.json(result);
  } catch (error: any) {
    console.error("SOUL SCAN ERROR:", error);

    return NextResponse.json(
      {
        error: error?.message || "Soul scan failed",
      },
      { status: 500 }
    );
  }
}