import { useState } from "react";

// Map mood values to labels
const moodOptions = [
  { value: "1", emoji: "😡", label: "Angry", color: "bg-red-400" },
  { value: "2", emoji: "😞", label: "Sad", color: "bg-orange-400" },
  { value: "3", emoji: "😣", label: "Anxious", color: "bg-yellow-400" },
  { value: "4", emoji: "😌", label: "Calm", color: "bg-lime-400" },
  { value: "5", emoji: "😊", label: "Happy", color: "bg-green-400" },
  { value: "6", emoji: "🤔", label: "Unsure", color: "bg-blue-400" },
];

export default function MoodCheck() {
  const [rating, setRating] = useState("");

  const onOptionChange = (e) => {
    setRating(e.target.value);
  };

  const handleTrackMood = async () => {
    if (!rating) {
      alert("Please select a mood before submitting.");
      return;
    }

    const selectedMood = moodOptions.find((mood) => mood.value === rating);
    const moodLabel = selectedMood ? selectedMood.label : "Unknown";

    try {
      // Save mood data to Upstash Redis
      const response = await fetch("/api/save-mood", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mood: moodLabel,
          date: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        alert(`Your (${moodLabel}) mood has been tracked!`);
        setRating(""); // Reset the form
      } else {
        console.error("Failed to save mood:", response.statusText);
        alert("Failed to track mood. Please try again.");
      }
    } catch (error) {
      console.error("Error saving mood:", error);
      alert("An error occurred while tracking your mood.");
    }
  };

  return (
    <div className="rating gap-1 bg-neutral p-4 rounded-xl flex flex-col">
      <div className="flex gap-2 justify-center flex-wrap mb-2">
        {moodOptions.map(({ value, emoji, label, color }) => (
          <div key={value} className="flex flex-col items-center gap-1">
            <label
              htmlFor={value}
              className="text-3xl tooltip"
              data-tip={label}
            >
              {emoji}
            </label>
            <input
              type="radio"
              name="rating"
              value={value}
              id={value}
              checked={rating === value}
              onChange={onOptionChange}
              className={`mask mask-heart ${color}`}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button
          onClick={handleTrackMood}
          className="btn btn-primary px-6 py-2 rounded-lg"
        >
          Track Mood
        </button>
      </div>
    </div>
  );
}
