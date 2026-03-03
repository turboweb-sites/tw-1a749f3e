import { Link } from 'wouter'
import { Phone, Mail, MapPin, Clock, Droplets, Facebook, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-dark-900 text-gray-300">
      <div className="container-max section-padding pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center">
                <Droplets size={22} className="text-white" />
              </div>
              <div>
                <div className="text-white font-bold text-lg">Pro Shine</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Detailing</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Houston's trusted auto detailing service. We bring professional-grade detailing to your doorstep with eco-friendly products and certified technicians.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: '/', label: 'Home' },
                { href: '/services', label: 'Services' },
                { href: '/pricing', label: 'Pricing' },
                { href: '/why-choose-us', label: 'Why Choose Us' },
                { href: '/contact', label: 'Book Now' },
              ].map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-primary-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Service Areas</h3>
            <ul className="space-y-2 text-sm">
              <li>Houston</li>
              <li>Katy</li>
              <li>Sugar Land</li>
              <li>Cypress</li>
              <li>The Woodlands</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-primary-400 flex-shrink-0" />
                <a href="tel:+18325550147" className="hover:text-primary-400 transition-colors">(832) 555-0147</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-primary-400 flex-shrink-0" />
                <a href="mailto:info@proshinedetailing.com" className="hover:text-primary-400 transition-colors">info@proshinedetailing.com</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-primary-400 flex-shrink-0 mt-0.5" />
                <span>4521 Westheimer Rd, Houston, TX 77027</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={16} className="text-primary-400 flex-shrink-0" />
                <span>Mon–Sat: 7:00 AM – 7:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© 2024 Pro Shine Detailing. All rights reserved.</p>
          <p>Professional Car Detailing in Houston, TX</p>
        </div>
      </div>
    </footer>
  )
}