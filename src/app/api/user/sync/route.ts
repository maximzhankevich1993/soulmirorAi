
import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";
import { getUser } from "@/lib/getUser";

export async function POST() {
  try {
    const user = await getUser();

    if (!user) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    if (!user.email) {
      return NextResponse.json(
        { error: "User email is missing" },
        { status: 400 }
      );
    }

    const dbUser = await prisma.user.upsert({
      where: {
        id: user.id,
      },
      update: {
        email: user.email,
      },
      create: {
        id: user.id,
        email: user.email,
      },
    });

    await prisma.userPlan.upsert({
      where: {
        userId: user.id,
      },
      update: {},
      create: {
        userId: user.id,
        plan: "free",
      },
    });

    return NextResponse.json({
      success: true,
      userId: dbUser.id,
    });
  } catch (error) {
    console.error("USER SYNC API ERROR:", error);

    return NextResponse.json(
      {
        error: "Failed to sync user",
      },
      { status: 500 }
    );
  }
}

