// ─── External Libraries ───────────────────────────────────────────────────────
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// ─── Icons ────────────────────────────────────────────────────────────────────
import {
  FaMapMarkerAlt,
  FaPhone,
  FaClock,
  FaDirections,
} from 'react-icons/fa';

// ─── Constants ────────────────────────────────────────────────────────────────
const BRANCHES = [
  {
    id: 1,
    name: 'Damas Yaoundé',
    address: 'Damas Yaoundé, Yaoundé, Cameroon',
    phone: '+237 670 020 630',
    hours: 'Mon-Fri: 8:30 AM - 5:30 PM, Sat: 9:00 AM - 1:00 PM',
    coordinates: { lat: 3.8667, lng: 11.5167 },
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=3.8667,11.5167',
    type: 'Head Office'
  },
  {
    id: 2,
    name: 'MMOCCUL Yaoundé Montée Centre Branch',
    address: 'Montée Centre, Yaoundé, Cameroon',
    phone: '+237 670 020 630',
    hours: 'Mon-Fri: 8:30 AM - 5:30 PM, Sat: 9:00 AM - 1:00 PM',
    coordinates: { lat: 3.87, lng: 11.52 },
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=3.8700,11.5200',
    type: 'Branch',
  },
  {
    id: 3,
    name: 'MMOCCUL Yaoundé Messasi Branch',
    address: 'Messasi, Yaoundé, Cameroon',
    phone: '+237 670 020 630',
    hours: 'Mon-Fri: 8:30 AM - 5:30 PM, Sat: 9:00 AM - 1:00 PM',
    coordinates: { lat: 3.885, lng: 11.52 },
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=3.8850,11.5200',
    type: 'Branch',
  },
  {
    id: 4,
    name: 'MMOCCUL Douala Bonapriso Branch',
    address: 'Bonapriso District, Douala, Cameroon',
    phone: '+237 670 020 630',
    hours: 'Mon-Fri: 8:30 AM - 5:30 PM, Sat: 9:00 AM - 1:00 PM',
    coordinates: { lat: 4.02, lng: 9.7 },
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=4.0200,9.7000',
    type: 'Branch',
  },
  {
    id: 5,
    name: 'MMOCCUL Douala Bonanjo Branch',
    address: 'Bonanjo Business District, Douala, Cameroon',
    phone: '+237 670 020 630',
    hours: 'Mon-Fri: 8:30 AM - 5:30 PM, Sat: 9:00 AM - 1:00 PM',
    coordinates: { lat: 4.04, lng: 9.71 },
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=4.0400,9.7100',
    type: 'Branch',
  },
  {
    id: 6,
    name: 'MMOCCUL Bamenda Commercial Branch',
    address: 'Commercial Avenue, Bamenda, Cameroon',
    phone: '+237 670 020 630',
    hours: 'Mon-Fri: 8:30 AM - 5:30 PM, Sat: 9:00 AM - 1:00 PM',
    coordinates: { lat: 5.9631, lng: 10.1591 },
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=5.9631,10.1591',
    type: 'Branch',
  },
  {
    id: 7,
    name: 'MMOCCUL Bamenda Nkwen Branch',
    address: 'Nkwen Market Road, Bamenda, Cameroon',
    phone: '+237 670 020 630',
    hours: 'Mon-Fri: 8:30 AM - 5:30 PM, Sat: 9:00 AM - 1:00 PM',
    coordinates: { lat: 5.9897, lng: 10.1726 },
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=5.9897,10.1726',
    type: 'Branch',
  },
  {
    id: 8,
    name: 'MMOCCUL Buea Branch',
    address: 'Buea Town Center, Buea, Cameroon',
    phone: '+237 670 020 630',
    hours: 'Mon-Fri: 8:30 AM - 5:30 PM, Sat: 9:00 AM - 1:00 PM',
    coordinates: { lat: 4.15, lng: 9.48 },
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=4.1500,9.4800',
    type: 'Branch',
  },
  {
    id: 9,
    name: 'MMOCCUL Limbe Branch',
    address: 'Limbe City Center, Limbe, Cameroon',
    phone: '+237 670 020 630',
    hours: 'Mon-Fri: 8:30 AM - 5:30 PM, Sat: 9:00 AM - 1:00 PM',
    coordinates: { lat: 4.01, lng: 9.2 },
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=4.0100,9.2000',
    type: 'Branch',
  },
  {
    id: 10,
    name: 'MMOCCUL Bertoua Branch',
    address: 'Bertoua Central, Bertoua, Cameroon',
    phone: '+237 670 020 630',
    hours: 'Mon-Fri: 8:30 AM - 5:30 PM, Sat: 9:00 AM - 1:00 PM',
    coordinates: { lat: 4.56, lng: 13.69 },
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=4.5600,13.6900',
    type: 'Branch',
  },
];

const AOS_CONFIG = {
  duration: 1000,
  delay: 200,
  once: false,
};

// ─── Sub-components ───────────────────────────────────────────────────────────

const SectionHeader = ({ totalBranches }) => (
  <div className='text-center max-w-4xl mx-auto mb-16' data-aos='fade-up'>
    <div className='inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-slate-900 to-slate-700 text-white rounded-full mb-8 shadow-lg'>
      <div className='w-3 h-3 bg-themegreen rounded-full animate-pulse' />
      <span className='text-sm font-semibold tracking-wider uppercase'>
        Nationwide Presence
      </span>
      <div className='w-3 h-3 bg-themegreen rounded-full animate-pulse' />
    </div>

    <h2 className='text-slate-900 lg:text-6xl text-4xl font-bold font-poppins mb-6 leading-tight'>
      Our{' '}
      <span className='text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-themegreen to-slate-900 font-extrabold'>
        Professional Network
      </span>
    </h2>

    <p className='text-slate-600 text-lg font-poppins leading-relaxed max-w-2xl mx-auto'>
      Strategically positioned across Cameroon's major cities, our branches
      deliver premium financial services with the highest standards of
      professionalism and customer care.
    </p>
  </div>
);

const MapSection = ({ totalBranches }) => (
  <div
    data-aos='fade-right'
    className='relative h-[650px] rounded-2xl overflow-hidden shadow-2xl border border-slate-200'
  >
    <iframe
      title='MMOCCUL Branches Map'
      src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1526000!2d8.0!3d4.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1060664a9b983f7d%3A0x5b9b9b9b9b9b9b9b!2sCameroon!5e0!3m2!1sen!2s!4v1234567890'
      width='100%'
      height='100%'
      style={{ border: 0 }}
      allowFullScreen=''
      loading='lazy'
      referrerPolicy='no-referrer-when-downgrade'
      className='grayscale-[20%] hover:grayscale-0 transition-all duration-700'
    />

    {/* Overlay: Branch Count */}
    <div className='absolute top-6 left-6 bg-gradient-to-r from-slate-900 to-slate-700 text-white rounded-xl p-6 shadow-xl'>
      <div className='flex items-center gap-4'>
        <div className='w-16 h-16 bg-themegreen/20 rounded-full flex items-center justify-center border-2 border-themegreen/50'>
          <FaMapMarkerAlt className='text-themegreen text-2xl' />
        </div>
        <div>
          <p className='text-2xl font-bold font-poppins'>
            {totalBranches} Strategic Locations
          </p>
          <p className='text-slate-200 text-sm mt-1'>
            Premium service across Cameroon
          </p>
        </div>
      </div>
    </div>

    {/* Overlay: Legend */}
    <div className='absolute bottom-6 right-6 bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-lg border border-slate-200'>
      <div className='flex items-center gap-3'>
        <div className='w-4 h-4 bg-gradient-to-r from-themegreen to-green-600 rounded-full' />
        <span className='text-slate-700 text-sm font-medium'>Head Office</span>
        <div className='w-4 h-4 bg-slate-400 rounded-full ml-4' />
        <span className='text-slate-700 text-sm font-medium'>
          Branch Locations
        </span>
      </div>
    </div>
  </div>
);

const BranchCard = ({ branch, index, isSelected, onSelect }) => (
  <div
    key={branch.id}
    data-aos='fade-up'
    data-aos-delay={index * 100}
    onClick={() => onSelect(branch.id)}
    className={`group relative bg-gradient-to-br from-white to-slate-50 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border-2 ${
      isSelected
        ? 'border-themegreen/50 bg-gradient-to-br from-white to-themegreen/5'
        : 'border-transparent hover:border-slate-200/50'
    } transform hover:-translate-y-1 hover:scale-[1.02]`}
  >
    {/* Head Office Badge */}
    {branch.type === 'Head Office' && (
      <div className='absolute top-4 right-4 px-4 py-2 bg-gradient-to-r from-slate-900 to-themegreen text-white text-xs font-bold rounded-full shadow-lg border border-slate-700/50'>
        <div className='flex items-center gap-2'>
          <div className='w-2 h-2 bg-white rounded-full animate-pulse' />
          {branch.type}
        </div>
      </div>
    )}

    {/* Branch Name */}
    <h3 className='text-slate-900 text-2xl font-bold font-poppins mb-4 group-hover:text-themegreen transition-colors duration-300'>
      {branch.name}
    </h3>

    {/* Address */}
    <div className='flex items-start gap-4 mb-4'>
      <div className='w-12 h-12 bg-gradient-to-r from-themegreen to-green-600 rounded-full flex items-center justify-center shadow-lg'>
        <FaMapMarkerAlt className='text-white text-lg' />
      </div>
      <div className='flex-1'>
        <p className='text-slate-600 text-sm font-medium mb-1 uppercase tracking-wide text-themegreen/80'>
          Location
        </p>
        <p className='text-slate-800 text-base leading-relaxed'>
          {branch.address}
        </p>
      </div>
    </div>

    {/* Phone & Hours */}
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-6'>
      <div className='flex items-center gap-4'>
        <div className='w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center'>
          <FaPhone className='text-themegreen text-lg' />
        </div>
        <div>
          <p className='text-slate-600 text-sm font-medium mb-1 uppercase tracking-wide text-themegreen/80'>
            Phone
          </p>
          <a
            href={`tel:${branch.phone}`}
            className='text-slate-800 text-base font-semibold hover:text-themegreen transition-colors'
          >
            {branch.phone}
          </a>
        </div>
      </div>

      <div className='flex items-start gap-4'>
        <div className='w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center'>
          <FaClock className='text-themegreen text-lg' />
        </div>
        <div>
          <p className='text-slate-600 text-sm font-medium mb-1 uppercase tracking-wide text-themegreen/80'>
            Opening Hours
          </p>
          <p className='text-slate-700 text-sm leading-relaxed'>
            {branch.hours}
          </p>
        </div>
      </div>
    </div>

    {/* Get Directions */}
    <div className='flex justify-end'>
      <a
        href={branch.mapUrl}
        target='_blank'
        rel='noopener noreferrer'
        onClick={(e) => e.stopPropagation()}
        className='inline-flex items-center gap-3 bg-gradient-to-r from-slate-900 to-themegreen hover:from-themegreen hover:to-slate-900 text-white text-base font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 border border-slate-700/30'
      >
        <FaDirections className='text-lg' />
        <span>Get Directions</span>
        <div className='w-2 h-2 bg-white rounded-full animate-pulse' />
      </a>
    </div>

    {/* Hover Overlay */}
    <div className='absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-themegreen/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none' />
  </div>
);

const CtaSection = () => (
  <div data-aos='fade-up' className='mt-20 text-center max-w-3xl mx-auto'>
    <div className='bg-gradient-to-br from-slate-900 to-slate-700 text-white rounded-3xl p-12 shadow-2xl border border-slate-600/50'>
      <div className='flex items-center justify-center gap-4 mb-6'>
        <div className='w-16 h-16 bg-themegreen rounded-full flex items-center justify-center shadow-lg'>
          <FaPhone className='text-white text-2xl' />
        </div>
        <div className='w-16 h-16 bg-gradient-to-r from-themegreen to-green-600 rounded-full flex items-center justify-center shadow-lg'>
          <FaDirections className='text-white text-2xl' />
        </div>
      </div>

      <h3 className='text-3xl font-bold font-poppins mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-200'>
        Need Assistance?
      </h3>

      <p className='text-slate-200 text-lg mb-8 leading-relaxed'>
        Our dedicated team is ready to assist you with finding the most
        convenient branch or exploring alternative service options tailored to
        your needs.
      </p>

      <div className='flex flex-col sm:flex-row gap-4 justify-center'>
        <a
          href='#contact'
          className='inline-flex items-center gap-3 bg-gradient-to-r from-themegreen to-green-600 hover:from-green-600 hover:to-themegreen text-white text-lg font-semibold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 border border-green-400/30'
        >
          <FaPhone />
          <span>Contact Our Team</span>
        </a>
        <a
          href='#services'
          className='inline-flex items-center gap-3 bg-gradient-to-r from-slate-700 to-slate-600 hover:from-slate-600 hover:to-slate-700 text-white text-lg font-semibold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 border border-slate-500/30'
        >
          <FaDirections />
          <span>Explore Services</span>
        </a>
      </div>
    </div>
  </div>
);

const ScrollbarStyles = () => (
  <style jsx>{`
    .custom-scrollbar::-webkit-scrollbar {
      width: 8px;
    }
    .custom-scrollbar::-webkit-scrollbar-track {
      background: linear-gradient(180deg, #f8fafc, #e2e8f0);
      border-radius: 10px;
      margin: 8px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background: linear-gradient(180deg, #10b981, #059669);
      border-radius: 10px;
      border: 2px solid #f8fafc;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
      background: linear-gradient(180deg, #059669, #047857);
      transform: translateX(2px);
    }
  `}</style>
);

// ─── Main Component ───────────────────────────────────────────────────────────

export const Branches = () => {
  const [selectedBranch, setSelectedBranch] = useState(null);

  useEffect(() => {
    AOS.init(AOS_CONFIG);
  }, []);

  return (
    <div
      id='branches'
      className='w-full min-h-screen flex flex-col items-center justify-center lg:px-[80px] px-[20px] lg:py-[120px] py-[80px] bg-gradient-to-br from-slate-50 via-white to-green-50'
    >
      <SectionHeader totalBranches={BRANCHES.length} />

      <div className='w-full max-w-7xl mx-auto grid lg:grid-cols-2 grid-cols-1 gap-12'>
        <MapSection totalBranches={BRANCHES.length} />

        {/* Branches List */}
        <div
          data-aos='fade-left'
          className='space-y-6 overflow-y-auto max-h-[650px] pr-3 custom-scrollbar'
        >
          {BRANCHES.map((branch, index) => (
            <BranchCard
              key={branch.id}
              branch={branch}
              index={index}
              isSelected={selectedBranch === branch.id}
              onSelect={setSelectedBranch}
            />
          ))}
        </div>
      </div>

      <CtaSection />
      <ScrollbarStyles />
    </div>
  );
};
