import { Reveal } from '../components/Reveal'
import { roles } from '../data/experience'

export function Craft() {
  return (
    <section className="at-craft" id="experience">
      <Reveal>
        <p className="at-kicker">04 / Record</p>
      </Reveal>
      <Reveal delay={70}>
        <h2 className="at-display">
          The work that holds <em>under load</em>.
        </h2>
      </Reveal>

      <ol className="at-roles">
        {roles.map((role, i) => (
          <Reveal
            as="li"
            className="at-role"
            delay={50 + i * 40}
            key={`${role.org}-${role.title}`}
          >
            <div className="at-role__meta">
              <span className="at-role__when">{role.when}</span>
              <span>{role.where}</span>
            </div>
            <div className="at-role__body">
              <h3>
                {role.title}
                <em>{role.org}</em>
              </h3>
              <ul>
                {role.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </ol>

      <Reveal delay={80}>
        <p className="at-edu">
          B.S. Computer Science, Penn State · Math &amp; Business minors · 2022
        </p>
      </Reveal>
    </section>
  )
}
