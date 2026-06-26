function Loader() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-amber-400 border-t-transparent rounded-full animate-spin"></div>
        <h1 className="font-medium text-gray-400">Loading images...</h1>
      </div>
    </div>
  );
}

export default Loader;
