type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description: string;
};

export function SectionTitle({
  eyebrow,
  title,
  description,
}: SectionTitleProps) {
  return (
    <div
      style={{
        textAlign: "center",
        maxWidth: "760px",
        margin: "0 auto",
      }}
    >
      {eyebrow && (
        <div
          style={{
            color: "var(--gold)",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            fontSize: "12px",
            marginBottom: "12px",
          }}
        >
          {eyebrow}
        </div>
      )}

      <h2
        style={{
          fontSize: "clamp(36px, 5vw, 56px)",
          lineHeight: 1.1,
          marginBottom: "20px",
        }}
      >
        {title}
      </h2>

      <p
        style={{
          opacity: 0.75,
          lineHeight: 1.8,
          fontSize: "18px",
        }}
      >
        {description}
      </p>
    </div>
  );
}