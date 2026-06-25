import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);
  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=10`,
    );
    setUserData(response.data);
  };
  useEffect(
    function () {
      getData();
    },
    [index],
  );

  let printUserData = (
    <div className="flex items-center justify-center w-full h-full">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-amber-400 border-t-transparent rounded-full animate-spin"></div>
        <h1 className="font-medium text-gray-400">Loading images...</h1>
      </div>
    </div>
  );

  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return (
        <a
          key={elem.id}
          href={elem.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group block w-64 transition-all duration-300 hover:-translate-y-1"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg shadow-black/20 hover:shadow-amber-400/10 transition-all duration-300">
            <div className="h-60 w-64 overflow-hidden relative">
              <img
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                src={elem.download_url}
                alt={elem.author}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="p-3">
              <h3 className="text-sm font-medium text-gray-200 truncate group-hover:text-amber-400 transition-colors duration-300">
                {elem.author}
              </h3>
            </div>
          </div>
        </a>
      );
    });
  }

  return (
    <>
      <div className="bg-gradient-to-br from-black via-gray-900 to-black min-h-screen p-6 text-white">
        <div className="flex flex-wrap justify-center items-start h-[calc(100vh-120px)] gap-6 p-6 overflow-y-auto custom-scrollbar">
          {printUserData}
        </div>
        <div className="flex justify-center items-center gap-6 pt-4 border-t border-white/5">
          <button
            className={`bg-gradient-to-r from-amber-400 to-amber-500 text-black font-semibold 
            text-sm rounded-full py-2.5 px-8 transition-all duration-300 
            ${index > 1 ? "hover:shadow-lg hover:shadow-amber-400/30 hover:scale-105 cursor-pointer" : "opacity-40 cursor-not-allowed"}`}
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
      </div>
    </>
  );
}

export default App;
