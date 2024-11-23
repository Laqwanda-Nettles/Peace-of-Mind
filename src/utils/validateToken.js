import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();

export default async function validateToken(token, email) {
  if (!token || !email) {
    return { status: 400, message: "Token and email are required." };
  }

  try {
    const tokenData = await redis.get(`magiclink:${token}`);

    if (!tokenData) {
      return { status: 401, message: "Invalid or expired token." };
    }

    let parsedTokenData;
    if (typeof tokenData === "string") {
      try {
        parsedTokenData = JSON.parse(tokenData);
      } catch (err) {
        console.error("Error parsing tokenData:", tokenData, err);
        return { status: 500, message: "Invalid token data format." };
      }
    } else if (typeof tokenData === "object") {
      parsedTokenData = tokenData;
    } else {
      console.error("Unexpected tokenData type:", typeof tokenData, tokenData);
      return { status: 500, message: "Unexpected token data type." };
    }

    const { email: storedEmail } = parsedTokenData;
    if (storedEmail !== email) {
      return { status: 403, message: "Token does not match email." };
    }

    return { status: 200, message: "Token is valid." };
  } catch (error) {
    console.error("Error validating token:", error);
    return { status: 500, message: "Internal server error." };
  }
}
