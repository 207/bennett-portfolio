import { Reveal } from './Reveal'

export function Manifesto() {
  return (
    <section className="manifesto" id="about">
      <div className="manifesto__grid">
        <Reveal>
          <p className="eyebrow">About</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="manifesto__title">
            Software Engineer II at Freddie Mac.
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <div className="manifesto__copy">
            <p>
              Spring, Kafka, GraphQL, Kubernetes, AWS. Penn State CS.
              After hours I ship games and tools.
            </p>
          </div>
        </Reveal>
      </div>

      <div className="marquee" aria-hidden="true">
        <div className="marquee__track">
          {Array.from({ length: 2 }).map((_, i) => (
            <p key={i}>
              Java · Python · Spring · Kafka · Kubernetes · AWS · React · PostgreSQL ·
              GraphQL · WebSocket · Docker ·
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
