import ContentLoader from 'react-content-loader'

export function PostCardLoading () {
  return (
    <div className='mb-4 rounded p-4 w-[95%] animate-pulse bg-gray-500'>
       <ContentLoader
        speed={2}
        width={400}
        height={120}
        viewBox="0 0 400 160"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        {/* Author's avatar */}
        <circle cx="20" cy="20" r="20" />
        {/* Author's username */}
        <rect x="90" y="20" rx="4" ry="4" width="100" height="12" />
        {/* Post title */}
        <rect x="0" y="70" rx="4" ry="4" width="400" height="16" />
        {/* Post tags */}
        <rect x="0" y="100" rx="4" ry="4" width="400" height="10" />
        {/* Like icon */}
        <rect x="0" y="130" rx="4" ry="4" width="30" height="30" />
        {/* Comment icon */}
        <rect x="40" y="130" rx="4" ry="4" width="30" height="30" />
        {/* Reading time */}
        <rect x="350" y="130" rx="4" ry="4" width="50" height="10" />
      </ContentLoader>
    </div>
  )
}
