import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { services } from '../export'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { MdSecurity, MdSpeed, MdSupportAgent, MdVerifiedUser } from 'react-icons/md'
import { FaHandshake, FaChartBar } from 'react-icons/fa'
import { Footer } from '../sections/Footer'
import { Header } from '../sections/Header'
import backgroundImage from '../assets/assets2/1774855672617.jpg'
import commitmentBg from '../assets/assets2/1774855672707.jpg'

export const ServicesPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])

  const serviceCategories = services

  const features = [
    { icon: MdSecurity, title: 'Security & Trust', desc: 'Bank-grade encryption and regulatory compliance ensure your assets are protected.', color: 'from-slate-800 to-slate-900' },
    { icon: MdSpeed, title: 'Instant Processing', desc: 'Digital workflows deliver decisions in minutes, not days.', color: 'from-slate-700 to-slate-800' },
    { icon: MdSupportAgent, title: 'Personal Advisory', desc: 'Dedicated managers provide tailored guidance for your journey.', color: 'from-slate-700 to-slate-800' },
    { icon: FaHandshake, title: 'Member Ownership', desc: 'As a cooperative, we reinvest in better rates for you.', color: 'from-slate-800 to-slate-900' },
    { icon: MdVerifiedUser, title: 'Regulatory Excellence', desc: 'Accredited by COBAC and MINFI for compliance.', color: 'from-slate-700 to-slate-800' },
    { icon: FaChartBar, title: 'Growth Focused', desc: 'Investments structured to help your wealth grow.', color: 'from-slate-800 to-slate-900' },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero - with rich background */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={backgroundImage} alt="Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-slate-900/90"></div>
        </div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.15)_0%,_transparent_50%)]"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-6 py-3 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="text-xs font-medium uppercase tracking-widest text-white/80">Financial Services</span>
          </div>
          <h1 className="font-serif text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            Comprehensive <span className="bg-gradient-to-r from-cyan-400 to-sky-400 bg-clip-text text-transparent">Financial</span> Solutions
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-200 leading-relaxed font-light">
            Tailored financial solutions to help you achieve your goals, grow your enterprise, and secure your future.
          </p>
        </div>
      </section>

      {/* Service Categories */}
      {serviceCategories.map((category, catIndex) => (
        <section key={catIndex} className={`py-20 border-b ${catIndex % 2 === 0 ? 'bg-white' : 'bg-slate-50'} border-slate-200/50`}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 rounded-full border border-slate-300 bg-white px-6 py-3 shadow-sm">
                <category.icon className={`text-2xl text-slate-700`} />
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">
                  {category.category}
                </span>
              </div>
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-slate-900 mt-6 mb-4">
                {category.category} Solutions
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto text-lg">
                Expert services crafted with professional attention to detail
              </p>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
              {category.services.map((service) => (
                <article key={service.id} className="group bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-lg hover:border-slate-300 transition-all duration-500">
                  <div className="relative h-44 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent"></div>
                    <div className="absolute bottom-3 left-3">
                      <div className={`flex items-center gap-2 rounded-md bg-white/95 backdrop-blur-sm px-3 py-1.5 border ${category.borderColor}`}>
                        <service.icon className={`text-base ${category.textColor}`} />
                        <span className={`text-xs font-bold ${category.textColor}`}>{service.subtitle}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-slate-700 transition-colors leading-tight">
                        {service.title}
                      </h3>
                      <div className="text-right flex-shrink-0 pt-1">
                        <div className="text-xs text-slate-500 uppercase font-medium">Duration</div>
                        <div className="text-sm font-semibold text-slate-800">{service.duration}</div>
                      </div>
                    </div>
                    
                    <p className="text-sm text-slate-600 mb-3 line-clamp-2">{service.description}</p>
                    
                    <div className="flex items-center justify-between py-2 pt-3 border-t border-slate-100">
                      <div>
                        <div className="text-xs text-slate-500 uppercase font-medium">Rate</div>
                        <div className="font-bold text-base text-slate-800">{service.rate}</div>
                      </div>
                      <div className="flex gap-2">
                        <Link to={`/services/${service.id}`} className={`${category.color} text-white text-xs font-semibold py-1.5 px-3 rounded-md transition-all hover:opacity-90`}>
                          Details
                        </Link>
                        <Link to="/contact" className="border border-slate-300 text-slate-700 hover:border-slate-400 hover:text-slate-900 text-xs font-semibold py-1.5 px-3 rounded-md transition-colors">
                          Apply
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Our Commitment - Beautiful white background with assets2 image accents */}
      <section className="py-24 relative overflow-hidden bg-white">
        <div className="absolute inset-0">
          <img src={commitmentBg} alt="Commitment Background" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-50"></div>
        </div>
        <div className="absolute inset-0">
          <div className="absolute top-32 left-10 w-64 h-64 bg-cyan-200/50 rounded-full blur-3xl"></div>
          <div className="absolute bottom-32 right-10 w-64 h-64 bg-blue-200/50 rounded-full blur-3xl"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.05)_0%,_transparent_70%)]"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-slate-50 px-6 py-2.5 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-slate-700"></span>
              <span className="text-xs font-medium uppercase tracking-widest text-slate-600">Our Commitment</span>
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Excellence in Every Service
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
              Our dedication to professional standards and member satisfaction defines everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <div key={i} className="group bg-white rounded-2xl p-8 border border-slate-200 hover:border-cyan-300 hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-br ${feature.color}`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden border-t border-slate-200 bg-slate-50">
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-2.5 mb-6 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-slate-700"></span>
            <span className="text-xs font-medium uppercase tracking-widest text-slate-600">Next Steps</span>
          </div>
          <h2 className="font-serif text-3xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Ready to Begin Your Financial Journey?
          </h2>
          <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Our relationship management team is prepared to design a comprehensive financial strategy tailored to your aspirations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-slate-900 text-white hover:bg-slate-800 font-semibold py-4 px-10 rounded-lg transition-all duration-300 hover:shadow-xl border border-slate-700 flex items-center justify-center gap-2">
              Schedule a Consultation
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link to="/branches" className="border border-slate-300 text-slate-700 hover:bg-slate-50 font-semibold py-4 px-10 rounded-lg transition-all duration-300 flex items-center justify-center gap-2">
              Visit a Branch
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
