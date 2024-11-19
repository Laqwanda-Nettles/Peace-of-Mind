import PropTypes from "prop-types";

export default function HoverCard({ imageSrc, title, details }) {
  return (
    <div className="relative w-80 h-60 overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
      {/* Image Display */}
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-[12.2rem] object-cover"
      />

      {/* Title Display */}
      <div className="bg-white dark:bg-neutral p-2 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
          {title}
        </h2>
      </div>

      {/* Hover Details */}
      <div className="absolute inset-0 flex items-center justify-center bg-white dark:bg-neutral bg-opacity-95 p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
        <p className="text-gray-800 text-center  dark:text-white text-2xl">
          {details}
        </p>
      </div>
    </div>
  );
}

HoverCard.propTypes = {
  imageSrc: PropTypes.string,
  title: PropTypes.string,
  details: PropTypes.string,
};
