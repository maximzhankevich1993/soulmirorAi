import { Navbar } from "@/components/layout/navbar";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { FeatureCard } from "@/components/ui/feature-card";
import { SoulOrb } from "@/components/ui/soul-orb";
import { AuroraBackground } from "@/components/ui/aurora-background";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <section
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            position: "relative",
            overflow: "hidden",
            background: "#09090B",
          }}
        >
          <AuroraBackground />

          <Container>
            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "80px",
                alignItems: "center",
                paddingTop: "120px",
                paddingBottom: "80px",
                position: "relative",
                zIndex: 2,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "24px",
                }}
              >
                <div
                  style={{
                    width: "fit-content",
                    padding: "8px 16px",
                    border: "1px solid rgba(214,178,94,.2)",
                    borderRadius: "999px",
                    background: "rgba(255,255,255,.03)",
                    backdropFilter: "blur(12px)",
                    fontSize: "14px",
                  }}
                >
                  AI-Powered Self Discovery
                </div>

                <h1
                  style={{
                    fontSize: "clamp(56px, 10vw, 110px)",
                    lineHeight: 0.95,
                    fontWeight: 700,
                    maxWidth: "800px",
                  }}
                >
                  Discover What
                  <br />
                  Lies Beneath
                </h1>

                <p
                  style={{
                    maxWidth: "620px",
                    fontSize: "20px",
                    lineHeight: 1.8,
                    opacity: 0.75,
                  }}
                >
                  Explore archetypes, dreams, tarot insights and guided
                  self-reflection through a beautifully crafted AI
                  experience.
                </p>

                <div
                  style={{
                    display: "flex",
                    gap: "16px",
                    flexWrap: "wrap",
                  }}
                >
                  <Button>Begin Your Journey</Button>

                  <Button variant="secondary">
                    Explore Features
                  </Button>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <SoulOrb />
              </div>
            </div>
          </Container>
        </section>

        <section
          id="features"
          style={{
            paddingTop: "120px",
            paddingBottom: "120px",
            background: "#09090B",
          }}
        >
          <Container>
            <div
              style={{
                textAlign: "center",
                marginBottom: "64px",
              }}
            >
              <h2
                style={{
                  fontSize: "48px",
                  marginBottom: "16px",
                }}
              >
                Your Personal Insight Toolkit
              </h2>

              <p
                style={{
                  maxWidth: "700px",
                  margin: "0 auto",
                  opacity: 0.75,
                  lineHeight: 1.7,
                }}
              >
                Powerful AI tools designed to help you understand
                yourself, uncover patterns and explore deeper meaning.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "24px",
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
      </main>
    </>
  );
}