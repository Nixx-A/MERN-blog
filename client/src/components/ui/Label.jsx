export function Label ({ htmlFor, children }) {
  return (
    <label className='font-semibold' htmlFor={htmlFor}>{children}</label>
  )
}
