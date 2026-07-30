import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

import { createClient } from "@/lib/supabase/server";



export async function GET() {


  try {


    const supabase =
      await createClient();



    const {

      data:{
        user

      }

    } =
    await supabase.auth.getUser();





    if(!user){


      return NextResponse.json(

        {
          error:
          "Unauthorized"

        },

        {
          status:401
        }

      );

    }






    const userId =
      user.id;







    const [

      soul,

      dreams,

      tarot,

    ] = await Promise.all([





      prisma.soulScan.findMany({

        where:{

          userId,

        },

        orderBy:{

          createdAt:"desc",

        },

        take:20,

      }),





      prisma.dreamAnalysis.findMany({

        where:{

          userId,

        },

        orderBy:{

          createdAt:"desc",

        },

        take:20,

      }),





      prisma.tarotReading.findMany({

        where:{

          userId,

        },

        orderBy:{

          createdAt:"desc",

        },

        take:20,

      }),



    ]);









    const journey = [



      ...soul.map((item)=>({

        id:item.id,

        type:"soul" as const,

        title:
          item.archetype ||
          "Soul Scan",

        description:
          item.insight ||
          item.reflection ||
          "Soul analysis completed.",

        createdAt:item.createdAt,

      })),





      ...dreams.map((item)=>({

        id:item.id,

        type:"dream" as const,

        title:
          item.title ||
          "Dream Analysis",

        description:
          item.analysis ||
          item.insight ||
          "Dream interpreted.",

        createdAt:item.createdAt,

      })),





      ...tarot.map((item)=>({

        id:item.id,

        type:"tarot" as const,

        title:
          item.card ||
          "Tarot Reading",

        description:
          item.interpretation ||
          item.guidance ||
          "Symbolic guidance generated.",

        createdAt:item.createdAt,

      })),


    ]
    .sort(

      (a,b)=>

        new Date(
          b.createdAt
        ).getTime()

        -

        new Date(
          a.createdAt
        ).getTime()

    );









    return NextResponse.json(

      journey.map(item=>({


        id:item.id,

        type:item.type,

        title:item.title,

        description:item.description,

        date:
          new Intl.DateTimeFormat(
            "en-US",
            {
              month:"short",
              day:"numeric",
              year:"numeric",
            }
          )
          .format(
            new Date(
              item.createdAt
            )
          ),


      }))

    );





  }


  catch(error){


    console.error(
      "HISTORY API ERROR:",
      error
    );



    return NextResponse.json(

      {
        error:
        "Server error"

      },

      {
        status:500
      }

    );


  }


}