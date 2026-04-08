import React from 'react'
import { Link } from 'react-router-dom'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaWhatsapp, FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import logoImage from '../assets/Mmoccul__logo.png';

export const Footer = () => {
  return (
    <div className='w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 h-auto flex flex-col items-start justify-center
    lg:px-[80px] px-[20px] lg:py-[80px] py-[50px] gap-[60px] relative overflow-hidden'>
      
      {/* Subtle Background Accent */}
      <div className='absolute top-0 right-0 w-[400px] h-[400px] bg-themegreen/5 rounded-full blur-[120px]'></div>

      <div className="w-full h-auto flex lg:flex-row flex-col items-start justify-between gap-[60px] relative z-10">
        
        {/* Company Info Column */}
        <div className="lg:w-[35%] w-full flex flex-col justify-center items-start gap-[25px]">
          {/* Logo with White Background */}
          <div className="flex items-center gap-3 p-3 bg-white rounded-2xl shadow-lg">
            <img src={logoImage} alt="MMOCCUL Logo" className='h-14 w-auto' />
          </div>
          
          <p className='text-gray-300 text-base font-poppins leading-relaxed'>
            MMOCCUL is a trusted financial cooperative dedicated to helping our members achieve their financial goals. 
            Join thousands of satisfied members across Cameroon.
          </p>
          
          {/* Contact Info */}
          <div className='flex flex-col gap-4 mt-2'>
            <a href="tel:+237670020630" className='flex items-center gap-3 text-gray-300 hover:text-themegreen transition-colors group'>
              <div className='w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-themegreen/20 transition-colors'>
                <FaPhoneAlt className='text-themegreen' />
              </div>
              <span className='group-hover:translate-x-1 transition-transform'>+237 670 020 630</span>
            </a>
            <a href="https://wa.me/237680485488" target="_blank" rel="noopener noreferrer" className='flex items-center gap-3 text-gray-300 hover:text-themegreen transition-colors group'>
              <div className='w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-themegreen/20 transition-colors'>
                <FaWhatsapp className='text-themegreen' />
              </div>
              <span className='group-hover:translate-x-1 transition-transform'>+237 680 485 488</span>
            </a>
            <a href="mailto:info@mmoccul.com" className='flex items-center gap-3 text-gray-300 hover:text-themegreen transition-colors group'>
              <div className='w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-themegreen/20 transition-colors'>
                <FaEnvelope className='text-themegreen' />
              </div>
              <span className='group-hover:translate-x-1 transition-transform'>info@mmoccul.com</span>
            </a>
            <div className='flex items-center gap-3 text-gray-300'>
              <div className='w-10 h-10 bg-white/10 rounded-full flex items-center justify-center'>
                <FaMapMarkerAlt className='text-themegreen' />
              </div>
              <span>Yaoundé, Cameroon</span>
            </div>
          </div>
          
          {/* Social Icons */}
          <div className="flex justify-center items-center gap-3 mt-4">
            <a href="#" className="w-11 h-11 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-themegreen hover:text-white transition-all duration-300">
              <FaFacebookF />
            </a>
            <a href="#" className="w-11 h-11 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-themegreen hover:text-white transition-all duration-300">
              <FaTwitter />
            </a>
            <a href="#" className="w-11 h-11 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-themegreen hover:text-white transition-all duration-300">
              <FaLinkedinIn />
            </a>
            <a href="#" className="w-11 h-11 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-themegreen hover:text-white transition-all duration-300">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="lg:w-[20%] w-full flex flex-col justify-center items-start gap-6">
          <h1 className='text-white text-xl font-bold font-poppins mb-2 relative'>
            Quick Links
            <span className='absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-themegreen to-green-400 rounded-full'></span>
          </h1>
          <ul className='flex flex-col justify-center items-start gap-4'>
            <li className='text-gray-400 hover:text-themegreen cursor-pointer text-base flex items-center gap-3 transition-all duration-300 group hover:translate-x-2'>
              <span className='w-2 h-2 bg-themegreen rounded-full opacity-0 group-hover:opacity-100 transition-opacity'></span>
              <Link to="/">Home</Link>
            </li>
            <li className='text-gray-400 hover:text-themegreen cursor-pointer text-base flex items-center gap-3 transition-all duration-300 group hover:translate-x-2'>
              <span className='w-2 h-2 bg-themegreen rounded-full opacity-0 group-hover:opacity-100 transition-opacity'></span>
              <Link to="/about">About</Link>
            </li>
            <li className='text-gray-400 hover:text-themegreen cursor-pointer text-base flex items-center gap-3 transition-all duration-300 group hover:translate-x-2'>
              <span className='w-2 h-2 bg-themegreen rounded-full opacity-0 group-hover:opacity-100 transition-opacity'></span>
              <Link to="/services">Services</Link>
            </li>
            <li className='text-gray-400 hover:text-themegreen cursor-pointer text-base flex items-center gap-3 transition-all duration-300 group hover:translate-x-2'>
              <span className='w-2 h-2 bg-themegreen rounded-full opacity-0 group-hover:opacity-100 transition-opacity'></span>
              <Link to="/latest-news">Blog</Link>
            </li>
            <li className='text-gray-400 hover:text-themegreen cursor-pointer text-base flex items-center gap-3 transition-all duration-300 group hover:translate-x-2'>
              <span className='w-2 h-2 bg-themegreen rounded-full opacity-0 group-hover:opacity-100 transition-opacity'></span>
              <Link to="/branches">Branches</Link>
            </li>
            <li className='text-gray-400 hover:text-themegreen cursor-pointer text-base flex items-center gap-3 transition-all duration-300 group hover:translate-x-2'>
              <span className='w-2 h-2 bg-themegreen rounded-full opacity-0 group-hover:opacity-100 transition-opacity'></span>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Services Column */}
        <div className="lg:w-[20%] w-full flex flex-col justify-center items-start gap-6">
          <h1 className='text-white text-xl font-bold font-poppins mb-2 relative'>
            Our Services
            <span className='absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-themegreen to-green-400 rounded-full'></span>
          </h1>
          <ul className='flex flex-col justify-center items-start gap-4'>
            <li className='text-gray-400 hover:text-themegreen cursor-pointer text-base flex items-center gap-3 transition-all duration-300 group hover:translate-x-2'>
              <span className='w-2 h-2 bg-themegreen rounded-full opacity-0 group-hover:opacity-100 transition-opacity'></span>
              Personal Loans
            </li>
            <li className='text-gray-400 hover:text-themegreen cursor-pointer text-base flex items-center gap-3 transition-all duration-300 group hover:translate-x-2'>
              <span className='w-2 h-2 bg-themegreen rounded-full opacity-0 group-hover:opacity-100 transition-opacity'></span>
              Business Financing
            </li>
            <li className='text-gray-400 hover:text-themegreen cursor-pointer text-base flex items-center gap-3 transition-all duration-300 group hover:translate-x-2'>
              <span className='w-2 h-2 bg-themegreen rounded-full opacity-0 group-hover:opacity-100 transition-opacity'></span>
              Savings Account
            </li>
            <li className='text-gray-400 hover:text-themegreen cursor-pointer text-base flex items-center gap-3 transition-all duration-300 group hover:translate-x-2'>
              <span className='w-2 h-2 bg-themegreen rounded-full opacity-0 group-hover:opacity-100 transition-opacity'></span>
              Mobile Money
            </li>
            <li className='text-gray-400 hover:text-themegreen cursor-pointer text-base flex items-center gap-3 transition-all duration-300 group hover:translate-x-2'>
              <span className='w-2 h-2 bg-themegreen rounded-full opacity-0 group-hover:opacity-100 transition-opacity'></span>
              Money Transfers
            </li>
            <li className='text-gray-400 hover:text-themegreen cursor-pointer text-base flex items-center gap-3 transition-all duration-300 group hover:translate-x-2'>
              <span className='w-2 h-2 bg-themegreen rounded-full opacity-0 group-hover:opacity-100 transition-opacity'></span>
              Salary Processing
            </li>
          </ul>
        </div>

        {/* Newsletter Column */}
        <div className="lg:w-[25%] w-full flex flex-col justify-center items-start gap-5">
          <h1 className='text-white text-xl font-bold font-poppins relative'>
            Stay Updated
            <span className='absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-themegreen to-green-400 rounded-full'></span>
          </h1>
          <p className='text-gray-400 text-base font-poppins'>
            Subscribe to our newsletter for the latest updates and financial tips.
          </p>
          <div className="flex flex-col justify-center items-start w-full gap-3">
            <input
              type="email"
              placeholder='Enter your email'
              className='w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:border-themegreen focus:outline-none focus:ring-2 focus:ring-themegreen/20 transition-all'
            />
            <button className='w-full bg-themegreen hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg'>
              Subscribe
              <FaArrowRight className='text-sm' />
            </button>
          </div>
          
          {/* Trust Badges */}
          <div className='flex flex-wrap gap-4 mt-4'>
            <div className='flex items-center gap-2 text-gray-400 text-sm bg-white/5 px-3 py-2 rounded-lg'>
              <FaCheckCircle className='text-themegreen' />
              <span>Secure</span>
            </div>
            <div className='flex items-center gap-2 text-gray-400 text-sm bg-white/5 px-3 py-2 rounded-lg'>
              <FaCheckCircle className='text-themegreen' />
              <span>Trusted</span>
            </div>
            <div className='flex items-center gap-2 text-gray-400 text-sm bg-white/5 px-3 py-2 rounded-lg'>
              <FaCheckCircle className='text-themegreen' />
              <span>Licensed</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full h-auto flex lg:flex-row flex-col items-center 
      justify-between border-t border-white/10 pt-8 gap-[10px] relative z-10">
        <p className='text-gray-400 text-base font-poppins text-center'>
          Copyright © 2026 MMOCCUL. All rights reserved
        </p>
        <ul className='text-gray-400 flex justify-center items-end gap-8'>
          <li className='hover:text-themegreen cursor-pointer transition-colors'>Terms of Use</li>
          <li className='hover:text-themegreen cursor-pointer transition-colors'>Privacy Policy</li>
          <li className='hover:text-themegreen cursor-pointer transition-colors'>Cookie Policy</li>
        </ul>
      </div>
    </div>
  )
}
