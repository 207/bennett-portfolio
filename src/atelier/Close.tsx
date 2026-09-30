import { Reveal } from '../components/Reveal'

export function Close() {
  return (
    <section className="at-close" id="contact">
      <Reveal>
        <p className="at-kicker at-kicker--on-dark">05 / Invitation</p>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="at-close__title">
          Write to <em>me</em>.
        </h2>
      </Reveal>
      <Reveal delay={140}>
        <p className="at-close__lede">
          If you want to talk about a system, a game, or something that does not
          exist yet — email is best.
        </p>
      </Reveal>
      <Reveal delay={180}>
        <a className="at-cta" href="mailto:bennett.smolen1@gmail.com">
          <span>bennett.smolen1@gmail.com</span>
          <span className="at-cta__go" aria-hidden="true">
            →
          </span>
        </a>
      </Reveal>
      <footer className="at-foot">
        <span>© {new Date().getFullYear()} Bennett Smolen</span>
        <span className="at-foot__links">
          <a href="https://github.com/207" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/bennett-smolen-947a09183"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </span>
      </footer>
    </section>
  )
}
