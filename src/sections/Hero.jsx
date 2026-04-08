import React, { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Link as RouterLink } from 'react-router-dom'

// Background images from assets2
import heroBg1 from '../assets/assets2/1774855672518.jpg'
import heroBg2 from '../assets/assets2/1774855672572.jpg'
import heroBg3 from '../assets/assets2/1774855672617.jpg'
import heroBg4 from '../assets/assets2/1774855672659.jpg'

// Slide data configuration with 4 professional slides
const slidesData = [
  {
    id: 1,
    tag: 'Trusted Financial Partner',
    heading: 'Building Your Financial Future',
    highlightText: 'Financial Future',
    subtitle: 'Experience exceptional banking with personalized service, competitive rates, and innovative solutions designed to help you achieve your financial goals.',
    ctaPrimary: 'Get Started Today',
    ctaSecondary: 'Learn More',
    stats: [
      { value: '14K+', label: 'Satisfied Members' },
      { value: '50+', label: 'Service Locations' },
      { value: '99.9%', label: 'Customer Satisfaction' },
    ],
    bgImage: heroBg1,
    theme: {
      gradient: 'from-slate-900/95 via-blue-900/90 to-slate-900/95',
      textGradient: 'from-blue-200 via-blue-400 to-blue-300',
      accent: 'blue',
    }
  },
  {
    id: 2,
    tag: 'Innovative Solutions',
    heading: 'Empowering Your Digital Banking',
    highlightText: 'Digital Banking',
    subtitle: 'Step into the future of finance with our cutting-edge digital platform. From mobile banking to AI-powered insights for smarter wealth management.',
    ctaPrimary: 'Explore Features',
    ctaSecondary: 'Watch Demo',
    stats: [
      { value: '24/7', label: 'Digital Access' },
      { value: '100+', label: 'Digital Services' },
      { value: '0.01s', label: 'Transaction Speed' },
    ],
    bgImage: heroBg2,
    theme: {
      gradient: 'from-slate-900/95 via-emerald-900/90 to-slate-900/95',
      textGradient: 'from-emerald-200 via-emerald-400 to-emerald-300',
      accent: 'emerald',
    }
  },
  {
    id: 3,
    tag: 'Community First',
    heading: 'Together We Grow Stronger',
    highlightText: 'Grow Stronger',
    subtitle: 'At MMOCCUL, we believe in the power of community. Your success is our success. Join thousands of members on their financial journey.',
    ctaPrimary: 'Join Our Community',
    ctaSecondary: 'Our Story',
    stats: [
      { value: '10+', label: 'Years of Service' },
      { value: '5B+', label: 'Transactions Yearly' },
      { value: '15+', label: 'Community Awards' },
    ],
    bgImage: heroBg3,
    theme: {
      gradient: 'from-slate-900/95 via-amber-900/90 to-slate-900/95',
      textGradient: 'from-amber-200 via-amber-400 to-amber-300',
      accent: 'amber',
    }
  },
  {
    id: 4,
    tag: 'Secure & Reliable',
    heading: 'Banking You Can Trust',
    highlightText: 'Can Trust',
    subtitle: 'Your security is our priority. With advanced encryption, fraud protection, and regulatory compliance, your assets are always safe with us.',
    ctaPrimary: 'Our Security',
    ctaSecondary: 'Privacy Policy',
    stats: [
      { value: '100%', label: 'Secure Transactions' },
      { value: '256-bit', label: 'Encryption' },
      { value: 'ISO', label: 'Certified Secure' },
    ],
    bgImage: heroBg4,
    theme: {
      gradient: 'from-slate-900/95 via-cyan-900/90 to-slate-900/95',
      textGradient: 'from-cyan-200 via-cyan-400 to-cyan-300',
      accent: 'cyan',
    }
  }
]

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [progress, setProgress] = useState(0)
  const [direction, setDirection] = useState('right')
  const autoPlayInterval = 7000 // 7 seconds per slide

  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 100,
      once: true,
    })
  }, [])

  // Auto-play functionality with slide to right transition
  useEffect(() => {
    const startTime = Date.now()
    
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime
      const newProgress = Math.min((elapsed % autoPlayInterval) / autoPlayInterval * 100, 100)
      setProgress(newProgress)

      if (elapsed >= autoPlayInterval) {
        setDirection('right')
        setCurrentSlide((prev) => (prev + 1) % slidesData.length)
      }
    }, 30)

    return () => clearInterval(interval)
  }, [currentSlide])

  const currentSlideData = slidesData[currentSlide]

  return (
    <div id='hero' className='w-full h-auto min-h-screen relative overflow-hidden pt-20 pb-12'>
      {/* Background Images with Slide Transition */}
      <div className='absolute inset-0 z-0 overflow-hidden'>
        {slidesData.map((slide, index) => {
          const isActive = index === currentSlide
          const isNext = index === (currentSlide + 1) % slidesData.length
          
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-all duration-700 ease-out ${
                isActive 
                  ? 'opacity-100 translate-x-0' 
                  : direction === 'right' && isNext
                    ? 'opacity-0 -translate-x-full'
                    : 'opacity-0 translate-x-full'
              }`}
              style={{
                transitionTimingFunction: 'cubic-bezier(0.25, 1, 0.5, 1)'
              }}
            >
              {/* Background Image */}
              <div 
                className='absolute inset-0 bg-cover bg-center bg-no-repeat'
                style={{ 
                  backgroundImage: `url(${slide.bgImage})`,
                  transform: isActive ? 'scale(1.02)' : 'scale(1)',
                  transition: 'transform 10s ease-out'
                }}
              />
              {/* Gradient Overlay for readability */}
              <div className={`absolute inset-0 bg-gradient-to-br ${slide.theme.gradient}`} />
            </div>
          )
        })}
      </div>
      
      {/* Main Content */}
      <div className='relative z-10 min-h-[calc(100vh-80px)] flex items-center justify-center px-4 sm:px-6 lg:px-8'>
        <div className='text-center max-w-4xl mx-auto w-full'>
          {/* Category Tag */}
          <div data-aos="fade-up" data-aos-delay="100">
            <span className='inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-[10px] sm:text-xs font-semibold tracking-widest uppercase mb-4 sm:mb-6'>
              {currentSlideData.tag}
            </span>
          </div>
          
          {/* Main Heading */}
          <h1 
            key={`heading-${currentSlide}`}
            data-aos="fade-up" 
            data-aos-delay="200" 
            className='text-white lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold font-poppins leading-tight mb-4 tracking-tight'
          >
            <span className='block text-white/95 font-extrabold mb-1'>
              {currentSlideData.heading.split(currentSlideData.highlightText)[0]}
            </span>
            <span className={`block bg-gradient-to-r ${currentSlideData.theme.textGradient} bg-clip-text text-transparent font-black`}>
              {currentSlideData.highlightText}
            </span>
          </h1>
          
          {/* Subtitle */}
          <p 
            key={`subtitle-${currentSlide}`}
            data-aos="fade-up" 
            data-aos-delay="300" 
            className='text-white/80 text-sm sm:text-base md:text-lg font-light leading-relaxed mb-6 sm:mb-8 max-w-lg mx-auto px-2'
          >
            {currentSlideData.subtitle}
          </p>
          
          {/* CTA Buttons */}
          <div 
            key={`buttons-${currentSlide}`}
            data-aos="fade-up" 
            data-aos-delay="400" 
            className='flex flex-col sm:flex-row gap-3 justify-center mb-8 sm:mb-10'
          >
            <RouterLink 
              to="/create-account"
              className='bg-gradient-to-r from-white to-gray-100 text-gray-900 py-3 px-6 sm:py-3.5 sm:px-8 font-semibold text-sm sm:text-base rounded-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5 transform text-center inline-block border border-white/50'
            >
              {currentSlideData.ctaPrimary}
            </RouterLink>
            <button className='border border-white/50 hover:border-white hover:bg-white/10 py-3 px-6 sm:py-3.5 sm:px-8 text-white font-medium text-sm sm:text-base rounded-lg transition-all duration-300 text-center backdrop-blur-sm'>
              {currentSlideData.ctaSecondary}
            </button>
          </div>
          
          {/* Stats */}
          <div 
            key={`stats-${currentSlide}`}
            data-aos="fade-up" 
            data-aos-delay="500" 
            className='grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-xl mx-auto border-t border-white/10 pt-6 sm:pt-8'
          >
            {currentSlideData.stats.map((stat, index) => (
              <div key={index} className='text-center'>
                <h3 className='text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-1'>
                  {stat.value}
                </h3>
                <div className={`w-6 sm:w-8 h-0.5 bg-gradient-to-r ${currentSlideData.theme.textGradient} mx-auto mb-2 rounded-full opacity-60`} />
                <p className='text-white/50 text-[10px] sm:text-xs font-medium uppercase tracking-wide'>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slide Indicators - Auto Play Progress */}
      <div className='absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2 sm:gap-3 items-center'>
        {slidesData.map((slide, index) => (
          <div
            key={slide.id}
            className={`relative transition-all duration-500 ${
              index === currentSlide ? 'w-8 sm:w-10' : 'w-2 sm:w-2.5'
            } h-1.5 rounded-full overflow-hidden`}
          >
            <div className={`absolute inset-0 rounded-full ${
              index === currentSlide 
                ? `bg-gradient-to-r ${slide.theme.textGradient}` 
                : 'bg-white/30'
            }`}></div>
            {index === currentSlide && (
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-white/25 rounded-full"
                  style={{ 
                    width: `${progress}%`,
                    transition: 'width 0.03s linear'
                  }}
                />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className='absolute bottom-4 left-1/2 -translate-x-1/2 z-20 animate-bounce'>
        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  )
}