export function FormStudy() {
  return (
    <div className="at-study">
      <p className="at-study__cap">Form study · 00</p>
      <svg className="at-study__svg" viewBox="0 0 420 500" fill="none" aria-hidden="true">
        <ellipse className="at-study__halo" cx="210" cy="250" rx="168" ry="198" />
        <path
          className="at-study__body"
          d="M210 64c72 8 138 78 138 168 0 94-62 174-138 204-76-30-138-110-138-204 0-90 66-160 138-168z"
        />
        <ellipse className="at-study__ring" cx="210" cy="248" rx="118" ry="148" />
        <ellipse className="at-study__ring at-study__ring--2" cx="210" cy="248" rx="78" ry="104" />
        <ellipse className="at-study__core" cx="210" cy="246" rx="28" ry="36" />
        <path className="at-study__tick" d="M210 86 v24" />
        <path className="at-study__tick" d="M210 386 v28" />
        <path className="at-study__tick" d="M86 248 h22" />
        <path className="at-study__tick" d="M312 248 h22" />
        <path className="at-study__hint" d="M268 128 C 320 150, 348 188, 352 230" />
        <circle cx="352" cy="230" r="2.4" className="at-study__dot" />
      </svg>
      <div className="at-study__notes">
        <span>precision</span>
        <span>play</span>
      </div>
    </div>
  )
}
