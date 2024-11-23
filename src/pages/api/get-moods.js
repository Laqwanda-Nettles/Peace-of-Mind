import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();

export default async function handler(req, res) {
  if (req.method === "GET") {
    const { token } = req.query;

    const result = await redis.get(`magiclink:${token}`);
    if (!result || !result.email) {
      return res.status(400).json({ error: "Invalid token or no user found." });
    }
    const email = result.email;

    try {
      //Get the list of mood entries
      const moodEntries = await redis.lrange(`mood_entries:${email}`, 0, -1);

      //Parse entries
      const parsedEntries = moodEntries.map((entry) => {
        try {
          return typeof entry === "string" ? JSON.parse(entry) : entry;
        } catch (error) {
          console.error("Error parsing entry: ", entry);
          return entry; // Return the raw entry if parsing fails
        }
      });

      res.status(200).json(parsedEntries);
    } catch (error) {
      console.error("Error retrieving mood data from Redis: ", error);
      res.status(500).json({ error: "Failed to retrieve mood data." });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
