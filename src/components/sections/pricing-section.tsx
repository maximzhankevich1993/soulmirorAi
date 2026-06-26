import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";

type PlanId = "free" | "day" | "pro";

interface Plan {
  id: PlanId;
  name: string;
  price: string;
  period?: string;
  features: string[];
  highlight?: boolean;
}

const plans: Plan[] = [
  {
    id: "free",
    name: "Free",
    price: "$0",
    features: [
      "1 Soul Scan",
      "1 Dream Analysis",
      "1 Tarot Reading",
    ],
  },
  {
    id: "day",
    name: "Day Pass",
    price: "$2.99",
    period: "24h",
    highlight: true,
    features: [
      "Unlimited Soul Scans (24h)",
      "Unlimited Dream Analysis (24h)",
      "Unlimited Tarot Readings (24h)",
    ],
  },
  {
    id: "pro",
    name: "SoulMirror Pro",
    price: "$12.99",
    period: "month",
    highlight: true,
    features: [
      "Unlimited Tarot Readings",
      "Unlimited Dream Analysis",
      "AI Journal Insights",
      "Archetype Discovery",
      "Priority AI Responses",
    ],
  },
];

function handlePlan(plan: Plan) {
  if (plan.id === "free") {
    alert("Free mode activated");
    return;
  }

  if (plan.id === "day") {
    window.location.href = "/api/pay/day";
    return;
  }

  if (plan.id === "pro") {
    window.location.href = "/api/pay/pro";
    return;
  }
}

export function PricingSection() {
  return (
    <section id="pricing" className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D6B25E]/10 blur-3xl" />
        <div className="absolute right-0 top-0 h-[350px] w-[350px] rounded-full bg-[#8B5CF6]/10 blur-3xl" />
      </div>

      <Container className="relative z-10">
        <SectionTitle
          eyebrow="Pricing"
          title="Unlock your inner world"
          description="Start free. Upgrade when you want deeper access."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`
                relative overflow-hidden rounded-3xl border p-8 backdrop-blur-2xl
                transition
                ${
                  plan.highlight
                    ? "border-[#D6B25E]/40 bg-white/[0.05] shadow-[0_0_80px_rgba(214,178,94,0.10)]"
                    : "border-[#D6B25E]/20 bg-white/[0.03]"
                }
              `}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#D6B25E]/10 via-transparent to-[#8B5CF6]/10" />

              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-[#F4F1EA] text-center">
                  {plan.name}
                </h3>

                <div className="mt-6 text-center">
                  <span className="text-5xl font-semibold text-[#F4F1EA]">
                    {plan.price}
                  </span>

                  {plan.period && (
                    <span className="text-sm text-[#F4F1EA]/60">
                      {" "}
                      / {plan.period}
                    </span>
                  )}
                </div>

                <ul className="mt-8 space-y-3 text-sm text-[#F4F1EA]/70">
                  {plan.features.map((f) => (
                    <li key={f}>• {f}</li>
                  ))}
                </ul>

                <div className="mt-10">
                  <Button
                    variant={plan.id === "free" ? "secondary" : "primary"}
                    className="w-full"
                    onClick={() => handlePlan(plan)}
                  >
                    {plan.id === "free"
                      ? "Start Free"
                      : plan.id === "day"
                      ? "Buy 24h Access"
                      : "Upgrade to Pro"}
                  </Button>
                </div>

                <p className="mt-6 text-center text-xs text-[#F4F1EA]/40">
                  Cancel anytime. No hidden fees.
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}