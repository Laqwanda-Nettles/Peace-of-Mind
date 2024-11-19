import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function MoodChart() {
  const [chartData, setChartData] = useState([]);

  const fetchMoodData = async () => {
    try {
      const response = await fetch("api/get-moods");
      const data = await response.json();

      const daysOfWeek = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ];
      const processedData = daysOfWeek.map((day) => ({
        day,
        Angry: 0,
        Sad: 0,
        Anxious: 0,
        Calm: 0,
        Happy: 0,
        Unsure: 0,
      }));

      data.forEach((entry) => {
        const day = new Date(entry.date).toLocaleDateString("en-US", {
          weekday: "long",
        });
        const mood = entry.mood;

        const dayData = processedData.find((d) => d.day === day);
        if (dayData && mood) {
          dayData[mood] = (dayData[mood] || 0) + 1;
        }
      });

      setChartData(processedData);
    } catch (error) {
      console.error("Error fetching mood data: ", error);
    }
  };

  useEffect(() => {
    fetchMoodData();
  }, []);

  return (
    <div className="bg-neutral rounded-md p-4">
      <div className="flex justify-between items-center mb-4 px-2">
        <h2 className="text-3xl font-bold">Mood Tracker</h2>
        <button onClick={fetchMoodData} className="text-secondary">
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
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={chartData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Angry" stackId="a" fill="#f87171" />
          <Bar dataKey="Sad" stackId="a" fill="#fb923c" />
          <Bar dataKey="Anxious" stackId="a" fill="#facc15" />
          <Bar dataKey="Calm" stackId="a" fill="#84cc16" />
          <Bar dataKey="Happy" stackId="a" fill="#22c55e" />
          <Bar dataKey="Unsure" stackId="a" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
