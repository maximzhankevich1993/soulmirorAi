import { Container } from "@/components/ui/container";

export default function Loading() {
  return (
    <main className="
    flex
    min-h-screen
    items-center
    justify-center
    bg-[#09090B]
    text-[#F4F1EA]
    ">

      <Container>

        <div className="
        flex
        flex-col
        items-center
        ">


          <div className="
          h-16
          w-16
          animate-pulse
          rounded-full
          border
          border-[#D6B25E]/40
          bg-[#D6B25E]/10
          blur-sm
          " />


          <p className="
          mt-8
          text-xs
          uppercase
          tracking-[0.5em]
          text-[#D6B25E]
          ">
            Entering Soul Space
          </p>


        </div>


      </Container>


    </main>
  );
}