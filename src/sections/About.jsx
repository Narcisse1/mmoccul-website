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
    <div id='about' className='w-full bg-slate-50 py-4 lg:py-8'>
      <div className='max-w-7xl mx-auto px-6 lg:px-8 mb-6'>
        
        {/* Header */}
        <div className='text-center mb-6'>
          <div 
            data-aos="fade-up" 
            className='inline-block px-5 py-2.5 bg-[#2436ff] rounded-full mb-6 transition-all duration-300 hover:bg-[#1b2be0]'
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
            {typedText}
            <span className='animate-pulse text-[#2436ff]'>|</span>
          </h1>


        </div>

        {/* Main Content */}
        <div className='grid lg:grid-cols-2 gap-6 items-center mb-10'>

          {/* Image Section */}
          <div data-aos="fade-right" className='relative'>
            <div className='relative overflow-hidden rounded-3xl shadow-2xl'>
              
              <img 
                src={aboutimg} 
                alt="About MMOCCUL" 
                className='w-full h-[420px] object-cover transform hover:scale-105 transition-transform duration-500'
              />

              <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent'></div>

              {/* Floating Stats */}
              <div className='absolute bottom-6 left-6 right-6'>
                <div className='bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-xl'>
                  
                  <div className='grid grid-cols-3 gap-4'>

                    <div className='text-center'>
                      <h3 className='text-[#2436ff] text-2xl font-bold'>14K+</h3>
                      <p className='text-slate-500 text-xs uppercase tracking-wide'>
                        Members
                      </p>
                    </div>

                    <div className='text-center border-x border-slate-200'>
                      <h3 className='text-[#2436ff] text-2xl font-bold'>50+</h3>
                      <p className='text-slate-500 text-xs uppercase tracking-wide'>
                        Partners
                      </p>
                    </div>

                    <div className='text-center'>
                      <h3 className='text-[#2436ff] text-2xl font-bold'>99%</h3>
                      <p className='text-slate-500 text-xs uppercase tracking-wide'>
                        Satisfaction
                      </p>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Shapes */}
            <div className='absolute -top-4 -right-4 w-24 h-24 bg-blue-100 rounded-full blur-2xl'></div>
            <div className='absolute -bottom-6 -left-6 w-32 h-32 bg-blue-50 rounded-full blur-3xl'></div>
          </div>

          {/* Text Section */}
          <div data-aos="fade-left" className='space-y-5'>
            
            <h2 className='text-[#0e1630] text-4xl font-bold font-poppins leading-tight'>
              Why Choose MMOCCUL?
            </h2>

            <p className='text-slate-600 text-lg leading-relaxed font-poppins'>
              We are more than just a financial institution — we are a community 
              dedicated to helping our members achieve financial independence. 
              With transparent processes, competitive rates, and personalized service, 
              we make banking simple and accessible for everyone.
            </p>

            <RouterLink 
              to="/about"
              data-aos="fade-up" 
              className='inline-block bg-[#2436ff] hover:bg-[#1b2be0] py-4 px-8 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105'
            >
              Learn More
            </RouterLink>
          </div>
        </div>

        {/* Features */}
        <div className='grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12'>
          {features.map((feature, index) => (
            <div 
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className='bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 group hover:-translate-y-3'
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
                <h3 className='text-slate-900 text-xl font-bold mb-3 font-poppins'>
                  {feature.title}
                </h3>

                <p className='text-slate-600 leading-relaxed font-poppins text-sm'>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Professional Trust Section */}
        <div className='mt-10'>
          <div className='bg-white border border-slate-200 rounded-3xl shadow-lg overflow-hidden'>
            
            <div className='grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-200'>
              
              <div className='p-6 text-center hover:bg-slate-50 transition-all duration-300'>
                <h3 className='text-3xl font-bold text-[#2436ff] mb-2'>
                  14K+
                </h3>

                <p className='text-slate-600 uppercase tracking-[0.2em] text-xs font-semibold'>
                  Active Members
                </p>
              </div>

              <div className='p-6 text-center hover:bg-slate-50 transition-all duration-300'>
                <h3 className='text-3xl font-bold text-[#2436ff] mb-2'>
                  98%
                </h3>

                <p className='text-slate-600 uppercase tracking-[0.2em] text-xs font-semibold'>
                  Customer Satisfaction
                </p>
              </div>

              <div className='p-6 text-center hover:bg-slate-50 transition-all duration-300'>
                <h3 className='text-3xl font-bold text-[#2436ff] mb-2'>
                  50+
                </h3>

                <p className='text-slate-600 uppercase tracking-[0.2em] text-xs font-semibold'>
                  Trusted Partners
                </p>
              </div>

              <div className='p-6 text-center hover:bg-slate-50 transition-all duration-300'>
                <h3 className='text-3xl font-bold text-[#2436ff] mb-2'>
                  24/7
                </h3>

                <p className='text-slate-600 uppercase tracking-[0.2em] text-xs font-semibold'>
                  Member Support
                </p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  )
}