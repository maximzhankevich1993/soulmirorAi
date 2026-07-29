import { Container } from "@/components/ui/container";

export default function Loading() {
  return (
    <main
      className="
      relative
      flex
      min-h-screen
      items-center
      justify-center
      overflow-hidden
      bg-[#050505]
      text-[#F4F1EA]
      "
    >
      {/* Background */}

      <div
        className="
        absolute
        inset-0
        bg-[radial-gradient(circle_at_center,#151515_0%,#090909_40%,#050505_100%)]
        "
      />

      {/* Golden Fog */}

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
        bg-[#D6B25E]/10
        blur-[180px]
        animate-pulse
        "
      />

      {/* Purple Fog */}

      <div
        className="
        absolute
        left-1/2
        top-1/2
        h-[500px]
        w-[500px]
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        bg-[#8B5CF6]/10
        blur-[220px]
        "
      />

      {/* Film Grain */}

      <div
        className="
        absolute
        inset-0
        opacity-[0.04]
        mix-blend-soft-light
        bg-[url('/noise.png')]
        "
      />

      <Container className="relative z-20">

        <div
          className="
          flex
          flex-col
          items-center
          "
        >

          {/* Outer Halo */}

          <div
            className="
            absolute
            h-[260px]
            w-[260px]
            rounded-full
            border
            border-[#D6B25E]/10
            animate-[spin_45s_linear_infinite]
            "
          />

          <div
            className="
            absolute
            h-[210px]
            w-[210px]
            rounded-full
            border
            border-[#8B5CF6]/10
            animate-[spin_35s_linear_infinite_reverse]
            "
          />

          {/* Core */}

          <div
            className="
            relative
            flex
            h-24
            w-24
            items-center
            justify-center
            "
          >

            <div
              className="
              absolute
              inset-0
              rounded-full
              bg-[#D6B25E]/30
              blur-2xl
              animate-pulse
              "
            />

            <div
              className="
              absolute
              h-16
              w-16
              rounded-full
              border
              border-[#D6B25E]/60
              "
            />

            <div
              className="
              h-5
              w-5
              rounded-full
              bg-[#F4F1EA]
              shadow-[0_0_40px_rgba(214,178,94,.8)]
              animate-pulse
              "
            />

          </div>

          <p
            className="
            mt-14
            text-[11px]
            uppercase
            tracking-[0.8em]
            text-[#D6B25E]
            "
          >
            EON AI
          </p>

          <h1
            className="
            mt-5
            text-5xl
            font-light
            tracking-[0.25em]
            "
          >
            SOUL SPACE
          </h1>

          <p
            className="
            mt-8
            max-w-xl
            text-center
            text-sm
            leading-8
            text-white/45
            "
          >
            Synchronizing memories • Building identity model •
            Entering personal intelligence
          </p>

          {/* Loading Bar */}

          <div
            className="
            mt-16
            h-[2px]
            w-72
            overflow-hidden
            rounded-full
            bg-white/10
            "
          >
            <div
              className="
              h-full
              w-1/2
              animate-[loading_2.8s_ease-in-out_infinite]
              bg-gradient-to-r
              from-transparent
              via-[#D6B25E]
              to-transparent
              "
            />
          </div>

        </div>

      </Container>

      <style jsx global>{`
        @keyframes loading {
          0% {
            transform: translateX(-120%);
          }
          50% {
            transform: translateX(220%);
          }
          100% {
            transform: translateX(220%);
          }
        }
      `}</style>
    </main>
  );
}