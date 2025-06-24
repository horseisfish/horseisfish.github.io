import { baseUrl } from 'app/sitemap'

export async function GET() {
  const pages = [
    {
      title: 'Shih-Yu Ma - Academic Website',
      link: baseUrl,
      description: 'Master\'s in Information Design @ Taiwan Tech | HCI • Mixed Reality • Cognitive Science',
      pubDate: new Date().toISOString()
    },
    {
      title: 'About',
      link: `${baseUrl}/about`,
      description: 'Learn more about Shih-Yu Ma\'s research and background',
      pubDate: new Date().toISOString()
    },
    {
      title: 'Research',
      link: `${baseUrl}/research`,
      description: 'Research projects in Mixed Reality, HCI, and Cognitive Science',
      pubDate: new Date().toISOString()
    },
    {
      title: 'Publications',
      link: `${baseUrl}/publications`,
      description: 'Academic publications and research papers',
      pubDate: new Date().toISOString()
    },
    {
      title: 'Contact',
      link: `${baseUrl}/contact`,
      description: 'Contact information and academic affiliations',
      pubDate: new Date().toISOString()
    }
  ]

  const itemsXml = pages
    .map(
      (page) =>
        `<item>
          <title>${page.title}</title>
          <link>${page.link}</link>
          <description>${page.description}</description>
          <pubDate>${new Date(page.pubDate).toUTCString()}</pubDate>
        </item>`
    )
    .join('\n')

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
        <title>Shih-Yu Ma - Academic Website</title>
        <link>${baseUrl}</link>
        <description>Academic website RSS feed for Shih-Yu Ma</description>
        ${itemsXml}
    </channel>
  </rss>`

  return new Response(rssFeed, {
    headers: {
      'Content-Type': 'text/xml',
    },
  })
}
