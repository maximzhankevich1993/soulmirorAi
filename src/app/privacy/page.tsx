import { Container } from "@/components/ui/container";

export const metadata = {
  title: "Privacy Policy | SoulMirror AI",
  description:
    "Privacy policy explaining how SoulMirror AI handles user data, AI processing and personal information.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#09090B] pt-32 text-[#F4F1EA]">

      <Container>

        <section className="mx-auto max-w-4xl">

          <p className="
          text-xs
          uppercase
          tracking-[0.4em]
          text-[#D6B25E]
          ">
            Legal
          </p>


          <h1 className="
          mt-6
          font-[family:var(--font-cormorant)]
          text-6xl
          font-light
          ">
            Privacy Policy
          </h1>


          <p className="
          mt-8
          text-white/50
          ">
            Last updated: July 2026
          </p>



          <div className="
          mt-12
          space-y-10
          "
          >


            <article>

              <h2 className="text-2xl">
                1. Information We Collect
              </h2>

              <p className="
              mt-4
              leading-8
              text-white/60
              ">
                SoulMirror AI may collect information you provide
                when using our services, including reflections,
                dreams, journal entries and account information.
              </p>

            </article>



            <article>

              <h2 className="text-2xl">
                2. AI Processing
              </h2>

              <p className="
              mt-4
              leading-8
              text-white/60
              ">
                Your submitted content may be processed by
                artificial intelligence systems to generate
                reflections, interpretations and personalized
                insights.
              </p>

            </article>



            <article>

              <h2 className="text-2xl">
                3. Personal Data Protection
              </h2>

              <p className="
              mt-4
              leading-8
              text-white/60
              ">
                We take reasonable measures to protect user
                information and maintain secure handling of
                personal data.
              </p>

            </article>



            <article>

              <h2 className="text-2xl">
                4. Payments
              </h2>

              <p className="
              mt-4
              leading-8
              text-white/60
              ">
                Subscription payments are processed through
                third-party payment providers. SoulMirror AI
                does not store complete payment card information.
              </p>

            </article>



            <article>

              <h2 className="text-2xl">
                5. Your Rights
              </h2>

              <p className="
              mt-4
              leading-8
              text-white/60
              ">
                You may request access, correction or deletion
                of your personal information where applicable.
              </p>

            </article>


          </div>


        </section>


      </Container>

    </main>
  );
}