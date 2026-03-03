import { useState } from 'react'
import { Link, useLocation } from 'wouter'
import { Menu, X, Phone, Droplets } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/why-choose-us', label: 'Why Us' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [location] = useLocation()

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="container-max flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center group-hover:bg-primary-700 transition-colors">
            <Droplets size={22} className="text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg md:text-xl font-bold text-dark-900 leading-tight">Pro Shine</span>
            <span className="text-[10px] md:text-xs text-gray-500 font-medium uppercase tracking-wider leading-tight">Detailing</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                location === link.href
                  ? 'text-primary-600 bg-primary-50'
                  : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="tel:+18325550147" className="hidden md:flex btn-call text-sm">
            <Phone size={16} className="mr-2" />
            Call Now
          </a>
          <Link href="/contact" className="hidden sm:inline-flex btn-primary text-sm !py-2.5 !px-5">
            Book Online
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-primary-600 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="flex flex-col p-4 gap-1">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                  location === link.href
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-3 mt-3 pt-3 border-t border-gray-100">
              <a href="tel:+18325550147" className="btn-call flex-1 text-center text-sm">
                <Phone size={16} className="mr-2" />
                Call
              </a>
              <Link href="/contact" onClick={() => setMobileOpen(false)} className="btn-primary flex-1 text-center text-sm !py-3">
                Book Online
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}