import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [visible, setVisible] = useState(false);
  const handleClick = () => {
    setVisible(!visible);
  };
  return (
    <div className='flex justify-center items-center bg-[url("..\src\assets\squid-game-background-uj6jso2bl26egojp.jpg")] w-full h-[91vh] bg-cover overflow-hidden bg-no-repeat'>
      <div
        className={`${
          visible ? "hidden" : "block"
        } space-y-4 w-40% flex flex-col justify-center items-center text-xl bg-pink-700 h-32 p-4 rounded-lg text-white font-bold`}
      >
        <button
          onClick={handleClick}
          className="border-4 p-2 rounded-md hover:scale-110 transition-all duration-200"
        >
          ◯△▢
        </button>
        <p>Click Here to reveal the Winner!!!</p>
      </div>
      <div
        className={`${
          visible ? "block" : "hidden"
        } w-[30%] flex flex-col space-y-2 justify-center items-center h-[80%] border-3 border-white p-0.5 bg-white`}
      >
        <div className="h-[30%] w-full flex bg-pink-700 text-white font-extrabold justify-center items-center text-8xl">
          001
        </div>
        <div className="h-[30%] justify-center ">
          <img src="..\src\assets\photo.jpg" alt="" className="w-[6rem]" />
        </div>
        <div className="h-[40%] w-full bg-pink-700 p-3 space-y-2 text-2xl font-extrabold flex flex-col justify-center items-center text-white">
          <h1>Piyush Garg</h1>
          <p>20243201</p>
          <NavLink to="https://www.instagram.com/piyush_2101/?hl=en">
            <img
              src="src/assets/instagram-icon.svg"
              alt=""
              className="w-10 bg-white rounded-lg"
            />
          </NavLink>
          <button onClick={handleClick} className="border-2 border-white p-1">
            ◯△▢
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
