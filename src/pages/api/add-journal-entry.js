import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { token, email, date, content } = req.body;

    if (!token || !email || !date || !content) {
      return res
        .status(400)
        .json({ error: "Token, email, date and content are required." });
    }

    try {
      //Validate token
      const tokenData = await redis.get(`magiclink:${token}`);
      if (!tokenData) {
        return res.status(401).json({ message: "Invalid or expired token." });
      }

      const entry = { date, content };

      //Add entry to user-specific list
      const key = `journalEntries:${email}`;
      await redis.lpush(key, JSON.stringify(entry));

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
