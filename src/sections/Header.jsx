import React, { useEffect, useState } from 'react'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import { IoCloseSharp } from 'react-icons/io5'
import { FaBars } from 'react-icons/fa'
import logo from '../assets/Mmoccul__logo.png'

export const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const menuLinks = [
    { name: 'Home', to: '/', isRoute: true },
    { name: 'About', to: '/about', isRoute: true },
    { name: 'Services', to: '/services', isRoute: true },
    { name: 'Blog', to: '/latest-news', isRoute: true },
    { name: 'Branches', to: '/branches', isRoute: true },
    { name: 'Contact', to: '/contact', isRoute: true },
  ];

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    }

  }, [menuOpen]);

  return (
    <header 
        className='py-3 lg:py-4 lg:px-[80px] px-5 fixed top-0 left-0 w-full z-50 shadow-2xl backdrop-blur-md'
        style={{
            background: 'linear-gradient(270deg, #0f172a, #1e3a5f, #0f172a)',
            backgroundSize: '200% 200%',
            animation: 'gradientBG 8s ease infinite'
        }}
    >
      <div className="flex justify-between items-center">
        {/* Logo with White Background */}
        <div className="w-14 lg:w-18 bg-white rounded-xl p-1.5 shadow-lg">
          <img src={logo} alt="Mmoccul Logo" className="w-full h-auto" />
        </div>
        {/* logo ends  */}

        {/* hamburger menu button (mobile only starts)  */}
        <button className='text-white text-2xl md:hidden p-3 hover:bg-white/10 rounded-lg transition-colors' onClick={() => setMenuOpen (!menuOpen)}>
          {menuOpen ? <IoCloseSharp /> : <FaBars />}
        </button>

        {/* desktop menu  */}
        <nav className='hidden md:block'>
          <ul className='flex items-center space-x-1'>
            {menuLinks.map((link, index) => (
              <li key={link.to}>
                {link.isRoute ? (
                  <RouterLink 
                    to={link.to}
                    className='cursor-pointer relative px-4 py-2 text-base font-medium text-white hover:text-themegreen transition-colors duration-300 group'
                  >
                    {link.name}
                    <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-themegreen group-hover:w-full transition-all duration-300 ${location.pathname === link.to ? 'w-full' : ''}`}></span>
                  </RouterLink>
                ) : (
                  <RouterLink 
                    to="/"
                    className='cursor-pointer relative px-4 py-2 text-base font-medium text-white hover:text-themegreen transition-colors duration-300 group'
                  >
                    {link.name}
                    <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-themegreen group-hover:w-full transition-all duration-300 ${link.name === 'Home' && location.pathname === '/' ? 'w-full' : ''}`}></span>
                  </RouterLink>
                )}
              </li>
            ))}
          </ul>

        </nav>
        
        {/* Create Account Button - Professional Design */}
        <div className='hidden md:block'>
          <RouterLink
            to="/create-account"
            className='inline-flex items-center gap-2 bg-themegreen text-white font-semibold text-sm py-2.5 px-7 rounded-lg hover:bg-green-600 transition-all duration-300 shadow-md hover:shadow-lg'
          >
            <span>Create Account</span>
            <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
            </svg>
          </RouterLink>
        </div>
      </div>
        {/* mobile menu (professional slide-in drawer) */}
       <div className={`fixed top-0 right-0 h-full w-80 bg-gradient-to-b from-black via-gray-900 to-black text-white 
        transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'}
        transition-transform duration-300 ease-in-out z-40 shadow-2xl border-l border-gray-700`}>
          
          {/* Header Section */}
          <div className='flex items-center justify-between p-6 border-b border-gray-700 bg-gradient-to-r from-gray-900 to-black'>
            <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl flex items-center justify-center shadow-lg">
              <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' />
              </svg>
            </div>
            <button 
              className='text-gray-300 hover:text-white transition-colors'
              onClick={() => setMenuOpen(false)}
            >
              <IoCloseSharp className='text-2xl' />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className='p-4 bg-gradient-to-r from-gray-900 to-black rounded-xl'>
            <ul className='space-y-1'>
              {menuLinks.map((link, index) => (
                <li key={link.to}>
                  {link.isRoute ? (
                    <RouterLink 
                      to={link.to}
                      onClick={() => setMenuOpen(false)}
                      className={`block w-full py-2.5 px-3 rounded-lg font-medium text-base transition-all duration-300 ${
                        location.pathname === link.to 
                          ? 'bg-gray-800 text-white border border-gray-600 shadow-sm' 
                          : 'hover:bg-gray-800 hover:text-white text-gray-200'
                      }`}
                    >
                      <div className='flex items-center justify-between'>
                        <span>{link.name}</span>
                        <svg className='w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-all duration-300' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                        </svg>
                      </div>
                    </RouterLink>
                  ) : (
                    <RouterLink 
                      to="/"
                      onClick={() => setMenuOpen(false)}
                      className={`block w-full py-2.5 px-3 rounded-lg font-medium text-base transition-all duration-300 ${
                        link.name === 'Home' && location.pathname === '/' 
                          ? 'bg-gray-800 text-white border border-gray-600 shadow-sm' 
                          : 'hover:bg-gray-800 hover:text-white text-gray-200'
                      }`}
                    >
                      <div className='flex items-center justify-between'>
                        <span>{link.name}</span>
                        <svg className='w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-all duration-300' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                        </svg>
                      </div>
                    </RouterLink>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Divider */}
          <div className='mx-6 border-t border-gray-700'></div>

          {/* CTA Section */}
          <div className='p-4 bg-gradient-to-r from-gray-900 to-black rounded-xl'>
            <RouterLink
              to="/create-account"
              onClick={() => setMenuOpen(false)}
              className='w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold text-base py-3 px-4 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105'
            >
              <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 4v16m8-8H4' />
              </svg>
              <span>Create Account</span>
            </RouterLink>
          </div>

          {/* Footer Info */}
          <div className='p-6 border-t border-gray-700 bg-gradient-to-r from-black to-gray-900'>
            <p className='text-xs text-gray-400 text-center font-medium'>
              Secure. Trusted. Professional.
            </p>
          </div>
        </div>
    </header>
  )
}
