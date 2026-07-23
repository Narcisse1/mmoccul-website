import React, { useState, useEffect, useMemo } from 'react'
import { Header } from '../sections/Header'
import { Footer } from '../sections/Footer'
import { Link as RouterLink } from 'react-router-dom'
import { FaSearch, FaBuilding, FaCreditCard, FaNewspaper, FaQuestionCircle, FaArrowRight } from 'react-icons/fa'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useLanguage } from '../context/LanguageContext'
import { services, news } from '../export'
import { branches } from './BranchesPage'

export const SearchPage = () => {
  const { t } = useLanguage()
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    AOS.init({ duration: 800, once: true })
  }, [])

  const flatServices = useMemo(() => {
    return services.flatMap(cat =>
      cat.services.map(svc => ({
        type: 'service',
        id: svc.id,
        title: svc.title,
        description: svc.description,
        route: `/services/${svc.id}`,
      }))
    )
  }, [])

  const flatBranches = useMemo(() => {
    return branches.map(b => ({
      type: 'branch',
      id: b.id,
      title: b.name,
      description: b.address,
      route: '/branches',
    }))
  }, [])

  const flatNews = useMemo(() => {
    return news.map((n, i) => ({
      type: 'news',
      id: i,
      title: n.title,
      description: n.para,
      route: '/latest-news',
    }))
  }, [])

  const allItems = useMemo(() => [
    ...flatServices,
    ...flatBranches,
    ...flatNews,
  ], [flatServices, flatBranches, flatNews])

  const categoryStats = useMemo(() => ({
    services: flatServices.length,
    branches: flatBranches.length,
    news: flatNews.length,
  }), [flatServices, flatBranches, flatNews])

  const filteredResults = useMemo(() => {
    if (!searchQuery.trim()) return []
    const q = searchQuery.toLowerCase()
    return allItems.filter(item =>
      item.title.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q)
    )
  }, [searchQuery, allItems])

  const searchCategories = [
    {
      title: 'Services',
      description: 'Explore our financial products',
      icon: <FaCreditCard className="text-cyan-600" />,
      to: '/services',
      count: categoryStats.services,
    },
    {
      title: 'Branches',
      description: 'Find a branch near you',
      icon: <FaBuilding className="text-cyan-600" />,
      to: '/branches',
      count: categoryStats.branches,
    },
    {
      title: 'Latest News',
      description: 'Recent announcements & updates',
      icon: <FaNewspaper className="text-cyan-600" />,
      to: '/latest-news',
      count: categoryStats.news,
    },
    {
      title: 'Cards',
      description: 'Our banking cards',
      icon: <FaCreditCard className="text-cyan-600" />,
      to: '/cards',
      count: 6,
    },
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div 
            data-aos="fade-up"
            className="inline-flex items-center gap-2 rounded-full border border-slate-700/50 bg-white/5 px-6 py-3 backdrop-blur-sm mb-6"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="text-xs font-medium uppercase tracking-wider text-slate-400">{t('search')}</span>
          </div>
          
          <h1 
            data-aos="fade-up" 
            data-aos-delay="100"
            className="font-serif text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            {t('searchOurSite') || 'Search Our'} <span className="bg-gradient-to-r from-cyan-400 to-sky-400 bg-clip-text text-transparent">{t('forInformation') || 'for Information'}</span>
          </h1>
          
          <p 
            data-aos="fade-up" 
            data-aos-delay="200"
            className="mx-auto max-w-2xl text-lg text-slate-300 leading-relaxed mb-10"
          >
            {t('searchPlaceholder') || 'Search for branches, services, news, and more. Quick access to everything MMOCCUL offers.'}
          </p>
          
          {/* Search Input */}
          <div 
            data-aos="fade-up" 
            data-aos-delay="300"
            className="max-w-2xl mx-auto"
          >
            <div className="relative">
              <FaSearch className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 text-lg" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t('enterSearchTerm') || 'Enter keywords...'}
                className="w-full pl-14 pr-32 py-5 rounded-full border border-slate-600 bg-white/10 backdrop-blur-sm text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 transition-all text-lg"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2.5 rounded-full font-semibold transition-all flex items-center gap-2">
                {t('search')}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Search Categories */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-slate-900 mb-4">{t('popularSearches') || 'Popular Categories'}</h2>
            <p className="text-slate-600 max-w-xl mx-auto">{t('searchCategoriesText') || 'Quick access to key information across our website.'}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {searchCategories.map((cat, index) => (
              <RouterLink
                key={cat.title}
                to={cat.to}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="group bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-cyan-200 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className="w-12 h-12 mb-4 rounded-xl bg-cyan-100 flex items-center justify-center">
                  {cat.icon}
                </div>
                <h3 className="font-serif text-lg font-bold text-slate-900 mb-2 group-hover:text-cyan-600 transition-colors">
                  {cat.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4">{cat.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500">{cat.count} items</span>
                  <FaArrowRight className="w-4 h-4 text-cyan-600 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </div>
              </RouterLink>
            ))}
          </div>
        </div>
      </section>

      {/* Live Search Results */}
      {searchQuery.trim() && (
        <section className="py-16 lg:py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Results for "{searchQuery}"
              </h2>
              <p className="text-slate-600">
                {filteredResults.length} result{filteredResults.length !== 1 ? 's' : ''} found
              </p>
            </div>

            {filteredResults.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-2xl border border-slate-100">
                <FaSearch className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                <h3 className="text-xl font-serif font-bold text-slate-900 mb-2">No results found</h3>
                <p className="text-slate-500 mb-6">Try adjusting your keywords or browse our categories above.</p>
                <RouterLink
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-6 rounded-full transition-all"
                >
                  Contact Support
                </RouterLink>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredResults.map((item, index) => (
                  <RouterLink
                    key={`${item.type}-${item.id}`}
                    to={item.route}
                    data-aos="fade-up"
                    data-aos-delay={index * 50}
                    className="group bg-white rounded-2xl p-6 border border-slate-100 hover:border-cyan-200 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 shrink-0 rounded-lg bg-cyan-100 flex items-center justify-center">
                        {item.type === 'service' && <FaCreditCard className="text-cyan-600 text-sm" />}
                        {item.type === 'branch' && <FaBuilding className="text-cyan-600 text-sm" />}
                        {item.type === 'news' && <FaNewspaper className="text-cyan-600 text-sm" />}
                      </div>
                      <div className="min-w-0">
                        <span className="text-[10px] uppercase tracking-wider text-cyan-600 font-semibold">
                          {item.type === 'service' ? 'Service' : item.type === 'branch' ? 'Branch' : 'News'}
                        </span>
                        <h3 className="font-serif text-lg font-bold text-slate-900 leading-snug group-hover:text-cyan-600 transition-colors line-clamp-2">
                          {item.title}
                        </h3>
                        <p className="text-slate-500 text-sm mt-1 line-clamp-2">{item.description}</p>
                      </div>
                      <FaArrowRight className="w-4 h-4 text-cyan-600 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all shrink-0" />
                    </div>
                  </RouterLink>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-6">{t('cantFindAnswer') || "Can't Find What You're Looking For?"}</h2>
          <p className="text-slate-300 mb-10 max-w-2xl mx-auto">
            {t('cantFindAnswerText') || 'Our support team is ready to help you with any questions about our services.'}
          </p>
          <RouterLink to="/contact" className="inline-flex items-center gap-2 bg-white text-slate-900 hover:bg-slate-100 font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
            {t('contactSupport') || 'Contact Support'}
          </RouterLink>
        </div>
      </section>

      <Footer />
    </div>
  )
}