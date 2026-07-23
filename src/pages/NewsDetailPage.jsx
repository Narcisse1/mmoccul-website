import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { FaArrowLeft, FaCalendarAlt, FaTag, FaUser } from 'react-icons/fa'
import { news } from '../export'
import { Header } from '../sections/Header'
import { Footer } from '../sections/Footer'

export const NewsDetailPage = () => {
  const { newsId } = useParams()
  const navigate = useNavigate()
  const [article, setArticle] = useState(null)

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    })
    const found = news.find(item => item.id === parseInt(newsId))
    setArticle(found || null)
    window.scrollTo(0, 0)
  }, [newsId])

  if (!article) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-8">The article you're looking for doesn't exist.</p>
          <Link
            to="/latest-news"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Back to Latest News
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${article.img})`,
            opacity: 0.15
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div data-aos="fade-up">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-8 group"
            >
              <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <FaArrowLeft className="text-white" />
              </div>
              <span className="font-medium">Back to Latest News</span>
            </button>

            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="bg-cyan-500 text-white text-xs font-semibold px-4 py-2 rounded-full uppercase tracking-wide">
                {article.category}
              </span>
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <FaCalendarAlt className="text-cyan-400" />
                <span>{article.date}</span>
              </div>
            </div>

            <h1
              data-aos="fade-up"
              data-aos-delay="100"
              className="font-serif text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
            >
              {article.title}
            </h1>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100" data-aos="fade-up">
            <img
              src={article.img}
              alt={article.title}
              className="w-full h-[400px] object-cover"
            />
            <div className="p-8 lg:p-12">
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="flex items-center gap-2 text-slate-500 text-sm">
                  <FaCalendarAlt className="text-cyan-500" />
                  <span>{article.date}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-500 text-sm">
                  <FaTag className="text-cyan-500" />
                  <span>{article.category}</span>
                </div>
              </div>

              <p className="text-slate-700 text-lg leading-relaxed">
                {article.para}
              </p>

              <div className="mt-10 pt-8 border-t border-slate-100">
                <Link
                  to="/latest-news"
                  className="inline-flex items-center gap-2 text-cyan-600 hover:text-cyan-700 text-sm font-semibold transition-colors"
                >
                  <FaArrowLeft className="text-xs" />
                  Back to Latest News
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
