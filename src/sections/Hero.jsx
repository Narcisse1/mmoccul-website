import React, { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Link as RouterLink } from 'react-router-dom'
import {
  Wallet,
  Headphones,
  Smartphone,
  Users,
  Send,
  CreditCard,
  Landmark,
  Receipt,
} from 'lucide-react'

// Background images
import heroBg1 from '../assets/assets3/savings.png'
import heroBg2 from '../assets/assets3/customer_service.png'
import heroBg3 from '../assets/assets3/mobile_banking.png'
import heroBg4 from '../assets/assets3/community.png'

const slidesData = [
  {
    id: 1,
    tag: 'WELCOME TO MMOCCUL',
    title: 'Save Today,',
    highlight: 'Secure Tomorrow',
    description:
      'Build a stronger future with flexible savings plans, trusted financial guidance, and secure banking solutions tailored for your goals.',
    buttonText: 'Learn More',
    bgImage: heroBg1,
    icon: Wallet,
  },
  {
    id: 2,
    tag: 'WELCOME TO MMOCCUL',
    title: 'Real People,',
    highlight: 'Real Support',
    description:
      'Our dedicated customer care team is always ready to help you with fast, friendly, and professional banking assistance.',
    buttonText: 'Learn More',
    bgImage: heroBg2,
    icon: Headphones,
  },
  {
    id: 3,
    tag: 'WELCOME TO MMOCCUL',
    title: 'Bank on the Go,',
    highlight: 'Anytime, Anywhere',
    description:
      'Enjoy secure mobile banking with instant transfers, account access, bill payments, and financial control right from your phone.',
    buttonText: 'Learn More',
    bgImage: heroBg3,
    icon: Smartphone,
  },
  {
    id: 4,
    tag: 'WELCOME TO MMOCCUL',
    title: 'Stronger Together,',
    highlight: 'Better Community',
    description:
      'We believe in empowering communities through financial inclusion, shared growth, and opportunities that improve lives.',
    buttonText: 'Learn More',
    bgImage: heroBg4,
    icon: Users,
  },
]

const services = [
  {
    title: 'Money Transfer',
    icon: Send,
  },
  {
    title: 'Withdrawal',
    icon: CreditCard,
    active: true,
  },
  {
    title: 'Bank Deposit',
    icon: Landmark,
  },
  {
    title: 'Online Payment',
    icon: Receipt,
  },
]

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slidesData.length)
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
               <div
                 key={index}
                 className={`rounded-md shadow-lg px-2 sm:px-3 py-4 sm:py-5 text-center transition-all duration-300 hover:-translate-y-2 cursor-pointer ${
                   service.active
                     ? 'bg-[#2436ff] text-white'
                     : 'bg-white text-[#0e1630]'
                 }`}
               >
                 <div className='flex justify-center mb-2 sm:mb-3'>
                   <div
                     className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center ${
                       service.active
                         ? 'bg-white/10 border border-white/20'
                         : 'bg-[#f4f6ff]'
                     }`}
                   >
                     <Icon size={16} />
                   </div>
                 </div>

                 <h3 className='font-semibold text-xs sm:text-sm'>
                   {service.title}
                 </h3>
              </div>
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