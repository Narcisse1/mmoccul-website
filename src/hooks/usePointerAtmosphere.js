import { useEffect } from 'react'

const clearPointerVariables = (element) => {
  element.style.removeProperty('--magnetic-x')
  element.style.removeProperty('--magnetic-y')
  element.style.removeProperty('--pointer-rotate-x')
  element.style.removeProperty('--pointer-rotate-y')
  element.style.removeProperty('--pointer-x')
  element.style.removeProperty('--pointer-y')
}

export const usePointerAtmosphere = (containerRef, refreshKey) => {
  useEffect(() => {
    const container = containerRef.current
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    if (!container || reducedMotion || !finePointer) return undefined

    const elements = container.querySelectorAll('[data-pointer-effect]')
    const cleanups = Array.from(elements, (element) => {
      const handleMove = (event) => {
        if (event.pointerType === 'touch') return
        const bounds = element.getBoundingClientRect()
        const x = (event.clientX - bounds.left) / bounds.width - 0.5
        const y = (event.clientY - bounds.top) / bounds.height - 0.5

        if (element.dataset.pointerEffect === 'magnetic') {
          element.style.setProperty('--magnetic-x', `${x * 8}px`)
          element.style.setProperty('--magnetic-y', `${y * 6}px`)
        } else if (element.dataset.pointerEffect === 'tilt') {
          element.style.setProperty('--pointer-rotate-x', `${y * -5}deg`)
          element.style.setProperty('--pointer-rotate-y', `${x * 7}deg`)
        } else if (element.dataset.pointerEffect === 'glow') {
          element.style.setProperty('--pointer-x', `${Math.max(0, Math.min(100, x * 100 + 50))}%`)
          element.style.setProperty('--pointer-y', `${Math.max(0, Math.min(100, y * 100 + 50))}%`)
        }
      }

      const handleLeave = () => clearPointerVariables(element)
      element.addEventListener('pointermove', handleMove, { passive: true })
      element.addEventListener('pointerleave', handleLeave, { passive: true })

      return () => {
        element.removeEventListener('pointermove', handleMove)
        element.removeEventListener('pointerleave', handleLeave)
        clearPointerVariables(element)
      }
    })

    return () => cleanups.forEach((cleanup) => cleanup())
  }, [containerRef, refreshKey])
}
