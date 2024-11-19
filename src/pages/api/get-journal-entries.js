import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();

export default async function handler(req, res) {
  const { page = 1, limit = 3 } = req.query; // Defaults: page 1, 3 entries per page
  const start = (page - 1) * limit; // Calculate start index
  const stop = start + parseInt(limit) - 1; // Calculate stop index
  if (req.method === "GET") {
    try {
      const entries = await redis.lrange("journalEntries", start, stop);

      if (!entries || entries.length === 0) {
        return res.status(404).json({ message: "No journal entries found." });
      }
      res.status(200).json(entries);
    } catch (error) {
      console.error("Error fetching journal entries: ", error);
      res.status(500).json({ error: "Error fetching journal entries." });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
