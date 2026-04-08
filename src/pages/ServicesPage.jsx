import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { services } from '../export';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaChartLine as FaChartLineIcon, FaHandshake } from 'react-icons/fa';
import { MdSecurity, MdSpeed, MdSupportAgent } from 'react-icons/md';
import { Footer } from '../sections/Footer';
import { Header } from '../sections/Header';
import backgroundImage from '../assets/assets2/1774855672617.jpg';
import ctaBackground from '../assets/bg2.jpg';

export const ServicesPage = () => {   useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 200,
      once: false,
    })
  }, [])

  const serviceCategories = services;

  const whyChooseUs = [
    {
      icon: MdSecurity,
      title: 'Security First',
      description: 'Your financial security is our top priority. We employ state-of-the-art encryption and security measures to protect your information and funds.'
    },
    {
      icon: MdSpeed,
      title: 'Fast Service',
      description: 'We understand time is valuable. Our streamlined processes ensure quick approvals and fast service without compromising quality.'
    },
    {
      icon: MdSupportAgent,
      title: 'Personalized Attention',
      description: 'Every member receives personalized attention and tailored solutions. We take the time to understand your unique financial needs.'
    },
    {
      icon: FaChartLineIcon,
      title: 'Competitive Rates',
      description: 'We offer competitive interest rates and fees that help you maximize your returns and minimize your costs.'
    },
    {
      icon: FaHandshake,
      title: 'Member-Focused',
      description: 'As a cooperative, we exist to serve our members. Your success is our success, and we\'re committed to your financial well-being.'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {/* Hero Section with Enhanced Background */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black/85 to-blue-900/90"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            opacity: 0.3
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div data-aos="fade-up" className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Comprehensive{' '}
              <span className="text-blue-300">Financial Services</span>
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed drop-shadow-md">
              Discover our wide range of financial solutions designed to help you achieve your goals, 
              grow your business, and secure your financial future. At MMOCCUL, we're committed to 
              providing exceptional service and personalized solutions for every member.
            </p>
          </div>
        </div>
      </section>

      {/* Service Categories with Images */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {serviceCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-20">
              <div data-aos="fade-up" className="text-center mb-16">
                <div className={`inline-flex items-center gap-3 ${category.bgColor} border ${category.borderColor} rounded-full px-6 py-3 mb-6`}>
                  <category.icon className={`text-2xl ${category.textColor}`} />
                  <span className={`text-sm font-semibold ${category.textColor} uppercase tracking-wide`}>
                    {category.category}
                  </span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  {category.category} Solutions
                </h2>
              </div>

              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <div 
                    key={service.id}
                    data-aos="fade-up"
                    data-aos-delay={serviceIndex * 100}
                    className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100"
                  >
                    {/* Service Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent`}></div>
                      <div className="absolute bottom-4 left-4">
                        <div className={`w-10 h-10 ${category.bgColor} border ${category.borderColor} rounded-lg flex items-center justify-center backdrop-blur-sm`}>
                          <service.icon className={`text-lg ${category.textColor}`} />
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                        <div className="text-right">
                          <div className="text-xs text-gray-500 uppercase tracking-wide">Duration</div>
                          <div className="text-sm font-semibold text-gray-700">{service.duration}</div>
                        </div>
                      </div>
                      
                      <p className={`${category.textColor} font-medium mb-3 text-sm`}>{service.subtitle}</p>
                      
                      <p className="text-gray-600 text-sm leading-relaxed mb-5 line-clamp-3">
                        {service.description}
                      </p>

                      <div className="grid grid-cols-2 gap-3 mb-5">
                        <div>
                          <span className="text-xs text-gray-500 uppercase tracking-wide">Rate</span>
                          <p className="text-sm font-semibold text-gray-700">{service.rate}</p>
                        </div>
                        <div>
                          <span className="text-xs text-gray-500 uppercase tracking-wide">Key Features</span>
                          <ul className="text-xs text-gray-600 space-y-1">
                            {service.features.slice(0, 2).map((feature, index) => (
                              <li key={index} className="flex items-center">
                                <span className={`w-1.5 h-1.5 ${category.color} rounded-full mr-2`}></span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                       <div className="flex gap-3">
                         <Link 
                           to={`/services/${service.id}`} 
                           className={`flex-1 bg-gradient-to-r ${category.color} text-white py-2.5 px-4 rounded-lg font-semibold text-sm transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 text-center`}
                         >
                           Learn More
                         </Link>
                        <Link 
                          to="/contact" 
                          className={`border-2 ${category.color} text-${category.color.split('-')[1]}-600 hover:bg-gradient-to-r hover:${category.color} hover:text-white py-2.5 px-4 rounded-lg font-semibold text-sm transition-all duration-300 text-center`}
                        >
                          Apply Now
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-aos="fade-up" className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose MMOCCUL?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover what sets us apart and why thousands of members trust us with their financial needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-6">
            {whyChooseUs.map((item, index) => (
              <div 
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 group border border-gray-100"
              >
                <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-300 shadow-md">
                  <item.icon className="text-white text-xl" />
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action with Background Image */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${ctaBackground})`
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-blue-900/90 to-purple-900/95"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div data-aos="fade-up">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-white/90 leading-relaxed text-center max-w-3xl mx-auto mb-10 drop-shadow-md">
              Our dedicated team of financial experts is ready to help you find the perfect solution for your needs. 
              Whether you're looking to save, borrow, or grow your business, we're here to support you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-10 rounded-lg text-lg transition-all duration-300 shadow-2xl hover:shadow-white/50 transform hover:-translate-y-1 text-center"
              >
                Contact Us Today
              </Link>
              <Link 
                to="/branches" 
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-4 px-10 rounded-lg text-lg transition-all duration-300 transform hover:-translate-y-1 backdrop-blur-sm text-center"
              >
                Visit a Branch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}