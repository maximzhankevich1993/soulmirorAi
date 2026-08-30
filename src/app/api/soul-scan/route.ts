import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

import {
  YANDEX_API_KEY,
  YANDEX_API_URL,
  YANDEX_FOLDER_ID,
} from "@/lib/yandex";

import {
  checkAccess,
  increaseUsage,
} from "@/lib/usage";

import { getActor } from "@/lib/getActor";

export async function POST(req: Request) {
  try {
    // =========================================
    // ACTOR
    // Registered user OR guest
    // =========================================

    const actor = await getActor();

    // =========================================
    // ACCESS CHECK
    // 2 free uses per tool
    // Lifetime, not daily
    // =========================================

    const access = await checkAccess("soulScan");

    if (!access.allowed) {
      return NextResponse.json(
        {
          error: access.reason || "FREE_LIMIT_REACHED",
          remaining: 0,
          plan: access.plan,
        },
        {
          status: 403,
        }
      );
    }

    // =========================================
    // INPUT
    // =========================================

    const body = await req.json();

    const text = body.text?.trim();

    if (!text) {
      return NextResponse.json(
        {
          error: "Text required",
        },
        {
          status: 400,
        }
      );
    }

    if (text.length > 5000) {
      return NextResponse.json(
        {
          error: "Text too long",
        },
        {
          status: 400,
        }
      );
    }

    // =========================================
    // AI REQUEST
    // =========================================

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
            temperature: 0.7,
            maxTokens: 1200,
          },

          messages: [
            {
              role: "system",

              text: `
Return ONLY valid JSON.

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
      }
    );

    if (!response.ok) {
      const errorText = await response.text();

      console.error(
        "YANDEX API ERROR:",
        response.status,
        errorText
      );

      throw new Error("Yandex AI request failed");
    }

    const data = await response.json();

    const content =
      data?.result?.alternatives?.[0]?.message?.text;

    if (!content) {
      throw new Error("Empty AI response");
    }

    // =========================================
    // CLEAN AI RESPONSE
    // =========================================

    const clean = content
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const parsed = JSON.parse(clean);

    // =========================================
    // RESULT
    // =========================================

    const result = {
      archetype:
        parsed.archetype || "Explorer",

      emotion:
        parsed.emotion || "Calm",

      shadow:
        parsed.shadow || "",

      reflection:
        parsed.reflection || "",

      insight:
        parsed.insight || "",
    };

    // =========================================
    // SAVE FOR REGISTERED USER
    // =========================================

    if (actor.type === "user") {
      await prisma.soulScan.create({
        data: {
          userId: actor.userId,

          input: text,

          archetype:
            result.archetype,

          emotion:
            result.emotion,

          insight:
            result.insight,
        },
      });
    }

    // =========================================
    // INCREASE USAGE
    // =========================================

    if (actor.type === "user") {
      await increaseUsage(
        actor.userId,
        "soulScan"
      );
    } else {
      await increaseUsage(
        actor.guestId,
        "soulScan"
      );
    }

    // =========================================
    // RESPONSE
    // =========================================

    return NextResponse.json({
      ...result,

      usage: {
        remaining:
          access.plan === "free"
            ? Math.max(
                access.remaining - 1,
                0
              )
            : null,

        plan: access.plan,

        guest: actor.type === "guest",
      },
    });
  } catch (error) {
    console.error(
      "SOUL SCAN ERROR:",
      error
    );

    return NextResponse.json(
      {
        error: "Soul scan failed",
      },
      {
        status: 500,
      }
    );
  }
}