import { Mail, ChevronRight } from 'lucide-react'
import { BRIGID_EMAIL } from '@/lib/constants'
import { HeroStats } from './HeroStats'
import { HeroFeatureCard } from './HeroFeatureCard'

const heroBg = {
  background: `
    radial-gradient(ellipse 80% 60% at 15% 50%, oklch(0.88 0.08 185 / 0.40) 0%, transparent 70%),
    radial-gradient(ellipse 60% 80% at 85% 20%, oklch(0.90 0.06 155 / 0.25) 0%, transparent 65%),
    radial-gradient(ellipse 50% 50% at 60% 80%, oklch(0.94 0.04 60 / 0.15) 0%, transparent 60%)
  `,
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-ft-bg"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 z-0" style={heroBg} />

      {/* Floating orbs */}
      <div
        className="absolute rounded-full pointer-events-none z-0"
        style={{
          width: 420, height: 420, top: '5%', left: '-8%',
          background: 'oklch(0.82 0.10 188 / 0.28)',
          filter: 'blur(60px)',
          animation: 'float 8s ease-in-out infinite',
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none z-0"
        style={{
          width: 300, height: 300, top: '55%', right: '5%',
          background: 'oklch(0.88 0.07 155 / 0.22)',
          filter: 'blur(60px)',
          animation: 'float 8s ease-in-out infinite',
          animationDelay: '-3s',
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none z-0"
        style={{
          width: 260, height: 260, top: '15%', right: '22%',
          background: 'oklch(0.93 0.06 55 / 0.20)',
          filter: 'blur(60px)',
          animation: 'float 8s ease-in-out infinite',
          animationDelay: '-5s',
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 md:px-12 pt-28 pb-20 lg:pt-36 lg:pb-28 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
        {/* Left column */}
        <div>
          <div className="inline-flex items-center gap-2 bg-[oklch(0.52_0.12_210_/_0.12)] border border-[oklch(0.52_0.12_210_/_0.25)] text-ft-teal-dark text-[11px] font-bold tracking-[0.1em] uppercase px-3.5 py-1.5 rounded-full mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-ft-teal inline-block" />
            Specialist Tutoring · Est. 2010
          </div>

          <h1
            className="text-[clamp(44px,5vw,68px)] font-extrabold leading-[1.05] tracking-[-0.03em] text-ft-text mb-6"
          >
            Building
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, oklch(0.50 0.11 198), oklch(0.76 0.10 192))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Stronger
            </span>
            <br />
            Foundations
          </h1>

          <p className="text-[17px] leading-[1.7] text-ft-text-mid max-w-[480px] mb-10">
            Igniting a love of reading, writing and academic success — with specialist support in
            dyslexia, SATS, GCSE English and lifelong learning confidence.
          </p>

          <div className="flex items-center gap-3.5 flex-wrap">
            <a
              href={`mailto:${BRIGID_EMAIL}`}
              className="inline-flex items-center gap-2 bg-ft-teal text-white text-[14px] font-semibold px-7 py-3.5 rounded-full no-underline hover:bg-ft-teal-dark hover:-translate-y-0.5 transition-all shadow-[0_4px_20px_oklch(0.52_0.12_210_/_0.30)] hover:shadow-[0_8px_28px_oklch(0.52_0.12_210_/_0.40)]"
            >
              <Mail size={16} />
              Get in touch
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-ft-text-mid no-underline hover:text-ft-teal transition-colors group"
            >
              What I offer
              <ChevronRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-4">
          <HeroStats />
          <HeroFeatureCard />
        </div>
      </div>
    </section>
  )
}
