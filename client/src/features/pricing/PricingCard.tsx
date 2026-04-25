import { cn } from '@/lib/utils'
import { BRIGID_EMAIL } from '@/lib/constants'
import type { PricingItem } from '@/types'

interface PricingCardProps {
  plan: PricingItem
}

function CheckIcon() {
  return (
    <svg
      className="flex-shrink-0 mt-0.5"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <circle cx="8" cy="8" r="7.25" fill="oklch(0.68 0.1 200 / 0.3)" stroke="oklch(0.72 0.1 200 / 0.6)" strokeWidth="1.5" />
      <path d="M4 8l3 3 5-5" stroke="oklch(0.55 0.12 195)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function PricingCard({ plan }: PricingCardProps) {
  const isFeatured = plan.variant === 'featured'

  return (
    <div
      className={cn(
        'h-full rounded-3xl p-10 flex flex-col',
        isFeatured
          ? 'bg-[oklch(0.52_0.13_195_/_0.08)] border border-[oklch(0.62_0.13_195_/_0.30)] shadow-[0_4px_32px_oklch(0.52_0.13_195_/_0.15),inset_0_1px_0_oklch(1_0_0_/_0.5)] -translate-y-1'
          : 'bg-ft-glass-bg backdrop-blur-xl border border-ft-glass-border shadow-[0_4px_24px_oklch(0.55_0.07_200_/_0.10),inset_0_1px_0_oklch(1_0_0_/_0.6)]'
      )}
    >
      {plan.badge && (
        <span className="self-start mb-6 text-[10px] font-bold tracking-[0.1em] uppercase px-3 py-1 rounded-full bg-[oklch(0.62_0.13_195_/_0.12)] text-ft-teal-dark border border-[oklch(0.62_0.13_195_/_0.3)]">
          {plan.badge}
        </span>
      )}

      <h3 className="text-[22px] font-bold text-ft-text tracking-[-0.02em] mb-2">
        {plan.title}
      </h3>
      <p className="text-[14px] leading-[1.7] text-ft-text-mid mb-7">
        {plan.description}
      </p>

      <ul className="flex flex-col gap-3 flex-1">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-[14px] text-ft-text-mid leading-[1.5]">
            <CheckIcon />
            {feature}
          </li>
        ))}
      </ul>

      <a
        href={`mailto:${BRIGID_EMAIL}`}
        className={cn(
          'mt-8 flex items-center justify-center w-full py-3.5 rounded-xl text-[14px] font-semibold no-underline transition-all',
          isFeatured
            ? 'bg-ft-teal text-white shadow-[0_4px_16px_oklch(0.52_0.12_195_/_0.35)] hover:bg-ft-teal-dark hover:-translate-y-px'
            : 'bg-[oklch(0.62_0.13_195_/_0.08)] text-ft-teal-dark border border-[oklch(0.62_0.13_195_/_0.25)] hover:bg-[oklch(0.62_0.13_195_/_0.14)]'
        )}
      >
        {plan.ctaText}
      </a>
    </div>
  )
}
