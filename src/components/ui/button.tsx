type ButtonProps = {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary";
  onClick?: () => void;
};

export function Button({
  children,
  type = "button",
  variant = "primary",
  onClick,
}: ButtonProps) {
  const styles =
    variant === "primary"
      ? {
          background: "var(--gold)",
          color: "#09090B",
          border: "none",
        }
      : {
          background: "rgba(255,255,255,0.03)",
          color: "var(--ivory)",
          border: "1px solid var(--border)",
        };

  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        ...styles,
        padding: "14px 24px",
        borderRadius: "16px",
        fontWeight: 600,
        transition: "all .2s ease",
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
}