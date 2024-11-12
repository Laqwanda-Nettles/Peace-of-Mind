import "@/styles/globals.css";
import { Playfair_Display, Fredoka } from "next/font/google";

const play = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-play",
});

const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-fredoka",
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${play.variable} ${fredoka.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}
