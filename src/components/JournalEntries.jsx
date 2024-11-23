import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function JournalEntries() {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

  const fetchEntries = async () => {
    setLoading(true);
    setError(null);

    try {
      const token = localStorage.getItem("token");
      const email = localStorage.getItem("email");

      if (!token || !email) {
        throw new Error("Missing authentication details. Please log in.");
      }

      const res = await fetch(
        `/api/get-journal-entries?token=${token}&email=${email}&page=1&limit=3`
      );
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Error fetching entries.");
      }

      setEntries(data);
    } catch (error) {
      console.error("Error fetching entries:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  return (
    <div className="bg-neutral p-4 m-4 rounded-md">
      <div className="flex justify-between">
        <h2 className="text-3xl font-bold mb-4">Recent Journal Entries</h2>
        <button
          className="text-success mr-2"
          onClick={fetchEntries}
          disabled={loading}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2.5em"
            height="2.5em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M17.65 6.35A7.96 7.96 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4z"
            ></path>
          </svg>
        </button>
      </div>

      {loading ? (
        <div className="text-center text-secondary text-lg">Loading...</div>
      ) : error ? (
        <div className="text-center text-error text-lg">{error}</div>
      ) : (
        <div className="space-y-4">
          {entries.length > 0 ? (
            entries.map((entry, index) => (
              <div key={index} className="border-b-2 border-primary pb-4">
                <p className="text-lg font-semibold text-gray-500">
                  {entry.date}
                </p>
                <p className="text-xl">{entry.content}</p>
              </div>
            ))
          ) : (
            <div className="text-center text-gray-500">
              No journal entries found.
            </div>
          )}
        </div>
      )}

      <div className="flex justify-center">
        <button
          className="btn btn-primary mt-4 text-lg"
          onClick={() => router.push("/journal/all")}
        >
          View All Entries
        </button>
      </div>
    </div>
  );
}
