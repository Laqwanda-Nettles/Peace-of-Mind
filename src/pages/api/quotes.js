export default function handler(req, res) {
  const quotes = [
    {
      quote: "Believe in yourself and all that you are.",
      author: "Christian D. Larson",
    },
    {
      quote:
        "You are never too old to set another goal or to dream a new dream.",
      author: "C.S. Lewis",
    },
    { quote: "Happiness depends upon ourselves.", author: "Aristotle" },
    {
      quote:
        "Keep your face always toward the sunshine—and shadows will fall behind you.",
      author: "Walt Whitman",
    },
    {
      quote: "Act as if what you do makes a difference. It does.",
      author: "William James",
    },
    {
      quote: "Do what you can, with what you have, where you are.",
      author: "Theodore Roosevelt",
    },
    {
      quote: "Don't wait. The time will never be just right.",
      author: "Napoleon Hill",
    },
    {
      quote: "Be yourself; everyone else is already taken.",
      author: "Oscar Wilde",
    },
  ];

  // Get a random quote
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  res.status(200).json(randomQuote);
}
