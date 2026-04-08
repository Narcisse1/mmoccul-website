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
  const fullText = "We Deliver the Best Financial Services";

  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 200, 
      once: false,
    });
  }, []);

  // Typing effect
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
    <div id='about' className='w-full bg-gradient-to-b from-gray-50 to-white py-8 lg:py-10'>
      {/* Section Header */}
      <div className='max-w-7xl mx-auto px-6 lg:px-8 mb-6'>
        <div className='text-center mb-6'>
          <div 
            data-aos="fade-up" 
            className='inline-block px-6 py-2 bg-themegreen/20 border-2 border-themegreen/50 rounded-full mb-6'
          >
            <span className='text-themegreen text-lg font-bold tracking-[0.2em] uppercase'>
              Who We Are
            </span>
          </div>
          <h1 
            data-aos="fade-up" 
            data-aos-delay="100"
            className='lg:text-5xl text-3xl font-bold capitalize leading-tight font-poppins mb-6 text-black'
          >
            {typedText}<span className='animate-pulse text-themegreen'>|</span>
          </h1>
          <p 
            data-aos="fade-up" 
            data-aos-delay="200"
            className='text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed font-poppins'
          >
            At MMOCCUL, we believe in the power of community-driven finance. Our mission is to provide world-class 
            banking solutions that empower every Cameroonian to achieve their financial dreams.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className='grid lg:grid-cols-2 gap-6 items-center mb-6'>
          {/* Image Section */}
          <div data-aos="fade-right" className='relative'>
            <div className='relative overflow-hidden rounded-2xl shadow-2xl'>
              <img 
                src={aboutimg} 
                alt="About MMOCCUL" 
                className='w-full h-[400px] object-cover transform hover:scale-105 transition-transform duration-500'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent'></div>
              <div className='absolute bottom-6 left-6 right-6'>
                <div className='bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg'>
                  <div className='flex items-center justify-between'>
                    <div className='text-center'>
                      <h3 className='text-themegreen text-2xl font-bold'>14K+</h3>
                      <p className='text-gray-600 text-sm'>Members</p>
                    </div>
                    <div className='w-px h-10 bg-gray-300'></div>
                    <div className='text-center'>
                      <h3 className='text-themegreen text-2xl font-bold'>50+</h3>
                      <p className='text-gray-600 text-sm'>Partners</p>
                    </div>
                    <div className='w-px h-10 bg-gray-300'></div>
                    <div className='text-center'>
                      <h3 className='text-themegreen text-2xl font-bold'>99%</h3>
                      <p className='text-gray-600 text-sm'>Satisfaction</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className='absolute -top-4 -right-4 w-24 h-24 bg-themegreen/20 rounded-full animate-pulse'></div>
            <div className='absolute -bottom-6 -left-6 w-32 h-32 bg-black/5 rounded-full'></div>
          </div>

          {/* Content Section */}
          <div data-aos="fade-left" className='space-y-6'>
            <h2 className='text-black text-3xl font-bold capitalize font-poppins'>
              Why Choose MMOCCUL?
            </h2>
            <p className='text-gray-600 text-lg leading-relaxed font-poppins'>
              We are more than just a financial institution – we are a community dedicated to helping 
              our members achieve financial independence. With transparent processes, competitive rates, 
              and personalized service, we make banking simple and accessible for everyone.
            </p>
            <RouterLink 
              to="/about"
              data-aos="fade-up" 
              className='bg-themegreen hover:bg-black hover:text-white py-4 px-8 text-black font-bold mt-4 rounded-full transition-all duration-300 hover:shadow-[0_0_25px_rgba(74,222,128,0.5)] hover:scale-105 inline-block'
            >
              LEARN MORE
            </RouterLink>
          </div>
        </div>

        {/* Features Grid with Images */}
        <div className='grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-6'>
          {features.map((feature, index) => (
            <div 
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className='bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 group hover:-translate-y-3'
            >
              {/* Feature Image */}
              <div className='relative overflow-hidden h-56'>
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className='w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent'></div>
              </div>
              {/* Feature Content */}
              <div className='p-6'>
                <h3 className='text-black text-xl font-bold mb-3 font-poppins'>{feature.title}</h3>
                <p className='text-gray-600 leading-relaxed font-poppins text-sm'>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Marquee Section - Professional Design */}
        <div className='mt-4 overflow-hidden rounded-lg shadow-md'>
          <div
            className='py-4 px-4 text-center bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800'
          >
            <div className='flex animate-marquee whitespace-nowrap'>
              <span className='text-themegreen text-xl font-semibold mx-8 tracking-wide uppercase'>EXCELLENCE</span>
              <span className='text-gray-300 text-xl font-semibold mx-8 tracking-wide uppercase'>INTEGRITY</span>
              <span className='text-themegreen text-xl font-semibold mx-8 tracking-wide uppercase'>TRUSTWORTHY</span>
              <span className='text-gray-300 text-xl font-semibold mx-8 tracking-wide uppercase'>RELIABILITY</span>
              <span className='text-themegreen text-xl font-semibold mx-8 tracking-wide uppercase'>INNOVATION</span>
              <span className='text-gray-300 text-xl font-semibold mx-8 tracking-wide uppercase'>COMMUNITY</span>
              <span className='text-themegreen text-xl font-semibold mx-8 tracking-wide uppercase'>GROWTH</span>
              <span className='text-gray-300 text-xl font-semibold mx-8 tracking-wide uppercase'>SUCCESS</span>
              <span className='text-themegreen text-xl font-semibold mx-8 tracking-wide uppercase'>PROFESSIONALISM</span>
              <span className='text-gray-300 text-xl font-semibold mx-8 tracking-wide uppercase'>TRANSPARENCY</span>
              <span className='text-themegreen text-xl font-semibold mx-8 tracking-wide uppercase'>LOYALTY</span>
              <span className='text-gray-300 text-xl font-semibold mx-8 tracking-wide uppercase'>COMMITMENT</span>
              <span className='text-themegreen text-xl font-semibold mx-8 tracking-wide uppercase'>DEDICATION</span>
              <span className='text-gray-300 text-xl font-semibold mx-8 tracking-wide uppercase'>SUSTAINABILITY</span>
              <span className='text-themegreen text-xl font-semibold mx-8 tracking-wide uppercase'>EMPOWERMENT</span>
              <span className='text-themegreen text-xl font-semibold mx-8 tracking-wide uppercase'>EXCELLENCE</span>
              <span className='text-gray-300 text-xl font-semibold mx-8 tracking-wide uppercase'>INTEGRITY</span>
              <span className='text-themegreen text-xl font-semibold mx-8 tracking-wide uppercase'>TRUSTWORTHY</span>
              <span className='text-gray-300 text-xl font-semibold mx-8 tracking-wide uppercase'>RELIABILITY</span>
              <span className='text-themegreen text-xl font-semibold mx-8 tracking-wide uppercase'>INNOVATION</span>
              <span className='text-gray-300 text-xl font-semibold mx-8 tracking-wide uppercase'>COMMUNITY</span>
              <span className='text-themegreen text-xl font-semibold mx-8 tracking-wide uppercase'>GROWTH</span>
              <span className='text-gray-300 text-xl font-semibold mx-8 tracking-wide uppercase'>SUCCESS</span>
              <span className='text-themegreen text-xl font-semibold mx-8 tracking-wide uppercase'>PROFESSIONALISM</span>
              <span className='text-gray-300 text-xl font-semibold mx-8 tracking-wide uppercase'>TRANSPARENCY</span>
              <span className='text-themegreen text-xl font-semibold mx-8 tracking-wide uppercase'>LOYALTY</span>
              <span className='text-gray-300 text-xl font-semibold mx-8 tracking-wide uppercase'>COMMITMENT</span>
              <span className='text-themegreen text-xl font-semibold mx-8 tracking-wide uppercase'>DEDICATION</span>
              <span className='text-gray-300 text-xl font-semibold mx-8 tracking-wide uppercase'>SUSTAINABILITY</span>
              <span className='text-themegreen text-xl font-semibold mx-8 tracking-wide uppercase'>EMPOWERMENT</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}