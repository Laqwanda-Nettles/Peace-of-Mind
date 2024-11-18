import ArticlesSection from "@/components/ArticlesSection";
import Footer from "@/components/Footer";
import GuidedMeditationSection from "@/components/GuidedMeditationSection";
import HotlineSection from "@/components/HotlineSection";
import Navbar from "@/components/Navbar";
import QuoteImageCard from "@/components/QuoteImageCard";
import TipsSections from "@/components/TipsSection";
import { useEffect, useState } from "react";

export default function Resources() {
  const [randomQuotes, setRandomQuotes] = useState([]);

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await fetch("/api/image-quotes");
        const data = await response.json();
        const randomThree = getRandomQuotes(data.quotes, 3);
        setRandomQuotes(randomThree);
      } catch (error) {
        console.error("Error fetching quotes: ", error);
      }
    };
    fetchQuotes();
  }, []);

  const getRandomQuotes = (quotes, n) => {
    const result = [];
    const seenIndexes = new Set();

    while (result.length < n && result.length < quotes.length) {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      if (!seenIndexes.has(randomIndex)) {
        result.push(quotes[randomIndex]);
        seenIndexes.add(randomIndex);
      }
    }
    return result;
  };

  return (
    <div>
      <Navbar />
      <div className="bg-gradient-to-r from-primary to-secondary curved-header h-36 p-4 mb-4">
        <h2 className="text-5xl font-bold text-center text-gray-900">
          Resources
        </h2>
        <p className="text-2xl font-semibold text-center text-gray-900">
          Supporting Your Mental Well-Being
        </p>
      </div>
      <section className="mb-4">
        <h2 className="font-bold text-3xl text-center mb-4">
          Daily Dose of Positivity
        </h2>
        <p className="font-semibold text-xl text-center mb-5">
          A dedicated space to provide uplifting and motivational quotes that
          brighten your day.
        </p>
        <div className="flex flex-wrap items-center justify-evenly gap-4">
          {randomQuotes.map((quote, index) => (
            <QuoteImageCard
              key={index}
              imgSrc={`/${quote.img}.jpg`}
              title={quote.img}
              quote={quote.quote}
              author={quote.author}
            />
          ))}
        </div>
      </section>
      <HotlineSection />
      <ArticlesSection />
      <GuidedMeditationSection />
      <TipsSections />
      <Footer />
    </div>
  );
}
