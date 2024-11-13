import Link from "next/link";
import PropTypes from "prop-types";

export default function Article({
  imgSrc,
  title,
  tag,
  secondTag,
  description,
  url,
}) {
  return (
    <div className="card bg-white dark:bg-neutral dark:text-slate-50 w-96 shadow-xl">
      <figure>
        <img src={imgSrc} alt={title} />
      </figure>
      <div className="card-body">
        <Link href={"url"}>
          <h2 className="card-title text-2xl font-semibold">{title}</h2>
        </Link>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{tag}</div>
          <div className="badge badge-outline">{secondTag}</div>
        </div>
      </div>
    </div>
  );
}

Article.propTypes = {
  imgSrc: PropTypes.string,
  title: PropTypes.string,
  tag: PropTypes.string,
  secondTag: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
};
