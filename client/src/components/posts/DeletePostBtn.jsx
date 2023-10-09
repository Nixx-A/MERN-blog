export default function DeletePostBtn({ handleDelete }) {
  return (
    <button
      onClick={handleDelete}
      className='bg-red-500  text-white py-2 px-4  rounded hover:bg-red-600'>
      Delete Post
    </button>
  )
}
