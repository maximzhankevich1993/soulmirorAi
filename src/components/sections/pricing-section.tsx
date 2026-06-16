import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";

export function PricingSection() {
  return (
    <section
      id="pricing"
      style={{
        paddingTop: "140px",
        paddingBottom: "140px",
        background: "#09090B",
      }}
    >
      <Container>
        <SectionTitle
          eyebrow="Membership"
          title="Choose Your Journey"
          description="Unlock deeper insights, unlimited readings and advanced self-discovery tools."
        />

        <div
          style={{
            maxWidth: "480px",
            margin: "80px auto 0",
          }}
        >
          <div
            style={{
              position: "relative",
              padding: "40px",
              borderRadius: "32px",
              background:
                "linear-gradient(180deg, rgba(255,255,255,.05), rgba(255,255,255,.02))",
              border: "1px solid rgba(214,178,94,.15)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "-120px",
                right: "-120px",
                width: "250px",
                height: "250px",
                borderRadius: "50%",
                background: "rgba(214,178,94,.08)",
                filter: "blur(80px)",
              }}
            />

            <div
              style={{
                color: "var(--gold)",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                fontSize: "12px",
                marginBottom: "16px",
              }}
            >
              Most Popular
            </div>

            <h3
              style={{
                fontSize: "40px",
                marginBottom: "12px",
              }}
            >
              SoulMirror Pro
            </h3>

            <div
              style={{
                fontSize: "56px",
                fontWeight: 700,
                marginBottom: "24px",
              }}
            >
              $19
              <span
                style={{
                  fontSize: "18px",
                  opacity: 0.7,
                }}
              >
                /month
              </span>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                marginBottom: "32px",
                opacity: 0.85,
              }}
            >
              <div>✓ Unlimited Tarot Readings</div>
              <div>✓ Unlimited Dream Analysis</div>
              <div>✓ AI Reflection Journal</div>
              <div>✓ Archetype Discovery</div>
              <div>✓ Priority AI Responses</div>
            </div>

            <Button>
              Start Membership
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}