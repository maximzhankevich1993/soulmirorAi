import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

import {
  YANDEX_API_KEY,
  YANDEX_API_URL,
  YANDEX_FOLDER_ID,
} from "@/lib/yandex";

import {
  getUser,
} from "@/lib/getUser";

import {
  checkAccess,
  increaseUsage,
} from "@/lib/usage";



const tarotCards = [

  "The Fool",
  "The Magician",
  "The High Priestess",
  "The Empress",
  "The Emperor",
  "The Lovers",
  "The Chariot",
  "Strength",
  "The Hermit",
  "Wheel of Fortune",
  "Justice",
  "The Hanged Man",
  "Death",
  "Temperance",
  "The Devil",
  "The Tower",
  "The Star",
  "The Moon",
  "The Sun",
  "Judgement",
  "The World",

];





function getRandomCard(){

  return tarotCards[
    Math.floor(
      Math.random()
      *
      tarotCards.length
    )
  ];

}







export async function POST(){


  try {



    // AUTH

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






    // ACCESS

    const access =
      await checkAccess(
        "tarot"
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







    const card =
      getRandomCard();








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


              temperature:0.8,


              maxTokens:800,


            },



            messages:[


              {

                role:"system",

                text:`

You are Tarot AI.

Return ONLY JSON:

{
"meaning":"",
"guidance":""
}

No markdown.

`

              },


              {

                role:"user",

                text:
                `Card: ${card}`

              }


            ]


          })

        }

      );







    if(!response.ok){


      throw new Error(
        "AI request failed"
      );


    }








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







    const cleaned =
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
      JSON.parse(
        cleaned
      );







    const result = {


      card,


      meaning:
      parsed.meaning ||
      "Mystical energy surrounds this card.",



      guidance:
      parsed.guidance ||
      "Trust your intuition.",


    };








    // SAVE


    await prisma.tarotReading.create({

      data:{


        userId:user.id,


        card:
        result.card,


        meaning:
        result.meaning,


        guidance:
        result.guidance,


      }

    });








    await increaseUsage(

      user.id,

      "tarot"

    );







    return NextResponse.json(
      result
    );




  }


  catch(error:any){



    console.error(
      "TAROT ERROR:",
      error
    );



    return NextResponse.json(

      {
        error:
        error.message ||
        "Tarot failed"

      },

      {
        status:500
      }

    );


  }


}