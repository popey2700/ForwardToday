import { GlassCard } from '@/components/GlassCard'

const tags = ['Dyslexia Specialist', 'SATS Prep', 'GCSE English', 'ELSA', 'Multi-sensory']

export function HeroFeatureCard() {
  return (
    <GlassCard className="p-6 md:p-7">
      <h3 className="text-[14px] font-bold text-ft-text tracking-[-0.01em] mb-2.5">
        Specialist support for every learner
      </h3>
      <p className="text-[13px] leading-[1.65] text-ft-text-mid">
        From primary school through to university, Brigid offers tailored one-to-one and small group
        tuition — with a particular expertise in dyslexia and SpLD support.
      </p>
      <div className="flex flex-wrap gap-1.5 mt-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-[11px] font-semibold px-3 py-1 rounded-full bg-[oklch(0.52_0.12_210_/_0.10)] text-ft-teal-dark border border-[oklch(0.52_0.12_210_/_0.20)]"
          >
            {tag}
          </span>
        ))}
      </div>
    </GlassCard>
  )
}
