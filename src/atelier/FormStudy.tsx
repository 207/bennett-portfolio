import { useEffect, useRef, useState } from 'react'

const studies = [
  { id: 'seed', label: 'Seed' },
  { id: 'gyro', label: 'Gyro' },
  { id: 'dial', label: 'Dial' },
  { id: 'field', label: 'Field' },
] as const

type StudyId = (typeof studies)[number]['id']

export function FormStudy() {
  const [id, setId] = useState<StudyId>(
    () => studies[Math.floor(Math.random() * studies.length)].id,
  )

  return (
    <div className="at-study">
      <p className="at-study__cap">Form study · {studies.findIndex((study) => study.id === id).toString().padStart(2, '0')}</p>
      <div className="at-stage">
        {id === 'seed' ? <Seed /> : null}
        {id === 'gyro' ? <Gyro /> : null}
        {id === 'dial' ? <Dial /> : null}
        {id === 'field' ? <Field /> : null}
      </div>
      <div className="at-study__switch" role="tablist" aria-label="Form studies">
        {studies.map((study) => (
          <button
            key={study.id}
            type="button"
            role="tab"
            aria-selected={study.id === id}
            className={study.id === id ? 'is-on' : undefined}
            onClick={() => setId(study.id)}
          >
            {study.label}
          </button>
        ))}
      </div>
    </div>
  )
}

function Seed() {
  return (
    <svg className="at-study__svg" viewBox="0 0 420 500" fill="none" aria-hidden="true">
      <ellipse className="at-study__halo" cx="210" cy="250" rx="168" ry="198" />
      <path
        className="at-study__body"
        d="M210 64c72 8 138 78 138 168 0 94-62 174-138 204-76-30-138-110-138-204 0-90 66-160 138-168z"
      />
      <ellipse className="at-study__ring" cx="210" cy="248" rx="118" ry="148" />
      <ellipse className="at-study__ring at-study__ring--2" cx="210" cy="248" rx="78" ry="104" />
      <ellipse className="at-study__core" cx="210" cy="246" rx="28" ry="36" />
      <path className="at-study__tick" d="M210 86 v24" />
      <path className="at-study__tick" d="M210 386 v28" />
      <path className="at-study__tick" d="M86 248 h22" />
      <path className="at-study__tick" d="M312 248 h22" />
      <path className="at-study__hint" d="M268 128 C 320 150, 348 188, 352 230" />
      <circle cx="352" cy="230" r="2.4" className="at-study__dot" />
    </svg>
  )
}

function Gyro() {
  const rings = [
    { r: 156, dash: '5 11', dur: '32s', reverse: false },
    { r: 112, dash: '2 8', dur: '20s', reverse: true },
    { r: 68, dash: '1 6', dur: '13s', reverse: false },
  ]
  return (
    <svg className="at-study__svg at-tilt" viewBox="0 0 420 500" fill="none" aria-hidden="true">
      <circle className="at-plate-ring" cx="210" cy="250" r="168" />
      <ellipse className="at-spin at-orbit" cx="210" cy="250" rx="150" ry="78" style={{ animationDuration: '26s' }} />
      {rings.map((ring) => (
        <circle
          key={ring.r}
          className={`at-spin${ring.reverse ? ' at-spin--back' : ''}`}
          cx="210"
          cy="250"
          r={ring.r}
          strokeDasharray={ring.dash}
          style={{ animationDuration: ring.dur }}
        />
      ))}
      <path className="at-study__tick" d="M210 78 v18 M210 404 v18 M78 250 h18 M324 250 h18" />
      <circle className="at-study__core at-core" cx="210" cy="250" r="9" />
    </svg>
  )
}

function Dial() {
  const svgRef = useRef<SVGSVGElement>(null)
  const needleRef = useRef<SVGGElement>(null)

  useEffect(() => {
    const svg = svgRef.current
    const needle = needleRef.current
    if (!svg || !needle) return

    const pointer = { x: window.innerWidth * 0.5, y: window.innerHeight * 0.5 }
    const aim = () => {
      const hub = svg.createSVGPoint()
      hub.x = 210
      hub.y = 250
      const ctm = svg.getScreenCTM()
      if (!ctm) return
      const screen = hub.matrixTransform(ctm)
      const deg = (Math.atan2(pointer.y - screen.y, pointer.x - screen.x) * 180) / Math.PI
      needle.setAttribute('transform', `rotate(${deg.toFixed(2)} 210 250)`)
    }

    let raf = 0
    const tick = () => {
      aim()
      raf = requestAnimationFrame(tick)
    }
    const onMove = (event: PointerEvent) => {
      pointer.x = event.clientX
      pointer.y = event.clientY
      aim()
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    raf = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('pointermove', onMove)
    }
  }, [])

  const ticks = Array.from({ length: 72 }, (_, i) => {
    const angle = (i / 72) * Math.PI * 2
    const inner = i % 6 === 0 ? 112 : 128
    const outer = 146
    return {
      x1: 210 + Math.cos(angle) * inner,
      y1: 250 + Math.sin(angle) * inner,
      x2: 210 + Math.cos(angle) * outer,
      y2: 250 + Math.sin(angle) * outer,
      major: i % 6 === 0,
    }
  })
  return (
    <svg ref={svgRef} className="at-study__svg" viewBox="0 0 420 500" fill="none" aria-hidden="true">
      <circle className="at-plate-ring" cx="210" cy="250" r="168" />
      <g className="at-spin" style={{ animationDuration: '48s' }}>
        {ticks.map((tick) => (
          <line
            key={`${tick.x2}-${tick.y2}`}
            className={tick.major ? 'at-tick at-tick--major' : 'at-tick'}
            x1={tick.x1}
            y1={tick.y1}
            x2={tick.x2}
            y2={tick.y2}
          />
        ))}
      </g>
      <circle className="at-spin at-spin--back" cx="210" cy="250" r="86" strokeDasharray="2 7" style={{ animationDuration: '18s' }} />
      <g ref={needleRef} className="at-needle">
        <line x1="210" y1="250" x2="332" y2="250" />
        <circle cx="332" cy="250" r="3.2" />
      </g>
      <circle className="at-study__core at-core" cx="210" cy="250" r="7" />
    </svg>
  )
}

function Field() {
  const rings = [
    { count: 8, r: 64, dur: '22s', reverse: false },
    { count: 14, r: 108, dur: '34s', reverse: true },
    { count: 20, r: 150, dur: '46s', reverse: false },
  ]
  return (
    <svg className="at-study__svg" viewBox="0 0 420 500" fill="none" aria-hidden="true">
      <circle className="at-plate-ring" cx="210" cy="250" r="168" />
      {rings.map((ring) => (
        <g key={ring.r} className={`at-spin${ring.reverse ? ' at-spin--back' : ''}`} style={{ animationDuration: ring.dur }}>
          {Array.from({ length: ring.count }, (_, i) => {
            const angle = (i / ring.count) * Math.PI * 2
            return (
              <circle
                key={i}
                className="at-node"
                cx={210 + Math.cos(angle) * ring.r}
                cy={250 + Math.sin(angle) * ring.r}
                r={ring.r === 64 ? 3.2 : 2.4}
              />
            )
          })}
        </g>
      ))}
      <circle className="at-puck" cx="210" cy="250" r="8" />
      <circle className="at-study__core at-core" cx="210" cy="250" r="4" />
    </svg>
  )
}
