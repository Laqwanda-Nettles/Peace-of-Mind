import Footer from "@/components/Footer";
import JournalForm from "@/components/JournalForm";
import MoodCheck from "@/components/MoodCheck";
import MoodSummary from "@/components/MoodSummary";
import QuoteCard from "@/components/QuoteCard";
import Sidebar from "@/components/Sidebar";
import ThemeToggle from "@/components/ThemeToggle";
import { useEffect, useState } from "react";

export default function Journal() {
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
      <div className="flex items-center w-full justify-between">
        <Sidebar />
        <h2 className="text-4xl font-bold">Journal Dashboard</h2>
        <div>
          <ThemeToggle />
        </div>
      </div>
      <section>
        <JournalForm />
      </section>

      <div className="grid grid-cols-5 grid-rows-6 gap-4 m-5">
        <div className="col-span-3 row-span-3 bg-accent dark:bg-base-300 h-full rounded-lg p-4 flex flex-col gap-3">
          <h2 className="text-2xl font-bold">
            Welcome to Peace of Mind!
            {/*{`Welcome ${user ? `back, ${user.name}` : "to Peace of Mind!"}`}*/}
          </h2>
          <p className="text-xl">{`Today is ${new Date().toLocaleDateString()}.`}</p>
          {loading ? (
            <div className="flex gap-2">
              <p className="text-xl font-semibold">Loading Quote</p>
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
        </div>
        <div className="col-span-2 row-span-3 col-start-4 bg-info dark:bg-base-300 rounded-lg flex-col items-center justify-center p-3">
          <h2 className="text-2xl font-bold mb-4">Quick Mood Check-In</h2>
          <MoodCheck />
        </div>
        <div className="col-span-3 row-span-3 row-start-4 bg-success rounded-lg">
          3 Journal Entries Overview
        </div>
        <div className="col-span-2 row-span-3 col-start-4 row-start-4 bg-error rounded-lg p-3">
          <MoodSummary />
        </div>
      </div>

      <Footer />
    </div>
  );
}
