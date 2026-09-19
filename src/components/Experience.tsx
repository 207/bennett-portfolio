import { Reveal } from './Reveal'
import { roles } from '../data/experience'

export function Experience() {
  return (
    <section className="method" id="experience">
      <Reveal>
        <h2>Experience</h2>
      </Reveal>
      <ol className="exp">
        {roles.map((role, i) => (
          <Reveal as="li" className="exp__item" delay={60 + i * 50} key={`${role.org}-${role.title}`}>
            <div className="exp__meta">
              <span className="exp__when">{role.when}</span>
              <span className="exp__where">{role.where}</span>
            </div>
            <div>
              <h3>
                {role.title}
                <em>{role.org}</em>
              </h3>
              <ul>
                {role.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </ol>
      <Reveal delay={80}>
        <p className="exp__edu">B.S. Computer Science, Penn State · Math &amp; Business minors · 2022</p>
      </Reveal>
    </section>
  )
}
