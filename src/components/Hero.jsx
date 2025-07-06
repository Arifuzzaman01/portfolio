import React from "react";
import myImg from "../assets/IMG_MY-removebg-preview.png";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import GlareHover from "./glareHover";

const Hero = () => {
  return (
    <div className="md:flex justify-between min-h-[80vh] space-y-5">
      <div className="flex flex-col flex-1 justify-center items-center md:items-start space-y-5">
        <div>
          <h2 className="text-xl font-bold ml-10 ">Hi There, This is</h2>
          <h1 className="text-3xl md:text-5xl font-bold text-[#98CD00]">
            Arifuzzaman Rakib
          </h1>
        </div>
        <h3 className="font-bold text-xl">FrontEnd Web Developer</h3>

        <p className="font-semibold text-justify">
          Hello! I am from Bangladesh , I can make and design the real-of-way
          website. Each website is the user friendly which can easily use to
          user.{" "}
        </p>
        <div className="flex gap-3">
          <a href="https://github.com/arifuzzaman01" target="blanc">
            <FaGithub size={35} />
          </a>
          <a
            href="https://www.linkedin.com/in/arifuzzaman-rakib-32734a291/"
            target="blanc"
          >
            {" "}
            <FaLinkedin size={35} />
          </a>
          <a
            href="https://web.facebook.com/arifuzzaman.arif.98096721/?_rdc=2&_rdr#"
            target="blanc"
          >
            <FaFacebook size={35} />
          </a>
        </div>
        <a href="https://drive.google.com/file/d/1TVepQSsRIm0W3COVIa5YEOGJrIJCzpzP/view?usp=sharing" target="blanc">
          <button className="btn btn-primary bg-[#98CD00] hover:bg-green-500 px-7 font-bold text-[18px]">
            Resume
          </button>
        </a>
      </div>
      <div className="flex-1 flex md:justify-end items-center justify-center ">
        <GlareHover
          glareColor="#ffffff"
          glareOpacity={0.3}
          glareAngle={-30}
          glareSize={300}
          transitionDuration={800}
          playOnce={false}
        >
          <div className="bg-[#98CD00] border-4 border-white rounded-full flex  md:w-96 md:h-96 justify-center items-center overflow-hidden">
            <img
              className="w-full h-full object-cover rounded-full"
              src={myImg}
              alt="Profile"
            />
          </div>
        </GlareHover>
      </div>
    </div>
  );
};

export default Hero;
