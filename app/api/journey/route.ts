import { NextResponse } from "next/server";
import { Prisma } from "@prisma/client";

import { prisma } from "@/lib/prisma";
import { createClient } from "@/lib/supabase/server";

export async function GET() {
  try {
    const supabase = await createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

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

    const userId = user.id;

    const [soul, dreams, tarot] = await Promise.all([
      prisma.soulScan.findMany({
        where: {
          userId,
        },
        orderBy: {
          createdAt: "desc",
        },
        take: 20,
      }),

      prisma.dreamAnalysis.findMany({
        where: {
          userId,
        },
        orderBy: {
          createdAt: "desc",
        },
        take: 20,
      }),

      prisma.tarotReading.findMany({
        where: {
          userId,
        },
        orderBy: {
          createdAt: "desc",
        },
        take: 20,
      }),
    ]);

    const typedSoul: Prisma.SoulScanGetPayload<{}>[] = soul;

    const typedDreams: Prisma.DreamAnalysisGetPayload<{}>[] =
      dreams;

    const typedTarot: Prisma.TarotReadingGetPayload<{}>[] =
      tarot;

    const journey = [
      ...typedSoul.map((item) => ({
        id: item.id,
        type: "soul" as const,
        title: item.archetype || "Soul Scan",
        description:
          item.insight || "Soul analysis completed.",
        createdAt: item.createdAt,
      })),

      ...typedDreams.map((item) => ({
        id: item.id,
        type: "dream" as const,
        title: "Dream Analysis",
        description:
          item.interpretation ||
          item.summary ||
          "Dream interpreted.",
        createdAt: item.createdAt,
      })),

      ...typedTarot.map((item) => ({
        id: item.id,
        type: "tarot" as const,
        title: item.card || "Tarot Reading",
        description:
          item.guidance ||
          item.meaning ||
          "Symbolic guidance generated.",
        createdAt: item.createdAt,
      })),
    ].sort(
      (a, b) =>
        b.createdAt.getTime() -
        a.createdAt.getTime()
    );

    return NextResponse.json(
      journey.map((item) => ({
        id: item.id,
        type: item.type,
        title: item.title,
        description: item.description,
        date: new Intl.DateTimeFormat("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        }).format(item.createdAt),
      }))
    );
  } catch (error) {
    console.error("JOURNEY API ERROR:", error);

    return NextResponse.json(
      {
        error: "Server error",
      },
      {
        status: 500,
      }
    );
  }
}