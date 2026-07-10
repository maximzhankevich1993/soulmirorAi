import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import {
  YANDEX_API_KEY,
  YANDEX_API_URL,
  YANDEX_FOLDER_ID,
} from "@/lib/yandex";

import { checkAccess, increaseUsage } from "@/lib/usage";
import { getUser } from "@/lib/getUser";


/**
 * CHECK LIMIT
 */


/**
 * INCREMENT USAGE
 */


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

const user = await getUser();

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
    if (user) {
  await prisma.dreamAnalysis.create({
    data: {
      userId: user.id,
      dream,
      summary: result.summary,
      emotion: result.emotion,
      interpretation: result.interpretation,
    },
  });

  await increaseUsage(user.id, "dream");
}

    // 📊 INCREMENT USAGE (only free)
    

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