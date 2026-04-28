import React, { useState, useEffect } from 'react'
import { Header } from '../sections/Header'
import { Footer } from '../sections/Footer'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { FaMapMarkerAlt, FaPhone, FaClock, FaStar, FaBuilding, FaCheckCircle, FaWifi, FaParking, FaLandmark, FaFilter, FaSearch } from 'react-icons/fa'
import branchImage1 from '../assets/assets2/1774855672518.jpg'
import branchImage2 from '../assets/assets2/1774855672572.jpg'
import branchImage3 from '../assets/assets2/1774855672617.jpg'
import branchImage4 from '../assets/assets2/1774855672659.jpg'
import branchImage5 from '../assets/assets2/1774855672707.jpg'

export const BranchesPage = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true })
  }, [])

  const [selectedRegion, setSelectedRegion] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const regions = ['All', 'Yaoundé', 'Douala', 'West Region', 'Southwest Region', 'Northwest Region', 'East Region']

  const branches = [
    {
      id: 1, name: 'MMOCCUL Head Office - Damas Yaoundé',
      address: 'Rond Point Damas, Yaoundé, Cameroon',
      phone: '+237 670 020 630',
      hours: 'Mon-Fri: 8:00 AM - 6:00 PM, Sat: 8:00 AM - 2:00 PM',
      region: 'Yaoundé', type: 'Head Office',
      services: ['Personal Banking', 'Business Banking', 'Loans', 'Savings', 'International Transfers'],
      image: branchImage1,
      features: ['WiFi', 'Parking', 'Wheelchair Access', 'ATM', 'VIP Lounge'],
      manager: 'Jean-Pierre Mbarga',
      established: '2005'
    },
    {
      id: 2, name: 'MMOCCUL Messassi Branch',
      address: 'Dispensaire Messassi, Yaoundé, Cameroon',
      phone: '+237 670 020 630',
      hours: 'Mon-Fri: 8:00 AM - 5:00 PM, Sat: 8:00 AM - 12:00 PM',
      region: 'Yaoundé', type: 'Branch',
      services: ['Personal Banking', 'Savings', 'Mobile Banking', 'Microfinance'],
      image: branchImage2,
      features: ['WiFi', 'ATM', 'Parking'],
      manager: 'Marie-Claire Oyono',
      established: '2012'
    },
    {
      id: 3, name: 'MMOCCUL Etoug-Ebe Branch',
      address: 'Centre Handicapes, Etoug-Ebe, Yaoundé, Cameroon',
      phone: '+237 670 020 630',
      hours: 'Mon-Fri: 8:00 AM - 5:00 PM, Sat: 8:00 AM - 12:00 PM',
      region: 'Yaoundé', type: 'Branch',
      services: ['Personal Banking', 'Business Banking', 'Loans', 'Insurance'],
      image: branchImage3,
      features: ['WiFi', 'Parking', 'Wheelchair Access'],
      manager: 'Paul Essomba',
      established: '2015'
    },
    {
      id: 4, name: 'MMOCCUL Douala Village Branch',
      address: 'Opposite Tradex Bonne Dix, Douala Village, Cameroon',
      phone: '+237 670 020 630',
      hours: 'Mon-Fri: 8:00 AM - 6:00 PM, Sat: 8:00 AM - 2:00 PM',
      region: 'Douala', type: 'Branch',
      services: ['Business Banking', 'Corporate Services', 'Trade Finance', 'Foreign Exchange'],
      image: branchImage4,
      features: ['WiFi', 'Parking', 'ATM', 'VIP Lounge'],
      manager: 'François Mbappe',
      established: '2010'
    },
    {
      id: 5, name: 'MMOCCUL Bonaberi Village Branch',
      address: 'General Express New Building, Bonaberi, Douala, Cameroon',
      phone: '+237 670 020 630',
      hours: 'Mon-Fri: 8:00 AM - 5:00 PM, Sat: 8:00 AM - 12:00 PM',
      region: 'Douala', type: 'Branch',
      services: ['Personal Banking', 'SME Banking', 'Mobile Banking'],
      image: branchImage1,
      features: ['WiFi', 'ATM', 'Parking'],
      manager: 'Sylvie Kamdem',
      established: '2018'
    },
    {
      id: 6, name: 'MMOCCUL Dschang Branch',
      address: 'Beside Alimentation Forbin, Marché A, Dschang, Cameroon',
      phone: '+237 670 020 630',
      hours: 'Mon-Fri: 8:00 AM - 5:00 PM, Sat: 8:00 AM - 12:00 PM',
      region: 'West Region', type: 'Branch',
      services: ['Personal Banking', 'Agricultural Loans', 'SME Banking', 'Student Accounts'],
      image: branchImage5,
      features: ['WiFi', 'Parking', 'Student Lounge'],
      manager: 'Dr. Emmanuel Fokou',
      established: '2014'
    },
    {
      id: 7, name: 'MMOCCUL Bafoussam Branch',
      address: 'Ancien Cinema 4 Etages, Entree Marché B, Bafoussam, Cameroon',
      phone: '+237 670 020 630',
      hours: 'Mon-Fri: 8:00 AM - 5:00 PM, Sat: 8:00 AM - 12:00 PM',
      region: 'West Region', type: 'Branch',
      services: ['Personal Banking', 'Business Banking', 'Microfinance', 'Insurance'],
      image: branchImage1,
      features: ['WiFi', 'Parking', 'ATM'],
      manager: 'Henriette Djoumessi',
      established: '2016'
    },
    {
      id: 8, name: 'MMOCCUL Buea Branch',
      address: 'UB Junction, Opposite TFC Restaurant, Buea, Cameroon',
      phone: '+237 670 020 630',
      hours: 'Mon-Fri: 8:00 AM - 5:00 PM, Sat: 8:00 AM - 12:00 PM',
      region: 'Southwest Region', type: 'Branch',
      services: ['Personal Banking', 'Educational Loans', 'Student Accounts', 'Mobile Banking'],
      image: branchImage2,
      features: ['WiFi', 'Parking', 'Student Lounge'],
      manager: 'Dr. Peter Tambi',
      established: '2013'
    },
    {
      id: 9, name: 'MMOCCUL Bamenda Branch',
      address: 'Food Market – E Square, Bamenda, Cameroon',
      phone: '+237 670 020 630',
      hours: 'Mon-Fri: 8:00 AM - 5:00 PM, Sat: 8:00 AM - 12:00 PM',
      region: 'Northwest Region', type: 'Branch',
      services: ['Personal Banking', 'Business Banking', 'Agricultural Loans', 'Microfinance'],
      image: branchImage3,
      features: ['WiFi', 'Parking', 'ATM'],
      manager: 'Grace Ngum',
      established: '2011'
    },
    {
      id: 10, name: 'MMOCCUL Bertoua Branch',
      address: 'Rue Grand Total Ndouan, Bertoua, Cameroon',
      phone: '+237 670 020 630',
      hours: 'Mon-Fri: 8:00 AM - 5:00 PM, Sat: 8:00 AM - 12:00 PM',
      region: 'East Region', type: 'Branch',
      services: ['Personal Banking', 'Agricultural Finance', 'Rural Banking', 'Microfinance'],
      image: branchImage4,
      features: ['WiFi', 'Parking', 'ATM'],
      manager: 'Michel Ngounou',
      established: '2017'
    }
  ]

  const filteredBranches = branches.filter(b => {
    const matchRegion = selectedRegion === 'All' || b.region === selectedRegion
    const matchSearch = b.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       b.address.toLowerCase().includes(searchTerm.toLowerCase())
    return matchRegion && matchSearch
  })

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-slate-700/50 bg-white/5 px-6 py-3 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400"></span>
            <span className="text-xs font-medium uppercase tracking-wider text-slate-400">Nationwide Network</span>
          </div>
          <h1 className="font-serif text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Strategic <span className="bg-gradient-to-r from-cyan-400 to-sky-400 bg-clip-text text-transparent">Branch Network</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-300 leading-relaxed">
            Serving communities across Cameroon with premium financial services. Our strategically located branches 
            ensure convenient access to personalized banking solutions tailored to your unique needs.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex items-center gap-3 rounded-full bg-white/10 px-5 py-2.5 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-green-400"></span>
              <span className="text-sm font-medium text-white">10+ Strategic Locations</span>
            </div>
            <div className="flex items-center gap-3 rounded-full bg-white/10 px-5 py-2.5 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
              <span className="text-sm font-medium text-white">24/7 Digital Access</span>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Find Us on the Map</h2>
            <p className="text-slate-600 max-w-xl mx-auto">
              Locate our branches across Cameroon. Select a branch below to view its location.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Branch Selector */}
            <div className="lg:w-80 flex-shrink-0">
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 sticky top-24">
                <label className="flex items-center gap-2 text-slate-700 font-semibold mb-4">
                  <FaMapMarkerAlt className="text-cyan-600" />
                  Select Branch
                </label>
                <div className="relative mb-4">
                  <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search branches..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                  />
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <FaFilter className="text-slate-400" />
                  <select
                    value={selectedRegion}
                    onChange={(e) => setSelectedRegion(e.target.value)}
                    className="flex-1 px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                  >
                    {regions.map(r => <option key={r} value={r}>{r}</option>)}
                  </select>
                </div>
                <div className="text-sm text-slate-600 mb-4 pl-2">
                  Showing <strong>{filteredBranches.length}</strong> of <strong>{branches.length}</strong> branches
                </div>

                <div className="space-y-3 max-h-80 overflow-y-auto">
                  {filteredBranches.map(b => (
                    <div key={b.id} className="p-3 rounded-xl border border-slate-200 hover:border-cyan-300 hover:bg-cyan-50/50 transition-all cursor-pointer">
                      <div className="flex items-start gap-3">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${b.type === 'Head Office' ? 'bg-amber-100' : 'bg-cyan-100'}`}>
                          <FaBuilding className={`${b.type === 'Head Office' ? 'text-amber-600' : 'text-cyan-600'}`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-slate-900 text-sm truncate">{b.name}</div>
                          <div className="text-xs text-slate-500">{b.address}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="flex-1">
              <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                <iframe
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.531791420507!2d11.507012314648443!3d3.8480322533252983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108b8c60c7ac8c83%3A0x647917db68998112!2sYaounde%2C%20Cameroon!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="MMOCCUL Branches Map"
                ></iframe>
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-cyan-500 rounded-full animate-pulse"></div>
                    <span className="font-medium text-slate-900">
                      {filteredBranches.length} {filteredBranches.length === 1 ? 'Branch' : 'Branches'} Shown
                    </span>
                  </div>
                  {selectedRegion !== 'All' && (
                    <p className="text-xs text-slate-500 mt-1">Filtered by: {selectedRegion}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Branches Grid */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-slate-900 mb-4">All Branches</h2>
            <p className="text-slate-600 max-w-xl mx-auto">
              Browse our network of strategically located branches across Cameroon.
            </p>
          </div>

          {filteredBranches.length === 0 ? (
            <div className="text-center py-16">
              <FaMapMarkerAlt className="w-12 h-12 mx-auto text-slate-300 mb-4" />
              <p className="text-slate-500">No branches found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid lg:grid-cols-2 gap-8">
              {filteredBranches.map((branch, index) => (
                <article key={branch.id} className="group bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-xl hover:border-cyan-200 transition-all duration-300" data-aos="fade-up" data-aos-delay={index * 50}>
                  <div className="relative h-56 overflow-hidden">
                    <img src={branch.image} alt={branch.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1.5 rounded-full text-xs font-bold ${branch.type === 'Head Office' ? 'bg-amber-500 text-white' : 'bg-cyan-500 text-white'}`}>
                        {branch.type}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="font-serif text-lg font-bold text-white mb-1">{branch.name}</h3>
                      <div className="flex items-center gap-2 text-slate-200 text-sm">
                        <FaMapMarkerAlt className="w-4 h-4" />
                        <span className="truncate">{branch.address}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                        <FaPhone className="w-5 h-5 text-cyan-600" />
                        <div>
                          <div className="text-xs text-slate-500">Phone</div>
                          <a href={`tel:${branch.phone}`} className="font-semibold text-slate-900 hover:text-cyan-600 transition-colors">{branch.phone}</a>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                        <FaClock className="w-5 h-5 text-cyan-600" />
                        <div>
                          <div className="text-xs text-slate-500">Hours</div>
                          <p className="text-sm text-slate-700">{branch.hours.split(', ')[0]}</p>
                        </div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="text-xs font-semibold text-slate-500 uppercase mb-2">Key Features</div>
                      <div className="flex flex-wrap gap-2">
                        {branch.features.slice(0, 4).map((f, i) => (
                          <span key={i} className="px-2.5 py-1 bg-cyan-50 text-cyan-700 text-xs rounded-full flex items-center gap-1">
                            {f === 'WiFi' && <FaWifi className="w-3 h-3" />}
                            {f === 'Parking' && <FaParking className="w-3 h-3" />}
                            {f === 'ATM' && <FaLandmark className="w-3 h-3" />}
                            {(f !== 'WiFi' && f !== 'Parking' && f !== 'ATM') && <FaCheckCircle className="w-3 h-3" />}
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(branch.address)}`} target="_blank" rel="noopener noreferrer" className="flex-1 bg-cyan-500 hover:bg-cyan-600 text-white py-2.5 px-4 rounded-xl font-semibold text-sm text-center transition-all duration-300 flex items-center justify-center gap-2">
                        <FaMapMarkerAlt className="w-4 h-4" />
                        Directions
                      </a>
                      <a href={`tel:${branch.phone}`} className="border border-cyan-500 text-cyan-600 hover:bg-cyan-50 py-2.5 px-4 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2">
                        <FaPhone className="w-4 h-4" />
                        Call
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-cyan-500 to-sky-500 rounded-xl flex items-center justify-center">
                <FaBuilding className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-slate-900">10+</div>
              <div className="text-slate-600">Active Branches</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center">
                <FaStar className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-slate-900">1</div>
              <div className="text-slate-600">Head Office</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                <FaLandmark className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-slate-900">5+</div>
              <div className="text-slate-600">Regions</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <FaCheckCircle className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-slate-900">24/7</div>
              <div className="text-slate-600">Digital Access</div>
            </div>
          </div>

          {/* CTA */}
          <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden mt-16">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
              <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sky-500 rounded-full blur-3xl"></div>
            </div>
            <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-6">Can't Find Your Nearest Branch?</h2>
              <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                Our customer service team is ready to assist you in finding the most convenient location or exploring our digital banking solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#contact" className="bg-white text-slate-900 hover:bg-slate-100 font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2">
                  Contact Support Team
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a href="/services" className="border border-slate-600 text-white hover:bg-white/10 font-semibold py-4 px-8 rounded-xl transition-all duration-300 inline-flex items-center justify-center gap-2">
                  Explore Digital Services
                </a>
              </div>
            </div>
          </section>
        </div>
      </section>

      <Footer />
    </div>
  )
}
