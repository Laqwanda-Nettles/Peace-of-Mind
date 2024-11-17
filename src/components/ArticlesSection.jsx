import { articles } from "./articlesdata"; // Import articles data
import Article from "./Article";

export default function ArticlesSection() {
  return (
    <section className="flex flex-wrap justify-evenly items-center gap-4">
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
  );
}
