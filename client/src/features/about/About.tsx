import { SectionLabel } from '@/components/SectionLabel'
import { FadeUp } from '@/components/FadeUp'
import { CredentialItem } from './CredentialItem'

interface AboutProps {
  photoSrc?: string
}

const credentials = [
  {
    label: 'Level 5 Certificate in Dyslexia',
    description: '— Literacy Support & Intervention, British Dyslexia Association',
  },
  {
    label: 'PATOSS Member',
    description: '— one of the UK\'s leading specialist organisations for SpLD professionals',
  },
  {
    label: 'Enhanced DBS',
    description: '— fully insured and background-checked for your peace of mind',
  },
  {
    label: 'Emotional Literacy Support Assistant (ELSA)',
    description: '— trained to support emotional wellbeing alongside academic progress',
  },
]

export default function About({ photoSrc }: AboutProps) {
  return (
    <section id="about" className="scroll-mt-16 bg-ft-bg">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-24 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
          {/* Photo column */}
          <FadeUp>
            <div className="relative">
              {photoSrc ? (
                <img
                  src={photoSrc}
                  alt="Brigid"
                  className="w-full aspect-[3/4] object-cover rounded-[28px]"
                />
              ) : (
                <div
                  className="relative w-full aspect-[3/4] rounded-[28px] flex flex-col items-center justify-center gap-3 overflow-hidden border-2 border-dashed border-[oklch(0.7_0.06_210_/_0.4)]"
                  style={{
                    background: 'linear-gradient(160deg, oklch(0.88 0.04 215) 0%, oklch(0.82 0.07 210) 100%)',
                  }}
                >
                  {/* Hatch pattern */}
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `repeating-linear-gradient(
                        -45deg,
                        transparent,
                        transparent 12px,
                        oklch(0.75 0.06 210 / 0.12) 12px,
                        oklch(0.75 0.06 210 / 0.12) 13px
                      )`,
                    }}
                  />
                  <div className="relative z-10 bg-[oklch(0.98_0.01_215_/_0.7)] px-5 py-3 rounded-xl backdrop-blur-sm text-center">
                    <p className="text-[12px] text-[oklch(0.45_0.06_210)] font-mono">portrait photo of Brigid</p>
                    <p className="text-[11px] text-[oklch(0.62_0.04_210)] font-mono mt-1">~600 × 800px recommended</p>
                  </div>
                </div>
              )}

              {/* DBS badge — hidden on small screens to avoid overflow */}
              <div className="hidden md:block absolute bottom-7 -right-5 bg-ft-glass-bg backdrop-blur-xl border border-ft-glass-border rounded-2xl px-5 py-4 shadow-[0_8px_32px_oklch(0.55_0.07_200_/_0.10)] min-w-[180px]">
                <p className="text-[13px] font-bold text-ft-text mb-1 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[oklch(0.72_0.10_165)] inline-block" />
                  Enhanced DBS Checked
                </p>
                <p className="text-[11px] text-ft-text-soft leading-[1.5]">Fully insured & PATOSS member</p>
              </div>
            </div>
          </FadeUp>

          {/* Text column */}
          <div>
            <FadeUp>
              <SectionLabel>About Brigid</SectionLabel>
            </FadeUp>

            <FadeUp delayMs={100}>
              <h2 className="text-[clamp(32px,3.5vw,48px)] font-extrabold tracking-[-0.03em] leading-[1.1] text-ft-text mb-6">
                A tutor who genuinely
                <br />
                <span className="text-ft-teal">understands</span> your child
              </h2>
            </FadeUp>

            <FadeUp delayMs={200}>
              <p className="text-[15px] leading-[1.8] text-ft-text-mid mb-5">
                Brigid specialises in supporting individuals with dyslexia — with or without a formal
                diagnosis — helping them overcome challenges and develop efficient reading and writing
                skills.
              </p>
              <p className="text-[15px] leading-[1.8] text-ft-text-mid mb-5">
                She offers bespoke support for those seeking to improve literacy levels, build
                confidence in GCSE English, navigate functional skills, assist with assignments and
                prepare for SATS — bringing patience, warmth and genuine expertise to every session.
              </p>
              <p className="text-[15px] leading-[1.8] text-ft-text-mid">
                Brigid can also help with valuable revision techniques, efficient time management and
                exam preparation — ensuring every student feels genuinely prepared for whatever
                academic challenge lies ahead.
              </p>
            </FadeUp>

            <FadeUp delayMs={300}>
              <div className="flex flex-col gap-3 mt-8">
                {credentials.map((credential) => (
                  <CredentialItem
                    key={credential.label}
                    label={credential.label}
                    description={credential.description}
                  />
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  )
}
