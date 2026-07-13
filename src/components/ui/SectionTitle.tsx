
"use client";

interface SectionTitleProps {
  eyebrow: string;
  title: string;
  description?: string;
  center?: boolean;
}

export function SectionTitle({
  eyebrow,
  title,
  description,
  center = false,
}: SectionTitleProps) {
  return (
    <div
      className={
        center
          ? "mb-8 text-center"
          : "mb-8"
      }
    >
      <p
        className="
        text-[11px]
        uppercase
        tracking-[0.4em]
        text-[#D6B25E]/80
        "
      >
        {eyebrow}
      </p>

      <h2
        className="
        mt-3
        font-[family:var(--font-cormorant)]
        text-3xl
        font-light
        text-[#F4F1EA]
        md:text-4xl
        "
      >
        {title}
      </h2>

      {description && (
        <p
          className="
          mt-4
          max-w-xl
          text-base
          leading-7
          text-white/60
          "
        >
          {description}
        </p>
      )}
    </div>
  );
}

