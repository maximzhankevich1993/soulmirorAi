export function AuroraBackground() {
  return (
    <>
      <div
        style={{
          position: "absolute",
          top: "-200px",
          left: "-150px",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "rgba(139,92,246,0.18)",
          filter: "blur(120px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: "100px",
          right: "-150px",
          width: "450px",
          height: "450px",
          borderRadius: "50%",
          background: "rgba(214,178,94,0.12)",
          filter: "blur(140px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: "-200px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "700px",
          height: "300px",
          borderRadius: "50%",
          background: "rgba(139,92,246,0.08)",
          filter: "blur(150px)",
          pointerEvents: "none",
        }}
      />
    </>
  );
}