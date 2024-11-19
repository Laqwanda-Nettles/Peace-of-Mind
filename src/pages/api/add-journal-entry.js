import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { date, content } = req.body;

    if (!date || !content) {
      return res.status(400).json({ error: "Date and content are required." });
    }

    try {
      const entry = JSON.stringify({ date, content });
      await redis.lpush("journalEntries", entry);

      res.status(201).json({ message: "Journal entry added successfully!" });
    } catch (error) {
      console.error("Error adding entry: ", error);
      res.status(500).json({ error: "Error adding journal entry." });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
