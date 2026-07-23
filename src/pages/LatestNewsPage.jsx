import React, { useEffect } from 'react'
import { Header } from '../sections/Header'
import { Footer } from '../sections/Footer'
import { Portfolio } from "../sections/Portfolio"
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useLanguage } from '../context/LanguageContext'

export const LatestNewsPage = () => {
  const { t } = useLanguage()
  
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    })
  }, [])

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      
      {/* Hero Section - matching AboutPage style */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920')] bg-cover bg-center opacity-10"></div>
        <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-blue-500/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-cyan-400/20 blur-[120px] rounded-full"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div 
            data-aos="fade-up"
            className="inline-flex items-center gap-2 rounded-full border border-slate-700/50 bg-white/5 px-6 py-3 backdrop-blur-sm mb-6"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="text-xs font-medium uppercase tracking-wider text-slate-400">{t('latestNews')}</span>
          </div>
          
          <h1 
            data-aos="fade-up" 
            data-aos-delay="100"
            className="font-serif text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            {t('stayUpdated')} <span className="bg-gradient-to-r from-cyan-400 to-sky-400 bg-clip-text text-transparent">{t('withMmoccul')}</span>
          </h1>
          
          <p 
            data-aos="fade-up" 
            data-aos-delay="200"
            className="mx-auto max-w-2xl text-lg text-slate-300 leading-relaxed"
          >
            {t('latestUpdatesText')}
          </p>
        </div>
      </section>
      
      <Portfolio />
      <Footer />
    </div>
  )
}
