import React from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import logoImage from '../assets/Mmoccul__logo.png'
import { useLanguage } from '../context/LanguageContext'
import './Footer.css'

const footerLinks = [
  { label: 'Home', to: '/' },
  { label: 'About us', to: '/about' },
  { label: 'Our services', to: '/services' },
  { label: 'Latest news', to: '/latest-news' },
  { label: 'Find a branch', to: '/branches' },
]

const footerServices = [
  'Savings accounts',
  'Personal loans',
  'Business loans',
  'Mobile banking',
  'Money transfers',
  'Salary accounts',
  'Fixed deposits',
  'Bill payments',
]

export const Footer = () => {
  const { t } = useLanguage()

  return (
    <footer className="home-footer">
      <div className="home-footer__invite">
        <div className="home-footer__invite-inner">
          <div className="home-footer__invite-copy">
            <span>MMOCCUL · YOUR FINANCIAL COOPERATIVE</span>
            <strong>Let’s build your next chapter together.</strong>
          </div>
          <Link to="/create-account" className="home-footer__invite-link">
            Become a member <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>

      <div className="home-footer__main home-container">
        <div className="home-footer__brand">
          <Link to="/" className="home-footer__logo">
            <img src={logoImage} alt="MMOCCUL — Mmockmbie Credit Union Cooperative Ltd" />
          </Link>
          <p>
            A member-owned cooperative providing accessible financial services and supporting
            stronger communities across Cameroon.
          </p>
          <div className="home-footer__trust">
            <ShieldCheck size={16} />
            <span>Category 1 Microfinance Institution<br />Licensed by COBAC</span>
          </div>
          <a className="home-footer__whatsapp" href="https://wa.me/237680485488" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={17} /> Chat with our team
          </a>
        </div>

        <div className="home-footer__column">
          <h2>{t('quickLinks')}</h2>
          <ul>
            {footerLinks.map(({ label, to }) => (
              <li key={to}><Link to={to}>{label}<ArrowUpRight size={13} /></Link></li>
            ))}
          </ul>
        </div>

        <div className="home-footer__column">
          <h2>{t('bankingServices')}</h2>
          <ul>
            {footerServices.map((service) => (
              <li key={service}><Link to="/services">{service}<ArrowUpRight size={13} /></Link></li>
            ))}
          </ul>
        </div>

        <div className="home-footer__column home-footer__contact">
          <h2>{t('contactInfo')}</h2>
          <a href="tel:+237675952741">
            <span><Phone size={16} /></span>
            <span>+237 675 95 27 41</span>
          </a>
          <a href="mailto:contact@mmoccul.com">
            <span><Mail size={16} /></span>
            <span>contact@mmoccul.com</span>
          </a>
          <Link to="/branches">
            <span><MapPin size={16} /></span>
            <span>Serving communities across Cameroon</span>
          </Link>
        </div>
      </div>

      <div className="home-footer__bottom">
        <div className="home-container">
          <p>© 2026 Mmockmbie Credit Union Cooperative Ltd. All rights reserved.</p>
          <span><span className="home-footer__status" /> Member-owned · COBAC licensed · Serving Cameroon since 2016</span>
        </div>
      </div>
    </footer>
  )
}
