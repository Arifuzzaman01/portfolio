import React from "react";
import GlareHover from "./glareHover";

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
      
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            About Me
          </h2>

          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            Hello! I'm{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              Md Arifuzzaman Rakib
            </span>
            , a passionate front-end web developer from Bangladesh. My journey
            into programming started from pure curiosity and turned into a
            strong career goal. I began by building small websites and learning
            JavaScript, and over time, I dove deep into React, Node.js, MongoDB,
            and Express.
          </p>

          <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            I truly enjoy creating clean, user-friendly interfaces and building
            functional, scalable backend systems. I get excited solving real-world
            problems through code. Currently, I'm also exploring Firebase,
            MongoDB, authentication and authorization systems.
          </p>

          <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            Apart from programming, I love playing football, watching tech
            documentaries, and swimming from time to time. I believe in continuous
            learning and enjoy working on team projects where collaboration and
            creativity thrive.
          </p>

          <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            I'm always open to new challenges, whether it’s building a full-stack
            app or trying out a new tech stack. Let’s connect and create something
            amazing together!
          </p>
        </div>
      
    </GlareHover>
  );
};

export default AboutMe;
