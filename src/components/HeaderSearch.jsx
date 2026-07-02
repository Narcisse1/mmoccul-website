// src/components/HeaderSearch.jsx
import React, { useState, useEffect, useMemo, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { IoSearch, IoClose } from 'react-icons/io5'
import { FaCreditCard, FaBuilding, FaNewspaper } from 'react-icons/fa'
import { useLanguage } from '../context/LanguageContext'
import { buildSearchIndex, searchIndex } from '../utils/searchIndex'

const TYPE_ICON = {
  service: FaCreditCard,
  branch: FaBuilding,
  news: FaNewspaper,
}

const TYPE_LABEL = {
  service: 'Service',
  branch: 'Branch',
  news: 'News',
}

export const HeaderSearch = () => {
  const { t } = useLanguage()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [activeIndex, setActiveIndex] = useState(-1)
  const wrapperRef = useRef(null)
  const inputRef = useRef(null)

  // Built once on mount — cheap since it's just array mapping, not a network call
  const allItems = useMemo(() => buildSearchIndex(), [])
  const results = useMemo(() => searchIndex(allItems, query), [allItems, query])

  // Close the dropdown when clicking anywhere outside the search box
  useEffect(() => {
    const handleClick = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const goTo = (route) => {
    setOpen(false)
    setQuery('')
    setActiveIndex(-1)
    navigate(route)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const target = activeIndex >= 0 ? results[activeIndex] : results[0]
    if (target) goTo(target.route)
  }

  const handleKeyDown = (e) => {
    if (!open || results.length === 0) return
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActiveIndex(prev => Math.min(prev + 1, results.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActiveIndex(prev => Math.max(prev - 1, -1))
    } else if (e.key === 'Escape') {
      setOpen(false)
      inputRef.current?.blur()
    }
  }

  return (
    <div className="relative" ref={wrapperRef}>
      <form
        onSubmit={handleSubmit}
        className={`flex items-center w-48 lg:w-64 rounded-full border px-4 py-2 transition-colors ${
          open ? 'border-blue-900 shadow-sm' : 'border-gray-300'
        }`}
      >
        <IoSearch className="text-gray-500 shrink-0" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            setActiveIndex(-1)
            setOpen(true)
          }}
          onFocus={() => query && setOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder={t('search')}
          className="ml-2 w-full bg-transparent text-[13px] focus:outline-none"
        />
        {query && (
          <button
            type="button"
            onClick={() => { setQuery(''); setOpen(false); inputRef.current?.focus() }}
            className="text-gray-400 hover:text-gray-600 shrink-0"
            aria-label="Clear search"
          >
            <IoClose className="text-base" />
          </button>
        )}
      </form>

      {open && query.trim() && (
        <div className="absolute left-0 right-0 mt-2 bg-white rounded-2xl border border-slate-100 shadow-xl overflow-hidden z-50 min-w-[340px] max-h-[420px] overflow-y-auto">
          {results.length === 0 ? (
            <div className="px-5 py-8 text-sm text-slate-500 text-center">
              No results for "{query.trim()}"
            </div>
          ) : (
            <ul>
              {results.map((item, index) => {
                const Icon = TYPE_ICON[item.type]
                return (
                  <li key={`${item.type}-${item.id}`}>
                    <button
                      type="button"
                      onMouseEnter={() => setActiveIndex(index)}
                      onClick={() => goTo(item.route)}
                      className={`w-full flex items-start gap-3 px-5 py-3 text-left transition-colors ${
                        activeIndex === index ? 'bg-slate-50' : 'bg-white'
                      }`}
                    >
                      <div className="w-8 h-8 shrink-0 rounded-lg bg-cyan-100 flex items-center justify-center mt-0.5">
                        <Icon className="text-cyan-600 text-xs" />
                      </div>
                      <div className="min-w-0">
                        <span className="block text-[10px] uppercase tracking-wider text-cyan-600 font-semibold">
                          {TYPE_LABEL[item.type]}
                        </span>
                        <span className="block text-sm font-medium text-slate-900 truncate">
                          {item.title}
                        </span>
                        <span className="block text-xs text-slate-500 truncate">
                          {item.description}
                        </span>
                      </div>
                    </button>
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      )}
    </div>
  )
}