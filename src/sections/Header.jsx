import React, { useState } from 'react'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import { IoCloseSharp, IoSearch, IoMenu } from 'react-icons/io5'
import logo from '../assets/Mmoccul__logo.png'

export const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const menuLinks = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/about' },
    { name: 'Services', to: '/services' },
    { name: 'Blog', to: '/latest-news' },
    { name: 'Contact', to: '/contact' },
  ];

  return (
    <header className="w-full font-sans">

      {/* 🔹 TOP HEADER */}
      <div className="bg-[#f4f6f8] border-b border-gray-200 px-5 lg:px-12 py-4 flex justify-between items-center">

        {/* Left */}
        <div className="flex items-center gap-8 lg:gap-12">
          <RouterLink to="/" className="w-12 lg:w-14">
            <img src={logo} alt="Logo" />
          </RouterLink>

          {/* Tabs */}
          <div className="hidden lg:flex items-center gap-8 text-[15px] tracking-wide">
            <span className="text-blue-900 font-medium cursor-pointer">
              Create Account
            </span>
            <span className="text-gray-600 hover:text-blue-900 cursor-pointer">
              Cards
            </span>
          </div>
        </div>

        {/* Right */}
        <div className="hidden lg:flex flex-col items-end gap-3">

          {/* Top links */}
          <div className="flex items-center gap-6 text-[14px] text-gray-600 tracking-wide">
            <a href="#" className="hover:text-blue-900">Find A Branch</a>
            <a href="#" className="hover:text-blue-900">Help and Support</a>
            <a href="#" className="hover:text-blue-900">Careers</a>
            <span className="ml-4 text-blue-900 font-medium">EN | FR</span>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">

            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="w-48 rounded-full border border-gray-300 px-4 py-2 text-[14px] focus:outline-none focus:border-blue-900"
              />
              <IoSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
            </div>

            {/* Mobile Banking */}
            <button className="border border-blue-900 text-blue-900 text-[14px] px-6 py-2 rounded-full hover:bg-blue-900 hover:text-white transition">
              Mobile Banking
            </button>

          </div>
        </div>

        {/* Mobile Right */}
        <div className="flex items-center gap-3 lg:hidden">
          <IoSearch className="text-xl text-blue-900" />
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
          <span className="font-medium text-blue-900">Menu</span>
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
        </div>

        <div className="absolute bottom-0 w-full p-5 border-t space-y-4">

          <button className="w-full border border-blue-900 text-blue-900 py-2 rounded-full">
            Mobile Banking
          </button>

          <div className="text-sm text-gray-500 flex justify-between">
            <span>EN | FR</span>
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