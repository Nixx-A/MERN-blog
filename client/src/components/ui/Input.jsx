import { forwardRef } from 'react'

export const Input = forwardRef((props, ref) => (
  <input
    {...props}
    ref={ref}
    className={'mt-1 w-full border px-2 py-2 rounded focus:border-blue-500 outline-none'}
  />
))

Input.displayName = 'Input'
