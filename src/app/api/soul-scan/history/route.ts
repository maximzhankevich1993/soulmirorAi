import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const scans = await prisma.soulScan.findMany({
      orderBy: {
        createdAt: "desc",
      },
      select: {
        id: true,
        input: true,
        archetype: true,
        emotion: true,
        insight: true,
        createdAt: true,
      },
      take: 20,
    });

    return NextResponse.json(scans);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Failed to load history",
      },
      {
        status: 500,
      }
    );
  }
}