import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const scan = await prisma.soulScan.create({
      data: {
        input: body.input,
        archetype: body.archetype,
        emotion: body.emotion,
        insight: body.insight,
      },
    });

    return NextResponse.json(scan);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Failed to save scan",
      },
      {
        status: 500,
      }
    );
  }
}