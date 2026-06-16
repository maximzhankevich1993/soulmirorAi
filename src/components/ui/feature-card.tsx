type FeatureCardProps = {
  title: string;
  description: string;
};

export function FeatureCard({
  title,
  description,
}: FeatureCardProps) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "24px",
        padding: "32px",
        backdropFilter: "blur(20px)",
        transition: "all .3s ease",
      }}
    >
      <h3
        style={{
          fontSize: "24px",
          marginBottom: "16px",
          color: "var(--ivory)",
        }}
      >
        {title}
      </h3>

      <p
        style={{
          lineHeight: 1.7,
          opacity: 0.75,
        }}
      >
        {description}
      </p>
    </div>
  );
}