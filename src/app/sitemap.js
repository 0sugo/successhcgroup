export const dynamic = "force-static";

export default function sitemap() {
  const now = new Date().toISOString();

  return [
    {
      url: 'https://successhcgroup.com.au/',
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://successhcgroup.com.au/about',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://successhcgroup.com.au/services',
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: 'https://successhcgroup.com.au/contact',
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: 'https://successhcgroup.com.au/jobs',
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.5,
    }
  ];
}
