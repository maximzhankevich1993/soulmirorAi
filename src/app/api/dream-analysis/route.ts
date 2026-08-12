import { NextResponse } from "next/server";

import { prisma } from "../../../lib/prisma";

import {
  YANDEX_API_KEY,
  YANDEX_API_URL,
  YANDEX_FOLDER_ID,
} from "../../../lib/yandex";

import {
  checkAccess,
  increaseUsage,
} from "../../../lib/usage";

import { getUser } from "../../../lib/getUser";

export async function POST(req: Request) {
  try {
    // AUTH

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

    // ACCESS

    const access = await checkAccess("dream");

    if (!access.allowed) {
      return NextResponse.json(
        {
          error: access.reason,
        },
        {
          status: 403,
        }
      );
    }

    // INPUT

    const body = await req.json();

    const dream =
      typeof body?.dream === "string"
        ? body.dream.trim()
        : "";

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

    if (dream.length > 5000) {
      return NextResponse.json(
        {
          error: "Dream too long",
        },
        {
          status: 400,
        }
      );
    }

    // AI REQUEST

    const response = await fetch(
      YANDEX_API_URL,
      {
        method: "POST",

        headers: {
          Authorization:
            `Api-Key ${YANDEX_API_KEY}`,

          "Content-Type":
            "application/json",
        },

        body: JSON.stringify({
          modelUri:
            `gpt://${YANDEX_FOLDER_ID}/yandexgpt-lite/latest`,

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

Return ONLY JSON.

{
  "summary": "",
  "symbols": [],
  "emotion": "",
  "interpretation": ""
}

No markdown.
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

    if (!response.ok) {
      const errorText =
        await response.text();

      console.error(
        "YANDEX API ERROR:",
        errorText
      );

      throw new Error(
        "Yandex AI request failed"
      );
    }

    const data =
      await response.json();

    const content =
      data?.result
        ?.alternatives?.[0]
        ?.message?.text;

    if (!content) {
      throw new Error(
        "Empty AI response"
      );
    }

    // CLEAN AI RESPONSE

    const cleaned =
      content
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim();

    const parsed =
      JSON.parse(cleaned);

    // NORMALIZE RESULT

    const result = {
      summary:
        typeof parsed.summary ===
        "string"
          ? parsed.summary
          : "Dream interpretation generated.",

      symbols:
        Array.isArray(parsed.symbols)
          ? parsed.symbols
          : [],

      emotion:
        typeof parsed.emotion ===
        "string"
          ? parsed.emotion
          : "Reflection",

      interpretation:
        typeof parsed.interpretation ===
        "string"
          ? parsed.interpretation
          : "",
    };

    // SAVE TO DATABASE

    await prisma.dreamAnalysis.create({
      data: {
        userId: user.id,

        dream,

        summary:
          result.summary,

        emotion:
          result.emotion,

        interpretation:
          result.interpretation,
      },
    });

    // INCREASE USAGE

    await increaseUsage(
      user.id,
      "dream"
    );

    // RESPONSE

    return NextResponse.json(
      result
    );
  } catch (error) {
    console.error(
      "DREAM API ERROR:",
      error
    );

    return NextResponse.json(
      {
        error:
          "Dream analysis failed",
      },
      {
        status: 500,
      }
    );
  }
}