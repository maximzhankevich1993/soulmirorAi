import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { ArchetypeCard } from "@/components/ui/archetype-card";

export function SoulScanSection() {
  return (
    <section
      style={{
        paddingTop: "120px",
        paddingBottom: "120px",
        background: "#09090B",
      }}
    >
      <Container>
        <SectionTitle
          eyebrow="Soul Scan"
          title="Discover Your Dominant Archetype"
          description="Answer a few questions and uncover the hidden patterns that drive your decisions, emotions and growth."
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
          <ArchetypeCard
            title="The Seeker"
            subtitle="Driven by curiosity, exploration and the desire to understand life's deeper meaning."
          />

          <ArchetypeCard
            title="The Sage"
            subtitle="Guided by wisdom, reflection and a constant pursuit of truth and knowledge."
          />

          <ArchetypeCard
            title="The Creator"
            subtitle="Motivated by imagination, innovation and the urge to bring ideas into reality."
          />
        </div>
      </Container>
    </section>
  );
}