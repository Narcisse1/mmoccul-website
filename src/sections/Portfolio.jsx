import React, { useEffect } from 'react'
import backgroundImage from '../assets/hero_bg.jpg';
import { news } from '../export';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Portfolio = () => {

  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
      once: false, 
    });
  }, []);

  return (
    <div id='latest' className='w-full h-auto flex flex-col items-center justify-center lg:px-[80px] px-[20px] lg:py-[80px] py-[60px] gap-[20px] bg-cover bg-center relative overflow-hidden' style={{
      backgroundImage: `url(${backgroundImage})` }}>
        
        {/* Gradient Overlay - Modern sleek gradient */}
        <div className='absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900/95 to-slate-800/95'></div>
        
        {/* Decorative elements */}
        <div className='absolute top-20 left-10 w-72 h-72 bg-themegreen/10 rounded-full blur-3xl'></div>
        <div className='absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl'></div>
        
        {/* Content */}
        <div className='relative z-10 w-full'>
          {/* Header */}
          <div className='text-center mb-16 max-w-4xl mx-auto'>
            <div 
              data-aos="fade-up" 
              className='inline-flex items-center gap-2 px-5 py-2 bg-themegreen/20 border border-themegreen/30 rounded-full mb-6'
            >
              <span className='w-2 h-2 bg-themegreen rounded-full animate-pulse'></span>
              <span className='text-themegreen text-sm font-semibold tracking-[0.25em] uppercase'>
                Latest News
              </span>
            </div>
            <h1 
              data-aos="fade-up" 
              data-aos-delay="100"
              className='text-white lg:text-5xl text-3xl font-bold font-poppins mb-5 leading-tight'
            >
              Stay Updated with <span className='text-transparent bg-clip-text bg-gradient-to-r from-themegreen to-green-400'>MMOCCUL</span> News
            </h1>
            <p 
              data-aos="fade-up" 
              data-aos-delay="200"
              className='text-gray-400 text-lg font-poppins max-w-2xl mx-auto leading-relaxed'
            >
              Discover the latest announcements, achievements, and updates from your trusted 
              financial cooperative.
            </p>
          </div>
         
          {/* News Grid - 4 columns on desktop */}
          <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 max-w-7xl mx-auto'>
            {news.map((item, index) => (
              <div 
                key={index} 
                data-aos="fade-up"
                data-aos-delay={100 + index * 50}
                className="group flex flex-col bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:border-themegreen/40 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(34,197,94,0.15)] hover:-translate-y-2"
              >
                {/* Image Container */}
                <div className="relative h-44 overflow-hidden">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-700' 
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent'></div>
                  <div className='absolute top-3 left-3 bg-themegreen/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-lg'>
                    {item.category}
                  </div>
                </div>
                
                {/* Content */}
                <div className='p-5 flex flex-col flex-grow'>
                  {/* Date */}
                  <div className='flex items-center gap-2 text-gray-400 text-xs mb-3'>
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium">{item.date}</span>
                  </div>
                  
                  {/* Title */}
                  <h1 className='text-white text-lg font-bold font-poppins text-left leading-snug mb-3 group-hover:text-themegreen transition-colors duration-300'>
                    {item.title}
                  </h1>
                  
                  {/* Description */}
                  <p className='text-gray-400 text-sm font-poppins leading-relaxed mb-4 line-clamp-3 flex-grow'>
                    {item.para}
                  </p>
                  
                  {/* Read More */}
                  <button className='text-themegreen hover:text-white text-sm font-semibold flex items-center gap-2 mt-auto group-hover:gap-3 transition-all duration-300'>
                    Read More 
                    <span className='group-hover:translate-x-1 transition-transform'>→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
  )
}
