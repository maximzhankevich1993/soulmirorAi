import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const dreams = await prisma.dreamAnalysis.findMany({
      orderBy: {
        createdAt: "desc",
      },
      select: {
        id: true,
        dream: true,
        summary: true,
        emotion: true,
        interpretation: true,
        createdAt: true,
      },
      take: 20,
    });

    return NextResponse.json(dreams);
  }