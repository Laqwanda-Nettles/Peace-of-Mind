export default function QuoteImageCard({ imgSrc, title, quote, author }) {
  return (
    <div className="card w-80 h-96 bg-base-100 shadow-xl relative rounded-2xl">
      <figure className="w-full h-full rounded-2xl">
        <img src={imgSrc} alt={title} className="object-cover w-full h-full" />
        {/* Background overlay for opacity */}
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-2xl"></div>
      </figure>
      <div className="card-body absolute w-full text-white">
        <h2 className="card-title text-2xl text-shadow">{quote}</h2>
        <p className="italic text-right text-lg font-semibold">- {author}</p>
      </div>
    </div>
  );
}
