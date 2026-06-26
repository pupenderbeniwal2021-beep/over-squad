function Pagination({ index, setIndex, setUserData }) {
  return (
    <div className="flex justify-center items-center gap-6 pt-4 border-t border-white/5">
      <button
        className={`bg-gradient-to-r from-amber-400 to-amber-500 text-black font-semibold
        text-sm rounded-full py-2.5 px-8 transition-all duration-300
        ${
          index > 1
            ? "hover:shadow-lg hover:shadow-amber-400/30 hover:scale-105 cursor-pointer"
            : "opacity-40 cursor-not-allowed"
        }`}
        onClick={() => {
          if (index > 1) {
            setIndex(index - 1);
            setUserData([]);
          }
        }}
      >
        ← Prev
      </button>

      <span className="text-sm font-medium text-gray-400 bg-white/5 px-4 py-1.5 rounded-full backdrop-blur-sm">
        Page {index}
      </span>

      <button
        className="bg-gradient-to-r from-amber-400 to-amber-500 text-black font-semibold
        text-sm rounded-full py-2.5 px-8 transition-all duration-300
        hover:shadow-lg hover:shadow-amber-400/30 hover:scale-105 cursor-pointer"
        onClick={() => {
          setIndex(index + 1);
          setUserData([]);
        }}
      >
        Next →
      </button>
    </div>
  );
}

export default Pagination;
