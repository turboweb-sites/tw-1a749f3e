import { Link } from 'wouter'
import {
  Phone, ArrowRight, Clock, DollarSign, CheckCircle,
  Droplets, Sparkles, Car, Truck, PaintBucket, Shield, Scissors, MapPin
} from 'lucide-react'

const services = [
  {
    icon: Droplets,
    title: 'Exterior Wash & Detail',
    price: '$129',
    duration: '2–3 hours',
    desc: 'A thorough hand wash followed by clay bar decontamination, one-step polish, carnauba wax protection, and complete tire and trim dressing.',
    benefits: [
      'Premium hand wash – no automated brushes',
      'Clay bar treatment to remove contaminants',
      'Carnauba wax for lasting shine',
      'Tire dressing and trim restoration',
      'Window cleaning inside & out',
    ],
    image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=800&h=500&fit=crop',
  },
  {
    icon: Sparkles,
    title: 'Interior Deep Cleaning',
    price: '$149',
    duration: '2–4 hours',
    desc: 'Complete interior restoration including steam cleaning, leather conditioning, carpet shampooing, and thorough odor elimination.',
    benefits: [
      'Hot steam cleaning of all surfaces',
      'Leather cleaning and conditioning',
      'Carpet & upholstery shampooing',
      'Air vent and crevice detailing',
      'Odor elimination treatment',
    ],
    image: 'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?w=800&h=500&fit=crop',
  },
  {
    icon: Car,
    title: 'Full Detail',
    price: '$249',
    duration: '4–6 hours',
    desc: 'Our most popular package combining thorough exterior detailing with complete interior restoration for a like-new result.',
    benefits: [
      'Everything in Exterior Wash & Detail',
      'Everything in Interior Deep Cleaning',
      'Engine bay cleaning',
      'Door jamb detailing',
      'Full quality inspection',
    ],
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0afa?w=800&h=500&fit=crop',
  },
  {
    icon: Truck,
    title: 'Truck & SUV Detail',
    price: 'From $299',
    duration: '5–7 hours',
    desc: 'Specialized detailing for larger vehicles including trucks, SUVs, and vans. Extra attention to bed liners, running boards, and cargo areas.',
    benefits: [
      'Full interior & exterior detail',
      'Truck bed cleaning and protection',
      'Running board and step restoration',
      'Cargo area deep cleaning',
      'Heavy-duty tire and wheel treatment',
    ],
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&h=500&fit=crop',
  },
  {
    icon: PaintBucket,
    title: 'Paint Correction',
    price: 'From $449',
    duration: '6–10 hours',
    desc: 'Professional multi-stage paint correction to remove swirl marks, scratches, oxidation, and imperfections from your paint.',
    benefits: [
      'Multi-stage machine polishing',
      'Swirl mark and scratch removal',
      'Oxidation correction',
      'Paint depth gauge measurements',
      'Sealant application included',
    ],
    image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&h=500&fit=crop',
  },
  {
    icon: Shield,
    title: 'Ceramic Coating',
    price: 'From $799',
    duration: '1–2 days',
    desc: 'Professional-grade ceramic coating providing years of hydrophobic protection, UV resistance, and an unbeatable glossy finish.',
    benefits: [
      'Paint correction included',
      'Professional ceramic coating application',
      '2–5 year durability',
      'Hydrophobic water repellency',
      'UV and chemical resistance',
    ],
    image: 'https://images.unsplash.com/photo-1600964373031-f0b65565e18a?w=800&h=500&fit=crop',
  },
  {
    icon: Scissors,
    title: 'Pet Hair Removal',
    price: '$79',
    duration: '1–2 hours',
    desc: 'Specialized pet hair extraction using professional tools and compressed air to reach every fiber and crevice in your interior.',
    benefits: [
      'Professional pet hair extraction tools',
      'Compressed air for deep crevices',
      'Seat and carpet deep cleaning',
      'Allergen reduction treatment',
      'Deodorizing spray application',
    ],
    image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800&h=500&fit=crop',
  },
  {
    icon: MapPin,
    title: 'Mobile Detailing',
    price: '+$40 travel fee',
    duration: 'Varies by service',
    desc: 'We bring our full detailing setup to your home, office, or anywhere in the Houston metro area. Same great results, ultimate convenience.',
    benefits: [
      'Full equipment brought to you',
      'Water supply included',
      'All products and tools provided',
      'Same quality as in-shop',
      'Flexible scheduling',
    ],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=500&fit=crop',
  },
]

export default function Services() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-dark-900 section-padding py-20 md:py-28">
        <div className="container-max text-center">
          <span className="text-primary-400 font-semibold text-sm uppercase tracking-wider">What We Offer</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mt-3 mb-4">
            Our Detailing Services
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From a quick wash to full ceramic coating, we have the perfect service for every vehicle and budget. All prices are starting rates.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="bg-gray-50 section-padding">
        <div className="container-max space-y-10">
          {services.map((service, i) => (
            <div
              key={i}
              className={`bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow flex flex-col ${
                i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              <div className="lg:w-2/5 h-64 lg:h-auto relative overflow-hidden flex-shrink-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-primary-600 text-white px-4 py-2 rounded-lg font-bold text-lg shadow-lg">
                  {service.price}
                </div>
              </div>
              <div className="lg:w-3/5 p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <service.icon size={22} className="text-primary-600" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-dark-900">{service.title}</h2>
                </div>
                <div className="flex flex-wrap gap-4 mb-4 text-sm">
                  <span className="flex items-center gap-1 text-gray-600">
                    <Clock size={14} className="text-primary-500" /> {service.duration}
                  </span>
                  <span className="flex items-center gap-1 text-gray-600">
                    <DollarSign size={14} className="text-primary-500" /> Starting from {service.price}
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed mb-5">{service.desc}</p>
                <ul className="space-y-2 mb-6">
                  {service.benefits.map((b, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                      {b}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="btn-primary self-start !text-base">
                  Book This Service <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-600 section-padding text-center">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Not Sure Which Service You Need?</h2>
          <p className="text-primary-100 text-lg max-w-xl mx-auto mb-8">
            Give us a call and our team will recommend the perfect package for your vehicle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+18325550147" className="btn-secondary">
              <Phone size={20} className="mr-2" />
              Call (832) 555-0147
            </a>
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 text-lg border border-white/20">
              Book Online <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}