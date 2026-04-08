import React, { useEffect } from 'react'
import { services } from '../export';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Offer = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 200,
      once: false,
    });
  }, []);

  return (
    <div id='services' className='w-full h-auto py-16 lg:py-20 px-6 lg:px-20 bg-gradient-to-b from-white to-gray-50'>
      {/* Header */}
      <div className='text-center mb-16 max-w-5xl mx-auto'>
        <div 
          data-aos="fade-up" 
          className='inline-block px-8 py-3 bg-gradient-to-r from-blue-100 to-blue-200 border border-blue-300 rounded-full mb-8 shadow-lg'
        >
          <span className='text-blue-800 text-lg font-semibold tracking-[0.3em] uppercase'>
            Our Services
          </span>
        </div>
        <h1 
          data-aos="fade-up" 
          data-aos-delay="100"
          className='text-gray-900 lg:text-6xl text-4xl font-bold font-poppins mb-6 leading-tight'
        >
          Comprehensive <span className='text-blue-800'>Financial Solutions</span> for Your Success
        </h1>
        <p 
          data-aos="fade-up" 
          data-aos-delay="200"
          className='text-gray-600 text-lg font-poppins max-w-3xl mx-auto leading-relaxed tracking-wide'
        >
          From personal loans to business financing, mobile banking to secure savings accounts — 
          we provide sophisticated financial solutions designed to help our members achieve their goals. 
          Experience the difference of professional cooperative banking that prioritizes your financial well-being.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 lg:gap-10 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div 
            key={index} 
            data-aos="fade-up"
            data-aos-delay={100 + index * 100}
            className='group flex flex-col justify-start items-start gap-6 p-8 
            border border-gray-100 bg-white hover:bg-gradient-to-br hover:from-blue-50 
            hover:to-blue-100 rounded-2xl cursor-pointer transition-all duration-300 
            hover:shadow-xl hover:border-blue-300 hover:-translate-y-1 hover:shadow-blue-200'
          >
            <div className='w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl 
            flex items-center justify-center mb-2 group-hover:from-blue-600 group-hover:to-blue-700 
            group-hover:text-white transition-all duration-300 shadow-lg'>
              <service.icon className='size-8 text-blue-800 group-hover:text-white' />
            </div>
            <h1 className='text-gray-900 text-2xl font-semibold font-poppins group-hover:text-blue-800 
            transition-colors leading-tight'>
              {service.title}
            </h1>
            <p className='text-gray-600 text-base font-poppins leading-relaxed tracking-wide'>
              {service.para}
            </p>
            <button className='text-blue-800 hover:text-gray-900 text-sm font-medium 
            uppercase mt-2 flex items-center gap-3 group-hover:gap-4 transition-all duration-300'>
              <span className='w-6 h-0.5 bg-blue-800 group-hover:bg-gray-900 transition-colors'></span>
              Learn More 
              <span className='group-hover:translate-x-1 transition-transform duration-300'>→</span>
            </button>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div 
        data-aos="fade-up" 
        data-aos-delay="500"
        className='mt-16 text-center'
      >
        <a href="/services" className='bg-gradient-to-r from-blue-600 to-blue-700 hover:from-black hover:to-gray-900 
        text-white py-4 px-12 font-semibold rounded-full transition-all duration-300 
        hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:scale-105 hover:text-blue-600 
        border-2 border-blue-600/30 hover:border-transparent inline-block'>
          Explore Our Services
        </a>
      </div>
    </div>
  )
}
