import { Link } from 'wouter'
import {
  Phone, ArrowRight, Shield, Leaf, MapPin, Clock, ThumbsUp, Award,
  ChevronDown, ChevronUp, Users, Zap, Heart
} from 'lucide-react'
import { useState } from 'react'

const reasons = [
  {
    icon: Award,
    title: 'Certified Technicians',
    desc: 'Our team is trained and certified by leading detailing organizations. Every technician undergoes 200+ hours of hands-on training before working on your vehicle.',
    image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&h=500&fit=crop',
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly Products',
    desc: 'We use biodegradable, water-based products that are safe for your vehicle, your family, and the environment. No harsh chemicals, no toxic fumes.',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&h=500&fit=crop',
  },
  {
    icon: MapPin,
    title: 'Mobile Service Convenience',
    desc: 'Too busy to come to us? We\'ll come to you! Our fully equipped mobile units serve the entire Houston metro area – home, office, or anywhere you need us.',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=500&fit=crop',
  },
  {
    icon: Zap,
    title: 'Same-Day Availability',
    desc: 'Need your car detailed today? We offer same-day appointments based on availability. Call us and we\'ll do our best to fit you in.',
    image: 'https://images.unsplash.com/photo-1560264280-88b68371db39?w=800&h=500&fit=crop',
  },
  {
    icon: ThumbsUp,
    title: 'Satisfaction Guarantee',
    desc: 'If you\'re not 100% satisfied with our work, we\'ll re-detail the area at no additional cost. Your satisfaction is our top priority.',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=500&fit=crop',
  },
]

const stats = [
  { number: '5,000+', label: 'Vehicles Detailed' },
  { number: '200+', label: '5-Star Reviews' },
  { number: '10+', label: 'Years Experience' },
  { number: '98%', label: 'Satisfaction Rate' },
]

const faqs = [
  {
    q: 'How long does a full detail take?',
    a: 'A full detail typically takes 4–6 hours depending on the size and condition of your vehicle. We don\'t rush – we take the time to do it right.',
  },
  {
    q: 'Do I need to be present during mobile detailing?',
    a: 'Not at all! Many of our customers leave their vehicle at their home or office while we work. Just leave us access to water and electricity if possible, and we\'ll handle the rest.',
  },
  {
    q: 'How often should I get my car detailed?',
    a: 'We recommend a full detail every 3–4 months for daily drivers. If you have a ceramic coating, a maintenance wash every 2 weeks is ideal. Regular detailing protects your paint and preserves resale value.',
  },
  {
    q: 'Is ceramic coating worth it?',
    a: 'Absolutely! Ceramic coating provides 2–5 years of protection against UV damage, chemical stains, and minor scratches. It also makes washing your car much easier with its hydrophobic properties.',
  },
  {
    q: 'Do you work on trucks and large SUVs?',
    a: 'Yes! We specialize in trucks and SUVs. We have dedicated packages for larger vehicles with extra attention to bed liners, running boards, and cargo areas.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept all major credit cards, debit cards, cash, Venmo, and Zelle. Payment is due upon completion of the service.',
  },
  {
    q: 'Can you remove pet hair from my car?',
    a: 'Yes! We offer a specialized pet hair removal service starting at $79. We use professional extraction tools and compressed air to remove every single strand.',
  },
  {
    q: 'What areas do you serve?',
    a: 'We serve the greater Houston metro area including Houston, Katy, Sugar Land, Cypress, and The Woodlands. Mobile service fee of $40 applies for all locations.',
  },
]

export default function WhyChooseUs() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div>
      {/* Hero */}
      <section className="bg-dark-900 section-padding py-20 md:py-28">
        <div className="container-max text-center">
          <span className="text-primary-400 font-semibold text-sm uppercase tracking-wider">Why Pro Shine</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mt-3 mb-4">
            Why Choose Us
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We're not just another car wash. Here's what sets Pro Shine Detailing apart from the competition.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary-600 py-12">
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-extrabold text-white mb-1">{stat.number}</div>
                <div className="text-primary-200 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reasons */}
      <section className="bg-gray-50 section-padding">
        <div className="container-max space-y-16">
          {reasons.map((reason, i) => (
            <div
              key={i}
              className={`flex flex-col gap-8 items-center ${
                i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              <div className="lg:w-1/2">
                <img
                  src={reason.image}
                  alt={reason.title}
                  className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div className="lg:w-1/2">
                <div className="w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center mb-4">
                  <reason.icon size={28} className="text-primary-600" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-dark-900 mb-4">{reason.title}</h2>
                <p className="text-gray-600 text-lg leading-relaxed">{reason.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-white section-padding">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-10">You're in Good Hands</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { icon: Shield, title: 'Fully Insured', desc: 'Full liability insurance coverage for your peace of mind.' },
              { icon: Users, title: 'Family Owned', desc: 'Local Houston business built on trust and community.' },
              { icon: Heart, title: 'Customer First', desc: 'Every decision we make starts with your satisfaction.' },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <item.icon size={28} className="text-primary-600" />
                </div>
                <h3 className="font-bold text-dark-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 section-padding">
        <div className="container-max max-w-3xl">
          <div className="text-center mb-12">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mt-3 mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-dark-900 pr-4">{faq.q}</span>
                  {openFaq === i ? (
                    <ChevronUp size={20} className="text-primary-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown size={20} className="text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-600 section-padding text-center">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Convinced? Let's Get Started!</h2>
          <p className="text-primary-100 text-lg max-w-xl mx-auto mb-8">
            Book your appointment today and see the Pro Shine difference for yourself.
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