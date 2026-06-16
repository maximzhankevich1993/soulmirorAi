import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";

export function PricingSection() {
  return (
    <section id="pricing" className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D6B25E]/10 blur-3xl" />
        <div className="absolute right-0 top-0 h-[350px] w-[350px] rounded-full bg-[#8B5CF6]/10 blur-3xl" />
      </div>

      <Container className="relative z-10">
        <SectionTitle
          eyebrow="Pricing"
          title="Unlock your inner world"
          description="One subscription to explore your dreams, archetypes, and subconscious intelligence with AI-powered depth."
        />

        <div className="mt-16 flex justify-center">
          <div
            className="
              relative
              w-full
              max-w-md
              overflow-hidden
              rounded-3xl
              border
              border-[#D6B25E]/30
              bg-white/[0.03]
              p-8
              backdrop-blur-2xl
              shadow-[0_0_80px_rgba(214,178,94,0.10)]
            "
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#D6B25E]/10 via-transparent to-[#8B5CF6]/10" />

            <div className="relative z-10">
              <h3 className="text-center text-xl font-semibold text-[#F4F1EA]">
                SoulMirror Pro
              </h3>

              <div className="mt-6 text-center">
                <span className="text-5xl font-semibold text-[#F4F1EA]">
                  $19
                </span>
                <span className="text-sm text-[#F4F1EA]/60">
                  /month
                </span>
              </div>

              <ul className="mt-8 space-y-3 text-sm text-[#F4F1EA]/70">
                <li>Unlimited Tarot Readings</li>
                <li>Unlimited Dream Analysis</li>
                <li>AI Journal Insights</li>
                <li>Archetype Discovery</li>
                <li>Priority AI Responses</li>
              </ul>

              <div className="mt-10">
                <Button variant="primary" className="w-full">
                  Start Your Journey
                </Button>
              </div>

              <p className="mt-6 text-center text-xs text-[#F4F1EA]/40">
                Cancel anytime. No hidden fees.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}