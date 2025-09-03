import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Education from "./Education";
import AboutMe from "./AboutMe";
import Skills from "./skill/Skills";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";
import Footer from "./Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import TreeSkill from "./TreeSkill";

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
        <TreeSkill />
      </div>
    </div>
  );
};

export default Home;
