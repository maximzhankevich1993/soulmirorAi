"use client";

import {
  Brain,
  Heart,
  Moon,
  Sparkles,
} from "lucide-react";

import { motion } from "framer-motion";

import {
  GlassCard,
} from "@/components/ui/GlassCard";

import {
  GlowIcon,
} from "@/components/ui/GlowIcon";

import {
  useSoulMemoryStore,
} from "@/store/soul-memory-store";



export function SoulDashboard() {


  const memory =
    useSoulMemoryStore(
      (state)=>state.memory
    );



  const cards = [

    {
      title:"Core Archetype",

      value:
        memory?.archetype
        ||
        "Unknown",

      subtitle:
        "Soul Identity",

      icon:Brain,

    },


    {
      title:"Current Emotion",

      value:
        memory?.emotion
        ||
        "Balanced",

      subtitle:
        "Live Analysis",

      icon:Heart,

    },


    {
      title:"Shadow Pattern",

      value:
        memory?.shadow
        ||
        "Hidden",

      subtitle:
        "Inner Reflection",

      icon:Moon,

    },


    {
      title:"Soul Evolution",

      value:
        memory?.insight
        ?
        "Growing"
        :
        "Beginning",

      subtitle:
        "AI Memory",

      icon:Sparkles,

    },


  ];





  return (

<section

className="
relative
mx-auto
mt-24
w-full
max-w-6xl
px-6
"

>



<motion.div

initial={{
opacity:0,
y:30,
}}

whileInView={{
opacity:1,
y:0,
}}

viewport={{
once:true,
}}

transition={{
duration:0.8,
}}

className="
mb-14
text-center
"

>


<p

className="
text-[11px]
uppercase
tracking-[0.45em]
text-[#D6B25E]
"

>

Soul Intelligence

</p>



<h2

className="
mt-5
font-[family:var(--font-cormorant)]
text-5xl
font-light
text-[#F4F1EA]
"

>

Your Inner Profile

</h2>



<p

className="
mx-auto
mt-6
max-w-2xl
text-lg
leading-8
text-white/50
"

>

SoulMirror continuously learns your
patterns, emotions and personal evolution.

</p>


</motion.div>







<div

className="
grid
gap-6
md:grid-cols-2
xl:grid-cols-4
"

>


{
cards.map(
(card,index)=>{


const Icon =
card.icon;


return (


<motion.div

key={card.title}

initial={{
opacity:0,
y:25,
}}

whileInView={{
opacity:1,
y:0,
}}

viewport={{
once:true,
}}

transition={{
delay:index*0.1,
duration:0.6,
}}

>


<GlassCard

className="
group
relative
overflow-hidden
p-7
transition-all
duration-500
hover:-translate-y-2
hover:border-[#D6B25E]/20
"

>


<div

className="
pointer-events-none
absolute
-right-10
-top-10
h-32
w-32
rounded-full
bg-[#D6B25E]/5
blur-3xl
"

 />



<GlowIcon>


<Icon

size={22}

className="
text-[#D6B25E]
"

/>


</GlowIcon>




<p

className="
mt-6
text-[11px]
uppercase
tracking-[0.35em]
text-white/40
"

>

{card.title}

</p>




<h3

className="
mt-3
line-clamp-2
text-2xl
font-light
text-[#F4F1EA]
"

>

{card.value}

</h3>




<p

className="
mt-3
text-sm
text-white/40
"

>

{card.subtitle}

</p>



</GlassCard>



</motion.div>


)

}

)

}


</div>







<motion.div

initial={{
opacity:0,
}}

whileInView={{
opacity:1,
}}

transition={{
delay:0.5,
}}

className="
mt-12
flex
justify-center
"

>


<div

className="
rounded-full
border
border-[#D6B25E]/10
bg-white/[0.02]
px-6
py-3
backdrop-blur-xl
"

>


<p

className="
text-[10px]
uppercase
tracking-[0.4em]
text-white/40
"

>

Powered by EON Intelligence Engine

</p>


</div>


</motion.div>





</section>


);

}