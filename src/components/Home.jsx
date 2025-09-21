import React, { useEffect } from "react";
import Hero from "./Hero";
import Skills from "./skill/Skills";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";
import Aos from "aos";
import "aos/dist/aos.css";
import GradientBorder from "./GradientBorder";
import Button from "../lib/utils/Button";

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
        <GradientBorder />
        <Skills />
        <Projects />
        <Contact />
        
      </div>
    </div>
  );
};

export default Home;
