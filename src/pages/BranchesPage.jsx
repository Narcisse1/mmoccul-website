import React, { useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  ArrowUpRight,
  Banknote,
  Building2,
  Check,
  Clock3,
  FileCheck2,
  MapPin,
  MessageCircle,
  Phone,
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
import { branches, branchPhone, branchAddress, branchDirectionsUrl } from '../data/branches'
import branchHero from '../assets/assets3/community.png'
import branchMapImage from '../assets/assets4/optimized/cameroon-branches.png'
import './BranchesPage.css'

const openingHours = 'Mon–Fri 8:00am – 5:00pm'
export { branches }

const mapEmbedUrl = (branch) => `https://maps.google.com/maps?q=${encodeURIComponent(branch ? branchAddress(branch) : 'MMOCCUL branches, Cameroon')}&z=${branch ? 15 : 6}&output=embed`

const activities = [
  { title: 'Open an account', icon: Users },
  { title: 'Apply for a loan', icon: Banknote },
  { title: 'Make deposits & withdrawals', icon: Wallet },
  { title: 'Activate mobile banking', icon: Smartphone },
  { title: 'Get financial advice', icon: MessageCircle },
  { title: 'Update account information', icon: FileCheck2 },
]

const BranchHeading = ({ eyebrow, title, description }) => (
  <div className="branches-heading branches-reveal">
    <span className="branches-heading__eyebrow">{eyebrow}</span>
    <h2>{title}</h2>
    {description && <p>{description}</p>}
  </div>
)

export const BranchesPage = () => {
  const pageRef = useRef(null)
  const [search, setSearch] = useState('')
  const [selectedCity, setSelectedCity] = useState('All')
  const [selectedBranchId, setSelectedBranchId] = useState(3)
  const selectedBranch = branches.find((branch) => branch.id === selectedBranchId)
  const cities = useMemo(() => [...new Set(branches.map((branch) => branch.city))], [])
  const filteredBranches = branches.filter((branch) => {
    const matchesCity = selectedCity === 'All' || branch.city === selectedCity
    const term = search.trim().toLocaleLowerCase()
    const matchesSearch = !term || `${branch.name} ${branch.address} ${branch.city}`.toLocaleLowerCase().includes(term)
    return matchesCity && matchesSearch
  })

  useHeroParallax(pageRef)
  usePointerAtmosphere(pageRef)
  useRevealOnScroll(pageRef, '.branches-reveal')

  const focusBranch = (branch) => setSelectedBranchId(branch.id)

  return (
    <div className="branches-page" ref={pageRef}>
      <Header />
      <main>
        <section className="branches-hero" aria-labelledby="branches-hero-title">
          <div className="branches-hero__image" style={{ backgroundImage: `url(${branchHero})` }} aria-hidden="true" />
          <div className="branches-hero__veil" aria-hidden="true" />
          <div className="branches-shell branches-hero__content">
            <div className="branches-hero__copy">
              <span className="branches-kicker branches-kicker--hero"><i /> Our Branches</span>
              <h1 id="branches-hero-title">Find a Branch<br /><em>Near You</em></h1>
              <p>MMOCCUL serves members across Cameroon with 13 branches, including our Head Office at Damas, Yaoundé.</p>
              <div className="branches-hero__trust">
                <span><Building2 size={15} /> 13 Branches</span><i />
                <span><MapPin size={15} /> Nationwide Network</span><i />
                <span><ShieldCheck size={15} /> COBAC Licensed</span>
              </div>
            </div>
            <figure className="branches-hero__map">
              <img src={branchMapImage} alt="Satellite map showing MMOCCUL branch locations across Cameroon" fetchPriority="high" decoding="async" />
              <figcaption>Visit a branch near you</figcaption>
            </figure>
          </div>
          <div className="branches-hero__bottom" aria-hidden="true" />
        </section>

        <section className="branches-stats">
          <div className="branches-shell branches-stats__grid">
            {[
              { value: '13', label: 'Branches', icon: Building2 },
              { value: 'Damas', label: 'Head Office', icon: MapPin },
              { value: '5+', label: 'Regions served', icon: Users },
              { value: 'Growing', label: 'Network', icon: ArrowRight },
            ].map(({ value, label, icon: Icon }, index) => (
              <article className="branches-stat branches-reveal" key={label} style={{ '--branches-delay': `${index * 60}ms` }}>
                <span className="branches-stat__icon"><Icon size={19} /></span>
                <strong>{value}</strong>
                <small>{label}</small>
              </article>
            ))}
          </div>
        </section>

        <section className="branches-directory branches-section" id="branch-directory">
          <div className="branches-shell">
            <BranchHeading
              eyebrow="Our network"
              title="Find your nearest branch"
              description="Explore our branch network and get the address, opening hours, or directions you need."
            />
            <div className="branches-filters branches-reveal">
              <label className="branches-search">
                <MapPin size={17} aria-hidden="true" />
                <input
                  type="search"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search by branch, city, or address"
                  aria-label="Search branches"
                />
              </label>
              <label className="branches-city-filter">
                <span>City</span>
                <select value={selectedCity} onChange={(event) => setSelectedCity(event.target.value)} aria-label="Filter branches by city">
                  <option value="All">All locations</option>
                  {cities.map((city) => <option value={city} key={city}>{city}</option>)}
                </select>
              </label>
              <span className="branches-results">{filteredBranches.length} {filteredBranches.length === 1 ? 'branch' : 'branches'}</span>
            </div>

            {filteredBranches.length > 0 ? (
              <div className="branches-grid">
                {filteredBranches.map((branch, index) => (
                  <article className={`branch-card branches-reveal${branch.headOffice ? ' branch-card--head-office' : ''}`} key={branch.id} style={{ '--branches-delay': `${(index % 3) * 55}ms` }}>
                    <div className="branch-card__top">
                      <span className="branch-card__icon"><MapPin size={19} /></span>
                      {branch.headOffice && <span className="branch-card__badge"><ShieldCheck size={12} /> Head Office</span>}
                      {!branch.headOffice && <span className="branch-card__number">{String(branch.id).padStart(2, '0')}</span>}
                    </div>
                    <h3><Link to={`/branches/${branch.slug}`}>{branch.name}</Link></h3>
                    <div className="branch-card__info">
                      <div className="branch-card__row">
                        <MapPin size={15} />
                        <span>{branch.address}</span>
                      </div>
                      <div className="branch-card__row">
                        <Phone size={15} />
                        <a href={`tel:${branchPhone(branch.phone)}`}>+237 {branch.phone}</a>
                      </div>
                      <div className="branch-card__row">
                        <Clock3 size={15} />
                        <span>{openingHours}</span>
                      </div>
                    </div>
                    <div className="branch-card__actions">
                      <a href={`tel:${branchPhone(branch.phone)}`} className="branch-card__call"><Phone size={14} /> Call</a>
                      <a href={branchDirectionsUrl(branch)} target="_blank" rel="noopener noreferrer" className="branch-card__directions"><MapPin size={14} /> Get Directions <ArrowUpRight size={13} /></a>
                      <button type="button" className="branch-card__map" onClick={() => focusBranch(branch)} aria-label={`Show ${branch.name} on map`}>Map</button>
                    </div>
                    <Link to={`/branches/${branch.slug}`} className="branch-card__details">Branch details <ArrowRight size={13} /></Link>
                  </article>
                ))}
              </div>
            ) : (
              <div className="branches-empty">
                <MapPin size={27} />
                <h3>No branches found</h3>
                <p>Try another search or choose a different location.</p>
                <button type="button" onClick={() => { setSearch(''); setSelectedCity('All') }}>Clear filters</button>
              </div>
            )}
          </div>
        </section>

        <section className="branches-map branches-section">
          <div className="branches-shell">
            <BranchHeading
              eyebrow="Plan your visit"
              title="Locate us on the map"
              description={selectedBranch ? `Showing ${selectedBranch.name}. Select another branch to update the map.` : 'Explore MMOCCUL branches across Cameroon.'}
            />
            <div className="branches-map__panel branches-reveal">
              <div className="branches-map__frame">
                <iframe
                  title={selectedBranch ? `Map showing ${selectedBranch.name}` : 'Map showing MMOCCUL branches in Cameroon'}
                  src={mapEmbedUrl(selectedBranch)}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
                <span className="branches-map__overlay-label"><MapPin size={14} /> {selectedBranch ? selectedBranch.name : 'MMOCCUL in Cameroon'}</span>
              </div>
              <div className="branches-map__sidebar">
                <span className="branches-kicker">Choose a branch</span>
                <div className="branches-map__list">
                  {branches.map((branch) => (
                    <button
                      type="button"
                      className={`branches-map__option${branch.id === selectedBranchId ? ' is-selected' : ''}`}
                      onClick={() => focusBranch(branch)}
                      key={branch.id}
                    >
                      <span><MapPin size={14} /></span>
                      <span><strong>{branch.name}</strong><small>{branch.city}</small></span>
                      <ArrowRight size={14} />
                    </button>
                  ))}
                </div>
                {selectedBranch && (
                  <a className="branches-map__directions" href={branchDirectionsUrl(selectedBranch)} target="_blank" rel="noopener noreferrer">
                    Get directions <ArrowUpRight size={15} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="branches-activities branches-section">
          <div className="branches-shell">
            <BranchHeading
              eyebrow="Here to help"
              title="What you can do at our branches"
              description="Visit your nearest branch for guidance and support with everyday financial needs."
            />
            <div className="branches-activities__grid">
              {activities.map(({ title, icon: Icon }, index) => (
                <article className="branches-activity branches-reveal" key={title} style={{ '--branches-delay': `${(index % 3) * 55}ms` }}>
                  <span><Icon size={20} /></span>
                  <strong>{title}</strong>
                  <Check size={15} className="branches-activity__check" />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="branches-cta">
          <div className="branches-cta__pattern" aria-hidden="true" />
          <div className="branches-shell branches-cta__inner branches-reveal">
            <span className="branches-kicker branches-kicker--hero"><i /> We’re here to help</span>
            <h2>Need help finding a branch?</h2>
            <p>Contact our customer care team and we will guide you to the nearest branch.</p>
            <div className="branches-cta__actions">
              <a className="branches-button branches-button--gold" data-pointer-effect="magnetic" href="tel:+237675952741"><Phone size={15} /> Call Customer Care</a>
              <Link className="branches-button branches-button--outline" to="/contact"><MessageCircle size={15} /> Send a Message</Link>
              <Link className="branches-cta__link" to="/create-account">Become a Member <ArrowRight size={15} /></Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <a className="branches-whatsapp" href="https://wa.me/237680485488" target="_blank" rel="noopener noreferrer" aria-label="Chat with MMOCCUL on WhatsApp">
        <FaWhatsapp size={23} />
      </a>
    </div>
  )
}
