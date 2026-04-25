interface SectionLabelProps {
  children: React.ReactNode
}

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <span className="block text-[11px] font-bold tracking-[0.12em] uppercase text-ft-teal mb-4">
      {children}
    </span>
  )
}
