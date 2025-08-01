import React from "react";
import { IoMoonOutline, IoSunny } from "react-icons/io5";

import { NavLink } from "react-router";

const Navbar = () => {
  const link = (
    <>
      <NavLink className=" font-bold mx-2" to="/">
        Home
      </NavLink>
      <NavLink className=" font-bold mx-2" to="/about">
        About Me
      </NavLink>
      <NavLink className=" font-bold mx-2" to="/skill">
        Skill
      </NavLink>
      <NavLink className=" font-bold mx-2" to="/project">
        Project
      </NavLink>
      <NavLink className=" font-bold mx-2" to="/contact">
        Contact Me
      </NavLink>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm border-b-2 border-green-500 sticky top-0 z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {link}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl text-[#98CD00]">
          <span className="hidden md:block -mr-[6px] text-green-600">Arif</span>{" "}
          <span className="hidden md:block">uzzaman</span>{" "}
          <span className="md:hidden">AR</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{link}</ul>
      </div>
      <div className="navbar-end">
        <label className="swap swap-rotate mr-3">
          {/* this hidden checkbox controls the state */}
          <input
            type="checkbox"
            className="theme-controller"
            value="lemonade"
          />

          {/* sun icon */}
          <IoSunny size={24} className="swap-off fill-current" />

          {/* moon icon */}
          <IoMoonOutline size={24} className="swap-on  fill-current" />
        </label>
        <a href="https://docs.google.com/document/d/1c6pYt_RhTIi03e8of5fl1xXuYmSkII0RMH23TFjJnTA/edit?usp=drive_link">
          {" "}
          <button className="btn btn-primary bg-[#98CD00] hover:bg-green-500 px-4 font-bold text-[18px]">
            Resume
          </button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
