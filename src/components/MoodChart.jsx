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
        <button onClick={fetchMoodData} className="btn btn-secondary">
          Refresh Chart
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
