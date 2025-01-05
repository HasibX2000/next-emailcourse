import { generateRssFeed } from "@/utils/generateFeed";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    // You would typically fetch this from your data source
    const modules = [
      {
        title: "Introduction To HTML",
        slug: "html-foundations",
        description: "Learn the basics of HTML for email development",
        publishedAt: "2024-01-01",
      },
      // ... other modules
    ];

    const feed = generateRssFeed(modules);

    if (!feed) {
      throw new Error("Failed to generate feed");
    }

    res.setHeader("Content-Type", "application/xml");
    res.setHeader("Cache-Control", "public, max-age=3600, s-maxage=3600");
    res.write(feed.rss2());
    res.end();
  } catch (error) {
    console.error("Feed generation error:", error);
    res.status(500).json({ message: "Error generating feed" });
  }
}
