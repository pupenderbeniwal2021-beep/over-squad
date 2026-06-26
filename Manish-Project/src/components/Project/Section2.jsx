import React, { useState } from "react";
import * as Ic from "lucide-react";
import  "./Project.css";

const Section2 = (props) => {
  return (
      <div className="h-full w-80 relative rounded-4xl overflow-hidden shrink-0">
        <img
          className="h-full w-full object-cover"
          src={props.img}
          alt=""
        />
        <div className="absolute top-0 left-0 h-full w-full p-5 flex flex-col justify-between">
          <h2 className="bg-white text-3xl font-semibold rounded-full h-12 w-12 flex justify-center items-center">
            {props.id+1}
          </h2>
          <div>
            <p className="text-lg text-shadow-2xs leading-normal mb-5 text-gray-100 text-sm text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              veniam cumque ipsum consequuntur nemo repudiandae?
            </p>
            <div className="flex justify-between">
              <button style={{backgroundColor:props.color}} className=" text-white text-lg font-semibold px-6 py-2 rounded-full">
                {props.tag}
              </button>
              <button style={{backgroundColor:props.color}} className=" text-white px-2 py-2 rounded-full">
                <Ic.ArrowRight className="w-7 h-7" />
              </button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Section2;
