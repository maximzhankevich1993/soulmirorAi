export function SoulOrb() {
  return (
    <div
      style={{
        position: "relative",
        width: "320px",
        height: "320px",
        borderRadius: "50%",
        background:
          "radial-gradient(circle at 30% 30%, rgba(214,178,94,.45), transparent 30%), radial-gradient(circle at 70% 40%, rgba(139,92,246,.35), transparent 40%), rgba(255,255,255,.03)",
        border: "1px solid rgba(255,255,255,.08)",
        backdropFilter: "blur(40px)",
        boxShadow:
          "0 0 120px rgba(139,92,246,.12), 0 0 80px rgba(214,178,94,.12)",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: "16px",
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,.08)",
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: "48px",
          borderRadius: "50%",
          border: "1px solid rgba(214,178,94,.15)",
        }}
      />
    </div>
  );
}