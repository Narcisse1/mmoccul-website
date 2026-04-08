import React, { useEffect, useState } from 'react';
import { Header } from '../sections/Header';
import { Footer } from '../sections/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaMapMarkerAlt, FaBuilding, FaGlobe, FaPhone, FaClock, FaDirections, FaSearch, FaFilter, FaEnvelope, FaStar, FaCheckCircle, FaWifi, FaParking, FaWheelchair, FaLandmark } from 'react-icons/fa';
import branchImage1 from '../assets/assets2/1774855672518.jpg';
import branchImage2 from '../assets/assets2/1774855672572.jpg';
import branchImage3 from '../assets/assets2/1774855672617.jpg';
import branchImage4 from '../assets/assets2/1774855672659.jpg';
import branchImage5 from '../assets/assets2/1774855672707.jpg';

export const BranchesPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 200,
      once: false,
    });
  }, []);

  const [selectedRegion, setSelectedRegion] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBranchForMap, setSelectedBranchForMap] = useState('all');

  const regions = [
    'All',
    'Yaoundé',
    'Douala',
    'West Region',
    'Southwest Region',
    'Northwest Region',
    'East Region'
  ];

  const branches = [
    {
      id: 1,
      name: 'MMOCCUL Head Office - Damas Yaoundé',
      address: 'Rond Point Damas, Yaoundé, Cameroon',
      phone: '+237 670 020 630',
      email: 'damas@mmoccul.com',
      hours: 'Mon-Fri: 8:00 AM - 6:00 PM, Sat: 8:00 AM - 2:00 PM',
      region: 'Yaoundé',
      type: 'Head Office',
      services: ['Personal Banking', 'Business Banking', 'Loans', 'Savings', 'International Transfers', 'Investment Advisory'],
      coordinates: { lat: 3.8667, lng: 11.5167 },
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Rond+Point+Damas+Yaounde',
      image: branchImage1,
      features: ['WiFi', 'Parking', 'Wheelchair Access', 'ATM'],
      manager: 'Jean-Pierre Mbarga',
      established: '2005'
    },
    {
      id: 2,
      name: 'MMOCCUL Messassi Branch',
      address: 'Dispensaire Messassi, Yaoundé, Cameroon',
      phone: '+237 670 020 630',
      email: 'messassi@mmoccul.com',
      hours: 'Mon-Fri: 8:00 AM - 5:00 PM, Sat: 8:00 AM - 12:00 PM',
      region: 'Yaoundé',
      type: 'Branch',
      services: ['Personal Banking', 'Savings', 'Mobile Banking', 'Microfinance'],
      coordinates: { lat: 3.885, lng: 11.53 },
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Dispensaire+Messassi+Yaounde',
      image: branchImage2,
      features: ['WiFi', 'ATM'],
      manager: 'Marie-Claire Oyono',
      established: '2012'
    },
    {
      id: 3,
      name: 'MMOCCUL Etoug-Ebe Branch',
      address: 'Centre Handicapes, Etoug-Ebe, Yaoundé, Cameroon',
      phone: '+237 670 020 630',
      email: 'etougebe@mmoccul.com',
      hours: 'Mon-Fri: 8:00 AM - 5:00 PM, Sat: 8:00 AM - 12:00 PM',
      region: 'Yaoundé',
      type: 'Branch',
      services: ['Personal Banking', 'Business Banking', 'Loans', 'Insurance'],
      coordinates: { lat: 3.895, lng: 11.54 },
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Centre+Handicapes+Etoug-Ebe+Yaounde',
      image: branchImage3,
      features: ['WiFi', 'Parking', 'Wheelchair Access'],
      manager: 'Paul Essomba',
      established: '2015'
    },
    {
      id: 4,
      name: 'MMOCCUL Douala Village Branch',
      address: 'Opposite Tradex Bonne Dix, Douala Village, Cameroon',
      phone: '+237 670 020 630',
      email: 'doualavillage@mmoccul.com',
      hours: 'Mon-Fri: 8:00 AM - 6:00 PM, Sat: 8:00 AM - 2:00 PM',
      region: 'Douala',
      type: 'Branch',
      services: ['Business Banking', 'Corporate Services', 'Trade Finance', 'Foreign Exchange'],
      coordinates: { lat: 4.05, lng: 9.7 },
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Tradex+Bonne+Dix+Douala+Village',
      image: branchImage4,
      features: ['WiFi', 'Parking', 'ATM', 'VIP Lounge'],
      manager: 'François Mbappe',
      established: '2010'
    },
    {
      id: 5,
      name: 'MMOCCUL Bonaberi Village Branch',
      address: 'General Express New Building, Bonaberi, Douala, Cameroon',
      phone: '+237 670 020 630',
      email: 'bonaberi@mmoccul.com',
      hours: 'Mon-Fri: 8:00 AM - 5:00 PM, Sat: 8:00 AM - 12:00 PM',
      region: 'Douala',
      type: 'Branch',
      services: ['Personal Banking', 'SME Banking', 'Mobile Banking'],
      coordinates: { lat: 4.08, lng: 9.68 },
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=General+Express+Bonaberi+Douala',
      image: 'https://images.unsplash.com/photo-1560440021-37b8bfd913e5?w=800&auto=format&fit=crop',
      features: ['WiFi', 'ATM'],
      manager: 'Sylvie Kamdem',
      established: '2018'
    },
    {
      id: 6,
      name: 'MMOCCUL Dschang Branch',
      address: 'Beside Alimentation Forbin, Marché A, Dschang, Cameroon',
      phone: '+237 670 020 630',
      email: 'dschang@mmoccul.com',
      hours: 'Mon-Fri: 8:00 AM - 5:00 PM, Sat: 8:00 AM - 12:00 PM',
      region: 'West Region',
      type: 'Branch',
      services: ['Personal Banking', 'Agricultural Loans', 'SME Banking', 'Student Accounts'],
      coordinates: { lat: 5.45, lng: 10.05 },
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Alimentation+Forbin+Marche+A+Dschang',
      image: branchImage5,
      features: ['WiFi', 'Parking'],
      manager: 'Dr. Emmanuel Fokou',
      established: '2014'
    },
    {
      id: 7,
      name: 'MMOCCUL Bafoussam Branch',
      address: 'Ancien Cinema 4 Etages, Entree Marché B, Bafoussam, Cameroon',
      phone: '+237 670 020 630',
      email: 'bafoussam@mmoccul.com',
      hours: 'Mon-Fri: 8:00 AM - 5:00 PM, Sat: 8:00 AM - 12:00 PM',
      region: 'West Region',
      type: 'Branch',
      services: ['Personal Banking', 'Business Banking', 'Microfinance', 'Insurance'],
      coordinates: { lat: 5.48, lng: 10.42 },
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Ancien+Cinema+4+Etages+Bafoussam',
      image: 'https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?w=800&auto=format&fit=crop',
      features: ['WiFi', 'Parking', 'ATM'],
      manager: 'Henriette Djoumessi',
      established: '2016'
    },
    {
      id: 8,
      name: 'MMOCCUL Buea Branch',
      address: 'UB Junction, Opposite TFC Restaurant, Buea, Cameroon',
      phone: '+237 670 020 630',
      email: 'buea@mmoccul.com',
      hours: 'Mon-Fri: 8:00 AM - 5:00 PM, Sat: 8:00 AM - 12:00 PM',
      region: 'Southwest Region',
      type: 'Branch',
      services: ['Personal Banking', 'Educational Loans', 'Student Accounts', 'Mobile Banking'],
      coordinates: { lat: 4.15, lng: 9.24 },
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=UB+Junction+TFC+Restaurant+Buea',
      image: 'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?w=800&auto=format&fit=crop',
      features: ['WiFi', 'Parking', 'Student Lounge'],
      manager: 'Dr. Peter Tambi',
      established: '2013'
    },
    {
      id: 9,
      name: 'MMOCCUL Bamenda Branch',
      address: 'Food Market – E Square, Bamenda, Cameroon',
      phone: '+237 670 020 630',
      email: 'bamenda@mmoccul.com',
      hours: 'Mon-Fri: 8:00 AM - 5:00 PM, Sat: 8:00 AM - 12:00 PM',
      region: 'Northwest Region',
      type: 'Branch',
      services: ['Personal Banking', 'Business Banking', 'Agricultural Loans', 'Microfinance'],
      coordinates: { lat: 5.96, lng: 10.16 },
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Food+Market+E+Square+Bamenda',
      image: 'https://images.unsplash.com/photo-1526815456743-3e521f4c80d3?w=800&auto=format&fit=crop',
      features: ['WiFi', 'Parking', 'ATM'],
      manager: 'Grace Ngum',
      established: '2011'
    },
    {
      id: 10,
      name: 'MMOCCUL Bertoua Branch',
      address: 'Rue Grand Total Ndouan, Bertoua, Cameroon',
      phone: '+237 670 020 630',
      email: 'bertoua@mmoccul.com',
      hours: 'Mon-Fri: 8:00 AM - 5:00 PM, Sat: 8:00 AM - 12:00 PM',
      region: 'East Region',
      type: 'Branch',
      services: ['Personal Banking', 'Agricultural Finance', 'Rural Banking', 'Microfinance'],
      coordinates: { lat: 4.58, lng: 13.68 },
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Rue+Grand+Total+Ndouan+Bertoua',
      image: branchImage1,
      features: ['WiFi', 'Parking'],
      manager: 'Michel Ngounou',
      established: '2017'
    }
  ];

  const filteredBranches = branches.filter(branch => {
    const matchesRegion = selectedRegion === 'All' || branch.region === selectedRegion;
    const matchesSearch = branch.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         branch.address.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesRegion && matchesSearch;
  });

  const getRegionStats = (region) => {
    const regionBranches = branches.filter(b => b.region === region);
    return {
      count: regionBranches.length,
      headOffices: regionBranches.filter(b => b.type === 'Head Office').length,
      services: regionBranches.flatMap(b => b.services).filter((item, index, arr) => arr.indexOf(item) === index)
    };
  };

  // Get map center based on selected branch
  const getMapCenter = () => {
    if (selectedBranchForMap === 'all') {
      return branches[0].coordinates; // Default to Damas Branch
    }
    const branch = branches.find(b => b.id === parseInt(selectedBranchForMap));
    return branch ? branch.coordinates : branches[0].coordinates;
  };

  const mapCenter = getMapCenter();

  const getFeatureIcon = (feature) => {
    const featureIcons = {
      'WiFi': FaWifi,
      'Parking': FaParking,
      'Wheelchair Access': FaWheelchair,
      'ATM': FaLandmark
    };
    return featureIcons[feature] || FaCheckCircle;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <Header />
      
      {/* Hero Section with Parallax Background */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&auto=format&fit=crop&q=80')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-blue-900/90 to-indigo-900/95"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-900/30 to-transparent"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <div data-aos="fade-up" className="space-y-8 text-center max-w-4xl">
              <div className="inline-flex items-center justify-center gap-4 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-md border border-yellow-400/30 rounded-full px-8 py-4 shadow-lg mx-auto">
                <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse shadow-lg"></div>
                <span className="text-sm font-bold text-white uppercase tracking-widest">Nationwide Network</span>
                <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse shadow-lg"></div>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-tight text-center">
                Our Strategic{' '}
                <span className="bg-gradient-to-r from-yellow-300 via-orange-400 to-yellow-500 bg-clip-text text-transparent font-black">Branch Network</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed max-w-3xl mx-auto text-center">
                Serving communities across Cameroon with premium financial services. 
                Our strategically located branches ensure convenient access to personalized 
                banking solutions tailored to your unique needs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-white font-semibold">10+ Strategic Locations</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3">
                  <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                  <span className="text-white font-semibold">24/7 Digital Access</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Section - With Branch Selector */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-aos="fade-up" className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Find Us on the Map</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Locate our branches across Cameroon. Select a branch below to navigate directly to its location.
            </p>
          </div>
          
          {/* Branch Selector Dropdown */}
          <div data-aos="fade-up" className="mb-8 flex justify-center">
            <div className="bg-gray-50 rounded-xl p-4 shadow-md border border-gray-200 max-w-2xl w-full">
              <label className="flex items-center gap-3 mb-3">
                <FaMapMarkerAlt className="text-blue-600 text-xl" />
                <span className="font-semibold text-gray-900">Select a branch to locate on map:</span>
              </label>
              <div className="relative">
                <select
                  value={selectedBranchForMap}
                  onChange={(e) => setSelectedBranchForMap(e.target.value)}
                  className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white appearance-none cursor-pointer shadow-sm"
                >
                  <option value="all">🏢 All Branches (Default: Damas Head Office)</option>
                  <optgroup label="Yaoundé">
                    <option value="1">🏛️ Damas Branch - Rond Point Damas</option>
                    <option value="2">🏦 Messassi Branch - Dispensaire Messassi</option>
                    <option value="3">🏥 Etoug-Ebe Branch - Centre Handicapes</option>
                  </optgroup>
                  <optgroup label="Douala">
                    <option value="4">🏢 Douala Village - Opposite Tradex Bonne Dix</option>
                    <option value="5">🏗️ Bonaberi Village - General Express New Building</option>
                  </optgroup>
                  <optgroup label="West Region">
                    <option value="6">🎓 Dschang Branch - Beside Alimentation Forbin</option>
                    <option value="7">🎬 Bafoussam Branch - Ancien Cinema 4 Etages</option>
                  </optgroup>
                  <optgroup label="Southwest Region">
                    <option value="8">🎓 Buea Branch - UB Junction</option>
                  </optgroup>
                  <optgroup label="Northwest Region">
                    <option value="9">🛒 Bamenda Branch - Food Market E Square</option>
                  </optgroup>
                  <optgroup label="East Region">
                    <option value="10">⛽ Bertoua Branch - Rue Grand Total Ndouan</option>
                  </optgroup>
                </select>
                <FaMapMarkerAlt className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
              {selectedBranchForMap !== 'all' && (
                <div className="mt-3 p-3 bg-blue-50 rounded-lg border border-blue-100">
                  <p className="text-sm text-blue-800">
                    <strong>📍 Now showing:</strong> {branches.find(b => b.id === parseInt(selectedBranchForMap))?.name}
                  </p>
                </div>
              )}
            </div>
          </div>
          
          <div className="relative w-full h-[600px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
            <iframe
              key={selectedBranchForMap}
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.5!2d${mapCenter.lng}!3d${mapCenter.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwNTInMDAuMCJOIDExwrAzMSowMC4wIkU!5e0!3m2!1sen!2scm!4v1600000000000!5m2!1sen!2scm`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="MMOCCUL Branches Map"
              className="w-full h-full"
            ></iframe>
            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-2xl max-w-sm border border-gray-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-4 h-4 bg-blue-600 rounded-full animate-pulse"></div>
                <span className="text-base font-bold text-gray-900">
                  {selectedBranchForMap === 'all' ? 'MMOCCUL Head Office' : branches.find(b => b.id === parseInt(selectedBranchForMap))?.name}
                </span>
              </div>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Address:</strong> {selectedBranchForMap === 'all' ? 'Rond Point Damas, Yaoundé' : branches.find(b => b.id === parseInt(selectedBranchForMap))?.address}
              </p>
              <p className="text-xs text-gray-500">
                Click on markers to view branch details and get directions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Overview */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-aos="fade-up" className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Network Overview</h2>
            <p className="text-gray-600 text-lg">Comprehensive coverage across Cameroon's key economic regions</p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
            {regions.slice(1).map((region, index) => {
              const stats = getRegionStats(region);
              if (stats.count === 0) return null;
              return (
                <div key={region} data-aos="fade-up" data-aos-delay={index * 100} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group border border-gray-100">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-300 shadow-lg">
                    <FaBuilding className="text-white text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{region}</h3>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center bg-gray-50 rounded-lg p-3">
                      <span className="text-gray-600">Branches:</span>
                      <span className="font-bold text-2xl text-blue-600">{stats.count}</span>
                    </div>
                    {stats.headOffices > 0 && (
                      <div className="flex justify-between items-center bg-yellow-50 rounded-lg p-3">
                        <span className="text-gray-600">Head Offices:</span>
                        <span className="font-bold text-xl text-yellow-600">{stats.headOffices}</span>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-wrap justify-center gap-2">
                    {stats.services.slice(0, 4).map((service, idx) => (
                      <span key={idx} className="px-3 py-1.5 bg-blue-50 text-blue-700 text-xs font-medium rounded-full border border-blue-100">{service}</span>
                    ))}
                    {stats.services.length > 4 && (
                      <span className="px-3 py-1.5 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">+{stats.services.length - 4} more</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-white border-t border-b border-gray-100 sticky top-16 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 items-center w-full lg:w-auto">
              <div className="relative w-full sm:w-80">
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search branches by name or location..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 w-full shadow-sm"
                />
              </div>
              <div className="flex items-center gap-2">
                <FaFilter className="text-gray-500" />
                <select
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 shadow-sm"
                >
                  {regions.map(region => (
                    <option key={region} value={region}>{region}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="text-sm text-gray-600 bg-gray-50 px-4 py-2 rounded-lg">
              Showing <strong>{filteredBranches.length}</strong> of <strong>{branches.length}</strong> branches
            </div>
          </div>
        </div>
      </section>

      {/* Branches Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredBranches.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaSearch className="text-gray-400 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No branches found</h3>
              <p className="text-gray-600">Try adjusting your search criteria or filter options.</p>
            </div>
          ) : (
            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8">
              {filteredBranches.map((branch, index) => (
                <div key={branch.id} data-aos="fade-up" data-aos-delay={index * 100} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100">
                  <div className="relative h-56 overflow-hidden">
                    <img src={branch.image} alt={branch.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <div className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold ${
                        branch.type === 'Head Office' 
                          ? 'bg-yellow-500 text-white shadow-lg' 
                          : 'bg-blue-600 text-white shadow-lg'
                      }`}>
                        {branch.type === 'Head Office' && <FaStar className="mr-1" />}
                        {branch.type}
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2 text-white/90 text-sm">
                        <FaMapMarkerAlt className="text-yellow-400" />
                        <span>{branch.address}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{branch.name}</h3>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <FaPhone className="text-blue-500 flex-shrink-0" />
                        <div>
                          <span className="text-xs text-gray-500 uppercase block">Phone</span>
                          <a href={`tel:${branch.phone}`} className="text-gray-900 font-semibold hover:text-blue-600 text-sm">{branch.phone}</a>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <FaEnvelope className="text-blue-500 flex-shrink-0" />
                        <div>
                          <span className="text-xs text-gray-500 uppercase block">Email</span>
                          <a href={`mailto:${branch.email}`} className="text-gray-900 font-semibold hover:text-blue-600 text-sm truncate block">{branch.email.split('@')[0]}@...</a>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg mb-4">
                      <FaClock className="text-blue-500 mt-1 flex-shrink-0" />
                      <div>
                        <span className="text-xs text-gray-500 uppercase block">Operating Hours</span>
                        <p className="text-gray-900 text-sm font-medium">{branch.hours}</p>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {branch.features.map((feature, idx) => {
                        const FeatureIcon = getFeatureIcon(feature);
                        return (
                          <span key={idx} className="flex items-center gap-1.5 px-3 py-1.5 bg-green-50 text-green-700 text-xs font-medium rounded-full border border-green-100">
                            <FeatureIcon className="text-green-600" />
                            {feature}
                          </span>
                        );
                      })}
                    </div>

                    {/* Services */}
                    <div className="mb-6">
                      <span className="text-xs text-gray-500 uppercase font-semibold block mb-2">Services Offered</span>
                      <div className="flex flex-wrap gap-2">
                        {branch.services.map((service, idx) => (
                          <span key={idx} className="px-2.5 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">{service}</span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <a
                        href={branch.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-4 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 text-center flex items-center justify-center gap-2"
                      >
                        <FaDirections /> Get Directions
                      </a>
                      <a
                        href={`tel:${branch.phone}`}
                        className="bg-gray-100 text-gray-900 py-3 px-4 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        <FaPhone /> Call
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920')] bg-cover bg-center"></div>
        </div>
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div data-aos="fade-up" className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 text-white border border-white/20 shadow-2xl">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <FaPhone className="text-white text-2xl" />
              </div>
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center">
                <FaGlobe className="text-white text-2xl" />
              </div>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Can't Find Your Nearest Branch?
            </h2>
            <p className="text-lg text-blue-100 mb-8 leading-relaxed">
              Our customer service team is ready to assist you in finding the most convenient 
              location or exploring our digital banking solutions that bring our services 
              directly to your fingertips.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Contact Our Support Team
              </a>
              <a
                href="/services"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                Explore Digital Services
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};