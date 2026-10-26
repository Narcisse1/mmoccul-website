import { useEffect, useRef } from 'react'

export const ScrollProgress = () => {
  const barRef = useRef(null)

  useEffect(() => {
    let frameId = 0
    const update = () => {
      cancelAnimationFrame(frameId)
      frameId = requestAnimationFrame(() => {
        const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight
        const progress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0
        if (barRef.current) barRef.current.style.transform = `scaleX(${Math.min(1, Math.max(0, progress))})`
      })
    }

    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update, { passive: true })
    update()
    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return <div className="experience-scroll-progress" ref={barRef} aria-hidden="true" />
}
