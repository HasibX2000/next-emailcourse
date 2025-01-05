import { Feed } from 'feed';

export function generateRssFeed(modules: any[]) {
  const site_url = 'https://htmlemailcourse.online';

  const feed = new Feed({
    title: "Email Design With HTML & CSS",
    description: "Professional Email Template Design Course Updates",
    id: site_url,
    link: site_url,
    language: "en",
    favicon: `${site_url}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}, Akon M Hasib`,
    author: {
      name: "Akon M Hasib",
      email: "contact@htmlemailcourse.online",
      link: site_url
    }
  });

  modules.forEach(module => {
    feed.addItem({
      title: module.title,
      id: `${site_url}/modules/${module.slug}`,
      link: `${site_url}/modules/${module.slug}`,
      description: module.description,
      date: new Date(module.publishedAt)
    });
  });

  return feed;
} 