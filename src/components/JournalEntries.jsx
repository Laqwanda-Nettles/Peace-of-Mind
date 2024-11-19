import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function JournalEntries() {
  const [entries, setEntries] = useState([]);
  const router = useRouter();

  const fetchEntries = async () => {
    try {
      const res = await fetch(`/api/get-journal-entries?page=1&limit=3`);
      const data = await res.json();
      setEntries(data);
    } catch (error) {
      console.error("Error fetching entries:", error);
    }
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  return (
    <div className="bg-neutral p-4 m-4 rounded-md">
      <h2 className="text-3xl font-bold mb-4">Recent Journal Entries</h2>
      <div className="space-y-4">
        {entries.map((entry, index) => (
          <div key={index} className="border-b-2 border-primary pb-4">
            <p className="text-lg font-semibold text-gray-500">{entry.date}</p>
            <p className="text-xl">{entry.content}</p>
          </div>
        ))}
      </div>
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
