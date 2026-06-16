import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { FeatureCard } from "@/components/ui/feature-card";

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 md:py-32">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-[#8B5CF6]/10 blur-3xl" />
        <div className="absolute right-0 top-0 h-[300px] w-[300px] rounded-full bg-[#D6B25E]/10 blur-3xl" />
      </div>

      <Container className="relative z-10">
        <SectionTitle
          eyebrow="Core Features"
          title="Everything your subconscious needs"
          description="Explore symbolic intelligence through AI-powered tools designed for dream interpretation, archetype discovery, and self-reflection."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            title="Tarot Readings"
            description="AI-powered symbolic tarot interpretations tailored to your emotional and psychological state."
            icon={<span>🔮</span>}
          />

          <FeatureCard
            title="Dream Analysis"
            description="Decode hidden meanings in your dreams using Jungian archetypes and symbolic mapping."
            icon={<span>🌙</span>}
          />

          <FeatureCard
            title="AI Journal"
            description="Reflect daily thoughts and uncover subconscious patterns through intelligent journaling."
            icon={<span>📖</span>}
          />

          <FeatureCard
            title="Archetypes"
            description="Discover your dominant psychological archetypes and understand your inner behavior patterns."
            icon={<span>🧿</span>}
          />
        </div>
      </Container>
    </section>
  );
}