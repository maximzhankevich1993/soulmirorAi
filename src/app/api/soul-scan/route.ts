import { NextResponse } from "next/server";

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

    // Временная логика
    // Пока OpenAI не подключен

    const archetypes = [
      {
        archetype: "The Seeker",
        emotion: "Curiosity",
        insight:
          "You are currently navigating uncertainty and searching for deeper meaning.",
      },
      {
        archetype: "The Sage",
        emotion: "Reflection",
        insight:
          "A period of contemplation is helping you uncover hidden truths.",
      },
      {
        archetype: "The Creator",
        emotion: "Inspiration",
        insight:
          "Your subconscious is encouraging expression and creation.",
      },
    ];

    const result =
      archetypes[
        Math.floor(Math.random() * archetypes.length)
      ];

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      {
        error: "Something went wrong",
      },
      {
        status: 500,
      }
    );
  }
}