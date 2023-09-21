export const markdownStyles = {
  h1: ({ ...props }) => <h1 className='text-3xl font-bold mb-4' {...props} />,
  h2: ({ ...props }) => <h2 className='text-2xl font-bold mb-3' {...props} />,
  h3: ({ ...props }) => <h3 className='text-xl font-bold mb-2' {...props} />,
  h4: ({ ...props }) => <h4 className='text-lg font-bold mb-2' {...props} />,
  h5: ({ ...props }) => <h5 className='text-md font-bold mb-2' {...props} />,
  h6: ({ ...props }) => <h6 className='text-base font-bold mb-2' {...props} />,
  p: ({ ...props }) => <p className='text-gray-700 mb-4' {...props} />,
  ul: ({ ...props }) => <ul className='list-disc mb-4' {...props} />,
  ol: ({ ...props }) => <ol className='list-decimal mb-4' {...props} />,
  li: ({ ...props }) => <li className='mb-2' {...props} />,
  a: ({ ...props }) => <a className='text-blue-500 hover:underline' {...props} />,
  blockquote: ({ ...props }) => <blockquote className='border-l-4 border-gray-300 pl-4 mb-4 italic' {...props} />,
  code: ({ ...props }) => <code className='bg-gray-100 p-2 rounded' {...props} />,
  inlineCode: ({ ...props }) => <code className='bg-gray-100 px-1 rounded' {...props} />,
  img: ({ ...props }) => <img className='max-w-full rounded' {...props} />,
  hr: ({ ...props }) => <hr className='my-6 border-gray-300' {...props} />
}

// react-dom.development.js:86 Warning: Received `false` for a non-boolean attribute `ordered`.
// resolve this error if i find out how to fix it
