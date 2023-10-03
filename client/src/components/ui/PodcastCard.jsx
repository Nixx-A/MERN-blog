export function PodcastCard ({ title, subtitle }) {
  return (
    <div className='bg-white rounded dark:bg-[#171717]  shadow hover:text-indigo-800 dark:hover:text-indigo-500 hover:shadow-md cursor-pointer duration-100'>
      <img src="/podcast-background.jpg" className='rounded w-full h-auto ' alt="" />
      <p className='font-semibold text-sm mt-1 mx-3'>{title}</p>
      <small className='mx-3 text-gray-500 dark:text-white' >{subtitle}</small>
    </div>
  )
}
