import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getUser } from "@/lib/getUser";

export async function GET() {
  try {
    // 👤 получаем текущего пользователя
    const user = await getUser();

    if (!user) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    // 📅 берем сегодня (сброс по дню)
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // 📊 ищем usage за сегодня
    const usage = await prisma.userUsage.findFirst({
      where: {
        userId: user.id,
        date: {
          gte: today,
        },
      },
    });

    // если нет записей — возвращаем нули
    if (!usage) {
      return NextResponse.json({
        soulScan: 0,
        dream: 0,
        tarot: 0,
      });
    }

    // 📤 возвращаем usage
    return NextResponse.json({
      soulScan: usage.soulScan,
      dream: usage.dream,
      tarot: usage.tarot,
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