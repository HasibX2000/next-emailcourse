import { GetServerSideProps } from "next";

const SITE_URL = "https://www.htmlemailcourse.online";

const pages = [
  {
    url: "/",
    priority: "1.0",
  },
  {
    url: "/course",
    priority: "0.9",
  },
  {
    url: "/enroll",
    priority: "0.8",
  },
  {
    url: "/modules/html-foundations",
    priority: "0.7",
  },
  {
    url: "/modules/css-styling",
    priority: "0.7",
  },
  {
    url: "/modules/responsive-design",
    priority: "0.7",
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
          <lastmod>${new Date().toISOString()}</lastmod>
          <priority>${page.priority}</priority>
        </url>
      `
        )
        .join("")}
    </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default function Sitemap() {
  return null;
}
