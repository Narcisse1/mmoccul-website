import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import { Link as RouterLink } from 'react-router-dom'


import { Header } from '../sections/Header'
import { Footer } from '../sections/Footer'

import aboutImg from '../assets/about.jpg'
import asset1 from '../assets/assets2/1774855672518.jpg'
import asset2 from '../assets/assets3/about_us.png'
import asset3 from '../assets/assets3/interior.png'
import asset4 from '../assets/assets3/together.png'



export const AboutPage = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    })
  }, [])

  return (
    <div className='bg-[#f5f9ff] min-h-screen overflow-hidden'>

      <Header />

      {/* ================= HERO SECTION ================= */}

      <section className='relative w-full overflow-hidden pt-8 lg:pt-12 pb-24 lg:pb-28'>

        {/* BACKGROUND IMAGE */}
        <div
          className='absolute inset-0 bg-cover bg-center scale-105'
          style={{
            backgroundImage: `url(${asset1})`,
          }}
        />

        {/* DARK OVERLAY */}
        <div className='absolute inset-0 bg-[#071120]/40'></div>

        {/* BLUE GRADIENT */}
        <div className='absolute inset-0 bg-gradient-to-r from-[#081120]/50 via-[#081120]/35 to-[#0f172a]/30'></div>

        {/* LIGHT EFFECTS */}
        <div className='absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-blue-500/20 blur-[120px] rounded-full'></div>

        <div className='absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-cyan-400/20 blur-[120px] rounded-full'></div>

        {/* CONTENT */}
        <div className='relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center'>

           {/* SMALL LABEL */}
          <div className='inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 px-5 py-2 rounded-full mb-6'>
            <div className='w-2 h-2 rounded-full bg-[#4da3ff] animate-pulse'></div>
            <span className='text-white/80 uppercase tracking-[0.25em] text-[11px] font-semibold'>
              About MMOCCUL
            </span>
          </div>

           {/* TITLE */}
          <h1
            className='text-white text-3xl md:text-4xl lg:text-5xl font-semibold leading-relaxed mb-4'
            style={{
              fontFamily: "'Poppins', sans-serif",
              letterSpacing: '-0.02em',
            }}
          >
            Your Trusted Financial Partner
          </h1>

        </div>

        {/* CURVED BOTTOM */}
        <div className='absolute bottom-0 left-0 w-full overflow-hidden leading-[0]'>
          <svg
            className='relative block w-[calc(100%+1.3px)] h-[80px]'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 1440 320'
            preserveAspectRatio='none'
          >
            <path
              fill='#f5f9ff'
              d='M0,256L80,245.3C160,235,320,213,480,208C640,203,800,213,960,224C1120,235,1280,245,1360,250.7L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z'
            ></path>
          </svg>
        </div>

      </section>

      {/* ===================== ELEGANT ABOUT SECTION ===================== */}

      <section className='relative py-28 overflow-hidden'>

        {/* SOFT BACKGROUND EFFECTS */}
        <div className='absolute top-0 left-0 w-[500px] h-[500px] bg-blue-400/10 blur-[140px] rounded-full'></div>

        <div className='absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-300/20 blur-[140px] rounded-full'></div>

        <div className='max-w-7xl mx-auto px-6 lg:px-8 relative z-10'>

          {/* ===================== TOP SECTION ===================== */}

          <div className='grid lg:grid-cols-2 gap-16 items-start mb-28'>

            {/* LEFT CONTENT */}
            <div data-aos='fade-right'>

              <div className='mb-8'>
                <span
                  className='uppercase tracking-[0.35em] text-[12px] text-[#1e88e5] font-semibold'
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  About MMOCCUL
                </span>
              </div>

              <h2
                className='text-[2.8rem] lg:text-[4rem] leading-[1.15] text-[#0f4c81] mb-10 font-medium'
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  letterSpacing: '-0.03em',
                }}
              >
                Empowering Financial
                <span className='block'>
                  Growth With Trust,
                </span>

                <span className='block text-[#1e88e5]'>
                  Innovation & Excellence.
                </span>
              </h2>

              <div className='space-y-7'>

                <p
                  className='text-[17px] leading-[2] text-[#5f6f81]'
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  MMOCCUL (Mmockmbie Credit Union Cooperative Ltd) is a fully accredited
                  Category 1 Microfinance Institution incorporated in 2016 and recognized
                  for delivering trusted, member-focused financial services across Cameroon.
                </p>

                <p
                  className='text-[17px] leading-[2] text-[#5f6f81]'
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Built on integrity and innovation, MMOCCUL has become one of the
                  fastest-growing and most digital-friendly financial cooperatives,
                  empowering thousands of individuals, families, and businesses with
                  secure banking solutions and sustainable financial opportunities.
                </p>

              </div>

              {/* SIGNATURE */}
              <div className='mt-14 flex items-center gap-8'>

                <div>

                  <div
                    className='text-[#1e88e5] text-lg mb-2'
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    Trusted Financial Institution
                  </div>

                  <div
                    className='text-[#0f4c81] text-3xl'
                    style={{ fontFamily: "'Great Vibes', cursive" }}
                  >
                    MMOCCUL
                  </div>

                </div>

              </div>

            </div>

            {/* RIGHT IMAGE */}
            <div
              data-aos='fade-left'
              className='relative flex justify-center lg:justify-end'
            >

              <div className='relative'>

                <div className='bg-white p-4 shadow-[0_20px_60px_rgba(0,0,0,0.08)] rounded-sm'>

                  <img
                    src={asset2}
                    alt='MMOCCUL Banking'
                    className='w-full lg:w-[420px] h-[560px] object-cover'
                  />

                </div>

                {/* FLOATING CARD */}
                <div className='absolute -bottom-10 -left-10 bg-[#eef5ff] px-8 py-6 shadow-xl border border-[#d7e8ff]'>

                  <div
                    className='text-4xl font-semibold text-[#0f4c81] mb-2'
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    15,000+
                  </div>

                  <div
                    className='text-[#5f6f81] uppercase tracking-[0.18em] text-[11px]'
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    Active Members
                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* ===================== SERVICES STYLE SECTION ===================== */}

           <div className='space-y-12'>

            {/* BLOCK 1 */}
            <div className='grid lg:grid-cols-2 gap-16 items-center'>

              {/* IMAGE */}
              <div data-aos='fade-right'>

                <div className='bg-white p-4 shadow-[0_15px_40px_rgba(0,0,0,0.06)]'>

                  <img
                    src={asset3}
                    alt='Digital Banking'
                    className='w-full h-[320px] object-cover'
                  />

                </div>

              </div>

              {/* CONTENT */}
              <div
                data-aos='fade-left'
                className='bg-[#eef5ff] p-12'
              >

                <h3
                  className='text-5xl text-[#0f4c81] mb-6 leading-tight'
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                  }}
                >
                  Digital Banking
                </h3>

                <p
                  className='text-[#5f6f81] leading-[2] text-[16px] mb-8'
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Experience modern financial convenience with our secure and innovative
                  mobile and online banking platforms designed to simplify everyday banking.
                </p>

                <RouterLink
                  to='/services'
                  className='text-[#1e88e5] uppercase tracking-[0.15em] text-[12px] font-semibold border-b border-[#1e88e5] pb-1 hover:opacity-70 transition'
                >
                  Explore Services
                </RouterLink>

              </div>

            </div>

            {/* BLOCK 2 */}
            <div className='grid lg:grid-cols-2 gap-16 items-center'>

              {/* CONTENT */}
              <div
                data-aos='fade-right'
                className='bg-[#eef5ff] p-12 order-2 lg:order-1'
              >

                <h3
                  className='text-5xl text-[#0f4c81] mb-6 leading-tight'
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                  }}
                >
                  Savings & Loans
                </h3>

                <p
                  className='text-[#5f6f81] leading-[2] text-[16px] mb-8'
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Grow your finances confidently through competitive savings plans,
                  investment opportunities, and flexible loan packages tailored to your goals.
                </p>

                <RouterLink
                  to='/loans'
                  className='text-[#1e88e5] uppercase tracking-[0.15em] text-[12px] font-semibold border-b border-[#1e88e5] pb-1 hover:opacity-70 transition'
                >
                  Learn More
                </RouterLink>

              </div>

              {/* IMAGE */}
              <div
                data-aos='fade-left'
                className='order-1 lg:order-2'
              >

                <div className='bg-white p-4 shadow-[0_15px_40px_rgba(0,0,0,0.06)]'>

                  <img
                    src={aboutImg}
                    alt='Savings'
                    className='w-full h-[320px] object-cover'
                  />

                </div>

              </div>

            </div>

          </div>

           {/* ===================== PROCESS SECTION ===================== */}
           <div className='mt-12'>

             <div className='grid lg:grid-cols-[320px,1fr] gap-12 items-center mb-8'>

              {/* LEFT */}
              <div
                data-aos='fade-right'
                className='bg-[#eef5ff] p-10'
              >

                <div
                  className='text-5xl leading-tight text-[#0f4c81] mb-5'
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                  }}
                >
                  Our Banking
                  <span className='block'>
                    Process
                  </span>
                </div>

                <p
                  className='text-[#5f6f81] leading-[2]'
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Delivering modern, secure and people-focused financial experiences
                  tailored to your success.
                </p>

              </div>

              {/* IMAGE */}
              <div data-aos='fade-left'>

                <div className='bg-white p-4 shadow-[0_15px_40px_rgba(0,0,0,0.06)]'>

                  <img
                    src={asset4}
                    alt='MMOCCUL Process'
                    className='w-full h-[240px] object-cover'
                  />

                </div>

              </div>

            </div>

             {/* PROCESS CARDS */}
             <div className='grid md:grid-cols-3 gap-4'>

              {[
                {
                  title: 'Consultation',
                  desc: 'Understanding your financial goals and helping you choose the right banking solutions.',
                },
                {
                  title: 'Coordination',
                  desc: 'Providing seamless support, account management and digital financial assistance.',
                },
                {
                  title: 'Execution',
                  desc: 'Delivering secure transactions, financial growth and reliable banking experiences.',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  data-aos='fade-up'
                  data-aos-delay={index * 100}
                >

                  <h3
                    className='text-4xl text-[#0f4c81] mb-5'
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    className='text-[#5f6f81] leading-[2]'
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {item.desc}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </div>

      </section>

      {/* ================= CTA SECTION ================= */}
      <section className='relative py-12 overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 z-10'>
        <div className='absolute inset-0 opacity-10'>
          <div className='absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[150px]'></div>
          <div className='absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-400/5 rounded-full blur-[150px]'></div>
        </div>
        <div className='max-w-5xl mx-auto px-6 lg:px-8 text-center relative z-20'>
          <h2 className='text-4xl lg:text-6xl text-slate-900 leading-tight mb-8' style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Join Cameroon's Trusted
            <span className='block text-[#2436ff]'>
              Financial Community
            </span>
          </h2>
          <p className='text-slate-800/80 text-lg leading-[2] max-w-3xl mx-auto mb-12' style={{ fontFamily: "'Poppins', sans-serif" }}>
            Experience secure, modern and people-centered banking designed
            to help you grow financially with confidence.
          </p>
          <div className='flex flex-col sm:flex-row gap-5 justify-center'>
            <RouterLink to='/create-account' className='bg-[#2436ff] hover:bg-[#1928d9] text-white py-4 px-10 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105'>
              Create Account
            </RouterLink>
            <RouterLink to='/branches' className='border border-[#d6d6d6] hover:border-[#2436ff] text-[#1b1b1b] hover:text-[#2436ff] py-4 px-10 rounded-full text-lg font-semibold transition-all duration-300'>
              Find a Branch
            </RouterLink>
          </div>
        </div>
      </section>

      <Footer className='relative z-20 mt-[-40px]' />

    </div>
  )
}
