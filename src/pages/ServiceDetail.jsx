import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaArrowLeft, FaCheckCircle, FaArrowRight, FaClock, FaDollarSign, FaUsers, FaShieldAlt, FaChartLine, FaFileAlt, FaPhone, FaEnvelope, FaWhatsapp, FaShareAlt, FaStar } from 'react-icons/fa';
import { Header } from '../sections/Header';
import { Footer } from '../sections/Footer';
import { services } from '../export';

export const ServiceDetail = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [isApplying, setIsApplying] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 200,
      once: false,
    });
    window.scrollTo(0, 0);
  }, []);

  const findService = () => {
    const id = parseInt(serviceId);
    for (const category of services) {
      const found = category.services.find(s => s.id === id);
      if (found) {
        return { service: found, category };
      }
    }
    return null;
  };

  const serviceData = findService();

  if (!serviceData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <p className="text-gray-600 mb-8">The service you're looking for doesn't exist.</p>
          <Link
            to="/services"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  const { service, category } = serviceData;
  const CategoryIcon = category.icon;

  const tabs = [
    { id: 'overview', label: 'Overview', icon: FaFileAlt },
    { id: 'features', label: 'Features', icon: FaStar },
    { id: 'benefits', label: 'Benefits', icon: FaCheckCircle },
    { id: 'requirements', label: 'Requirements', icon: FaShieldAlt },
  ];

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: service.title,
        text: service.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section with Enhanced Background */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black/85 to-blue-900/90"></div>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${service.image})`,
            opacity: 0.15
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-aos="fade-up">
            {/* Back Button */}
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-8 group"
            >
              <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <FaArrowLeft className="text-white" />
              </div>
              <span className="font-medium">Back to Services</span>
            </button>

            {/* Service Header */}
            <div className="flex flex-col lg:flex-row lg:items-start gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 ${category.bgColor} border-2 ${category.borderColor} rounded-xl flex items-center justify-center shadow-lg`}>
                    <CategoryIcon className={`text-3xl ${category.textColor}`} />
                  </div>
                  <div>
                    <span className={`text-sm font-semibold ${category.textColor} uppercase tracking-wide`}>
                      {category.category}
                    </span>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} className="text-yellow-400 text-xs" />
                        ))}
                      </div>
                      <span className="text-white/80 text-sm">4.9 (128 reviews)</span>
                    </div>
                  </div>
                </div>

                <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                  {service.title}
                </h1>
                <p className={`text-xl ${category.textColor} font-medium mb-6`}>
                  {service.subtitle}
                </p>

                <div className="flex flex-wrap gap-6">
                  <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                    <FaClock className="text-green-400" />
                    <div>
                      <span className="text-white/60 text-xs block">Duration</span>
                      <span className="text-white font-semibold">{service.duration}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                    <FaDollarSign className="text-green-400" />
                    <div>
                      <span className="text-white/60 text-xs block">Rate</span>
                      <span className="text-white font-semibold">{service.rate}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3">
                <button
                  onClick={handleShare}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-4 py-3 rounded-lg transition-colors"
                >
                  <FaShareAlt /> Share
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content Area */}
            <div className="lg:col-span-2">
              {/* Tabs Navigation */}
              <div className="flex flex-wrap gap-2 mb-8 bg-white rounded-xl p-2 shadow-sm border border-gray-100">
                {tabs.map((tab) => {
                  const TabIcon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                        activeTab === tab.id
                          ? `bg-gradient-to-r ${category.color} text-white shadow-md`
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <TabIcon className={activeTab === tab.id ? 'text-white' : `text-${category.color.split('-')[1]}-500`} />
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              {/* Tab Content */}
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                {activeTab === 'overview' && (
                  <div data-aos="fade-up">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Overview</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-8">
                      {service.description}
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                        <h3 className="text-lg font-bold text-blue-900 mb-3">Why Choose This Service?</h3>
                        <p className="text-blue-800 text-sm">
                          Our {service.title.toLowerCase()} is designed to provide you with the best financial solutions tailored to your specific needs, backed by years of expertise and commitment to excellence.
                        </p>
                      </div>
                      <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                        <h3 className="text-lg font-bold text-green-900 mb-3">Quick Facts</h3>
                        <ul className="text-green-800 text-sm space-y-2">
                          <li>• Processing time: {service.duration}</li>
                          <li>• Competitive rates from {service.rate}</li>
                          <li>• 24/7 customer support</li>
                          <li>• Secure and reliable</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'features' && (
                  <div data-aos="fade-up">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      {service.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300 group"
                        >
                          <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                            <FaCheckCircle className="text-white" />
                          </div>
                          <span className="text-gray-800 font-medium group-hover:text-gray-900">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'benefits' && (
                  <div data-aos="fade-up">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Benefits</h2>
                    <div className="space-y-4">
                      {service.benefits.map((benefit, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 border border-green-100 hover:shadow-md transition-all duration-300"
                        >
                          <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-bold text-sm">{index + 1}</span>
                          </div>
                          <span className="text-gray-800 font-medium">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'requirements' && (
                  <div data-aos="fade-up">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Requirements</h2>
                    <div className="space-y-4">
                      {service.requirements.map((requirement, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-100 hover:shadow-md transition-all duration-300"
                        >
                          <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
                            <FaArrowRight className="text-white text-sm" />
                          </div>
                          <span className="text-gray-800 font-medium">{requirement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* CTA Card */}
              <div data-aos="fade-up" className={`mt-8 bg-gradient-to-br ${category.color} rounded-xl shadow-2xl p-8 text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                  <p className="text-white/90 mb-6 text-lg">
                    Apply now and our dedicated team will guide you through the entire process with personalized support.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      to="/contact"
                      className="relative group bg-white text-gray-900 text-center py-5 px-10 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 flex items-center justify-center gap-3"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-white to-gray-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      <span className="relative flex items-center gap-2 font-extrabold text-gray-900">
                        <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                        Apply Now
                        <FaArrowRight className="group-hover:translate-x-1 transition-transform text-gray-700" />
                      </span>
                    </Link>
                    <a
                      href="https://wa.me/237680485488"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-green-500 text-center py-4 px-8 rounded-lg font-bold hover:bg-green-600 transition-colors shadow-lg"
                    >
                      <FaWhatsapp /> Chat on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Quick Contact Card */}
              <div data-aos="fade-up" className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Need Help?</h3>
                <div className="space-y-4">
                  <a href="tel:+237670020630" className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors group">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                      <FaPhone className="text-blue-600" />
                    </div>
                    <div>
                      <span className="text-xs text-gray-500 block">Call Us</span>
                      <span className="text-gray-900 font-semibold">+237 670 020 630</span>
                    </div>
                  </a>
                  <a href="https://wa.me/237680485488" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-green-50 transition-colors group">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors">
                      <FaWhatsapp className="text-green-600" />
                    </div>
                    <div>
                      <span className="text-xs text-gray-500 block">WhatsApp</span>
                      <span className="text-gray-900 font-semibold">+237 680 485 488</span>
                    </div>
                  </a>
                  <a href="mailto:info@mmoccul.com" className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-purple-50 transition-colors group">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                      <FaEnvelope className="text-purple-600" />
                    </div>
                    <div>
                      <span className="text-xs text-gray-500 block">Email</span>
                      <span className="text-gray-900 font-semibold">info@mmoccul.com</span>
                    </div>
                  </a>
                </div>

                {/* Other Services */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Other Services</h4>
                  <div className="space-y-3">
                    {services.flatMap(cat => cat.services)
                      .filter(s => s.id !== service.id)
                      .slice(0, 3)
                      .map((otherService) => (
                        <Link
                          key={otherService.id}
                          to={`/services/${otherService.id}`}
                          className="block p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors group"
                        >
                          <h5 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                            {otherService.title}
                          </h5>
                          <p className="text-sm text-gray-600 line-clamp-1">
                            {otherService.description}
                          </p>
                        </Link>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};