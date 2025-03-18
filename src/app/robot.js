export default function robots() {
  return {
    rules: {
      UserAgent: "*",
      allow: ["/", "/about", "/services", "/contact", "/jobs"],
      Disallow: [],
    },
    Sitemap: "https://successhcgroup.com.au/sitemap.xml",
  };
}
