import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Banknote,
  Building2,
  Check,
  Clock3,
  Eye,
  HeartHandshake,
  Landmark,
  MapPin,
  ShieldCheck,
  Smartphone,
  Target,
  Users,
} from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { Header } from '../sections/Header'
import { Footer } from '../sections/Footer'
import { useHeroParallax } from '../hooks/useHeroParallax'
import { usePointerAtmosphere } from '../hooks/usePointerAtmosphere'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'
import aboutImage from '../assets/assets3/about_us.png'
import communityImage from '../assets/assets3/community.png'
import interiorImage from '../assets/assets3/interior.png'
import cobacCrestImage from '../assets/assets4/optimized/cobac-crest.png'
import teamPortraitImage from '../assets/assets4/MMOCCUL Blue Attire Team Portrait (1).png'
import appWomanImage from '../assets/assets4/Smiling Woman Presenting Finance App.png'
import uniformPortraitImage from '../assets/assets4/Branded Blue Uniform Portrait.png'
import patternedPortraitImage from '../assets/assets4/Smiling Man in Blue Patterned Outfit.png'
import { branches } from '../data/branches'
import './AboutPage.css'

const impactStats = [
  { value: 26000, suffix: '+', label: 'Active members', icon: Users },
  { value: branches.length, suffix: '+', label: 'Branches nationwide', icon: MapPin },
  { value: 5000, suffix: '+', label: 'Loans disbursed', icon: Banknote },
  { value: 10, suffix: '', label: 'Years of service', icon: Clock3 },
  { value: 5, suffix: '+', label: 'Regions covered', icon: Building2 },
]

const principles = [
  {
    title: 'Our vision',
    description: 'To make financial services accessible and affordable to everyone in Cameroon and beyond.',
    icon: Eye,
  },
  {
    title: 'Our mission',
    description: 'To provide reliable, transparent, and innovative financial solutions that empower our members to improve their economic and social well-being.',
    icon: Target,
  },
  {
    title: 'Our values',
    description: 'Reliability, honesty, transparency, participation, accountability, and confidentiality guide the way we serve.',
    icon: HeartHandshake,
  },
]

const milestones = [
  {
    year: '2016',
    title: 'A cooperative begins',
    description: 'MMOCCUL was founded in Mmockmbie, Alou Subdivision, with a community of 14 members.',
    icon: Landmark,
  },
  {
    year: '2017',
    title: 'Opening in Yaoundé',
    description: 'The cooperative opened its Yaoundé branch and began serving members beyond its founding community.',
    icon: MapPin,
  },
  {
    year: 'Growing across Cameroon',
    title: 'A wider branch network',
    description: 'Our presence expanded to Douala, Bafoussam, Bamenda, Buea, Dschang, Kumba, Bertoua, and Kribi.',
    icon: Building2,
  },
  {
    year: 'Today',
    title: 'Serving more members',
    description: 'We continue to grow our membership and develop convenient digital services for communities across Cameroon.',
    icon: Smartphone,
  },
]

const differentiators = [
  { title: 'Member-owned institution', description: 'Members are at the heart of our cooperative and the services we provide.', icon: Users },
  { title: 'COBAC licensed & regulated', description: 'We operate as a Category 1 Microfinance Institution licensed by COBAC.', icon: ShieldCheck },
  { title: 'Competitive interest rates', description: 'Savings and lending options are designed with member needs in mind.', icon: Banknote },
  { title: 'Fast loan processing', description: 'Clear guidance helps members navigate their financing needs.', icon: Clock3 },
  { title: 'Growing digital banking', description: 'Digital services make everyday banking more convenient.', icon: Smartphone },
  { title: 'Strong customer focus', description: 'Our team is committed to friendly, reliable support.', icon: HeartHandshake },
  { title: 'Nationwide branch network', description: 'Branches connect members with services in communities across Cameroon.', icon: MapPin },
  { title: 'Transparent operations', description: 'We value clear communication, accountability, and trust.', icon: BadgeCheck },
]

const AboutHeading = ({ eyebrow, title, description, align = 'center', light = false }) => (
  <div className={`about-heading about-reveal${align === 'left' ? ' about-heading--left' : ''}${light ? ' about-heading--light' : ''}`}>
    <span className="about-heading__eyebrow">{eyebrow}</span>
    <h2>{title}</h2>
    {description && <p>{description}</p>}
  </div>
)

export const AboutPage = () => {
  const pageRef = useRef(null)
  const [counters, setCounters] = useState(impactStats.map(() => 0))
  const [typedCharacters, setTypedCharacters] = useState(0)
  const title = 'Who We Are'

  useHeroParallax(pageRef)
  usePointerAtmosphere(pageRef)
  useRevealOnScroll(pageRef, '.about-reveal')

  useEffect(() => {
    const page = pageRef.current
    if (!page) return undefined

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const stats = page.querySelector('.about-stat-grid')

    if (reducedMotion || !('IntersectionObserver' in window)) {
      setCounters(impactStats.map((stat) => stat.value))
      return undefined
    }

    let frameId
    let counterObserver
    if (stats) {
      counterObserver = new IntersectionObserver(([entry]) => {
        if (!entry.isIntersecting) return
        counterObserver.disconnect()
        const start = performance.now()
        const duration = 1500
        const animate = (now) => {
          const progress = Math.min((now - start) / duration, 1)
          const eased = 1 - (1 - progress) ** 3
          setCounters(impactStats.map((stat) => Math.round(stat.value * eased)))
          if (progress < 1) frameId = requestAnimationFrame(animate)
        }
        frameId = requestAnimationFrame(animate)
      }, { threshold: 0.25 })
      counterObserver.observe(stats)
    }
    return () => {
      counterObserver?.disconnect()
      if (frameId) cancelAnimationFrame(frameId)
    }
  }, [])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setTypedCharacters(title.length)
      return undefined
    }
    if (typedCharacters >= title.length) return undefined

    const timer = window.setTimeout(() => {
      setTypedCharacters((count) => Math.min(count + 1, title.length))
    }, 75)
    return () => window.clearTimeout(timer)
  }, [title.length, typedCharacters])

  return (
    <div className="about-page" ref={pageRef}>
      <Header />
      <main>
        <section className="about-hero" aria-labelledby="about-hero-title">
          <div className="about-hero__image" style={{ backgroundImage: `url(${communityImage})` }} aria-hidden="true" />
          <div className="about-hero__veil" aria-hidden="true" />
          <div className="about-shell about-hero__content">
            <span className="about-kicker about-kicker--hero"><i /> About MMOCCUL</span>
            <h1 id="about-hero-title" aria-label={title}>
              {title.slice(0, typedCharacters)}
              {typedCharacters < title.length && <span className="about-hero__cursor" aria-hidden="true" />}
            </h1>
            <p>A member-owned Category 1 Microfinance Institution building financial inclusion across Cameroon since 2016.</p>
            <div className="about-hero__trust" aria-label="MMOCCUL credentials">
              <span><ShieldCheck size={16} /> COBAC Licensed</span>
              <i />
              <span><BadgeCheck size={16} /> MINFI Registered</span>
              <i />
              <span><Clock3 size={16} /> Since 2016</span>
            </div>
          </div>
          <div className="about-hero__bottom" aria-hidden="true" />
        </section>

        <section className="about-story about-section">
          <div className="about-shell about-story__grid">
            <div className="about-story__visual about-reveal">
              <div className="about-story__photo">
                <img src={aboutImage} alt="A member-focused MMOCCUL service environment" />
              </div>
              <div className="about-story__badge">
                <span><Users size={19} /></span>
                <strong>26,000+</strong>
                <small>members growing together</small>
              </div>
              <span className="about-story__ornament" aria-hidden="true" />
            </div>
            <div className="about-story__copy about-reveal" style={{ '--about-delay': '100ms' }}>
              <span className="about-kicker">Our story</span>
              <h2>Rooted in community.<br /><em>Growing together.</em></h2>
              <p>
                Mmockmbie Credit Union Cooperative Ltd (MMOCCUL) is a Category 1 Microfinance Institution licensed by COBAC and registered with the Ministry of Finance. Founded in 2016 in Mmockmbie, Alou Subdivision, we started with just 14 members. Today we proudly serve over 26,000 members across multiple regions of Cameroon.
              </p>
              <p>
                We are fully member-owned and member-driven. Our mission is to provide accessible, affordable, and reliable financial services that empower individuals, families, and small businesses.
              </p>
              <div className="about-story__assurance">
                <img src={cobacCrestImage} alt="COBAC gold security crest" loading="lazy" decoding="async" />
                <span><strong>COBAC Licensed · Secure · Built for Members</strong><small>Serving members under COBAC regulation</small></span>
              </div>
              <Link className="about-button about-button--blue" to="/services">
                Explore our services <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </section>

        <section className="about-principles about-section">
          <div className="about-shell">
            <AboutHeading
              eyebrow="What guides us"
              title="Purpose in every partnership"
              description="Our vision, mission, and values shape how we serve members and strengthen communities."
            />
            <div className="about-principles__grid">
              {principles.map(({ title: cardTitle, description, icon: Icon }, index) => (
                <article className="about-principle-card about-reveal" key={cardTitle} style={{ '--about-delay': `${index * 80}ms` }}>
                  <span className="about-principle-card__icon"><Icon size={23} /></span>
                  <span className="about-principle-card__index">0{index + 1}</span>
                  <h3>{cardTitle}</h3>
                  <p>{description}</p>
                  <span className="about-principle-card__rule" />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-impact about-section">
          <div className="about-impact__glow about-impact__glow--one" aria-hidden="true" />
          <div className="about-impact__glow about-impact__glow--two" aria-hidden="true" />
          <div className="about-shell about-impact__inner">
            <AboutHeading
              eyebrow="Growing with Cameroon"
              title="Our impact, in numbers"
              description="A decade of cooperative progress, built one member and one community at a time."
              light
            />
            <div className="about-stat-grid">
              {impactStats.map(({ value, suffix, label, icon: Icon }, index) => (
                <div className="about-stat about-reveal" key={label} style={{ '--about-delay': `${index * 60}ms` }}>
                  <span className="about-stat__icon"><Icon size={20} /></span>
                  <strong>{counters[index].toLocaleString()}<i>{suffix}</i></strong>
                  <span className="about-stat__label">{label}</span>
                  <span className="about-stat__bar"><i style={{ '--about-progress': `${Math.max(26, ((index + 2) / impactStats.length) * 100)}%` }} /></span>
                </div>
              ))}
            </div>
            <div className="about-impact__foot">
              <span><span /> Member-owned progress</span>
              <span>Since 2016 <ArrowRight size={14} /> and moving forward</span>
            </div>
          </div>
        </section>

        <section className="about-journey about-section">
          <div className="about-shell">
            <div className="about-journey__intro about-reveal">
              <span className="about-kicker">Our journey</span>
              <h2>From 14 members<br />to a nationwide community.</h2>
              <p>Our growth reflects the trust of members and the work of communities coming together around shared financial progress.</p>
              <div className="about-journey__image">
                <img src={interiorImage} alt="Inside an MMOCCUL member service location" />
                <span><Landmark size={16} /> Built around people since 2016</span>
              </div>
            </div>
            <div className="about-timeline">
              {milestones.map(({ year, title: milestoneTitle, description, icon: Icon }, index) => (
                <article className="about-timeline__item about-reveal" key={year} style={{ '--about-delay': `${index * 70}ms` }}>
                  <div className="about-timeline__marker"><Icon size={18} /></div>
                  <div className="about-timeline__content">
                    <span className="about-timeline__year">{year}</span>
                    <h3>{milestoneTitle}</h3>
                    <p>{description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-why about-section">
          <div className="about-shell">
            <AboutHeading
              eyebrow="The MMOCCUL difference"
              title="A cooperative that puts members first"
              description="Reliable service, practical financial solutions, and a commitment to inclusion—grounded in cooperative values."
            />
            <div className="about-why__grid">
              {differentiators.map(({ title: itemTitle, description, icon: Icon }, index) => (
                <article className="about-why-card about-reveal" key={itemTitle} style={{ '--about-delay': `${(index % 4) * 55}ms` }}>
                  <span className="about-why-card__icon"><Icon size={20} /></span>
                  <div>
                    <h3>{itemTitle}</h3>
                    <p>{description}</p>
                  </div>
                  <ArrowUpRight className="about-why-card__arrow" size={16} />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-culture about-section">
          <div className="about-shell">
            <AboutHeading
              eyebrow="Our people, our community"
              title="A cooperative rooted in Cameroon"
              description="Our members and ambassadors reflect the communities MMOCCUL is proud to serve."
            />
            <div className="about-culture__grid">
              {[
                { image: appWomanImage, alt: 'MMOCCUL ambassador presenting mobile banking', caption: 'Banking made more accessible' },
                { image: uniformPortraitImage, alt: 'MMOCCUL community ambassador in branded attire', caption: 'Proud to serve our members' },
                { image: patternedPortraitImage, alt: 'MMOCCUL community ambassador in blue attire', caption: 'Local identity, shared progress' },
              ].map(({ image, alt, caption }, index) => (
                <figure className="about-culture__item about-reveal" key={caption} style={{ '--about-delay': `${index * 75}ms` }}>
                  <img src={image} alt={alt} loading="lazy" decoding="async" />
                  <figcaption>{caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="about-governance about-section">
          <div className="about-shell about-governance__panel about-reveal">
            <div className="about-governance__visual">
              <img src={teamPortraitImage} alt="Eight MMOCCUL team members in branded attire" loading="lazy" decoding="async" />
              <span><Users size={18} /> Meet the people behind MMOCCUL</span>
            </div>
            <div className="about-governance__copy">
              <span className="about-kicker">Leadership & governance</span>
              <h2>Responsible leadership.<br /><em>Shared purpose.</em></h2>
              <p>MMOCCUL is guided by a Board and supported by a General Manager and professional team. Together, they work to uphold responsible governance, regulatory compliance, and the cooperative’s commitment to its members.</p>
              <div className="about-governance__points">
                <span><Check size={15} /> Board oversight</span>
                <span><Check size={15} /> Professional management</span>
                <span><Check size={15} /> Member-focused accountability</span>
              </div>
              <Link className="about-text-link" to="/contact">Connect with our team <ArrowRight size={16} /></Link>
            </div>
          </div>
        </section>

        <section className="about-cta">
          <div className="about-cta__pattern" aria-hidden="true" />
          <div className="about-shell about-cta__inner about-reveal">
            <span className="about-kicker about-kicker--hero"><i /> Your next chapter starts here</span>
            <h2>Ready to join the<br /><em>MMOCCUL family?</em></h2>
            <p>Become a member today and experience reliable, member-focused financial services.</p>
            <div className="about-cta__actions">
              <Link className="about-button about-button--gold" data-pointer-effect="magnetic" to="/create-account">Become a Member <ArrowRight size={17} /></Link>
              <Link className="about-button about-button--outline" to="/branches">Find a Branch <MapPin size={16} /></Link>
              <Link className="about-cta__contact" to="/contact">Contact Us <ArrowUpRight size={15} /></Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <a className="about-whatsapp" href="https://wa.me/237680485488" target="_blank" rel="noopener noreferrer" aria-label="Chat with MMOCCUL on WhatsApp">
        <FaWhatsapp size={23} />
      </a>
    </div>
  )
}
