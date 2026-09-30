import { Reveal } from '../components/Reveal'
import { works } from '../data/work'
import { Specimen } from './Specimen'

const thoughts: Record<string, string> = {
  fantasy:
    'A private analyst for the league. ESPN data, fused ranks, then Gemini for waiver and trade recs — on your machine.',
  birdseye:
    'A feeder camera and species IDs that stay local. A Bird Buddy for your own hardware, still taking shape.',
  citysnipe:
    'A pin drops on a globe. You name the nearest city. Easy to explain, satisfying to miss by twenty kilometers.',
  buzzbowl:
    'Host on a TV, buzz from phones. Live Socket.io rooms — a party game that has to feel instant.',
}

export function Works() {
  return (
    <section className="at-works" id="work">
      <div className="at-works__head">
        <Reveal>
          <p className="at-kicker">03 / Selected work</p>
        </Reveal>
        <Reveal delay={70}>
          <h2 className="at-display">
            Four objects from the <em>studio table</em>.
          </h2>
        </Reveal>
      </div>

      <Reveal delay={80}>
        <ol className="at-index">
          {works.map((work) => (
            <li key={work.id}>
              <a href={`#${work.id}`}>
                <span>{work.index}</span>
                <strong>{work.name}</strong>
                <em>{work.kicker}</em>
                <b>{work.status}</b>
              </a>
            </li>
          ))}
        </ol>
      </Reveal>

      {works.map((work, i) => (
        <article
          key={work.id}
          className={`at-piece at-piece--${work.id} ${i % 2 ? 'at-piece--flip' : ''}`}
          id={work.id}
        >
          <Reveal className="at-piece__figure" delay={60}>
            <Specimen work={work} />
          </Reveal>
          <div className="at-piece__copy">
            <Reveal>
              <p className="at-kicker">
                {work.index} / {work.kicker}
              </p>
            </Reveal>
            <Reveal delay={60}>
              <div className="at-piece__title">
                <h3>{work.name}</h3>
                <span>{work.status}</span>
              </div>
            </Reveal>
            <Reveal delay={110}>
              <p className="at-piece__lede">{thoughts[work.id] ?? work.lede}</p>
            </Reveal>
            <Reveal delay={160}>
              <ul className="at-facts">
                {work.facts.map((fact) => (
                  <li key={fact}>{fact}</li>
                ))}
              </ul>
            </Reveal>
            {work.href ? (
              <Reveal delay={200}>
                <a className="at-textlink" href={work.href} target="_blank" rel="noreferrer">
                  {work.hrefLabel ?? 'Open'}
                  <span aria-hidden="true"> ↗</span>
                </a>
              </Reveal>
            ) : (
              <Reveal delay={200}>
                <p className="at-wip">Still in the studio</p>
              </Reveal>
            )}
          </div>
        </article>
      ))}
    </section>
  )
}
