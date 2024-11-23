import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";

export default function AllJournalEntries() {
  const [entries, setEntries] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchEntries = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const email = localStorage.getItem("email");

      if (!token || !email) {
        console.error("Token or email missing. Please log in again.");
        return;
      }

      const res = await fetch(
        `/api/get-journal-entries?token=${token}&email=${email}&page=${page}&limit=5`
      );

      if (!res.ok) {
        throw new Error("Failed to fetch entries. Please try again later.");
      }

      const data = await res.json();
      setEntries(data);
    } catch (error) {
      console.error("Error fetching entries:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEntries();
  }, [page]);

  return (
    <div>
      <Navbar />
      <div className="p-4 min-h-screen">
        <h2 className="text-3xl font-bold mb-4">All Journal Entries</h2>

        {loading ? (
          <div className="text-center text-lg text-secondary">Loading...</div>
        ) : entries.length === 0 ? (
          <div className="text-center text-lg text-gray-500">
            No journal entries found.
          </div>
        ) : (
          <div className="space-y-4">
            {entries.map((entry, index) => (
              <div key={index} className="border-b-4 border-secondary pb-4">
                <p className="text-lg font-semibold text-gray-500">
                  {entry.date}
                </p>
                <p className="text-xl">{entry.content}</p>
              </div>
            ))}
          </div>
        )}

        <div className="flex justify-between items-center mt-4">
          <button
            className="btn btn-success dark:btn-primary text-lg"
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1 || loading}
          >
            Previous
          </button>
          <span className="text-xl font-semibold">Page {page}</span>
          <button
            className="btn btn-info text-lg"
            onClick={() => setPage((prev) => prev + 1)}
            disabled={loading || entries.length < 5}
          >
            Next
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
