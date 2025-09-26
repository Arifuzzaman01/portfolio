import React from "react";
import { IoMoonOutline, IoSunny } from "react-icons/io5";
import logo from "../assets/myLogo.png"
import { NavLink } from "react-router";
import Button from "../lib/utils/Button";

const Navbar = () => {
  const link = (
    <>
      <NavLink className=" font-bold mx-[10px] transition-all duration-100 hover:translate-0.5" to="/">
        Home
      </NavLink>
      <NavLink className=" font-bold mx-[10px] transition-all duration-100 hover:translate-0.5" to="/about">
        About Me
      </NavLink>
      <NavLink className=" font-bold mx-[10px] transition-all duration-100 hover:translate-0.5" to="/skill">
        Skill
      </NavLink>
      <NavLink className=" font-bold mx-[10px] transition-all duration-100 hover:translate-0.5" to="/project">
        Project
      </NavLink>
      <NavLink className=" font-bold mx-[10px] transition-all duration-100 hover:translate-0.5" to="/contact">
        Contact Me
      </NavLink>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm border-b-2 border-[#9112BC] sticky top-0 z-50">
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
        <a className="w-20 h-10">
          <img src={logo} alt="logo" className="w-20 h-auto" />
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
        <a
          href="https://drive.google.com/file/d/1mlJ_ibnzMpAZ1U9hZ-p6B7TET6vEpdh0/view?usp=sharing"
          target="blanc"
        >
          {" "}
          <Button text={"Resume"} />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
