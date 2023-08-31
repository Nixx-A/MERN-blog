export function calculateReadingTime (postContent) {
  const averageReadingSpeed = 225

  // Function to count words in the text
  function countWords (text) {
    return text.split(/\s+/).filter(word => word !== '').length
  }

  // Calculate the word count and reading time
  const wordCount = countWords(postContent)
  const readingTimeInMinutes = Math.ceil(wordCount / averageReadingSpeed)

  return readingTimeInMinutes
}
