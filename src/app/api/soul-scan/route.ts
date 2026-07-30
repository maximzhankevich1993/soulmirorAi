import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

import {
  YANDEX_API_KEY,
  YANDEX_API_URL,
  YANDEX_FOLDER_ID,
} from "@/lib/yandex";

import {
  checkAccess,
  increaseUsage,
} from "@/lib/usage";

import {
  getUser,
} from "@/lib/getUser";



const FREE_LIMIT = 1;




export async function POST(
  req:Request
){


  try {



    // 1. AUTH

    const user =
      await getUser();



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






    // 2. ACCESS CHECK


    const access =
      await checkAccess(
        "soulScan"
      );





    if(!access.allowed){


      return NextResponse.json(

        {
          error:
          access.reason

        },

        {
          status:403
        }

      );

    }







    // 3. INPUT


    const body =
      await req.json();



    const text =
      body.text
      ?.trim();





    if(!text){


      return NextResponse.json(

        {
          error:
          "Text required"

        },

        {
          status:400
        }

      );

    }





    if(text.length > 5000){


      return NextResponse.json(

        {
          error:
          "Text too long"

        },

        {
          status:400
        }

      );

    }







    // 4. AI


    const response =
      await fetch(

        YANDEX_API_URL,

        {

          method:"POST",


          headers:{


            Authorization:
            `Api-Key ${YANDEX_API_KEY}`,


            "Content-Type":
            "application/json",

          },



          body:JSON.stringify({


            modelUri:
            `gpt://${YANDEX_FOLDER_ID}/yandexgpt-lite/latest`,


            completionOptions:{


              stream:false,


              temperature:0.7,


              maxTokens:1200,

            },


            messages:[


              {

                role:"system",

                text:`

Return ONLY JSON.

{
"archetype":"",
"emotion":"",
"shadow":"",
"reflection":"",
"insight":""
}

`

              },


              {

                role:"user",

                text

              }


            ]

          })

        }

      );







    const data =
      await response.json();




    const content =
      data?.result
      ?.alternatives?.[0]
      ?.message
      ?.text;





    if(!content){


      throw new Error(
        "Empty AI response"
      );

    }







    const clean =
      content
      .replace(
        /```json/g,
        ""
      )
      .replace(
        /```/g,
        ""
      )
      .trim();






    const parsed =
      JSON.parse(clean);







    const result = {


      archetype:
      parsed.archetype ||
      "Explorer",



      emotion:
      parsed.emotion ||
      "Calm",



      shadow:
      parsed.shadow ||
      "",



      reflection:
      parsed.reflection ||
      "",



      insight:
      parsed.insight ||
      "",


    };







    // 5. SAVE


    await prisma.soulScan.create({

      data:{


        userId:user.id,


        input:text,


        archetype:
        result.archetype,


        emotion:
        result.emotion,


        insight:
        result.insight,


      }

    });







    await increaseUsage(

      user.id,

      "soulScan"

    );







    return NextResponse.json(
      result
    );




  }

  catch(error:any){



    console.error(
      "SOUL SCAN ERROR:",
      error
    );



    return NextResponse.json(

      {

        error:
        "Soul scan failed"

      },

      {

        status:500

      }

    );


  }


}