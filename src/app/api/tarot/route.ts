import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import {
  YANDEX_API_KEY,
  YANDEX_API_URL,
  YANDEX_FOLDER_ID,
} from "@/lib/yandex";

export async function POST() {
  try {
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
  "card": "",
  "meaning": "",
  "guidance": ""
}

Rules:
- No markdown
- No explanation
- JSON only
            `,
          },
        ],
      }),
    });

    const data = await response.json();

    const content = data?.result?.alternatives?.[0]?.message?.text;

    if (!content) {
      throw new Error("No response from YandexGPT");
    }

    const cleaned = content
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const parsed = JSON.parse(cleaned);

    const result = {
      card: parsed.card || "Unknown Card",
      meaning: parsed.meaning || "No meaning provided",
      guidance: parsed.guidance || "Trust your intuition",
    };

    await prisma.tarotReading.create({
      data: result,
    });

    return NextResponse.json(result);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Tarot reading failed" },
      { status: 500 }
    );
  }
}