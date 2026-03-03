import { Link } from 'wouter'
import { Phone, ArrowRight, CheckCircle, Star, Sparkles } from 'lucide-react'

const packages = [
  {
    name: 'Express Detail',
    price: '$179',
    badge: null,
    desc: 'Quick refresh for your daily driver. Perfect for regular maintenance.',
    features: [
      'Hand wash',
      'Interior vacuum',
      'Dashboard wipe',
      'Window cleaning',
    ],
    highlight: false,
  },
  {
    name: 'Complete Detail',
    price: '$299',
    badge: 'Most Popular',
    desc: 'Our best-selling package. Ideal for a thorough clean and protection.',
    features: [
      'Deep interior cleaning',
      'Wax protection',
      'Tire & trim restore',
      'Steam cleaning',
      'Door jamb cleaning',
      'Air freshener',
    ],
    highlight: true,
  },
  {
    name: 'Pro Protection Package',
    price: '$849',
    badge: 'Best Value',
    desc: 'The ultimate detailing experience with long-lasting protection.',
    features: [
      'Paint enhancement polish',
      'Ceramic sealant',
      'Interior protection coating',
      'Full restoration detail',
      'Engine bay cleaning',
      'Headlight restoration',
      'Leather conditioning',
      '90-day protection warranty',
    ],
    highlight: false,
  },
]

const addons = [
  { name: 'Pet Hair Removal', price: '$79' },
  { name: 'Headlight Restoration', price: '$89' },
  { name: 'Engine Bay Cleaning', price: '$69' },
  { name: 'Odor Elimination', price: '$59' },
  { name: 'Leather Conditioning', price: '$49' },
  { name: 'Mobile Service Fee', price: '+$40' },
  { name: 'Truck/SUV Upcharge', price: '+$50' },
  { name: 'Ceramic Coating Upgrade', price: 'From $500' },
]

export default function Pricing() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-dark-900 section-padding py-20 md:py-28">
        <div className="container-max text-center">
          <span className="text-primary-400 font-semibold text-sm uppercase tracking-wider">Transparent Pricing</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mt-3 mb-4">
            Simple, Honest Pricing
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            No hidden fees, no surprises. Choose the package that fits your needs and budget. All prices shown are for standard-size sedans.
          </p>
        </div>
      </section>

      {/* Packages */}
      <section className="bg-gray-50 section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-start">
            {packages.map((pkg, i) => (
              <div
                key={i}
                className={`rounded-2xl p-8 flex flex-col relative transition-all duration-300 hover:-translate-y-1 ${
                  pkg.highlight
                    ? 'bg-primary-600 text-white shadow-xl shadow-primary-600/20 ring-4 ring-primary-300 md:scale-105'
                    : 'bg-white shadow-sm border border-gray-100'
                }`}
              >
                {pkg.badge && (
                  <div className={`absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-sm font-bold whitespace-nowrap ${
                    pkg.highlight ? 'bg-yellow-400 text-dark-900' : 'bg-primary-100 text-primary-700'
                  }`}>
                    <div className="flex items-center gap-1">
                      {pkg.highlight ? <Star size={14} className="fill-current" /> : <Sparkles size={14} />}
                      {pkg.badge}
                    </div>
                  </div>
                )}
                <div className="text-center mb-6 pt-2">
                  <h3 className={`text-xl font-bold mb-2 ${pkg.highlight ? 'text-white' : 'text-dark-900'}`}>
                    {pkg.name}
                  </h3>
                  <div className={`text-4xl md:text-5xl font-extrabold mb-2 ${pkg.highlight ? 'text-white' : 'text-primary-600'}`}>
                    {pkg.price}
                  </div>
                  <p className={`text-sm ${pkg.highlight ? 'text-primary-100' : 'text-gray-500'}`}>
                    {pkg.desc}
                  </p>
                </div>
                <ul className="space-y-3 flex-1 mb-8">
                  {pkg.features.map((feat, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm">
                      <CheckCircle size={16} className={`flex-shrink-0 mt-0.5 ${pkg.highlight ? 'text-primary-200' : 'text-green-500'}`} />
                      <span className={pkg.highlight ? 'text-primary-50' : 'text-gray-700'}>{feat}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 block ${
                    pkg.highlight
                      ? 'bg-white text-primary-600 hover:bg-gray-50 shadow-lg'
                      : 'bg-primary-600 text-white hover:bg-primary-700 shadow-md'
                  }`}
                >
                  Book Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="bg-white section-padding">
        <div className="container-max max-w-4xl">
          <div className="text-center mb-10">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Customize</span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mt-3 mb-4">Add-On Services</h2>
            <p className="text-gray-600 text-lg">Enhance any package with these additional services.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {addons.map((addon, i) => (
              <div key={i} className="flex items-center justify-between bg-gray-50 rounded-xl px-6 py-4 hover:bg-primary-50 transition-colors group">
                <span className="font-medium text-dark-900 group-hover:text-primary-700 transition-colors">{addon.name}</span>
                <span className="text-primary-600 font-bold text-lg">{addon.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="bg-gray-50 section-padding py-12">
        <div className="container-max max-w-3xl">
          <div className="bg-primary-50 border border-primary-200 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold text-primary-800 mb-3">Pricing Note</h3>
            <p className="text-primary-700 leading-relaxed">
              All prices listed are starting rates for standard-size sedans. Trucks, SUVs, and vans may incur an additional fee based on size and condition. Contact us for a custom quote tailored to your vehicle.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-600 section-padding text-center">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-primary-100 text-lg max-w-xl mx-auto mb-8">
            Book online or call us to schedule your detailing appointment today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-secondary">
              Book Online <ArrowRight size={18} className="ml-2" />
            </Link>
            <a href="tel:+18325550147" className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 text-lg border border-white/20">
              <Phone size={20} className="mr-2" />
              (832) 555-0147
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}