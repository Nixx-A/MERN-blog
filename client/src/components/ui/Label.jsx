export function Label ({ htmlFor, children, styles }) {
  return (
    <label className={`font-semibold mt-4 ${styles}`} htmlFor={htmlFor}>{children}</label>
  )
}
