const API_KEY = process.env.NINJAS_API_KEY;

async function getQuote() {
  const URL = `https://api.api-ninjas.com/v1/quotes?category=inspirational`;
  const result = await fetch(URL, {
    headers: { "X-Api-Key": API_KEY },
  });

  const data = await result.json();
  return data;
}

export default async function handler(req, res) {
  try {
    const quotes = await getQuote();
    const responseData = quotes.map((quote) => ({
      quote: quote.quote,
      author: quote.author,
    }));
    res.status(200).json(responseData);
  } catch (error) {
    console.error("Error fetching quotes: ", error);
    res.status(500).json({ error: "Failed to fetch quote." });
  }
}
