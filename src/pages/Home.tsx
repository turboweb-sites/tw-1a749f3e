import { Link } from 'wouter'
import {
  Phone, Shield, Award, Clock, Star, CheckCircle, ArrowRight,
  Sparkles, Search, Droplet, PaintBucket, ClipboardCheck, MapPin, Users, Truck
} from 'lucide-react'

const trustBadges = [
  { icon: Shield, text: 'Fully Insured' },
  { icon: Award, text: 'Certified Technicians' },
  { icon: CheckCircle, text: 'Satisfaction Guarantee' },
]

const servicesPreview = [
  { title: 'Exterior Wash & Detail', price: '$129', desc: 'Hand wash, clay bar, wax, and tire dressing for a showroom finish.' },
  { title: 'Interior Deep Cleaning', price: '$149', desc: 'Steam cleaning, leather care, and odor elimination.' },
  { title: 'Full Detail', price: '$249', desc: 'Complete interior & exterior restoration for that new car feel.' },
  { title: 'Truck & SUV Detail', price: 'From $299', desc: 'Specialized service for larger vehicles with extra attention to detail.' },
  { title: 'Ceramic Coating', price: 'From $799', desc: 'Long-lasting paint protection with hydrophobic ceramic sealant.' },
  { title: 'Mobile Detailing', price: '+$40', desc: 'We come to you – home, office, or anywhere in the Houston area.' },
]

const processSteps = [
  { icon: Search, title: 'Vehicle Inspection', desc: 'We assess your vehicle\'s condition and identify areas needing special attention.' },
  { icon: Droplet, title: 'Deep Cleaning & Decontamination', desc: 'Thorough wash, clay bar treatment, and removal of all surface contaminants.' },
  { icon: PaintBucket, title: 'Paint Protection Application', desc: 'Professional-grade wax, sealant, or ceramic coating for lasting protection.' },
  { icon: Sparkles, title: 'Interior Restoration', desc: 'Steam cleaning, leather conditioning, and complete cabin refresh.' },
  { icon: ClipboardCheck, title: 'Final Quality Check', desc: 'Detailed inspection under LED lights to ensure perfection.' },
]

const reviews = [
  { name: 'Mike R.', rating: 5, text: 'Best detailing service in Houston! My F-150 looks brand new. The ceramic coating they applied is incredible – water just beads right off.', vehicle: 'Ford F-150' },
  { name: 'Sarah T.', rating: 5, text: 'They came to my office and detailed my Tahoe while I worked. Incredibly convenient and the results were amazing. Highly recommend!', vehicle: 'Chevy Tahoe' },
  { name: 'James K.', rating: 5, text: 'I\'ve tried many detailers in Houston but Pro Shine is by far the best. Their attention to detail is unmatched. Fair pricing too.', vehicle: 'BMW X5' },
  { name: 'Lisa M.', rating: 5, text: 'Had pet hair all over my backseat. They removed every single strand and the interior smells amazing. Will be back every month!', vehicle: 'Honda CR-V' },
]

const serviceAreas = [
  { name: 'Houston', icon: MapPin },
  { name: 'Katy', icon: MapPin },
  { name: 'Sugar Land', icon: MapPin },
  { name: 'Cypress', icon: MapPin },
  { name: 'The Woodlands', icon: MapPin },
]

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-dark-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=1920&h=1080&fit=crop"
            alt="Professional car detailing"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-900 via-dark-900/80 to-dark-900/40" />
        </div>
        <div className="relative container-max section-padding py-24 md:py-36">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-primary-600/20 border border-primary-500/30 px-4 py-2 rounded-full mb-6">
              <Sparkles size={16} className="text-primary-400" />
              <span className="text-primary-300 text-sm font-medium">Houston's #1 Rated Detailing Service</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
              Professional Car Detailing in{' '}
              <span className="text-primary-400">Houston, TX</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
              From daily drivers to trucks and SUVs – we deliver showroom-quality results with eco-friendly products. Mobile service available across the Houston metro area.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary text-center">
                Schedule Service Today
                <ArrowRight size={20} className="ml-2" />
              </Link>
              <a href="tel:+18325550147" className="btn-call text-center !py-4 !px-8 !text-lg">
                <Phone size={20} className="mr-2" />
                (832) 555-0147
              </a>
            </div>
            <div className="flex flex-wrap gap-6 mt-10">
              {trustBadges.map(badge => (
                <div key={badge.text} className="flex items-center gap-2 text-gray-300">
                  <badge.icon size={18} className="text-primary-400" />
                  <span className="text-sm font-medium">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-gray-50 section-padding">
        <div className="container-max">
          <div className="text-center mb-14">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Our Services</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-900 mt-3 mb-4">
              Detailing Services for Every Vehicle
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Whether you drive a compact sedan or a full-size pickup, we have the right package to make your vehicle shine.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesPreview.map((service, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group hover:-translate-y-1">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-dark-900 group-hover:text-primary-600 transition-colors">{service.title}</h3>
                  <span className="text-primary-600 font-bold text-lg whitespace-nowrap ml-3">{service.price}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.desc}</p>
                <Link href="/services" className="inline-flex items-center text-primary-600 font-medium text-sm hover:text-primary-700 transition-colors">
                  Learn More <ArrowRight size={14} className="ml-1" />
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services" className="btn-primary">
              View All Services <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="text-center mb-14">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">How It Works</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-900 mt-3 mb-4">
              Our Detailing Process
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Every vehicle goes through our meticulous 5-step process to ensure consistent, stunning results.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {processSteps.map((step, i) => (
              <div key={i} className="text-center group relative">
                <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-100 transition-colors relative">
                  <step.icon size={28} className="text-primary-600" />
                  <div className="absolute -top-2 -right-2 w-7 h-7 bg-primary-600 text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {i + 1}
                  </div>
                </div>
                <h3 className="font-bold text-dark-900 mb-2 text-sm">{step.title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{step.desc}</p>
                {i < 4 && (
                  <div className="hidden lg:block absolute top-8 -right-4 w-6">
                    <ArrowRight size={20} className="text-gray-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-gray-50 section-padding">
        <div className="container-max">
          <div className="text-center mb-14">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-900 mt-3 mb-4">
              What Our Customers Say
            </h2>
            <div className="flex items-center justify-center gap-2 mt-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map(n => (
                  <Star key={n} size={20} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="text-gray-600 font-medium">4.9/5 from 200+ Reviews</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((review, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex mb-3">
                  {[1, 2, 3, 4, 5].map(n => (
                    <Star key={n} size={16} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">"{review.text}"</p>
                <div className="border-t border-gray-100 pt-3">
                  <div className="font-semibold text-dark-900">{review.name}</div>
                  <div className="text-xs text-gray-500">{review.vehicle}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="text-center mb-10">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Coverage</span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mt-3 mb-4">
              Service Areas
            </h2>
            <p className="text-gray-600 text-lg max-w-xl mx-auto">
              We proudly serve the greater Houston metropolitan area with mobile and in-shop detailing services.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {serviceAreas.map(area => (
              <div key={area.name} className="flex items-center gap-2 bg-primary-50 text-primary-700 px-6 py-3 rounded-full font-medium hover:bg-primary-100 transition-colors">
                <area.icon size={18} />
                {area.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative bg-primary-600 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-700 to-primary-500" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
        <div className="relative container-max section-padding text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Ready for a Spotless Ride?
          </h2>
          <p className="text-primary-100 text-lg max-w-xl mx-auto mb-8">
            Book your detailing session today and experience the Pro Shine difference. Same-day appointments available!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-secondary">
              Schedule Service Today
              <ArrowRight size={18} className="ml-2" />
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