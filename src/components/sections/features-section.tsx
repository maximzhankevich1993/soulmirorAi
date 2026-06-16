import { Container } from "@/components/ui/container";
import { FeatureCard } from "@/components/ui/feature-card";
import { SectionTitle } from "@/components/ui/section-title";

export function FeaturesSection() {
  return (
    <section
      id="features"
      style={{
        paddingTop: "120px",
        paddingBottom: "120px",
        background: "#09090B",
      }}
    >
      <Container>
        <SectionTitle
          eyebrow="Features"
          title="Your Personal Insight Toolkit"
          description="Powerful AI tools designed to help you understand yourself, uncover patterns and explore deeper meaning."
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
            marginTop: "64px",
          }}
        >
          <FeatureCard
            title="Tarot Readings"
            description="Receive meaningful card interpretations and guidance powered by AI."
          />

          <FeatureCard
            title="Dream Analysis"
            description="Uncover hidden symbols, recurring themes and psychological insights."
          />

          <FeatureCard
            title="AI Journal"
            description="Track emotions, patterns and growth through intelligent reflection."
          />

          <FeatureCard
            title="Archetypes"
            description="Discover your dominant archetypes and understand your inner motivations."
          />
        </div>
      </Container>
    </section>
  );
}