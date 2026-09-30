import { FormStudy } from './FormStudy'

export function Arrival() {
  return (
    <section className="at-arrive" id="top">
      <div className="at-arrive__copy">
        <p className="at-kicker">
          <span>Arlington, VA</span>
          <span className="at-kicker__rule" />
          <span>Software Engineer</span>
        </p>
        <h1 className="at-arrive__title">
          <span>
            <span className="at-name">Bennett</span>
          </span>
          <span className="at-arrive__title-em">
            <span className="at-name">Smolen</span>
          </span>
        </h1>
        <p className="at-arrive__lede">
          Spring and Kafka at work. Games and tools after hours.
        </p>
        <a className="at-arrive__scroll" href="#work">
          Continue
          <span className="at-arrive__drop" aria-hidden="true" />
        </a>
      </div>
      <div className="at-arrive__object">
        <FormStudy />
      </div>
    </section>
  )
}
