import { MessageSquare, Search, FileText, TrendingUp } from 'lucide-react'
import type { ContactStepItem } from '@/types'

export const contactSteps: ContactStepItem[] = [
  {
    id: 'conversation',
    icon: MessageSquare,
    title: 'Initial conversation',
    description: "A friendly, no-obligation chat about your child's needs and what Brigid can offer.",
  },
  {
    id: 'assessment',
    icon: Search,
    title: 'Assessment',
    description: "A short initial assessment to understand your child's current level and specific needs.",
  },
  {
    id: 'plan',
    icon: FileText,
    title: 'Bespoke plan',
    description: "A tailored learning plan put together just for your child, ready for session one.",
  },
  {
    id: 'progress',
    icon: TrendingUp,
    title: 'Ongoing progress',
    description: "Regular updates so you always know how your child is doing and what's next.",
  },
]
