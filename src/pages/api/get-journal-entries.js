import { Redis } from "@upstash/redis";
import validateToken from "../utils/validateToken";

const redis = Redis.fromEnv();

export default async function handler(req, res) {
  const { token, email, page = 1, limit = 3 } = req.query;

  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    return res
      .status(405)
      .json({ message: `Method ${req.method} Not Allowed` });
  }

  // Validate the token
  const validationResult = await validateToken(token, email);

  if (validationResult.status !== 200) {
    return res
      .status(validationResult.status)
      .json({ message: validationResult.message });
  }

  // Fetch user-specific journal entries
  try {
    const userKey = `journalEntries:${email}`;
    const start = (page - 1) * limit;
    const stop = start + parseInt(limit) - 1;

    const entries = await redis.lrange(userKey, start, stop);

    if (!entries || entries.length === 0) {
      return res
        .status(404)
        .json({ message: "No journal entries found for this user." });
    }

    // Parse each entry to confirm structure
    const parsedEntries = entries.map((entry) => {
      if (typeof entry === "string") {
        try {
          return JSON.parse(entry);
        } catch (error) {
          console.error("Error parsing entry:", entry, error);
          throw new Error("Invalid journal entry format.");
        }
      } else if (typeof entry === "object") {
        // Entry is already an object
        return entry;
      } else {
        console.error("Unexpected entry type:", typeof entry, entry);
        throw new Error("Unexpected journal entry type.");
      }
    });

    res.status(200).json(parsedEntries);
  } catch (error) {
    console.error("Error fetching journal entries: ", error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching journal entries." });
  }
}
