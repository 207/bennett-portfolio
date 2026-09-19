import { useEffect, useRef } from 'react'

type Ribbon = {
  amp: number
  freq: number
  speed: number
  y: number
  width: number
  color: string
  phase: number
}

const RIBBONS: Ribbon[] = [
  { amp: 72, freq: 0.0016, speed: 0.42, y: 0.42, width: 1.2, color: 'rgba(216,255,60,0.55)', phase: 0.2 },
  { amp: 110, freq: 0.0011, speed: 0.28, y: 0.5, width: 1.8, color: 'rgba(255,78,42,0.32)', phase: 1.1 },
  { amp: 54, freq: 0.0022, speed: 0.55, y: 0.36, width: 0.9, color: 'rgba(155,231,255,0.28)', phase: 2.4 },
  { amp: 90, freq: 0.0009, speed: 0.18, y: 0.58, width: 2.4, color: 'rgba(244,239,228,0.16)', phase: 0.7 },
  { amp: 40, freq: 0.0028, speed: 0.7, y: 0.48, width: 0.7, color: 'rgba(216,255,60,0.22)', phase: 3.1 },
]

export function KineticField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const root = document.documentElement
    let raf = 0
    let t = 0
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    const resize = () => {
      const { width, height } = canvas.getBoundingClientRect()
      canvas.width = Math.max(1, Math.floor(width * dpr))
      canvas.height = Math.max(1, Math.floor(height * dpr))
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    const readVar = (name: string, fallback: number) => {
      const v = Number.parseFloat(root.style.getPropertyValue(name))
      return Number.isFinite(v) ? v : fallback
    }

    const drawStatic = (width: number, height: number, mx: number, fade: number) => {
      ctx.clearRect(0, 0, width, height)
      ctx.globalAlpha = fade
      const tilt = (mx - 0.5) * 80
      ctx.strokeStyle = 'rgba(244,239,228,0.045)'
      ctx.lineWidth = 1
      const spacing = 88
      for (let gx = -spacing; gx < width + spacing; gx += spacing) {
        ctx.beginPath()
        ctx.moveTo(gx + tilt * 0.15, 0)
        ctx.lineTo(gx - tilt * 0.35, height)
        ctx.stroke()
      }
      ctx.globalAlpha = 1
    }

    const draw = () => {
      const { width, height } = canvas.getBoundingClientRect()
      const mx = readVar('--mx', 0.5)
      const my = readVar('--my', 0.5)
      const hero = readVar('--hero', 0)
      const fade = Math.max(0, 1 - hero * 1.15)

      if (fade < 0.02) {
        ctx.clearRect(0, 0, width, height)
        raf = requestAnimationFrame(draw)
        return
      }

      drawStatic(width, height, mx, fade)
      if (reduce) {
        raf = requestAnimationFrame(draw)
        return
      }

      t += 0.016
      ctx.globalAlpha = fade
      const steps = 48

      for (const r of RIBBONS) {
        ctx.beginPath()
        ctx.strokeStyle = r.color
        ctx.lineWidth = r.width
        ctx.lineCap = 'round'
        ctx.lineJoin = 'round'

        for (let i = 0; i <= steps; i++) {
          const px = (i / steps) * (width + 120) - 60
          const py =
            height * r.y +
            Math.sin(px * r.freq + t * r.speed + r.phase) * r.amp +
            Math.sin(px * r.freq * 2.3 + t * 0.13) * (r.amp * 0.22) +
            (my - 0.5) * 48 +
            (mx - 0.5) * (px / width - 0.5) * 70
          if (i === 0) ctx.moveTo(px, py)
          else ctx.lineTo(px, py)
        }
        ctx.stroke()
      }

      const hx = mx * width
      const hy = my * height
      const g = ctx.createRadialGradient(hx, hy, 0, hx, hy, 220)
      g.addColorStop(0, 'rgba(216,255,60,0.08)')
      g.addColorStop(1, 'rgba(216,255,60,0)')
      ctx.fillStyle = g
      ctx.fillRect(0, 0, width, height)
      ctx.globalAlpha = 1
      raf = requestAnimationFrame(draw)
    }

    raf = requestAnimationFrame(draw)
    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
    }
  }, [])

  return <canvas className="kinetic-field" ref={canvasRef} aria-hidden="true" />
}
