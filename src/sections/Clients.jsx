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
    <div id='clients' className='w-full bg-slate-900'>
      {/* Content */}
      <div className='py-14 lg:py-20 px-4 sm:px-6 lg:px-8'>
        {/* Header with elegant divider */}
        <div className='relative mb-14'>
          <div className='absolute inset-0 flex items-center justify-center'>
            <div className='w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent'></div>
          </div>
          <div className='relative z-10 text-center'>
            <div 
              data-aos="fade-up" 
              className='inline-block px-8 py-3 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-full mb-6 transition-all duration-300 hover:bg-white/15'
            >
              <span 
                className='text-white text-[11px] sm:text-xs font-semibold tracking-[0.4em] uppercase'
              >
                Trusted Partners
              </span>
            </div>
            <h2 
              data-aos="fade-up" 
              data-aos-delay="100"
              className='text-white text-3xl sm:text-4xl lg:text-5xl font-bold font-poppins mb-5 leading-tight tracking-tight'
            >
              Strategic Alliances with <br className='hidden lg:block' />
              <span className='bg-gradient-to-r from-themegreen to-emerald-400 bg-clip-text text-transparent'>Global Industry Leaders</span>
            </h2>
            <p 
              data-aos="fade-up" 
              data-aos-delay="200"
              className='text-gray-400 text-base max-w-3xl mx-auto font-poppins leading-relaxed tracking-wide'
            >
              We proudly partner with renowned organizations worldwide to deliver exceptional financial services with excellence, integrity, and unwavering commitment to our members.
            </p>
          </div>
        </div>

          {/* Classic Marquee Section */}
          <div className='relative overflow-hidden py-6 mb-12'>
            <div className='absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-950 to-transparent z-10'></div>
            <div className='absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-950 to-transparent z-10'></div>
            
            <div className='flex gap-8 animate-marquee whitespace-nowrap'>
              {[...clients, ...clients, ...clients].map((logo, index) => (
                <div
                  key={index}
                  className='relative group flex-shrink-0'
                >
                  <div className='w-28 sm:w-36 lg:w-44 h-20 sm:h-28 lg:h-32 bg-white/5 backdrop-blur-sm rounded-xl border border-slate-700/50 flex items-center justify-center p-4 transition-all duration-500 group-hover:bg-white/10 group-hover:border-slate-600 group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-slate-800/30'>
                    <img
                      src={logo}
                      alt={`Partner ${index + 1}`}
                      className='w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 opacity-70 group-hover:opacity-100'
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

        {/* Stats Section */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6'>
          <div data-aos="fade-up" data-aos-delay="300" className='text-center group relative'>
            <div className='relative inline-block mb-4'>
              <h3 className='text-4xl lg:text-5xl font-bold text-white font-poppins group-hover:text-themegreen transition-colors duration-300'>
                50+
              </h3>
              <div className='absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-themegreen to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full'></div>
            </div>
            <p className='text-gray-500 text-sm font-medium tracking-[0.15em] uppercase'>
              Partner Organizations
            </p>
          </div>
          <div data-aos="fade-up" data-aos-delay="350" className='text-center group relative'>
            <div className='relative inline-block mb-4'>
              <h3 className='text-4xl lg:text-5xl font-bold text-white font-poppins group-hover:text-themegreen transition-colors duration-300'>
                14K+
              </h3>
              <div className='absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-themegreen to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full'></div>
            </div>
            <p className='text-gray-500 text-sm font-medium tracking-[0.15em] uppercase'>
              Satisfied Members
            </p>
          </div>
          <div data-aos="fade-up" data-aos-delay="400" className='text-center group relative'>
            <div className='relative inline-block mb-4'>
              <h3 className='text-4xl lg:text-5xl font-bold text-white font-poppins group-hover:text-themegreen transition-colors duration-300'>
                99%
              </h3>
              <div className='absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-themegreen to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full'></div>
            </div>
            <p className='text-gray-500 text-sm font-medium tracking-[0.15em] uppercase'>
              Client Satisfaction
            </p>
          </div>
          <div data-aos="fade-up" data-aos-delay="450" className='text-center group relative'>
            <div className='relative inline-block mb-4'>
              <h3 className='text-4xl lg:text-5xl font-bold text-white font-poppins group-hover:text-themegreen transition-colors duration-300'>
                15+
              </h3>
              <div className='absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-themegreen to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full'></div>
            </div>
            <p className='text-gray-500 text-sm font-medium tracking-[0.15em] uppercase'>
              Years of Excellence
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
