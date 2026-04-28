import React, {useEffect, useState} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import aboutimg from '../assets/about.jpg'
import { Link as RouterLink } from 'react-router-dom'

// Feature images from assets2
import loansImg from '../assets/assets2/1774855672791.jpg'
import secureImg from '../assets/assets2/1774855672572.jpg'
import communityImg from '../assets/assets2/1774855672707.jpg'

export const About = () => {

  const [typedText, setTypedText] = useState('');
  const fullText = "Banking Built on Trust, Driven by Community";

  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 200, 
      once: false,
    });
  }, []);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        setTimeout(() => {
          index = 0;
          setTypedText('');
        }, 2000);
      }
    }, 80);
    return () => clearInterval(timer);
  }, []);

  const features = [
    {
      title: "Low-Interest Loans",
      description: "Access affordable financing options designed to help your business grow and thrive.",
      image: loansImg,
    },
    {
      title: "Secure Banking",
      description: "Your money is protected with state-of-the-art security measures.",
      image: secureImg,
    },
    {
      title: "Community First",
      description: "Join thousands of members who trust us with their financial goals.",
      image: communityImg,
    },
  ]

  return (
    <div id='about' className='w-full bg-slate-50 py-8 lg:py-16'>
      <div className='max-w-7xl mx-auto px-6 lg:px-8 mb-6'>
        <div className='text-center mb-6'>
          <div 
            data-aos="fade-up" 
            className='inline-block px-5 py-2.5 bg-blue-900 rounded-full mb-6 transition-all duration-300 hover:bg-blue-800'
          >
            <span className='text-white text-[10px] sm:text-xs font-semibold tracking-[0.35em] uppercase'>
              Our Identity
            </span>
          </div>
          <h1 
            data-aos="fade-up" 
            data-aos-delay="100"
            className='lg:text-5xl text-3xl font-bold leading-tight font-poppins mb-6 text-slate-900 max-w-4xl mx-auto'
          >
            {typedText}<span className='animate-pulse text-sky-700'>|</span>
          </h1>
          <p 
            data-aos="fade-up" 
            data-aos-delay="200"
            className='text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed font-poppins'
          >
            At MMOCCUL, we believe in the power of community-driven finance. Our mission is to provide world-class 
            banking solutions that empower every Cameroonian to achieve their financial dreams.
          </p>
        </div>

        <div className='grid lg:grid-cols-2 gap-6 items-center mb-6'>
          <div data-aos="fade-right" className='relative'>
            <div className='relative overflow-hidden rounded-2xl shadow-2xl'>
              <img 
                src={aboutimg} 
                alt="About MMOCCUL" 
                className='w-full h-[400px] object-cover transform hover:scale-105 transition-transform duration-500'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent'></div>
              <div className='absolute bottom-6 left-6 right-6'>
                <div className='bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg'>
                  <div className='flex items-center justify-between'>
                    <div className='text-center px-4 py-2 rounded-lg bg-white/50'>
                      <h3 className='text-slate-700 text-2xl font-bold'>14K+</h3>
                      <p className='text-slate-500 text-xs font-medium uppercase tracking-wide'>Members</p>
                    </div>
                    <div className='w-px h-10 bg-slate-300'></div>
                    <div className='text-center px-4 py-2 rounded-lg bg-white/50'>
                      <h3 className='text-slate-700 text-2xl font-bold'>50+</h3>
                      <p className='text-slate-500 text-xs font-medium uppercase tracking-wide'>Partners</p>
                    </div>
                    <div className='w-px h-10 bg-slate-300'></div>
                    <div className='text-center px-4 py-2 rounded-lg bg-white/50'>
                      <h3 className='text-slate-700 text-2xl font-bold'>99%</h3>
                      <p className='text-slate-500 text-xs font-medium uppercase tracking-wide'>Satisfaction</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='absolute -top-4 -right-4 w-24 h-24 bg-slate-200/50 rounded-full animate-pulse'></div>
            <div className='absolute -bottom-6 -left-6 w-32 h-32 bg-slate-200/30 rounded-full'></div>
          </div>

          <div data-aos="fade-left" className='space-y-5'>
            <h2 className='text-sky-900 text-3xl font-bold font-poppins'>
              Why Choose MMOCCUL?
            </h2>
            <p className='text-slate-600 text-lg leading-relaxed font-poppins'>
              We are more than just a financial institution – we are a community dedicated to helping 
              our members achieve financial independence. With transparent processes, competitive rates, 
              and personalized service, we make banking simple and accessible for everyone.
            </p>
            <RouterLink 
              to="/about"
              data-aos="fade-up" 
              className='bg-sky-900 hover:bg-sky-800 hover:text-white py-4 px-8 text-white font-bold mt-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 inline-block border border-sky-800'
            >
              LEARN MORE
            </RouterLink>
          </div>
        </div>

        <div className='grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-6'>
          {features.map((feature, index) => (
            <div 
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className='bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-100 group hover:-translate-y-3'
            >
              <div className='relative overflow-hidden h-56'>
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className='w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent'></div>
              </div>
              <div className='p-6'>
                <h3 className='text-slate-900 text-xl font-bold mb-3 font-poppins'>{feature.title}</h3>
                <p className='text-slate-600 leading-relaxed font-poppins text-sm'>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className='mt-4 overflow-hidden rounded-xl'>
          <div className='py-5 px-6 bg-slate-900 border border-slate-700/50'>
            <div className='flex animate-marquee whitespace-nowrap'>
              <span className='text-white/90 text-lg sm:text-xl font-medium tracking-[0.2em] mx-8 uppercase'>Excellence</span>
              <span className='text-slate-600 text-lg sm:text-xl font-light mx-8'>/</span>
              <span className='text-slate-300 text-lg sm:text-xl font-medium tracking-[0.2em] mx-8 uppercase'>Integrity</span>
              <span className='text-slate-600 text-lg sm:text-xl font-light mx-8'>/</span>
              <span className='text-white/90 text-lg sm:text-xl font-medium tracking-[0.2em] mx-8 uppercase'>Trust</span>
              <span className='text-slate-600 text-lg sm:text-xl font-light mx-8'>/</span>
              <span className='text-slate-300 text-lg sm:text-xl font-medium tracking-[0.2em] mx-8 uppercase'>Reliability</span>
              <span className='text-slate-600 text-lg sm:text-xl font-light mx-8'>/</span>
              <span className='text-white/90 text-lg sm:text-xl font-medium tracking-[0.2em] mx-8 uppercase'>Innovation</span>
              <span className='text-slate-600 text-lg sm:text-xl font-light mx-8'>/</span>
              <span className='text-slate-300 text-lg sm:text-xl font-medium tracking-[0.2em] mx-8 uppercase'>Community</span>
              <span className='text-slate-600 text-lg sm:text-xl font-light mx-8'>/</span>
              <span className='text-white/90 text-lg sm:text-xl font-medium tracking-[0.2em] mx-8 uppercase'>Growth</span>
              <span className='text-slate-600 text-lg sm:text-xl font-light mx-8'>/</span>
              <span className='text-slate-300 text-lg sm:text-xl font-medium tracking-[0.2em] mx-8 uppercase'>Success</span>
              <span className='text-slate-600 text-lg sm:text-xl font-light mx-8'>/</span>
              <span className='text-white/90 text-lg sm:text-xl font-medium tracking-[0.2em] mx-8 uppercase'>Professional</span>
              <span className='text-slate-600 text-lg sm:text-xl font-light mx-8'>/</span>
              <span className='text-slate-300 text-lg sm:text-xl font-medium tracking-[0.2em] mx-8 uppercase'>Transparency</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}