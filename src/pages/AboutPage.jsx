import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { FaHandshake, FaUsers, FaChartLine, FaShieldAlt, FaGlobe, FaMoneyBillWave } from 'react-icons/fa'
import { Link as RouterLink } from 'react-router-dom'
import { Header } from '../sections/Header'
import { Footer } from '../sections/Footer'
import aboutImg from '../assets/about.jpg'
import asset1 from '../assets/assets2/1774855672518.jpg'

export const AboutPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, delay: 100, once: true })
  }, [])

  const values = [
    { icon: <FaHandshake />, title: 'Integrity', desc: 'Honest, transparent, ethical in all we do' },
    { icon: <FaUsers />, title: 'Community', desc: 'Your success is our success' },
    { icon: <FaChartLine />, title: 'Excellence', desc: 'Continuously raising the standard' },
    { icon: <FaShieldAlt />, title: 'Security', desc: 'State-of-the-art protection' },
    { icon: <FaMoneyBillWave />, title: 'Value', desc: 'Competitive rates, fair terms' },
    { icon: <FaGlobe />, title: 'Innovation', desc: 'Modern solutions, timeless service' },
  ]

  return (
    <div className='bg-slate-50 min-h-screen'>
      <Header />
      <div className='pt-20'>
        <section className='relative py-20 lg:py-32 overflow-hidden'>
          <div className='absolute inset-0'>
            <img src={asset1} alt="MMOCCUL" className='w-full h-full object-cover' />
            <div className='absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-slate-900/90' />
          </div>
          <div className='absolute inset-0 opacity-5'>
            <svg className='w-full h-full' xmlns='http://www.w3.org/2000/svg'>
              <defs>
                <pattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'>
                  <path d='M 60 0 L 0 0 0 60' fill='none' stroke='white' strokeWidth='0.5' />
                </pattern>
              </defs>
              <rect width='100%' height='100%' fill='url(#grid)' />
            </svg>
          </div>
          <div className='relative max-w-7xl mx-auto px-6 lg:px-8 text-center'>
            <div className='mb-8'>
              <div className='inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-full'>
                <span className='w-1.5 h-1.5 bg-sky-500 rounded-full animate-pulse'></span>
                <span className='text-slate-400 text-xs font-medium tracking-[0.3em] uppercase'>ESTABLISHED 2016</span>
              </div>
            </div>
            <h1 className='text-5xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight'>
              About <span className='text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-400'>MMOCCUL</span>
            </h1>
            <p className='text-xl lg:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-serif'>
              Banking built on trust, driven by community
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center mt-12'>
              <RouterLink to='/create-account' className='inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white py-3 px-8 text-base font-medium rounded-full transition-all duration-300 border border-slate-700 hover:border-slate-600'>
                Become a Member
                <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' /></svg>
              </RouterLink>
              <RouterLink to='/branches' className='inline-flex items-center justify-center gap-2 border border-slate-700 hover:border-slate-600 hover:bg-slate-800/50 text-slate-300 hover:text-white py-3 px-8 text-base font-medium rounded-full transition-all duration-300'>
                Find a Branch
              </RouterLink>
            </div>
          </div>
          <div className='absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce'>
            <div className='w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2'>
              <div className='w-1 h-3 bg-white/50 rounded-full animate-pulse' />
            </div>
          </div>
        </section>

        <section className='py-24 bg-white'>
          <div className='max-w-7xl mx-auto px-6 lg:px-8'>
            <div className='grid lg:grid-cols-2 gap-12 lg:gap-20 items-center'>
              <div data-aos='fade-right'>
                <div className='inline-block px-6 py-2 bg-sky-900/10 border border-sky-700/20 rounded-full mb-6'>
                  <span className='text-sky-700 text-sm font-bold tracking-[0.2em] uppercase'>About Us</span>
                </div>
                <h2 className='text-4xl lg:text-5xl font-bold text-slate-900 mb-8 leading-tight'>
                  Building Trust, <span className='text-sky-600'>Creating Value</span>
                </h2>
                <p className='text-slate-600 text-lg leading-relaxed mb-8'>
                  MMOCCUL (Mmockmbie Credit Union Cooperative Ltd) is a Category 1 Microfinance Institution, 
                  incorporated in 2016 and fully accredited by COBAC (N° D-2021/317) and MINFI (N° 0000381). 
                  We are member-owned and member-managed — meaning we work for you, not for outside investors. 
                  Over the past four years, MMOCCUL has been recognised as the Fastest-Growing and Most 
                  Digital-Friendly Credit Union Cooperative in Cameroon. We currently serve over 15,000 members 
                  across 12 branches nationwide, with membership open to everyone.
                </p>
                <p className='text-slate-700 text-lg font-medium leading-relaxed mb-8'>
                  Your financial partner for growth and success.
                </p>
                <div className='space-y-5'>
                  <div className='flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200'>
                    <div className='w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0'>
                      <svg className='w-5 h-5 text-sky-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
                      </svg>
                    </div>
                    <div>
                      <div className='font-semibold text-slate-800'>12 Branches Nationwide</div>
                      <div className='text-slate-600 text-sm'>Serving communities across Cameroon</div>
                    </div>
                  </div>
                  <div className='flex items-start gap-4 p-4 bg-cyan-50 rounded-xl border border-cyan-200'>
                    <div className='w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0'>
                      <svg className='w-5 h-5 text-cyan-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
                      </svg>
                    </div>
                    <div>
                      <div className='font-semibold text-slate-800'>5% Interest on Member Shares</div>
                      <div className='text-slate-600 text-sm'>Paid twice annually — one of the highest rates available</div>
                    </div>
                  </div>
                  <div className='flex items-start gap-4 p-4 bg-emerald-50 rounded-xl border border-emerald-200'>
                    <div className='w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0'>
                      <svg className='w-5 h-5 text-emerald-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                      </svg>
                    </div>
                    <div>
                      <div className='font-semibold text-slate-800'>Digital-Friendly Services</div>
                      <div className='text-slate-600 text-sm'>Award-winning online and mobile banking platform</div>
                    </div>
                  </div>
                </div>
              </div>
              <div data-aos='fade-left' className='relative'>
                <div className='relative rounded-3xl overflow-hidden shadow-2xl'>
                  <img src={aboutImg} alt='MMOCCUL Team' className='w-full h-[500px] object-cover' />
                  <div className='absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent' />
                  <div className='absolute bottom-8 left-8 right-8'>
                    <div className='bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl'>
                      <div className='flex items-center gap-4'>
                        <div className='flex -space-x-4'>
                          {[1,2,3,4].map(i => (
                            <div key={i} className='w-10 h-10 rounded-full bg-gradient-to-br from-sky-500 to-cyan-600 border-2 border-white flex items-center justify-center text-white font-bold text-sm'>
                              {i}
                            </div>
                          ))}
                        </div>
                        <div>
                          <div className='text-slate-800 font-semibold'>15,000+ Members</div>
                          <div className='text-slate-500 text-sm'>Trust us with their financial future</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='absolute -top-6 -right-6 w-24 h-24 bg-sky-400/20 rounded-full blur-2xl' />
                <div className='absolute -bottom-6 -left-6 w-32 h-32 bg-cyan-400/20 rounded-full blur-2xl' />
              </div>
            </div>
          </div>
        </section>

        <section className='py-24 bg-gradient-to-b from-slate-50 to-white'>
          <div className='max-w-7xl mx-auto px-6 lg:px-8'>
            <div className='text-center mb-16'>
              <div data-aos='fade-up' className='inline-block px-6 py-2 bg-sky-900/10 border border-sky-700/20 rounded-full mb-6'>
                <span className='text-sky-700 text-sm font-bold tracking-[0.2em] uppercase'>Our Impact</span>
              </div>
              <h2 data-aos='fade-up' data-aos-delay='100' className='text-4xl lg:text-5xl font-bold text-slate-900 mb-6'>
                Transforming Communities, Building Futures
              </h2>
              <p data-aos='fade-up' data-aos-delay='200' className='text-xl text-slate-600 max-w-3xl mx-auto'>
                Our commitment extends beyond banking — we invest in people, communities, and sustainable growth
              </p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
              <div data-aos='fade-up' className='text-center p-8 bg-white rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300'>
                <div className='w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-sky-500 to-cyan-600 rounded-xl flex items-center justify-center'>
                  <svg className='w-8 h-8 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' />
                  </svg>
                </div>
                <div className='text-3xl font-bold text-slate-800 mb-2'>15,000+</div>
                <div className='text-slate-600'>Active Members</div>
              </div>
              <div data-aos='fade-up' data-aos-delay='100' className='text-center p-8 bg-white rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300'>
                <div className='w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center'>
                  <svg className='w-8 h-8 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' />
                  </svg>
                </div>
                <div className='text-3xl font-bold text-slate-800 mb-2'>12</div>
                <div className='text-slate-600'>Branches Nationwide</div>
              </div>
              <div data-aos='fade-up' data-aos-delay='200' className='text-center p-8 bg-white rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300'>
                <div className='w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center'>
                  <svg className='w-8 h-8 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
                  </svg>
                </div>
                <div className='text-3xl font-bold text-slate-800 mb-2'>5%</div>
                <div className='text-slate-600'>Annual Member Share Interest</div>
              </div>
              <div data-aos='fade-up' data-aos-delay='300' className='text-center p-8 bg-white rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300'>
                <div className='w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center'>
                  <svg className='w-8 h-8 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7M5 5l7 7-7 7M19 5l-7 7 7 7M19 5l-7-7 7-7' />
                  </svg>
                </div>
                <div className='text-3xl font-bold text-slate-800 mb-2'>500M+</div>
                <div className='text-slate-600'>FCFA in Loans Disbursed</div>
              </div>
            </div>
          </div>
        </section>

        <section className='py-24 bg-white'>
          <div className='max-w-7xl mx-auto px-6 lg:px-8'>
            <div className='text-center mb-16'>
              <div data-aos='fade-up' className='inline-block px-6 py-2 bg-sky-900/10 border border-sky-700/20 rounded-full mb-6'>
                <span className='text-sky-700 text-sm font-bold tracking-[0.2em] uppercase'>Our Principles</span>
              </div>
              <h2 data-aos='fade-up' data-aos-delay='100' className='text-4xl lg:text-5xl font-bold text-slate-900 mb-4'>
                Core Values
              </h2>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {values.map((v, i) => (
                <div key={i} data-aos='fade-up' data-aos-delay={i * 100} className='group bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-sky-200'>
                  <div className='w-16 h-16 bg-sky-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-sky-600'>
                    {v.icon}
                  </div>
                  <h3 className='text-xl font-bold text-slate-800 mb-3 group-hover:text-sky-600 transition-colors'>{v.title}</h3>
                  <p className='text-slate-600 leading-relaxed'>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className='py-24 bg-slate-900 relative overflow-hidden'>
          <div className='absolute inset-0 opacity-10'>
            <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500 rounded-full blur-3xl' />
            <div className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl' />
          </div>
          <div className='max-w-4xl mx-auto text-center px-6 lg:px-8 relative z-10'>
            <h2 className='text-4xl lg:text-5xl font-bold text-white mb-6'>Join Our Growing Community</h2>
            <p className='text-xl text-white/70 mb-10 leading-relaxed max-w-2xl mx-auto'>
              Become part of a financial cooperative that truly cares. With MMOCCUL, you are a valued member of our community.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <RouterLink to='/create-account' className='inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 text-white py-4 px-8 text-lg font-semibold rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(14,165,233,0.4)] hover:scale-105 group'>
                Create Account Today
                <svg className='w-4 h-4 group-hover:translate-x-1 transition-transform' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' /></svg>
              </RouterLink>
              <RouterLink to='/branches' className='inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-sky-400 hover:bg-sky-400/10 py-4 px-8 text-white font-semibold text-lg rounded-full transition-all duration-300'>
                Find a Branch
              </RouterLink>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}