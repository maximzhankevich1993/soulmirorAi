
"use client";

import { MoonStar, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

import { AIConsole } from "@/components/ui/AIConsole";


interface TarotResult {
  card: string;
  meaning: string;
  guidance: string;
}


export function TarotConsole() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] =
    useState<TarotResult | null>(null);


  async function drawCard() {
    try {
      setLoading(true);


      const response =
        await fetch("/api/tarot", {
          method: "POST",
        });


      if (!response.ok) {
        throw new Error("Tarot failed");
      }


      const data =
        await response.json();


      setResult(data);


    } catch(error) {

      console.error(
        "TAROT ERROR",
        error
      );

    } finally {

      setLoading(false);

    }
  }


  return (
    <AIConsole

      icon={
        <MoonStar
          size={20}
          className="text-[#D6B25E]"
        />
      }


      eyebrow="Tarot Reflection"


      title="Draw your card"


      placeholder="Your intuition is waiting..."


      value=""


      onChange={() => {}}


      onSubmit={drawCard}


      loading={loading}


      buttonText="Draw Tarot Card"


      loadingText="Connecting..."


      result={
        result && (

          <motion.div
            initial={{
              opacity:0,
              y:20,
            }}

            animate={{
              opacity:1,
              y:0,
            }}

            className="
            rounded-3xl
            border
            border-[#D6B25E]/20
            bg-[#D6B25E]/5
            p-5
            text-center
            "
          >

            <p
              className="
              text-[11px]
              uppercase
              tracking-[0.35em]
              text-[#D6B25E]
              "
            >
              Your Card
            </p>


            <h3
              className="
              mt-3
              text-3xl
              font-light
              text-[#F4F1EA]
              "
            >
              {result.card}
            </h3>


            <p
              className="
              mt-5
              leading-7
              text-white/70
              "
            >
              {result.meaning}
            </p>


            <div
              className="
              mt-5
              rounded-2xl
              bg-white/5
              p-4
              text-white/80
              "
            >
              {result.guidance}
            </div>


          </motion.div>

        )
      }

    />
  );
}

