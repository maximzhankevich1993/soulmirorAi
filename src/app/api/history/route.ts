import { NextResponse } from "next/server";

import { prisma } from "../../../lib/prisma";
import { createClient } from "../../../lib/supabase/server";

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

    const [soulScans, dreamAnalyses, tarotReadings] =
      await Promise.all([
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

    const history = [
      ...soulScans.map((item) => ({
        id: item.id,
        type: "soul-scan" as const,
        title: item.archetype || "Soul Scan",
        description:
          item.insight || "Soul analysis completed.",
        date: item.createdAt,
      })),

      ...dreamAnalyses.map((item) => ({
        id: item.id,
        type: "dream-analysis" as const,
        title: "Dream Analysis",
        description:
          item.interpretation ||
          item.summary ||
          "Dream analysis completed.",
        date: item.createdAt,
      })),

      ...tarotReadings.map((item) => ({
        id: item.id,
        type: "tarot" as const,
        title: item.card || "Tarot Reading",
        description:
          item.guidance ||
          item.meaning ||
          "Tarot reading completed.",
        date: item.createdAt,
      })),
    ].sort(
      (a, b) =>
        new Date(b.date).getTime() -
        new Date(a.date).getTime()
    );

    return NextResponse.json(history);
  } catch (error) {
    console.error("HISTORY API ERROR:", error);

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