import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getActor } from "@/lib/getActor";


export async function GET() {

  try {

    const actor = await getActor();


    if (actor.type !== "user") {

      return NextResponse.json(
        {
          items: [],
        }
      );

    }


    const userId = actor.userId;



    const [
      soulScans,
      dreams,
      tarot,
    ] = await Promise.all([

      prisma.soulScan.findMany({
        where: {
          userId,
        },
        orderBy: {
          createdAt: "desc",
        },
        take: 20,
      }),


      prisma.dreamAnalysis.findMany({
        where: {
          userId,
        },
        orderBy: {
          createdAt: "desc",
        },
        take: 20,
      }),


      prisma.tarotReading.findMany({
        where: {
          userId,
        },
        orderBy: {
          createdAt: "desc",
        },
        take: 20,
      }),

    ]);




    const items = [

      ...soulScans.map((item)=>({

        type:
          "soul" as const,

        title:
          item.archetype ||
          "Soul Scan",

        description:
          item.insight ||
          item.reflection ||
          "",

        date:
          item.createdAt,

      })),


      ...dreams.map((item)=>({

        type:
          "dream" as const,

        title:
          "Dream Analysis",

        description:
          item.summary,

        date:
          item.createdAt,

      })),


      ...tarot.map((item)=>({

        type:
          "tarot" as const,

        title:
          item.card,

        description:
          item.meaning,

        date:
          item.createdAt,

      })),


    ];



    items.sort(
      (a,b)=>
        b.date.getTime()
        -
        a.date.getTime()
    );



    return NextResponse.json({
      items,
    });



  } catch(error){

    console.error(
      "HISTORY ERROR:",
      error
    );


    return NextResponse.json(
      {
        items: [],
      },
      {
        status:500,
      }
    );

  }

}