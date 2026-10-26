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

// Background images
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
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 4)
    }, 6000)

    return () => clearInterval(interval)
  }, [])

   return (
     <section
       id='hero'
       className='relative w-full overflow-hidden bg-[#F5F7FA] pb-8 sm:pb-10 lg:pb-12'
     >
      {/* Slides */}
      <div className='relative h-[390px] sm:h-[470px] lg:h-[560px]'>
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
              {/* Background Image */}
              <div
                className='absolute inset-0 bg-cover bg-center'
                style={{
                  backgroundImage: `url(${slide.bgImage})`,
                }}
              />

              {/* Brand-tinted overlay keeps the image readable without a dark section. */}
              <div className='absolute inset-0 bg-gradient-to-r from-[#002E8A]/90 via-[#002E8A]/70 to-[#002E8A]/25'></div>
              <div className='absolute inset-0 bg-gradient-to-t from-[#002E8A]/45 via-transparent to-[#002E8A]/10'></div>

               {/* Content */}
               <div className='relative z-20 flex items-center h-full px-5 sm:px-8 lg:px-20'>
                 <div className='max-w-xl text-left'>
                   {/* Tag */}
                   <div
                     data-aos='fade-up'
                     className='flex items-center gap-2 mb-4'
                   >
                     <div className='w-8 h-[2px] bg-[#D4A735]'></div>
                     <span className='text-[#F1D98E] uppercase tracking-[0.2em] font-semibold text-xs'>
                       {slide.tag}
                     </span>
                   </div>

                   {/* Heading */}
                   <h1
                     data-aos='fade-up'
                     data-aos-delay='100'
                     className='text-white lg:text-[58px] md:text-[48px] sm:text-[40px] text-[32px] leading-[1.08] font-bold mb-5 tracking-[-0.035em] max-w-2xl'
                   >
                     <span className='block text-white'>
                       {slide.title}
                     </span>
                     <span className='block text-[#E8C66B]'>
                       {slide.highlight}
                     </span>
                   </h1>

                   {/* Description */}
                   <p
                     data-aos='fade-up'
                     data-aos-delay='200'
                     className='text-white/90 text-sm sm:text-base leading-7 max-w-lg mb-8 font-normal'
                   >
                    {slide.description}
                  </p>

                  {/* Button */}
                  <div data-aos='fade-up' data-aos-delay='300'>
                    <RouterLink
                      to='/about'
                      className='inline-flex items-center gap-2 bg-[#D4A735] hover:bg-[#E2BC55] text-[#17243B] px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 hover:-translate-y-0.5 shadow-[0_12px_30px_rgba(0,0,0,0.18)]'
                    >
                      <SlideIcon size={18} />
                      {slide.buttonText}
                    </RouterLink>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Floating Service Cards */}
      <div className='relative z-30 max-w-6xl mx-auto px-5 mt-7 sm:-mt-14 lg:-mt-16'>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-5'>
{services.map((service, index) => {
            const Icon = service.icon

            return (
               <RouterLink
                  key={index}
                  to={service.link}
                  className='group rounded-2xl border border-slate-200/80 shadow-[0_12px_38px_rgba(22,45,82,0.08)] px-3 sm:px-4 py-5 sm:py-6 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-[#D4A735] hover:shadow-[0_20px_42px_rgba(0,46,138,0.14)] cursor-pointer bg-white text-[#1D2939]'
                >
                  <div className='flex justify-center mb-2 sm:mb-3'>
                    <div className='w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center bg-[#F5F7FA] text-[#002E8A] group-hover:bg-[#FFF8E8] group-hover:text-[#002E8A] transition-colors duration-300'>
                      <Icon size={19} />
                    </div>
                  </div>

                  <h3 className='font-semibold text-xs sm:text-sm'>
                    {service.title}
                  </h3>
               </RouterLink>
             );
           })}
        </div>
        
      </div>

      {/* Slide Indicators */}
      <div className='flex justify-center gap-3 pt-8 sm:pt-10'>
        {slidesData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              currentSlide === index
                ? 'w-9 h-2.5 bg-[#002E8A]'
                : 'w-2.5 h-2.5 bg-slate-300'
            }`}
          ></button>
        ))}
      </div>
    </section>
  )
}