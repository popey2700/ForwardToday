interface CredentialItemProps {
  label: string
  description: string
}

export function CredentialItem({ label, description }: CredentialItemProps) {
  return (
    <div className="flex items-start gap-3 px-4 py-3.5 rounded-xl bg-[oklch(0.98_0.01_215_/_0.7)] border border-[oklch(0.85_0.03_215_/_0.5)]">
      <div className="w-2 h-2 rounded-full bg-ft-teal flex-shrink-0 mt-[5px]" />
      <p className="text-[13px] leading-[1.6] text-ft-text-mid">
        <strong className="text-ft-text font-semibold">{label}</strong>
        {' '}
        {description}
      </p>
    </div>
  )
}
