import * as React from "react";

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionTitleProps) {
  return (
    <div
      className={`
        w-full
        ${align === "center" ? "text-center" : "text-left"}
      `}
    >
      {eyebrow && (
        <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[#D6B25E]/70">
          {eyebrow}
        </p>
      )}

      <h2
        className="
          font-[family:var(--font-cormorant)]
          text-3xl
          font-semibold
          leading-tight
          tracking-tight
          text-[#F4F1EA]
          md:text-4xl
          lg:text-5xl
        "
      >
        <span
          className="
            bg-gradient-to-r
            from-[#F4F1EA]
            via-[#D6B25E]
            to-[#8B5CF6]
            bg-clip-text
            text-transparent
          "
        >
          {title}
        </span>
      </h2>

      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#F4F1EA]/60 md:text-base">
          {description}
        </p>
      )}
    </div>
  );
}