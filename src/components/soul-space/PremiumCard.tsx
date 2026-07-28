"use client";

import {
  Crown,
  ArrowRight,
  Sparkles,
  Infinity,
  ShieldCheck,
} from "lucide-react";

import { motion } from "framer-motion";


import {
  GlassCard,
} from "@/components/ui/GlassCard";


import {
  GlowIcon,
} from "@/components/ui/GlowIcon";


import {
  GradientButton,
} from "@/components/ui/GradientButton";



export function PremiumCard() {


  function handleUpgrade(){

    // TODO:
    // cryptoClaud payment
    // create checkout session
    // redirect user

    console.log(
      "START PRO CHECKOUT"
    );

  }



  const features = [

    "Unlimited Soul Intelligence Scans",

    "Advanced Dream Analysis",

    "Personal Evolution Memory",

    "Future AI Insights",

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

whileHover={{
scale:1.015,
}}

transition={{

type:"spring",

stiffness:220,

}}

>



<GlassCard

highlight

className="
relative
overflow-hidden
p-8
md:p-10
"

>



<div

className="
pointer-events-none
absolute
right-0
top-0
h-96
w-96
rounded-full
bg-[#D6B25E]/10
blur-[140px]
"

/>





<div

className="
relative
z-10
flex
flex-col
gap-10
lg:flex-row
lg:items-center
lg:justify-between
"

>




<div className="max-w-3xl">


<GlowIcon size="lg">


<Crown

size={26}

className="
text-[#D6B25E]
"

/>


</GlowIcon>





<div

className="
mt-6
flex
items-center
gap-3
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

SoulMirror Pro

</p>



<span

className="
rounded-full
border
border-[#D6B25E]/20
bg-[#D6B25E]/5
px-3
py-1
text-[9px]
uppercase
tracking-[0.3em]
text-[#D6B25E]
"

>

EON AI

</span>


</div>







<h2

className="
mt-4
font-[family:var(--font-cormorant)]
text-4xl
font-light
leading-tight
text-[#F4F1EA]
md:text-6xl
"

>

Unlock your complete
<br/>

personal intelligence system.

</h2>







<p

className="
mt-6
max-w-2xl
leading-8
text-white/60
"

>

A deeper AI relationship with your identity,
memory, emotions and future potential.

</p>






<div

className="
mt-8
grid
gap-3
"

>


{
features.map(
(feature)=>(
<div

key={feature}

className="
flex
items-center
gap-3
text-sm
text-white/60
"

>

<ShieldCheck

size={16}

className="
text-[#D6B25E]
"

/>


{feature}


</div>

)

)

}



</div>




</div>










<div

className="
flex
flex-col
lg:items-end
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

Premium Intelligence Access

</p>





<h3

className="
mt-4
text-6xl
font-light
text-[#F4F1EA]
"

>

$19

</h3>




<p

className="
mt-2
text-white/50
"

>

per month

</p>







<GradientButton

onClick={handleUpgrade}

className="
mt-8
w-auto
px-10
"

icon={

<ArrowRight

size={18}

/>

}

>


Start Pro Experience


</GradientButton>






<p

className="
mt-5
text-right
text-[10px]
uppercase
tracking-[0.3em]
text-white/30
"

>

Crypto payment available

</p>




</div>






</div>






<div

className="
relative
z-10
mt-10
border-t
border-white/10
pt-5
"

>


<p

className="
text-[10px]
uppercase
tracking-[0.4em]
text-white/30
"

>

Powered by EON Intelligence Engine • Premium Layer

</p>


</div>




</GlassCard>



</motion.div>



</section>


);

}