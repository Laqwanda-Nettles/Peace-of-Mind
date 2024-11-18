import { useState } from "react";

export default function JournalPrompts() {
  const [selectedCategory, setSelectedCategory] = useState(""); // State to track selected option

  const prompts = {
    Growth: [
      "What is a recent challenge you overcame, and how did it help you grow?",
      "Write about a skill you want to improve and why.",
    ],
    Mindset: [
      "What limiting belief are you ready to let go of?",
      "List three things you're grateful for today.",
    ],
    "Self Discovery": [
      "Who am I when no one is watching?",
      "What does my ideal day look like?",
    ],
    Reflection: [
      "What is something you wish you had done differently this week?",
      "What lessons have you learned from a recent experience?",
    ],
  };

  return (
    <div className="space-y-4 w-full max-w-md mx-auto">
      {/* Select Dropdown */}
      <select
        className="select select-error w-full max-w-xs"
        onChange={(e) => setSelectedCategory(e.target.value)}
        defaultValue=""
      >
        <option value="" disabled>
          Get Journal Prompt
        </option>
        <option value="Growth">Growth</option>
        <option value="Mindset">Mindset</option>
        <option value="Self Discovery">Self Discovery</option>
        <option value="Reflection">Reflection</option>
      </select>

      {/* Display Journal Prompts */}
      {selectedCategory && (
        <div className="p-4 bg-base-200 rounded-lg shadow-md">
          <h2 className="text-lg font-bold text-primary mb-2">
            Prompts for {selectedCategory}
          </h2>
          <ul className="list-disc list-inside space-y-2">
            {prompts[selectedCategory].map((prompt, index) => (
              <li key={index}>{prompt}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
