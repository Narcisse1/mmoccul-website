import React, { useState } from 'react'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import { IoCloseSharp, IoSearch, IoMenu } from 'react-icons/io5'
import logo from '../assets/Mmoccul__logo.png'
import { useLanguage } from '../context/LanguageContext'
import { HeaderSearch } from '../components/HeaderSearch'

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  const menuLinks = [
    { name: t('home'), to: '/' },
    { name: t('about'), to: '/about' },
    { name: t('services'), to: '/services' },
    { name: t('blog'), to: '/latest-news' },
    { name: t('contact'), to: '/contact' },
  ];

  return (
    <header className="w-full font-sans">

      {/* 🔹 TOP HEADER */}
      <div className="bg-[#f4f6f8] border-b border-gray-200 px-5 lg:px-12 py-4 flex justify-between items-center">

        {/* Left */}
        <div className="flex items-center gap-8 lg:gap-12">
          <RouterLink to="/" className="w-36 lg:w-42">
            <img src={logo} alt="Logo" style={{ width: '100%', height: '100%'}} />
          </RouterLink>

          {/* Tabs */}
          <div className="hidden lg:flex items-center gap-8 text-[15px] tracking-wide">
            <RouterLink to="/create-account" className="text-blue-900 font-medium cursor-pointer">
              {t('createAccount')}
            </RouterLink>
            <RouterLink to="/cards" className="text-gray-600 hover:text-blue-900 cursor-pointer">
              {t('cards')}
            </RouterLink>
          </div>
        </div>

        {/* Right */}
        <div className="hidden lg:flex flex-col items-end gap-3">

          {/* Top links */}
          <div className="flex items-center gap-6 text-[14px] text-gray-600 tracking-wide">
            <RouterLink to="/branches" className="hover:text-blue-900">
              {t('findBranch')}
            </RouterLink>
            <RouterLink to="/contact" className="hover:text-blue-900">
              {t('helpSupport')}
            </RouterLink>
            <RouterLink to="/careers" className="hover:text-blue-900">
              {t('careers')}
            </RouterLink>
            <div className="ml-4 flex items-center">
              <span 
                className={`text-blue-900 font-medium mr-2 cursor-pointer ${language === 'en' ? 'font-bold' : ''}`}
                onClick={() => handleLanguageChange('en')}
              >
                EN
              </span>
              <span>|</span>
              <span 
                className={`text-blue-900 font-medium ml-2 cursor-pointer ${language === 'fr' ? 'font-bold' : ''}`}
                onClick={() => handleLanguageChange('fr')}
              >
                FR
              </span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">

{/* Search */}
             <HeaderSearch />

            {/* Mobile Banking */}
            <a 
              href="https://mmocculonline.com/" 
              target="_blank"
              rel="noopener noreferrer"
              className="border border-blue-900 text-blue-900 text-[14px] px-6 py-2 rounded-full hover:bg-blue-900 hover:text-white transition"
            >
              {t('mobileBanking')}
            </a>

          </div>
        </div>

{/* Mobile Right */}
        <div className="flex items-center gap-3 lg:hidden">
          <HeaderSearch />
          <button onClick={() => setMenuOpen(true)} className="text-2xl text-blue-900">
            <IoMenu />
          </button>
        </div>
      </div>

      {/* 🔹 BLUE NAV BAR */}
      <div className="bg-[#1f4d8f] text-white py-4 hidden lg:block">
        <nav className="flex justify-center gap-14 text-[15px] tracking-wide">
          {menuLinks.map((link) => (
            <RouterLink
              key={link.to}
              to={link.to}
              className={`${
                location.pathname === link.to
                  ? 'font-semibold'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              {link.name}
            </RouterLink>
          ))}
        </nav>
      </div>

      {/* 🔹 MOBILE MENU */}
      <div className={`fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white z-50 shadow-xl transform ${
        menuOpen ? 'translate-x-0' : 'translate-x-full'
      } transition-transform duration-300`}>

<div className="flex justify-between items-center p-5 border-b">
           <span className="font-medium text-blue-900">{t('menu')}</span>
           <button onClick={() => setMenuOpen(false)}>
             <IoCloseSharp className="text-2xl text-blue-900" />
           </button>
         </div>

        <div className="p-5 space-y-5">
          {menuLinks.map((link) => (
            <RouterLink
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className="block text-lg text-gray-700 border-b pb-2"
            >
              {link.name}
            </RouterLink>
          ))}
          
          {/* Additional mobile menu items */}
          <RouterLink to="/create-account" className="block text-lg text-gray-700 border-b pb-2">
            {t('createAccount')}
          </RouterLink>
          <RouterLink to="/cards" className="block text-lg text-gray-700 border-b pb-2">
            {t('cards')}
          </RouterLink>
          <RouterLink to="/branches" className="block text-lg text-gray-700 border-b pb-2">
            {t('findBranch')}
          </RouterLink>
          <RouterLink to="/contact" className="block text-lg text-gray-700 border-b pb-2">
            {t('helpSupport')}
          </RouterLink>
        </div>

        <div className="absolute bottom-0 w-full p-5 border-t space-y-4 bg-white">

          {/* Mobile Banking Button - Better arranged */}
          <a 
            href="https://mmocculonline.com/" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-blue-900 text-white text-center py-3 px-4 rounded-full block text-sm font-semibold hover:bg-blue-800 transition shadow-lg flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            {t('mobileBanking')}
          </a>

          <div className="text-sm text-gray-500 flex justify-center items-center gap-3 pt-2">
            <span 
              className={`text-blue-900 font-medium mr-2 cursor-pointer ${language === 'en' ? 'font-bold' : ''}`}
              onClick={() => handleLanguageChange('en')}
            >
              EN
            </span>
            <span>|</span>
            <span 
              className={`text-blue-900 font-medium ml-2 cursor-pointer ${language === 'fr' ? 'font-bold' : ''}`}
              onClick={() => handleLanguageChange('fr')}
            >
              FR
            </span>
          </div>

        </div>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/30 z-40"
        />
      )}

    </header>
  )
}