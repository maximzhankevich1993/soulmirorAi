import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const dreams = await prisma.dreamAnalysis.findMany({
      orderBy: {
        createdAt: "desc",
      },
      take: 20,
    });

    return NextResponse.json(dreams);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Failed to load dream history",
      },
      {
        status: 500,
      }
    );
  }
}