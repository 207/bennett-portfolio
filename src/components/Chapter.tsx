import type { Work } from '../data/work'
import { Reveal } from './Reveal'
import { Stage } from './Stage'

type Props = {
  work: Work
}

export function Chapter({ work }: Props) {
  return (
    <section className={`chapter accent-${work.accent}`} id={work.id}>
      <div className="chapter__copy">
        <Reveal>
          <p className="eyebrow">
            {work.index} / {work.kicker}
          </p>
        </Reveal>
        <Reveal delay={60}>
          <div className="chapter__title-row">
            <h2>{work.name}</h2>
            <span className="chapter__status">{work.status}</span>
          </div>
        </Reveal>
        <Reveal delay={110}>
          <p className="chapter__lede">{work.lede}</p>
        </Reveal>
        <Reveal delay={160}>
          <ul className="chapter__facts">
            {work.facts.map((fact) => (
              <li key={fact}>{fact}</li>
            ))}
          </ul>
        </Reveal>
        {work.href ? (
          <Reveal delay={200}>
            <a className="text-link" href={work.href} target="_blank" rel="noreferrer">
              {work.hrefLabel ?? 'Open'}
              <span aria-hidden="true"> ↗</span>
            </a>
          </Reveal>
        ) : (
          <Reveal delay={200}>
            <p className="chapter__wip">WIP</p>
          </Reveal>
        )}
      </div>
      <Reveal className="chapter__stage-wrap" delay={90}>
        <Stage work={work} />
      </Reveal>
    </section>
  )
}
