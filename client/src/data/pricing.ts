import type { PricingItem } from '@/types'

export const pricingOptions: PricingItem[] = [
  {
    id: 'individual',
    variant: 'standard',
    title: 'Individual Sessions',
    description:
      "One-to-one tuition tailored entirely to your child's specific needs, pace and learning style. The most direct route to progress.",
    features: [
      'Fully personalised session plan',
      'Dyslexia & SpLD specialist support',
      'SATS, GCSE & A-Level preparation',
      'Flexible scheduling',
      'Regular progress updates for parents',
      'Resources provided',
    ],
    ctaText: 'Enquire about pricing →',
  },
  {
    id: 'group',
    variant: 'featured',
    badge: 'Also available',
    title: 'Group Sessions',
    description:
      'Small, carefully matched groups that combine peer motivation with focused specialist attention. Great value and great fun.',
    features: [
      'Maximum 3–4 students per group',
      'Matched by level & learning need',
      'Collaborative learning environment',
      'Ideal for SATS & GCSE revision',
      'Social confidence building',
      'Regular updates to all parents',
    ],
    ctaText: 'Enquire about groups →',
  },
]
