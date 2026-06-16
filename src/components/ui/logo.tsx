import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-3 transition-all duration-300"
    >
      {/* Symbol */}
      <div className="relative flex h-10 w-10 items-center justify-center">
        {/* Outer Glow */}
        <div className="absolute inset-0 rounded-full bg-[#D6B25E]/10 blur-xl transition-all duration-500 group-hover:bg-[#D6B25E]/20" />

        {/* Orb */}
        <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-[#D6B25E]/30 bg-gradient-to-br from-[#D6B25E]/20 via-transparent to-[#8B5CF6]/20 backdrop-blur-xl">
          {/* Moon */}
          <div className="relative h-4 w-4 rounded-full border border-[#D6B25E]/70">
            <div className="absolute -right-1 top-0 h-4 w-4 rounded-full bg-[#09090B]" />
          </div>
        </div>
      </div>

      {/* Wordmark */}
      <div className="flex flex-col leading-none">
        <span
          className="
            font-[family:var(--font-cormorant)]
            text-2xl
            font-semibold
            tracking-[0.04em]
            text-[#F4F1EA]
            transition-all
            duration-300
            group-hover:text-white
          "
        >
          SoulMirror
        </span>

        <span
          className="
            text-[10px]
            uppercase
            tracking-[0.35em]
            text-[#D6B25E]
          "
        >
          AI
        </span>
      </div>
    </Link>
  );
}