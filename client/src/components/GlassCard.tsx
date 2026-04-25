import { cn } from '@/lib/utils'

interface GlassCardProps {
  children: React.ReactNode
  className?: string
}

export function GlassCard({ children, className }: GlassCardProps) {
  return (
    <div
      className={cn(
        'backdrop-blur-xl bg-ft-glass-bg border border-ft-glass-border rounded-[20px]',
        'shadow-[0_8px_40px_oklch(0.55_0.07_200_/_0.10),inset_0_1px_0_oklch(1_0_0_/_0.6)]',
        className
      )}
    >
      {children}
    </div>
  )
}
