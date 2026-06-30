import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="bg-cyan-600 flex justify-between items-center   text-white py-4 px-8">
        <h1 className="font-bold text-2xl">JaatJi</h1>
        <div className="flex gap-5 text-lg font-semibold">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/product">Product</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
