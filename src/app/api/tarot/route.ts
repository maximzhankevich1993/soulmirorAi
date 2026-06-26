import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import {
  YANDEX_API_KEY,
  YANDEX_API_URL,
  YANDEX_FOLDER_ID,
} from "@/lib/yandex";

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
  return tarotCards[Math.floor(Math.random() * tarotCards.length)];
}

export async function POST() {
  try {
    const card = getRandomCard();

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

You interpret tarot cards.

Return ONLY valid JSON:

{
  "meaning": "",
  "guidance": ""
}

No markdown. No explanation.
            `,
          },
          {
            role: "user",
            text: `Card: ${card}`,
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
      card,
      meaning: parsed.meaning || "Mystical energy surrounds this card.",
      guidance: parsed.guidance || "Trust your intuition.",
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