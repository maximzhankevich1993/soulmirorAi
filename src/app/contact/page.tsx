import { Container } from "@/components/ui/container";

export const metadata = {
  title: "Contact SoulMirror AI",
  description:
    "Contact SoulMirror AI support team for questions, partnerships and feedback.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#09090B] pt-32 text-[#F4F1EA]">

      <Container>

        <section className="mx-auto max-w-4xl">

          <p className="
          text-xs
          uppercase
          tracking-[0.4em]
          text-[#D6B25E]
          ">
            Contact
          </p>


          <h1 className="
          mt-6
          font-[family:var(--font-cormorant)]
          text-6xl
          font-light
          leading-tight
          ">
            Let's connect.
          </h1>


          <p className="
          mt-8
          max-w-2xl
          text-lg
          leading-8
          text-white/60
          ">
            Have questions about SoulMirror AI,
            partnerships or feedback?
            We would love to hear from you.
          </p>



          <div className="
          mt-12
          grid
          gap-6
          md:grid-cols-2
          ">


            <div
              className="
              rounded-[32px]
              border
              border-white/10
              bg-white/[0.03]
              p-8
              backdrop-blur-3xl
              "
            >

              <p className="
              text-xs
              uppercase
              tracking-[0.3em]
              text-[#D6B25E]
              ">
                Support
              </p>


              <h2 className="
              mt-4
              text-2xl
              ">
                Customer Care
              </h2>


              <p className="
              mt-4
              text-white/60
              ">
                support@soulmirror.ai
              </p>

            </div>



            <div
              className="
              rounded-[32px]
              border
              border-white/10
              bg-white/[0.03]
              p-8
              backdrop-blur-3xl
              "
            >

              <p className="
              text-xs
              uppercase
              tracking-[0.3em]
              text-[#D6B25E]
              ">
                Partnerships
              </p>


              <h2 className="
              mt-4
              text-2xl
              ">
                Business
              </h2>


              <p className="
              mt-4
              text-white/60
              ">
                hello@soulmirror.ai
              </p>

            </div>


          </div>


        </section>


      </Container>


    </main>
  );
}