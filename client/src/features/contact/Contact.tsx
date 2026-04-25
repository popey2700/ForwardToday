import { Mail } from 'lucide-react'
import { SectionLabel } from '@/components/SectionLabel'
import { GlassCard } from '@/components/GlassCard'
import { FadeUp } from '@/components/FadeUp'
import { ContactStep } from './ContactStep'
import { contactSteps } from '@/data/contact-steps'
import { BRIGID_EMAIL } from '@/lib/constants'

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 bg-[oklch(0.960_0.018_204)]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-24 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
          {/* Left column */}
          <FadeUp>
            <SectionLabel>Get in touch</SectionLabel>
            <h2 className="text-[clamp(32px,3.5vw,48px)] font-extrabold tracking-[-0.03em] leading-[1.1] text-ft-text mb-5">
              Ready to take the
              <br />
              <span className="text-ft-teal">next step?</span>
            </h2>
            <p className="text-[16px] leading-[1.75] text-ft-text-mid mb-9">
              Whether you have a question, want to discuss your child's needs, or are ready to book —
              Brigid would love to hear from you. No jargon, no pressure, just a friendly conversation.
            </p>
            <a
              href={`mailto:${BRIGID_EMAIL}`}
              className="inline-flex items-center gap-3 px-7 py-[18px] bg-ft-glass-bg backdrop-blur-xl border border-ft-glass-border rounded-2xl text-[18px] font-bold text-ft-teal-dark no-underline shadow-[0_4px_20px_oklch(0.55_0.07_200_/_0.10)] hover:-translate-y-0.5 hover:shadow-[0_8px_32px_oklch(0.45_0.08_195_/_0.20)] transition-all"
            >
              <Mail size={20} className="text-ft-teal" strokeWidth={2} />
              {BRIGID_EMAIL}
            </a>
          </FadeUp>

          {/* Right column */}
          <FadeUp delayMs={200}>
            <GlassCard className="p-10">
              <h3 className="text-[18px] font-bold text-ft-text mb-5">
                What to expect
              </h3>
              {contactSteps.map((step, index) => (
                <ContactStep
                  key={step.id}
                  step={step}
                  isLast={index === contactSteps.length - 1}
                />
              ))}
            </GlassCard>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
