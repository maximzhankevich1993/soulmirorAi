import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getUser } from "@/lib/getUser";

export async function GET() {
  try {
    const user = await getUser();

    if (!user) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const usage = await prisma.userUsage.findUnique({
      where: {
        userId: user.id,
      },
    });

    return NextResponse.json({
      soulScan: usage?.soulScan ?? 0,
      dream: usage?.dream ?? 0,
      tarot: usage?.tarot ?? 0,
    });
  } catch (error) {
    console.error("USAGE API ERROR:", error);

    return NextResponse.json(
      {
        error: "Failed to load usage",
      },
      { status: 500 }
    );
  }
}