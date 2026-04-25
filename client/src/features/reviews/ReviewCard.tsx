import { GlassCard } from '@/components/GlassCard'
import type { ReviewItem } from '@/types'

interface ReviewCardProps {
  review: ReviewItem
}

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <GlassCard className="p-8 flex flex-col hover:-translate-y-0.5 transition-transform duration-250">
      <div className="flex gap-0.5 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className="text-[oklch(0.72_0.16_65)] text-[14px]">★</span>
        ))}
      </div>

      <p className="text-[15px] leading-[1.75] text-ft-text-mid italic flex-1 mb-6">
        <span className="text-ft-teal-light text-[28px] leading-[0] align-[-10px] mr-0.5 not-italic">"</span>
        {review.text}
      </p>

      <div className="flex items-center gap-3.5">
        <div
          className="w-[42px] h-[42px] rounded-full flex items-center justify-center text-[15px] font-bold text-white flex-shrink-0"
          style={{
            background: 'linear-gradient(135deg, oklch(0.76 0.10 192), oklch(0.70 0.07 190))',
          }}
        >
          {review.author[0]}
        </div>
        <div>
          <p className="text-[14px] font-bold text-ft-text">{review.author}</p>
          <p className="text-[12px] text-ft-text-soft mt-0.5">{review.role}</p>
        </div>
      </div>
    </GlassCard>
  )
}
