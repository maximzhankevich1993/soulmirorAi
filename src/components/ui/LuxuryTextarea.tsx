```tsx id="7x3m1p"
"use client";

import { TextareaHTMLAttributes } from "react";

interface LuxuryTextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export function LuxuryTextarea({
  label,
  className = "",
  ...props
}: LuxuryTextareaProps) {
  return (
    <div className="w-full">
      {label && (
        <label
          className="
          mb-3
          block
          text-[11px]
          uppercase
          tracking-[0.35em]
          text-white/40
          "
        >
          {label}
        </label>
      )}

      <textarea
        {...props}
        className={`
          min-h-[130px]
          w-full
          resize-none
          rounded-3xl
          border
          border-white/10
          bg-black/20
          p-5
          text-base
          leading-7
          text-[#F4F1EA]
          outline-none
          placeholder:text-white/30
          transition-all
          duration-300
          focus:border-[#D6B25E]/40
          focus:bg-black/30
          ${className}
        `}
      />
    </div>
  );
}
```
