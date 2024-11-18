import { articles } from "./ArticlesData"; // Import articles data
import Article from "./Article";

export default function ArticlesSection() {
  return (
    <>
      <h2 className="text-3xl font-bold text-center">Self-Help Articles</h2>
      <p className="text-xl font-semibold italic text-center">
        Knowledge is power, and self-awareness is the key to growth.
      </p>
      <section className="flex flex-wrap justify-evenly items-center gap-4 m-4">
        {articles.map((article, index) => (
          <Article
            key={index} // Unique key for each article
            imgSrc={article.img}
            title={article.title}
            tag={article.tags[0]} // First tag
            secondTag={article.tags[1]} // Second tag (optional)
            description={article.description}
            url={article.url}
          />
        ))}
      </section>
    </>
  );
}
