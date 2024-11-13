export default function QuoteCard({ author, quote }) {
  return (
    <div>
      <blockquote>
        <p>{quote}</p>
      </blockquote>
      <p>{author}</p>
    </div>
  );
}
