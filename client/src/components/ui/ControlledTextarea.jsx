import { Controller } from 'react-hook-form'
import { Label } from './Label'

export const ControlledTextarea = ({ name, label, control, placeholder, text, defaultValue = '' }) => {
  return (
    <div className="mb-4">
      <Label htmlFor={name} className="block text-sm font-medium text-gray-700">{label}</Label>
      <p className='text-sm text-gray-700'>{text}</p>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field }) => (
          <textarea
          rows={1}
            placeholder={placeholder}
            {...field}
            className="w-[80%] mt-1 block border hover:border-gray-600 duration-150 px-2 py-1.5 rounded focus:border-blue-500 outline-none"
          />
        )}
      />
    </div>
  )
}

export default ControlledTextarea
