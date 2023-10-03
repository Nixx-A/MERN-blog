export function MoreUserInfoButton ({ username, setmoreUserInfo }) {
  console.log(username)
  return (
    <div className='flex justify-center'>
      <button onClick={() => setmoreUserInfo(true)} className='border font-semibold border-gray-500 w-[80%] text-gray-700 hover:border-gray-900 hover:bg-gray-100 duration-150 rounded outline-none px-2 py-1 mb-2'>More about @{username}</button>
    </div>
  )
}
