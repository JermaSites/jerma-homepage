export const addHTTP = (link: string) =>
  link?.includes('http') ? link : 'https://' + link
