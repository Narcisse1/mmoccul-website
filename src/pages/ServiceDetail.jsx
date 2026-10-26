import React, { useRef } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Check,
  ChevronRight,
  MapPin,
  ShieldCheck,
  Users,
} from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { Header } from '../sections/Header'
import { Footer } from '../sections/Footer'
import { useHeroParallax } from '../hooks/useHeroParallax'
import { usePointerAtmosphere } from '../hooks/usePointerAtmosphere'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'
import { legacyServiceSlugs, servicePages } from '../data/servicePages'
import savingsPiggyImage from '../assets/assets4/optimized/savings-piggy.png'
import './ServiceDetail.css'

const trustFeatures = [
  { title: 'Member-owned', description: 'A cooperative focused on member needs.', icon: Users },
  { title: 'COBAC licensed', description: 'Licensed as a Category 1 Microfinance Institution.', icon: ShieldCheck },
  { title: 'Local support', description: 'Get guidance from our team and branch network.', icon: MapPin },
]

const ServiceAction = ({ to, external, className, children, pointerEffect }) => {
  if (external || to.startsWith('#')) {
    return (
      <a
        href={to}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={className}
        data-pointer-effect={pointerEffect}
      >
        {children}
      </a>
    )
  }
  return <Link to={to} className={className} data-pointer-effect={pointerEffect}>{children}</Link>
}

const ServiceDetail = () => {
  const { serviceId } = useParams()
  const pageRef = useRef(null)
  const slug = legacyServiceSlugs[serviceId] || serviceId
  const service = servicePages.find((item) => item.slug === slug)

  useHeroParallax(pageRef, serviceId)
  usePointerAtmosphere(pageRef, serviceId)
  useRevealOnScroll(pageRef, '.service-detail-reveal', serviceId)

  if (!service) {
    return (
      <div className="service-detail-page">
        <Header />
        <main className="service-detail-not-found">
          <span className="service-detail-not-found__icon"><BadgeCheck size={24} /></span>
          <span className="service-detail-kicker">MMOCCUL Services</span>
          <h1>Service not found</h1>
          <p>We couldn’t find that service. Explore our available financial services instead.</p>
          <Link to="/services" className="service-detail-button service-detail-button--blue">Explore all services <ArrowRight size={16} /></Link>
        </main>
        <Footer />
      </div>
    )
  }

  const ServiceIcon = service.icon
  const relatedServices = service.related
    .map((relatedSlug) => servicePages.find((item) => item.slug === relatedSlug))
    .filter(Boolean)

  return (
    <div className="service-detail-page" ref={pageRef}>
      <Header />
      <main>
        <section className="service-detail-hero" aria-labelledby="service-detail-title">
          <div className="service-detail-hero__image" style={{ backgroundImage: `url(${service.image})` }} aria-hidden="true" />
          <div className="service-detail-hero__veil" aria-hidden="true" />
          <div className="service-detail-shell service-detail-hero__content">
            <Link to="/services" className="service-detail-back"><ArrowRight size={14} /> All Services</Link>
            <span className="service-detail-kicker service-detail-kicker--hero"><i /> Our Services</span>
            <h1 id="service-detail-title">{service.title}</h1>
            <p className="service-detail-hero__subtitle">{service.subtitle}</p>
            <div className="service-detail-hero__actions">
              <ServiceAction to={service.primaryTo} external={service.external} className="service-detail-button service-detail-button--gold" pointerEffect="magnetic">
                {service.primaryLabel} <ArrowRight size={16} />
              </ServiceAction>
              <ServiceAction to={service.secondaryTo} external={service.secondaryExternal} className="service-detail-button service-detail-button--outline">
                {service.secondaryLabel} <ArrowUpRight size={15} />
              </ServiceAction>
            </div>
            <div className="service-detail-hero__trust">
              <span><ShieldCheck size={15} /> COBAC Licensed</span><i />
              <span><Users size={15} /> Member-Owned</span><i />
              <span><BadgeCheck size={15} /> Member-Focused</span>
            </div>
          </div>
          <div className="service-detail-hero__bottom" aria-hidden="true" />
        </section>

        <section className="service-detail-overview service-detail-section">
          <div className="service-detail-shell service-detail-overview__grid">
            <div className="service-detail-overview__copy service-detail-reveal">
              <span className="service-detail-kicker">The service</span>
              <h2>Financial support for <em>your next step.</em></h2>
              <p>{service.overview}</p>
              <Link to="/contact" className="service-detail-text-link">Talk to an advisor <ArrowRight size={16} /></Link>
            </div>
            <div className={`service-detail-overview__visual service-detail-reveal${service.slug === 'savings-accounts' ? ' service-detail-overview__visual--savings' : ''}`} style={{ '--detail-delay': '100ms' }}>
              <img
                src={service.slug === 'savings-accounts' ? savingsPiggyImage : service.image}
                alt={service.slug === 'savings-accounts' ? 'MMOCCUL blue savings piggy bank with gold coins' : ''}
                loading="lazy"
                decoding="async"
              />
              <div className="service-detail-overview__badge">
                <span><ServiceIcon size={19} /></span>
                <strong>{service.title}</strong>
                <small>Built around member needs</small>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="service-detail-features service-detail-section">
          <div className="service-detail-shell">
            <div className="service-detail-heading service-detail-reveal">
              <span className="service-detail-kicker">Designed around you</span>
              <h2>Key features & benefits</h2>
              <p>Explore the ways this service can support your financial plans.</p>
            </div>
            <div className="service-detail-features__grid">
              {service.features.map(({ title, description, icon: Icon }, index) => (
                <article className="service-detail-feature service-detail-reveal" key={title} style={{ '--detail-delay': `${(index % 3) * 55}ms` }}>
                  <span className="service-detail-feature__icon"><Icon size={20} /></span>
                  <span className="service-detail-feature__number">{String(index + 1).padStart(2, '0')}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <span className="service-detail-feature__rule" />
                </article>
              ))}
            </div>
          </div>
        </section>

        {service.steps?.length > 0 && (
          <section className="service-detail-process service-detail-section">
            <div className="service-detail-shell">
              <div className="service-detail-heading service-detail-reveal">
                <span className="service-detail-kicker">A clear path forward</span>
                <h2>How it works</h2>
              </div>
              <div className="service-detail-steps">
                {service.steps.map((step, index) => (
                  <article className="service-detail-step service-detail-reveal" key={step} style={{ '--detail-delay': `${index * 70}ms` }}>
                    <span className="service-detail-step__number">{String(index + 1).padStart(2, '0')}</span>
                    <span className="service-detail-step__marker"><Check size={17} /></span>
                    <h3>{step}</h3>
                    {index < service.steps.length - 1 && <ChevronRight className="service-detail-step__connector" size={17} aria-hidden="true" />}
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {(service.requirements?.length > 0 || service.eligibility) && (
        <section className="service-detail-requirements service-detail-section">
          <div className="service-detail-shell service-detail-requirements__panel service-detail-reveal">
            <div className="service-detail-requirements__heading">
              <span className="service-detail-requirements__icon"><BadgeCheck size={22} /></span>
              <span className="service-detail-kicker">{service.eligibility ? 'Who can apply' : 'Before you begin'}</span>
              <h2>{service.eligibility ? 'Who Can Apply' : 'Requirements'}</h2>
              {service.eligibility && <p>{service.eligibility}</p>}
            </div>
            {service.requirements?.length > 0 && (
              <ul>
                {service.requirements.map((requirement) => (
                  <li key={requirement}><span><Check size={14} /></span>{requirement}</li>
                ))}
              </ul>
            )}
            <Link to="/branches" className="service-detail-text-link">Ask your nearest branch <MapPin size={15} /></Link>
          </div>
        </section>
        )}

        <section className="service-detail-trust service-detail-section">
          <div className="service-detail-shell">
            <div className="service-detail-heading service-detail-heading--light service-detail-reveal">
              <span className="service-detail-kicker">Why MMOCCUL</span>
              <h2>Service you can feel confident about</h2>
              <p>Member-focused financial services from a regulated cooperative serving communities across Cameroon.</p>
            </div>
            <div className="service-detail-trust__grid">
              {trustFeatures.map(({ title, description, icon: Icon }, index) => (
                <article className="service-detail-trust-card service-detail-reveal" key={title} style={{ '--detail-delay': `${index * 70}ms` }}>
                  <span><Icon size={21} /></span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="service-detail-cta">
          <div className="service-detail-cta__pattern" aria-hidden="true" />
          <div className="service-detail-shell service-detail-cta__inner service-detail-reveal">
            <span className="service-detail-kicker service-detail-kicker--hero"><i /> Take your next step</span>
            <h2>Let’s make your plans move forward.</h2>
            <p>{service.ctaText}</p>
            <div className="service-detail-cta__actions">
              <ServiceAction to={service.primaryTo} external={service.external} className="service-detail-button service-detail-button--gold" pointerEffect="magnetic">
                {service.primaryLabel} <ArrowRight size={16} />
              </ServiceAction>
              <ServiceAction to={service.secondaryTo} external={service.secondaryExternal} className="service-detail-button service-detail-button--outline">
                {service.secondaryLabel} <ArrowUpRight size={15} />
              </ServiceAction>
              <Link to="/branches" className="service-detail-cta__branch">Find a Branch <MapPin size={15} /></Link>
            </div>
          </div>
        </section>

        <section className="service-detail-related service-detail-section">
          <div className="service-detail-shell">
            <div className="service-detail-related__top service-detail-reveal">
              <div>
                <span className="service-detail-kicker">Explore more</span>
                <h2>Related services</h2>
              </div>
              <Link to="/services" className="service-detail-text-link">All services <ArrowRight size={15} /></Link>
            </div>
            <div className="service-detail-related__grid">
              {relatedServices.map(({ slug: relatedSlug, title, subtitle, icon: Icon, image }, index) => (
                <Link className="service-detail-related-card service-detail-reveal" to={`/services/${relatedSlug}`} key={relatedSlug} style={{ '--detail-delay': `${index * 65}ms` }}>
                  <div className="service-detail-related-card__image"><img src={image} alt="" /></div>
                  <span className="service-detail-related-card__icon"><Icon size={18} /></span>
                  <div className="service-detail-related-card__copy">
                    <strong>{title}</strong>
                    <small>{subtitle}</small>
                  </div>
                  <ArrowUpRight className="service-detail-related-card__arrow" size={17} />
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <a className="service-detail-whatsapp" href="https://wa.me/237680485488" target="_blank" rel="noopener noreferrer" aria-label="Chat with MMOCCUL on WhatsApp">
        <FaWhatsapp size={23} />
      </a>
    </div>
  )
}

export { ServiceDetail }
