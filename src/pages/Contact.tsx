import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle, Calendar, Car } from 'lucide-react'

const services = [
  'Exterior Wash & Detail – $129',
  'Interior Deep Cleaning – $149',
  'Full Detail – $249',
  'Truck & SUV Detail – From $299',
  'Paint Correction – From $449',
  'Ceramic Coating – From $799',
  'Pet Hair Removal – $79',
  'Mobile Detailing – +$40',
  'Express Detail – $179',
  'Complete Detail – $299',
  'Pro Protection Package – $849',
]

const timeSlots = [
  '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
  '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM',
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    time: '',
    vehicle: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-dark-900 section-padding py-20 md:py-28">
        <div className="container-max text-center">
          <span className="text-primary-400 font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mt-3 mb-4">
            Book Your Detailing
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Schedule your appointment online or give us a call. Same-day service available!
          </p>
          <a href="tel:+18325550147" className="btn-call !py-4 !px-8 !text-lg inline-flex mt-6">
            <Phone size={22} className="mr-2" />
            Call Now: (832) 555-0147
          </a>
        </div>
      </section>

      {/* Contact + Form */}
      <section className="bg-gray-50 section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-dark-900 mb-6">Contact Information</h2>
                <div className="space-y-5">
                  <a href="tel:+18325550147" className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center group-hover:bg-primary-200 transition-colors flex-shrink-0">
                      <Phone size={22} className="text-primary-600" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Phone</div>
                      <div className="font-semibold text-dark-900 group-hover:text-primary-600 transition-colors">(832) 555-0147</div>
                    </div>
                  </a>
                  <a href="sms:+18325550147" className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center group-hover:bg-green-200 transition-colors flex-shrink-0">
                      <MessageCircle size={22} className="text-green-600" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Text / SMS</div>
                      <div className="font-semibold text-dark-900 group-hover:text-green-600 transition-colors">(832) 555-0147</div>
                    </div>
                  </a>
                  <a href="mailto:info@proshinedetailing.com" className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-200 transition-colors flex-shrink-0">
                      <Mail size={22} className="text-blue-600" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Email</div>
                      <div className="font-semibold text-dark-900 group-hover:text-blue-600 transition-colors">info@proshinedetailing.com</div>
                    </div>
                  </a>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin size={22} className="text-red-500" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Address</div>
                      <div className="font-semibold text-dark-900">4521 Westheimer Rd<br />Houston, TX 77027</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock size={22} className="text-yellow-600" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Business Hours</div>
                      <div className="font-semibold text-dark-900">
                        Monday – Saturday: 7:00 AM – 7:00 PM<br />
                        <span className="text-gray-500 font-normal">Sunday: Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps */}
              <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-200 h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.179506825866!2d-95.4477!3d29.7379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0x8ce05b08b4b1dc0e!2sWestheimer%20Rd%2C%20Houston%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Pro Shine Detailing Location"
                />
              </div>
            </div>

            {/* Booking Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
                {submitted ? (
                  <div className="text-center py-16">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle size={40} className="text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-dark-900 mb-3">Booking Request Sent!</h3>
                    <p className="text-gray-600 mb-6 max-w-md mx-auto">
                      Thank you, {form.name || 'valued customer'}! We've received your booking request and will confirm your appointment within 30 minutes via phone or email.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <a href="tel:+18325550147" className="btn-call">
                        <Phone size={18} className="mr-2" />
                        Call for Immediate Confirmation
                      </a>
                      <button onClick={() => setSubmitted(false)} className="btn-primary !bg-gray-100 !text-gray-700 hover:!bg-gray-200">
                        Book Another Service
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="mb-6">
                      <h2 className="text-2xl font-bold text-dark-900 mb-2">Schedule Your Service</h2>
                      <p className="text-gray-600">Fill out the form below and we'll confirm your appointment ASAP.</p>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
                          <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            placeholder="John Smith"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all text-dark-900 bg-white"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number *</label>
                          <input
                            type="tel"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            required
                            placeholder="(832) 555-0147"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all text-dark-900 bg-white"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address</label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all text-dark-900 bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Service *</label>
                        <div className="relative">
                          <select
                            name="service"
                            value={form.service}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all text-dark-900 appearance-none bg-white pr-10"
                          >
                            <option value="">Select a service</option>
                            {services.map(s => (
                              <option key={s} value={s}>{s}</option>
                            ))}
                          </select>
                          <Car size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">Preferred Date *</label>
                          <input
                            type="date"
                            name="date"
                            value={form.date}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all text-dark-900 bg-white"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">Preferred Time *</label>
                          <div className="relative">
                            <select
                              name="time"
                              value={form.time}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all text-dark-900 appearance-none bg-white pr-10"
                            >
                              <option value="">Select time</option>
                              {timeSlots.map(t => (
                                <option key={t} value={t}>{t}</option>
                              ))}
                            </select>
                            <Calendar size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                          </div>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Vehicle (Year, Make, Model)</label>
                        <input
                          type="text"
                          name="vehicle"
                          value={form.vehicle}
                          onChange={handleChange}
                          placeholder="e.g. 2022 Ford F-150"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all text-dark-900 bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Additional Notes</label>
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          rows={3}
                          placeholder="Any special requests or details about your vehicle's condition..."
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all text-dark-900 resize-none bg-white"
                        />
                      </div>
                      <button type="submit" className="btn-primary w-full !text-lg">
                        <Send size={20} className="mr-2" />
                        Submit Booking Request
                      </button>
                      <p className="text-xs text-gray-500 text-center">
                        We'll confirm your appointment within 30 minutes during business hours.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}