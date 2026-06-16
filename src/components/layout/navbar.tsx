import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backdropFilter: "blur(20px)",
        background: "rgba(9,9,11,0.6)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <Container>
        <div
          style={{
            height: "80px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              fontSize: "24px",
              fontWeight: 700,
              letterSpacing: "0.08em",
            }}
          >
            SOULMIRROR
          </div>

          <nav
            style={{
              display: "flex",
              gap: "24px",
              alignItems: "center",
            }}
          >
            <a href="#features">Features</a>
            <a href="#dreams">Dreams</a>
            <a href="#journal">Journal</a>
            <a href="#pricing">Pricing</a>
          </nav>

          <Button>
            Start Journey
          </Button>
        </div>
      </Container>
    </header>
  );
}