import React, {useEffect, useState} from 'react'
import backgroundImage from '../assets/hero_bg.jpg'
import logo1 from '../assets/Slide1.png'
import logo2 from '../assets/Slide2.png'
import logo3 from '../assets/Slide31(2).png'
import logo4 from '../assets/Slide9.png'
import logo5 from '../assets/Slide5.png'
import logo6 from '../assets/Slide6.png'
import logo7 from '../assets/Slide7.png'
import logo8 from '../assets/slide10.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Clients = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 200,
      once: false,
    });
  }, []);

  const clients = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];

  return (
    <div id='clients' className='w-full bg-white'>
      {/* Content */}
      <div className='py-10 lg:py-12 px-6 lg:px-20'>
        {/* Header with elegant divider */}
        <div className='relative mb-10'>
          <div className='absolute inset-0 flex items-center justify-center'>
            <div className='w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent'></div>
          </div>
          <div className='relative z-10 text-center'>
            <div 
              data-aos="fade-up" 
              className='inline-block px-8 py-3 bg-gradient-to-r from-themegreen/10 to-emerald-500/10 
              border border-themegreen/30 rounded-full mb-6 shadow-lg backdrop-blur-sm'
            >
              <span 
                className='text-themegreen text-sm font-semibold tracking-[0.3em] uppercase'
              >
                Our Partners
              </span>
            </div>
            <h2 
              data-aos="fade-up" 
              data-aos-delay="100"
              className='text-gray-900 text-4xl lg:text-5xl font-bold font-poppins mb-4 leading-tight'
            >
              Trusted by <span className='text-themegreen bg-gradient-to-r from-themegreen to-emerald-500 bg-clip-text text-transparent'>Industry Leaders</span>
            </h2>
            <p 
              data-aos="fade-up" 
              data-aos-delay="200"
              className='text-gray-600 text-lg max-w-3xl mx-auto font-poppins leading-relaxed tracking-wide'
            >
              We proudly partner with renowned organizations worldwide to deliver exceptional financial services with excellence and integrity.
            </p>
          </div>
        </div>

        {/* Client Logos Grid */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6'>
          {clients.map((logo, index) => (
            <div 
              key={index}
              data-aos="fade-up"
              data-aos-delay={100 + index * 50}
              className='group relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 
              border border-blue-800/50 rounded-2xl p-6 lg:p-8 flex justify-center items-center 
              transition-all duration-500 hover:from-blue-900 hover:via-blue-800 hover:to-blue-900 
              hover:border-themegreen/40 hover:shadow-[0_20px_40px_rgba(74,222,128,0.25)] 
              hover:-translate-y-2 hover:scale-105 overflow-hidden'
            >
              {/* Decorative corner accents */}
              <div className='absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-themegreen/30 rounded-tl-2xl'></div>
              <div className='absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-themegreen/30 rounded-tr-2xl'></div>
              <div className='absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-themegreen/30 rounded-bl-2xl'></div>
              <div className='absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-themegreen/30 rounded-br-2xl'></div>
              
              {/* Subtle background pattern */}
              <div className='absolute inset-0 opacity-20'>
                <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-white to-transparent'></div>
              </div>
              
              <img 
                src={logo} 
                alt={`Client ${index + 1}`} 
                className='w-[100px] lg:w-[130px] grayscale-0 
                transition-all duration-500 opacity-95 group-hover:opacity-100 
                group-hover:scale-110 filter drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)]' 
              />
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className='mt-8 grid grid-cols-2 md:grid-cols-4 gap-4'>
          <div data-aos="fade-up" data-aos-delay="300" className='text-center group'>
            <div className='relative inline-block mb-3'>
              <h3 className='text-4xl lg:text-5xl font-bold text-gray-900 font-poppins group-hover:text-themegreen transition-colors duration-300'>
                50+
              </h3>
              <div className='absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-themegreen to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full'></div>
            </div>
            <p className='text-gray-600 font-medium text-sm tracking-wide uppercase'>
              Partner Organizations
            </p>
          </div>
          <div data-aos="fade-up" data-aos-delay="350" className='text-center group'>
            <div className='relative inline-block mb-3'>
              <h3 className='text-4xl lg:text-5xl font-bold text-gray-900 font-poppins group-hover:text-themegreen transition-colors duration-300'>
                14K+
              </h3>
              <div className='absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-themegreen to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full'></div>
            </div>
            <p className='text-gray-600 font-medium text-sm tracking-wide uppercase'>
              Satisfied Members
            </p>
          </div>
          <div data-aos="fade-up" data-aos-delay="400" className='text-center group'>
            <div className='relative inline-block mb-3'>
              <h3 className='text-4xl lg:text-5xl font-bold text-gray-900 font-poppins group-hover:text-themegreen transition-colors duration-300'>
                99%
              </h3>
              <div className='absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-themegreen to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full'></div>
            </div>
            <p className='text-gray-600 font-medium text-sm tracking-wide uppercase'>
              Client Satisfaction
            </p>
          </div>
          <div data-aos="fade-up" data-aos-delay="450" className='text-center group'>
            <div className='relative inline-block mb-3'>
              <h3 className='text-4xl lg:text-5xl font-bold text-gray-900 font-poppins group-hover:text-themegreen transition-colors duration-300'>
                15+
              </h3>
              <div className='absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-themegreen to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full'></div>
            </div>
            <p className='text-gray-600 font-medium text-sm tracking-wide uppercase'>
              Years of Excellence
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
