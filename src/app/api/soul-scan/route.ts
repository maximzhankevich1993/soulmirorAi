import { NextResponse } from "next/server";

import {
  YANDEX_API_KEY,
  YANDEX_API_URL,
  YANDEX_FOLDER_ID,
} from "@/lib/yandex";

import { prisma } from "@/lib/prisma";

/**
 * POST - создаёт Soul Scan
 */
export async function POST(req: Request) {
  try {
    const body = await req.json();

    const text = body.text?.trim();

    if (!text) {
      return NextResponse.json(
        { error: "Text is required" },
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
          temperature: 0.8,
          maxTokens: 1200,
        },
        messages: [
          {
            role: "system",
            text: `
You are SoulMirror AI.

Return ONLY valid JSON:

{
"archetype": "",
"emotion": "",
"shadow": "",
"reflection": "",
"insight": ""
}

Insight must be 3–6 paragraphs, deep, emotional, no lists, no markdown.
Return JSON only.
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
      throw new Error("No response from YandexGPT");
    }

    const cleaned = content
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const parsed = JSON.parse(cleaned);

    const result = {
      archetype: parsed.archetype || "The Seeker",
      emotion: parsed.emotion || "Reflection",
      shadow: parsed.shadow || "",
      reflection:
        parsed.reflection ||
        "What part of yourself needs attention right now?",
      insight: parsed.insight || "",
    };

    await prisma.soulScan.create({
      data: {
        input: text,
        archetype: result.archetype,
        emotion: result.emotion,
        insight: result.insight,
      },
    });

    return NextResponse.json(result);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Soul Scan failed" },
      { status: 500 }
    );
  }
}

/**
 * GET - история Soul Scan
 */
export async function GET() {
  try {
    const scans = await prisma.soulScan.findMany({
      orderBy: {
        createdAt: "desc",
      },
      select: {
        id: true,
        input: true,
        archetype: true,
        emotion: true,
        insight: true,
        createdAt: true,
      },
      take: 50,
    });

    return NextResponse.json(scans);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to load history" },
      { status: 500 }
    );
  }
}