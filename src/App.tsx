import { useEffect, useLayoutEffect, useRef } from 'react'
import { AtelierSite } from './atelier/AtelierSite'

export default function App() {
  const reduceRef = useRef(false)

  useLayoutEffect(() => {
    document.documentElement.classList.add('atelier')
  }, [])

  useEffect(() => {
    const root = document.documentElement
    const fine = window.matchMedia('(pointer: fine)')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)')
    const applyPrefs = () => {
      root.classList.toggle('fine', fine.matches)
      root.classList.toggle('reduce', reduce.matches)
      reduceRef.current = reduce.matches
    }
    applyPrefs()
    fine.addEventListener('change', applyPrefs)
    reduce.addEventListener('change', applyPrefs)

    const target = { x: 0.5, y: 0.5 }
    const cur = { x: 0.5, y: 0.5 }

    const onMove = (e: PointerEvent) => {
      target.x = e.clientX / window.innerWidth
      target.y = e.clientY / window.innerHeight
      const hit = e.target
      root.classList.toggle(
        'on-link',
        hit instanceof Element && Boolean(hit.closest('a, button')),
      )
    }

    const updateScroll = () => {
      const max = root.scrollHeight - window.innerHeight
      root.style.setProperty('--scroll', String(max > 0 ? window.scrollY / max : 0))
      root.style.setProperty(
        '--hero',
        String(Math.min(1, window.scrollY / Math.max(window.innerHeight, 1))),
      )
    }

    let raf = 0
    const tick = () => {
      if (!reduceRef.current) {
        cur.x += (target.x - cur.x) * 0.14
        cur.y += (target.y - cur.y) * 0.14
      } else {
        cur.x = target.x
        cur.y = target.y
      }
      root.style.setProperty('--mx', cur.x.toFixed(4))
      root.style.setProperty('--my', cur.y.toFixed(4))
      raf = requestAnimationFrame(tick)
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    window.addEventListener('scroll', updateScroll, { passive: true })
    updateScroll()
    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      fine.removeEventListener('change', applyPrefs)
      reduce.removeEventListener('change', applyPrefs)
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('scroll', updateScroll)
    }
  }, [])

  return <AtelierSite />
}
