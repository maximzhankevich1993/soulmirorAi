import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";

export function TarotPreviewSection() {
  return (
    <section id="tarot" className="relative py-24 md:py-32">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D6B25E]/10 blur-3xl" />
        <div className="absolute right-0 top-0 h-[300px] w-[300px] rounded-full bg-[#8B5CF6]/10 blur-3xl" />
      </div>

      <Container className="relative z-10">
        <SectionTitle
          eyebrow="Tarot Intelligence"
          title="The cards reveal what you already know"
          description="AI-enhanced tarot readings interpret symbolic patterns through psychology, archetypes, and subconscious alignment."
        />

        <div className="mt-16 flex flex-col items-center gap-10">
          {/* Tarot Card Visual */}
          <div className="relative">
            {/* Glow */}
            <div className="absolute inset-0 -z-10 rounded-3xl bg-[#D6B25E]/10 blur-2xl" />

            {/* Card */}
            <div className="relative h-[340px] w-[220px] rounded-2xl border border-white/10 bg-gradient-to-br from-[#09090B] via-white/[0.03] to-[#09090B] backdrop-blur-2xl shadow-[0_0_60px_rgba(214,178,94,0.12)]">
              {/* Decorative Frame */}
              <div className="absolute inset-3 rounded-xl border border-[#D6B25E]/20" />

              {/* Center Symbol */}
              <div className="flex h-full items-center justify-center">
                <div className="text-4xl text-[#D6B25E]">☾</div>
              </div>

              {/* Corner accents */}
              <div className="absolute left-3 top-3 h-2 w-2 rounded-full bg-[#D6B25E]/60" />
              <div className="absolute right-3 top-3 h-2 w-2 rounded-full bg-[#8B5CF6]/60" />
              <div className="absolute bottom-3 left-3 h-2 w-2 rounded-full bg-[#8B5CF6]/60" />
              <div className="absolute bottom-3 right-3 h-2 w-2 rounded-full bg-[#D6B25E]/60" />
            </div>
          </div>

          {/* Text */}
          <p className="max-w-2xl text-center text-sm leading-relaxed text-[#F4F1EA]/60 md:text-base">
            Every card reflects a fragment of your inner state. Through
            AI interpretation, Tarot becomes not prediction — but
            recognition of your subconscious patterns.
          </p>

          {/* CTA */}
          <Button variant="primary">Draw Your First Card</Button>
        </div>
      </Container>
    </section>
  );
}