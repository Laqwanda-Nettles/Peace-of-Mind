import { useEffect, useState, useRef } from "react";

export default function BreathingExercise() {
  // Define steps for the breathing exercise
  const [step, setStep] = useState(0);
  const steps = [
    { label: "Inhale", duration: 4000 }, // 4 seconds
    { label: "Hold", duration: 4000 }, // 4 seconds
    { label: "Exhale", duration: 6000 }, // 6 seconds
    { label: "Rest", duration: 2000 }, // 2 seconds
  ];

  const [isPlaying, setIsPlaying] = useState(false);

  // Reference to the audio element
  const audioRef = useRef(null);

  // Timer to automatically transition between steps
  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setStep((prevStep) => (prevStep + 1) % steps.length);
    }, steps[step].duration);

    return () => clearInterval(timer); // Cleanup the interval
  }, [isPlaying, step, steps]);

  // Start/Stop button handler
  const toggleExercise = () => {
    setIsPlaying((prev) => {
      if (!prev) {
        audioRef.current.volume = 0.1; // Volume set to 10%
        audioRef.current.play(); // Start music
      } else {
        audioRef.current.pause(); // Stop music
        audioRef.current.currentTime = 0; // Reset to the start
      }
      return !prev;
    });
    if (!isPlaying) setStep(0); // Reset to the first step when starting
  };

  return (
    <div
      className="min-h-80 bg-blue-50 p-4 rounded-2xl"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/9915262/pexels-photo-9915262.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load)",
      }}
    >
      <div className=" hero-overlay bg-black bg-opacity-60 rounded-xl flex flex-col items-center justify-center">
        {/* Title */}
        <h1 className="text-3xl font-bold mb-5 text-blue-200">
          Guided Breathing Exercise
        </h1>

        {/* Breathing Circle Animation */}
        <div className="relative w-28 h-28 mb-6">
          <div
            className={`absolute inset-0 rounded-full bg-blue-300 shadow-lg shadow-cyan-600 transition-transform`}
            style={{
              transform: step === 0 || step === 2 ? "scale(1.2)" : "scale(1)",
              transitionDuration: `${steps[step].duration}ms`,
            }}
          ></div>
        </div>

        {/* Instruction Text */}
        <p className="text-2xl font-bold text-white mb-6">
          {isPlaying ? steps[step].label : "Click Start to Begin"}
        </p>

        {/* Start/Stop Button */}
        <button
          onClick={toggleExercise}
          className={`px-6 py-2 rounded ${
            isPlaying
              ? "bg-red-500 hover:bg-red-600"
              : "bg-blue-500 hover:bg-blue-600"
          } text-white font-semibold`}
        >
          {isPlaying ? "Stop" : "Start"}
        </button>

        {/* Background Music */}
        <audio ref={audioRef} loop>
          <source src="/bgMusic.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>

        {/* Fallback Text Instructions */}
        <details className="mt-6 text-lg font-semibold text-gray-100">
          <summary className="cursor-pointer font-semibold text-blue-200">
            Breathing Instructions
          </summary>
          <ul className="mt-2 list-disc pl-6">
            <li>Inhale deeply for 4 seconds.</li>
            <li>Hold your breath for 4 seconds.</li>
            <li>Exhale slowly for 6 seconds.</li>
            <li>Rest for 2 seconds before repeating.</li>
          </ul>
        </details>
      </div>
    </div>
  );
}
