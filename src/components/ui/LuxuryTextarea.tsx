"use client";

import { TextareaHTMLAttributes } from "react";
import clsx from "clsx";

interface LuxuryTextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export function LuxuryTextarea({
  label,
  className,
  ...props
}: LuxuryTextareaProps) {
  return (

    <div className="w-full">

      {label && (

        <label
          className="
          mb-4
          block
          text-[11px]
          uppercase
          tracking-[0.45em]
          text-[#D6B25E]
          "
        >
          {label}
        </label>

      )}

      <div
        className="
        group
        relative
        overflow-hidden
        rounded-[30px]
        border
        border-white/10

        bg-[linear-gradient(180deg,rgba(255,255,255,.04),rgba(255,255,255,.015))]

        backdrop-blur-3xl

        transition-all
        duration-500

        focus-within:border-[#D6B25E]/30
        focus-within:shadow-[0_0_60px_rgba(214,178,94,.08)]
        "
      >

        {/* Reflection */}

        <div
          className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          h-20
          bg-gradient-to-b
          from-white/10
          to-transparent
          "
        />

        {/* Glow */}

        <div
          className="
          pointer-events-none
          absolute
          right-[-100px]
          top-[-80px]

          h-52
          w-52

          rounded-full
          bg-[#D6B25E]

          opacity-0
          blur-[100px]

          transition-all
          duration-700

          group-focus-within:opacity-20
          "
        />

        <textarea
          {...props}
          className={clsx(
            `
            relative
            z-10

            min-h-[180px]
            w-full

            resize-none

            bg-transparent

            px-7
            py-7

            text-[16px]
            leading-8
            text-[#F4F1EA]

            outline-none

            placeholder:text-white/25

            `,
            className
          )}
        />

      </div>

    </div>

  );
}