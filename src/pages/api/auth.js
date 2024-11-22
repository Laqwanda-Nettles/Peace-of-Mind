import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();

export default async function handler(req, res) {
  if (req.method === "GET") {
    const { token } = req.query;
    console.log("Token from Api: ", token);

    const result = await redis.get(`magiclink:${token}`);
    console.log(result);
    if (result) {
      res.status(200).json({
        message: "It worked",
        email: result.email,
        username: result.username,
      });
    } else {
      res.status(401).json({ message: "Access Denied" });
    }
  }
}
