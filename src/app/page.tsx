export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#09090B",
        color: "#F4F1EA",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <div
        style={{
          textAlign: "center",
          maxWidth: "800px",
          padding: "24px",
        }}
      >
        <h1
          style={{
            fontSize: "72px",
            fontWeight: 700,
            marginBottom: "16px",
          }}
        >
          SoulMirror AI
        </h1>

        <p
          style={{
            fontSize: "20px",
            opacity: 0.8,
            marginBottom: "32px",
          }}
        >
          Discover what lies beneath.
        </p>

        <button
          style={{
            background: "#D6B25E",
            color: "#09090B",
            border: "none",
            padding: "14px 28px",
            borderRadius: "16px",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Begin Your Journey
        </button>
      </div>
    </main>
  );
}