import { GetServerSideProps } from "next";

const SITE_URL = "https://www.htmlemailcourse.online";

const pages = [
  {
    url: "/",
    priority: "1.0",
    lastmod: new Date().toISOString(),
    changefreq: "weekly",
  },
  {
    url: "/course",
    priority: "0.9",
    lastmod: new Date().toISOString(),
    changefreq: "weekly",
  },
  {
    url: "/enroll",
    priority: "0.8",
    lastmod: new Date().toISOString(),
    changefreq: "weekly",
  },
  {
    url: "/modules/html-foundations",
    priority: "0.7",
    lastmod: new Date().toISOString(),
    changefreq: "weekly",
  },
  {
    url: "/modules/css-styling",
    priority: "0.7",
    lastmod: new Date().toISOString(),
    changefreq: "weekly",
  },
  {
    url: "/modules/responsive-design",
    priority: "0.7",
    lastmod: new Date().toISOString(),
    changefreq: "weekly",
  },
];

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map(
          (page) => `
        <url>
          <loc>${SITE_URL}${page.url}</loc>
          <lastmod>${page.lastmod}</lastmod>
          <changefreq>${page.changefreq}</changefreq>
          <priority>${page.priority}</priority>
        </url>
      `
        )
        .join("")}
    </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.setHeader("Cache-Control", "public, s-maxage=1200, stale-while-revalidate=600");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default function Sitemap() {
  return null;
}
