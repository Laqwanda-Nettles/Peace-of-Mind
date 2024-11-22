import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    const response = await fetch("/api/send-magic-link", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, username }),
    });

    const result = await response.json();

    if (response.ok) {
      setMessage("Magic link sent! Check your email.");
    } else {
      setMessage(result.error || "Failed to send magic link. Try again.");
    }

    setIsLoading(false);
  };

  return (
    <div
      className="hero min-h-screen flex items-center justify-center bg-gray-100"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/4497731/pexels-photo-4497731.jpeg)",
      }}
    >
      <div className="flex flex-col gap-6">
        <div className="flex flex-col items-center">
          <svg
            className="text-emerald-900 drop-shadow-md"
            xmlns="http://www.w3.org/2000/svg"
            width="5em"
            height="5em"
            viewBox="0 0 256 256"
          >
            <path
              fill="currentColor"
              d="M210.51 31a26 26 0 0 0-47.63 6.27L148 92.82l-14.88-55.54a26 26 0 0 0-50.23 13.46L93.1 88.82l-11.89-2.29a26 26 0 0 0-21.37 45.85a25.8 25.8 0 0 0-9.31 15.15a26.7 26.7 0 0 0-.53 5.32V160a78 78 0 0 0 78 78h.6c42.68-.32 77.4-35.71 77.4-78.9v-3.34a53.86 53.86 0 0 0-12-33.82l19.07-71.2A25.83 25.83 0 0 0 210.51 31M95.88 37a14 14 0 0 1 25.65 3.38L137 98a26 26 0 0 0-17.23 5.71c-.38-.7-.79-1.39-1.24-2.07a25.7 25.7 0 0 0-12.18-9.85L94.48 47.63A13.94 13.94 0 0 1 95.88 37m-33.59 72.2a14 14 0 0 1 16.58-10.9l20.74 4A14 14 0 1 1 94 129.71l-12-2.31l-.72-.14l-.4-.07l-7.63-1.47a14 14 0 0 1-10.89-16.51Zm0 40.72A14 14 0 0 1 78.66 139l1 .2l9.14 1.8a14 14 0 1 1-5.63 27.42l-10-2a14 14 0 0 1-10.9-16.51ZM194 159.1c0 36.62-29.39 66.63-65.5 66.9a66.06 66.06 0 0 1-64.61-50.26a25.7 25.7 0 0 0 6.92 2.46l10 2a27 27 0 0 0 5.25.53a26 26 0 0 0 21.64-40.34l-.42-.6a26.3 26.3 0 0 0 5.81-3.52q.57 1.06 1.23 2.07a25.86 25.86 0 0 0 16.52 11.15l8.34 1.66A34.3 34.3 0 0 0 138 160a33.85 33.85 0 0 0 9.71 23.8a6 6 0 0 0 8.57-8.4a22 22 0 0 1-3.64-25.86a6 6 0 0 0-4.1-8.75l-15.34-3.07a14 14 0 1 1 5.63-27.42l21.4 4.27A42.12 42.12 0 0 1 194 155.76Zm7.51-111.47l-17.36 64.79a53.6 53.6 0 0 0-21.57-9.61l-4.59-.92l16.48-61.5a14 14 0 0 1 27 7.24Z"
            ></path>
          </svg>
          <h1 className="text-5xl font-bold text-white drop-shadow-sm text-shadow-2">
            Peace of Mind
          </h1>
        </div>
        <div className="w-full max-w-md p-6 backdrop-blur-xl bg-white/40 rounded-md shadow-lg shadow-black">
          <h2 className="text-3xl font-extrabold text-center mb-4 text-black">
            Login
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-lg font-semibold text-black">
                Email
              </label>
              <input
                type="email"
                className="mt-1 block w-full input input-bordered input-warning border-2 rounded-md p-2 bg-slate-50 text-black"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@email.com"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-semibold text-black">
                Username
              </label>
              <input
                type="text"
                className="mt-1 block w-full input input-bordered input-warning border-2 rounded-md p-2 bg-slate-50 text-black"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="enter username"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#588157] text-lg font-semibold text-white py-2 px-4 rounded hover:bg-[#3a5a40] duration-300"
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send Magic Link"}
            </button>
          </form>
          {message && (
            <p className="mt-4 text-center text-sm text-gray-600">{message}</p>
          )}
        </div>
      </div>
    </div>
  );
}
