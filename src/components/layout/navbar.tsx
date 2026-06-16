import { Logo } from "@/components/ui/logo";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header
      style={{
        position: "fixed",
        top: 16,
        left: 0,
        right: 0,
        zIndex: 100,
      }}
    >
      <Container>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            minHeight: "72px",
            padding: "0 20px",
            borderRadius: "20px",
            backdropFilter: "blur(24px)",
            background: "rgba(18,18,22,0.7)",
            border: "1px solid rgba(255,255,255,0.06)",
            boxShadow:
              "0 10px 40px rgba(0,0,0,0.25), 0 0 0 1px rgba(214,178,94,0.04)",
          }}
        >
          <Logo />

          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "28px",
              color: "rgba(244,241,234,0.8)",
              fontSize: "15px",
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