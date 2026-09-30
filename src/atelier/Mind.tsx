import { Reveal } from '../components/Reveal'

const skills = [
  'Java',
  'Python',
  'Spring',
  'Kafka',
  'Kubernetes',
  'AWS',
  'React',
  'PostgreSQL',
  'GraphQL',
  'WebSocket',
  'Docker',
]

const chipHues = ['sage', 'ochre', 'terra', 'indigo', 'rose', 'copper'] as const

export function Mind() {
  return (
    <section className="at-mind" id="about">
      <div className="at-mind__intro">
        <Reveal>
          <p className="at-kicker">02 / Practice</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="at-display">
            Software Engineer II at <em>Freddie Mac</em>.
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="at-mind__copy">
            Spring, Kafka, GraphQL, Kubernetes, AWS. Penn State CS. After hours I
            ship games and tools — objects meant to be opened, used, and played.
          </p>
        </Reveal>
      </div>

      <Reveal delay={80}>
        <ul className="at-chips">
          {skills.map((skill, i) => (
            <li
              key={skill}
              className={`at-chip at-chip--${chipHues[i % chipHues.length]}`}
              style={{ animationDelay: `${i * 70}ms` }}
            >
              {skill}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  )
}
