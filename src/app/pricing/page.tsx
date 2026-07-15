import { Container } from "@/components/ui/container";
import { Sparkles, Crown, Infinity } from "lucide-react";


export const metadata = {
  title: "Pricing | SoulMirror AI",
  description:
    "Choose your SoulMirror AI plan and unlock deeper self-discovery experiences.",
};


const plans = [
  {
    name: "Free",
    price: "$0",
    description:
      "Start exploring your inner world.",
    features: [
      "Limited Soul Scan",
      "Basic reflections",
      "Daily insight",
    ],
    icon: Sparkles,
    featured: false,
  },

  {
    name: "Pro",
    price: "$19",
    description:
      "For deeper personal exploration.",
    features: [
      "Unlimited Soul Scan",
      "Dream Analysis",
      "Soul Profile",
      "Personal history",
    ],
    icon: Crown,
    featured: true,
  },

  {
    name: "Premium",
    price: "$29",
    description:
      "Complete inner universe experience.",
    features: [
      "Everything in Pro",
      "Advanced AI insights",
      "Tarot readings",
      "Long-term evolution tracking",
    ],
    icon: Infinity,
    featured: false,
  },
];


export default function PricingPage() {

  return (

    <main className="
    min-h-screen
    bg-[#09090B]
    pt-32
    text-[#F4F1EA]
    ">

      <Container>


        <section className="mx-auto max-w-6xl">


          <div className="text-center">

            <p className="
            text-xs
            uppercase
            tracking-[0.4em]
            text-[#D6B25E]
            ">
              Pricing
            </p>


            <h1 className="
            mt-6
            font-[family:var(--font-cormorant)]
            text-6xl
            font-light
            ">
              Choose your journey
            </h1>


            <p className="
            mx-auto
            mt-6
            max-w-2xl
            text-lg
            text-white/60
            ">
              Unlock deeper reflection,
              dream interpretation and
              your evolving Soul Profile.
            </p>

          </div>



          <div className="
          mt-16
          grid
          gap-6
          lg:grid-cols-3
          ">


            {plans.map((plan)=>{

              const Icon = plan.icon;


              return (

                <div
                  key={plan.name}
                  className={`
                  rounded-[40px]
                  border
                  p-8
                  backdrop-blur-3xl
                  ${
                    plan.featured
                    ?
                    "border-[#D6B25E]/40 bg-[#D6B25E]/10 shadow-[0_0_60px_rgba(214,178,94,.15)]"
                    :
                    "border-white/10 bg-white/[0.03]"
                  }
                  `}
                >

                  <div className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-[#D6B25E]/10
                  ">

                    <Icon
                      className="text-[#D6B25E]"
                    />

                  </div>



                  <h2 className="
                  mt-8
                  text-3xl
                  ">
                    {plan.name}
                  </h2>


                  <p className="
                  mt-3
                  text-white/50
                  ">
                    {plan.description}
                  </p>



                  <div className="
                  mt-8
                  text-5xl
                  font-light
                  ">
                    {plan.price}

                    {
                      plan.price !== "$0" &&
                      <span className="
                      text-base
                      text-white/40
                      ">
                        /month
                      </span>
                    }

                  </div>



                  <ul className="
                  mt-8
                  space-y-4
                  ">

                    {plan.features.map((feature)=>(

                      <li
                        key={feature}
                        className="
                        text-white/60
                        "
                      >
                        ✦ {feature}
                      </li>

                    ))}

                  </ul>



                  <button
                    className={`
                    mt-10
                    w-full
                    rounded-full
                    py-4
                    font-semibold
                    transition
                    ${
                      plan.featured
                      ?
                      "bg-[#D6B25E] text-black"
                      :
                      "border border-white/10 bg-white/5 text-white hover:bg-white/10"
                    }
                    `}
                  >
                    Start Journey
                  </button>



                </div>

              );

            })}


          </div>


        </section>


      </Container>


    </main>

  );
}