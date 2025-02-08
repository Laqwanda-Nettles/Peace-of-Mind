import Footer from "@/components/Footer";
import HoverCard from "@/components/HoverCard";
import Navbar from "@/components/Navbar";
import QuoteCard from "@/components/QuoteCard";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const URL = "/api/quotes";

  const fetchQuotes = async () => {
    try {
      const result = await fetch(URL);
      const data = await result.json();
      setQuote(data);
    } catch (error) {
      console.error("Error fetching data from API: ", error);
      setError(true);
      setErrorMsg(
        `Oops, looks like we hit a little snag! But remember, even the greatest journeys start with a single step, so lets try again.`
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  return (
    <div>
      <Navbar />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <section
          className="hero min-h-60"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/1835016/pexels-photo-1835016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h2 className="mb-5 text-5xl font-bold">
                Welcome to Peace of Mind
              </h2>
              <p className="mb-5 text-xl font-semibold">
                Your space to reflect, track your feelings, and explore
                supportive resources.
              </p>
              <button className="btn btn-primary text-lg">
                <Link href="/login">Start Journaling Today</Link>
              </button>
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center justify-center gap-5 w-full p-3">
          <h2 className="text-4xl font-semibold">
            Get Inspired — See Today&apos;s Quote
          </h2>
          <p className="text-2xl">
            You&apos;re not alone on your journey. Let Peace of Mind be your
            companion toward a balanced and fulfilled life.
          </p>
          {error ? (
            <p>{errorMsg}</p>
          ) : loading ? (
            <div className="flex gap-2">
              <p className="text-xl font-semibold">Loading Quote</p>
              <span className="loading loading-dots loading-lg"></span>
            </div>
          ) : (
            <div>
              {quote && <QuoteCard quote={quote.quote} author={quote.author} />}
            </div>
          )}
        </section>
        <section className="w-full flex flex-col items-center gap-5 p-3">
          <h2 className="text-4xl font-semibold">Features</h2>
          <div className="flex gap-5 flex-wrap justify-center">
            <HoverCard
              title="Personal Journal"
              details="Write daily entries to reflect on your thoughts and experiences. Discover patterns in your emotions and watch your growth."
              imageSrc="/journal.jpg"
            />
            <HoverCard
              title="Mood Tracker"
              details="Easily track your mood over time. Observe trends and gain insights into your emotional well-being."
              imageSrc="/mood.jpg"
            />
            <HoverCard
              title="Resources"
              details="Explore curated resources for mindfulness, support, and inspiration whenever you need it."
              imageSrc="/resources.jpg"
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
