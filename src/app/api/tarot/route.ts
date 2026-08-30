import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

import {
  YANDEX_API_KEY,
  YANDEX_API_URL,
  YANDEX_FOLDER_ID,
} from "@/lib/yandex";

import { getActor } from "@/lib/getActor";

import {
  checkAccess,
  increaseUsage,
} from "@/lib/usage";

const tarotCards = [
  "The Fool",
  "The Magician",
  "The High Priestess",
  "The Empress",
  "The Emperor",
  "The Lovers",
  "The Chariot",
  "Strength",
  "The Hermit",
  "Wheel of Fortune",
  "Justice",
  "The Hanged Man",
  "Death",
  "Temperance",
  "The Devil",
  "The Tower",
  "The Star",
  "The Moon",
  "The Sun",
  "Judgement",
  "The World",
];

function getRandomCard() {
  return tarotCards[
    Math.floor(Math.random() * tarotCards.length)
  ];
}

export async function POST() {
  try {
    // =========================================
    // ACTOR
    // Registered user OR guest
    // =========================================

    const actor = await getActor();

    // =========================================
    // ACCESS
    // 2 lifetime free uses for Tarot
    // Works for guests and registered users
    // =========================================

    const access = await checkAccess("tarot");

    if (!access.allowed) {
      return NextResponse.json(
        {
          error:
            access.reason || "FREE_LIMIT_REACHED",

          remaining: 0,

          plan: access.plan,

          guest: access.guest,
        },
        {
          status: 403,
        }
      );
    }

    // =========================================
    // RANDOM CARD
    // =========================================

    const card = getRandomCard();

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
          modelUri:
            `gpt://${YANDEX_FOLDER_ID}/yandexgpt-lite/latest`,

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

Return ONLY valid JSON.

{
  "meaning": "",
  "guidance": ""
}

No markdown.
No explanations outside JSON.
`,
            },

            {
              role: "user",

              text: `Card: ${card}`,
            },
          ],
        }),
      }
    );

    // =========================================
    // AI ERROR
    // =========================================

    if (!response.ok) {
      const errorText = await response.text();

      console.error(
        "YANDEX TAROT ERROR:",
        response.status,
        errorText
      );

      throw new Error(
        "Yandex AI request failed"
      );
    }

    // =========================================
    // PARSE AI RESPONSE
    // =========================================

    const data = await response.json();

    const content =
      data?.result?.alternatives?.[0]?.message?.text;

    if (!content) {
      throw new Error(
        "Empty AI response"
      );
    }

    const cleaned = content
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const parsed = JSON.parse(cleaned);

    // =========================================
    // RESULT
    // =========================================

    const result = {
      card,

      meaning:
        parsed.meaning ||
        "Mystical energy surrounds this card.",

      guidance:
        parsed.guidance ||
        "Trust your intuition.",
    };

    // =========================================
    // SAVE READING
    //
    // Registered user:
    //   userId
    //
    // Guest:
    //   guestId
    //
    // Prisma schema already supports both.
    // =========================================

    if (actor.type === "user") {
      await prisma.tarotReading.create({
        data: {
          userId: actor.userId,

          card: result.card,

          meaning: result.meaning,

          guidance: result.guidance,
        },
      });
    } else {
      await prisma.tarotReading.create({
        data: {
          guestId: actor.guestId,

          card: result.card,

          meaning: result.meaning,

          guidance: result.guidance,
        },
      });
    }

    // =========================================
    // INCREASE USAGE
    //
    // Registered user:
    //   userId
    //
    // Guest:
    //   guestId
    // =========================================

    if (actor.type === "user") {
      await increaseUsage(
        actor.userId,
        "tarot"
      );
    } else {
      await increaseUsage(
        actor.guestId,
        "tarot"
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

        guest:
          actor.type === "guest",
      },
    });
  } catch (error) {
    console.error(
      "TAROT ERROR:",
      error
    );

    return NextResponse.json(
      {
        error:
          "Tarot reading failed",
      },
      {
        status: 500,
      }
    );
  }
}