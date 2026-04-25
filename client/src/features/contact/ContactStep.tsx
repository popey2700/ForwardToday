import type { ContactStepItem } from '@/types'

interface ContactStepProps {
  step: ContactStepItem
  isLast: boolean
}

export function ContactStep({ step, isLast }: ContactStepProps) {
  const Icon = step.icon

  return (
    <div
      className={`flex items-start gap-3 py-3.5 ${isLast ? '' : 'border-b border-[oklch(0.82_0.04_200_/_0.4)]'}`}
    >
      <div className="w-9 h-9 rounded-[10px] bg-[oklch(0.62_0.13_195_/_0.10)] flex items-center justify-center flex-shrink-0">
        <Icon size={16} className="text-ft-teal" strokeWidth={2} />
      </div>
      <div>
        <p className="text-[12px] font-bold uppercase tracking-[0.06em] text-ft-text-soft mb-1">
          {step.title}
        </p>
        <p className="text-[14px] text-ft-text-mid leading-[1.6]">
          {step.description}
        </p>
      </div>
    </div>
  )
}
