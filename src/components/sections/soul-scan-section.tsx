import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { ArchetypeCard } from "@/components/ui/archetype-card";

export function SoulScanSection() {
  return (
    <section id="soul-scan" className="relative py-24 md:py-32">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-[#8B5CF6]/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-[#D6B25E]/10 blur-3xl" />
      </div>

      <Container className="relative z-10">
        <SectionTitle
          eyebrow="Soul Scan"
          title="Reveal your inner archetype"
          description="Every moment of awareness carries a hidden pattern. Discover which archetype is guiding your current state of mind."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <ArchetypeCard
            name="The Seeker"
            description="Driven by curiosity and inner exploration. You are searching for meaning beyond the surface of reality."
            symbol={<span>🜁</span>}
          />

          <ArchetypeCard
            name="The Sage"
            description="You seek truth through reflection, knowledge, and deep understanding of patterns and systems."
            symbol={<span>🜂</span>}
            active
          />

          <ArchetypeCard
            name="The Creator"
            description="You transform ideas into reality, shaping the world through imagination and expression."
            symbol={<span>🜃</span>}
          />
        </div>
      </Container>
    </section>
  );
}