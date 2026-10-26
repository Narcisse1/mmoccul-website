import { useEffect } from 'react'

const heroImageSelector = [
  '.home-hero__photo',
  '.about-hero__image',
  '.branches-hero__image',
  '.branch-detail-hero__image',
  '.services-hero__image',
  '.service-detail-hero__image',
  '.contact-hero__image',
  '.news-hero__image',
].join(', ')

export const useHeroParallax = (containerRef, refreshKey) => {
  useEffect(() => {
    const container = containerRef.current
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!container || reducedMotion) return undefined

    const images = Array.from(container.querySelectorAll(heroImageSelector))
    if (images.length === 0) return undefined

    const visibleImages = new Set()
    const observer = 'IntersectionObserver' in window
      ? new IntersectionObserver((entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          if (isIntersecting) visibleImages.add(target)
          else {
            visibleImages.delete(target)
            target.style.removeProperty('--hero-parallax')
          }
        })
        scheduleUpdate()
      }, { rootMargin: '80px 0px', threshold: 0 })
      : null

    let frameId = 0
    const update = () => {
      frameId = 0
      const viewportHeight = window.innerHeight
      visibleImages.forEach((image) => {
        const { top, height } = image.getBoundingClientRect()
        const displacement = Math.max(-16, Math.min(16, (viewportHeight * 0.5 - (top + height * 0.5)) * 0.035))
        image.style.setProperty('--hero-parallax', `${displacement.toFixed(2)}px`)
      })
    }
    function scheduleUpdate() {
      if (frameId) return
      frameId = requestAnimationFrame(update)
    }

    images.forEach((image) => {
      if (observer) observer.observe(image)
      else visibleImages.add(image)
    })
    window.addEventListener('scroll', scheduleUpdate, { passive: true })
    window.addEventListener('resize', scheduleUpdate, { passive: true })
    scheduleUpdate()

    return () => {
      if (observer) observer.disconnect()
      window.removeEventListener('scroll', scheduleUpdate)
      window.removeEventListener('resize', scheduleUpdate)
      cancelAnimationFrame(frameId)
      images.forEach((image) => image.style.removeProperty('--hero-parallax'))
    }
  }, [containerRef, refreshKey])
}
