import { BookOpen, Heart, Clock, Activity, Users, Info } from 'lucide-react'
import type { ServiceItem } from '@/types'

export const services: ServiceItem[] = [
  {
    id: 'dyslexia',
    icon: BookOpen,
    title: 'Dyslexia & SpLD Support',
    description:
      'Accredited Level 5 specialist in dyslexia, literacy support and intervention. Brigid has 17 years of experience helping dyslexic and non-dyslexic students alike build reading, writing and spelling confidence.',
    accentText: 'BDA Accredited Certificate',
  },
  {
    id: 'elsa',
    icon: Heart,
    title: 'Emotional Literacy (ELSA)',
    description:
      'As a trained Emotional Literacy Support Assistant, Brigid helps students navigate emotions, build resilience and develop healthy coping strategies — creating the emotional foundation for academic success.',
    accentText: 'Anxiety & self-esteem support',
  },
  {
    id: 'multisensory',
    icon: Clock,
    title: 'Multi-sensory Teaching',
    description:
      'Using research-backed multi-sensory methods to teach reading and spelling skills, Brigid tailors every lesson to the individual — ideal for students working towards GCSEs, A-Levels or university study.',
    accentText: 'GCSE to university level',
  },
  {
    id: 'sats',
    icon: Activity,
    title: 'SATS & Exam Preparation',
    description:
      'Structured, confidence-building preparation for primary SATS and secondary English exams. Brigid helps students master the content, manage exam nerves and approach assessments feeling genuinely ready.',
    accentText: 'Primary through secondary',
  },
  {
    id: 'group',
    icon: Users,
    title: 'Small Group Sessions',
    description:
      'Collaborative small group learning that combines the benefits of personalised attention with the motivation of working alongside peers. Groups are carefully matched by level and learning need.',
    accentText: 'Carefully curated groups',
  },
  {
    id: 'study-skills',
    icon: Info,
    title: 'Study Skills & Revision',
    description:
      'Practical techniques and strategies for efficient revision — covering time management, note-taking, memory methods and exam preparation. Ideal for students heading into GCSEs, A-Levels or FE.',
    accentText: 'GCSEs, A-Levels & FE',
  },
]
