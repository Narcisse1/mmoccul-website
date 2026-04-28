import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { services } from '../export'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { MdSecurity, MdSpeed, MdSupportAgent, MdVerifiedUser, MdTrendingUp } from 'react-icons/md'
import { FaHandshake, FaChartLine } from 'react-icons/fa'
import { Footer } from '../sections/Footer'
import { Header } from '../sections/Header'
import backgroundImage from '../assets/assets2/1774855672617.jpg'
import ctaBackground from '../assets/bg2.jpg'

export const ServicesPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])

  const serviceCategories = services

  const features = [
    { 
      icon: MdSecurity, 
      title: 'Security & Trust', 
      desc: 'Bank-grade encryption and regulatory compliance ensure your assets are protected at all times.',
      accent: 'from-cyan-500 to-blue-600'
    },
    { 
      icon: MdSpeed, 
      title: 'Instant Processing', 
      desc: 'Digital-first workflows deliver decisions in minutes, not days, for time-sensitive needs.',
      accent: 'from-emerald-500 to-teal-600'
    },
    { 
      icon: MdSupportAgent, 
      title: 'Personal Advisory', 
      desc: 'Dedicated relationship managers provide tailored guidance for your unique financial journey.',
      accent: 'from-amber-500 to-orange-600'
    },
    { 
      icon: FaHandshake, 
      title: 'Member Ownership', 
      desc: 'As a cooperative, profits are reinvested in better rates and services for you, not external shareholders.',
      accent: 'from-purple-500 to-violet-600'
    },
    { 
      icon: MdVerifiedUser, 
      title: 'Regulatory Excellence', 
      desc: 'Fully accredited by COBAC and MINFI — your assurance of professional standards and compliance.',
      accent: 'from-rose-500 to-pink-600'
    },
    { 
      icon: MdTrendingUp, 
      title: 'Growth Focused', 
      desc: 'Investments, loans, and savings all structured to help your wealth grow systematically.',
      accent: 'from-cyan-400 to-sky-600'
    },
  ]

  const [activeFeature, setActiveFeature] = useState(0)

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10" 
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-slate-700/50 bg-white/5 px-6 py-2.5 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="text-xs font-medium uppercase tracking-widest text-slate-400">Financial Solutions</span>
          </div>
          <h1 className="font-serif text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            Comprehensive <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">Financial Services</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-300 leading-relaxed font-light">
            Discover tailored financial solutions designed to help you achieve your goals, 
            grow your enterprise, and secure your family's future with confidence.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/create-account" 
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-sky-500 text-white font-medium py-3.5 px-8 rounded-xl hover:from-cyan-600 hover:to-sky-600 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30 hover:-translate-y-0.5"
            >
              Open an Account
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link 
              to="/branches" 
              className="inline-flex items-center justify-center gap-2 border border-slate-600/50 text-white font-medium py-3.5 px-8 rounded-xl hover:bg-white/10 transition-all duration-300"
            >
              Visit a Branch
            </Link>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      {serviceCategories.map((category, catIndex) => (
        <section key={catIndex} className={`py-20 border-b ${catIndex % 2 === 0 ? 'bg-white' : 'bg-slate-50'} border-slate-200/50`}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 rounded-full border bg-white px-6 py-3 shadow-sm">
                <category.icon className={`text-2xl ${category.textColor}`} />
                <span className={`text-sm font-semibold uppercase tracking-[0.2em] ${category.textColor}`}>
                  {category.category}
                </span>
              </div>
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-slate-900 mt-6 mb-4">
                {category.category} Solutions
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                Expert services crafted to meet your specific needs
              </p>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
              {category.services.map((service) => (
                <article 
                  key={service.id} 
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl hover:border-slate-200 transition-all duration-500 hover:-translate-y-1"
                >
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className={`flex items-center gap-2 rounded-lg bg-white/95 backdrop-blur-sm px-3 py-2 shadow-lg border ${category.borderColor}`}>
                        <service.icon className={`text-lg ${category.textColor}`} />
                        <span className={`text-xs font-bold ${category.textColor}`}>{service.subtitle}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-cyan-600 transition-colors leading-tight">
                        {service.title}
                      </h3>
                      <div className="text-right flex-shrink-0 pt-1">
                        <div className="text-xs text-slate-500 uppercase font-medium">Duration</div>
                        <div className="text-sm font-bold text-slate-700">{service.duration}</div>
                      </div>
                    </div>
                    
                    <p className="text-sm text-slate-600 mb-4 leading-relaxed line-clamp-3">{service.description}</p>
                    
                    <div className="flex items-center justify-between py-3 border-t border-slate-100">
                      <div>
                        <div className="text-xs text-slate-500 uppercase font-medium">Interest Rate</div>
                        <div className="font-bold text-slate-800 text-base">{service.rate}</div>
                      </div>
                      <div className="flex gap-2">
                        <Link 
                          to={`/services/${service.id}`}
                          className={`${category.color} text-white text-sm font-semibold py-2 px-4 rounded-lg transition-all hover:opacity-90 flex items-center gap-1`}
                        >
                          View Details
                        </Link>
                        <Link 
                          to="/contact"
                          className="border border-slate-300 text-slate-700 hover:border-cyan-400 hover:text-cyan-600 text-sm font-semibold py-2 px-4 rounded-lg transition-colors flex items-center gap-1"
                        >
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

      {/* Featured Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-700/50 bg-white/5 px-6 py-2.5 backdrop-blur-sm mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400"></span>
              <span className="text-xs font-medium uppercase tracking-widest text-slate-400">Why Choose Us</span>
            </div>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-4">
              Exceptional Service Standards
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Our commitment to excellence sets us apart in the financial services industry
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <div 
                key={i}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 hover:bg-white/10 transition-all duration-500 cursor-pointer"
                onMouseEnter={() => setActiveFeature(i)}
                onMouseLeave={() => setActiveFeature(0)}
              >
                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${feature.accent}`}></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-br from-slate-800 to-slate-900 group-hover:from-cyan-500 group-hover:to-sky-600 transition-all duration-500 shadow-lg group-hover:shadow-xl group-hover:scale-110">
                    <feature.icon className="w-7 h-7 text-cyan-400 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-200 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400 group-hover:text-slate-300 leading-relaxed text-sm transition-colors">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${ctaBackground})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-900/90 to-indigo-900/95"></div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-6 py-2 mb-6 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="text-xs font-medium uppercase tracking-widest text-cyan-400">Ready to Begin</span>
          </div>
          <h2 className="font-serif text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Transform Your Financial Future?
          </h2>
          <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Our dedicated team is ready to help you find the perfect financial solution. Whether you are looking to build savings, 
            secure financing for your dreams, or plan for long-term prosperity — we are here to support you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-slate-900 hover:bg-slate-100 font-semibold py-4 px-10 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-white/20 border border-white/20 flex items-center justify-center gap-2"
            >
              Contact Us Today
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link 
              to="/branches" 
              className="border border-slate-600/50 text-white hover:bg-white/10 font-semibold py-4 px-10 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
            >
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
