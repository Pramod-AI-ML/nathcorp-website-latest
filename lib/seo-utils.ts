/**
 * Generates a slug from a string by converting to lowercase,
 * replacing spaces with hyphens, and removing special characters
 */
export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "") // Remove special characters
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-") // Replace multiple hyphens with single hyphen
}

/**
 * Truncates text to a specified length and adds ellipsis if needed
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text

  // Try to truncate at a word boundary
  const truncated = text.substring(0, maxLength)
  const lastSpaceIndex = truncated.lastIndexOf(" ")

  if (lastSpaceIndex > maxLength * 0.8) {
    return truncated.substring(0, lastSpaceIndex) + "..."
  }

  return truncated + "..."
}

/**
 * Extracts keywords from text content
 */
export function extractKeywords(text: string, maxKeywords = 10): string {
  // Remove common words and punctuation
  const cleanText = text
    .toLowerCase()
    .replace(/[^\w\s]/g, "")
    .replace(/\s+/g, " ")

  // Split into words
  const words = cleanText.split(" ")

  // Count word frequency
  const wordCount: Record<string, number> = {}
  words.forEach((word) => {
    if (word.length > 3) {
      // Ignore short words
      wordCount[word] = (wordCount[word] || 0) + 1
    }
  })

  // Sort by frequency
  const sortedWords = Object.entries(wordCount)
    .sort((a, b) => b[1] - a[1])
    .map((entry) => entry[0])
    .slice(0, maxKeywords)

  return sortedWords.join(", ")
}
