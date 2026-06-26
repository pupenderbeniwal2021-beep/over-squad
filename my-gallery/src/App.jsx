import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

import Gallery from "./components/Gallery";
import Pagination from "./components/Pagination";

function App() {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);

  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=10`,
    );

    setUserData(response.data);
  };

  useEffect(() => {
    getData();
  }, [index]);

  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-black min-h-screen p-6 text-white">
      <div className="flex flex-wrap justify-center items-start h-[calc(100vh-120px)] gap-6 p-6 overflow-y-auto custom-scrollbar">
        <Gallery userData={userData} />
      </div>

      <Pagination index={index} setIndex={setIndex} setUserData={setUserData} />
    </div>
  );
}

export default App;
