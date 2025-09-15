import React, { useEffect } from "react";

import Hero from "./Hero";

import AboutMe from "./AboutMe";
import Skills from "./skill/Skills";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";

import Aos from "aos";
import "aos/dist/aos.css";

import Skill2 from "./skill/Tools";
import Frontend from "./skill/Frontend";

const Home = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <div>
      <div className="max-w-6xl  mx-auto">
        <Hero></Hero>
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
        
        
      </div>
    </div>
  );
};

export default Home;
