import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [userData, setUserData] = useState([]);
  const getData = async () => {
    const response = await axios.get(
      "https://picsum.photos/v2/list?page=2&limit=20",
    );
    setUserData(response.data);

    console.log(response.data);
  };

  let printUserData = "no data available";

  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return (
        <a href="">
          <div>
            <div className="h-40 w-44 ">
              <img
                className="h-full w-full object-cover"
                src={elem.download_url}
                alt=""
              />
            </div>
            <h3>{elem.author}</h3>
          </div>
        </a>
      );
    });
  }

  return (
    <>
      <div className="bg-black h-screen p-4 text-white">
        <button
          onClick={getData}
          className="bg-green-500 px-10 rounded text-4xl shadow-[0_35px_35px_rgba(0,0,0,0.25)] py-4 active:sa"
        >
          Get Data
        </button>
        <div className="flex flex-wrap gap-5">{printUserData}</div>
      </div>
    </>
  );
}

export default App;
