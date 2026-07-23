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
       className='relative w-full overflow-hidden bg-[#f5f5f5] pb-2 sm:pb-4 lg:pb-6'
     >
      {/* Slides */}
      <div className='relative h-[300px] sm:h-[400px] lg:h-[500px]'>
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

              {/* Overlay */}
              <div className='absolute inset-0 bg-black/25'></div>

               {/* Content */}
               <div className='relative z-20 flex items-center h-full px-5 sm:px-8 lg:px-20'>
                 <div className='max-w-xl text-left'>
                   {/* Tag */}
                   <div
                     data-aos='fade-up'
                     className='flex items-center gap-2 mb-4'
                   >
                     <div className='w-4 h-[2px] bg-[#2436ff]'></div>
                     <span className='text-[#2436ff] uppercase tracking-wide font-semibold text-xs'>
                       {slide.tag}
                     </span>
                   </div>

                   {/* Heading */}
                   <h1
                     data-aos='fade-up'
                     data-aos-delay='100'
                     className='text-white lg:text-[48px] md:text-[42px] sm:text-[36px] text-[28px] leading-tight font-extrabold mb-4'
                   >
                     <span className='block text-[#0e1630]'>
                       {slide.title}
                     </span>
                     <span className='block text-[#2436ff]'>
                       {slide.highlight}
                     </span>
                   </h1>

                   {/* Description */}
                   <p
                     data-aos='fade-up'
                     data-aos-delay='200'
                     className='text-white text-sm sm:text-base leading-relaxed max-w-lg mb-6 font-medium'
                   >
                    {slide.description}
                  </p>

                  {/* Button */}
                  <div data-aos='fade-up' data-aos-delay='300'>
                    <RouterLink
                      to='/about'
                      className='inline-flex items-center gap-2 bg-[#2436ff] hover:bg-[#1727d8] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 shadow-xl'
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
      <div className='relative z-30 max-w-6xl mx-auto px-5 mt-10 sm:-mt-20 lg:-mt-16'>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6'>
{services.map((service, index) => {
            const Icon = service.icon

            return (
               <RouterLink
                  key={index}
                  to={service.link}
                  className='group rounded-md shadow-lg px-2 sm:px-3 py-4 sm:py-5 text-center transition-all duration-300 hover:-translate-y-2 hover:bg-[#2436ff] hover:text-white cursor-pointer bg-white text-[#0e1630]'
                >
                  <div className='flex justify-center mb-2 sm:mb-3'>
                    <div className='w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center bg-[#f4f6ff] group-hover:bg-white/10 transition-colors duration-300'>
                      <Icon size={16} />
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
      <div className='flex justify-center gap-3 py-10'>
        {slidesData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              currentSlide === index
                ? 'w-10 h-3 bg-[#2436ff]'
                : 'w-3 h-3 bg-gray-300'
            }`}
          ></button>
        ))}
      </div>
    </section>
  )
}