import { SectionLabel } from '@/components/SectionLabel'
import { FadeUp } from '@/components/FadeUp'
import { PricingCard } from './PricingCard'
import { pricingOptions } from '@/data/pricing'
import { BRIGID_EMAIL } from '@/lib/constants'

const pricingBg = {
  background: `
    radial-gradient(ellipse 70% 60% at 20% 50%, oklch(0.65 0.12 185 / 0.25) 0%, transparent 70%),
    radial-gradient(ellipse 50% 70% at 80% 30%, oklch(0.72 0.09 165 / 0.18) 0%, transparent 70%),
    radial-gradient(ellipse 40% 40% at 50% 90%, oklch(0.75 0.07 55 / 0.10) 0%, transparent 60%)
  `,
}

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="scroll-mt-16 relative overflow-hidden bg-[oklch(0.960_0.018_204)]"
    >
      <div className="absolute inset-0 z-0" style={pricingBg} />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-12 py-24 md:py-28">
        <FadeUp>
          <div className="text-center max-w-[560px] mx-auto">
            <SectionLabel>Tutoring Prices</SectionLabel>
            <h2 className="text-[clamp(32px,3.5vw,48px)] font-extrabold tracking-[-0.03em] leading-[1.1] text-ft-text mb-5">
              Simple, transparent pricing
            </h2>
            <p className="text-[16px] leading-[1.7] text-ft-text-mid">
              Forward Today offers tutoring for Primary, Secondary and FE students — tailored
              sessions custom to each student, individually or in small groups.
            </p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14 md:mt-16">
          {pricingOptions.map((plan, index) => (
            <FadeUp key={plan.id} delayMs={index * 100}>
              <PricingCard plan={plan} />
            </FadeUp>
          ))}
        </div>

        <FadeUp>
          <p className="text-center mt-8 text-[14px] text-[oklch(0.55_0.04_215)]">
            Not sure what you need?{' '}
            <a
              href={`mailto:${BRIGID_EMAIL}`}
              className="text-ft-teal-light font-semibold no-underline hover:underline"
            >
              Send Brigid a message
            </a>
            {' '}— she's happy to chat through the options with no obligation.
          </p>
        </FadeUp>
      </div>
    </section>
  )
}
