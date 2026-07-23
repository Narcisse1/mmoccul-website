import React from 'react'
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaArrowRight,
} from 'react-icons/fa'

// Import your image
import contactImg from '../assets/assets3/contact.png'

export const ContactSection = () => {
  return (
    <section className='w-full bg-[#f5f7fb] py-12 px-6 lg:px-8 overflow-hidden'>
      <div className='max-w-7xl mx-auto'>
        <div className='relative bg-white rounded-[28px] overflow-hidden shadow-[0_14px_56px_rgba(15,23,42,0.07)] border border-slate-200'>
          {/* Background Image */}
          <div className='absolute inset-0 bg-center bg-cover' 
               style={{ backgroundImage: `url(${contactImg})` }}></div>
          {/* Overlay for better text readability - made more opaque for better contrast */}
          <div className='absolute inset-0 bg-black/40'></div>
          
          <div className='grid lg:grid-cols-2 items-center gap-9 px-6 lg:px-10 py-10 relative z-10'>
            {/* LEFT CONTENT - TEXT */}
            <div className='lg:w-2/3'> {/* Expanded toward center */}
              {/* Small Tag */}
              <div className='inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-3.5 py-1.5 mb-3'>
                <span className='w-2 h-2 bg-[#2436ff] rounded-full'></span>
                <span className='text-[#2436ff] text-xs uppercase tracking-[0.25em] font-semibold'>
                  Contact MMOCCUL
                </span>
              </div>

              {/* Heading */}
              <h2 className='text-white text-[32px] lg:text-[42px] font-extrabold leading-tight mb-4 text-shadow-md'>
                We’re Always <br />
                Here To Help
              </h2>

              {/* Text */}
              <p className='text-white/95 text-lg leading-relaxed max-w-xl mb-6 font-medium'>
                Get instant assistance for all your banking needs. Our dedicated support team is ready to help you with account inquiries, transactions, and personalized financial guidance.
              </p>

              {/* Contact Buttons */}
              <div className='flex flex-col gap-3 max-w-xl'>
                {/* CALL */}
                <a
                  href='tel:+237670020630'
                  className='group flex items-center justify-between bg-[#2436ff] hover:bg-[#1d2ee6] text-white rounded-lg px-4.5 py-3 transition-all duration-300 shadow-lg hover:shadow-[0_6px_16px_rgba(36,54,255,0.2)]'
                >
                  <div className='flex items-center gap-3'>
                    <div className='w-10 h-10 rounded bg-white/20 flex items-center justify-center'>
                      <FaPhoneAlt className='text-white' />
                    </div>
                    <div>
                      <p className='text-xs uppercase tracking-[0.2em] text-blue-100 mb-0'>
                        Call Us
                      </p>
                    </div>
                  </div>
                  <FaArrowRight className='group-hover:translate-x-0.5 transition-transform duration-300 text-white' />
                </a>

                {/* WHATSAPP */}
                <a
                  href='https://wa.me/237680485488'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='group flex items-center justify-between bg-[#0f172a] hover:bg-[#111c33] text-white rounded-lg px-4.5 py-3 transition-all duration-300 shadow-lg hover:shadow-[0_6px_16px_rgba(15,23,42,0.15)]'
                >
                  <div className='flex items-center gap-3'>
                    <div className='w-10 h-10 rounded bg-white/15 flex items-center justify-center'>
                      <FaWhatsapp className='text-white' />
                    </div>
                    <div>
                      <p className='text-xs uppercase tracking-[0.2em] text-gray-400 mb-0'>
                        WhatsApp
                      </p>
                    </div>
                  </div>
                  <FaArrowRight className='group-hover:translate-x-0.5 transition-transform duration-300 text-white' />
                </a>

                {/* EMAIL */}
                <a
                  href='mailto:info@mmoccul.com'
                  className='group flex items-center justify-between bg-slate-100 hover:bg-slate-200 text-slate-900 rounded-lg px-4.5 py-3 transition-all duration-300 border border-slate-200'
                >
                  <div className='flex items-center gap-3'>
                    <div className='w-10 h-10 rounded bg-white flex items-center justify-center shadow-sm'>
                      <FaEnvelope className='text-[#2436ff]' />
                    </div>
                    <div>
                      <p className='text-xs uppercase tracking-[0.2em] text-slate-500 mb-0'>
                        Email Address
                      </p>
                    </div>
                  </div>
                  <FaArrowRight className='group-hover:translate-x-0.5 transition-transform duration-300 text-[#2436ff]' />
                </a>
              </div>
            </div>

            {/* RIGHT SIDE - CURVED DESIGN ELEMENT */}
            <div className='hidden lg:block lg:w-1/3 relative'>
              {/* Curved background shape */}
              <div className='absolute inset-0 bg-blue-50/12'></div>
              {/* Additional decorative elements */}
              <div className='absolute top-[-25px] right-[-25px] w-[120px] h-[120px] bg-blue-100/8 blur-[50px] rounded-full'></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}