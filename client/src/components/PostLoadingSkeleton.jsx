import ContentLoader from 'react-content-loader'

export function PostCardLoading () {
  return (

    <div className='mb-6 rounded p-4 w-[95%] animate-pulse bg-gray-500'>
      <ContentLoader
        speed={2}
        width={300}
        height={120}
        viewBox="0 0 400 150"
        backgroundColor="#f5f5f3"
        foregroundColor="#ecebeb"
      >
        {/* Author's avatar */}
        <circle cx="30" cy="22" r="22" />
        {/* Author's username */}
        <rect x="70" y="0" rx="4" ry="4" width="100" height="12" />
        <rect x="70" y="30" rx="4" ry="4" width="100" height="12" />
        {/* Post title */}
        <rect x="0" y="70" rx="4" ry="4" width="400" height="16" />
        {/* Post tags */}
        <rect x="0" y="100" rx="4" ry="4" width="50" height="15" />
        <rect x="60" y="100" rx="4" ry="4" width="50" height="15" />
        <rect x="120" y="100" rx="4" ry="4" width="50" height="15" />
        {/* Like icon */}
        <rect x="0" y="130" rx="4" ry="4" width="30" height="30" />
        {/* Comment icon */}
        <rect x="40" y="130" rx="4" ry="4" width="30" height="30" />
        {/* Reading time */}
        <rect x="350" y="130" rx="4" ry="4" width="80" height="20" />
      </ContentLoader>
    </div>
  )
}
