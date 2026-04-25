import type { LucideIcon } from 'lucide-react'

export interface ServiceItem {
  id: string
  icon: LucideIcon
  title: string
  description: string
  accentText: string
}

export interface ReviewItem {
  id: string
  author: string
  role: string
  text: string
}

export type PricingVariant = 'standard' | 'featured'

export interface PricingItem {
  id: string
  variant: PricingVariant
  badge?: string
  title: string
  description: string
  features: string[]
  ctaText: string
}

export interface ContactStepItem {
  id: string
  icon: LucideIcon
  title: string
  description: string
}
