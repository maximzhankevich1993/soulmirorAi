"use client";

import {
  Sparkles,
  Layers,
  Brain,
} from "lucide-react";

import {
  useState,
} from "react";

import {
  motion,
} from "framer-motion";


import {
  AIConsole,
} from "@/components/ui/AIConsole";


import {
  useSoulMemoryStore,
} from "@/store/soul-memory-store";


import {
  useSoulOrbStore,
} from "@/store/soul-orb-store";




interface TarotResult {

  card:string;

  archetype:string;

  meaning:string;

  guidance:string;

}




export function TarotConsole(){


const [question,setQuestion] =
useState("");



const [loading,setLoading] =
useState(false);



const [result,setResult] =
useState<TarotResult | null>(null);





const setMemory =
useSoulMemoryStore(
(state)=>state.setMemory
);



const setOrbState =
useSoulOrbStore(
(state)=>state.setState
);







async function analyzeTarot(){


if(!question.trim())
return;



try{


setLoading(true);





const response =
await fetch(
"/api/tarot",
{

method:"POST",

headers:{

"Content-Type":
"application/json",

},


body:JSON.stringify({

question,

}),


}

);






const data =
await response.json();






if(!response.ok){

throw new Error(
data.error ||
"Tarot analysis failed"
);

}







setResult(data);







setMemory({

insight:
data.guidance ||
data.meaning ||
"",


emotion:
"Symbolic Reflection",


archetype:
data.archetype ||
"",

});





setOrbState(
"focus"
);




setQuestion("");




}



catch(error){

console.error(
"TAROT ERROR:",
error
);


}



finally{


setLoading(false);


}


}









return(



<AIConsole


icon={

<Layers

size={22}

className="
text-[#D6B25E]
"

/>

}



eyebrow="Symbolic Intelligence"



title="Explore symbolic guidance"



placeholder="
Ask a question about your path,
choices or future direction...
"



value={question}



onChange={setQuestion}



onSubmit={analyzeTarot}



loading={loading}



buttonText="Reveal Symbol"



loadingText="Interpreting symbols..."



color="gold"





result={


result && (


<motion.div


initial={{

opacity:0,

y:25,

}}


animate={{

opacity:1,

y:0,

}}


transition={{

duration:0.6,

}}



className="
space-y-6
rounded-[32px]
border
border-[#D6B25E]/20
bg-gradient-to-br
from-[#D6B25E]/10
via-white/[0.03]
to-[#8B5CF6]/10
p-7
"

>



<div

className="
flex
items-center
gap-3
"

>


<div

className="
flex
h-10
w-10
items-center
justify-center
rounded-2xl
bg-[#D6B25E]/10
"

>


<Brain

size={20}

className="
text-[#D6B25E]
"

/>


</div>





<div>


<p

className="
text-[10px]
uppercase
tracking-[0.35em]
text-[#D6B25E]
"

>

Symbolic Result

</p>



<p

className="
text-xs
text-white/40
"

>

EON Archetype Engine

</p>


</div>


</div>









<div>


<p

className="
text-[10px]
uppercase
tracking-[0.35em]
text-white/40
"

>

Selected Symbol

</p>


<h3

className="
mt-3
text-4xl
font-light
text-[#F4F1EA]
"

>

{result.card}

</h3>


</div>








<div>


<p

className="
text-[10px]
uppercase
tracking-[0.35em]
text-white/40
"

>

Archetype

</p>


<p

className="
mt-3
text-xl
text-[#F4F1EA]
"

>

{result.archetype}

</p>


</div>







<div>


<p

className="
text-[10px]
uppercase
tracking-[0.35em]
text-white/40
"

>

Meaning

</p>


<p

className="
mt-3
leading-8
text-white/70
"

>

{result.meaning}

</p>


</div>







<div>


<p

className="
text-[10px]
uppercase
tracking-[0.35em]
text-white/40
"

>

Guidance

</p>


<p

className="
mt-3
italic
leading-8
text-[#F4F1EA]
"

>

{result.guidance}

</p>


</div>









<div

className="
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

Powered by EON Symbolic Intelligence

</p>


</div>






</motion.div>


)


}


/>


);



}