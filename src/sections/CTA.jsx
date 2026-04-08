import React, { useEffect } from 'react';
import backgroundImage from '../assets/hero_bg.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaPhoneAlt, FaWhatsapp, FaArrowRight, FaHeadset, FaComments } from 'react-icons/fa';

export const CTA = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 200, 
      once: false,
    });
  }, []);

  return (
    <div id='contact' className='w-full h-auto flex flex-col items-center 
    justify-center lg:px-[80px] px-[20px] lg:py-[120px] py-[80px] gap-[20px] bg-cover 
    bg-center relative overflow-hidden' style={{ backgroundImage: `url(${backgroundImage})` }}>
      
      {/* Gradient Overlay */}
      <div className='absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900/95 to-slate-800/90'></div>
      
      {/* Subtle Decorative Element */}
      <div className='absolute top-20 -left-20 w-80 h-80 bg-themegreen/10 rounded-full blur-[100px]'></div>

      {/* Content */}
      <div className='relative z-10 text-center max-w-4xl mx-auto'>
        {/* Badge */}
        <div 
          data-aos="fade-up" 
          className='inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-8'
        >
          <span className='w-2 h-2 bg-themegreen rounded-full animate-pulse'></span>
          <span className='text-themegreen text-sm font-semibold tracking-[0.25em] uppercase'>
            Get In Touch
          </span>
        </div>

        {/* Main Heading - Spicy and Engaging */}
        <h1 
          data-aos="fade-up" 
          data-aos-delay="100"
          className='text-white lg:text-6xl text-3xl font-bold font-poppins mb-6 leading-tight'
        >
          Ready to <span className='text-transparent bg-clip-text bg-gradient-to-r from-themegreen via-green-400 to-emerald-400'>Transform</span> Your <br/>
          Financial Future?
        </h1>
        
        {/* Description */}
        <p 
          data-aos="fade-up" 
          data-aos-delay="200"
          className='text-gray-300 text-xl font-poppins max-w-2xl mx-auto leading-relaxed mb-10'
        >
          Join thousands of satisfied members who have taken control of their finances with MMOCCUL. 
          Whether you need a loan, want to save, or have questions — we're here to help!
        </p>

        {/* CTA Buttons - Phone, WhatsApp, and Create Account */}
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="flex lg:flex-row flex-col justify-center items-center lg:gap-5 gap-4 mt-8"
        >
          {/* Create Account Button */}
          <a
            href="/create-account"
            className='flex items-center gap-3 bg-themegreen hover:bg-green-600 text-white text-base font-semibold py-3.5 px-7 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg'
          >
            <FaArrowRight className='text-lg' />
            <span>Create Account</span>
          </a>
          
          {/* Contact Us - Phone Call */}
          <a
            href="tel:+237670020630"
            className='flex items-center gap-3 bg-white text-gray-900 hover:bg-gray-100 text-base font-semibold py-3.5 px-7 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg'
          >
            <FaPhoneAlt className='text-lg' />
            <span>Contact Us</span>
            <FaArrowRight className='text-sm' />
          </a>
          
          {/* Reach Us - WhatsApp */}
          <a
            href="https://wa.me/237680485488"
            target="_blank"
            rel="noopener noreferrer"
            className='flex items-center gap-3 bg-white text-gray-900 hover:bg-gray-100 text-base font-semibold py-3.5 px-7 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg'
          >
            <FaWhatsapp className='text-lg text-green-600' />
            <span>Reach Us on WhatsApp</span>
            <FaArrowRight className='text-sm' />
          </a>
        </div>

        {/* Trust Indicators */}
        <div 
          data-aos="fade-up" 
          data-aos-delay="400"
          className='mt-16 flex flex-wrap justify-center gap-8 lg:gap-16'
        >
          <div className='flex items-center gap-3 text-gray-400'>
            <div className='w-10 h-10 bg-white/10 rounded-full flex items-center justify-center'>
              <FaHeadset className='text-themegreen' />
            </div>
            <div className='text-left'>
              <p className='text-white font-bold'>24/7 Support</p>
              <p className='text-sm'>Always here to help</p>
            </div>
          </div>
          <div className='flex items-center gap-3 text-gray-400'>
            <div className='w-10 h-10 bg-white/10 rounded-full flex items-center justify-center'>
              <FaComments className='text-themegreen' />
            </div>
            <div className='text-left'>
              <p className='text-white font-bold'>Quick Response</p>
              <p className='text-sm'>We reply fast</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
