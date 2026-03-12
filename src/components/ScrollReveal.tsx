'use client'
import { useEffect } from 'react'

export default function ScrollReveal() {
  useEffect(() => {
    const init = () => {
      const els = document.querySelectorAll('.reveal')
      const obs = new IntersectionObserver(
        (entries) => entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible')
        }),
        { threshold: 0.1 }
      )
      els.forEach((el) => obs.observe(el))
      return obs
    }

    // Small delay to ensure all components are mounted
    const timer = setTimeout(() => {
      const obs = init()
      return () => obs.disconnect()
    }, 100)

    return () => clearTimeout(timer)
  }, [])
  return null
}