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
    {
      quote:
        "The sun himself is weak when he first rises, and gathers strength and courage as the day gets on.",
      author: "Elizabeth Barrett Browning",
    },
    {
      quote: "You are stronger than you think.",
      author: "Unknown",
    },
    {
      quote:
        "Every day may not be good, but there is something good in every day.",
      author: "Unknown",
    },
    {
      quote:
        "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle.",
      author: "Steve Jobs",
    },
    {
      quote:
        "It's okay to not be okay. It's okay to cry. It's okay to feel all the feels. Just don't give up.",
      author: "Unknown",
    },
    {
      quote:
        "Happiness is not something ready made. It comes from your own actions.",
      author: "Dalai Lama",
    },
    {
      quote:
        "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
      author: "Helen Keller",
    },
    {
      quote:
        "Just when the caterpillar thought the world was ending, it became a butterfly.",
      author: "Unknown",
    },
    {
      quote: "Start anywhere.",
      author: "Unknown",
    },
    {
      quote: "The mind is everything. What you think you become.",
      author: "Buddha",
    },
    {
      quote: "You are capable of amazing things.",
      author: "Unknown",
    },
    {
      quote: "Don't be afraid to give up the good to go for the great.",
      author: "John D. Rockefeller",
    },
    {
      quote:
        "Our greatest glory is not in never falling, but in rising every time we fall.",
      author: "Confucius",
    },
    {
      quote: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt",
    },
    {
      quote:
        "The difference between stumbling blocks and stepping stones is how you use them.",
      author: "Unknown",
    },
  ];

  // Get a random quote
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  res.status(200).json(randomQuote);
}
