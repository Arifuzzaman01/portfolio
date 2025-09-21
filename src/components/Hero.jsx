import React from "react";
import myImg from "../assets/IMG_MY-removebg-preview.png";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import GlareHover from "./glareHover";
import { Typewriter } from "react-simple-typewriter";


const Hero = () => {
  return (
    <div className="md:flex justify-between py-10 space-y-5">
      <div className="flex flex-col flex-1 justify-center items-center md:items-start space-y-5">
        <div>
          <h2 className="text-xl font-bold ml-7 ">Hi There, This is</h2>
          <h1 className="text-3xl md:text-5xl font-bold text-[#98CD00]">
            <Typewriter
              words={["Arifuzzaman Rakib"]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>
        </div>
        <h3 className="font-bold text-2xl">MERN Stack Developer</h3>

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
        <a
          href="https://docs.google.com/document/d/1c6pYt_RhTIi03e8of5fl1xXuYmSkII0RMH23TFjJnTA/edit?usp=drive_link"
          target="blanc"
        >
          <button className="btn btn-primary bg-gray-400 hover:bg-gray-500 hover:text-white px-7 font-bold text-[18px]">
            Resume
          </button>
        </a>
      </div>
      <div className="flex-1 flex md:justify-end items-center justify-center ">
        <div className="bg-gray-400 border-8 border-white rounded-full flex w-88 h-88  md:w-96 md:h-96 justify-center items-center overflow-hidden">
          <GlareHover
            glareColor="#ffffff"
            glareOpacity={0.3}
            glareAngle={-30}
            glareSize={300}
            transitionDuration={800}
            playOnce={false}
          >
            <img
              className="w-full h-full md:h-auto object-cover border-b-4 border-white  rounded-full"
              src={myImg}
              alt="Profile"
            />
          </GlareHover>
        </div>
      </div>
    </div>
  );
};

export default Hero;
