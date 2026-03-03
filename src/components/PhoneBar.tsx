import { Phone } from 'lucide-react'

export default function PhoneBar() {
  return (
    <div className="bg-dark-900 text-white py-2 px-4 text-sm">
      <div className="container-max flex items-center justify-between">
        <span className="hidden sm:inline text-gray-300">Serving Houston, Katy, Sugar Land, Cypress & The Woodlands</span>
        <div className="flex items-center gap-4 ml-auto">
          <span className="text-gray-300 hidden md:inline">Mon–Sat: 7AM – 7PM</span>
          <a href="tel:+18325550147" className="flex items-center gap-2 text-green-400 font-semibold hover:text-green-300 transition-colors">
            <Phone size={14} />
            (832) 555-0147
          </a>
        </div>
      </div>
    </div>
  )
}