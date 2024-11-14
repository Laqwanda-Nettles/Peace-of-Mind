export default function QuoteCard({ author, quote }) {
  return (
    <div className="bg-accent dark:bg-neutral mx-3 my-auto p-4 rounded-lg">
      <blockquote>
        <p className="before:content-['❝'] after:content-['❞'] before:mr-1 after:ml-1 text-xl">
          {quote}
        </p>
      </blockquote>
      <p className="text-right before:content-['—'] before:mr-2 text-lg">
        {author}
      </p>
    </div>
  );
}
