import { Resend } from "resend";
import { randomUUID } from "crypto";
import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, username } = req.body;

    if (!email || !username) {
      return res.status(400).json({ error: "Email and username are required" });
    }

    const token = randomUUID();

    const magicLink = `${process.env.NEXT_PUBLIC_BASE_URL}/auth?token=${token}&email=${email}`;
    console.log("MagicLink: ", magicLink);
    await redis.set(`magiclink:${token}`, JSON.stringify({ email, username }), {
      ex: 900,
    });

    try {
      await resend.emails.send({
        from: "Acme <onboarding@resend.dev>",
        to: email,
        subject: "Your Magic Link to Sign In",
        html: `<p>Hello ${username},</p>
            <p>Click the link below to sign in:</p>
            <a href="${magicLink}">${magicLink}</a>
            <p>This link will expire in 15 minutes.</p>`,
      });

      res.status(200).json({ message: "Magic link sent!" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Failed to send email" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
