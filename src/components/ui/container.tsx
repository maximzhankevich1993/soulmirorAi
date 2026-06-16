type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div
      className={className}
      style={{
        width: "100%",
        maxWidth: "1280px",
        margin: "0 auto",
        paddingLeft: "24px",
        paddingRight: "24px",
      }}
    >
      {children}
    </div>
  );
}