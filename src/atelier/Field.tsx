import { useEffect, useRef } from 'react'

type Blob = {
  x: number
  y: number
  r: number
  color: string
  ampX: number
  ampY: number
  speed: number
  phase: number
}

const BLOBS: Blob[] = [
  { x: 0.18, y: 0.22, r: 340, color: 'rgba(95, 127, 98, 0.38)', ampX: 0.04, ampY: 0.03, speed: 0.22, phase: 0.4 },
  { x: 0.78, y: 0.18, r: 300, color: 'rgba(196, 154, 42, 0.32)', ampX: 0.05, ampY: 0.04, speed: 0.16, phase: 1.6 },
  { x: 0.62, y: 0.72, r: 380, color: 'rgba(194, 78, 50, 0.24)', ampX: 0.03, ampY: 0.05, speed: 0.13, phase: 2.2 },
  { x: 0.12, y: 0.78, r: 260, color: 'rgba(61, 76, 114, 0.2)', ampX: 0.045, ampY: 0.03, speed: 0.19, phase: 0.9 },
  { x: 0.48, y: 0.42, r: 220, color: 'rgba(196, 134, 118, 0.26)', ampX: 0.06, ampY: 0.05, speed: 0.27, phase: 3.1 },
  { x: 0.92, y: 0.58, r: 200, color: 'rgba(180, 104, 66, 0.2)', ampX: 0.03, ampY: 0.04, speed: 0.21, phase: 4.2 },
]

export function Field() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const coarse = window.matchMedia('(hover: none) and (pointer: coarse)').matches
    const root = document.documentElement
    let raf = 0
    let t = 0
    let lastW = 0
    let lastH = 0
    const dpr = Math.min(window.devicePixelRatio || 1, coarse ? 1.5 : 2)

    const resize = () => {
      const { width, height } = canvas.getBoundingClientRect()
      // The mobile toolbar changes viewport height mid-scroll. Resetting the
      // bitmap then blanks the canvas for a frame, which reads as flicker.
      if (
        coarse &&
        lastW > 0 &&
        Math.abs(width - lastW) < 2 &&
        Math.abs(height - lastH) < 160
      ) {
        return
      }
      lastW = width
      lastH = height
      canvas.width = Math.max(1, Math.floor(width * dpr))
      canvas.height = Math.max(1, Math.floor(height * dpr))
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      if (coarse) {
        paint(width, height, 0.5, 0.5, 0)
      }
    }

    const readVar = (name: string, fallback: number) => {
      const v = Number.parseFloat(root.style.getPropertyValue(name))
      return Number.isFinite(v) ? v : fallback
    }

    const paint = (width: number, height: number, mx: number, my: number, time: number) => {
      ctx.clearRect(0, 0, width, height)
      for (const blob of BLOBS) {
        const x =
          (blob.x + Math.sin(time * blob.speed + blob.phase) * blob.ampX + (mx - 0.5) * 0.06) * width
        const y =
          (blob.y + Math.cos(time * blob.speed * 0.85 + blob.phase) * blob.ampY + (my - 0.5) * 0.05) *
          height
        const g = ctx.createRadialGradient(x, y, 0, x, y, blob.r)
        g.addColorStop(0, blob.color)
        g.addColorStop(1, 'rgba(244, 238, 228, 0)')
        ctx.fillStyle = g
        ctx.beginPath()
        ctx.arc(x, y, blob.r, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const draw = () => {
      if (coarse) return
      const { width, height } = canvas.getBoundingClientRect()
      const mx = readVar('--mx', 0.5)
      const my = readVar('--my', 0.5)
      if (!reduce) t += 0.016
      paint(width, height, mx, my, t)
      raf = requestAnimationFrame(draw)
    }

    const ro = new ResizeObserver(resize)
    ro.observe(canvas)
    resize()
    if (!coarse) raf = requestAnimationFrame(draw)
    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
    }
  }, [])

  return <canvas className="at-field" ref={canvasRef} aria-hidden="true" />
}
