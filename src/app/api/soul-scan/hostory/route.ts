import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const history = await prisma.soulScan.findMany({
      orderBy: {
        createdAt: "desc",
      },
      take: 50,
    });

    return NextResponse.json(history);
  } catch (error) {
    console.error("HISTORY ERROR:", error);

    return NextResponse.json(
      { error: "Failed to load history" },
      { status: 500 }
    );
  }
}