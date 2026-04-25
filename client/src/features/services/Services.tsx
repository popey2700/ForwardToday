import { SectionLabel } from '@/components/SectionLabel'
import { FadeUp } from '@/components/FadeUp'
import { ServiceCard } from './ServiceCard'
import { services } from '@/data/services'

export default function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-16 bg-[oklch(0.960_0.018_204)]"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-24 md:py-28">
        {/* Header */}
        <FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-end mb-14 md:mb-16">
            <div>
              <SectionLabel>What I offer</SectionLabel>
              <h2 className="text-[clamp(32px,3.5vw,48px)] font-extrabold tracking-[-0.03em] leading-[1.1] text-ft-text">
                Specialist skills,
                <br />
                tailored to you
              </h2>
            </div>
            <p className="text-[16px] leading-[1.7] text-ft-text-mid max-w-[560px]">
              Every student is different. Brigid brings a rich toolkit of specialist methods and
              genuine warmth to every session — helping students not just keep up, but thrive.
            </p>
          </div>
        </FadeUp>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <FadeUp key={service.id} delayMs={(index % 3) * 100} className="h-full">
              <ServiceCard service={service} />
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
