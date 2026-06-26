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
            text: `Return ONLY valid JSON:
{
  "summary": "",
  "symbols": [],
  "emotion": "",
  "interpretation": ""
}`,
          },
          { role: "user", text: dream },
        ],
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`Yandex API error: ${errText}`);
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
        summary: "Generated interpretation",
        symbols: [],
        emotion: "Unknown",
        interpretation: content,
      };
    }

    const result = {
      summary: parsed.summary ?? "Generated interpretation",
      symbols: parsed.symbols ?? [],
      emotion: parsed.emotion ?? "Reflection",
      interpretation: parsed.interpretation ?? "",
    };

    // ⚠️ Prisma SAFE GUARD
    if (prisma?.dreamAnalysis) {
      await prisma.dreamAnalysis.create({
        data: {
          dream,
          summary: result.summary,
          symbols: result.symbols,
          emotion: result.emotion,
          interpretation: result.interpretation,
        },
      });
    }

    return NextResponse.json(result);
  } catch (error: any) {
    console.error("DREAM ANALYSIS ERROR:", error);

    return NextResponse.json(
      {
        error: error?.message || "Dream analysis failed",
      },
      { status: 500 }
    );
  }
}