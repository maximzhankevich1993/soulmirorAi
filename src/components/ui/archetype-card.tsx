type ArchetypeCardProps = {
  title: string;
  subtitle: string;
};

export function ArchetypeCard({
  title,
  subtitle,
}: ArchetypeCardProps) {
  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "32px",
        minHeight: "260px",
        borderRadius: "28px",
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))",
        border: "1px solid rgba(255,255,255,0.08)",
        backdropFilter: "blur(20px)",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "-40px",
          right: "-40px",
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          background: "rgba(214,178,94,0.08)",
          filter: "blur(40px)",
        }}
      />

      <div
        style={{
          color: "var(--gold)",
          fontSize: "12px",
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          marginBottom: "20px",
        }}
      >
        Archetype
      </div>

      <h3
        style={{
          fontSize: "32px",
          lineHeight: 1.1,
          marginBottom: "16px",
        }}
      >
        {title}
      </h3>

      <p
        style={{
          opacity: 0.75,
          lineHeight: 1.7,
        }}
      >
        {subtitle}
      </p>
    </div>
  );
}