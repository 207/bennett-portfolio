import { Reveal } from './Reveal'

export function Contact() {
  return (
    <section className="contact" id="contact">
      <Reveal>
        <p className="eyebrow eyebrow--ink">Contact</p>
      </Reveal>
      <Reveal delay={80}>
        <h2>Email me.</h2>
      </Reveal>
      <Reveal delay={140}>
        <div className="contact__row">
          <a className="cta" href="mailto:bennett.smolen1@gmail.com">
            <span>bennett.smolen1@gmail.com</span>
            <span className="cta__go" aria-hidden="true">
              →
            </span>
          </a>
        </div>
      </Reveal>
      <footer className="contact__foot">
        <span>© {new Date().getFullYear()} Bennett Smolen</span>
        <span className="contact__links">
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
