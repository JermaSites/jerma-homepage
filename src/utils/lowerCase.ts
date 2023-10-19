export const lowerCase = (str: string) => {
  return str
    .replace(/([a-z])([A-Z])/g, '$1 $2') // Add space between camelCase
    .replace(/_/g, ' ') // Replace underscores with spaces
    .replace(/\s+/g, ' ') // Replace multiple spaces with a single space
    .toLowerCase() // Convert to lowercase
}
