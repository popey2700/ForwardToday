import { ChevronRight } from 'lucide-react'
import { GlassCard } from '@/components/GlassCard'
import type { ServiceItem } from '@/types'

interface ServiceCardProps {
  service: ServiceItem
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon

  return (
    <GlassCard className="p-7 md:p-8 flex flex-col hover:-translate-y-1 transition-transform duration-250">
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 flex-shrink-0 shadow-[0_4px_12px_oklch(0.52_0.12_210_/_0.30)]"
        style={{
          background: 'linear-gradient(135deg, oklch(0.62 0.13 195), oklch(0.76 0.10 192))',
        }}
      >
        <Icon size={20} stroke="white" strokeWidth={2} />
      </div>

      <h3 className="text-[16px] font-bold tracking-[-0.02em] text-ft-text mb-3">
        {service.title}
      </h3>

      <p className="text-[14px] leading-[1.7] text-ft-text-mid flex-1">
        {service.description}
      </p>

      <div className="flex items-center gap-1.5 mt-5 text-[12px] font-semibold text-ft-teal">
        <ChevronRight size={14} strokeWidth={2.5} />
        {service.accentText}
      </div>
    </GlassCard>
  )
}
