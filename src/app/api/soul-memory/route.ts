import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getActor } from "@/lib/getActor";


export async function GET() {
  try {

    const actor = await getActor();


    if (actor.type !== "user") {
      return NextResponse.json(null);
    }


    const latestSoul =
      await prisma.soulScan.findFirst({
        where: {
          userId: actor.userId,
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
        latestSoul.archetype,

      emotion:
        latestSoul.emotion,

      insight:
        latestSoul.insight,

      shadow:
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