import React from "react";
import * as Ic from "lucide-react";
import Section2 from "./Section2";

const Project = (props) => {
  return (
    <div className="bg-white text-black min-h-screen w-full">
{/* =============================================================================================== */}
        <nav className="flex items-center justify-between py-8 px-10">
          <h4 className="bg-black text-white px-5 py-3 rounded-full text-sm">
            Target Audience
          </h4>
          <button className="bg-gray-200 px-6 py-2 uppercase rounded-full tracking-widest text-sm">
            Digital Banking Platform
          </button>
        </nav>
{/* ============================================================================================== */}
        <div className="h-[85vh] flex gap-10 px-10 pb-10">
          <section className="w-1/3 flex flex-col justify-between">
          <div>
          <h3 className="text-6xl font-bold leading-tight mb-7">
            Prospective <br />
            <span className="text-gray-500">Customer</span> <br />
            Segmentation
          </h3>
          <p className="text-lg text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          </div>
          <Ic.ArrowUpRight className="size-20" />
        </section>
{/* ============================================================================================== */}
        <section id="mainright" className="w-2/3 h-full p-1 flex flex-nowrap gap-10 overflow-x-auto">
          {props.users.map(function(elem,idx){
            return <Section2 key={idx} id={idx} img={elem.img} color={elem.color} tag={elem.tag}/>
          })}
        </section>
{/* ============================================================================================== */}
      </div>

    </div>
  );
};

export default Project;
