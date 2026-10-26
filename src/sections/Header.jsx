import React, { useEffect, useRef, useState } from 'react'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import { IoChevronDown, IoCloseSharp, IoMenu } from 'react-icons/io5'
import { ArrowRight, ArrowUpRight, Banknote, CreditCard, MapPin, PiggyBank, Smartphone } from 'lucide-react'
import logo from '../assets/Mmoccul__logo.png'
import { useLanguage } from '../context/LanguageContext'
import { HeaderSearch } from '../components/HeaderSearch'
import { servicePages } from '../data/servicePages'
import { branches } from '../data/branches'

const serviceMenuGroups = [
  { title: 'Savings & investments', icon: PiggyBank, slugs: ['savings-accounts', 'fixed-deposits'] },
  { title: 'Loans', icon: Banknote, slugs: ['personal-loans', 'business-loans'] },
  { title: 'Digital banking', icon: Smartphone, slugs: ['mobile-banking', 'money-transfer'] },
  { title: 'Cards & payments', icon: CreditCard, slugs: ['salary-accounts', 'bill-payments'], extra: { title: 'ATM & VISA Cards', to: '/cards' } },
]

const branchRegions = [
  { title: 'Centre Region', cities: ['Yaoundé'] },
  { title: 'Littoral Region', cities: ['Douala'] },
  { title: 'West Region', cities: ['Bafoussam', 'Dschang'] },
  { title: 'North West Region', cities: ['Bamenda'] },
  { title: 'South West Region', cities: ['Buea', 'Kumba', 'Mmockmbie'] },
  { title: 'East Region', cities: ['Bertoua'] },
  { title: 'South Region', cities: ['Kribi'] },
]

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [branchesDropdownOpen, setBranchesDropdownOpen] = useState(false)
  const [mobileBranchesOpen, setMobileBranchesOpen] = useState(false)
  const desktopNavRef = useRef(null)
  const mobileMenuButtonRef = useRef(null)
  const { language, setLanguage, t } = useLanguage()
  const location = useLocation()

  useEffect(() => {
    const closeOnOutsideClick = (event) => {
      if (desktopNavRef.current && !desktopNavRef.current.contains(event.target)) {
        setServicesDropdownOpen(false)
        setBranchesDropdownOpen(false)
      }
    }
    const closeOnEscape = (event) => {
      if (event.key !== 'Escape') return
      setServicesDropdownOpen(false)
      setBranchesDropdownOpen(false)
      setMobileServicesOpen(false)
      setMobileBranchesOpen(false)
      if (menuOpen) {
        setMenuOpen(false)
        mobileMenuButtonRef.current?.focus()
      }
    }
    document.addEventListener('pointerdown', closeOnOutsideClick)
    document.addEventListener('keydown', closeOnEscape)
    return () => {
      document.removeEventListener('pointerdown', closeOnOutsideClick)
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [menuOpen])

  const handleLanguageChange = (lang) => {
    setLanguage(lang)
  }

  const menuLinks = [
    { name: t('home'), to: '/' },
    { name: t('about'), to: '/about' },
    { name: t('services'), to: '/services' },
    { name: t('findBranch'), to: '/branches' },
    { name: t('blog'), to: '/latest-news' },
    { name: t('contact'), to: '/contact' },
  ]

  return (
    <header className="site-header w-full font-sans">

      {/* 🔹 TOP HEADER */}
      <div className="bg-[#F5F7FA] border-b border-gray-200 px-4 lg:px-12 py-3 lg:py-4 flex justify-between items-center">

        {/* Left — Logo + Desktop Tabs */}
        <div className="flex items-center gap-6 lg:gap-12">
          <RouterLink to="/" className="block w-28 sm:w-32 lg:w-40 shrink-0">
            <img src={logo} alt="MMOCCUL Logo" className="w-full h-auto object-contain" />
          </RouterLink>

          {/* Desktop tabs only */}
          <div className="hidden lg:flex items-center gap-8 text-[15px] tracking-wide">
            <RouterLink to="/create-account" className="text-[#002E8A] font-medium cursor-pointer">
              {t('createAccount')}
            </RouterLink>
            <RouterLink to="/cards" className="text-gray-600 hover:text-[#D4A735] cursor-pointer">
              {t('cards')}
            </RouterLink>
          </div>
        </div>

        {/* Right — Desktop only */}
        <div className="hidden lg:flex flex-col items-end gap-3">

          {/* Top links */}
          <div className="flex items-center gap-6 text-[14px] text-gray-600 tracking-wide">
            <RouterLink to="/branches" className="hover:text-[#D4A735]">
              {t('findBranch')}
            </RouterLink>
            <RouterLink to="/contact" className="hover:text-[#D4A735]">
              {t('helpSupport')}
            </RouterLink>
            <RouterLink to="/careers" className="hover:text-[#D4A735]">
              {t('careers')}
            </RouterLink>
            <div className="ml-4 flex items-center gap-2">
              <span
                className={`text-[#002E8A] hover:text-[#D4A735] font-medium cursor-pointer ${language === 'en' ? 'font-bold' : ''}`}
                onClick={() => handleLanguageChange('en')}
              >
                EN
              </span>
              <span className="text-gray-400">|</span>
              <span
                className={`text-[#002E8A] hover:text-[#D4A735] font-medium cursor-pointer ${language === 'fr' ? 'font-bold' : ''}`}
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
              className="border border-[#002E8A] text-[#002E8A] text-[14px] px-6 py-2 rounded-full hover:border-[#D4A735] hover:bg-[#D4A735] hover:text-[#002E8A] transition"
            >
              {t('mobileBanking')}
            </a>
          </div>
        </div>

        {/* Mobile Right — Search icon + Hamburger */}
        <div className="flex items-center gap-3 lg:hidden">
          <HeaderSearch />
          <button
            ref={mobileMenuButtonRef}
            onClick={() => setMenuOpen(true)}
            className="text-2xl text-[#002E8A] p-1"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation-drawer"
          >
            <IoMenu />
          </button>
        </div>
      </div>

      {/* 🔹 DESKTOP NAV BAR */}
      <div className="bg-[#002E8A] text-white py-4 hidden lg:block">
        <nav
          className="site-primary-nav flex items-center justify-center gap-14 text-[15px] tracking-wide"
          ref={desktopNavRef}
          aria-label="Main navigation"
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setServicesDropdownOpen(false)
              setBranchesDropdownOpen(false)
            }
          }}
        >
          {menuLinks.map((link) => link.to === '/services' ? (
            <div
              key={link.to}
              className={`site-nav-item site-nav-item--mega${servicesDropdownOpen ? ' is-open' : ''}`}
              onMouseEnter={() => {
                setBranchesDropdownOpen(false)
                setServicesDropdownOpen(true)
              }}
              onMouseLeave={() => setServicesDropdownOpen(false)}
              onFocusCapture={() => setServicesDropdownOpen(true)}
            >
              <div className="site-nav-trigger">
                <RouterLink
                  to="/services"
                  onClick={() => setServicesDropdownOpen(false)}
                  className={`site-nav-link ${
                    location.pathname.startsWith('/services')
                      ? 'is-active'
                      : ''
                  }`}
                >
                  {link.name}
                </RouterLink>
                <button
                  type="button"
                  onClick={() => setServicesDropdownOpen((open) => !open)}
                  className="site-nav-chevron"
                  aria-label="Show services"
                  aria-expanded={servicesDropdownOpen}
                  aria-haspopup="true"
                  aria-controls="services-mega-menu"
                >
                  <IoChevronDown className={`transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>
              {servicesDropdownOpen && (
                <div className="site-mega-menu" id="services-mega-menu">
                  <div className="site-mega-menu__inner">
                    <div className="site-mega-menu__intro">
                      <span className="site-mega-menu__eyebrow">Financial solutions</span>
                      <h2>Services for every stage</h2>
                      <p>Explore member-focused ways to save, borrow, pay, and bank digitally.</p>
                      <RouterLink to="/services" onClick={() => setServicesDropdownOpen(false)} className="site-mega-menu__all">
                        Explore all services <ArrowRight size={15} />
                      </RouterLink>
                    </div>
                    <div className="site-mega-menu__columns">
                      {serviceMenuGroups.map(({ title, icon: Icon, slugs, extra }) => (
                        <section className="site-mega-menu__group" key={title} aria-label={title}>
                          <h3><Icon size={17} /> {title}</h3>
                          {slugs.map((slug) => {
                            const service = servicePages.find((item) => item.slug === slug)
                            if (!service) return null
                            return (
                              <RouterLink key={service.slug} to={`/services/${service.slug}`} onClick={() => setServicesDropdownOpen(false)} className="site-mega-menu__link">
                                <span>{service.title}</span><ArrowUpRight size={14} />
                              </RouterLink>
                            )
                          })}
                          {extra && (
                            <RouterLink to={extra.to} onClick={() => setServicesDropdownOpen(false)} className="site-mega-menu__link">
                              <span>{extra.title}</span><ArrowUpRight size={14} />
                            </RouterLink>
                          )}
                        </section>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : link.to === '/branches' ? (
            <div
              key={link.to}
              className={`site-nav-item site-nav-item--mega${branchesDropdownOpen ? ' is-open' : ''}`}
              onMouseEnter={() => {
                setServicesDropdownOpen(false)
                setBranchesDropdownOpen(true)
              }}
              onMouseLeave={() => setBranchesDropdownOpen(false)}
              onFocusCapture={() => setBranchesDropdownOpen(true)}
            >
              <div className="site-nav-trigger">
                <RouterLink
                  to="/branches"
                  onClick={() => setBranchesDropdownOpen(false)}
                  className={`site-nav-link ${
                    location.pathname.startsWith('/branches')
                      ? 'is-active'
                      : ''
                  }`}
                >
                  {link.name}
                </RouterLink>
                <button
                  type="button"
                  onClick={() => setBranchesDropdownOpen((open) => !open)}
                  className="site-nav-chevron"
                  aria-label="Show branches"
                  aria-expanded={branchesDropdownOpen}
                  aria-haspopup="true"
                  aria-controls="branches-mega-menu"
                >
                  <IoChevronDown className={`transition-transform ${branchesDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>
              {branchesDropdownOpen && (
                <div className="site-mega-menu site-mega-menu--branches" id="branches-mega-menu">
                  <div className="site-mega-menu__inner site-mega-menu__inner--branches">
                    <div className="site-mega-menu__intro">
                      <span className="site-mega-menu__eyebrow">Across Cameroon</span>
                      <h2>Find your nearest branch</h2>
                      <p>Visit a local team for guidance and support with your financial services.</p>
                      <RouterLink to="/branches" onClick={() => setBranchesDropdownOpen(false)} className="site-mega-menu__all">
                        View all branches <ArrowRight size={15} />
                      </RouterLink>
                    </div>
                    <div className="site-mega-menu__regions">
                      {branchRegions.map(({ title, cities }) => {
                        const regionBranches = branches.filter((branch) => cities.includes(branch.city))
                        if (!regionBranches.length) return null
                        return (
                          <section className="site-mega-menu__region" key={title} aria-label={title}>
                            <h3><MapPin size={15} /> {title}</h3>
                            {regionBranches.map((branch) => (
                              <RouterLink key={branch.slug} to={`/branches/${branch.slug}`} onClick={() => setBranchesDropdownOpen(false)} className="site-mega-menu__link">
                                <span>{branch.name.replace(`${branch.city} – `, '')}</span><ArrowUpRight size={14} />
                              </RouterLink>
                            ))}
                          </section>
                        )
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
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
        id="mobile-navigation-drawer"
        role="dialog"
        aria-modal={menuOpen || undefined}
        aria-hidden={!menuOpen}
        inert={!menuOpen}
        className={`mobile-nav-drawer fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white z-50 shadow-xl transform transition-transform duration-300 flex flex-col ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="flex justify-between items-center px-5 py-4 border-b shrink-0">
          <RouterLink to="/" onClick={() => setMenuOpen(false)} className="w-28">
            <img src={logo} alt="MMOCCUL Logo" className="w-full h-auto object-contain" />
          </RouterLink>
          <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
            <IoCloseSharp className="text-2xl text-[#002E8A]" />
          </button>
        </div>

        {/* Drawer Links — scrollable if content overflows */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-1">
          {menuLinks.map((link) => (
            link.to === '/services' ? (
              <div key={link.to} className="border-b">
                <div className="flex items-center justify-between">
                  <RouterLink
                    to="/services"
                    onClick={() => setMenuOpen(false)}
                    className={`block py-3 text-base font-medium transition-colors ${
                      location.pathname.startsWith('/services')
                        ? 'text-[#002E8A]'
                        : 'text-gray-700 hover:text-[#D4A735]'
                    }`}
                  >
                    {link.name}
                  </RouterLink>
                  <button
                    type="button"
                    onClick={() => setMobileServicesOpen((open) => !open)}
                    className="mobile-nav__toggle p-3 text-[#002E8A]"
                    aria-label="Show services"
                    aria-expanded={mobileServicesOpen}
                    aria-controls="mobile-services-submenu"
                  >
                    <IoChevronDown className={`transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                </div>
                {mobileServicesOpen && (
                  <div className="mobile-nav__submenu" id="mobile-services-submenu">
                    <RouterLink
                      to="/services"
                      onClick={() => setMenuOpen(false)}
                      className="mobile-nav__all-link"
                    >
                      All Services <ArrowRight size={15} />
                    </RouterLink>
                    {serviceMenuGroups.map(({ title, icon: Icon, slugs, extra }) => (
                      <section className="mobile-nav__group" key={title}>
                        <h3><Icon size={15} /> {title}</h3>
                        {slugs.map((slug) => {
                          const service = servicePages.find((item) => item.slug === slug)
                          if (!service) return null
                          return <RouterLink key={service.slug} to={`/services/${service.slug}`} onClick={() => setMenuOpen(false)}>{service.title}</RouterLink>
                        })}
                        {extra && <RouterLink to={extra.to} onClick={() => setMenuOpen(false)}>{extra.title}</RouterLink>}
                      </section>
                    ))}
                  </div>
                )}
              </div>
            ) : link.to === '/branches' ? (
              <div key={link.to} className="border-b">
                <div className="flex items-center justify-between">
                  <RouterLink
                    to="/branches"
                    onClick={() => setMenuOpen(false)}
                    className={`block py-3 text-base font-medium transition-colors ${
                      location.pathname.startsWith('/branches')
                        ? 'text-[#002E8A]'
                        : 'text-gray-700 hover:text-[#D4A735]'
                    }`}
                  >
                    {link.name}
                  </RouterLink>
                  <button
                    type="button"
                    onClick={() => setMobileBranchesOpen((open) => !open)}
                    className="mobile-nav__toggle p-3 text-[#002E8A]"
                    aria-label="Show branches"
                    aria-expanded={mobileBranchesOpen}
                    aria-controls="mobile-branches-submenu"
                  >
                    <IoChevronDown className={`transition-transform ${mobileBranchesOpen ? 'rotate-180' : ''}`} />
                  </button>
                </div>
                {mobileBranchesOpen && (
                  <div className="mobile-nav__submenu" id="mobile-branches-submenu">
                    <RouterLink
                      to="/branches"
                      onClick={() => setMenuOpen(false)}
                      className="mobile-nav__all-link"
                    >
                      All Branches <ArrowRight size={15} />
                    </RouterLink>
                    {branchRegions.map(({ title, cities }) => {
                      const regionBranches = branches.filter((branch) => cities.includes(branch.city))
                      if (!regionBranches.length) return null
                      return (
                        <section className="mobile-nav__group" key={title}>
                          <h3><MapPin size={14} /> {title}</h3>
                          {regionBranches.map((branch) => (
                            <RouterLink key={branch.slug} to={`/branches/${branch.slug}`} onClick={() => setMenuOpen(false)}>
                              {branch.name}
                            </RouterLink>
                          ))}
                        </section>
                      )
                    })}
                  </div>
                )}
              </div>
            ) : (
              <RouterLink
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className={`block py-3 border-b text-base font-medium transition-colors ${
                  location.pathname === link.to
                    ? 'text-[#002E8A]'
                    : 'text-gray-700 hover:text-[#D4A735]'
                }`}
              >
                {link.name}
              </RouterLink>
            )
          ))}

          {/* Extra links */}
          <RouterLink
            to="/create-account"
            onClick={() => setMenuOpen(false)}
            className="block py-3 border-b text-base text-gray-700 hover:text-[#D4A735] font-medium"
          >
            {t('createAccount')}
          </RouterLink>
          <RouterLink
            to="/cards"
            onClick={() => setMenuOpen(false)}
            className="block py-3 border-b text-base text-gray-700 hover:text-[#D4A735] font-medium"
          >
            {t('cards')}
          </RouterLink>
          <RouterLink
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="block py-3 border-b text-base text-gray-700 hover:text-[#D4A735] font-medium"
          >
            {t('helpSupport')}
          </RouterLink>
          <RouterLink
            to="/careers"
            onClick={() => setMenuOpen(false)}
            className="block py-3 border-b text-base text-gray-700 hover:text-[#D4A735] font-medium"
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
            className="w-full bg-[#002E8A] text-white text-center py-3 px-4 rounded-full flex items-center justify-center gap-2 text-sm font-semibold hover:bg-[#D4A735] hover:text-[#002E8A] transition shadow-md"
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
                language === 'en' ? 'text-[#002E8A] font-bold' : 'text-gray-500 hover:text-[#D4A735]'
              }`}
              onClick={() => handleLanguageChange('en')}
            >
              EN
            </span>
            <span className="text-gray-300">|</span>
            <span
              className={`cursor-pointer font-medium transition-colors ${
                language === 'fr' ? 'text-[#002E8A] font-bold' : 'text-gray-500 hover:text-[#D4A735]'
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