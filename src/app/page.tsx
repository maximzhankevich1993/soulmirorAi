import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <main>
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          background:
            "radial-gradient(circle at top, rgba(139,92,246,.15), transparent 40%), #09090B",
        }}
      >
        <Container>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              gap: "24px",
            }}
          >
            <div
              style={{
                padding: "8px 16px",
                border: "1px solid rgba(214,178,94,.2)",
                borderRadius: "999px",
                background: "rgba(255,255,255,.03)",
                fontSize: "14px",
              }}
            >
              AI-Powered Self Discovery
            </div>

            <h1
              style={{
                fontSize: "clamp(56px, 10vw, 110px)",
                lineHeight: 1,
                fontWeight: 700,
                maxWidth: "1000px",
              }}
            >
              Discover What
              <br />
              Lies Beneath
            </h1>

            <p
              style={{
                maxWidth: "700px",
                fontSize: "20px",
                lineHeight: 1.7,
                opacity: 0.75,
              }}
            >
              Explore archetypes, dreams, tarot insights and guided
              self-reflection through a beautifully crafted AI experience.
            </p>

            <div
              style={{
                display: "flex",
                gap: "16px",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <Button>Begin Your Journey</Button>

              <Button variant="secondary">
                Explore Features
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}