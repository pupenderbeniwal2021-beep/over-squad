function ImageCard({ image }) {
  return (
    <a
      href={image.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block w-64 transition-all duration-300 hover:-translate-y-1"
    >
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg shadow-black/20 hover:shadow-amber-400/10 transition-all duration-300">
        <div className="h-60 w-64 overflow-hidden relative">
          <img
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            src={image.download_url}
            alt={image.author}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        <div className="p-3">
          <h3 className="text-sm font-medium text-gray-200 truncate group-hover:text-amber-400 transition-colors duration-300">
            {image.author}
          </h3>
        </div>
      </div>
    </a>
  );
}

export default ImageCard;
