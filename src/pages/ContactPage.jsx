import React, { useState } from 'react'
import { Header } from '../sections/Header'
import { Footer } from '../sections/Footer'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaPaperPlane } from 'react-icons/fa'

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your message. We will get back to you soon!')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-slate-700/50 bg-white/5 px-6 py-3 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400"></span>
            <span className="text-xs font-medium uppercase tracking-wider text-slate-400">Get in Touch</span>
          </div>
          <h1 className="font-serif text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 to-sky-400 bg-clip-text text-transparent">Contact Us</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-300 leading-relaxed">
            We're here to help with any questions about our services, account options, or how we can support your financial goals.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-slate-900 mb-8">Get in Touch</h2>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100 hover:border-cyan-200 hover:bg-cyan-50/50 transition-all duration-300">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-cyan-100 text-cyan-600">
                    <FaMapMarkerAlt className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Visit Us</h3>
                    <p className="text-slate-600">Rond Point Damas, Yaoundé, Cameroon</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100 hover:border-cyan-200 hover:bg-cyan-50/50 transition-all duration-300">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-cyan-100 text-cyan-600">
                    <FaPhoneAlt className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Call Us</h3>
                    <a href="tel:+237670020630" className="text-cyan-600 hover:text-cyan-700 transition-colors">+237 670 020 630</a>
                    <p className="text-slate-600 text-sm mt-1">Mon-Fri: 8am - 6pm, Sat: 8am - 2pm</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100 hover:border-cyan-200 hover:bg-cyan-50/50 transition-all duration-300">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-cyan-100 text-cyan-600">
                    <FaEnvelope className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Email Us</h3>
                    <a href="mailto:info@mmoccul.com" className="text-cyan-600 hover:text-cyan-700 transition-colors">info@mmoccul.com</a>
                    <p className="text-slate-600 text-sm mt-1">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100 hover:border-cyan-200 hover:bg-cyan-50/50 transition-all duration-300">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-green-100 text-green-600">
                    <FaWhatsapp className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">WhatsApp</h3>
                    <a href="https://wa.me/237680485488" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 transition-colors">+237 680 485 488</a>
                    <p className="text-slate-600 text-sm mt-1">Quick responses, 24/7</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-cyan-50 to-sky-50 rounded-2xl p-6 border border-cyan-100">
                <h3 className="font-semibold text-slate-900 mb-2">Visit Our Headquarters</h3>
                <p className="text-slate-600 text-sm mb-4">Rond Point Damas, Yaoundé</p>
                <a 
                  href="https://www.google.com/maps/place/Yaounde,+Cameroon" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-cyan-600 hover:text-cyan-700 font-medium"
                >
                  <FaMapMarkerAlt className="w-4 h-4" />
                  View on Google Maps
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8 lg:p-10">
                <h3 className="font-serif text-2xl font-bold text-slate-900 mb-2">Send us a Message</h3>
                <p className="text-slate-600 mb-8">Fill out the form below and we'll get back to you as soon as possible.</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Tell us more about your inquiry..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-sky-500 text-white font-semibold py-4 px-8 rounded-xl hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <FaPaperPlane className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-slate-50 border-t border-slate-200/50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Quick Answers</h2>
            <p className="text-slate-600">Common questions about our services and locations</p>
          </div>

          <div className="space-y-6">
            {[  
              {
                question: 'What are your operating hours?',
                answer: 'Most branches operate Monday to Friday from 8:00 AM to 6:00 PM, and Saturday from 8:00 AM to 2:00 PM. Head office in Damas stays open until 6 PM on weekdays. We also offer 24/7 access through our digital banking platform and ATMs.'
              },
              {
                question: 'Which services can I access at any branch?',
                answer: 'Personal banking, savings accounts, and basic inquiries are available at all locations. Specialty services like international transfers, business banking, and agricultural loans may be limited to specific branches. Check our website for each branch\'s offered services.'
              },
              {
                question: 'Do I need an appointment for account opening?',
                answer: 'No appointment is necessary for most account types. You can visit any branch during operating hours with your required documents (ID, proof of address, etc.). For corporate accounts or complex needs, we recommend calling ahead.'
              }
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-slate-100 hover:border-cyan-200 hover:shadow-sm transition-all">
                <button className="w-full text-left flex items-start gap-4">
                  <svg className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-slate-900 text-lg">{faq.question}</h3>
                    <p className="text-slate-600 mt-2 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
