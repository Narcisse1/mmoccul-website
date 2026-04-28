import React, { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Link as RouterLink } from 'react-router-dom'

// Background images from assets2
import heroBg1 from '../assets/assets2/1774855672518.jpg'
import heroBg2 from '../assets/assets2/1774855672572.jpg'
import heroBg3 from '../assets/assets2/1774855672617.jpg'
import heroBg4 from '../assets/assets2/1774855673601.jpg'

// Slide data configuration with 4 professional slides
const slidesData = [
  {
    id: 1,
    tag: 'TRUSTED FINANCIAL PARTNER',
    heading: 'Building Your',
    highlightText: 'Financial Future',
    subtitle: 'Experience exceptional banking with personalized service, competitive rates, and innovative solutions designed to help you achieve your financial goals.',
    bgImage: heroBg1,
    theme: {
      gradient: 'from-slate-900/85 via-slate-900/85 to-slate-900/85',
      textGradient: 'from-white via-white to-white',
      accent: 'slate',
    }
  },
  {
    id: 2,
    tag: 'INNOVATIVE SOLUTIONS',
    heading: 'Empowering Your',
    highlightText: 'Digital Banking',
    subtitle: 'Step into the future of finance with our cutting-edge digital platform. From mobile banking to AI-powered insights for smarter wealth management.',
    bgImage: heroBg2,
    theme: {
      gradient: 'from-slate-900/85 via-slate-900/85 to-slate-900/85',
      textGradient: 'from-white via-white to-white',
      accent: 'slate',
    }
  },
  {
    id: 3,
    tag: 'COMMUNITY FIRST',
    heading: 'Together We',
    highlightText: 'Grow Stronger',
    subtitle: 'At MMOCCUL, we believe in the power of community. Your success is our success. Join thousands of members on their financial journey.',
    bgImage: heroBg3,
    theme: {
      gradient: 'from-slate-900/85 via-slate-900/85 to-slate-900/85',
      textGradient: 'from-white via-white to-white',
      accent: 'slate',
    }
  },
  {
    id: 4,
    tag: 'SECURE & RELIABLE',
    heading: 'Banking You',
    highlightText: 'Can Trust',
    subtitle: 'Your security is our priority. With advanced encryption, fraud protection, and regulatory compliance, your assets are always safe with us.',
    bgImage: heroBg4,
    theme: {
      gradient: 'from-slate-900/85 via-slate-900/85 to-slate-900/85',
      textGradient: 'from-white via-white to-white',
      accent: 'slate',
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
    <div id='hero' className='w-full h-auto min-h-[75vh] relative overflow-hidden pt-[calc(80px+0.5rem)] pb-8 overflow-x-hidden sm:pt-[calc(80px+2rem)]'>
      <div className='fixed top-0 left-0 w-full h-20 z-40 pointer-events-none'></div>
       {/* Background Images with Slide Transition */}
       <div className='absolute inset-0 z-0 overflow-hidden'>
         {slidesData.map((slide, index) => {
           const isActive = index === currentSlide
           const isNext = index === (currentSlide + 1) % slidesData.length
           const isPrev = index === (currentSlide - 1 + slidesData.length) % slidesData.length

           return (
             <div
               key={slide.id}
               className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                 isActive
                   ? 'opacity-100 translate-x-0 scale-100'
                   : direction === 'right' && isNext
                     ? 'opacity-0 -translate-x-full scale-105'
                     : direction === 'left' && isPrev
                       ? 'opacity-0 translate-x-full scale-105'
                       : 'opacity-0 scale-100'
               }`}
             >
               {/* Background Image with Ken Burns Effect */}
               <div
                 className='absolute inset-0 bg-cover bg-center bg-no-repeat'
                 style={{
                   backgroundImage: `url(${slide.bgImage})`,
                   transform: isActive ? 'scale(1)' : 'scale(1.1)',
                   transition: 'transform 15s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                 }}
               />
               {/* Enhanced Gradient Overlay */}
               <div className={`absolute inset-0 bg-gradient-to-br ${slide.theme.gradient}`} />
               {/* Subtle texture overlay */}
               <div className='absolute inset-0 bg-[url("data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E")] opacity-30' />
             </div>
           )
         })}
       </div>

       {/* Main Content */}
       <div className='relative z-20 min-h-[calc(75vh-80px)] flex items-center justify-center px-4 sm:px-6 lg:px-8'>
         <div className='text-center max-w-5xl mx-auto w-full'>
           {/* Category Tag with AOS */}
           <div data-aos="fade-up" data-aos-delay="100">
             <span className='inline-block px-4 py-1.5 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md border border-white/30 rounded-full text-white text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase mb-5 sm:mb-6 shadow-lg hover:shadow-themegreen/20 transition-all duration-300'>
               {currentSlideData.tag}
             </span>
           </div>

          {/* Main Heading with Enhanced Typography */}
          <h1
            key={`heading-${currentSlide}`}
            data-aos="fade-up"
            data-aos-delay="200"
            className='text-white lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-bold font-poppins leading-tight mb-5 tracking-tight drop-shadow-2xl'
          >
            <span className='block text-white font-bold mb-2 lg:mb-3'>
              {currentSlideData.heading}
            </span>
            <span className={`block bg-gradient-to-r ${currentSlideData.theme.textGradient} bg-clip-text text-transparent font-black lg:text-7xl md:text-6xl sm:text-5xl text-4xl drop-shadow-2xl`}>
              {currentSlideData.highlightText}
            </span>
          </h1>

          {/* Animated Decorative Line */}
          <div
            key={`line-${currentSlide}`}
            data-aos="fade-up"
            data-aos-delay="250"
            className='w-16 h-1 bg-gradient-to-r from-transparent via-white/60 to-transparent mx-auto mb-5 sm:mb-6 rounded-full animate-pulse'
          />

           {/* Subtitle with Enhanced Readability */}
          <p
            key={`subtitle-${currentSlide}`}
            data-aos="fade-up"
            data-aos-delay="300"
            className='text-white/85 text-sm sm:text-base md:text-lg font-normal leading-relaxed mb-8 sm:mb-10 max-w-2xl mx-auto px-4 tracking-wide drop-shadow-lg'
          >
            {currentSlideData.subtitle}
          </p>

           {/* CTA Buttons */}
          <div
            key={`button-${currentSlide}`}
            data-aos="fade-up"
            data-aos-delay="400"
            className='flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10'
          >
            <RouterLink
              to="/about"
              className='bg-gradient-to-r from-white to-gray-100 text-gray-900 py-3 px-8 sm:py-4 sm:px-10 font-semibold text-sm sm:text-base rounded-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 transform text-center inline-block border border-white/50 hover:border-white/70 w-full sm:w-auto'
            >
              Learn More
            </RouterLink>
            <RouterLink
              to="/services"
              className='bg-transparent border-2 border-white/70 text-white py-3 px-8 sm:py-4 sm:px-10 font-semibold text-sm sm:text-base rounded-xl transition-all duration-300 hover:bg-white hover:text-gray-900 hover:shadow-2xl w-full sm:w-auto'
            >
              Our Services
            </RouterLink>
          </div>
        </div>
      </div>

      {/* Enhanced Slide Indicators */}
      <div className='absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2 sm:gap-3 items-center'>
        {slidesData.map((slide, index) => (
          <div
            key={slide.id}
            className={`relative transition-all duration-500 ease-out ${
              index === currentSlide ? 'w-10 sm:w-12' : 'w-2 sm:w-2.5'
            } h-1.5 rounded-full overflow-hidden group cursor-pointer`}
            onClick={() => {
              setDirection('right')
              setCurrentSlide(index)
            }}
          >
            <div className={`absolute inset-0 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? `bg-gradient-to-r ${slide.theme.textGradient}`
                : 'bg-white/30 group-hover:bg-white/50'
            }`}></div>
            {index === currentSlide && (
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <div
                  className="h-full bg-white/30 rounded-full"
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

           {/* Enhanced Scroll Indicator */}
       <div className='absolute bottom-4 left-1/2 -translate-x-1/2 z-20 animate-bounce'>
         <div className='flex flex-col items-center'>
           <span className='text-white/40 text-xs mb-1 tracking-wider uppercase'>Scroll</span>
           <svg className="w-5 h-5 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
             <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
           </svg>
         </div>
       </div>

       {/* Slide Counter */}
       <div className='absolute bottom-6 right-4 sm:right-8 z-20 hidden sm:block'>
         <div className='text-white/40 text-sm font-poppins'>
           <span className='text-white text-lg font-bold'>{String(currentSlide + 1).padStart(2, '0')}</span>
           <span className='mx-1'>/</span>
           <span>{String(slidesData.length).padStart(2, '0')}</span>
         </div>
       </div>
    </div>
  )
}