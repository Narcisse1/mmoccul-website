import { useEffect } from 'react'

export const useRevealOnScroll = (containerRef, selector, refreshKey = null) => {
  useEffect(() => {
    const container = containerRef.current
    if (!container) return undefined

    const elements = container.querySelectorAll(selector)
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reducedMotion || !('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'))
      return undefined
    }

    const pendingElements = new Set(elements)
    const revealVisibleElements = () => {
      pendingElements.forEach((element) => {
        const bounds = element.getBoundingClientRect()
        if (bounds.bottom <= 0 || bounds.top >= window.innerHeight) return
        element.classList.add('is-visible')
        pendingElements.delete(element)
      })
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('is-visible')
        pendingElements.delete(entry.target)
        observer.unobserve(entry.target)
      })
    }, { threshold: 0.1, rootMargin: '0px 0px -24px 0px' })

    elements.forEach((element) => observer.observe(element))
    let frameId = 0
    const scheduleReveal = () => {
      if (frameId) return
      frameId = requestAnimationFrame(() => {
        frameId = 0
        revealVisibleElements()
      })
    }
    revealVisibleElements()
    window.addEventListener('scroll', scheduleReveal, { passive: true })
    window.addEventListener('resize', scheduleReveal, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', scheduleReveal)
      window.removeEventListener('resize', scheduleReveal)
      cancelAnimationFrame(frameId)
    }
  }, [containerRef, selector, refreshKey])
}
