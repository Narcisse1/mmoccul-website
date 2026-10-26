import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  ArrowUpRight,
  Banknote,
  Check,
  CreditCard,
  FileCheck2,
  Landmark,
  MapPin,
  PiggyBank,
  ShieldCheck,
  Smartphone,
  Users,
  Wallet,
  Zap,
} from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { Header } from '../sections/Header'
import { Footer } from '../sections/Footer'
import { useHeroParallax } from '../hooks/useHeroParallax'
import { usePointerAtmosphere } from '../hooks/usePointerAtmosphere'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'
import { servicePages } from '../data/servicePages'
import servicesHero from '../assets/assets3/beautiful.jpg'
import debitCardImage from '../assets/assets4/Blue Bank Card Mockup.png'
import './ServicesPage.css'

const serviceLabels = {
  'savings-accounts': 'Build a savings habit',
  'personal-loans': 'Support for personal goals',
  'business-loans': 'Capital for your next step',
  'mobile-banking': 'Bank from wherever you are',
  'money-transfer': 'Move money with confidence',
  'salary-accounts': 'A simpler way to get paid',
  'fixed-deposits': 'Plan for long-term goals',
  'bill-payments': 'Everyday payments, made easier',
}

const serviceCards = [
  ...servicePages.map((service) => ({
    ...service,
    detail: `/services/${service.slug}`,
    label: serviceLabels[service.slug],
  })),
  {
    title: 'ATM & VISA Cards',
    description: 'Withdraw cash and make payments locally and internationally with your MMOCCUL VISA debit card.',
    icon: CreditCard,
    image: debitCardImage,
    detail: '/cards',
    label: 'Convenience for everyday spending',
    imageFit: 'contain',
  },
]

const advantages = [
  { title: 'Competitive interest rates', icon: Banknote },
  { title: 'Fast loan processing', icon: Zap },
  { title: 'Flexible repayment plans', icon: Wallet },
  { title: 'Member-owned institution', icon: PiggyBank },
  { title: 'COBAC regulated & secure', icon: ShieldCheck },
  { title: 'Growing digital solutions', icon: Smartphone },
  { title: 'Transparent fees', icon: Check },
  { title: 'Nationwide branch network', icon: MapPin },
]

const accessSteps = [
  {
    number: '01',
    title: 'Become a Member',
    description: 'Start your cooperative journey and get guidance on membership.',
    icon: Users,
  },
  {
    number: '02',
    title: 'Choose a Service',
    description: 'Explore the savings, financing, and payment options that fit your needs.',
    icon: Landmark,
  },
  {
    number: '03',
    title: 'Complete Requirements',
    description: 'Our team will explain the relevant documents and next steps.',
    icon: FileCheck2,
  },
  {
    number: '04',
    title: 'Start Benefiting',
    description: 'Access your selected service with support from MMOCCUL.',
    icon: ArrowRight,
  },
]

const ServicesHeading = ({ eyebrow, title, description, light = false }) => (
  <div className={`services-heading services-reveal${light ? ' services-heading--light' : ''}`}>
    <span className="services-heading__eyebrow">{eyebrow}</span>
    <h2>{title}</h2>
    {description && <p>{description}</p>}
  </div>
)

export const ServicesPage = () => {
  const pageRef = useRef(null)
  useHeroParallax(pageRef)
  usePointerAtmosphere(pageRef)
  useRevealOnScroll(pageRef, '.services-reveal')

  return (
    <div className="services-page" ref={pageRef}>
      <Header />
      <main>
        <section className="services-hero" aria-labelledby="services-hero-title">
          <div className="services-hero__image" style={{ backgroundImage: `url(${servicesHero})` }} aria-hidden="true" />
          <div className="services-hero__veil" aria-hidden="true" />
          <div className="services-shell services-hero__content">
            <span className="services-kicker services-kicker--hero"><i /> Our Services</span>
            <h1 id="services-hero-title">Complete Financial<br /><em>Solutions</em></h1>
            <p>Everything you need to save, borrow, transfer, and grow — designed for individuals, salary workers, and businesses.</p>
            <div className="services-hero__trust">
              <span><ShieldCheck size={16} /> COBAC Licensed</span>
              <i />
              <span><PiggyBank size={16} /> Member-Owned</span>
              <i />
              <span><Check size={16} /> Competitive Rates</span>
            </div>
          </div>
          <div className="services-hero__bottom" aria-hidden="true" />
        </section>

        <section className="services-intro">
          <div className="services-shell services-intro__inner services-reveal">
            <span className="services-intro__mark"><Landmark size={24} /></span>
            <div>
              <span className="services-kicker">Financial services, centered on you</span>
              <p>At MMOCCUL we offer a full range of financial services tailored to the real needs of our members. From flexible savings and fast loans to mobile banking and money transfers, we provide reliable solutions that help you achieve your goals.</p>
            </div>
            <Link to="/contact" className="services-intro__link">Talk to our team <ArrowUpRight size={15} /></Link>
          </div>
        </section>

        <section className="services-catalog services-section" id="service-catalog">
          <div className="services-shell">
            <ServicesHeading
              eyebrow="Services for every stage"
              title="Find the right service for your goals"
              description="Explore practical cooperative financial services, built around the needs of members and their communities."
            />
            <div className="services-grid">
              {serviceCards.map(({ title, description, icon: Icon, image, detail, label, imageFit }, index) => (
                <article className="services-card services-reveal" key={title} style={{ '--services-delay': `${(index % 3) * 65}ms` }}>
                  <div className={`services-card__image${imageFit ? ` services-card__image--${imageFit}` : ''}`}>
                    <img src={image} alt={imageFit ? 'MMOCCUL blue ATM and VISA debit card' : ''} loading="lazy" />
                    <span className="services-card__number">{String(index + 1).padStart(2, '0')}</span>
                    <span className="services-card__icon"><Icon size={21} /></span>
                  </div>
                  <div className="services-card__content">
                    <span className="services-card__label">{label}</span>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <div className="services-card__actions">
                      <Link to={detail} className="services-card__learn">
                        Learn more <ArrowRight size={15} />
                      </Link>
                      <Link to="/contact" className="services-card__ask" aria-label={`Enquire about ${title}`}>Enquire</Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="services-advantage services-section">
          <div className="services-advantage__glow services-advantage__glow--one" aria-hidden="true" />
          <div className="services-advantage__glow services-advantage__glow--two" aria-hidden="true" />
          <div className="services-shell services-advantage__inner">
            <ServicesHeading
              eyebrow="The MMOCCUL advantage"
              title="Service grounded in cooperative values"
              description="A member-first approach and trusted financial services help you move forward with confidence."
              light
            />
            <div className="services-advantage__grid">
              {advantages.map(({ title, icon: Icon }, index) => (
                <div className="services-advantage__item services-reveal" key={title} style={{ '--services-delay': `${(index % 4) * 55}ms` }}>
                  <span><Icon size={19} /></span>
                  <strong>{title}</strong>
                  <Check className="services-advantage__check" size={15} />
                </div>
              ))}
            </div>
            <div className="services-advantage__foot"><ShieldCheck size={15} /> Category 1 Microfinance Institution licensed by COBAC</div>
          </div>
        </section>

        <section className="services-access services-section">
          <div className="services-shell">
            <ServicesHeading
              eyebrow="Getting started"
              title="Four steps to access our services"
              description="Our team is here to guide you from membership through to using the services that suit you."
            />
            <div className="services-steps">
              {accessSteps.map(({ number, title, description, icon: Icon }, index) => (
                <article className="services-step services-reveal" key={number} style={{ '--services-delay': `${index * 75}ms` }}>
                  <span className="services-step__number">{number}</span>
                  <span className="services-step__icon"><Icon size={21} /></span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  {index < accessSteps.length - 1 && <ArrowRight className="services-step__connector" size={18} aria-hidden="true" />}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="services-cta">
          <div className="services-cta__pattern" aria-hidden="true" />
          <div className="services-shell services-cta__inner services-reveal">
            <span className="services-kicker services-kicker--hero"><i /> Move forward with MMOCCUL</span>
            <h2>Ready to get started?</h2>
            <p>Open an account or apply for a service today and experience reliable, member-focused banking.</p>
            <div className="services-cta__actions">
              <Link className="services-button services-button--gold" data-pointer-effect="magnetic" to="/create-account">Become a Member <ArrowRight size={16} /></Link>
              <Link className="services-button services-button--outline" to="/services/1">Apply for a Loan <Banknote size={16} /></Link>
              <Link className="services-cta__link" to="/contact">Contact Us <ArrowUpRight size={15} /></Link>
              <Link className="services-cta__link" to="/branches">Find a Branch <MapPin size={15} /></Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <a className="services-whatsapp" href="https://wa.me/237680485488" target="_blank" rel="noopener noreferrer" aria-label="Chat with MMOCCUL on WhatsApp">
        <FaWhatsapp size={23} />
      </a>
    </div>
  )
}
