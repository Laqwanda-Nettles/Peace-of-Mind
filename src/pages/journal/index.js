import Footer from "@/components/Footer";
import JournalEntries from "@/components/JournalEntries";
import JournalForm from "@/components/JournalForm";
import MoodChart from "@/components/MoodChart";
import MoodCheck from "@/components/MoodCheck";
import QuoteCard from "@/components/QuoteCard";
import Sidebar from "@/components/Sidebar";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Journal() {
  const [quote, setQuote] = useState([]);
  const [loading, setLoading] = useState(true);
  const [alertMsg, setAlertMsg] = useState(null);

  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setAlertMsg({
        type: "warning",
        text: "You are not logged in. Redirecting to login page...",
      });
      setTimeout(() => router.push("/login"), 4000);
    }
  }, [router]);

  const URL = "/api/quotes";

  const fetchQuotes = async () => {
    try {
      const result = await fetch(URL);
      const data = await result.json();
      setQuote(data);
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
      <Sidebar />
      <div className="flex flex-col items-center">
        <h2 className="text-4xl font-bold text-center my-5">
          Journal Dashboard
        </h2>
        {alertMsg && (
          <div className="alert alert-warning shadow-lg mb-4 w-2/3">
            <span className="text-center text-xl font-semibold">
              {alertMsg.text}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-4 m-4">
        <div className="w-full md:w-2/3 bg-neutral shadow-lg shadow-slate-500 dark:bg-base-300 min-h-60 rounded-lg p-4 flex flex-col gap-3">
          <h2 className="text-3xl font-bold">
            Welcome to Peace of Mind!
            {/*{`Welcome ${user ? `back, ${user.name}` : "to Peace of Mind!"}`}*/}
          </h2>
          <p className="text-xl font-semibold">{`Today is ${new Date().toLocaleDateString()}.`}</p>
          {loading ? (
            <div className="flex gap-2">
              <p className="text-xl font-semibold">Loading Quote</p>
              <span className="loading loading-dots loading-lg"></span>
            </div>
          ) : (
            <div>
              {quote && <QuoteCard quote={quote.quote} author={quote.author} />}
            </div>
          )}
        </div>
        <div className="w-full md:w-1/3 bg-info dark:bg-base-300 shadow-lg shadow-slate-500 rounded-lg flex flex-col items-center justify-center p-3">
          <h2 className="text-3xl font-bold mb-4">Quick Mood Check-In</h2>
          <MoodCheck />
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-4 m-4">
        <div className="w-full md:w-2/3 min-h-60 bg-success shadow-lg shadow-slate-500 dark:bg-base-300 rounded-lg">
          <JournalEntries />
          <section>
            <JournalForm />
          </section>
        </div>
        <div className="w-full md:w-1/3 min-h-60 bg-accent shadow-lg shadow-slate-500 dark:bg-base-300 rounded-lg p-3">
          <MoodChart />
        </div>
      </div>

      <Footer />
    </div>
  );
}
