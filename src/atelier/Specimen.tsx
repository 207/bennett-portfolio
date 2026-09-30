import { useState } from 'react'
import type { Work } from '../data/work'

export function Specimen({ work }: { work: Work }) {
  const [shot, setShot] = useState(Boolean(work.screenshot))

  if (shot && work.screenshot) {
    const img = (
      <img
        src={work.screenshot}
        alt={`${work.name} screenshot`}
        onError={() => setShot(false)}
      />
    )
    if (work.playHref) {
      return (
        <a
          className="at-shot"
          href={work.playHref}
          target="_blank"
          rel="noreferrer"
          aria-label={work.name}
        >
          {img}
        </a>
      )
    }
    return <div className="at-shot at-shot--still">{img}</div>
  }

  switch (work.id) {
    case 'fantasy':
      return <FantasyPlate />
    case 'beers':
      return <BeersPlate />
    case 'citysnipe':
      return <CityPlate href={work.playHref} />
    case 'buzzbowl':
      return <BuzzPlate href={work.playHref} />
    default:
      return null
  }
}

function FantasyPlate() {
  const rows = [
    { n: '01', name: 'Fused rank', w: '88%' },
    { n: '02', name: 'Waiver rec', w: '72%' },
    { n: '03', name: 'Trade note', w: '61%' },
    { n: '04', name: 'League pulse', w: '44%' },
  ]
  return (
    <div className="at-plate at-plate--ochre" aria-hidden="true">
      <p className="at-plate__cap">Intel sheet</p>
      <ol className="at-ranks">
        {rows.map((row) => (
          <li key={row.n}>
            <span>{row.n}</span>
            <b>{row.name}</b>
            <i style={{ width: row.w }} />
          </li>
        ))}
      </ol>
    </div>
  )
}

function BeersPlate() {
  const rows = [
    { n: '01', name: 'Running total', w: '18%' },
    { n: '02', name: 'This week', w: '64%' },
    { n: '03', name: 'Leaderboard', w: '80%' },
    { n: '04', name: 'Pace', w: '46%' },
  ]
  return (
    <div className="at-plate at-plate--copper" aria-hidden="true">
      <p className="at-plate__cap">One million</p>
      <ol className="at-ranks">
        {rows.map((row) => (
          <li key={row.n}>
            <span>{row.n}</span>
            <b>{row.name}</b>
            <i style={{ width: row.w }} />
          </li>
        ))}
      </ol>
    </div>
  )
}

// BirdsEye plate, kept for when the feeder is ready to show.
// function BirdPlate() {
//   return (
//     <div className="at-plate at-plate--sage" aria-hidden="true">
//       <p className="at-plate__cap">Local feed</p>
//       <div className="at-bird">
//         <svg viewBox="0 0 88 56" fill="none">
//           <path
//             d="M70 32c-2-9-9-16-18-18-2-6-8-10-14-10-9 0-16 6-16 14 0 2 .4 4 1 6-8 3-13 10-13 18h62c0-4-1-8-2-10z"
//             fill="currentColor"
//           />
//           <circle cx="28" cy="20" r="1.6" fill="#f4eee4" />
//           <path d="M20 22 L12 20" stroke="currentColor" strokeWidth="1.5" />
//         </svg>
//         <div>
//           <strong>Cardinal</strong>
//           <span>visit 14:22</span>
//         </div>
//       </div>
//     </div>
//   )
// }

function CityPlate({ href }: { href?: string }) {
  const inner = (
    <>
      <p className="at-plate__cap">Nearest city</p>
      <div className="at-globe">
        <span className="at-globe__sphere">
          <i />
          <i />
          <i />
          <b />
        </span>
        <div className="at-globe__card">
          <strong>Pin drop</strong>
          <span>Name the city</span>
        </div>
      </div>
      {href ? <span className="at-shot__play">Play<i /></span> : null}
    </>
  )

  if (href) {
    return (
      <a className="at-plate at-plate--terra at-plate--link" href={href} target="_blank" rel="noreferrer" aria-label="Play CitySnipe">
        {inner}
      </a>
    )
  }
  return <div className="at-plate at-plate--terra">{inner}</div>
}

function BuzzPlate({ href }: { href?: string }) {
  const inner = (
    <>
      <p className="at-plate__cap">Live room</p>
      <p className="at-buzz__q">This river is named for a color. Which one?</p>
      <div className="at-buzzers">
        <span className="is-live">A</span>
        <span>B</span>
        <span>C</span>
      </div>
      {href ? <span className="at-shot__play">Play<i /></span> : null}
    </>
  )

  if (href) {
    return (
      <a className="at-plate at-plate--indigo at-plate--link" href={href} target="_blank" rel="noreferrer" aria-label="Play BuzzBowl">
        {inner}
      </a>
    )
  }
  return <div className="at-plate at-plate--indigo">{inner}</div>
}
