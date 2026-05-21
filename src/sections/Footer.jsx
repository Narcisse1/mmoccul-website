import React from 'react'
import { Link } from 'react-router-dom'
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
  FaArrowRight,
  FaCheckCircle,
} from 'react-icons/fa'
import logoImage from '../assets/Mmoccul__logo.png'
import footerBg from '../assets/assets3/footer_background.png'
import { useLanguage } from '../context/LanguageContext'

export const Footer = () => {
  const { t } = useLanguage()
  
  return (
    <footer className='relative w-full overflow-hidden bg-[#0b0b0b]'>

      {/* CURVED TOP */}
      <div className='absolute top-0 left-0 w-full overflow-hidden leading-none z-20'>
        <svg
          className='relative block w-full h-[120px]'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1440 320'
          preserveAspectRatio='none'
        >
          <path
            fill='#ffffff'
            fillOpacity='1'
            d='M0,96L80,112C160,128,320,160,480,170.7C640,181,800,171,960,149.3C1120,128,1280,96,1360,80L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z'
          ></path>
        </svg>
      </div>

      {/* BACKGROUND IMAGE */}
      <div
        className='absolute inset-0 bg-cover bg-center bg-no-repeat scale-105'
        style={{
          backgroundImage: `url(${footerBg})`,
        }}
      />

      {/* OVERLAYS */}
      <div className='absolute inset-0 bg-[#0b0b0b]/60'></div>

      <div className='absolute inset-0 bg-gradient-to-br from-[#1b120c]/50 via-[#0f172a]/60 to-[#090909]/60'></div>

      {/* SOFT LIGHT EFFECTS */}
      <div className='absolute top-0 left-0 w-[500px] h-[500px] bg-amber-700/10 blur-[150px] rounded-full'></div>

      <div className='absolute bottom-0 right-0 w-[450px] h-[450px] bg-orange-900/10 blur-[150px] rounded-full'></div>

      {/* CONTENT */}
      <div className='relative z-30 max-w-7xl mx-auto px-6 lg:px-8 pt-36 pb-10'>

        {/* NEWSLETTER SECTION */}
        <div className='max-w-3xl mx-auto text-center mb-16'>

          <p className='text-gray-300 text-sm tracking-[0.25em] uppercase mb-5'>
            {t('stayConnected')}
          </p>

          <h2 className='text-white text-3xl lg:text-5xl font-semibold leading-tight mb-5' style={{fontFamily: "'Poppins', sans-serif"}}>
            {t('secureLegacy')}
          </h2>

          <p className='text-gray-400 leading-[1.9] text-[15px] max-w-2xl mx-auto mb-8'>
            {t('newsletterText')}
          </p>

          {/* INPUT */}
          <div className='flex md:flex-row flex-col gap-3 items-center justify-center'>

            <input
              type='email'
              placeholder={t('enterEmail')}
              className='md:w-[420px] w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-6 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#4f63ff] transition-all duration-300 text-sm'
            />

            <button className='bg-[#2436ff] hover:bg-[#1b2be0] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-2xl flex items-center justify-center gap-2 text-sm'>
              {t('subscribe')}
              <FaArrowRight className='text-xs' />
            </button>

          </div>
        </div>

        {/* MAIN GRID */}
        <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-12 border-t border-white/10 pt-14 pb-12'>

          {/* BRAND */}
          <div className='space-y-5'>

            <div className='bg-white/95 backdrop-blur-md inline-flex p-3 rounded-2xl shadow-2xl'>
              <img
                src={logoImage}
                alt='MMOCCUL Logo'
                className='h-10 w-auto'
              />
            </div>

            <p className='text-gray-300 leading-[1.9] text-[14px]'>
              Empowering individuals, businesses, and communities with
              secure financial solutions tailored for growth, stability,
              and long-term success.
            </p>

            {/* SOCIALS */}
            <div className='flex items-center gap-3 pt-2'>

              {[
                <FaFacebookF />,
                <FaLinkedinIn />,
                <FaInstagram />,
              ].map((icon, index) => (
                <a
                  key={index}
                  href='#'
                  className='w-10 h-10 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center text-gray-300 hover:bg-[#2436ff] hover:text-white hover:border-[#2436ff] transition-all duration-300'
                >
                  {icon}
                </a>
              ))}

            </div>
          </div>

          {/* QUICK LINKS */}
          <div>

            <h2 className='text-white text-lg font-semibold mb-6'>
              {t('quickLinks')}
            </h2>

            <ul className='space-y-4'>

              {[
                ['/', t('home')],
                ['/about', t('aboutUs')],
                ['/services', t('services')],
                ['/latest-news', t('newsUpdates')],
                ['/contact', t('contact')],
              ].map(([path, label], index) => (
                <li key={index}>

                  <Link
                    to={path}
                    className='text-gray-400 hover:text-white transition-all duration-300 flex items-center gap-3 group text-sm'
                  >
                    <FaArrowRight className='text-[10px] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#4f63ff]' />

                    {label}
                  </Link>

                </li>
              ))}

            </ul>
          </div>

          {/* SERVICES */}
          <div>

            <h2 className='text-white text-lg font-semibold mb-6'>
              {t('bankingServices')}
            </h2>

            <ul className='space-y-4'>

              {[
                t('personalLoans'),
                t('businessFinancing'),
                t('savingsAccounts'),
                t('mobileBankingFooter'),
                t('moneyTransfers'),
                t('salaryProcessing'),
              ].map((service, index) => (
                <li
                  key={index}
                  className='text-gray-400 hover:text-white transition-all duration-300 flex items-center gap-3 group cursor-pointer text-sm'
                >
                  <FaCheckCircle className='text-[#4f63ff] text-xs' />

                  {service}
                </li>
              ))}

            </ul>
          </div>

          {/* CONTACT */}
          <div>

            <h2 className='text-white text-lg font-semibold mb-6'>
              {t('contactInfo')}
            </h2>

            <div className='space-y-5'>

              <div className='flex items-start gap-3 text-gray-300 group'>

                <div className='w-10 h-10 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center group-hover:bg-[#2436ff] transition-all duration-300'>
                  <FaPhoneAlt className='text-xs' />
                </div>

                <div>
                  <p className='text-[10px] text-gray-500 uppercase tracking-[0.25em] mb-1'>
                    {t('callUs')}
                  </p>

                  <a
                    href='tel:+237670020630'
                    className='hover:text-white transition-colors text-sm'
                  >
                    +237 670 020 630
                  </a>
                </div>
              </div>

              <div className='flex items-start gap-3 text-gray-300 group'>

                <div className='w-10 h-10 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center group-hover:bg-[#25D366] transition-all duration-300'>
                  <FaWhatsapp className='text-xs' />
                </div>

                <div>
                  <p className='text-[10px] text-gray-500 uppercase tracking-[0.25em] mb-1'>
                    {t('whatsApp')}
                  </p>

                  <a
                    href='https://wa.me/237680485488'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='hover:text-white transition-colors text-sm'
                  >
                    +237 680 485 488
                  </a>
                </div>
              </div>

              <div className='flex items-start gap-3 text-gray-300 group'>

                <div className='w-10 h-10 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center group-hover:bg-[#2436ff] transition-all duration-300'>
                  <FaEnvelope className='text-xs' />
                </div>

                <div>
                  <p className='text-[10px] text-gray-500 uppercase tracking-[0.25em] mb-1'>
                    {t('email')}
                  </p>

                  <a
                    href='mailto:info@mmoccul.com'
                    className='hover:text-white transition-colors text-sm'
                  >
                    info@mmoccul.com
                  </a>
                </div>
              </div>

              <div className='flex items-start gap-3 text-gray-300'>

                <div className='w-10 h-10 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center'>
                  <FaMapMarkerAlt className='text-xs' />
                </div>

                <div>
                  <p className='text-[10px] text-gray-500 uppercase tracking-[0.25em] mb-1'>
                    {t('location')}
                  </p>

                  <p className='text-sm'>{t('yaounde')}</p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className='flex lg:flex-row flex-col items-center justify-between gap-4 border-t border-white/10 pt-6'>

          <p className='text-gray-500 text-xs text-center lg:text-left'>
            {t('rightsReserved')}
          </p>

          <div className='flex flex-wrap justify-center items-center gap-6 text-xs text-gray-500'>

            <button className='hover:text-white transition-colors duration-300'>
              {t('termsOfUse')}
            </button>

            <button className='hover:text-white transition-colors duration-300'>
              {t('privacyPolicy')}
            </button>

            <button className='hover:text-white transition-colors duration-300'>
              {t('cookiePolicy')}
            </button>

          </div>
        </div>
      </div>
    </footer>
  )
}