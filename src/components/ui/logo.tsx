export function Logo() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        lineHeight: 1,
      }}
    >
      <span
        style={{
          fontSize: "26px",
          fontWeight: 700,
          letterSpacing: "0.15em",
          color: "var(--ivory)",
        }}
      >
        SOULMIRROR
      </span>

      <span
        style={{
          marginTop: "6px",
          fontSize: "11px",
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          color: "var(--gold)",
          opacity: 0.85,
        }}
      >
        AI Insight Platform
      </span>
    </div>
  );
}