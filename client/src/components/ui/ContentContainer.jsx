export function ContentContainer ({ children, styles }) {
  return (
    <div className={`mt-[70px] ${styles}`}>
      {children}
    </div>
  )
}
