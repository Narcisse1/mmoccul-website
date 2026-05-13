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

export const Footer = () => {
  return (
    <footer className='w-full bg-[#081120] relative overflow-hidden'>

      {/* Background Effects */}
      <div className='absolute top-0 left-0 w-[400px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full'></div>
      <div className='absolute bottom-0 right-0 w-[350px] h-[350px] bg-blue-500/10 blur-[120px] rounded-full'></div>

      <div className='relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16'>

        {/* Top Grid */}
        <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-12 border-b border-white/10 pb-14'>

          {/* Brand */}
          <div className='space-y-6'>

            <div className='bg-white inline-flex p-4 rounded-2xl shadow-2xl'>
              <img
                src={logoImage}
                alt='MMOCCUL Logo'
                className='h-14 w-auto'
              />
            </div>

            <div className='space-y-4'>

              <div className='flex items-start gap-4 text-gray-300 group'>
                <div className='w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#2436ff] transition-all duration-300'>
                  <FaPhoneAlt className='text-sm' />
                </div>

                <div>
                  <p className='text-sm text-gray-500 uppercase tracking-widest mb-1'>
                    Call Us
                  </p>

                  <a
                    href='tel:+237670020630'
                    className='hover:text-white transition-colors'
                  >
                    +237 670 020 630
                  </a>
                </div>
              </div>

              <div className='flex items-start gap-4 text-gray-300 group'>
                <div className='w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#2436ff] transition-all duration-300'>
                  <FaWhatsapp className='text-sm' />
                </div>

                <div>
                  <p className='text-sm text-gray-500 uppercase tracking-widest mb-1'>
                    WhatsApp
                  </p>

                  <a
                    href='https://wa.me/237680485488'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='hover:text-white transition-colors'
                  >
                    +237 680 485 488
                  </a>
                </div>
              </div>

              <div className='flex items-start gap-4 text-gray-300 group'>
                <div className='w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#2436ff] transition-all duration-300'>
                  <FaEnvelope className='text-sm' />
                </div>

                <div>
                  <p className='text-sm text-gray-500 uppercase tracking-widest mb-1'>
                    Email
                  </p>

                  <a
                    href='mailto:info@mmoccul.com'
                    className='hover:text-white transition-colors'
                  >
                    info@mmoccul.com
                  </a>
                </div>
              </div>

              <div className='flex items-start gap-4 text-gray-300'>
                <div className='w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center'>
                  <FaMapMarkerAlt className='text-sm' />
                </div>

                <div>
                  <p className='text-sm text-gray-500 uppercase tracking-widest mb-1'>
                    Location
                  </p>

                  <p>Yaoundé, Cameroon</p>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className='flex items-center gap-3 pt-2'>

              <a
                href='#'
                className='w-11 h-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-gray-300 hover:bg-[#2436ff] hover:text-white hover:border-[#2436ff] transition-all duration-300'
              >
                <FaFacebookF />
              </a>

              <a
                href='#'
                className='w-11 h-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-gray-300 hover:bg-[#2436ff] hover:text-white hover:border-[#2436ff] transition-all duration-300'
              >
                <FaLinkedinIn />
              </a>

              <a
                href='#'
                className='w-11 h-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-gray-300 hover:bg-[#2436ff] hover:text-white hover:border-[#2436ff] transition-all duration-300'
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className='text-white text-xl font-semibold mb-8'>
              Quick Links
            </h2>

            <ul className='space-y-5'>

              <li>
                <Link
                  to='/'
                  className='text-gray-400 hover:text-white transition-all duration-300 flex items-center gap-3 group'
                >
                  <FaArrowRight className='text-[11px] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#2436ff]' />
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to='/about'
                  className='text-gray-400 hover:text-white transition-all duration-300 flex items-center gap-3 group'
                >
                  <FaArrowRight className='text-[11px] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#2436ff]' />
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to='/services'
                  className='text-gray-400 hover:text-white transition-all duration-300 flex items-center gap-3 group'
                >
                  <FaArrowRight className='text-[11px] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#2436ff]' />
                  Services
                </Link>
              </li>

              <li>
                <Link
                  to='/latest-news'
                  className='text-gray-400 hover:text-white transition-all duration-300 flex items-center gap-3 group'
                >
                  <FaArrowRight className='text-[11px] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#2436ff]' />
                  News & Updates
                </Link>
              </li>

              <li>
                <Link
                  to='/contact'
                  className='text-gray-400 hover:text-white transition-all duration-300 flex items-center gap-3 group'
                >
                  <FaArrowRight className='text-[11px] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#2436ff]' />
                  Contact
                </Link>
              </li>

            </ul>
          </div>

          {/* Services */}
          <div>
            <h2 className='text-white text-xl font-semibold mb-8'>
              Banking Services
            </h2>

            <ul className='space-y-5'>

              {[
                'Personal Loans',
                'Business Financing',
                'Savings Accounts',
                'Mobile Banking',
                'Money Transfers',
                'Salary Processing',
              ].map((service, index) => (
                <li
                  key={index}
                  className='text-gray-400 hover:text-white transition-all duration-300 flex items-center gap-3 group cursor-pointer'
                >
                  <FaCheckCircle className='text-[#2436ff] text-sm' />
                  {service}
                </li>
              ))}

            </ul>
          </div>

          {/* Newsletter */}
          <div>

            <h2 className='text-white text-xl font-semibold mb-6'>
              Stay Updated
            </h2>

            <p className='text-gray-400 leading-relaxed mb-6'>
              Receive financial insights, service updates, and important announcements directly in your inbox.
            </p>

            <div className='space-y-4'>

              <input
                type='email'
                placeholder='Enter your email address'
                className='w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#2436ff] transition-all duration-300'
              />

              <button className='w-full bg-[#2436ff] hover:bg-[#1b2be0] text-white py-4 rounded-xl font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center gap-2'>
                Subscribe
                <FaArrowRight className='text-sm' />
              </button>
            </div>

            {/* Trust Tags */}
            <div className='flex flex-wrap gap-3 mt-6'>

              <div className='bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm text-gray-300'>
                Secure Banking
              </div>

              <div className='bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm text-gray-300'>
                Trusted Institution
              </div>

              <div className='bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm text-gray-300'>
                Licensed & Reliable
              </div>

            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className='flex lg:flex-row flex-col items-center justify-between gap-6 pt-8'>

          <p className='text-gray-500 text-sm text-center lg:text-left'>
            © 2026 MMOCCUL. All rights reserved.
          </p>

          <div className='flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500'>

            <button className='hover:text-white transition-colors duration-300'>
              Terms of Use
            </button>

            <button className='hover:text-white transition-colors duration-300'>
              Privacy Policy
            </button>

            <button className='hover:text-white transition-colors duration-300'>
              Cookie Policy
            </button>

          </div>
        </div>
      </div>
    </footer>
  )
}