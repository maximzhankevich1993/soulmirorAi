import { NextResponse } from "next/server";

import {
  YANDEX_API_KEY,
  YANDEX_API_URL,
  YANDEX_FOLDER_ID,
} from "@/lib/yandex";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const text = body.text?.trim();

    if (!text) {
      return NextResponse.json(
        {
          error: "Text is required",
        },
        {
          status: 400,
        }
      );
    }

    const response = await fetch(
      YANDEX_API_URL,
      {
        method: "POST",
        headers: {
          Authorization: `Api-Key ${YANDEX_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          modelUri: `gpt://${YANDEX_FOLDER_ID}/yandexgpt-lite/latest`,
          completionOptions: {
            stream: false,
            temperature: 0.6,
            maxTokens: 600,
          },
          messages: [
            {
              role: "system",
              text: `
You are SoulMirror AI.

Analyze the user's psychological state.

Return ONLY valid JSON.

{
  "archetype": "The Seeker",
  "emotion": "Curiosity",
  "insight": "Short psychological insight"
}

Available archetypes:
- The Seeker
- The Sage
- The Creator
- The Explorer
- The Visionary
- The Guardian

Do not use markdown.
Do not use code blocks.
Return JSON only.
              `,
            },
            {
              role: "user",
              text,
            },
          ],
        }),
      }
    );

    const data = await response.json();

    const content =
      data?.result?.alternatives?.[0]?.message?.text;

    if (!content) {
      throw new Error("No response from YandexGPT");
    }

    try {
      const cleaned = content
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim();

      const parsed = JSON.parse(cleaned);

      return NextResponse.json({
        archetype:
          parsed.archetype || "The Seeker",
        emotion:
          parsed.emotion || "Reflection",
        insight:
          parsed.insight ||
          "No insight generated.",
      });
    } catch {
      return NextResponse.json({
        archetype: "The Seeker",
        emotion: "Reflection",
        insight: content,
      });
    }
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Soul Scan failed",
      },
      {
        status: 500,
      }
    );
  }
}