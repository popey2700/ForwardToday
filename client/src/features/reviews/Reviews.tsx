import { SectionLabel } from '@/components/SectionLabel'
import { FadeUp } from '@/components/FadeUp'
import { ReviewCard } from './ReviewCard'
import { reviews } from '@/data/reviews'

export default function Reviews() {
  return (
    <section id="reviews" className="scroll-mt-16 bg-ft-bg">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-24 md:py-28">
        <FadeUp>
          <div className="text-center mb-14 md:mb-16">
            <SectionLabel>What parents say</SectionLabel>
            <h2 className="text-[clamp(32px,3.5vw,48px)] font-extrabold tracking-[-0.03em] leading-[1.1] text-ft-text mb-5">
              Making a real difference
            </h2>
            <p className="text-[16px] leading-[1.7] text-ft-text-mid max-w-[560px] mx-auto">
              Don't take our word for it — here's what families who've worked with Brigid have to say.
            </p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {reviews.map((review, index) => (
            <FadeUp key={review.id} delayMs={index * 100} className="h-full">
              <ReviewCard review={review} />
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
