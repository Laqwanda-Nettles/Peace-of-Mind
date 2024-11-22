export default function FeatureCard({ src, title, description }) {
  return (
    <div className="card bg-base-100 image-full w-96 h-72 shadow-xl">
      <figure>
        <img src={src} alt={title} className="object-cover" />
      </figure>
      <div className="card-body flex flex-col content-center my-auto dark:text-shadow backdrop-blur-sm">
        <h2 className="card-title text-2xl">{title}</h2>
        <p className="text-xl">{description}</p>
      </div>
    </div>
  );
}
