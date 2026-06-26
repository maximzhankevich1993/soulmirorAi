import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import {
  YANDEX_API_KEY,
  YANDEX_API_URL,
  YANDEX_FOLDER_ID,
} from "@/lib/yandex";

export async function POST(req: Request) {
  try {
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
- no extra text
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

    // 🔥 SAFE FALLBACK (как в Soul Scan стиле)
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
          summary: parsed.summary || "Dream interpretation generated.",
          symbols: Array.isArray(parsed.symbols)
            ? parsed.symbols
            : [],
          emotion: parsed.emotion || "Reflection",
          interpretation:
            parsed.interpretation || "",
        };
      } catch {
        // если JSON сломан — просто используем сырой текст
        result = {
          summary: "Dream interpretation generated.",
          symbols: [],
          emotion: "Reflection",
          interpretation: content || "No interpretation available.",
        };
      }
    }

    // 💾 save (safe)
    await prisma.dreamAnalysis.create({
      data: {
        dream,
        summary: result.summary,
        symbols: result.symbols,
        emotion: result.emotion,
        interpretation: result.interpretation,
      },
    });

    return NextResponse.json(result);
  } catch (error) {
    console.error("DREAM API ERROR:", error);

    // 🔥 NEVER FAIL FRONTEND
    return NextResponse.json({
      summary: "Dream interpretation unavailable.",
      symbols: [],
      emotion: "Unknown",
      interpretation:
        "We could not fully analyze this dream, but it still carries meaning within your subconscious.",
    });
  }
}