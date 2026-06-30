import React, { useState } from "react";
import axios from "axios";

const Appio = () => {
   //function get data
        // async function getData(){
        //     const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')

        //     console.log(response)
        //     //data
        //     const data = await response.json();

        //     console.log(data);
        // }

      //======================================================================================
      
      // const getData2 = async ()=>{
      //   const respons = await axios.get('https://jsonplaceholder.typicode.com/users') //you can also use thid method {data}
      //   console.log(respons) //console.log(data)
       
      // }
     
      //======================================================================================
  const [data, setData] = useState([]);

  const getData3 = async () => {
    const response = await axios.get("https://picsum.photos/v2/list");
    setData(response.data);
  };

  return (
    <div>
      <button onClick={getData3}>Get Data</button>

      <hr />

      <div className="gallery">
        {data.map((item) => {
          return (
            <div key={item.id}>
              <img src={item.download_url} alt={item.author} width="200" />
              <h3>{item.author}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Appio;
