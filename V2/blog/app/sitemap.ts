export const baseUrl = 'https://shihyu-ma.vercel.app'

export default async function sitemap() {
  let routes = ['', '/about', '/research', '/publications', '/contact'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return routes
}
