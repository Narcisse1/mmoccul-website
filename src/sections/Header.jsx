import React, { useEffect, useState, useRef } from 'react'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import { IoCloseSharp, IoSearch, IoMenu } from 'react-icons/io5'
import logo from '../assets/Mmoccul__logo.png'

export const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const searchInputRef = useRef(null);

  const menuLinks = [
    { name: 'Home', to: '/', isRoute: true },
    { name: 'About', to: '/about', isRoute: true },
    { name: 'Services', to: '/services', isRoute: true },
    { name: 'Blog', to: '/latest-news', isRoute: true },
    { name: 'Branches', to: '/branches', isRoute: true },
    { name: 'Contact', to: '/contact', isRoute: true },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('overflow-hidden');
      document.body.style.touchAction = 'none';
    } else {
      document.body.classList.remove('overflow-hidden');
      document.body.style.touchAction = '';
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
      document.body.style.touchAction = '';
    }

  }, [menuOpen]);

  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.search.value;
    if (query.trim()) {
      console.log('Searching for:', query);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 h-20 transition-all duration-300 border-b border-white/20 ${
        scrolled
          ? 'shadow-2xl bg-slate-900/95 backdrop-blur-xl'
          : 'shadow-xl bg-slate-900/95 backdrop-blur-xl'
      }`}
    >
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 flex justify-between items-center h-full">
        {/* Logo */}
        <div className="flex-shrink-0">
          <RouterLink to="/" className='block w-12 lg:w-18'>
            <div className="bg-white rounded-xl p-1.5 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <img src={logo} alt="Mmoccul Logo" className="w-full h-auto" />
            </div>
          </RouterLink>
        </div>

        {/* Desktop Navigation */}
        <nav className='hidden lg:block'>
          <ul className='flex items-center space-x-1'>
            {menuLinks.map((link) => (
              <li key={link.to}>
                {link.isRoute ? (
                  <RouterLink
                    to={link.to}
                    className='cursor-pointer relative px-4 py-2 text-sm font-medium text-white/90 hover:text-white transition-colors duration-300 group'
                  >
                    {link.name}
                    <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-themegreen group-hover:w-full transition-all duration-300 ${location.pathname === link.to ? 'w-full' : ''}`}></span>
                  </RouterLink>
                ) : (
                  <RouterLink
                    to="/"
                    className='cursor-pointer relative px-4 py-2 text-sm font-medium text-white/90 hover:text-white transition-colors duration-300 group'
                  >
                    {link.name}
                    <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-themegreen group-hover:w-full transition-all duration-300 ${link.name === 'Home' && location.pathname === '/' ? 'w-full' : ''}`}></span>
                  </RouterLink>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Actions */}
        <div className='hidden lg:flex items-center space-x-3'>
          {/* Search Bar */}
          <div className={`flex items-center transition-all duration-300 ${searchOpen ? 'w-56' : 'w-10'}`}>
            <form onSubmit={handleSearch} className='relative w-full'>
              <input
                ref={searchInputRef}
                type="text"
                name="search"
                placeholder="Search..."
                className={`w-full bg-white/10 border border-white/20 rounded-full py-2.5 pl-11 pr-4 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-themegreen/50 focus:border-themegreen transition-all duration-300 ${searchOpen ? 'opacity-100' : 'opacity-0 w-0 pointer-events-none absolute'}`}
              />
              <button
                type="submit"
                onClick={() => setSearchOpen(!searchOpen)}
                className='absolute left-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-themegreen transition-colors'
              >
                <IoSearch className='w-4 h-4' />
              </button>
            </form>
          </div>

          {/* Create Account Button */}
          <RouterLink
            to="/create-account"
            className='inline-flex items-center gap-2 bg-gradient-to-r from-themegreen to-blue-500 text-white font-semibold text-sm py-2.5 px-6 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 hover:shadow-xl'
          >
            <span>Create Account</span>
            <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
            </svg>
          </RouterLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`lg:hidden text-white text-xl p-2.5 rounded-xl transition-all duration-300 ${
            menuOpen 
              ? 'bg-themegreen/30 text-white rotate-90 shadow-lg shadow-themegreen/30' 
              : 'bg-white/5 hover:bg-white/15 hover:shadow-lg hover:shadow-white/10'
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label='Toggle menu'
        >
          <div className='transition-transform duration-300'>
            {menuOpen ? <IoCloseSharp /> : <IoMenu />}
          </div>
        </button>
      </div>

      {/* Mobile Menu - Professional Slide-in Drawer */}
      <div className={`fixed top-0 right-0 h-full w-[85vw] max-w-80 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white
        transform ${menuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
        transition-all duration-300 ease-out z-50 shadow-2xl shadow-black/50 border-l border-white/10`}>

        {/* Mobile Menu Header */}
        <div className='flex items-center justify-between p-4 border-b border-white/10 bg-slate-800/50'>
          <div className="w-10 h-10 bg-gradient-to-br from-themegreen/30 to-blue-500/30 rounded-xl flex items-center justify-center shadow-lg border border-themegreen/30">
            <svg className='w-5 h-5 text-themegreen' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' />
            </svg>
          </div>
          <button
            className='text-white/70 hover:text-white transition-all p-2 hover:bg-white/10 rounded-lg'
            onClick={() => setMenuOpen(false)}
          >
            <IoCloseSharp className='text-xl' />
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className='p-3'>
          <ul className='space-y-1.5'>
            {menuLinks.map((link) => (
              <li key={link.to}>
                {link.isRoute ? (
                  <RouterLink
                    to={link.to}
                    onClick={() => setMenuOpen(false)}
                    className={`block w-full py-3 px-4 rounded-xl font-medium text-sm transition-all duration-300 ${
                      location.pathname === link.to
                        ? 'bg-white text-slate-900 border border-white/50 shadow-sm'
                        : 'bg-white/20 text-slate-900 hover:bg-white/40 hover:text-slate-900 hover:translate-x-1'
                    }`}
                  >
                    <div className='flex items-center justify-between'>
                      <span>{link.name}</span>
                      <svg className={`w-4 h-4 transition-all duration-300 ${
                        location.pathname === link.to ? 'text-slate-900' : 'text-slate-700'
                      }`} fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                      </svg>
                    </div>
                  </RouterLink>
                ) : (
                  <RouterLink
                    to="/"
                    onClick={() => setMenuOpen(false)}
                    className={`block w-full py-3 px-4 rounded-xl font-medium text-sm transition-all duration-300 ${
                      link.name === 'Home' && location.pathname === '/'
                        ? 'bg-white text-slate-900 border border-white/50 shadow-sm'
                        : 'bg-white/20 text-slate-900 hover:bg-white/40 hover:text-slate-900 hover:translate-x-1'
                    }`}
                  >
                    <div className='flex items-center justify-between'>
                      <span>{link.name}</span>
                      <svg className={`w-4 h-4 transition-all duration-300 ${
                        link.name === 'Home' && location.pathname === '/' ? 'text-slate-900' : 'text-slate-700'
                      }`} fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                      </svg>
                    </div>
                  </RouterLink>
                )}
              </li>
            ))}
          </ul>
        </nav>

         {/* Mobile CTA - below navigation */}}
         <div className='p-3 border-t border-white/10 bg-white/10'>
           <RouterLink
             to='/create-account'
             onClick={() => setMenuOpen(false)}
             className={`block w-full py-3 px-4 rounded-xl font-medium text-sm transition-all duration-300 bg-white text-slate-900 hover:bg-white/80 hover:text-slate-900`}
           >
             <div className='flex items-center justify-center gap-2'>
               <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                 <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 4v16m8-8H4' />
               </svg>
               <span>Create Account</span>
             </div>
           </RouterLink>
         </div>
      </div>

      {/* Mobile Search Overlay */}
      {searchOpen && (
        <div className='fixed inset-0 bg-slate-900/95 backdrop-blur-xl z-40 lg:hidden'>
          <div className='flex items-center justify-center h-full px-6'>
            <form onSubmit={handleSearch} className='w-full'>
              <div className='relative'>
                <input
                  ref={searchInputRef}
                  type="text"
                  name="search"
                  placeholder="Search..."
                  className='w-full bg-white/5 border-2 border-themegreen/50 rounded-2xl py-4 pl-14 pr-14 text-white text-lg placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-themegreen/50 transition-all duration-300 focus:border-themegreen'
                  autoFocus
                />
                <button
                  type="submit"
                  className='absolute left-5 top-1/2 -translate-y-1/2 text-themegreen hover:text-white transition-colors'
                >
                  <IoSearch className='w-6 h-6' />
                </button>
                <button
                  type='button'
                  onClick={() => setSearchOpen(false)}
                  className='absolute right-5 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors rounded-full p-1.5 hover:bg-white/10'
                >
                  <IoCloseSharp className='w-6 h-6' />
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </header>
  )
}