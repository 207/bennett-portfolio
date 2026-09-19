import type { Work } from '../data/work'

type Props = { work: Work }

export function Stage({ work }: Props) {
  if (work.screenshot) {
    const img = <img src={work.screenshot} alt={`${work.name} screenshot`} />

    if (work.playHref) {
      return (
        <a
          className="shot"
          href={work.playHref}
          target="_blank"
          rel="noreferrer"
          aria-label={`Play ${work.name}`}
        >
          {img}
          <span className="shot__play">
            <i />
            Play
          </span>
        </a>
      )
    }

    return <div className="shot shot--still">{img}</div>
  }

  return (
    <div className="stage stage--birdseye" aria-hidden="true">
      <div className="feeder">
        <span className="feeder__live">Local</span>
        <svg className="feeder__bird" viewBox="0 0 88 56" fill="none">
          <path
            d="M70 32c-2-9-9-16-18-18-2-6-8-10-14-10-9 0-16 6-16 14 0 2 .4 4 1 6-8 3-13 10-13 18h62c0-4-1-8-2-10z"
            fill="currentColor"
          />
          <circle cx="28" cy="20" r="1.6" fill="#050507" />
          <path d="M20 22 L12 20" stroke="currentColor" strokeWidth="1.5" />
        </svg>
        <div className="feeder__id">
          <b>Cardinal</b>
          <span>visit 14:22</span>
        </div>
      </div>
    </div>
  )
}
