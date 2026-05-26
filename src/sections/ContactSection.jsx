import React from 'react'
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaArrowRight,
} from 'react-icons/fa'
import { useLanguage } from '../context/LanguageContext'

// Import your image
import contactImg from '../assets/assets3/contact.png'

export const ContactSection = () => {
  const { t } = useLanguage()

  return (
    <section className='w-full bg-[#f5f7fb] px-4 sm:px-6 lg:px-8 overflow-hidden'>
      <div className='max-w-7xl mx-auto'>
        <div className='relative bg-white rounded-[24px] overflow-hidden shadow-[0_12px_48px_rgba(15,23,42,0.06)] border border-slate-200'>
          {/* Background Image */}
          <div className='absolute inset-0 bg-center bg-cover'
            style={{ backgroundImage: `url(${contactImg})` }}
          />
          {/* Darker overlay — raises contrast on small screens where the background image is most visible */}
          <div className='absolute inset-0 bg-black/25 sm:bg-black/20 lg:bg-black/15' />

          <div className='grid lg:grid-cols-2 items-center gap-4 sm:gap-5 md:gap-6 px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 relative z-10'>
            {/* LEFT CONTENT */}
            <div className='lg:w-2/3'>
              {/* Small Tag */}
              <div className='inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-3 py-1.5 mb-2.5 sm:mb-3'>
                <span className='w-2 h-2 bg-[#2436ff] rounded-full flex-shrink-0' />
                <span className='text-[#2436ff] text-xs uppercase tracking-[0.25em] font-semibold'>
                  {t('contactMmoccul')}
                </span>
              </div>

              {/* Heading — clamp gives fluid sizing from 375 px up to 1440 px / XL screens */}
              <h2 className='text-white font-bold leading-[1.15] mb-3 sm:mb-4 drop-shadow-md
                             text-[clamp(1.35rem,4.2vw,2.5rem)]'>
                {t('alwaysHelp')}
              </h2>

              {/* Text */}
              <p className='text-white font-medium leading-relaxed mb-4 sm:mb-6 drop-shadow-sm
                            text-[clamp(0.9rem,2.4vw,1.125rem)]'>
                {t('contactText')}
              </p>

              {/* Contact Buttons */}
              <div className='flex flex-col gap-2 sm:gap-2.5 md:gap-3 max-w-full sm:max-w-lg w-full'>
                {/* CALL */}
                <a
                  href='tel:+237670020630'
                  className='group flex items-center justify-between bg-[#2436ff] hover:bg-[#1d2ee6]
                             text-white rounded-lg px-4 py-[0.625rem] sm:px-[18px] sm:py-3
                             transition-all duration-300 shadow-lg
                             hover:shadow-[0_5px_14px_rgba(36,54,255,0.18)]
                             active:scale-[0.98] active:transition-transform active:duration-100'
                >
                  <div className='flex items-center gap-2 sm:gap-3'>
                    <div className='w-9 h-9 rounded bg-white/20 flex items-center justify-center flex-shrink-0
                                   sm:w-9.5 sm:h-9.5'>
                      <FaPhoneAlt className='text-white text-sm sm:text-base' />
                    </div>
                    <p className='text-[0.7rem] sm:text-xs uppercase tracking-[0.2em] text-blue-100 mb-0 whitespace-nowrap'>
                      {t('callUs')}
                    </p>
                  </div>
                  <FaArrowRight className='group-hover:translate-x-0.5 transition-transform duration-300
                                          text-white text-xs sm:text-sm flex-shrink-0' />
                </a>

                {/* WHATSAPP */}
                <a
                  href='https://wa.me/237680485488'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='group flex items-center justify-between bg-[#0f172a] hover:bg-[#111c33]
                             text-white rounded-lg px-4 py-[0.625rem] sm:px-[18px] sm:py-3
                             transition-all duration-300 shadow-lg
                             hover:shadow-[0_5px_14px_rgba(15,23,42,0.12)]
                             active:scale-[0.98] active:transition-transform active:duration-100'
                >
                  <div className='flex items-center gap-2 sm:gap-3'>
                    <div className='w-9 h-9 rounded bg-white/15 flex items-center justify-center flex-shrink-0
                                   sm:w-9.5 sm:h-9.5'>
                      <FaWhatsapp className='text-white text-sm sm:text-base' />
                    </div>
                    <p className='text-[0.7rem] sm:text-xs uppercase tracking-[0.2em] text-gray-400 mb-0 whitespace-nowrap'>
                      {t('whatsApp')}
                    </p>
                  </div>
                  <FaArrowRight className='group-hover:translate-x-0.5 transition-transform duration-300
                                          text-white text-xs sm:text-sm flex-shrink-0' />
                </a>

                {/* EMAIL */}
                <a
                  href='mailto:info@mmoccul.com'
                  className='group flex items-center justify-between bg-slate-100 hover:bg-slate-200
                             text-slate-900 rounded-lg px-4 py-[0.625rem] sm:px-[18px] sm:py-3
                             transition-all duration-300 border border-slate-200
                             active:scale-[0.98] active:transition-transform active:duration-100'
                >
                  <div className='flex items-center gap-2 sm:gap-3'>
                    <div className='w-9 h-9 rounded bg-white flex items-center justify-center shadow-sm flex-shrink-0
                                   sm:w-9.5 sm:h-9.5'>
                      <FaEnvelope className='text-[#2436ff] text-sm sm:text-base' />
                    </div>
                    <p className='text-[0.7rem] sm:text-xs uppercase tracking-[0.2em] text-slate-500 mb-0 whitespace-nowrap'>
                      {t('emailAddress')}
                    </p>
                  </div>
                  <FaArrowRight className='group-hover:translate-x-0.5 transition-transform duration-300
                                          text-[#2436ff] text-xs sm:text-sm flex-shrink-0' />
                </a>
              </div>
            </div>

            {/* RIGHT SIDE — hidden on mobile and tablet, visible on lg+ */}
            <div className='hidden lg:block lg:w-1/3 relative'>
              <div className='absolute inset-0 bg-blue-50/12' />
              <div className='absolute top-[-20px] right-[-20px] w-[100px] h-[100px] bg-blue-100/8
                              blur-[40px] rounded-full' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
