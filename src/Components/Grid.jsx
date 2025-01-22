import React, { useState } from "react";

const grid = () => {
  let [colors, setColors] = useState(Array(9).fill("blue"));
  const changeColor = (index) => {
    if (index === 8) {
      setColors((prevColors) =>
        prevColors.map((color, i) => (color === "red" ? "blue" : color))
      );
    } else {
      setColors((prevColors) =>
        prevColors.map((color, i) =>
          i === index ? (color === "blue" ? "red" : "blue") : color
        )
      );
    }
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 m-6 ">
      <div className="order-3 sm:order-1 sm:col-span-2 md:col-span-1 bg-gradient-to-br from-blue-800 to-pink-500 border-2 h-64 rounded-xl border-black "></div>
      <div className='order-2 sm:order-2 bg-[url("/assets/download.jpeg")] bg-contain bg-no-repeat bg-center h-64 w-full border-black rounded-xl border-2'></div>
      <div className="order-1 sm:order-3 grid grid-cols-3 grid-rows-3 h-64 gap-4 border-2 p-4 shadow-inner bg-gray-300 rounded-xl border-black">
        {colors.map((color, index) => (
          <div
            key={index}
            style={{ backgroundColor: color }}
            onClick={() => changeColor(index)}
            className="cursor-pointer rounded-xl hover:scale-110 transition-all duration-200"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default grid;
