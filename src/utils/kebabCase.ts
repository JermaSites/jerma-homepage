export const kebabCase = (str: string) => {
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2') // Add hyphen between camelCase
    .replace(/_/g, '-') // Replace underscores with hyphens
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/[^a-zA-Z0-9-]/g, '') // Remove characters other than letters, numbers, and hyphens
    .toLowerCase() // Convert to lowercase
}
