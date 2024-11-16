import { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";

export default function MoodSummary() {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null); // Ref for the Chart instance
  const [moodData, setMoodData] = useState([]);

  // Fetch mood data once when the component mounts
  useEffect(() => {
    const fetchMoodData = async () => {
      try {
        const response = await fetch("/api/get-moods");
        const data = await response.json();
        setMoodData(data); // Set mood data state
      } catch (error) {
        console.error("Error fetching mood data:", error);
      }
    };

    fetchMoodData();
  }, []); // Only fetch data once on initial render

  // Use effect for chart rendering/updating when moodData changes
  useEffect(() => {
    if (moodData.length > 0) {
      const moodCounts = moodData.reduce((counts, { mood }) => {
        counts[mood] = (counts[mood] || 0) + 1;
        return counts;
      }, {});

      const ctx = chartRef.current.getContext("2d");

      // If chart instance exists, just update the data
      if (chartInstanceRef.current) {
        chartInstanceRef.current.data.labels = Object.keys(moodCounts);
        chartInstanceRef.current.data.datasets[0].data =
          Object.values(moodCounts);
        chartInstanceRef.current.update();
      } else {
        // Create a new chart instance if it doesn't exist
        chartInstanceRef.current = new Chart(ctx, {
          type: "bar",
          data: {
            labels: Object.keys(moodCounts),
            datasets: [
              {
                label: "Mood Frequency",
                data: Object.values(moodCounts),
                backgroundColor: [
                  "rgba(255, 99, 132, 0.2)", // Red
                  "rgba(255, 159, 64, 0.2)", // Orange
                  "rgba(255, 205, 86, 0.2)", // Yellow
                  "rgba(75, 192, 192, 0.2)", // Green
                  "rgba(54, 162, 235, 0.2)", // Blue
                  "rgba(153, 102, 255, 0.2)", // Purple
                ],
                borderColor: [
                  "rgba(255, 99, 132, 1)",
                  "rgba(255, 159, 64, 1)",
                  "rgba(255, 205, 86, 1)",
                  "rgba(75, 192, 192, 1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(153, 102, 255, 1)",
                ],
                borderWidth: 1,
              },
            ],
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                display: true,
                position: "top",
              },
            },
            scales: {
              y: {
                beginAtZero: true,
                title: {
                  display: true,
                  text: "Count",
                },
              },
              x: {
                title: {
                  display: true,
                  text: "Mood",
                },
              },
            },
          },
        });
      }
    }

    // Cleanup function to destroy the chart instance when the component is unmounted
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [moodData]); // Run when moodData changes (not on every render)

  return (
    <div className="p-4 bg-neutral dark:bg-neutral rounded-lg">
      <h3 className="text-lg font-bold mb-4">Mood Tracker Summary</h3>
      <canvas ref={chartRef} className="w-full h-64"></canvas>
    </div>
  );
}
