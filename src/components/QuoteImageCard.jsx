const ZEN_URL = process.env.ZENQUOTES_URL;
export default function QuoteImageCard() {
  return (
    <div className="w-96">
      <img src={ZEN_URL} alt="Inspirational Quote" />
    </div>
  );
}
