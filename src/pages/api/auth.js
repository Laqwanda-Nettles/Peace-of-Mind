import { Redis } from "@upstash/redis";
import validateToken from "../utils/validateToken";

const redis = Redis.fromEnv();

export default async function handler(req, res) {
  if (req.method === "GET") {
    const { token, email } = req.query;
    const validationResult = await validateToken(token, email);

    if (validationResult.status !== 200) {
      return res
        .status(validationResult.status)
        .json({ message: validationResult.message });
    }

    res
      .status(200)
      .json({ message: "It worked", email, username: "ExampleUser" });
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
