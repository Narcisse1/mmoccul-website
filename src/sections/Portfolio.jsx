import React, { useEffect } from 'react'
import { news } from '../export'
import AOS from 'aos'
import 'aos/dist/aos.css'

export const Portfolio = () => {

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    })
  }, [])

  return (
    <div className="w-full py-20 lg:py-28 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div 
            data-aos="fade-up"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2 shadow-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-500"></span>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Latest Updates</span>
          </div>
          <h1 
            data-aos="fade-up"
            data-aos-delay="100"
            className="font-serif text-3xl lg:text-5xl font-bold text-slate-900 mt-6 leading-tight"
          >
            Stay Updated with <span className="bg-gradient-to-r from-cyan-500 to-sky-500 bg-clip-text text-transparent">MMOCCUL</span>
          </h1>
          <p 
            data-aos="fade-up"
            data-aos-delay="200"
            className="mt-4 text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            Discover the latest announcements, achievements, and updates from your trusted financial cooperative.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {news.map((item, index) => (
            <article 
              key={index}
              data-aos="fade-up"
              data-aos-delay={100 + index * 100}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl hover:border-cyan-200 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden bg-slate-100">
                <img 
                  src={item.img} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-cyan-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-wide">
                    {item.category}
                  </span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                {/* Date */}
                <div className="flex items-center gap-2 text-slate-400 text-xs mb-3">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>{item.date}</span>
                </div>
                
                {/* Title */}
                <h3 className="font-serif text-lg font-bold text-slate-900 mb-3 leading-tight group-hover:text-cyan-600 transition-colors line-clamp-2">
                  {item.title}
                </h3>
                
                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {item.para}
                </p>
                
                {/* Read More */}
                <button className="text-cyan-600 hover:text-cyan-700 text-sm font-semibold flex items-center gap-1 transition-colors">
                  Read more
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
