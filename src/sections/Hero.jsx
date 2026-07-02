import React, { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Link as RouterLink } from 'react-router-dom'
import {
  Wallet,
  Headphones,
  Smartphone,
  Users,
  Receipt,
} from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

import heroBg1 from '../assets/assets3/savings.png'
import heroBg2 from '../assets/assets3/customer_service.png'
import heroBg3 from '../assets/assets3/mobile_banking.png'
import heroBg4 from '../assets/assets3/community.png'

const getSlidesData = (t) => [
  {
    id: 1,
    tag: t('welcomeTag'),
    title: t('heroSlide1Title'),
    highlight: t('heroSlide1Highlight'),
    description: t('heroSlide1Desc'),
    buttonText: t('heroSlide1Btn'),
    bgImage: heroBg1,
    icon: Wallet,
  },
  {
    id: 2,
    tag: t('welcomeTag'),
    title: t('heroSlide2Title'),
    highlight: t('heroSlide2Highlight'),
    description: t('heroSlide2Desc'),
    buttonText: t('heroSlide2Btn'),
    bgImage: heroBg2,
    icon: Headphones,
  },
  {
    id: 3,
    tag: t('welcomeTag'),
    title: t('heroSlide3Title'),
    highlight: t('heroSlide3Highlight'),
    description: t('heroSlide3Desc'),
    buttonText: t('heroSlide3Btn'),
    bgImage: heroBg3,
    icon: Smartphone,
  },
  {
    id: 4,
    tag: t('welcomeTag'),
    title: t('heroSlide4Title'),
    highlight: t('heroSlide4Highlight'),
    description: t('heroSlide4Desc'),
    buttonText: t('heroSlide4Btn'),
    bgImage: heroBg4,
    icon: Users,
  },
]

const getServices = (t) => [
  {
    title: t('createAccountHero'),
    icon: Users,
    link: '/create-account',
  },
  {
    title: t('customerService'),
    icon: Headphones,
    link: '/contact',
  },
  {
    title: t('savingsAccount'),
    icon: Wallet,
    link: '/services',
  },
  {
    title: t('onlinePayment'),
    icon: Receipt,
    link: '/services',
  },
]

export const Hero = () => {
  const { t } = useLanguage()
  const [currentSlide, setCurrentSlide] = useState(0)
  const slidesData = getSlidesData(t)
  const services = getServices(t)

  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slidesData.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [slidesData.length])

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden bg-[#f5f5f5]"
    >
      {/* ─── SLIDES ─── */}
      {/* 
        Mobile:  420px tall — enough room for heading + description + button
        Tablet:  480px
        Desktop: 560px
      */}
      <div className="relative h-[420px] sm:h-[480px] lg:h-[560px]">
        {slidesData.map((slide, index) => {
          const isActive = index === currentSlide
          const SlideIcon = slide.icon

          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                isActive
                  ? 'opacity-100 translate-x-0 z-20'
                  : 'opacity-0 translate-x-10 z-10'
              }`}
            >
              {/* Background */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.bgImage})` }}
              />

              {/* Darker overlay on mobile so white text is always readable */}
              <div className="absolute inset-0 bg-black/50 sm:bg-black/40 lg:bg-black/30" />

              {/* Slide Content */}
              <div className="relative z-20 flex items-center h-full px-5 sm:px-10 lg:px-20">
                <div className="w-full max-w-xl text-left">

                  {/* Tag */}
                  <div
                    data-aos="fade-up"
                    className="flex items-center gap-2 mb-3"
                  >
                    <div className="w-4 h-[2px] bg-[#2436ff]" />
                    <span className="text-[#a0aaff] uppercase tracking-wide font-semibold text-[10px] sm:text-xs">
                      {slide.tag}
                    </span>
                  </div>

                  {/* Heading
                      Mobile:  26px  (was 28px — slightly tighter for very small screens)
                      Small:   34px
                      Medium:  42px
                      Large:   48px
                  */}
                  <h1
                    data-aos="fade-up"
                    data-aos-delay="100"
                    className="text-[26px] sm:text-[34px] md:text-[42px] lg:text-[48px] leading-tight font-extrabold mb-3 sm:mb-4"
                  >
                    <span className="block text-white">
                      {slide.title}
                    </span>
                    <span className="block text-[#6b7fff]">
                      {slide.highlight}
                    </span>
                  </h1>

                  {/* Description — hidden on very small screens to avoid crowding */}
                  <p
                    data-aos="fade-up"
                    data-aos-delay="200"
                    className="hidden sm:block text-white/90 text-sm sm:text-base leading-relaxed max-w-lg mb-5 sm:mb-6"
                  >
                    {slide.description}
                  </p>

                  {/* Button */}
                  <div data-aos="fade-up" data-aos-delay="300">
                    <RouterLink
                      to="/about"
                      className="inline-flex items-center gap-2 bg-[#2436ff] hover:bg-[#1727d8] text-white px-5 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 shadow-xl"
                    >
                      <SlideIcon size={16} />
                      {slide.buttonText}
                    </RouterLink>
                  </div>

                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* ─── SLIDE INDICATORS ─── */}
      <div className="flex justify-center gap-3 pt-5 pb-4">
        {slidesData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`transition-all duration-300 rounded-full ${
              currentSlide === index
                ? 'w-8 h-2.5 bg-[#2436ff]'
                : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>

      {/* ─── SERVICE CARDS ─── */}
      {/*
        On mobile: normal flow below the slides (no negative margin — avoids overlap)
        On desktop: slight negative pull upward to overlap the slide bottom edge
      */}
      <div className="relative z-30 max-w-6xl mx-auto px-4 sm:px-6 pb-6 lg:pb-10 lg:-mt-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <RouterLink
                key={index}
                to={service.link}
                data-aos="fade-up"
                data-aos-delay={index * 80}
                className="group rounded-xl shadow-md px-3 py-4 sm:py-5 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:bg-[#2436ff] hover:text-white bg-white text-[#0e1630]"
              >
                <div className="flex justify-center mb-2 sm:mb-3">
                  <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center bg-[#eef0ff] group-hover:bg-white/20 transition-colors duration-300">
                    <Icon size={16} className="sm:w-5 sm:h-5" />
                  </div>
                </div>
                <h3 className="font-semibold text-[11px] sm:text-sm leading-snug">
                  {service.title}
                </h3>
              </RouterLink>
            )
          })}
        </div>
      </div>

    </section>
  )
}