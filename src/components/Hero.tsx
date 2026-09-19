import { KineticField } from './KineticField'

export function Hero() {
  return (
    <section className="hero" id="top">
      <KineticField />
      <div className="hero__inner">
        <div className="hero__meta">
          <span>Arlington, VA</span>
          <span className="hero__rule" />
          <span>Software Engineer</span>
        </div>

        <h1 className="hero__title">
          <span className="hero__line">Bennett</span>
          <span className="hero__line hero__line--accent">Smolen</span>
        </h1>

        <p className="hero__lede">
          Spring and Kafka at work. Games and tools after hours.
        </p>

        <a className="hero__scroll" href="#work">
          <span>Work</span>
          <span className="hero__arrow" aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}
