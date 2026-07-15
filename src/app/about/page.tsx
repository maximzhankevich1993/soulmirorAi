import { Container } from "@/components/ui/container";

export const metadata = {
  title: "About SoulMirror AI",
  description:
    "Discover the vision behind SoulMirror AI — a personal AI companion for self-reflection, dreams and inner growth.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#09090B] pt-32 text-[#F4F1EA]">

      <Container>

        <section className="mx-auto max-w-4xl">

          <p className="text-xs uppercase tracking-[0.4em] text-[#D6B25E]">
            About SoulMirror
          </p>

          <h1 className="
          mt-6
          font-[family:var(--font-cormorant)]
          text-6xl
          font-light
          leading-tight
          ">
            A mirror for your inner world.
          </h1>


          <p className="
          mt-8
          max-w-3xl
          text-lg
          leading-8
          text-white/60
          ">
            SoulMirror AI combines artificial intelligence,
            psychology-inspired reflection and symbolic
            exploration to help you understand your emotions,
            dreams and personal patterns.
          </p>


          <div className="
          mt-16
          rounded-[40px]
          border
          border-white/10
          bg-white/[0.03]
          p-8
          backdrop-blur-3xl
          ">

            <h2 className="text-3xl">
              Our philosophy
            </h2>

            <p className="
            mt-5
            leading-8
            text-white/60
            ">
              Technology should not only help people
              achieve more. It should help them understand
              themselves.
            </p>

          </div>


        </section>

      </Container>

    </main>
  );
}