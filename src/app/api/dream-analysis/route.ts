import { NextResponse } from "next/server";

import {
  YANDEX_API_KEY,
  YANDEX_API_URL,
  YANDEX_FOLDER_ID,
} from "@/lib/yandex";

import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const dream = body.dream?.trim();

    if (!dream) {
      return NextResponse.json(
        {
          error: "Dream is required",
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
            temperature: 0.8,
            maxTokens: 1200,
          },
          messages: [
            {
              role: "system",
              text: `
You are SoulMirror Dream Interpreter.

Analyze dreams using:

- symbolism
- archetypes
- subconscious themes
- emotional patterns

Return ONLY valid JSON.

{
  "summary": "",
  "symbols": [],
  "emotion": "",
  "interpretation": ""
}

Rules:

summary:
short overview

symbols:
3-8 important dream symbols

emotion:
dominant emotional tone

interpretation:
4-8 paragraphs
minimum 400 words

Do not use markdown.
Do not use code blocks.

Return JSON only.
              `,
            },
            {
              role: "user",
              text: dream,
            },
          ],
        }),
      }
    );

    const data = await response.json();

    const content =
      data?.result?.alternatives?.[0]?.message?.text;

    if (!content) {
      throw new Error("No response");
    }

    try {
      const cleaned = content
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim();

      const parsed = JSON.parse(cleaned);

      const result = {
        summary:
          parsed.summary ||
          "Dream interpretation generated.",

        symbols:
          parsed.symbols || [],

        emotion:
          parsed.emotion ||
          "Curiosity",

        interpretation:
          parsed.interpretation ||
          "No interpretation generated.",
      };

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
    } catch {
      const result = {
        summary:
          "Dream interpretation generated.",

        symbols: [],

        emotion:
          "Reflection",

        interpretation:
          content,
      };

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
    }
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Dream analysis failed",
      },
      {
        status: 500,
      }
    );
  }
}