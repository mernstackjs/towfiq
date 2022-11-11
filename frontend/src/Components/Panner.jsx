import React from "react";
import läxhjalp from "../images/laxhjalp.png";

const Panner = () => {
  return (
    <div className="w-full h-[301px] bg-gray-900 flex flex-col justify-between">
      <div className="grid md:grid-cols-2 max-w[1249px] m-auto">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-8 text-white">
          <h1 className="py-3 text-5xl md:text-7xl font-bold uppercase">
            läxhjalp för all ämnen och åldrar
          </h1>
        </div>
        <div>
          <img className="w-full hidden md:flex" src={läxhjalp} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Panner;
