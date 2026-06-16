import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";

export function TarotPreviewSection() {
  return (
    <section
      style={{
        paddingTop: "140px",
        paddingBottom: "140px",
        background: "#09090B",
      }}
    >
      <Container>
        <SectionTitle
          eyebrow="Tarot Experience"
          title="Receive Meaningful Guidance"
          description="Draw cards, discover hidden patterns and receive beautifully crafted interpretations powered by AI."
        />

        <div
          style={{
            marginTop: "80px",
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "80px",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "280px",
                height: "420px",
                borderRadius: "28px",
                position: "relative",
                overflow: "hidden",
                background:
                  "linear-gradient(180deg, rgba(255,255,255,.05), rgba(255,255,255,.02))",
                border: "1px solid rgba(214,178,94,.15)",
                boxShadow:
                  "0 20px 80px rgba(214,178,94,.08)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: "20px",
                  borderRadius: "20px",
                  border:
                    "1px solid rgba(214,178,94,.15)",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform:
                    "translate(-50%, -50%)",
                  fontSize: "64px",
                }}
              >
                ✦
              </div>

              <div
                style={{
                  position: "absolute",
                  bottom: "32px",
                  left: 0,
                  right: 0,
                  textAlign: "center",
                  letterSpacing: "0.15em",
                }}
              >
                THE SEEKER
              </div>
            </div>
          </div>

          <div>
            <h3
              style={{
                fontSize: "42px",
                lineHeight: 1.2,
                marginBottom: "24px",
              }}
            >
              Personalized Tarot Readings
            </h3>

            <p
              style={{
                opacity: 0.75,
                lineHeight: 1.8,
                marginBottom: "32px",
              }}
            >
              Every reading combines symbolic wisdom,
              psychological reflection and AI-powered
              interpretation to create unique insights
              tailored to your current situation.
            </p>

            <Button>
              Explore Tarot
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}