"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, MoonStar } from "lucide-react";


interface TarotResult {
  card: string;
  meaning: string;
  guidance: string;
}


export function TarotConsole() {

  const [loading, setLoading] =
    useState(false);

  const [result, setResult] =
    useState<TarotResult | null>(null);


  async function drawCard() {

    try {

      setLoading(true);


      const response =
        await fetch(
          "/api/tarot",
          {
            method: "POST",
          }
        );


      if (!response.ok) {
        throw new Error(
          "Tarot failed"
        );
      }


      const data =
        await response.json();


      setResult(data);


    } catch(error){

      console.error(
        "TAROT ERROR",
        error
      );

    } finally {

      setLoading(false);

    }

  }


  return (

    <section className="mx-auto mt-24 w-full max-w-5xl px-6">


      <div className="
      rounded-[40px]
      border
      border-white/10
      bg-white/[0.03]
      p-8
      backdrop-blur-3xl
      ">


        <div className="flex items-center gap-4 mb-8">


          <div className="
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-2xl
          bg-[#D6B25E]/10
          ">

            <MoonStar
              className="text-[#D6B25E]"
              size={28}
            />

          </div>


          <div>

            <p className="
            text-xs
            uppercase
            tracking-[0.4em]
            text-[#D6B25E]
            ">

              Tarot Reflection

            </p>


            <h2 className="
            text-3xl
            text-[#F4F1EA]
            ">

              Draw your card

            </h2>

          </div>


        </div>



        {!result && (

          <motion.button

            whileHover={{
              scale:1.03
            }}

            whileTap={{
              scale:.97
            }}

            onClick={drawCard}

            disabled={loading}

            className="
            flex
            w-full
            items-center
            justify-center
            gap-3
            rounded-full
            bg-[#D6B25E]
            py-5
            font-semibold
            text-black
            disabled:opacity-50
            "

          >

            {loading
              ? "Connecting..."
              : "Draw Tarot Card"
            }

            <Sparkles size={20}/>

          </motion.button>

        )}



        {result && (

          <motion.div

            initial={{
              opacity:0,
              scale:.95
            }}

            animate={{
              opacity:1,
              scale:1
            }}

            className="
            rounded-3xl
            border
            border-[#D6B25E]/20
            bg-black/20
            p-8
            text-center
            "

          >

            <p className="
            text-xs
            uppercase
            tracking-[0.5em]
            text-[#D6B25E]
            ">

              Your Card

            </p>


            <h3 className="
            mt-4
            text-4xl
            text-white
            ">

              {result.card}

            </h3>


            <p className="
            mt-8
            text-white/70
            ">

              {result.meaning}

            </p>


            <div className="
            mt-6
            rounded-2xl
            bg-white/5
            p-5
            text-white/80
            ">

              {result.guidance}

            </div>


          </motion.div>

        )}

      </div>


    </section>

  );
}