import React, { useState } from 'react'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import { IoCloseSharp, IoMenu } from 'react-icons/io5'
import logo from '../assets/Mmoccul__logo.png'
import { useLanguage } from '../context/LanguageContext'
import { HeaderSearch } from '../components/HeaderSearch'

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()
  const location = useLocation()

  const handleLanguageChange = (lang) => {
    setLanguage(lang)
  }

  const menuLinks = [
    { name: t('home'), to: '/' },
    { name: t('about'), to: '/about' },
    { name: t('services'), to: '/services' },
    { name: t('blog'), to: '/latest-news' },
    { name: t('contact'), to: '/contact' },
  ]

  return (
    <header className="w-full font-sans">

      {/* 🔹 TOP HEADER */}
      <div className="bg-[#f4f6f8] border-b border-gray-200 px-4 lg:px-12 py-3 lg:py-4 flex justify-between items-center">

        {/* Left — Logo + Desktop Tabs */}
        <div className="flex items-center gap-6 lg:gap-12">
          <RouterLink to="/" className="block w-28 sm:w-32 lg:w-40 shrink-0">
            <img src={logo} alt="MMOCCUL Logo" className="w-full h-auto object-contain" />
          </RouterLink>

          {/* Desktop tabs only */}
          <div className="hidden lg:flex items-center gap-8 text-[15px] tracking-wide">
            <RouterLink to="/create-account" className="text-blue-900 font-medium cursor-pointer">
              {t('createAccount')}
            </RouterLink>
            <RouterLink to="/cards" className="text-gray-600 hover:text-blue-900 cursor-pointer">
              {t('cards')}
            </RouterLink>
          </div>
        </div>

        {/* Right — Desktop only */}
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
            <div className="ml-4 flex items-center gap-2">
              <span
                className={`text-blue-900 font-medium cursor-pointer ${language === 'en' ? 'font-bold' : ''}`}
                onClick={() => handleLanguageChange('en')}
              >
                EN
              </span>
              <span className="text-gray-400">|</span>
              <span
                className={`text-blue-900 font-medium cursor-pointer ${language === 'fr' ? 'font-bold' : ''}`}
                onClick={() => handleLanguageChange('fr')}
              >
                FR
              </span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <HeaderSearch />
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

        {/* Mobile Right — Search icon + Hamburger */}
        <div className="flex items-center gap-3 lg:hidden">
          <HeaderSearch />
          <button
            onClick={() => setMenuOpen(true)}
            className="text-2xl text-blue-900 p-1"
            aria-label="Open menu"
          >
            <IoMenu />
          </button>
        </div>
      </div>

      {/* 🔹 DESKTOP NAV BAR */}
      <div className="bg-[#1f4d8f] text-white py-4 hidden lg:block">
        <nav className="flex justify-center gap-14 text-[15px] tracking-wide">
          {menuLinks.map((link) => (
            <RouterLink
              key={link.to}
              to={link.to}
              className={`transition-colors ${
                location.pathname === link.to
                  ? 'font-semibold text-white'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              {link.name}
            </RouterLink>
          ))}
        </nav>
      </div>

      {/* 🔹 MOBILE MENU DRAWER */}
      <div
        className={`fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white z-50 shadow-xl transform transition-transform duration-300 flex flex-col ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="flex justify-between items-center px-5 py-4 border-b shrink-0">
          <RouterLink to="/" onClick={() => setMenuOpen(false)} className="w-28">
            <img src={logo} alt="MMOCCUL Logo" className="w-full h-auto object-contain" />
          </RouterLink>
          <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
            <IoCloseSharp className="text-2xl text-blue-900" />
          </button>
        </div>

        {/* Drawer Links — scrollable if content overflows */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-1">
          {menuLinks.map((link) => (
            <RouterLink
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={`block py-3 border-b text-base font-medium transition-colors ${
                location.pathname === link.to
                  ? 'text-blue-900'
                  : 'text-gray-700 hover:text-blue-900'
              }`}
            >
              {link.name}
            </RouterLink>
          ))}

          {/* Extra links */}
          <RouterLink
            to="/create-account"
            onClick={() => setMenuOpen(false)}
            className="block py-3 border-b text-base text-gray-700 hover:text-blue-900 font-medium"
          >
            {t('createAccount')}
          </RouterLink>
          <RouterLink
            to="/cards"
            onClick={() => setMenuOpen(false)}
            className="block py-3 border-b text-base text-gray-700 hover:text-blue-900 font-medium"
          >
            {t('cards')}
          </RouterLink>
          <RouterLink
            to="/branches"
            onClick={() => setMenuOpen(false)}
            className="block py-3 border-b text-base text-gray-700 hover:text-blue-900 font-medium"
          >
            {t('findBranch')}
          </RouterLink>
          <RouterLink
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="block py-3 border-b text-base text-gray-700 hover:text-blue-900 font-medium"
          >
            {t('helpSupport')}
          </RouterLink>
          <RouterLink
            to="/careers"
            onClick={() => setMenuOpen(false)}
            className="block py-3 border-b text-base text-gray-700 hover:text-blue-900 font-medium"
          >
            {t('careers')}
          </RouterLink>
        </div>

        {/* Drawer Footer */}
        <div className="shrink-0 px-5 py-5 border-t bg-white space-y-4">
          <a
            href="https://mmocculonline.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-blue-900 text-white text-center py-3 px-4 rounded-full flex items-center justify-center gap-2 text-sm font-semibold hover:bg-blue-800 transition shadow-md"
          >
            <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            {t('mobileBanking')}
          </a>

          {/* Language switcher */}
          <div className="flex justify-center items-center gap-3 text-sm">
            <span
              className={`cursor-pointer font-medium transition-colors ${
                language === 'en' ? 'text-blue-900 font-bold' : 'text-gray-500 hover:text-blue-900'
              }`}
              onClick={() => handleLanguageChange('en')}
            >
              EN
            </span>
            <span className="text-gray-300">|</span>
            <span
              className={`cursor-pointer font-medium transition-colors ${
                language === 'fr' ? 'text-blue-900 font-bold' : 'text-gray-500 hover:text-blue-900'
              }`}
              onClick={() => handleLanguageChange('fr')}
            >
              FR
            </span>
          </div>
        </div>
      </div>

      {/* Overlay behind drawer */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
        />
      )}

    </header>
  )
}