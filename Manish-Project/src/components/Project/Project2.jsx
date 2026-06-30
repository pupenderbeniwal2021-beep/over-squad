import React, { useState } from "react";
import * as Ic from "lucide-react";
import "./Project.css";

const Project2 = () => {
  // Notes title
  const [title, setTitle] = useState("");
  // Notes details
  const [detail, setDetail] = useState("");
  // Notes Array
  const [task, setTask] = useState([]);

  // submit function
  const submithandle = (e) => {
    e.preventDefault();

    if (title.trim() === "" || detail.trim() === "") {
      alert("Please fill all fields");
      return;
    }

    setTask([...task, { title, detail }]);

    setTitle("");
    setDetail("");
  };

  // Delete Notes
  const deleteNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1);
    setTask(copyTask);
  };

   // Delete All
  const deleteAll = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx


      
    );
    setTask(copyTask);
  };

  return (
    <div className="bg-black h-screen w-full lg:flex text-white overflow-hidden">
      <form
        className="flex flex-col items-start gap-5 lg:w-1/2 p-10 h-full"
        onSubmit={(e) => {
          submithandle(e);
        }}
      >
        <input
          type="text"
          placeholder="Enter Notes Heading"
          className="border-2 outline-none w-full rounded-sm p-2 text-xl bg-[#122]"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        <textarea
          placeholder="Write Details"
          className="border-2 outline-none w-full h-40 rounded-sm p-2 text-xl bg-[#222]"
          value={detail}
          onChange={(e) => {
            setDetail(e.target.value);
          }}
        ></textarea>

        <button className="bg-white active:bg-gray-300 active:scale-95 text-black w-full px-5 py-2 font-bold text-lg rounded-sm">
          Add Notes
        </button>
      </form>

      <div className="lg:w-1/2 lg:border-l-2 p-10 bg-[#333] rightnotes h-full flex flex-col">
        <div className="notesheadsection flex justify-between">
          <h1 className="text-2xl font-bold bg-[#222] w-45 text-center rounded-sm py-1 flex-shrink-0">
            Recents Notes
          </h1>
          <button 
          onClick={() => {
                    deleteAll(idx);
                  }}
          className="text-2xl font-bold bg-red-600 w-45 text-center rounded-sm py-1 flex-shrink-0 cursor-pointer active:bg-red-700 active:scale-95">
            Clear All
          </button>
        </div>
        <div className="flex flex-wrap gap-5 mt-5 flex-1 overflow-y-auto pt-5 pb-5 rightcontent content-start">
          {task.map((elem, idx) => {
            return (
              <div
                key={idx}
                className="relative h-fit w-42 rounded-sm text-black bg-white p-4 flex-shrink-0"
              >
                <h2
                  onClick={() => {
                    deleteNote(idx);
                  }}
                  className="absolute top-[-18px] right-[-12px] bg-red-600 text-white p-1 rounded-full cursor-pointer active:bg-red-700 active:scale-95"
                >
                  <Ic.X className="size-sm" />
                </h2>
                <h3 className="leading-tight text-xl font-bold text-wrap">
                  {elem.title}
                </h3>
                <hr />
                <p className="mt-2 leading-tight font-medium text-wrap text-gray-800">
                  {elem.detail}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Project2;
