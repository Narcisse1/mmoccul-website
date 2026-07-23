// src/utils/searchIndex.js
import { services, news } from '../export'
import { branches } from '../pages/BranchesPage'

// Builds a flat, searchable list from your existing data sources.
// If your folder structure differs, adjust the import paths above —
// they must point to wherever `services`, `news`, and `branches` actually live.
export const buildSearchIndex = () => {
  const flatServices = services.flatMap(cat =>
    cat.services.map(svc => ({
      type: 'service',
      id: svc.id,
      title: svc.title,
      description: svc.description,
      route: `/services/${svc.id}`,
    }))
  )

  const flatBranches = branches.map(b => ({
    type: 'branch',
    id: b.id,
    title: b.name,
    description: b.address,
    route: '/branches',
  }))

  const flatNews = news.map((n, i) => ({
    type: 'news',
    id: i,
    title: n.title,
    description: n.para,
    route: '/latest-news',
  }))

  return [...flatServices, ...flatBranches, ...flatNews]
}

// Ranks matches: exact title match > title starts with query > title contains query > description contains query
export const searchIndex = (items, query, limit = 8) => {
  const q = query.trim().toLowerCase()
  if (!q) return []

  return items
    .map(item => {
      const title = item.title.toLowerCase()
      const desc = item.description.toLowerCase()
      let score = 0
      if (title === q) score = 100
      else if (title.startsWith(q)) score = 80
      else if (title.includes(q)) score = 60
      else if (desc.includes(q)) score = 20
      return { ...item, score }
    })
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
}