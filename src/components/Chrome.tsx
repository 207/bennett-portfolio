export function Cursor() {
  return (
    <>
      <div className="cursor-core" />
      <div className="cursor-ring" />
    </>
  )
}

export function ProgressRail() {
  return (
    <div className="progress-rail" aria-hidden="true">
      <div className="progress-rail__fill" />
    </div>
  )
}
