```tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";

import { Button } from "@/components/ui/button";

interface PremiumModalProps {
  open: boolean;
  onClose: () => void;
}

export function PremiumModal({
  open,
  onClose,
}: PremiumModalProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-[90] bg-black/70 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
            }}
            transition={{
              duration: 0.25,
            }}
            className="
              fixed
              left-1/2
              top-1/2
              z-[100]
              w-[92%]
              max-w-xl
              -translate-x-1/2
              -translate-y-1/2
              overflow-hidden
              rounded-3xl
              border
              border-[#D6B25E]/20
              bg-[#09090B]
              p-8
              shadow-[0_0_80px_rgba(214,178,94,0.15)]
            "
          >
            <div className="text-center">
              <div className="mb-6 text-5xl">
                ✦
              </div>

              <h2 className="font-[family:var(--font-cormorant)] text-4xl text-[#F4F1EA]">
                Unlock SoulMirror Premium
              </h2>

              <p className="mt-4 leading-relaxed text-[#F4F1EA]/70">
                Your free insights have ended.
                Continue exploring your inner world with
                unlimited Soul Scans, Dream Analysis and
                Tarot Readings.
              </p>

              <div
                className="
                  mt-8
                  rounded-2xl
                  border
                  border-[#D6B25E]/20
                  bg-white/[0.03]
                  p-6
                "
              >
                <div className="text-5xl text-[#D6B25E]">
                  $9
                </div>

                <div className="mt-2 text-sm uppercase tracking-[0.3em] text-[#D6B25E]/70">
                  Monthly Premium
                </div>
              </div>

              <div className="mt-8">
                <Button
                  variant="primary"
                  className="w-full"
                >
                  Upgrade Now
                </Button>
              </div>

              <button
                onClick={onClose}
                className="mt-6 text-sm text-[#F4F1EA]/50 transition hover:text-[#F4F1EA]"
              >
                Maybe later
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
```
