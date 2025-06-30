import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Education from "./Education";
import AboutMe from "./AboutMe";
import Skills from "./skill/Skills";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
     
      <div className="w-11/12  mx-auto">
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
