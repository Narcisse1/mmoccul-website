import React from 'react'
import { Link } from 'react-router-dom'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaWhatsapp, FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import logoImage from '../assets/Mmoccul__logo.png';

export const Footer = () => {
  return (
    <div className='w-full bg-slate-950 h-auto flex flex-col items-start justify-center
    lg:px-[100px] px-[24px] lg:py-[100px] py-[60px] gap-[80px] relative overflow-hidden'>
      
      {/* Subtle Background Accent */}
      <div className='absolute top-0 right-0 w-[500px] h-[500px] bg-themegreen/5 rounded-full blur-[150px]'></div>
      <div className='absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[120px]'></div>

      <div className="w-full h-auto flex lg:flex-row flex-col items-start justify-between gap-[80px] relative z-10">
        
        {/* Company Info Column */}
        <div className="lg:w-[32%] w-full flex flex-col justify-center items-start gap-[30px]">
          {/* Logo with Classic White Background */}
          <div className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm border border-white/20">
            <img src={logoImage} alt="MMOCCUL Logo" className='h-12 w-auto' />
          </div>
          
          <p className='text-gray-400 text-sm leading-relaxed font-poppins'>
            MMOCCUL is a trusted financial cooperative dedicated to helping our members achieve their financial goals. 
            Join thousands of satisfied members across Cameroon.
          </p>
          
          {/* Contact Info */}
          <div className='flex flex-col gap-3 mt-2'>
            <a href="tel:+237670020630" className='flex items-center gap-3 text-gray-400 hover:text-white transition-colors group'>
              <div className='w-9 h-9 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-themegreen/20 transition-colors border border-white/10'>
                <FaPhoneAlt className='text-themegreen text-sm' />
              </div>
              <span className='text-sm group-hover:translate-x-1 transition-transform'>+237 670 020 630</span>
            </a>
            <a href="https://wa.me/237680485488" target="_blank" rel="noopener noreferrer" className='flex items-center gap-3 text-gray-400 hover:text-white transition-colors group'>
              <div className='w-9 h-9 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors border border-white/10'>
                <FaWhatsapp className='text-emerald-400 text-sm' />
              </div>
              <span className='text-sm group-hover:translate-x-1 transition-transform'>+237 680 485 488</span>
            </a>
            <a href="mailto:info@mmoccul.com" className='flex items-center gap-3 text-gray-400 hover:text-white transition-colors group'>
              <div className='w-9 h-9 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-blue-500/20 transition-colors border border-white/10'>
                <FaEnvelope className='text-blue-400 text-sm' />
              </div>
              <span className='text-sm group-hover:translate-x-1 transition-transform'>info@mmoccul.com</span>
            </a>
            <div className='flex items-center gap-3 text-gray-400'>
              <div className='w-9 h-9 bg-white/5 rounded-lg flex items-center justify-center border border-white/10'>
                <FaMapMarkerAlt className='text-gray-500 text-sm' />
              </div>
              <span className='text-sm'>Yaoundé, Cameroon</span>
            </div>
          </div>
          
          {/* Social Icons */}
          <div className="flex justify-start items-center gap-2 mt-2">
            <a href="#" className="w-9 h-9 bg-white/5 hover:bg-themegreen/20 rounded-lg flex items-center justify-center text-gray-400 hover:text-themegreen transition-all duration-300 border border-white/10" aria-label="Facebook">
              <FaFacebookF className='text-sm' />
            </a>
            <a href="#" className="w-9 h-9 bg-white/5 hover:bg-blue-500/20 rounded-lg flex items-center justify-center text-gray-400 hover:text-blue-400 transition-all duration-300 border border-white/10" aria-label="Twitter">
              <FaTwitter className='text-sm' />
            </a>
            <a href="#" className="w-9 h-9 bg-white/5 hover:bg-blue-600/20 rounded-lg flex items-center justify-center text-gray-400 hover:text-blue-500 transition-all duration-300 border border-white/10" aria-label="LinkedIn">
              <FaLinkedinIn className='text-sm' />
            </a>
            <a href="#" className="w-9 h-9 bg-white/5 hover:bg-pink-500/20 rounded-lg flex items-center justify-center text-gray-400 hover:text-pink-400 transition-all duration-300 border border-white/10" aria-label="Instagram">
              <FaInstagram className='text-sm' />
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="lg:w-[18%] w-full flex flex-col justify-center items-start gap-5">
          <h1 className='text-white text-sm font-semibold font-poppins mb-1 uppercase tracking-[0.15em] text-gray-500'>
            Quick Links
          </h1>
          <ul className='flex flex-col justify-center items-start gap-3'>
            <li className='text-gray-500 hover:text-white cursor-pointer text-sm transition-all duration-300 group flex items-center gap-2'>
              <span className='w-1 h-1 bg-themegreen rounded-full opacity-0 group-hover:opacity-100 transition-opacity'></span>
              <Link to="/" className='hover:pl-1 transition-all'>Home</Link>
            </li>
            <li className='text-gray-500 hover:text-white cursor-pointer text-sm transition-all duration-300 group flex items-center gap-2'>
              <span className='w-1 h-1 bg-themegreen rounded-full opacity-0 group-hover:opacity-100 transition-opacity'></span>
              <Link to="/about" className='hover:pl-1 transition-all'>About</Link>
            </li>
            <li className='text-gray-500 hover:text-white cursor-pointer text-sm transition-all duration-300 group flex items-center gap-2'>
              <span className='w-1 h-1 bg-themegreen rounded-full opacity-0 group-hover:opacity-100 transition-opacity'></span>
              <Link to="/services" className='hover:pl-1 transition-all'>Services</Link>
            </li>
            <li className='text-gray-500 hover:text-white cursor-pointer text-sm transition-all duration-300 group flex items-center gap-2'>
              <span className='w-1 h-1 bg-themegreen rounded-full opacity-0 group-hover:opacity-100 transition-opacity'></span>
              <Link to="/latest-news" className='hover:pl-1 transition-all'>Blog</Link>
            </li>
            <li className='text-gray-500 hover:text-white cursor-pointer text-sm transition-all duration-300 group flex items-center gap-2'>
              <span className='w-1 h-1 bg-themegreen rounded-full opacity-0 group-hover:opacity-100 transition-opacity'></span>
              <Link to="/branches" className='hover:pl-1 transition-all'>Branches</Link>
            </li>
            <li className='text-gray-500 hover:text-white cursor-pointer text-sm transition-all duration-300 group flex items-center gap-2'>
              <span className='w-1 h-1 bg-themegreen rounded-full opacity-0 group-hover:opacity-100 transition-opacity'></span>
              <Link to="/contact" className='hover:pl-1 transition-all'>Contact</Link>
            </li>
          </ul>
        </div>

        {/* Services Column */}
        <div className="lg:w-[18%] w-full flex flex-col justify-center items-start gap-5">
          <h1 className='text-white text-sm font-semibold font-poppins mb-1 uppercase tracking-[0.15em] text-gray-500'>
            Our Services
          </h1>
          <ul className='flex flex-col justify-center items-start gap-3'>
            <li className='text-gray-500 hover:text-white cursor-pointer text-sm transition-all duration-300 flex items-center gap-2 group'>
              <span className='w-1 h-1 bg-themegreen/50 rounded-full group-hover:scale-150 transition-transform'></span>
              Personal Loans
            </li>
            <li className='text-gray-500 hover:text-white cursor-pointer text-sm transition-all duration-300 flex items-center gap-2 group'>
              <span className='w-1 h-1 bg-themegreen/50 rounded-full group-hover:scale-150 transition-transform'></span>
              Business Financing
            </li>
            <li className='text-gray-500 hover:text-white cursor-pointer text-sm transition-all duration-300 flex items-center gap-2 group'>
              <span className='w-1 h-1 bg-themegreen/50 rounded-full group-hover:scale-150 transition-transform'></span>
              Savings Account
            </li>
            <li className='text-gray-500 hover:text-white cursor-pointer text-sm transition-all duration-300 flex items-center gap-2 group'>
              <span className='w-1 h-1 bg-themegreen/50 rounded-full group-hover:scale-150 transition-transform'></span>
              Mobile Money
            </li>
            <li className='text-gray-500 hover:text-white cursor-pointer text-sm transition-all duration-300 flex items-center gap-2 group'>
              <span className='w-1 h-1 bg-themegreen/50 rounded-full group-hover:scale-150 transition-transform'></span>
              Money Transfers
            </li>
            <li className='text-gray-500 hover:text-white cursor-pointer text-sm transition-all duration-300 flex items-center gap-2 group'>
              <span className='w-1 h-1 bg-themegreen/50 rounded-full group-hover:scale-150 transition-transform'></span>
              Salary Processing
            </li>
          </ul>
        </div>

        {/* Newsletter Column */}
        <div className="lg:w-[32%] w-full flex flex-col justify-center items-start gap-4">
          <h1 className='text-white text-sm font-semibold font-poppins uppercase tracking-[0.15em] text-gray-500'>
            Stay Updated
          </h1>
          <p className='text-gray-500 text-sm leading-relaxed font-poppins'>
            Subscribe to our newsletter for exclusive financial insights, market updates, and member benefits.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center w-full gap-3">
            <input
              type="email"
              placeholder='Enter your email address'
              className='w-full sm:flex-1 p-3 bg-white/5 border border-white/10 rounded-lg text-white text-sm placeholder-gray-600 focus:border-themegreen focus:outline-none focus:ring-1 focus:ring-themegreen/30 transition-all'
            />
            <button className='w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-medium text-sm py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 border border-white/10 hover:border-white/30'>
              Subscribe
              <FaArrowRight className='text-xs' />
            </button>
          </div>
          
          {/* Trust Badges */}
          <div className='flex flex-wrap gap-3 mt-2'>
            <div className='flex items-center gap-2 text-gray-600 text-xs bg-white/5 px-3 py-2 rounded-lg border border-white/10'>
              <FaCheckCircle className='text-themegreen text-xs' />
              <span>Regulated</span>
            </div>
            <div className='flex items-center gap-2 text-gray-600 text-xs bg-white/5 px-3 py-2 rounded-lg border border-white/10'>
              <FaCheckCircle className='text-themegreen text-xs' />
              <span>Secure</span>
            </div>
            <div className='flex items-center gap-2 text-gray-600 text-xs bg-white/5 px-3 py-2 rounded-lg border border-white/10'>
              <FaCheckCircle className='text-themegreen text-xs' />
              <span>Licensed</span>
            </div>
            <div className='flex items-center gap-2 text-gray-600 text-xs bg-white/5 px-3 py-2 rounded-lg border border-white/10'>
              <FaCheckCircle className='text-themegreen text-xs' />
              <span>Insured</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full flex lg:flex-row flex-col items-center justify-between border-t border-white/5 pt-8 gap-4 relative z-10">
        <p className='text-gray-600 text-sm font-poppins'>
          © 2026 MMOCCUL. All rights reserved.
        </p>
        <div className='h-px w-full lg:w-auto bg-white/5 lg:hidden'></div>
        <ul className='text-gray-600 flex justify-center items-center gap-6 text-sm'>
          <li className='hover:text-white cursor-pointer transition-colors'>Terms of Use</li>
          <li className='hover:text-white cursor-pointer transition-colors'>Privacy Policy</li>
          <li className='hover:text-white cursor-pointer transition-colors'>Cookie Policy</li>
        </ul>
      </div>
    </div>
  )
}
