import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { mood, date, token } = req.body;

    if (!mood || !date) {
      return res.status(400).json({ error: "Mood and date are required." });
    }

    const result = await redis.get(`magiclink:${token}`);
    const email = result.email;

    try {
      // Push mood data to a Redis list
      await redis.lpush(
        `mood_entries:${email}`,
        JSON.stringify({ mood, date })
      );
      res.status(200).json({ message: "Mood saved successfully!" });
    } catch (error) {
      console.error("Error saving mood to Upstash: ", error);
      res.status(500).json({ error: "Failed to save mood." });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
