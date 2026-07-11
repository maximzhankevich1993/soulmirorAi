import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getActor } from "@/lib/getActor";


export async function GET() {
  try {

    const actor = await getActor();


    if (actor.type !== "user") {
      return NextResponse.json(null);
    }


    const userId = actor.userId;


    const latestSoul =
      await prisma.soulScan.findFirst({
        where: {
          userId,
        },
        orderBy: {
          createdAt: "desc",
        },
      });


    if (!latestSoul) {

      return NextResponse.json({
        archetype: "Unknown",
        emotion: "Calm",
        insight: "",
        shadow: "",
      });

    }


    return NextResponse.json({

      archetype:
        latestSoul.archetype ??
        "Unknown",

      emotion:
        latestSoul.emotion ??
        "Calm",

      insight:
        latestSoul.insight ??
        "",

      shadow:
        latestSoul.shadow ??
        "",

    });


  } catch(error) {

    console.error(
      "SOUL MEMORY ERROR:",
      error
    );


    return NextResponse.json(
      {
        error:
          "Unable to load soul memory",
      },
      {
        status:500,
      }
    );

  }
}