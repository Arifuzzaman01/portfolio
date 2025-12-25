import React from "react";
import GlareHover from "./glareHover";
import myImage from "../assets/me_2.png"

const AboutMe = () => {

  return (
    <GlareHover
      glareColor="#ffffff"
      glareOpacity={0.3}
      glareAngle={-30}
      glareSize={300}
      transitionDuration={800}
      playOnce={false}
    >
      <div className="grid md:grid-cols-3 items-center gap-5 my-8">
        <div className=" hidden md:block col-span-1 animate-border gradient-border">
          <div className=" z-0 overflow-hidden relative">
            <img src={myImage} alt="My Image" className="w-full h-full object-cover z-0 mb-12" />
            <div style={{
              background: "linear-gradient(45deg, #031510, #04225c 50%, #142f6b) padding-box ",
              borderRadius: "0 100px 0px 20px"
            }} className="absolute bottom-0 h-16 md:w-[90%]  -mt-2 w-[86%] border-r-8 border-gray-200 flex justify-center items-center z-50 overflow-auto">
              <h2 className="text-center text-xl font-semibold">Building the fast, modern web</h2>
            </div>
          </div>

        </div>
        <div className="mx-auto text-center md:text-start p-5 col-span-2">
          <h2 className="text-3xl text-center  font-bold   mb-4">
            About Me
          </h2>

          <p className=" text-lg leading-relaxed">
            Hello! I'm{" "}
            <span className="font-semibold text-[var(--color-primary)] ">
              Md Arifuzzaman Rakib
            </span>
            , a passionate front-end web developer from Bangladesh. My journey
            into programming started from pure curiosity and turned into a
            strong career goal. I began by building small websites and learning
            JavaScript, and over time, I dove deep into React, Node.js, MongoDB,
            and Express.
          </p>

          <p className="mt-4  text-lg leading-relaxed">
            I truly enjoy creating clean, user-friendly interfaces and building
            functional, scalable backend systems. I get excited solving real-world
            problems through code. Currently, I'm also exploring Firebase,
            MongoDB, authentication and authorization systems.
          </p>

          <p className="mt-4  text-lg leading-relaxed">
            Apart from programming, I love playing football, watching tech
            documentaries, and swimming from time to time. I believe in continuous
            learning and enjoy working on team projects where collaboration and
            creativity thrive.
          </p>

          <p className="mt-4  text-lg leading-relaxed">
            I'm always open to new challenges, whether it’s building a full-stack
            app or trying out a new tech stack. Let’s connect and create something
            amazing together!
          </p>
        </div>
      </div>

    </GlareHover>
  );
};

export default AboutMe;
