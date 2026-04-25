import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { BRIGID_EMAIL, NAV_LINKS, SITE_NAME } from '@/lib/constants'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function closeMenu() {
    setIsMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-6 md:px-12 bg-[oklch(0.97_0.015_218_/_0.7)] backdrop-blur-[20px] saturate-150 border-b border-ft-glass-border transition-colors">
      <a
        href="#"
        className="text-[15px] font-bold tracking-[0.06em] uppercase text-ft-teal-dark no-underline"
      >
        {SITE_NAME}
      </a>

      {/* Desktop nav links */}
      <ul className="hidden md:flex gap-9 list-none">
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-[13px] font-medium text-ft-text-mid no-underline tracking-[0.02em] hover:text-ft-teal transition-colors"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Desktop CTA */}
      <a
        href={`mailto:${BRIGID_EMAIL}`}
        className="hidden md:inline-flex text-[13px] font-semibold bg-ft-teal text-white px-[22px] py-[9px] rounded-full no-underline hover:bg-ft-teal-dark hover:-translate-y-px transition-all"
      >
        Get in touch
      </a>

      {/* Mobile hamburger */}
      <button
        type="button"
        onClick={() => setIsMenuOpen((open) => !open)}
        className="md:hidden p-2 text-ft-text-mid hover:text-ft-teal transition-colors"
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
      >
        {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Mobile slide-down menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-[oklch(0.97_0.015_218_/_0.95)] backdrop-blur-[20px] border-b border-ft-glass-border md:hidden">
          <ul className="flex flex-col list-none px-6 py-4 gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="block text-[15px] font-medium text-ft-text-mid py-3 no-underline hover:text-ft-teal transition-colors border-b border-[oklch(0.82_0.04_200_/_0.4)] last:border-0"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-3">
              <a
                href={`mailto:${BRIGID_EMAIL}`}
                onClick={closeMenu}
                className="block text-center text-[14px] font-semibold bg-ft-teal text-white px-6 py-3 rounded-full no-underline hover:bg-ft-teal-dark transition-colors"
              >
                Get in touch
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
