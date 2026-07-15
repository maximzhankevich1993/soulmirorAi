import { Container } from "@/components/ui/container";

export const metadata = {
  title: "Terms of Service | SoulMirror AI",
  description:
    "Terms and conditions for using SoulMirror AI services.",
};

export default function TermsPage() {
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
            Terms of Service
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
          ">


            <article>

              <h2 className="text-2xl">
                1. Acceptance of Terms
              </h2>

              <p className="
              mt-4
              leading-8
              text-white/60
              ">
                By accessing or using SoulMirror AI,
                you agree to these Terms of Service.
                If you do not agree with these terms,
                please do not use our services.
              </p>

            </article>



            <article>

              <h2 className="text-2xl">
                2. AI Insights Disclaimer
              </h2>

              <p className="
              mt-4
              leading-8
              text-white/60
              ">
                SoulMirror AI provides reflective and
                symbolic insights designed for personal
                exploration and entertainment.
                It does not provide medical,
                psychological or professional advice.
              </p>

            </article>



            <article>

              <h2 className="text-2xl">
                3. User Content
              </h2>

              <p className="
              mt-4
              leading-8
              text-white/60
              ">
                Users remain responsible for the content
                they submit. You agree not to upload
                unlawful or harmful information.
              </p>

            </article>



            <article>

              <h2 className="text-2xl">
                4. Subscriptions
              </h2>

              <p className="
              mt-4
              leading-8
              text-white/60
              ">
                Premium features may require a paid
                subscription. Subscription terms,
                pricing and available features may
                change over time.
              </p>

            </article>



            <article>

              <h2 className="text-2xl">
                5. Service Availability
              </h2>

              <p className="
              mt-4
              leading-8
              text-white/60
              ">
                We continuously improve SoulMirror AI,
                but we cannot guarantee uninterrupted
                availability of the service.
              </p>

            </article>



          </div>


        </section>


      </Container>


    </main>
  );
}