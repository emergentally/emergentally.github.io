import { serverQueryContent } from '#content/server'
import { SitemapStream, streamToPromise } from 'sitemap'

export default defineEventHandler(async (event) => {
  // Fetch all documents
  const docs = await serverQueryContent(event).find()
  const sitemap = new SitemapStream({
    hostname: 'https://example.com'
  })

  for (const doc of docs) {
    // Job adverts are noindex, so keep them out of the sitemap
    if (doc._path?.startsWith('/who-we-are/jobs/')) continue
    sitemap.write({
      url: doc._path,
      changefreq: 'monthly'
    })
  }
  sitemap.end()

  return streamToPromise(sitemap)
})