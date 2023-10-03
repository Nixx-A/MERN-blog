import { Controller } from 'react-hook-form'
import { Label } from './Label'

export const ControlledInput = ({ name, label, control, placeholder, defaultValue = '', type = 'text' }) => {
  return (
    <div className="mb-4">
      <Label htmlFor={name} className="block text-sm font-medium text-gray-700">{label}</Label>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field }) => (
          <input
          type={type}
            placeholder={placeholder}
            {...field}
            className="w-full mt-1 block border dark:bg-black hover:border-gray-600 duration-150 px-2 py-1.5 rounded focus:border-blue-500 outline-none"
          />
        )}
      />
    </div>
  )
}

export default ControlledInput
