import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, CalendarDays, Mail, ShieldCheck, Users } from 'lucide-react'
import { Header } from '../sections/Header'
import { Footer } from '../sections/Footer'
import { useHeroParallax } from '../hooks/useHeroParallax'
import { usePointerAtmosphere } from '../hooks/usePointerAtmosphere'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'
import { news } from '../export'
import communityImage from '../assets/assets3/community.png'
import './LatestNewsPage.css'

const categories = ['All', 'News', 'Expansion', 'Digital Banking', 'Financial Tips', 'Guides']

const matchesCategory = (article, category) => {
  if (category === 'All') return true
  if (category === 'News') return ['Company News', 'Impact', 'News', 'Announcement'].includes(article.category)
  if (category === 'Guides') return ['Guide', 'Guides'].includes(article.category)
  return article.category === category
}

export const LatestNewsPage = () => {
  const pageRef = useRef(null)
  const [activeCategory, setActiveCategory] = useState('All')
  const [email, setEmail] = useState('')
  const [newsletterStatus, setNewsletterStatus] = useState('')
  const filteredNews = news.filter((article) => matchesCategory(article, activeCategory))

  useHeroParallax(pageRef)
  usePointerAtmosphere(pageRef)
  useRevealOnScroll(pageRef, '.news-reveal', activeCategory)

  const subscribe = (event) => {
    event.preventDefault()
    const subject = encodeURIComponent('MMOCCUL News and Updates Subscription')
    const body = encodeURIComponent(`Please add ${email} to the MMOCCUL news and updates mailing list.`)
    window.location.href = `mailto:contact@mmoccul.com?subject=${subject}&body=${body}`
    setNewsletterStatus('Your email app is ready with a subscription request. Send the message to complete your request.')
  }

  return (
    <div className="latest-news-page" ref={pageRef}>
      <Header />
      <main>
        <section className="news-hero" aria-labelledby="news-hero-title">
          <div className="news-hero__image" style={{ backgroundImage: `url(${communityImage})` }} aria-hidden="true" />
          <div className="news-hero__veil" aria-hidden="true" />
          <div className="news-shell news-hero__content">
            <span className="news-kicker news-kicker--light"><i /> Blog & News</span>
            <h1 id="news-hero-title">Latest News<br /><em>& Insights</em></h1>
            <p>Stay updated with the latest from MMOCCUL — branch openings, digital innovations, member stories, and financial tips.</p>
            <div className="news-hero__trust">
              <span><ShieldCheck size={15} /> COBAC Licensed</span><i />
              <span><Users size={15} /> Member-Owned</span><i />
              <span><ArrowRight size={15} /> Growing With You</span>
            </div>
          </div>
          <div className="news-hero__bottom" aria-hidden="true" />
        </section>

        <section className="news-posts news-section">
          <div className="news-shell">
            <div className="news-posts__heading news-reveal">
              <div>
                <span className="news-kicker">Latest updates</span>
                <h2>Stories, ideas & updates.</h2>
              </div>
              <p>News and practical insights from across the MMOCCUL community.</p>
            </div>
            <div className="news-filters news-reveal" aria-label="Filter articles by category">
              {categories.map((category) => (
                <button
                  type="button"
                  key={category}
                  className={activeCategory === category ? 'is-active' : ''}
                  aria-pressed={activeCategory === category}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
            {filteredNews.length > 0 ? (
              <div className="news-grid">
                {filteredNews.map((article, index) => (
                  <article className="news-card news-reveal" key={article.id} style={{ '--news-delay': `${(index % 3) * 65}ms` }}>
                    <Link to={`/latest-news/${article.id}`} className="news-card__image" aria-label={`Read ${article.title}`}>
                      <img src={article.img} alt="" loading="lazy" />
                      <span className="news-card__category">{article.category}</span>
                    </Link>
                    <div className="news-card__content">
                      <span className="news-card__date"><CalendarDays size={14} /> {article.date}</span>
                      <h3><Link to={`/latest-news/${article.id}`}>{article.title}</Link></h3>
                      <p>{article.para}</p>
                      <Link className="news-card__read" to={`/latest-news/${article.id}`}>Read More <ArrowRight size={15} /></Link>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <p className="news-empty" role="status">There are no articles in this category yet.</p>
            )}
          </div>
        </section>

        <section className="news-newsletter news-section">
          <div className="news-shell news-newsletter__inner news-reveal">
            <div className="news-newsletter__copy">
              <span className="news-kicker news-kicker--light"><i /> Stay connected</span>
              <h2>Stay Informed</h2>
              <p>Subscribe to receive the latest news, updates, and financial tips from MMOCCUL.</p>
            </div>
            <form className="news-newsletter__form" onSubmit={subscribe}>
              <label htmlFor="news-email">Email address</label>
              <div className="news-newsletter__input">
                <Mail size={17} aria-hidden="true" />
                <input
                  id="news-email"
                  type="email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value)
                    setNewsletterStatus('')
                  }}
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                />
                <button type="submit">Subscribe <ArrowUpRight size={15} /></button>
              </div>
              {newsletterStatus && <p className="news-newsletter__status" role="status">{newsletterStatus}</p>}
            </form>
          </div>
        </section>

        <section className="news-cta">
          <div className="news-cta__pattern" aria-hidden="true" />
          <div className="news-shell news-cta__inner news-reveal">
            <span className="news-kicker news-kicker--light"><i /> Your financial future</span>
            <h2>Ready to Join MMOCCUL?</h2>
            <p>Become part of a member-owned cooperative growing with communities across Cameroon.</p>
            <div className="news-cta__actions">
              <Link className="news-button news-button--gold" data-pointer-effect="magnetic" to="/create-account">Become a Member <ArrowRight size={15} /></Link>
              <Link className="news-button news-button--outline" to="/branches">Find a Branch <ArrowUpRight size={15} /></Link>
              <Link className="news-cta__contact" to="/contact">Contact Us <ArrowUpRight size={15} /></Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
