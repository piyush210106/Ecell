import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const handleClick = () => {
    setVisible(!visible);
  };

  return (
    <div
      className={`${
        visible ? "justify-center" : "justify-end"
      } flex sm:justify-end items-center space-x-8  border-b-4 p-4`}
    >
      <NavLink
        to="/home"
        className={({ isActive }) =>
          `${
            isActive ? "text-purple-600 font-bold" : "text-gray-500"
          } hidden sm:block`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `${
            isActive ? "text-purple-600 font-bold" : "text-gray-500"
          } hidden sm:block`
        }
      >
        Grid
      </NavLink>
      <NavLink
        to="https://www.linkedin.com/in/piyush-garg-8733b5319"
        className={({ isActive }) =>
          `${
            isActive ? "text-purple-600 font-bold" : "text-gray-500"
          } hidden sm:block`
        }
      >
        LinkedIn
      </NavLink>
      <button
        className={`w-6 sm:hidden absolute right-6`}
        onClick={handleClick}
      >
        <img src="src/assets/menu.png" alt="" />
      </button>

      <div
        className={`${visible ? "block" : "hidden"} flex flex-col sm:hidden `}
      >
        <NavLink
          to="/home"
          className={({ isActive }) =>
            `${isActive ? "text-purple-600 font-bold" : "text-gray-500"}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${isActive ? "text-purple-600 font-bold" : "text-gray-500"}`
          }
        >
          Grid
        </NavLink>
        <NavLink
          to="https://www.linkedin.com/in/piyush-garg-8733b5319"
          className={({ isActive }) =>
            `${isActive ? "text-purple-600 font-bold" : "text-gray-500"}`
          }
        >
          LinkedIn
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
