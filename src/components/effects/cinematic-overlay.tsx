"use client";

export function CinematicOverlay() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[9998] overflow-hidden">
      {/* Ambient Glow */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[700px]
          w-[700px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-amber-400/[0.035]
          blur-[110px]
        "
      />

      {/* Top Light */}

      <div
        className="
          absolute
          -top-64
          left-1/2
          h-[550px]
          w-[750px]
          -translate-x-1/2
          rounded-full
          bg-amber-300/[0.025]
          blur-[100px]
        "
      />

      {/* Bottom Glow */}

      <div
        className="
          absolute
          bottom-[-250px]
          left-1/2
          h-[550px]
          w-[750px]
          -translate-x-1/2
          rounded-full
          bg-yellow-500/[0.02]
          blur-[110px]
        "
      />
    </div>
  );
}