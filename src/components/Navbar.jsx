import React from "react";
import { IoMoonOutline, IoSunny } from "react-icons/io5";
import logo from "../assets/nameLogo.png";
import { Link } from "react-scroll";
import Button from "../lib/utils/Button";
// import { ScrollLink } from "react-scroll";

const Navbar = () => {
  const link = (
    <>
      <Link
        className="font-bold mx-[10px] cursor-pointer transition-all duration-200 hover:scale-105"
        to="home"
        smooth={true}
        spy={true}
        duration={500}
        offset={-70}
      >
        Home
      </Link>

      <Link
        activeClass="active"  className="font-bold mx-[10px] cursor-pointer transition-all duration-200 hover:scale-105"
        to="about"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        About Me
      </Link>

      <Link
        activeClass="active"  className="font-bold mx-[10px] cursor-pointer transition-all duration-200 hover:scale-105"
        to="skill"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        Skill
      </Link>

      <Link
        activeClass="active"  className="font-bold mx-[10px] cursor-pointer transition-all duration-200 hover:scale-105"
        to="project"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        Project
      </Link>
     <Link
        activeClass="active"  className="font-bold mx-[10px] cursor-pointer transition-all duration-200 hover:scale-105"
        to="education"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        Education
      </Link>

      <Link
        activeClass="active"  className="font-bold mx-[10px] cursor-pointer transition-all duration-200 hover:scale-105"
        to="contact"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        Contact
      </Link>
    </>
  );
  return (
    <nav className="navbar bg-base-100/70 shadow-sm border-b-2 border-green-200/90  sticky top-0 z-50 backdrop-blur-md ">
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
          <img src={logo} alt="logo" className="w-18 h-auto" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{link} </ul>
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
          href="https://drive.google.com/file/d/1BqmWrBsBjF_8-qBCDYNmaxS7v4NYkDcl/view?usp=sharing"
          target="blanc"
        >
          {" "}
          <Button text={"Resume"} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
