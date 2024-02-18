export const getPath = (slug: string | string[]) => {
  return Array.isArray(slug) ? slug.join('/') : slug
}
