import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  ArrowUpRight,
  Clock3,
  Mail,
  MapPin,
  Phone,
  Send,
  ShieldCheck,
  Users,
} from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { Header } from '../sections/Header'
import { Footer } from '../sections/Footer'
import { useHeroParallax } from '../hooks/useHeroParallax'
import { usePointerAtmosphere } from '../hooks/usePointerAtmosphere'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'
import communityImage from '../assets/assets3/community.png'
import './ContactPage.css'

const contactCards = [
  {
    title: 'Customer Care',
    icon: Phone,
    lines: [
      { label: '+237 675 95 27 41', href: 'tel:+237675952741' },
      { label: 'contact@mmoccul.com', href: 'mailto:contact@mmoccul.com' },
      { label: 'Monday – Friday | 8:00am – 5:00pm' },
    ],
  },
  {
    title: 'Head Office (Damas)',
    icon: MapPin,
    lines: [
      { label: 'Damas / Rond Point Damas, Yaoundé' },
      { label: '673 86 23 69', href: 'tel:+237673862369' },
    ],
  },
  {
    title: 'General Inquiries',
    icon: Mail,
    lines: [
      { label: 'contact@mmoccul.com', href: 'mailto:contact@mmoccul.com' },
      { label: 'WhatsApp support is available via the floating button' },
    ],
  },
]

const supportOptions = [
  { title: 'Call Customer Care', detail: '+237 675 95 27 41', href: 'tel:+237675952741', icon: Phone },
  { title: 'WhatsApp Us', detail: 'Chat with our support team', href: 'https://wa.me/237680485488', icon: FaWhatsapp, external: true },
  { title: 'Find a Branch', detail: 'Explore our 13 locations', href: '/branches', icon: MapPin },
  { title: 'Open an Account', detail: 'Start your membership', href: '/create-account', icon: Users },
]

const subjectOptions = ['General Inquiry', 'Account Support', 'Loan Inquiry', 'Complaint', 'Partnership', 'Other']

export const ContactPage = () => {
  const pageRef = useRef(null)
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [formStatus, setFormStatus] = useState('')

  useHeroParallax(pageRef)
  usePointerAtmosphere(pageRef)
  useRevealOnScroll(pageRef, '.contact-reveal')

  const handleChange = (event) => {
    setFormData((current) => ({ ...current, [event.target.name]: event.target.value }))
    setFormStatus('')
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const emailSubject = encodeURIComponent(formData.subject || 'Contact message')
    const emailBody = encodeURIComponent(
      `Full Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || 'Not provided'}\n\n${formData.message}`
    )
    window.location.href = `mailto:contact@mmoccul.com?subject=${emailSubject}&body=${emailBody}`
    setFormStatus('Your message has been prepared in your email app. Send it there to complete delivery.')
  }

  const mapsUrl = 'https://www.google.com/maps/search/?api=1&query=Damas%20%2F%20Rond%20Point%20Damas%20neighbourhood%2C%20Yaound%C3%A9%2C%20Cameroon'
  const mapsEmbedUrl = 'https://maps.google.com/maps?q=Damas%20%2F%20Rond%20Point%20Damas%20neighbourhood%2C%20Yaound%C3%A9%2C%20Cameroon&t=&z=14&ie=UTF8&iwloc=&output=embed'

  return (
    <div className="contact-page" ref={pageRef}>
      <Header />
      <main>
        <section className="contact-hero" aria-labelledby="contact-hero-title">
          <div className="contact-hero__image" style={{ backgroundImage: `url(${communityImage})` }} aria-hidden="true" />
          <div className="contact-hero__veil" aria-hidden="true" />
          <div className="contact-shell contact-hero__content">
            <span className="contact-kicker contact-kicker--light"><i /> Contact Us</span>
            <h1 id="contact-hero-title">We’re Here<br /><em>to Help</em></h1>
            <p>Reach out to MMOCCUL for inquiries, support, account assistance, or partnership opportunities. Our team is ready to serve you.</p>
            <div className="contact-hero__trust">
              <span><ShieldCheck size={15} /> COBAC Licensed</span><i />
              <span><Users size={15} /> Member-Owned</span><i />
              <span><MapPin size={15} /> Nationwide Support</span>
            </div>
          </div>
          <div className="contact-hero__bottom" aria-hidden="true" />
        </section>

        <section className="contact-information contact-section">
          <div className="contact-shell">
            <div className="contact-heading contact-reveal">
              <span className="contact-kicker">Get in touch</span>
              <h2>We’re only a message away.</h2>
              <p>Choose the best way to reach our team and we’ll be glad to help.</p>
            </div>
            <div className="contact-info-grid">
              {contactCards.map(({ title, icon: Icon, lines }, index) => (
                <article className="contact-info-card contact-reveal" key={title} style={{ '--contact-delay': `${index * 70}ms` }}>
                  <span className="contact-info-card__icon"><Icon size={21} /></span>
                  <h3>{title}</h3>
                  <div className="contact-info-card__lines">
                    {lines.map(({ label, href }) => href
                      ? <a href={href} key={label}>{label}</a>
                      : <p key={label}>{label}</p>)}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-form-section contact-section">
          <div className="contact-shell contact-form-layout">
            <div className="contact-form-intro contact-reveal">
              <span className="contact-kicker">Send us a message</span>
              <h2>How can we help you today?</h2>
              <p>Share a few details and your email app will prepare a message for our customer care team.</p>
              <div className="contact-form-intro__note"><Clock3 size={18} /> Customer care hours: Monday – Friday, 8:00am – 5:00pm</div>
              <a className="contact-inline-link" href="mailto:contact@mmoccul.com">Email us directly <ArrowUpRight size={15} /></a>
            </div>
            <form className="contact-form contact-reveal" onSubmit={handleSubmit} style={{ '--contact-delay': '100ms' }}>
              <h3>Send Us a Message</h3>
              <div className="contact-form__grid">
                <label>
                  <span>Full Name</span>
                  <input autoComplete="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Your full name" />
                </label>
                <label>
                  <span>Email Address</span>
                  <input autoComplete="email" name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="you@example.com" />
                </label>
                <label>
                  <span>Phone Number</span>
                  <input autoComplete="tel" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="+237 ..." />
                </label>
                <label>
                  <span>Subject</span>
                  <select name="subject" value={formData.subject} onChange={handleChange} required>
                    <option value="" disabled>Select a subject</option>
                    {subjectOptions.map((subject) => <option key={subject} value={subject}>{subject}</option>)}
                  </select>
                </label>
                <label className="contact-form__full">
                  <span>Message</span>
                  <textarea name="message" value={formData.message} onChange={handleChange} required rows="5" placeholder="Tell us how we can help..." />
                </label>
              </div>
              {formStatus && <p className="contact-form__status" role="status">{formStatus}</p>}
              <button className="contact-button contact-button--gold contact-form__submit" data-pointer-effect="magnetic" type="submit">Prepare Message <Send size={16} /></button>
            </form>
          </div>
        </section>

        <section className="contact-quick contact-section">
          <div className="contact-shell">
            <div className="contact-heading contact-reveal">
              <span className="contact-kicker">Quick support</span>
              <h2>Get help your way.</h2>
            </div>
            <div className="contact-quick-grid">
              {supportOptions.map(({ title, detail, href, icon: Icon, external }, index) => {
                const content = (
                  <>
                    <span className="contact-quick-card__icon"><Icon size={20} /></span>
                    <span className="contact-quick-card__copy"><strong>{title}</strong><small>{detail}</small></span>
                    <ArrowUpRight className="contact-quick-card__arrow" size={17} />
                  </>
                )
                const className = 'contact-quick-card contact-reveal'
                return external
                  ? <a className={className} style={{ '--contact-delay': `${index * 55}ms` }} href={href} target="_blank" rel="noopener noreferrer" key={title}>{content}</a>
                  : <Link className={className} style={{ '--contact-delay': `${index * 55}ms` }} to={href} key={title}>{content}</Link>
              })}
            </div>
          </div>
        </section>

        <section className="contact-map-section contact-section">
          <div className="contact-shell contact-map-layout">
            <div className="contact-map-copy contact-reveal">
              <span className="contact-kicker">Visit our head office</span>
              <h2>Come see us in Damas.</h2>
              <p>Damas / Rond Point Damas neighbourhood, Yaoundé</p>
              <a className="contact-button contact-button--blue" href={mapsUrl} target="_blank" rel="noopener noreferrer">Get Directions <ArrowUpRight size={15} /></a>
            </div>
            <div className="contact-map contact-reveal" style={{ '--contact-delay': '100ms' }}>
              <iframe title="Map showing MMOCCUL Head Office in Damas, Yaoundé" src={mapsEmbedUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </section>

        <section className="contact-channels contact-section">
          <div className="contact-shell contact-channels__inner contact-reveal">
            <div>
              <span className="contact-kicker contact-kicker--light">Alternative contact channels</span>
              <h2>Connect with MMOCCUL.</h2>
            </div>
            <div className="contact-channels__list">
              <a href="tel:+237675952741"><Phone size={17} /><span><small>Phone</small>+237 675 95 27 41</span></a>
              <a href="mailto:contact@mmoccul.com"><Mail size={17} /><span><small>Email</small>contact@mmoccul.com</span></a>
              <a href="https://www.mmoccul.com/" target="_blank" rel="noopener noreferrer"><ArrowUpRight size={17} /><span><small>Website</small>www.mmoccul.com</span></a>
              <a href="https://wa.me/237680485488" target="_blank" rel="noopener noreferrer"><FaWhatsapp size={18} /><span><small>WhatsApp</small>Chat with our support team</span></a>
            </div>
          </div>
        </section>

        <section className="contact-cta">
          <div className="contact-cta__pattern" aria-hidden="true" />
          <div className="contact-shell contact-cta__inner contact-reveal">
            <span className="contact-kicker contact-kicker--light"><i /> Your local cooperative</span>
            <h2>Prefer to Visit Us?</h2>
            <p>Find the nearest MMOCCUL branch and speak with our team in person.</p>
            <div className="contact-cta__actions">
              <Link className="contact-button contact-button--gold" data-pointer-effect="magnetic" to="/branches">Find a Branch <MapPin size={15} /></Link>
              <Link className="contact-button contact-button--outline" to="/create-account">Become a Member <ArrowRight size={15} /></Link>
              <a className="contact-cta__call" href="tel:+237675952741">Call Us Now <Phone size={15} /></a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <a className="contact-whatsapp" href="https://wa.me/237680485488" target="_blank" rel="noopener noreferrer" aria-label="Chat with MMOCCUL on WhatsApp">
        <FaWhatsapp size={23} />
      </a>
    </div>
  )
}
