import { NAV_LINKS, SITE_NAME } from '@/lib/constants'

export default function Footer() {
  return (
    <footer
      className="border-t border-[oklch(0.30_0.05_205)] px-6 md:px-12 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left"
      style={{ background: 'oklch(0.18 0.025 210)' }}
    >
      <span className="text-[14px] font-bold tracking-[0.06em] uppercase text-[oklch(0.7_0.04_215)]">
        {SITE_NAME}
      </span>

      <span className="text-[13px] text-[oklch(0.45_0.03_215)]">
        © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
      </span>

      <nav className="flex flex-wrap gap-6 justify-center">
        {[...NAV_LINKS, { label: 'Contact', href: '#contact' }].map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-[13px] text-[oklch(0.5_0.04_215)] no-underline hover:text-[oklch(0.7_0.06_210)] transition-colors"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </footer>
  )
}
