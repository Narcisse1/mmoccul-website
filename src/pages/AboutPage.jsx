import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { FaBuilding, FaUsers, FaHandshake, FaChartLine, FaShieldAlt, FaGlobe, FaMoneyBillWave, FaAward, FaClock, FaHandHoldingHeart, FaCheckCircle, FaArrowRight, FaQuoteLeft, FaLightbulb, FaRocket, FaHeart, FaStar, FaUsersCog, FaLaptopCode, FaGraduationCap, FaTree, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { Link as RouterLink } from 'react-router-dom'
import { Header } from '../sections/Header'
import { Footer } from '../sections/Footer'
import aboutImg from '../assets/about.jpg'
import bg2 from '../assets/bg2.jpg'
import bg3 from '../assets/bg3.jpg'
import heroBg from '../assets/hero_bg.jpg'
import partnerImg from '../assets/partner img.jpg'
import slide1 from '../assets/Slide1.png'
import slide2 from '../assets/Slide2.png'
import slide3 from '../assets/Slide3.png'
import slide4 from '../assets/Slide4.png'
import slide5 from '../assets/Slide5.png'
import slide6 from '../assets/Slide6.png'
import project1 from '../assets/project1.jpg'
import project2 from '../assets/project2.jpg'
import asset1 from '../assets/assets2/1774855672518.jpg'
import asset2 from '../assets/assets2/1774855672572.jpg'
import asset3 from '../assets/assets2/1774855672617.jpg'
import asset4 from '../assets/assets2/1774855672659.jpg'
import asset5 from '../assets/assets2/1774855672707.jpg'
import asset6 from '../assets/assets2/1774855672751.jpg'
import asset7 from '../assets/assets2/1774855672791.jpg'
import asset8 from '../assets/assets2/1774855672833.jpg'
import asset9 from '../assets/assets2/1774855672879.jpg'
import asset10 from '../assets/assets2/1774855672919.jpg'
import asset11 from '../assets/assets2/1774855672961.jpg'
import asset12 from '../assets/assets2/1774855673008.jpg'
import asset13 from '../assets/assets2/1774855673052.jpg'
import asset14 from '../assets/assets2/1774855673095.jpg'
import asset15 from '../assets/assets2/1774855673135.jpg'
import asset16 from '../assets/assets2/1774855673183.jpg'

// Use assets2 images for backgrounds
const heroBgAsset = asset1;
const parallaxBgAsset = asset2;
const achievementsBgAsset = asset3;
const whyChooseBgAsset = asset4;

export const AboutPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 200,
      once: false,
    })
  }, [])

  const historyMilestones = [
    {
      year: '2015',
      title: 'Foundation',
      description: 'MMOCCUL was established with a vision to provide accessible financial services to the community, starting with just 50 founding members.'
    },
    {
      year: '2016',
      title: 'First Branch',
      description: 'Opened our first branch in Yaounde, serving over 1,000 members within the first year and establishing our presence in the financial sector.'
    },
    {
      year: '2019',
      title: 'Digital Transformation',
      description: 'Launched our mobile banking platform, revolutionizing how members access their accounts and bringing banking to their fingertips.'
    },
    {
      year: '2021',
      title: '10,000 Members',
      description: 'Reached a milestone of 10,000 satisfied members across Cameroon, becoming one of the fastest-growing financial cooperatives.'
    },
    {
      year: '2024',
      title: 'National Expansion',
      description: 'Expanded to 10 branches nationwide, bringing financial services to more communities and rural areas previously underserved.'
    },
    {
      year: '2025',
      title: 'Innovation Hub',
      description: 'Launched our Innovation Lab to develop cutting-edge financial products tailored to the unique needs of Cameroonian communities.'
    }
  ]

  const values = [
    {
      icon: <FaHandshake className="text-4xl" />,
      title: "Integrity",
      description: "We conduct all our business with honesty, transparency, and ethical practices. Every decision we make is guided by our commitment to doing what's right for our members."
    },
    {
      icon: <FaUsers className="text-4xl" />,
      title: "Community Focus",
      description: "We are committed to the economic development and well-being of our members and communities. Your success is our success."
    },
    {
      icon: <FaChartLine className="text-4xl" />,
      title: "Excellence",
      description: "We strive for excellence in all our products, services, and member interactions. We continuously raise the bar for quality and service."
    },
    {
      icon: <FaShieldAlt className="text-4xl" />,
      title: "Security",
      description: "We prioritize the safety and security of our members' financial information and assets with state-of-the-art protection measures."
    },
    {
      icon: <FaHandHoldingHeart className="text-4xl" />,
      title: "Member Service",
      description: "We are dedicated to providing exceptional service that exceeds our members' expectations. Your satisfaction is our top priority."
    },
    {
      icon: <FaGlobe className="text-4xl" />,
      title: "Innovation",
      description: "We embrace innovation to deliver modern, convenient banking solutions that meet the evolving needs of our tech-savvy members."
    }
  ]

  const achievements = [
    { number: "14K+", label: "Active Members", icon: <FaUsers /> },
    { number: "10+", label: "Service Locations", icon: <FaBuilding /> },
    { number: "99.9%", label: "Customer Satisfaction", icon: <FaHeart /> },
    { number: "10+", label: "Years of Service", icon: <FaClock /> },
    { number: "500M+", label: "Loans Disbursed (FCFA)", icon: <FaMoneyBillWave /> },
    { number: "100%+", label: "Growth Rate", icon: <FaChartLine /> }
  ]

  const galleryImages = [
    asset1, asset2, asset3, asset4, asset5, asset6, 
    asset7, asset8, asset9, asset10, asset11, asset12,
    asset13, asset14, asset15, asset16
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Add padding-top to account for fixed header */}
      <div className="pt-20">
        {/* Hero Section with Enhanced Visual Design and Background Image */}
        <section className="relative py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img src={heroBgAsset} alt="MMOCCUL Office" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-slate-900/95"></div>
          </div>
          
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                  <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          {/* Floating Particles */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-themegreen rounded-full animate-pulse"></div>
            <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-themegreen rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
            <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <div data-aos="fade-up">
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-white/20">
                <span className="w-2 h-2 bg-themegreen rounded-full animate-pulse"></span>
                <span className="text-white/90 text-sm font-medium tracking-wide">ESTABLISHED 2015</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-themegreen to-cyan-400">MMOCCUL</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed font-light">
                Building a brighter financial future for Cameroon, one member at a time
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
                <RouterLink 
                  to="/create-account"
                  className="inline-flex items-center justify-center gap-2 bg-themegreen hover:bg-cyan-500 text-white py-4 px-8 text-lg font-semibold rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,164,219,0.5)] hover:scale-105 group"
                >
                  Become a Member
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </RouterLink>
                <RouterLink 
                  to="/branches"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-themegreen hover:bg-themegreen/10 py-4 px-8 text-white font-semibold text-lg rounded-full transition-all duration-300 backdrop-blur-sm"
                >
                  Find a Branch
                </RouterLink>
                <RouterLink 
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-themegreen hover:bg-themegreen/10 py-4 px-8 text-white font-semibold text-lg rounded-full transition-all duration-300 backdrop-blur-sm"
                >
                  Contact Us
                </RouterLink>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-white/50 rounded-full animate-pulse"></div>
            </div>
          </div>
        </section>

        {/* Mission & Vision with Enhanced Cards */}
        <section className="py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <div data-aos="fade-up" className="inline-block px-6 py-2 bg-themegreen/10 border border-themegreen/30 rounded-full mb-6">
                <span className="text-themegreen text-sm font-bold tracking-[0.2em] uppercase">Our Purpose</span>
              </div>
              <h2 data-aos="fade-up" data-aos-delay="100" className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                Mission & Vision
              </h2>
              <p data-aos="fade-up" data-aos-delay="200" className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Guided by a clear purpose and driven by an ambitious vision for the future
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              <div data-aos="fade-right" className="group">
                <div className="relative h-full bg-gradient-to-br from-themegreen/5 to-emerald-600/5 rounded-3xl p-10 border border-themegreen/20 hover:border-themegreen/40 transition-all duration-500 hover:shadow-2xl hover:shadow-themegreen/10">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-themegreen/10 rounded-full blur-3xl group-hover:bg-themegreen/20 transition-all"></div>
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-themegreen to-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                      <FaRocket className="text-white text-2xl" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                      To empower individuals and communities across Cameroon by providing accessible, 
                      innovative, and reliable financial services that foster economic growth, 
                      promote financial inclusion, and improve the quality of life for all our members.
                    </p>
                    <ul className="space-y-3">
                      {[
                        "Provide accessible financial services to all",
                        "Promote financial literacy and education",
                        "Support local economic development",
                        "Foster a culture of savings and investment"
                      ].map((item, index) => (
                        <li key={index} className="flex items-center gap-3 text-gray-600">
                          <FaCheckCircle className="text-themegreen flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div data-aos="fade-left" className="group">
                <div className="relative h-full bg-gradient-to-br from-blue-600/5 to-indigo-600/5 rounded-3xl p-10 border border-blue-600/20 hover:border-blue-600/40 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-600/10">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl group-hover:bg-blue-600/20 transition-all"></div>
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                      <FaLightbulb className="text-white text-2xl" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Vision</h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                      To be the leading financial cooperative in Cameroon, recognized for excellence 
                      in member service, innovation in financial solutions, and commitment to 
                      sustainable community development.
                    </p>
                    <ul className="space-y-3">
                      {[
                        "Become the most trusted financial partner",
                        "Lead in digital financial innovation",
                        "Expand access to underserved communities",
                        "Set the standard for cooperative excellence"
                      ].map((item, index) => (
                        <li key={index} className="flex items-center gap-3 text-gray-600">
                          <FaCheckCircle className="text-blue-600 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section with Image */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div data-aos="fade-right">
                <div className="inline-block px-6 py-2 bg-themegreen/10 border border-themegreen/30 rounded-full mb-6">
                  <span className="text-themegreen text-sm font-bold tracking-[0.2em] uppercase">Our Story</span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-8 leading-tight">
                  A Legacy of <span className="text-themegreen">Trust</span> and <span className="text-themegreen">Service</span>
                </h2>
                <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                  <p>
                    Founded in 2015, MMOCCUL began with a simple yet powerful idea: that every Cameroonian 
                    deserves access to quality financial services. What started as a small community initiative 
                    has grown into one of the country's most respected financial cooperatives.
                  </p>
                  <p>
                    Our journey has been marked by continuous innovation, unwavering commitment to our members, 
                    and a deep understanding of the unique financial needs of Cameroonian communities. From our 
                    first branch in Douala to our current network of 50+ service locations, we have remained 
                    true to our founding principles.
                  </p>
                  <p>
                    Today, we serve over 14,000 active members, having disbursed more than 500 million FCFA 
                    in loans and maintaining a 99.9% customer satisfaction rate. But numbers only tell part 
                    of our story – the real measure of our success is the positive impact we have on the 
                    lives of our members and their families.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-6 mt-10">
                  <div className="bg-gradient-to-br from-themegreen/10 to-emerald-600/10 rounded-2xl p-6 border border-themegreen/20">
                    <div className="text-3xl font-bold text-themegreen mb-2">2015</div>
                    <div className="text-gray-600 text-sm">Year Founded</div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-600/10 to-indigo-600/10 rounded-2xl p-6 border border-blue-600/20">
                    <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                    <div className="text-gray-600 text-sm">Locations</div>
                  </div>
                </div>
              </div>

              <div data-aos="fade-left" className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src={aboutImg} 
                    alt="MMOCCUL Team" 
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                      <div className="flex items-center gap-4">
                        <div className="flex -space-x-4">
                          {[1,2,3,4].map((i) => (
                            <div key={i} className="w-12 h-12 rounded-full bg-gradient-to-br from-themegreen to-blue-600 border-2 border-white flex items-center justify-center text-white font-bold">
                              {i}
                            </div>
                          ))}
                        </div>
                        <div>
                          <div className="text-gray-800 font-semibold">14,000+ Members</div>
                          <div className="text-gray-500 text-sm">Trust us with their financial future</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-themegreen/20 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-600/20 rounded-full blur-2xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* History & Milestones Timeline */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <div data-aos="fade-up" className="inline-block px-6 py-2 bg-themegreen/10 border border-themegreen/30 rounded-full mb-6">
                <span className="text-themegreen text-sm font-bold tracking-[0.2em] uppercase">Our Journey</span>
              </div>
              <h2 data-aos="fade-up" data-aos-delay="100" className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                Milestones & Achievements
              </h2>
              <p data-aos="fade-up" data-aos-delay="200" className="text-xl text-gray-600 max-w-3xl mx-auto">
                A timeline of growth, innovation, and community impact
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-themegreen via-blue-600 to-themegreen h-full hidden lg:block"></div>
              
              <div className="space-y-12">
                {historyMilestones.map((milestone, index) => (
                  <div 
                    key={index} 
                    data-aos="fade-up" 
                    className={`relative flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                  >
                    {/* Content */}
                    <div className={`lg:w-5/12 ${index % 2 === 0 ? 'lg:mr-auto lg:pr-12' : 'lg:ml-auto lg:pl-12'}`}>
                      <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-themegreen hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
                        <div className="flex items-center mb-4">
                          <div className="w-14 h-14 bg-gradient-to-br from-themegreen to-emerald-600 rounded-full flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform">
                            <span className="text-white font-bold text-lg">{milestone.year}</span>
                          </div>
                          <h3 className="text-2xl font-bold text-gray-800">{milestone.title}</h3>
                        </div>
                        <p className="text-gray-600 text-lg leading-relaxed">{milestone.description}</p>
                      </div>
                    </div>

                    {/* Center dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-themegreen rounded-full border-4 border-white shadow-lg hidden lg:block"></div>

                    {/* Spacer for opposite side */}
                    <div className="lg:w-5/12 hidden lg:block"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Core Values with Enhanced Cards */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <div data-aos="fade-up" className="inline-block px-6 py-2 bg-themegreen/10 border border-themegreen/30 rounded-full mb-6">
                <span className="text-themegreen text-sm font-bold tracking-[0.2em] uppercase">What Drives Us</span>
              </div>
              <h2 data-aos="fade-up" data-aos-delay="100" className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                Our Core Values
              </h2>
              <p data-aos="fade-up" data-aos-delay="200" className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div 
                  key={index} 
                  data-aos="fade-up" 
                  data-aos-delay={index * 100} 
                  className="group bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-themegreen/50 hover:-translate-y-2"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-themegreen/20 to-themegreen/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <span className="text-themegreen">{value.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-themegreen transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* Parallax Image Break Section */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img src={parallaxBgAsset} alt="Professional Office" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-slate-900/80"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <div data-aos="fade-up">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Excellence in Every Service
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                We combine cutting-edge technology with personalized service to deliver financial solutions that truly make a difference in people's lives.
              </p>
              <div className="flex flex-wrap justify-center gap-8 mt-12">
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-full border border-white/20">
                  <FaStar className="text-themegreen text-xl" />
                  <span className="text-white font-semibold">24/7 Support</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-full border border-white/20">
                  <FaShieldAlt className="text-themegreen text-xl" />
                  <span className="text-white font-semibold">Secure Transactions</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-full border border-white/20">
                  <FaGlobe className="text-themegreen text-xl" />
                  <span className="text-white font-semibold">Nationwide Access</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Community Impact */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div data-aos="fade-right">
                <div className="inline-block px-6 py-2 bg-themegreen/10 border border-themegreen/30 rounded-full mb-6">
                  <span className="text-themegreen text-sm font-bold tracking-[0.2em] uppercase">Community</span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-8 leading-tight">
                  Making a <span className="text-themegreen">Difference</span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  At MMOCCUL, we believe in giving back to the communities we serve. Our commitment 
                  extends beyond financial services to include educational programs, youth empowerment 
                  initiatives, and support for local businesses.
                </p>
                
                <div className="space-y-4 mb-8">
                  {[
                    "Financial literacy workshops for schools and communities",
                    "Support for small and medium-sized enterprises",
                    "Scholarship programs for deserving students",
                    "Partnerships with local NGOs and community organizations"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-6 h-6 bg-themegreen rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <FaCheckCircle className="text-white text-sm" />
                      </div>
                      <span className="text-gray-600 text-lg">{item}</span>
                    </div>
                  ))}
                </div>

                <RouterLink 
                  to="/contact"
                  className="inline-flex items-center gap-2 text-themegreen font-semibold hover:gap-4 transition-all duration-300 group"
                >
                  Learn more about our community programs
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </RouterLink>
              </div>

              <div data-aos="fade-left" className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-themegreen/10 to-emerald-600/10 rounded-2xl p-8 border border-themegreen/20 hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <div className="text-4xl font-bold text-themegreen mb-2">500+</div>
                  <div className="text-gray-600 font-semibold mb-2">Workshops Conducted</div>
                  <p className="text-gray-500 text-sm">Empowering communities through financial education</p>
                </div>
                <div className="bg-gradient-to-br from-blue-600/10 to-indigo-600/10 rounded-2xl p-8 border border-blue-600/20 hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
                  <div className="text-gray-600 font-semibold mb-2">Scholarships Awarded</div>
                  <p className="text-gray-500 text-sm">Supporting the next generation of leaders</p>
                </div>
                <div className="bg-gradient-to-br from-purple-600/10 to-purple-800/10 rounded-2xl p-8 border border-purple-600/20 hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <div className="text-4xl font-bold text-purple-600 mb-2">200+</div>
                  <div className="text-gray-600 font-semibold mb-2">Businesses Supported</div>
                  <p className="text-gray-500 text-sm">Fueling local entrepreneurship</p>
                </div>
                <div className="bg-gradient-to-br from-orange-600/10 to-orange-800/10 rounded-2xl p-8 border border-orange-600/20 hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <div className="text-4xl font-bold text-orange-600 mb-2">50+</div>
                  <div className="text-gray-600 font-semibold mb-2">Community Partners</div>
                  <p className="text-gray-500 text-sm">Building strong community networks</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section with Background */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0">
            <img src={whyChooseBgAsset} alt="Professional Banking" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/95"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <div data-aos="fade-up" className="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6">
                <span className="text-themegreen text-sm font-bold tracking-[0.2em] uppercase">Why MMOCCUL</span>
              </div>
              <h2 data-aos="fade-up" data-aos-delay="100" className="text-4xl lg:text-5xl font-bold text-white mb-4">
                Why Choose Us
              </h2>
              <p data-aos="fade-up" data-aos-delay="200" className="text-xl text-white/70 max-w-3xl mx-auto">
                Experience the difference of member-focused banking
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: <FaUsersCog />, title: "Member-Owned", desc: "You're not just a customer – you're an owner with a voice in our direction." },
                { icon: <FaLaptopCode />, title: "Digital-First", desc: "Modern banking solutions accessible anytime, anywhere." },
                { icon: <FaGraduationCap />, title: "Financial Education", desc: "Free workshops and resources to improve your financial literacy." },
                { icon: <FaTree />, title: "Community Impact", desc: "Profits reinvested in local development and member benefits." }
              ].map((item, index) => (
                <div 
                  key={index}
                  data-aos="fade-up" 
                  data-aos-delay={index * 100}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-themegreen/50 transition-all duration-300 group hover:-translate-y-2"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-themegreen/20 to-themegreen/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <span className="text-themegreen text-2xl">{item.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-white/60 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* Testimonial Quote with Photo */}
        <section className="py-24 bg-gradient-to-br from-themegreen/5 to-blue-600/5">
          <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
            <div data-aos="fade-up">
              <FaQuoteLeft className="text-5xl text-themegreen/30 mx-auto mb-8" />
              <blockquote className="text-2xl lg:text-3xl font-medium text-gray-800 leading-relaxed mb-8">
                "At MMOCCUL, we don't just manage money – we build relationships, empower dreams, 
                and create lasting positive change in the lives of our members and their communities."
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-themegreen shadow-xl">
                  <img src={asset1} alt="Dr. Jean-Pierre Mbarga" className="w-full h-full object-cover object-top" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-gray-800">Mr. Ngezem Skyly</div>
                  <div className="text-themegreen">General Manager, MMOCCUL</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications & Awards */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <div data-aos="fade-up" className="inline-block px-6 py-2 bg-themegreen/10 border border-themegreen/30 rounded-full mb-6">
                <span className="text-themegreen text-sm font-bold tracking-[0.2em] uppercase">Recognition</span>
              </div>
              <h2 data-aos="fade-up" data-aos-delay="100" className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                Awards & Certifications
              </h2>
              <p data-aos="fade-up" data-aos-delay="200" className="text-xl text-gray-600 max-w-3xl mx-auto">
                Industry recognition of our commitment to excellence
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Best Microfinance Institution", year: "2024", org: "Cameroon Finance Awards" },
                { title: "Digital Innovation Award", year: "2023", org: "African Banking Awards" },
                { title: "Community Impact Award", year: "2023", org: "Cooperative Excellence" },
                { title: "ISO 9001 Certified", year: "2026", org: "Quality Management" }
              ].map((award, index) => (
                <div 
                  key={index}
                  data-aos="fade-up" 
                  data-aos-delay={index * 100}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-themegreen/20 to-blue-600/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <FaAward className="text-2xl text-themegreen" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{award.title}</h3>
                  <div className="text-themegreen font-semibold mb-1">{award.year}</div>
                  <div className="text-gray-500 text-sm">{award.org}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action with Background Image */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0">
            <img src={asset5} alt="Community" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-blue-900/85 to-slate-900/90"></div>
          </div>
          
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-themegreen rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-4xl mx-auto text-center px-6 lg:px-8 relative z-10">
            <div data-aos="fade-up">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Join Our Growing Community
              </h2>
              <p className="text-xl text-white/80 mb-10 leading-relaxed max-w-2xl mx-auto">
                Become part of a financial cooperative that truly cares about your success. 
                With MMOCCUL, you're not just a customer – you're a valued member of our community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <RouterLink 
                  to="/create-account"
                  className="inline-flex items-center justify-center gap-2 bg-themegreen hover:bg-cyan-500 text-white py-4 px-8 text-lg font-semibold rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,164,219,0.5)] hover:scale-105 group"
                >
                  Create Account Today
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </RouterLink>
                <RouterLink 
                  to="/branches"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-themegreen hover:bg-themegreen/10 py-4 px-8 text-white font-semibold text-lg rounded-full transition-all duration-300 backdrop-blur-sm"
                >
                  Find a Branch
                </RouterLink>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  )
}