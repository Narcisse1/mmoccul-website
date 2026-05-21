import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { services } from '../export'
import AOS from 'aos'
import 'aos/dist/aos.css'

import {
  MdSecurity,
  MdSpeed,
  MdSupportAgent,
  MdVerifiedUser,
} from 'react-icons/md'

import {
  FaHandshake,
  FaChartBar,
  FaArrowRight,
} from 'react-icons/fa'

import { Footer } from '../sections/Footer'
import { Header } from '../sections/Header'

import backgroundImage from '../assets/assets3/beautiful.jpg'
import commitmentBg from '../assets/assets2/1774855672707.jpg'

export const ServicesPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
    })
  }, [])

  const serviceCategories = services

  const features = [
    {
      icon: MdSecurity,
      title: 'Security & Trust',
      desc: 'Advanced protection systems ensuring safe and secure banking.',
    },
    {
      icon: MdSpeed,
      title: 'Fast Processing',
      desc: 'Efficient digital systems designed for speed and convenience.',
    },
    {
      icon: MdSupportAgent,
      title: 'Dedicated Support',
      desc: 'Professional support tailored to your financial journey.',
    },
    {
      icon: FaHandshake,
      title: 'Member Ownership',
      desc: 'A cooperative structure focused entirely on member prosperity.',
    },
    {
      icon: MdVerifiedUser,
      title: 'Regulatory Excellence',
      desc: 'Accredited and compliant with leading financial institutions.',
    },
    {
      icon: FaChartBar,
      title: 'Growth Focused',
      desc: 'Solutions designed to help individuals and businesses grow.',
    },
  ]

  return (
    <div className="min-h-screen bg-[#f8fafc] overflow-hidden">
      <Header />

      {/* ================= HERO ================= */}
      <section className="relative h-[50vh] min-h-[480px] overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src={backgroundImage}
            alt="MMOCCUL Services"
            className="w-full h-full object-cover"
          />

          {/* lighter overlay so image is visible */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#021526]/80 via-[#03213f]/55 to-[#0b3b66]/45"></div>

          {/* subtle glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.14),transparent_32%)]"></div>

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.14),transparent_32%)]"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-3 bg-white/10 border border-white/20 backdrop-blur-md px-5 py-2 rounded-full mb-7">
                <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>

                <span className="text-white/90 uppercase tracking-[0.24em] text-[11px] font-semibold">
                  MMOCCUL SERVICES
                </span>
              </div>

              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-white mb-6">
                Modern Banking
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-cyan-200 to-blue-200">
                  Designed For Growth
                </span>
              </h1>

              <p className="text-base md:text-lg leading-relaxed text-blue-100/90 max-w-xl mb-9 font-light">
                Professional financial solutions tailored to help you grow,
                invest, save and succeed with confidence.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white px-7 py-3.5 rounded-full font-semibold shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Explore Services

                  <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  to="/branches"
                  className="inline-flex items-center justify-center border border-white/30 hover:border-sky-300 hover:bg-white/10 backdrop-blur-md text-white px-7 py-3.5 rounded-full font-semibold transition-all duration-300"
                >
                  Find a Branch
                </Link>
              </div>
            </div>
          </div>
        </div>


      </section>

      {/* ================= SERVICES ================= */}
{serviceCategories.map((category, catIndex) => (
  <section
    key={catIndex}
    className="relative py-12 lg:py-16"
  >
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            {/* Heading */}
            <div
              data-aos="fade-up"
              className="text-center max-w-2xl mx-auto mb-14"
            >
              <div className="inline-flex items-center gap-3 bg-white border border-slate-200 px-5 py-2 rounded-full shadow-sm mb-5">
                <category.icon className="text-sky-600 text-lg" />

                <span className="uppercase tracking-[0.18em] text-[11px] font-semibold text-slate-700">
                  {category.category}
                </span>
              </div>

<h2 className="font-serif text-2xl lg:text-3xl text-slate-900 font-bold mb-2">
{category.category} Solutions
</h2>

              <p className="text-slate-600 text-base leading-relaxed">
                Professionally tailored financial solutions crafted around your
                ambitions and future.
              </p>
            </div>

             {/* Cards */}
             <div className="grid lg:grid-cols-3 gap-6">
              {category.services.map((service, i) => (
                <div
                  key={service.id}
                  data-aos="fade-up"
                  data-aos-delay={i * 100}
                   className="group relative bg-white overflow-hidden border border-slate-200 hover:border-sky-200 shadow-sm hover:shadow-2xl transition-all duration-500"
                >
                    {/* Image */}
                    <div className="relative h-[160px] overflow-hidden rounded-t-[50%]">
                      <div className="absolute inset-0">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-[#021526]/75 via-[#021526]/10 to-transparent"></div>
                    </div>

                    {/* Content */}
                    <div className="p-4 lg:p-6 rounded-b-[20px]">
                    <div className="flex items-start justify-between gap-5 mb-4">
                      <h3 className="text-xl lg:text-2xl font-serif font-bold text-slate-900 leading-snug">
                        {service.title}
                      </h3>

                      <div className="text-right shrink-0">
                        <div className="text-[10px] uppercase tracking-widest text-slate-400 mb-1">
                          Duration
                        </div>

                        <div className="font-semibold text-sm text-slate-700">
                          {service.duration}
                        </div>
                      </div>
                    </div>

<p className="text-slate-600 leading-relaxed mb-4 text-[13px]">
{service.description}
</p>

                    {/* Footer */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 pt-5 border-t border-slate-100">
                      <div>
                        <div className="text-[10px] uppercase tracking-widest text-slate-400 mb-1">
                          Rate
                        </div>

                        <div className="text-xl font-bold text-sky-700">
                          {service.rate}
                        </div>
                      </div>

                      <div className="flex gap-3">
<Link
                           to={`/services/${service.id}`}
                           className="bg-gradient-to-r from-sky-500 to-blue-600 text-white px-5 py-2.5 rounded-md text-sm font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
                         >
                           Learn More
                         </Link>

                         <Link
                           to="/contact"
                           className="border border-slate-300 hover:border-sky-400 hover:text-sky-700 text-slate-700 px-5 py-2.5 rounded-md text-sm font-semibold transition-all duration-300"
                         >
                           Apply
                         </Link>
                      </div>
                    </div>
                  </div>

                  {/* glow */}
                  <div className="absolute -top-16 -right-16 w-32 h-32 bg-sky-100 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ================= WHY CHOOSE US ================= */}
      <section className="relative py-24 overflow-hidden bg-white">
        <div className="absolute inset-0">
          <img
            src={commitmentBg}
            alt=""
            className="w-full h-full object-cover opacity-[0.03]"
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
          <div
            data-aos="fade-up"
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-sky-50 border border-sky-100 px-5 py-2 rounded-full mb-5">
              <span className="w-2 h-2 rounded-full bg-sky-500"></span>

              <span className="uppercase tracking-[0.18em] text-[11px] font-semibold text-sky-700">
                Why Choose MMOCCUL
              </span>
            </div>

            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-slate-900 mb-5">
              Excellence In Every Experience
            </h2>

            <p className="text-base text-slate-600 leading-relaxed">
              Combining innovation, professionalism and member-centered banking
              to deliver exceptional financial experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="group bg-[#f8fafc] border border-slate-200 rounded-[26px] p-7 hover:bg-white hover:shadow-xl hover:border-sky-200 transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-500 to-blue-700 flex items-center justify-center mb-6 shadow-lg">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-xl font-serif font-bold text-slate-900 mb-3 group-hover:text-sky-700 transition-colors">
                  {feature.title}
                </h3>

                <p className="text-slate-600 leading-relaxed text-[15px]">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* ================= CTA ================= */}
       <section className="relative py-16 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={backgroundImage}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#021526]/90 via-[#03213f]/80 to-[#0b3b66]/70"></div>
          </div>
         <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
           <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full mb-4">
             <span className="w-2 h-2 rounded-full bg-sky-400"></span>
             <span className="uppercase tracking-[0.18em] text-[10px] font-semibold text-white">Begin Today</span>
           </div>
           <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white leading-tight mb-2">
             Let’s Build Your Financial Future
           </h2>
           <p className="text-sm lg:text-base text-blue-100/80 leading-relaxed max-w-3xl mx-auto mb-4">
             Experience professional financial services built on trust, innovation and long-term prosperity.
           </p>
           <div className="flex flex-wrap justify-center gap-3">
             <Link
               to="/contact"
               className="bg-gradient-to-r from-sky-500 to-blue-600 text-white px-6 py-2.5 rounded-full font-semibold shadow-xl hover:scale-105 transition-all duration-300"
             >
               Schedule Consultation
             </Link>
             <Link
               to="/branches"
               className="border border-white/30 hover:border-sky-300 hover:bg-white/10 text-white px-6 py-2.5 rounded-full font-semibold transition-all duration-300"
             >
               Visit a Branch
             </Link>
           </div>
         </div>
       </section>

      <Footer />
    </div>
  )
}