export function formatPostDate (dateString) {
  // dateUtils.js

  const currentDate = new Date()
  const inputDate = new Date(dateString)
  const timeDifference = currentDate - inputDate

  // Define time intervals for displaying relative dates
  const minute = 60 * 1000
  const hour = 60 * minute
  const day = 24 * hour
  const week = 7 * day
  const month = 30 * day

  if (timeDifference < minute) {
    return 'Just now'
  } else if (timeDifference < hour) {
    const minutesAgo = Math.floor(timeDifference / minute)
    return `${minutesAgo} minute${minutesAgo !== 1 ? 's' : ''} ago`
  } else if (timeDifference < day) {
    const hoursAgo = Math.floor(timeDifference / hour)
    return `${hoursAgo} hour${hoursAgo !== 1 ? 's' : ''} ago`
  } else if (timeDifference < week) {
    const daysAgo = Math.floor(timeDifference / day)
    return `${daysAgo} day${daysAgo !== 1 ? 's' : ''} ago`
  } else if (timeDifference < month) {
    const weeksAgo = Math.floor(timeDifference / week)
    return `${weeksAgo} week${weeksAgo !== 1 ? 's' : ''} ago`
  } else {
    // Return the normal date format for older dates
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }
    return inputDate.toLocaleDateString('en-US', options)
  }
}
