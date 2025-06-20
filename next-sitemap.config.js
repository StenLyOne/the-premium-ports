/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://the-premium-ports.vercel.app',
  generateRobotsTxt: true,
  changefreq: 'monthly',
  priority: 1.0,
  sitemapSize: 7000,
  exclude: [],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://the-premium-ports.vercel.app/sitemap.xml',
    ],
  },
};