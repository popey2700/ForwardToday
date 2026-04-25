import { useInView } from '@/hooks/useInView'
import { cn } from '@/lib/utils'

interface FadeUpProps {
  children: React.ReactNode
  delayMs?: number
  className?: string
}

export function FadeUp({ children, delayMs = 0, className }: FadeUpProps) {
  const { ref, isVisible } = useInView()

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delayMs}ms` }}
      className={cn(
        'transition-all duration-[650ms] ease-out',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
        className
      )}
    >
      {children}
    </div>
  )
}
