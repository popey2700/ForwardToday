import { GlassCard } from '@/components/GlassCard'

const stats = [
  { value: '17+',    label: 'Years experience' },
  { value: 'BDA',    label: 'Accredited Level 5' },
  { value: 'PATOSS', label: 'Member' },
]

export function HeroStats() {
  return (
    <GlassCard>
      <div className="grid grid-cols-3">
        {stats.map((stat, index) => (
          <div
            key={stat.value}
            className="relative px-6 py-7 text-center"
          >
            {index > 0 && (
              <div className="absolute left-0 top-[20%] bottom-[20%] w-px bg-[oklch(0.7_0.04_215_/_0.3)]" />
            )}
            <span className="block text-[32px] font-extrabold text-ft-teal-dark tracking-[-0.03em]">
              {stat.value}
            </span>
            <span className="block text-[11px] font-semibold text-ft-text-soft tracking-[0.05em] uppercase mt-1">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </GlassCard>
  )
}
