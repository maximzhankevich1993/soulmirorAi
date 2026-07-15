"use client";

import * as React from "react";


type ButtonVariant =
  | "primary"
  | "secondary"
  | "ghost";


type ButtonSize =
  | "sm"
  | "md"
  | "lg";



interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {

  variant?: ButtonVariant;

  size?: ButtonSize;

  loading?: boolean;

}



export function Button({

  variant="primary",

  size="md",

  loading=false,

  className="",

  children,

  disabled,

  ...props

}:ButtonProps){


const variants = {

primary:`
border border-[#D6B25E]/30
bg-gradient-to-r
from-[#D6B25E]/20
to-[#8B5CF6]/20
text-[#F4F1EA]
hover:border-[#D6B25E]/60
hover:shadow-[0_0_35px_rgba(214,178,94,.2)]
`,

secondary:`
border border-white/10
bg-white/[0.03]
text-[#F4F1EA]
hover:bg-white/[0.06]
`,

ghost:`
text-[#F4F1EA]/70
hover:bg-white/[0.05]
hover:text-white
`

};



const sizes = {

sm:
"px-4 py-2 text-xs rounded-xl",

md:
"px-5 py-3 text-sm rounded-2xl",

lg:
"px-8 py-5 text-base rounded-full"

};



return (

<button

disabled={
 disabled ||
 loading
}

className={`
group
relative
inline-flex
items-center
justify-center
overflow-hidden
font-medium
transition-all
duration-300

disabled:pointer-events-none
disabled:opacity-50

${variants[variant]}

${sizes[size]}

${className}
`}

{...props}

>


<span
className="
absolute
inset-0
bg-gradient-to-r
from-[#D6B25E]/10
to-[#8B5CF6]/10
opacity-0
transition
group-hover:opacity-100
"
/>



<span
className="
relative
z-10
flex
items-center
gap-2
"
>


{
loading
?
"Loading..."
:
children
}


</span>


</button>

);


}