import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Banknote,
  Building2,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock3,
  CreditCard,
  Headphones,
  HeartHandshake,
  Landmark,
  MapPin,
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
import { branches } from '../data/branches'
import communityImage from '../assets/assets3/community.png'
import mobileImage from '../assets/assets3/mobile_banking.png'
import savingsImage from '../assets/assets3/savings.png'
import serviceImage from '../assets/assets3/customer_service.png'
import aboutImage from '../assets/assets3/about_us.png'
import toolboxImage from '../assets/assets4/optimized/toolbox.png'
import cameroonBranchMapImage from '../assets/assets4/optimized/cameroon-branches.png'
import cobacCrestImage from '../assets/assets4/optimized/cobac-crest.png'
import digitalDashboardImage from '../assets/assets4/optimized/dashboard.png'
import financialShieldImage from '../assets/assets4/optimized/security-shield.png'
import appPhoneImage from '../assets/assets4/Modern Banking App Smartphone Mockup.png'
import debitCardImage from '../assets/assets4/Blue Bank Card Mockup.png'
import appManImage from '../assets/assets4/Friendly Banker Promoting Mobile Banking.png'
import memberCoupleImage from '../assets/assets4/Smiling Couple in Matching Blue Attire (1).png'
import cameroonRegionMapImage from '../assets/assets4/service-icons/Cameroon Blue Regional Map.png'
import serviceBillPaymentsImage from '../assets/assets4/service-icons/Bills Paid, Dreams Made Real.png'
import serviceFixedDepositImage from '../assets/assets4/service-icons/Happy Couple Exploring Gold Investment.png'
import serviceSalaryImage from '../assets/assets4/service-icons/Salary Credited at Mmockmbie.png'
import serviceTransfersImage from '../assets/assets4/service-icons/Secure Transfers, Brighter Futures.png'
import serviceMobileBankingImage from '../assets/assets4/service-icons/Modern Banking App Showcase.png'
import serviceBusinessLoanImage from '../assets/assets4/service-icons/Small Shop Success with Mmockmbie Credit Union.png'
import servicePersonalLoanImage from '../assets/assets4/service-icons/Smiling Motorcyclist with Loan Approval.png'
import serviceSavingsFeatureImage from '../assets/assets4/service-icons/Saving Dreams, One Coin at a Time.png'
import serviceHomeImage from '../assets/assets4/optimized/service-icons/home.png'
import './HomePage.css'

const heroSlides = [
  {
    eyebrow: 'Savings for your next chapter',
    heading: ['Save Today,', 'Secure Tomorrow'],
    description: 'Build a stronger future with flexible savings plans, trusted financial guidance, and secure digital banking solutions tailored for your goals.',
    image: savingsImage,
    icon: PiggyBank,
    action: 'Open an Account',
    to: '/create-account',
    secondaryAction: 'Explore Services',
    secondaryTo: '/services',
    detail: 'Make room for what matters',
  },
  {
    eyebrow: 'A cooperative built around people',
    heading: ['Your Goals,', 'Our Commitment'],
    description: 'Discover member-focused financial services from a Cameroon cooperative that has grown alongside its community since 2016.',
    image: communityImage,
    icon: Users,
    action: 'Become a Member',
    to: '/create-account',
    secondaryAction: 'Meet MMOCCUL',
    secondaryTo: '/about',
    detail: 'Member-owned. Community-driven.',
  },
  {
    eyebrow: 'Finance for your next move',
    heading: ['Loans That Move', 'You Forward'],
    description: 'Explore personal and business loan options designed to help members respond to everyday needs and pursue new opportunities.',
    image: serviceImage,
    icon: Banknote,
    action: 'Explore Loan Services',
    to: '/services/1',
    secondaryAction: 'How Membership Works',
    secondaryTo: '/create-account',
    detail: 'Practical support for your plans',
  },
  {
    eyebrow: 'Banking made more convenient',
    heading: ['Your Banking,', 'Wherever You Are'],
    description: 'Use MMOCCUL online banking to stay connected to your account and manage everyday financial tasks from wherever you are.',
    image: mobileImage,
    icon: Smartphone,
    action: 'Access Mobile Banking',
    to: 'https://mmocculonline.com/auth/login',
    external: true,
    secondaryAction: 'Explore Services',
    secondaryTo: '/services',
    detail: 'A more convenient way to bank',
  },
  {
    eyebrow: 'Growing together across Cameroon',
    heading: ['Stronger', 'Together'],
    description: 'Join more than 26,000 members who are building a shared future through reliable, member-focused cooperative finance.',
    image: aboutImage,
    icon: ShieldCheck,
    action: 'Join the Cooperative',
    to: '/create-account',
    secondaryAction: 'Find a Branch',
    secondaryTo: '/branches',
    detail: '26,000+ member community',
  },
]

const quickActions = [
  { title: 'Create Account', description: 'Start your membership in minutes', icon: Users, image: serviceHomeImage, to: '/create-account' },
  { title: 'Customer Service', description: 'We’re here to help you 24/7', icon: Headphones, to: '/contact' },
  { title: 'Savings Account', description: 'Grow your money with competitive options', icon: PiggyBank, to: '/services' },
  { title: 'Online Payment', description: 'Pay and transfer from anywhere', icon: CreditCard, to: '/services' },
]

const statistics = [
  { value: 26000, suffix: '+', label: 'Active members', icon: Users, detail: 'From 14 founding members in 2016 to a growing member-owned cooperative.' },
  { value: branches.length, suffix: '+', label: 'Branches', icon: MapPin, detail: 'Local service points connect members with MMOCCUL support across Cameroon.' },
  { value: 5000, suffix: '+', label: 'Loans disbursed', icon: Banknote, detail: 'Member-focused lending supports personal goals, small businesses, and communities.' },
  { value: 10, suffix: '', label: 'Years of service', icon: Clock3, detail: 'Serving members since 2016 with cooperative financial services.' },
  { value: 5, suffix: '+', label: 'Regions covered', icon: Building2, detail: 'A growing presence brings services to communities across multiple regions.' },
]

const services = [
  { title: 'Savings Accounts', description: 'Build a steady savings habit for everyday needs and future goals. Choose a flexible account, make regular deposits, and get guidance from your local MMOCCUL team.', icon: PiggyBank, image: serviceSavingsFeatureImage },
  { title: 'Personal Loans', description: 'Get member-focused financing for needs such as education, healthcare, family projects, or unexpected expenses. Our team can guide you through eligibility, documents, and repayment options.', icon: Banknote, image: servicePersonalLoanImage },
  { title: 'Business Loans', description: 'Find financing support for working capital, stock, equipment, or plans to grow your small business. MMOCCUL helps members understand the application steps and available terms.', icon: Building2, image: serviceBusinessLoanImage },
  { title: 'Mobile Banking', description: 'Stay connected to your account from your smartphone. Check balances, review activity, transfer money, pay supported bills, and manage everyday banking wherever you are.', icon: Smartphone, image: serviceMobileBankingImage },
  { title: 'Money Transfer', description: 'Send and receive money through convenient local and inter-branch transfer services. Ask our team about available channels, participating locations, and the steps for your transaction.', icon: ArrowUpRight, image: serviceTransfersImage },
  { title: 'Salary Accounts', description: 'Make it easier to receive and manage your salary with an account designed for workers and institutions. Get convenient access to your funds and connect with other member services.', icon: Wallet, image: serviceSalaryImage },
  { title: 'Fixed Deposits', description: 'Set money aside for an agreed term to work toward a longer-term savings goal. Speak with MMOCCUL to understand available terms, rates, and conditions before investing.', icon: Landmark, image: serviceFixedDepositImage },
  { title: 'Bill Payments', description: 'Take care of supported bills through MMOCCUL’s available service channels. Get help with payment steps and keep everyday payments connected to your financial routine.', icon: CreditCard, image: serviceBillPaymentsImage },
]

const advantages = [
  { title: 'Member-owned institution', description: 'A cooperative that puts members and communities first.', icon: Users },
  { title: 'Fast & flexible loans', description: 'Member-focused financing options for personal and business needs.', icon: Banknote },
  { title: 'Competitive interest rates', description: 'Savings and lending options designed around member needs.', icon: PiggyBank },
  { title: 'COBAC regulated & secure', description: 'A Category 1 microfinance institution licensed by COBAC.', icon: ShieldCheck },
  { title: 'Growing digital banking', description: 'Convenient services that help you stay connected to your money.', icon: Smartphone },
  { title: 'Dedicated customer support', description: 'Friendly guidance from a team that is ready to help.', icon: Headphones },
  { title: 'Financial inclusion focus', description: 'Committed to extending practical services across communities.', icon: HeartHandshake },
  { title: 'Transparent operations', description: 'Clear information and member-focused cooperative service.', icon: BadgeCheck },
]

const membershipBenefits = [
  { title: 'Mobile Banking', description: 'Everyday banking, wherever you are.', icon: Smartphone, image: appPhoneImage, cta: 'Open the App', href: 'https://mmocculonline.com/auth/login' },
  { title: 'Savings & Growth', description: 'Build a savings habit around your goals.', icon: PiggyBank, image: serviceSavingsFeatureImage, cta: 'Start Saving', to: '/services/savings-accounts' },
  { title: 'Fast Loans', description: 'Explore member-focused personal financing.', icon: Banknote, image: servicePersonalLoanImage, cta: 'Apply Now', to: '/services/personal-loans' },
  { title: 'Money Transfers', description: 'Send and receive money with ease.', icon: ArrowUpRight, image: serviceTransfersImage, cta: 'Send Money', to: '/services/money-transfer' },
  { title: 'ATM / VISA Card', description: 'Access your money with a debit card.', icon: CreditCard, image: debitCardImage, cta: 'Get Your Card', to: '/cards' },
  { title: 'Secure Banking', description: 'Your security and trust are our priority.', icon: ShieldCheck, image: financialShieldImage, cta: 'Learn More', to: '/about' },
]

const testimonialPlaceholders = [
  { initials: 'MM', role: 'MMOCCUL member', quote: 'A verified member experience will be featured here soon.' },
  { initials: 'MM', role: 'MMOCCUL member', quote: 'We are gathering stories from members across our communities.' },
  { initials: 'MM', role: 'MMOCCUL member', quote: 'Member voices matter. Check back for stories shared with permission.' },
]

const branchMapPoints = [
  { id: 1, x: 41.5, y: 73.5 },
  { id: 2, x: 48.5, y: 73.8 },
  { id: 3, x: 44.5, y: 79 },
  { id: 4, x: 14.5, y: 79 },
  { id: 5, x: 21, y: 82.5 },
  { id: 6, x: 26, y: 66 },
  { id: 7, x: 20.5, y: 64.7 },
  { id: 8, x: 6.8, y: 74.6 },
  { id: 9, x: 27.5, y: 67.7 },
  { id: 10, x: 10, y: 69 },
  { id: 11, x: 67, y: 77.2 },
  { id: 12, x: 25, y: 70.4 },
  { id: 13, x: 20, y: 90.5 },
]

const featuredBranchIds = [3, 4, 7, 12]

const homeScenes = [
  { id: 'home-scene-hero', label: 'Welcome' },
  { id: 'home-scene-actions', label: 'Quick actions' },
  { id: 'home-scene-about', label: 'Our story' },
  { id: 'home-scene-impact', label: 'Our impact' },
  { id: 'home-scene-branches', label: 'Our branches' },
  { id: 'home-scene-services', label: 'Services' },
  { id: 'home-scene-card', label: 'ATM and VISA debit cards' },
  { id: 'home-scene-advantage', label: 'The MMOCCUL Advantage' },
  { id: 'home-scene-mobile', label: 'Mobile banking' },
  { id: 'home-scene-membership', label: 'Membership' },
  { id: 'home-scene-testimonials', label: 'Member voices' },
  { id: 'home-scene-cta', label: 'Join MMOCCUL' },
]

function SectionHeading({ eyebrow, title, description, align = 'center', reveal = true }) {
  return (
    <div className={`home-heading home-heading--${align}${reveal ? ' home-reveal' : ''}`}>
      <span className="home-heading__eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}

export const HomePage = () => {
  const pageRef = useRef(null)
  const servicesSectionRef = useRef(null)
  useHeroParallax(pageRef)
  usePointerAtmosphere(pageRef)
  useRevealOnScroll(pageRef, '.home-reveal')

  useEffect(() => {
    const root = document.documentElement
    root.classList.add('home-snap-enabled')
    const header = document.querySelector('.site-header')
    const updateHeaderOffset = () => {
      const offset = header?.getBoundingClientRect().height ?? 0
      root.style.setProperty('--home-sticky-offset', `${offset}px`)
    }
    updateHeaderOffset()
    window.addEventListener('resize', updateHeaderOffset)
    let headerObserver
    if (header && 'ResizeObserver' in window) {
      headerObserver = new ResizeObserver(updateHeaderOffset)
      headerObserver.observe(header)
    }
    const scenes = homeScenes.map(({ id }) => document.getElementById(id)).filter(Boolean)
    if (!('IntersectionObserver' in window)) {
      return () => {
        headerObserver?.disconnect()
        window.removeEventListener('resize', updateHeaderOffset)
        root.style.removeProperty('--home-sticky-offset')
        root.classList.remove('home-snap-enabled')
      }
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('is-visible')
      })
      const topOffset = Number.parseFloat(getComputedStyle(root).scrollPaddingTop) || 0
      const visibleScenes = scenes
        .map((scene) => {
          const rect = scene.getBoundingClientRect()
          const visibleHeight = Math.max(0, Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, topOffset))
          return {
            scene,
            ratio: visibleHeight / Math.max(rect.height, 1),
            centerDistance: Math.abs((rect.top + rect.bottom) / 2 - (topOffset + window.innerHeight) / 2),
          }
        })
        .filter(({ ratio }) => ratio > 0)
        .sort((a, b) => b.ratio - a.ratio || a.centerDistance - b.centerDistance)
      if (visibleScenes[0]) setActiveScene(visibleScenes[0].scene.id)
    }, { threshold: [0.35, 0.55, 0.75] })
    scenes.forEach((scene) => observer.observe(scene))

    return () => {
      observer.disconnect()
      headerObserver?.disconnect()
      window.removeEventListener('resize', updateHeaderOffset)
      root.style.removeProperty('--home-sticky-offset')
      root.classList.remove('home-snap-enabled')
    }
  }, [])
  const [counters, setCounters] = useState(statistics.map(() => 0))
  const [activeMetric, setActiveMetric] = useState(0)
  const [selectedBranchId, setSelectedBranchId] = useState(3)
  const [activeSlide, setActiveSlide] = useState(0)
  const [leavingSlide, setLeavingSlide] = useState(null)
  const [heroTransitionDirection, setHeroTransitionDirection] = useState(1)
  const [heroInView, setHeroInView] = useState(false)
  const [typedCharacters, setTypedCharacters] = useState(0)
  const [heroHovered, setHeroHovered] = useState(false)
  const [activeAdvantage, setActiveAdvantage] = useState(0)
  const [advantageShuffling, setAdvantageShuffling] = useState(false)
  const [advantagePaused, setAdvantagePaused] = useState(false)
  const [advantageInView, setAdvantageInView] = useState(false)
  const [activeScene, setActiveScene] = useState(homeScenes[0].id)
  const [quickHandoffComplete, setQuickHandoffComplete] = useState(false)
  const [activeService, setActiveService] = useState(0)
  const [activeMembershipFeature, setActiveMembershipFeature] = useState(0)
  const advantageShuffleTimer = useRef(null)
  const heroSlideExitTimer = useRef(null)
  const activeHeroSlide = heroSlides[activeSlide]
  const heroHeading = activeHeroSlide.heading.join(' ')
  const heroHeadingLength = heroHeading.length
  const activeAdvantageCard = advantages[activeAdvantage]
  const ActiveAdvantageIcon = activeAdvantageCard.icon
  const activeMetricData = statistics[activeMetric]
  const ActiveMetricIcon = activeMetricData.icon
  const activeServiceData = services[activeService]
  const ActiveServiceIcon = activeServiceData.icon
  const changeMembershipFeature = useCallback((direction) => {
    setActiveMembershipFeature((current) => (
      (current + direction + membershipBenefits.length) % membershipBenefits.length
    ))
  }, [])

  useEffect(() => {
    if (activeScene === homeScenes[1].id) setQuickHandoffComplete(true)
  }, [activeScene])

  const changeHeroSlide = useCallback((slideIndex, direction = slideIndex >= activeSlide ? 1 : -1) => {
    const nextIndex = (slideIndex + heroSlides.length) % heroSlides.length
    if (nextIndex === activeSlide) return
    window.clearTimeout(heroSlideExitTimer.current)
    setLeavingSlide(activeSlide)
    setHeroTransitionDirection(direction)
    setActiveSlide(nextIndex)
    setTypedCharacters(0)
    heroSlideExitTimer.current = window.setTimeout(() => setLeavingSlide(null), 900)
  }, [activeSlide])

  const shuffleAdvantage = useCallback((direction = 1) => {
    if (advantageShuffling) return
    const nextIndex = (activeAdvantage + direction + advantages.length) % advantages.length
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setActiveAdvantage(nextIndex)
      return
    }
    setAdvantageShuffling(true)
    advantageShuffleTimer.current = window.setTimeout(() => {
      setActiveAdvantage(nextIndex)
      setAdvantageShuffling(false)
      advantageShuffleTimer.current = null
    }, 440)
  }, [activeAdvantage, advantageShuffling])

  useEffect(() => {
    if (!advantageInView || advantagePaused || advantageShuffling || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    const timer = window.setTimeout(() => shuffleAdvantage(1), 2000)
    return () => window.clearTimeout(timer)
  }, [activeAdvantage, advantageInView, advantagePaused, advantageShuffling, shuffleAdvantage])

  useEffect(() => () => window.clearTimeout(advantageShuffleTimer.current), [])

  useEffect(() => () => window.clearTimeout(heroSlideExitTimer.current), [])

  useEffect(() => {
    const hero = pageRef.current?.querySelector('.home-hero')
    if (!hero) return undefined
    const updateVisibility = () => {
      const bounds = hero.getBoundingClientRect()
      setHeroInView(bounds.bottom > 0 && bounds.top < window.innerHeight)
    }
    const observer = 'IntersectionObserver' in window
      ? new IntersectionObserver(([entry]) => setHeroInView(entry.isIntersecting), { threshold: 0.15 })
      : null
    observer?.observe(hero)
    updateVisibility()
    window.addEventListener('scroll', updateVisibility, { passive: true })
    window.addEventListener('resize', updateVisibility, { passive: true })
    return () => {
      observer?.disconnect()
      window.removeEventListener('scroll', updateVisibility)
      window.removeEventListener('resize', updateVisibility)
    }
  }, [])

  useEffect(() => {
    const deck = pageRef.current?.querySelector('.home-advantage-deck')
    if (!deck) {
      setAdvantageInView(true)
      return undefined
    }
    const updateVisibility = () => {
      const bounds = deck.getBoundingClientRect()
      setAdvantageInView(bounds.bottom > 0 && bounds.top < window.innerHeight)
    }
    const observer = 'IntersectionObserver' in window
      ? new IntersectionObserver(([entry]) => setAdvantageInView(entry.isIntersecting), { threshold: 0.15 })
      : null
    observer?.observe(deck)
    updateVisibility()
    window.addEventListener('scroll', updateVisibility, { passive: true })
    window.addEventListener('resize', updateVisibility, { passive: true })
    return () => {
      observer?.disconnect()
      window.removeEventListener('scroll', updateVisibility)
      window.removeEventListener('resize', updateVisibility)
    }
  }, [])

  useEffect(() => {
    const page = pageRef.current
    if (!page) return undefined
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const statsGrid = page.querySelector('.home-stat-grid')
    if (reducedMotion || !('IntersectionObserver' in window)) {
      setCounters(statistics.map((stat) => stat.value))
      return undefined
    }
    let frameId
    let counterObserver
    if (statsGrid) {
      counterObserver = new IntersectionObserver(([entry]) => {
        if (!entry.isIntersecting) return
        counterObserver.disconnect()
        const start = performance.now()
        const duration = 1500
        const animate = (now) => {
          const progress = Math.min((now - start) / duration, 1)
          const eased = 1 - (1 - progress) ** 3
          setCounters(statistics.map((stat) => Math.round(stat.value * eased)))
          if (progress < 1) frameId = requestAnimationFrame(animate)
        }
        frameId = requestAnimationFrame(animate)
      }, { threshold: 0.25 })
      counterObserver.observe(statsGrid)
    }
    return () => {
      counterObserver?.disconnect()
      cancelAnimationFrame(frameId)
    }
  }, [])

  useEffect(() => {
    const section = servicesSectionRef.current
    if (!section) return undefined

    const root = document.documentElement
    let frameId = 0
    let stepHeight = 0
    const updateSectionHeight = () => {
      const stickyOffset = Number.parseFloat(getComputedStyle(root).getPropertyValue('--home-sticky-offset')) || 0
      const nextStepHeight = Math.max(620, window.innerHeight - stickyOffset)
      if (Math.abs(nextStepHeight - stepHeight) < 1) return
      stepHeight = nextStepHeight
      section.style.setProperty('--home-service-step-height', `${stepHeight}px`)
      section.style.height = `${stepHeight * services.length}px`
    }
    const updateProgress = () => {
      frameId = 0
      updateSectionHeight()
      const stickyOffset = Number.parseFloat(getComputedStyle(root).getPropertyValue('--home-sticky-offset')) || 0
      const bounds = section.getBoundingClientRect()
      const scrollRange = Math.max(1, section.offsetHeight - stepHeight)
      const sectionStart = window.scrollY + bounds.top - stickyOffset
      const progress = Math.min(1, Math.max(0, (window.scrollY - sectionStart) / scrollRange))
      const serviceIndex = Math.min(services.length - 1, Math.floor(progress * services.length + 0.001))
      const isInScrollZone = bounds.top < window.innerHeight && bounds.bottom > stickyOffset

      root.classList.toggle('home-services-scroll', isInScrollZone)
      if (isInScrollZone) setActiveScene(homeScenes[5].id)
      setActiveService(serviceIndex)
    }
    const scheduleProgress = () => {
      if (!frameId) frameId = window.requestAnimationFrame(updateProgress)
    }

    updateProgress()
    window.addEventListener('scroll', scheduleProgress, { passive: true })
    window.addEventListener('resize', scheduleProgress, { passive: true })
    return () => {
      window.removeEventListener('scroll', scheduleProgress)
      window.removeEventListener('resize', scheduleProgress)
      window.cancelAnimationFrame(frameId)
      section.style.removeProperty('--home-service-step-height')
      section.style.removeProperty('height')
      root.classList.remove('home-services-scroll')
    }
  }, [])

  useEffect(() => {
    setTypedCharacters(0)
  }, [activeSlide])

  useEffect(() => {
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const revealHeadingForReducedMotion = (event) => {
      if (event.matches) setTypedCharacters(heroHeadingLength)
    }
    motionPreference.addEventListener('change', revealHeadingForReducedMotion)
    if (motionPreference.matches) setTypedCharacters(heroHeadingLength)
    return () => motionPreference.removeEventListener('change', revealHeadingForReducedMotion)
  }, [heroHeadingLength])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      if (typedCharacters < heroHeadingLength) setTypedCharacters(heroHeadingLength)
      return undefined
    }
    if (!heroInView) return undefined
    if (typedCharacters < heroHeadingLength) {
      const typingTimer = window.setTimeout(() => {
        setTypedCharacters((count) => Math.min(count + 1, heroHeadingLength))
      }, 42)
      return () => window.clearTimeout(typingTimer)
    }
    if (heroHovered || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    const slideTimer = window.setTimeout(() => changeHeroSlide(activeSlide + 1, 1), 1400)
    return () => window.clearTimeout(slideTimer)
  }, [activeSlide, changeHeroSlide, heroHeadingLength, heroHovered, heroInView, typedCharacters])

  return (
    <div className="home-page" ref={pageRef}>
      <Header />
      <main>
        <section
          id="home-scene-hero"
          className={`home-hero home-scene${heroHovered ? ' is-paused' : ''}${activeScene !== homeScenes[0].id ? ' is-scene-leaving' : ''}`}
          style={{ '--hero-entry-x': `${heroTransitionDirection * 5}%`, '--hero-exit-x': `${heroTransitionDirection * -6}%` }}
          aria-labelledby="home-hero-title"
          onMouseEnter={() => setHeroHovered(true)}
          onMouseLeave={() => setHeroHovered(false)}
        >
          {heroSlides.map((slide, index) => (
            <div
              className={`home-hero__photo${index === activeSlide ? ' is-active' : ''}${index === leavingSlide ? ' is-leaving' : ''}`}
              style={{ backgroundImage: `url(${slide.image})` }}
              key={slide.eyebrow}
              aria-hidden="true"
            />
          ))}
          <div className="home-hero__veil" aria-hidden="true" />
          <div className="home-shell home-hero__inner">
            <div className="home-hero__copy">
              <span className="home-kicker home-kicker--hero"><i />{activeHeroSlide.eyebrow}</span>
              <h1 id="home-hero-title" aria-label={heroHeading} data-typing-complete={typedCharacters >= heroHeadingLength} key={activeSlide}>
                {activeHeroSlide.heading.map((line, lineIndex) => {
                  const lineStart = activeHeroSlide.heading.slice(0, lineIndex)
                    .reduce((length, priorLine) => length + priorLine.length + 1, 0)
                  const visibleLength = Math.max(0, Math.min(line.length, typedCharacters - lineStart))
                  const cursorVisible = typedCharacters >= lineStart && typedCharacters < lineStart + line.length
                  return (
                    <span className={`home-hero__headline-line${lineIndex === activeHeroSlide.heading.length - 1 ? ' home-hero__headline-line--gold' : ''}`} key={line} aria-hidden="true">
                      {line.slice(0, visibleLength)}
                      {cursorVisible && <span className="home-hero__cursor" />}
                    </span>
                  )
                })}
              </h1>
              <p key={`hero-description-${activeSlide}`}>{activeHeroSlide.description}</p>
              <div className="home-hero__actions">
                {activeHeroSlide.external ? (
                  <a className="home-button home-button--gold" data-pointer-effect="magnetic" href={activeHeroSlide.to} target="_blank" rel="noopener noreferrer">
                    {activeHeroSlide.action} <ArrowUpRight size={17} />
                  </a>
                ) : (
                  <Link className="home-button home-button--gold" data-pointer-effect="magnetic" to={activeHeroSlide.to}>
                    {activeHeroSlide.action} <ArrowRight size={17} />
                  </Link>
                )}
                <Link className="home-button home-button--outline" to={activeHeroSlide.secondaryTo}>{activeHeroSlide.secondaryAction}</Link>
                <a className="home-hero__app-link" href="https://mmocculonline.com/auth/login" target="_blank" rel="noopener noreferrer">
                  <Smartphone size={17} /> Access Mobile Banking <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
            <div className="home-hero__aside" data-pointer-effect="tilt" aria-label="MMOCCUL is a member-owned financial cooperative">
              <span className="home-hero__aside-icon"><activeHeroSlide.icon size={22} /></span>
              <span className="home-hero__aside-label">{activeHeroSlide.eyebrow}</span>
              <strong>{activeHeroSlide.detail}</strong>
              <span className="home-hero__aside-rule" />
              <span className="home-hero__aside-foot">Trusted guidance. Practical services. A shared future.</span>
            </div>
          </div>
          <div className="home-hero__bottom home-shell">
            <div className="home-hero__trust">
              <span><ShieldCheck size={16} /> COBAC licensed</span><i />
              <span>26,000+ members</span><i />
              <span>Serving members since 2016</span>
            </div>
            <div className="home-hero__controls" aria-label="Hero slides">
              <button type="button" onClick={() => changeHeroSlide(activeSlide - 1)} aria-label="Previous slide"><ChevronLeft size={18} /></button>
              <div className="home-hero__indicators">
                {heroSlides.map((slide, index) => (
                  <button type="button" key={slide.eyebrow} className={index === activeSlide ? 'is-active' : ''}
                    onClick={() => changeHeroSlide(index)} aria-label={`Go to slide ${index + 1}: ${slide.eyebrow}`}
                    aria-current={index === activeSlide ? 'true' : undefined}>
                    {index === activeSlide && typedCharacters >= heroHeadingLength && !heroHovered && <span key={`progress-${activeSlide}`} />}
                  </button>
                ))}
              </div>
              <button type="button" onClick={() => changeHeroSlide(activeSlide + 1)} aria-label="Next slide"><ChevronRight size={18} /></button>
            </div>
          </div>
        </section>

        <section id="home-scene-actions" className="home-quick home-scene home-reveal" aria-label="Quick actions">
          <div className="home-shell home-quick__content">
            <div className={`home-quick__handoff${quickHandoffComplete ? ' is-arrived' : ''}`}
              style={{ backgroundImage: `url(${activeHeroSlide.image})` }} aria-hidden="true" />
            <SectionHeading eyebrow="Everyday banking" title="The essentials, within reach"
              description="Find a simple next step for your money and your membership." />
            <div className="home-quick__grid">
              {quickActions.map(({ title, description, icon: Icon, image, to }, index) => (
                <Link to={to} className="home-quick-card home-reveal" key={title} style={{ '--home-delay': `${index * 70}ms` }}>
                  <span className={`home-quick-card__icon${image ? ' has-image' : ''}`}>
                    {image ? <img src={image} alt="" aria-hidden="true" loading="lazy" decoding="async" /> : <Icon size={22} />}
                  </span>
                  <span className="home-quick-card__copy"><strong>{title}</strong><small>{description}</small></span>
                  <ArrowRight className="home-quick-card__arrow" size={17} />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="home-scene-about" className={`home-about home-section home-scene home-reveal${activeScene === homeScenes[2].id ? ' is-current' : ''}`}>
          <div className="home-shell home-about__grid">
            <div className="home-about__visual home-reveal">
              <img src={communityImage} alt="MMOCCUL members coming together as a community" />
              <div className="home-about__image-note"><span>Since</span><strong>2016</strong><small>growing together</small></div>
            </div>
            <div className="home-about__copy home-reveal" style={{ '--home-delay': '100ms' }}>
              <span className="home-heading__eyebrow">Our story</span>
              <h2>Who We Are</h2>
              <p>Mmockmbie Credit Union Cooperative Ltd (MMOCCUL) is a Category 1 Microfinance Institution licensed by COBAC. Since 2016, we have grown from 14 members to over 26,000 members across Cameroon, offering reliable, member-focused financial services.</p>
              <div className="home-about__proof"><span><Check size={16} /> Member-focused service</span><span><Check size={16} /> Licensed by COBAC</span></div>
              <Link to="/about" className="home-text-link">Learn More About Us <ArrowRight size={17} /></Link>
            </div>
          </div>
        </section>

        <section id="home-scene-impact" className={`home-impact home-section home-scene home-reveal${activeScene === homeScenes[3].id ? ' is-current' : ''}`} aria-labelledby="home-impact-title">
          <div className="home-shell">
            <SectionHeading eyebrow="Growing together" title="Our Impact Across Cameroon"
              description="A decade of cooperative finance, shaped by members and communities across Cameroon." />
            <div className="home-stat-grid" role="group" aria-label="Select a cooperative impact metric">
              {statistics.map(({ suffix, label, icon: Icon }, index) => (
                <button className={`home-stat home-reveal${activeMetric === index ? ' is-active' : ''}`} key={label}
                  style={{ '--home-delay': `${index * 60}ms` }} type="button" aria-pressed={activeMetric === index}
                  onClick={() => setActiveMetric(index)}>
                  <span className="home-stat__icon"><Icon size={20} /></span>
                  <strong>{new Intl.NumberFormat('en').format(counters[index])}{suffix}</strong>
                  <span>{label}</span>
                </button>
              ))}
            </div>
            <div className="home-impact-snapshot" aria-live="polite" aria-atomic="true">
              <span className="home-impact-snapshot__icon"><ActiveMetricIcon size={19} /></span>
              <span className="home-impact-snapshot__copy">
                <small>Cooperative snapshot · {activeMetricData.label}</small><strong>{activeMetricData.detail}</strong>
              </span>
              <span className="home-impact-snapshot__value">
                <strong>{new Intl.NumberFormat('en').format(activeMetricData.value)}{activeMetricData.suffix}</strong><small>{activeMetricData.label}</small>
              </span>
            </div>
            <div className="home-growth home-reveal">
              <div className="home-growth__copy">
                <span className="home-heading__eyebrow">A shared journey</span>
                <h3>From 14 founding members to a growing community</h3>
                <p>Since 2016, MMOCCUL has continued to grow with the people and communities it serves.</p>
                <div className="home-growth__labels"><span>2016 · 14 members</span><span>Today · 26,000+</span></div>
              </div>
              <div className="home-growth__chart" data-pointer-effect="glow" role="img" aria-label="Illustration of membership growth from 14 founding members in 2016 to over 26,000 today">
                <div className="home-growth__guides"><i /><i /><i /></div>
                <svg viewBox="0 0 600 190" preserveAspectRatio="none" aria-hidden="true">
                  <defs><linearGradient id="memberGrowthFill" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#D4A735" stopOpacity=".24" /><stop offset="100%" stopColor="#D4A735" stopOpacity="0" /></linearGradient></defs>
                  <path className="home-growth__area" d="M0 172 C50 169 62 156 112 161 S175 139 225 145 S290 112 337 123 S403 92 451 99 S530 48 600 18 L600 190 L0 190 Z" fill="url(#memberGrowthFill)" />
                  <path className="home-growth__line" pathLength="1" d="M0 172 C50 169 62 156 112 161 S175 139 225 145 S290 112 337 123 S403 92 451 99 S530 48 600 18" fill="none" stroke="#D4A735" strokeWidth="4" strokeLinecap="round" />
                  <circle className="home-growth__point" cx="600" cy="18" r="7" fill="#D4A735" />
                </svg>
                <img className="home-growth__dashboard" src={digitalDashboardImage} alt="Illustrative MMOCCUL digital banking dashboard preview" loading="lazy" decoding="async" />
                <span className="home-growth__dashboard-caption">Illustrative digital banking dashboard</span>
                <span className="home-growth__axis">Membership growth · illustrative</span>
              </div>
            </div>
          </div>
        </section>

        <section id="home-scene-branches" className={`home-branches home-section home-scene home-reveal${activeScene === homeScenes[4].id ? ' is-current' : ''}`}>
          <div className="home-shell">
            <SectionHeading eyebrow="Here for your community" title="Closer to you, across Cameroon"
              description="Explore our 13 branch locations and find the team nearest to you." />
            <div className="home-branches__layout">
              <div className="home-branches__map" role="group" aria-label="Illustrated map of Cameroon showing 13 MMOCCUL branches">
                <div className="home-branches__map-glow" aria-hidden="true" />
                <div className="home-branches__map-art">
                  <img src={cameroonRegionMapImage} alt="" aria-hidden="true" />
                  {branchMapPoints.map(({ id, x, y }, index) => {
                    const branch = branches.find((item) => item.id === id)
                    if (!branch) return null
                    return (
                      <button
                        type="button"
                        key={id}
                        className={`home-branch-pin${selectedBranchId === id ? ' is-selected' : ''}`}
                        style={{ '--pin-x': `${x}%`, '--pin-y': `${y}%`, '--pin-delay': `${index * 100}ms` }}
                        onClick={() => setSelectedBranchId(id)}
                        aria-label={`Select ${branch.name}`}
                        aria-pressed={selectedBranchId === id}
                      >
                        <MapPin size={18} fill="currentColor" strokeWidth={2.5} />
                      </button>
                    )
                  })}
                </div>
                <span className="home-branches__map-label"><MapPin size={13} /> MMOCCUL · Cameroon</span>
                <span className="home-branches__map-caption"><span>{String(branches.length).padStart(2, '0')}</span> branches nationwide</span>
              </div>
              <div className="home-branches__aside">
                <div className="home-branches__details" aria-live="polite">
                  {(() => {
                    const branch = branches.find((item) => item.id === selectedBranchId) || branches[0]
                    return (
                      <>
                        <span className="home-branches__eyebrow"><Building2 size={15} /> Selected branch</span>
                        <h3>{branch.name}</h3>
                        <p><MapPin size={15} /> {branch.address}</p>
                        <Link className="home-branches__details-link" to={`/branches/${branch.slug}`}>View branch details <ArrowRight size={15} /></Link>
                      </>
                    )
                  })()}
                </div>
                <figure className="home-branches__map-preview home-reveal" style={{ '--home-delay': '100ms' }}>
                  <img src={cameroonBranchMapImage} alt="MMOCCUL branch locations across Cameroon" loading="lazy" decoding="async" />
                  <figcaption>Visit a branch near you</figcaption>
                </figure>
              </div>
            </div>
            <div className="home-branch-cards" aria-label="Featured MMOCCUL branches">
              {featuredBranchIds.map((id, index) => {
                const branch = branches.find((item) => item.id === id)
                if (!branch) return null
                return (
                  <Link
                    className={`home-branch-card${selectedBranchId === id ? ' is-selected' : ''}`}
                    to={`/branches/${branch.slug}`}
                    key={branch.id}
                    style={{ '--branch-card-delay': `${index * 75}ms` }}
                    onMouseEnter={() => setSelectedBranchId(branch.id)}
                    onFocus={() => setSelectedBranchId(branch.id)}
                  >
                    <span className="home-branch-card__visual" aria-hidden="true">
                      <Building2 className="home-branch-card__building" size={25} />
                      <MapPin className="home-branch-card__pin" size={14} fill="currentColor" />
                    </span>
                    <span className="home-branch-card__copy"><strong>{branch.city}</strong><small>{branch.headOffice ? 'Head office' : branch.name.replace(`${branch.city} – `, '').replace(' Branch', ' branch')}</small></span>
                    <ArrowUpRight className="home-branch-card__arrow" size={16} />
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        <section id="home-scene-services" ref={servicesSectionRef} className={`home-services home-section home-scene${activeScene === homeScenes[5].id ? ' is-current' : ''}`} aria-labelledby="home-services-title">
          <div className="home-services__sticky">
            <div className="home-shell">
              <div className="home-services__intro home-reveal">
                <div className="home-services__intro-copy">
                  <span className="home-heading__eyebrow">Solutions for every stage</span>
                  <h2 id="home-services-title">Complete Financial Solutions for Every Need</h2>
                  <p>From your first savings goal to your next big idea, we’re here to help you move forward.</p>
                </div>
                <div className="home-services__utility">
                  <div className="home-services__signature" aria-label="Eight member-focused financial services">
                    <img className="home-services__toolbox" src={toolboxImage} alt="" aria-hidden="true" loading="lazy" decoding="async" />
                    <span><strong>08</strong><small>ways to move<br />forward</small></span>
                  </div>
                  <Link to="/services" className="home-services__all-link">View all services <ArrowRight size={15} /></Link>
                </div>
              </div>
              <div className="home-services__feature" aria-live="polite" aria-atomic="true">
                <article className="home-service-card home-service-card--featured" key={activeService}>
                  <div className="home-service-card__visual">
                    {activeServiceData.image ? (
                      <img src={activeServiceData.image} alt={`${activeServiceData.title}: ${activeServiceData.description}`} loading="lazy" decoding="async" />
                    ) : (
                      <span className="home-service-card__icon"><ActiveServiceIcon size={42} strokeWidth={1.5} /></span>
                    )}
                    <span className="home-service-card__visual-orbit" aria-hidden="true" />
                    <span className="home-service-card__number">0{activeService + 1} <i /> 0{services.length}</span>
                  </div>
                  <div className="home-service-card__copy">
                    <span className="home-service-card__eyebrow">Solution 0{activeService + 1}</span>
                    <h3>{activeServiceData.title}</h3>
                    <p>{activeServiceData.description}</p>
                    <Link to="/services" className="home-service-card__link">Learn more <ArrowRight size={17} /></Link>
                  </div>
                  <div className="home-services__progress-track" aria-hidden="true">
                    <span style={{ width: `${((activeService + 1) / services.length) * 100}%` }} />
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section id="home-scene-card" className={`home-card-feature home-section home-scene home-reveal${activeScene === homeScenes[6].id ? ' is-current' : ''}`} aria-labelledby="home-card-title">
          <div className="home-shell home-card-feature__panel">
            <div className="home-card-feature__copy home-reveal">
              <span className="home-heading__eyebrow">Everyday access, wherever you go</span>
              <h2 id="home-card-title">ATM / VISA Debit Card</h2>
              <p>Make convenient payments and access your money through local and international ATM and VISA networks.</p>
              <ul>
                <li><Check size={16} /> Convenient cash withdrawals</li>
                <li><Check size={16} /> Easy payments at supported merchants</li>
                <li><Check size={16} /> Linked to your MMOCCUL account</li>
              </ul>
              <Link to="/cards" className="home-button home-button--gold">Get Your Card <ArrowRight size={16} /></Link>
            </div>
            <div className="home-card-feature__visual home-reveal" style={{ '--home-delay': '100ms' }}>
              <img src={debitCardImage} alt="MMOCCUL blue ATM and VISA debit card" loading="lazy" decoding="async" />
            </div>
          </div>
        </section>

        <section id="home-scene-advantage" className="home-advantage home-section home-scene">
          <div className="home-shell">
            <SectionHeading eyebrow="The MMOCCUL difference" title="The MMOCCUL Advantage"
              description="A personal approach to finance, backed by the strength of a cooperative." reveal={false} />
            <div className={`home-advantage-deck${advantageShuffling ? ' is-shuffling' : ''}`}
              onMouseEnter={() => setAdvantagePaused(true)} onMouseLeave={() => setAdvantagePaused(false)}
              onFocus={() => setAdvantagePaused(true)} onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) setAdvantagePaused(false)
              }}>
              <article className="home-advantage-card" aria-live="polite" aria-label={`${activeAdvantageCard.title}. ${activeAdvantageCard.description}`}>
                <span className="home-advantage-card__index">0{activeAdvantage + 1}<i />0{advantages.length}</span>
                <span className="home-advantage-card__icon"><ActiveAdvantageIcon size={28} strokeWidth={1.7} /></span>
                <span className="home-advantage-card__eyebrow">The MMOCCUL difference</span>
                <h3>{activeAdvantageCard.title}</h3><p>{activeAdvantageCard.description}</p>
                <span className="home-advantage-card__rule" aria-hidden="true"><i style={{ '--advantage-progress': `${((activeAdvantage + 1) / advantages.length) * 100}%` }} /></span>
              </article>
              <div className="home-advantage-deck__controls">
                <span aria-live="polite">Advantage {activeAdvantage + 1} of {advantages.length}</span>
                <div>
                  <button type="button" aria-label="Show previous advantage" onClick={() => shuffleAdvantage(-1)}><ChevronLeft size={18} /></button>
                  <button type="button" aria-label="Show next advantage" onClick={() => shuffleAdvantage(1)}><ChevronRight size={18} /></button>
                </div>
              </div>
            </div>
            <div className="home-security-strip home-reveal">
              <img className="home-security-strip__crest" src={cobacCrestImage} alt="COBAC gold security crest" loading="lazy" decoding="async" />
              <div className="home-security-strip__copy">
                <strong>COBAC Licensed · Secure · Built for Members</strong>
                <div>
                  <span><Check size={14} /> Safe &amp; Secure</span>
                  <span><Check size={14} /> Data Protection</span>
                  <span><Check size={14} /> Your Trust, Our Priority</span>
                </div>
              </div>
              <img className="home-security-strip__shield" src={financialShieldImage} alt="" aria-hidden="true" loading="lazy" decoding="async" />
            </div>
          </div>
        </section>

        <section id="home-scene-mobile" className={`home-mobile home-section home-scene home-reveal${activeScene === homeScenes[8].id ? ' is-current' : ''}`}>
          <div className="home-shell">
            <div className="home-mobile__panel">
              <div className="home-mobile__copy home-reveal">
                <span className="home-heading__eyebrow">Banking that fits your life</span>
                <h2>Bank Smarter with MMOCCUL Digital Banking</h2>
                <p>Enjoy convenient banking from your phone. Check balances, transfer money, pay bills, and manage your account wherever you are.</p>
                <ul>
                  <li><Check size={16} /> Check balances and recent activity</li>
                  <li><Check size={16} /> Transfer money with ease</li>
                  <li><Check size={16} /> Apply for loans from your phone</li>
                  <li><Check size={16} /> Receive transaction alerts</li>
                </ul>
                <div className="home-mobile__actions">
                  <a className="home-button home-button--gold" data-pointer-effect="magnetic" href="https://mmocculonline.com/auth/login" target="_blank" rel="noopener noreferrer">Download the App <ArrowUpRight size={16} /></a>
                  <Link className="home-button home-button--outline" to="/services/mobile-banking">See How It Works <ArrowRight size={16} /></Link>
                  <span className="home-mobile__ios"><Smartphone size={16} /> App availability may vary by device</span>
                </div>
              </div>
              <div className="home-mobile__visual home-reveal" style={{ '--home-delay': '120ms' }}>
                <img className="home-mobile__app-showcase" src={appPhoneImage} alt="MMOCCUL mobile banking app with account balance, quick transfers, secure banking, instant alerts, smart insights, and 24/7 support" loading="lazy" decoding="async" />
                <span className="home-mobile__badge"><ShieldCheck size={17} /> Banking made convenient</span>
              </div>
            </div>
          </div>
        </section>

        <section id="home-scene-membership" className="home-membership home-membership--features home-section home-scene home-reveal">
          <div className="home-shell">
            <SectionHeading eyebrow="More than an account" title="Banking built around you"
              description="Membership connects you to a cooperative built to support your financial wellbeing and your community." />
            <div className="home-membership-carousel" role="region" aria-label="MMOCCUL feature cards" aria-roledescription="carousel">
              <div className="home-membership-grid" aria-live="polite">
                {membershipBenefits.map(({ title, description, icon: Icon, image, cta, to, href }, index) => {
                  const slideCount = membershipBenefits.length
                  let offset = (index - activeMembershipFeature + slideCount) % slideCount
                  if (offset > slideCount / 2) offset -= slideCount
                  if (Math.abs(offset) > 1) return null

                  return (
                    <article
                      className={`home-membership-slide${offset === 0 ? ' home-membership-card home-membership-slide--active' : ` home-membership-slide--preview${offset < 0 ? ' is-previous' : ' is-next'}`}`}
                      key={title}
                      aria-label={offset === 0 ? `${title}: ${description}` : `Show ${title} feature`}
                      role={offset === 0 ? undefined : 'button'}
                      tabIndex={offset === 0 ? undefined : 0}
                      onClick={offset === 0 ? undefined : () => setActiveMembershipFeature(index)}
                      onKeyDown={offset === 0 ? undefined : (event) => {
                        if (event.key === 'Enter' || event.key === ' ') {
                          event.preventDefault()
                          setActiveMembershipFeature(index)
                        }
                      }}
                    >
                      {offset === 0 ? (
                        <>
                          <div className="home-membership-card__visual">
                            <img src={image} alt="" aria-hidden="true" loading="lazy" decoding="async" />
                            <span className="home-membership-card__icon"><Icon size={20} aria-hidden="true" /></span>
                          </div>
                          <div className="home-membership-card__copy">
                            <h3>{title}</h3>
                            <p>{description}</p>
                            {href ? (
                              <a className="home-membership-card__cta" href={href} target="_blank" rel="noopener noreferrer">
                                {cta}<ArrowUpRight size={15} aria-hidden="true" />
                              </a>
                            ) : (
                              <Link className="home-membership-card__cta" to={to}>
                                {cta}<ArrowRight size={15} aria-hidden="true" />
                              </Link>
                            )}
                          </div>
                        </>
                      ) : (
                        <img src={image} alt="" aria-hidden="true" loading="lazy" decoding="async" />
                      )}
                    </article>
                  )
                })}
              </div>
              <div className="home-membership-carousel__controls" aria-label="Feature card controls">
                <button type="button" className="home-membership-carousel__arrow" onClick={() => changeMembershipFeature(-1)} aria-label="Previous feature">
                  <ChevronLeft size={20} />
                </button>
                <div className="home-membership-carousel__dots" role="group" aria-label="Choose a feature">
                  {membershipBenefits.map(({ title }, index) => (
                    <button
                      type="button"
                      key={title}
                      className={activeMembershipFeature === index ? 'is-active' : ''}
                      onClick={() => setActiveMembershipFeature(index)}
                      aria-label={`Show ${title}`}
                      aria-current={activeMembershipFeature === index ? 'true' : undefined}
                    />
                  ))}
                </div>
                <button type="button" className="home-membership-carousel__arrow" onClick={() => changeMembershipFeature(1)} aria-label="Next feature">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
            <div className="home-membership-family home-reveal">
              <div className="home-membership-family__visual">
                <img src={memberCoupleImage} alt="A couple in matching MMOCCUL attire" loading="lazy" decoding="async" />
              </div>
              <div className="home-membership-family__copy">
                <span className="home-heading__eyebrow">Join the MMOCCUL family</span>
                <h3>Banking that grows with your family</h3>
                <p>Build your future with a member-owned cooperative that supports families, savings goals, and shared progress.</p>
                <Link to="/create-account" className="home-button home-button--blue">Become a Member <ArrowRight size={16} /></Link>
              </div>
            </div>
          </div>
        </section>

        <section id="home-scene-testimonials" className="home-testimonials home-section home-scene home-reveal">
          <div className="home-shell">
            <SectionHeading eyebrow="Member voices" title="Trusted by Thousands of Members"
              description="We’re preparing verified member stories to share here—with their permission." />
            <div className="home-testimonial-grid">
              {testimonialPlaceholders.map(({ initials, role, quote }, index) => (
                <article className="home-testimonial-card home-reveal" key={index} style={{ '--home-delay': `${index * 70}ms` }}>
                  <span className="home-testimonial-card__quote-mark" aria-hidden="true">“</span>
                  <p>{quote}</p>
                  <div className="home-testimonial-card__member">
                    <span className="home-testimonial-card__avatar">{initials}</span>
                    <span><strong>{role}</strong><small>Story coming soon</small></span>
                    <span className="home-testimonial-card__placeholder">Placeholder</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="home-scene-cta" className="home-cta home-section home-scene home-reveal">
          <div className="home-shell">
            <div className="home-cta__panel">
              <div className="home-cta__decoration" aria-hidden="true"><span /><span /><span /></div>
              <div className="home-cta__copy">
                <span className="home-kicker">Your next step starts here</span>
                <h2>Ready to Take the Next Step with MMOCCUL?</h2>
                <p>Join one of Cameroon’s growing credit unions and experience reliable, member-focused financial services.</p>
              </div>
              <div className="home-cta__app-visual home-reveal" style={{ '--home-delay': '100ms' }}>
                <img src={appManImage} alt="MMOCCUL member in a suit showing the mobile banking app" loading="lazy" decoding="async" />
              </div>
              <div className="home-cta__actions">
                <Link to="/create-account" className="home-button home-button--gold" data-pointer-effect="magnetic">Become a Member <ArrowRight size={17} /></Link>
                <a href="https://mmocculonline.com/auth/login" target="_blank" rel="noopener noreferrer" className="home-button home-button--light">Download the App <ArrowUpRight size={16} /></a>
                <Link to="/branches" className="home-cta__branch"><MapPin size={16} /> Find a Branch</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <nav className="home-scene-indicator" aria-label="Homepage sections">
        {homeScenes.map(({ id, label }) => (
          <a key={id} href={`#${id}`} aria-label={label} aria-current={activeScene === id ? 'location' : undefined}
            className={activeScene === id ? 'is-active' : ''}>
            <span>{label}</span>
          </a>
        ))}
      </nav>
      <a className="home-whatsapp" href="https://wa.me/237680485488" target="_blank" rel="noopener noreferrer" aria-label="Chat with MMOCCUL on WhatsApp">
        <FaWhatsapp size={25} /><span>Chat with us</span>
      </a>
    </div>
  )
}
