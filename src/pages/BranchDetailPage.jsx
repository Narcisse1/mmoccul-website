import React, { useRef } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  ArrowRight,
  ArrowUpRight,
  Banknote,
  Check,
  Clock3,
  FileCheck2,
  MapPin,
  MessageCircle,
  Phone,
  PiggyBank,
  ShieldCheck,
  Smartphone,
  Users,
  Wallet,
} from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { Header } from '../sections/Header'
import { Footer } from '../sections/Footer'
import { useHeroParallax } from '../hooks/useHeroParallax'
import { usePointerAtmosphere } from '../hooks/usePointerAtmosphere'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'
import { branchAddress, branchDirectionsUrl, branchPhone, branches } from '../data/branches'
import branchHero from '../assets/assets3/community.png'
import './BranchDetailPage.css'

const branchServices = [
  { title: 'Open an account', icon: Users },
  { title: 'Savings & deposits', icon: PiggyBank },
  { title: 'Personal & business loans', icon: Banknote },
  { title: 'Mobile banking activation', icon: Smartphone },
  { title: 'Money transfer', icon: ArrowRight },
  { title: 'Salary accounts', icon: Wallet },
  { title: 'Account updates & support', icon: FileCheck2 },
]

const branchReasons = [
  { title: 'Friendly staff', description: 'Speak with our team about your banking needs and next steps.', icon: Users },
  { title: 'Member-focused service', description: 'Explore financial products and services built for cooperative members.', icon: ShieldCheck },
  { title: 'Personal support', description: 'Get guidance on accounts, savings, financing, and digital services.', icon: MessageCircle },
]

const BranchKicker = ({ children, light = false }) => (
  <span className={`branch-detail-kicker${light ? ' branch-detail-kicker--light' : ''}`}>
    {light && <i />}
    {children}
  </span>
)

export const BranchDetailPage = () => {
  const { branchSlug } = useParams()
  const pageRef = useRef(null)
  const branch = branches.find((item) => item.slug === branchSlug)

  useHeroParallax(pageRef, branchSlug)
  usePointerAtmosphere(pageRef, branchSlug)
  useRevealOnScroll(pageRef, '.branch-detail-reveal', branchSlug)

  if (!branch) {
    return (
      <div className="branch-detail-page">
        <Header />
        <main className="branch-detail-not-found">
          <span><MapPin size={23} /></span>
          <BranchKicker>MMOCCUL Branches</BranchKicker>
          <h1>Branch not found</h1>
          <p>We couldn’t find that branch. View our directory to explore all MMOCCUL locations.</p>
          <Link className="branch-detail-button branch-detail-button--blue" to="/branches">View All Branches <ArrowRight size={15} /></Link>
        </main>
        <Footer />
      </div>
    )
  }

  const phone = branchPhone(branch.phone)
  const directions = branchDirectionsUrl(branch)

  const othersInCity = branches.filter((item) => item.city === branch.city && item.id !== branch.id)
  const otherBranches = [
    ...othersInCity,
    ...branches.filter((item) => item.id !== branch.id && !othersInCity.some((nearby) => nearby.id === item.id)),
  ].slice(0, 3)

  return (
    <div className="branch-detail-page" ref={pageRef}>
      <Header />
      <main>
        <section className="branch-detail-hero" aria-labelledby="branch-detail-title">
          <div className="branch-detail-hero__image" style={{ backgroundImage: `url(${branchHero})` }} aria-hidden="true" />
          <div className="branch-detail-hero__veil" aria-hidden="true" />
          <div className="branch-detail-shell branch-detail-hero__content">
            <Link to="/branches" className="branch-detail-back"><ArrowRight size={14} /> All Branches</Link>
            <BranchKicker light>Our Branches</BranchKicker>
            {branch.headOffice && <span className="branch-detail-hero__badge"><ShieldCheck size={13} /> Head Office</span>}
            <h1 id="branch-detail-title">{branch.name}</h1>
            <p>{branch.heroSubtitle}</p>
            <div className="branch-detail-hero__actions">
              <a className="branch-detail-button branch-detail-button--gold" data-pointer-effect="magnetic" href={`tel:${phone}`}><Phone size={15} /> Call Branch ({branch.phone})</a>
              <a className="branch-detail-button branch-detail-button--blue" href={directions} target="_blank" rel="noopener noreferrer"><MapPin size={15} /> Get Directions <ArrowUpRight size={14} /></a>
            </div>
            <div className="branch-detail-hero__trust">
              <span><ShieldCheck size={14} /> COBAC Licensed</span><i />
              <span><Users size={14} /> Member-Owned</span><i />
              <span><MapPin size={14} /> {branch.city}</span>
            </div>
          </div>
          <div className="branch-detail-hero__bottom" aria-hidden="true" />
        </section>

        <section className="branch-detail-overview branch-detail-section">
          <div className="branch-detail-shell branch-detail-overview__grid">
            <div className="branch-detail-overview__copy branch-detail-reveal">
              <BranchKicker>Welcome to your local branch</BranchKicker>
              <h2>Here for the financial needs of <em>{branch.city}.</em></h2>
              <p>{branch.overview}</p>
              <Link to="/services" className="branch-detail-text-link">Explore our services <ArrowRight size={15} /></Link>
            </div>
            <div className="branch-detail-overview__visual branch-detail-reveal" style={{ '--branch-detail-delay': '100ms' }}>
              <img src={branchHero} alt="MMOCCUL team serving members" />
              <span className="branch-detail-overview__badge"><ShieldCheck size={17} /> A cooperative built around people</span>
            </div>
          </div>
        </section>

        <section className="branch-detail-information branch-detail-section">
          <div className="branch-detail-shell branch-detail-information__grid">
            <div className="branch-detail-information__intro branch-detail-reveal">
              <BranchKicker>Plan your visit</BranchKicker>
              <h2>Branch details</h2>
              <p>Contact or visit us during opening hours. Our team will be happy to guide you.</p>
              <a className="branch-detail-button branch-detail-button--blue" href={directions} target="_blank" rel="noopener noreferrer">
                Get Directions <ArrowUpRight size={15} />
              </a>
            </div>
            <div className="branch-detail-information__card branch-detail-reveal" style={{ '--branch-detail-delay': '100ms' }}>
              <div className="branch-detail-information__row">
                <span><MapPin size={18} /></span>
                <div><small>Full address</small><strong>{branchAddress(branch)}</strong></div>
              </div>
              <div className="branch-detail-information__row">
                <span><Phone size={18} /></span>
                <div><small>Phone number</small><a href={`tel:${phone}`}>+237 {branch.phone}</a></div>
              </div>
              <div className="branch-detail-information__row">
                <span><Clock3 size={18} /></span>
                <div><small>Opening hours</small><strong>Monday – Friday | 8:00am – 5:00pm</strong></div>
              </div>
              <div className="branch-detail-information__row">
                <span><MessageCircle size={18} /></span>
                <div><small>Email</small><a href="mailto:contact@mmoccul.com">contact@mmoccul.com</a></div>
              </div>
            </div>
          </div>
        </section>

        <section className="branch-detail-services branch-detail-section">
          <div className="branch-detail-shell">
            <div className="branch-detail-heading branch-detail-reveal">
              <BranchKicker>How we can help</BranchKicker>
              <h2>Services available at this branch</h2>
              <p>{branch.servicesSummary}</p>
            </div>
            <div className="branch-detail-services__grid">
              {branchServices.map(({ title, icon: Icon }, index) => (
                <article className="branch-detail-service branch-detail-reveal" key={title} style={{ '--branch-detail-delay': `${(index % 4) * 50}ms` }}>
                  <span><Icon size={19} /></span>
                  <strong>{title}</strong>
                  <Check size={14} className="branch-detail-service__check" />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="branch-detail-directions branch-detail-section">
          <div className="branch-detail-shell branch-detail-directions__grid">
            <div className="branch-detail-directions__copy branch-detail-reveal">
              <BranchKicker>How to get here</BranchKicker>
              <h2>Find us in <em>{branch.city}.</em></h2>
              <p>We’re located at {branch.address}. Use the directions link to open this location in Google Maps and plan your visit.</p>
              <a className="branch-detail-button branch-detail-button--blue" href={directions} target="_blank" rel="noopener noreferrer">
                Get Directions <MapPin size={15} /> <ArrowUpRight size={14} />
              </a>
            </div>
            <div className="branch-detail-directions__map branch-detail-reveal" style={{ '--branch-detail-delay': '100ms' }}>
              <iframe
                title={`Map showing ${branch.name}`}
                src={`https://maps.google.com/maps?q=${encodeURIComponent(branchAddress(branch))}&z=15&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <span><MapPin size={14} /> {branch.name}</span>
            </div>
          </div>
        </section>

        <section className="branch-detail-why branch-detail-section">
          <div className="branch-detail-shell">
            <div className="branch-detail-heading branch-detail-heading--light branch-detail-reveal">
              <BranchKicker>Why visit MMOCCUL</BranchKicker>
              <h2>Member-focused support, close to you</h2>
              <p>Visit your local team for friendly guidance and access to cooperative financial services.</p>
            </div>
            <div className="branch-detail-why__grid">
              {branchReasons.map(({ title, description, icon: Icon }, index) => (
                <article className="branch-detail-why-card branch-detail-reveal" key={title} style={{ '--branch-detail-delay': `${index * 70}ms` }}>
                  <span><Icon size={20} /></span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="branch-detail-cta">
          <div className="branch-detail-cta__pattern" aria-hidden="true" />
          <div className="branch-detail-shell branch-detail-cta__inner branch-detail-reveal">
            <BranchKicker light>We look forward to seeing you</BranchKicker>
            <h2>Visit us today</h2>
            <p>{branch.ctaText}</p>
            <div className="branch-detail-cta__actions">
              <a className="branch-detail-button branch-detail-button--gold" data-pointer-effect="magnetic" href={`tel:${phone}`}><Phone size={15} /> Call Branch</a>
              <a className="branch-detail-button branch-detail-button--outline" href={directions} target="_blank" rel="noopener noreferrer"><MapPin size={15} /> Get Directions</a>
              <Link className="branch-detail-cta__link" to="/create-account">Become a Member <ArrowRight size={15} /></Link>
              <Link className="branch-detail-cta__link" to="/contact">Contact Customer Care <MessageCircle size={15} /></Link>
            </div>
          </div>
        </section>

        <section className="branch-detail-related branch-detail-section">
          <div className="branch-detail-shell">
            <div className="branch-detail-related__top branch-detail-reveal">
              <div>
                <BranchKicker>Explore the network</BranchKicker>
                <h2>Other MMOCCUL branches</h2>
              </div>
              <Link to="/branches" className="branch-detail-text-link">All branches <ArrowRight size={15} /></Link>
            </div>
            <div className="branch-detail-related__grid">
              {otherBranches.map((item, index) => (
                <Link className="branch-detail-related-card branch-detail-reveal" to={`/branches/${item.slug}`} key={item.slug} style={{ '--branch-detail-delay': `${index * 60}ms` }}>
                  <span><MapPin size={18} /></span>
                  <div><strong>{item.name}</strong><small>{item.city}{item.headOffice ? ' · Head Office' : ''}</small></div>
                  <ArrowUpRight size={16} />
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <a className="branch-detail-whatsapp" href="https://wa.me/237680485488" target="_blank" rel="noopener noreferrer" aria-label="Chat with MMOCCUL on WhatsApp">
        <FaWhatsapp size={23} />
      </a>
    </div>
  )
}
