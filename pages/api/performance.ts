import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const metrics = req.body;

    // Here you would typically store these metrics in your database
    // For example, using MongoDB:
    // await db.collection('performance_metrics').insertOne({
    //   ...metrics,
    //   timestamp: new Date(),
    //   userAgent: req.headers['user-agent'],
    //   path: req.headers['referer']
    // });

    console.log("Performance metrics received:", metrics);

    res.status(200).json({ message: "Metrics recorded successfully" });
  } catch (error) {
    console.error("Error recording metrics:", error);
    res.status(500).json({ message: "Error recording metrics" });
  }
}
