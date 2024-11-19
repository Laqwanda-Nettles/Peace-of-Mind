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
      const res = await fetch(`/api/get-journal-entries?page=${page}&limit=5`);
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
            disabled={loading}
          >
            Next
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
