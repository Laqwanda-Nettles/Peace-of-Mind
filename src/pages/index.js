import Article from "@/components/Article";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import QuoteCard from "@/components/QuoteCard";
import Sidebar from "@/components/Sidebar";
import ThemeToggle from "@/components/ThemeToggle";
import { useEffect, useState } from "react";

export default function Home() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);

  const URL = "/api/quote";

  const fetchQuotes = async () => {
    try {
      const result = await fetch(URL);
      const data = await result.json();
      setQuotes(data);
    } catch (error) {
      console.error("Error fetching data from API: ", error);
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
      <Sidebar />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h2 className="text-4xl font-bold">Checking my fonts - Header</h2>
        <p className="text-xl font-semibold">Checking Fonts - Body</p>
        <button className="btn btn-active">Default</button>
        <Article
          imgSrc="https://www.apa.org/images/article-traumatic-stress_tcm7-286598.png"
          title="How to cope with traumatic stress"
          tag="stress"
          secondTag="trauma"
          description="Psychologists recommend people lean on loved ones, prioritize self-care, and be patient with themselves to help manage the stressful effects of trauma."
        />
        {loading ? (
          <div>
            <p>Loading Quote</p>
            <span className="loading loading-dots loading-lg"></span>
          </div>
        ) : (
          <div>
            {quotes.map((quote, index) => (
              <QuoteCard
                key={index}
                quote={quote.quote}
                author={quote.author}
              />
            ))}
          </div>
        )}
        <button className="btn btn-active btn-neutral">Neutral</button>
        <button className="btn btn-active btn-primary">Primary</button>
        <button className="btn btn-active btn-secondary">Secondary</button>
        <button className="btn btn-active btn-accent">Accent</button>
        <button className="btn btn-active btn-ghost">Ghost</button>
        <button className="btn btn-active btn-link">Link</button>
        <ThemeToggle />
        <button className="btn btn-info">Info</button>
        <button className="btn btn-success">Success</button>
        <button className="btn btn-warning">Warning</button>
        <button className="btn btn-error">Error</button>
      </main>
      <Footer />
    </div>
  );
}
