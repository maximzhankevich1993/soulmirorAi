```tsx
"use client";

import { ReactNode } from "react";
import { GlassCard } from "./GlassCard";
import { GlowIcon } from "./GlowIcon";
import { GradientButton } from "./GradientButton";
import { LuxuryTextarea } from "./LuxuryTextarea";

interface AIConsoleProps {
  icon: ReactNode;
  eyebrow: string;
  title: string;
  placeholder: string;

  value: string;
  onChange: (value: string) => void;

  onSubmit: () => void;

  loading: boolean;
  buttonText: string;
  loadingText: string;

  result?: ReactNode;

  color?: "gold" | "purple";
}

export function AIConsole({
  icon,
  eyebrow,
  title,
  placeholder,
  value,
  onChange,
  onSubmit,
  loading,
  buttonText,
  loadingText,
  result,
  color = "gold",
}: AIConsoleProps) {
  return (
    <section className="mx-auto mt-16 w-full max-w-4xl px-6">
      <GlassCard>
        <div className="flex items-center gap-3 mb-6">

          <GlowIcon color={color}>
            {icon}
          </GlowIcon>

          <div>
            <p
              className="
              text-[11px]
              uppercase
              tracking-[0.35em]
              text-white/40
              "
            >
              {eyebrow}
            </p>

            <h2
              className="
              mt-1
              text-2xl
              font-light
              text-[#F4F1EA]
              "
            >
              {title}
            </h2>
          </div>

        </div>


        <LuxuryTextarea
          value={value}
          onChange={(e) =>
            onChange(e.target.value)
          }
          placeholder={placeholder}
        />


        <div className="mt-5">
          <GradientButton
            onClick={onSubmit}
            disabled={loading}
          >
            {loading
              ? loadingText
              : buttonText}
          </GradientButton>
        </div>


        {result && (
          <div className="mt-8">
            {result}
          </div>
        )}

      </GlassCard>
    </section>
  );
}
```
