import { works } from '../data/work'
import { Reveal } from './Reveal'

export function WorkIndex() {
  return (
    <section className="index" id="work">
      <div className="index__head">
        <Reveal>
          <p className="eyebrow">Work</p>
        </Reveal>
        <Reveal delay={70}>
          <h2>Projects</h2>
        </Reveal>
      </div>

      <div className="index__list">
        {works.map((work, i) => (
          <a
            key={work.id}
            className={`index__row accent-${work.accent}`}
            href={`#${work.id}`}
          >
            <span className="index__num">{work.index}</span>
            <span className="index__name">{work.name}</span>
            <span className="index__kicker">{work.kicker}</span>
            <span className="index__status">{work.status}</span>
            <span className="index__go" aria-hidden="true" style={{ transitionDelay: `${i * 40}ms` }}>
              →
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}
