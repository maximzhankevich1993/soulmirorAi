import Link from "next/link";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <main className="
    flex
    min-h-screen
    items-center
    bg-[#09090B]
    text-[#F4F1EA]
    ">

      <Container>

        <section className="
        mx-auto
        max-w-3xl
        text-center
        ">


          <p className="
          text-xs
          uppercase
          tracking-[0.5em]
          text-[#D6B25E]
          ">
            SoulMirror
          </p>



          <h1 className="
          mt-8
          font-[family:var(--font-cormorant)]
          text-8xl
          font-light
          ">
            404
          </h1>



          <h2 className="
          mt-6
          text-3xl
          ">
            This path is hidden.
          </h2>



          <p className="
          mx-auto
          mt-6
          max-w-xl
          text-white/60
          ">
            The page you are looking for does not exist.
            Return to your inner journey and continue exploring.
          </p>



          <Link
            href="/"
            className="
            mt-10
            inline-flex
            rounded-full
            bg-[#D6B25E]
            px-8
            py-4
            font-semibold
            text-black
            transition
            hover:scale-105
            "
          >
            Return Home
          </Link>


        </section>


      </Container>


    </main>
  );
}