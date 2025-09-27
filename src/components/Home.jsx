import { cn } from "../lib/utils";
import React, { useEffect, useRef, useState } from "react";
import Hero from "./Hero";
import AboutMe from "./AboutMe";
import Skill from "./skill/Skills";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";
import Aos from "aos";
export default function index() {
  const boxWrapper = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = React.useState({
    x: null,
    y: null,
  });
  React.useEffect(() => {
    const updateMousePosition = ({ clientX, clientY }) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);
  const [overlayColor, setOverlayColor] = useState({ x: 0, y: 0 });
  const handleMouseMove = ({ currentTarget, clientX, clientY }) => {
    let { left, top } = currentTarget.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;
    setOverlayColor({ x, y });
  };
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <div className="relative  rounded-md">
      <div
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        ref={boxWrapper}
        className={cn(
          "group relative rounded-lg  p-[2px]  overflow-hidden w-full mx-auto"
        )}
      >
        {isHovered && (
          <div
            className="pointer-events-none absolute opacity-0 z-50 rounded-xl w-full h-full group-hover:opacity-100  transition duration-300 "
            style={{
              background: `
            radial-gradient(
              250px circle at ${overlayColor.x}px ${overlayColor.y}px,
              rgba(255, 255, 255, 0.14),
              transparent 80%
            )
          `,
            }}
          />
        )}

        <div
          className="absolute inset-0 z-0  bg-fixed rounded-lg"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, #ffffff6e 0%,transparent 20%,transparent) fixed`,
          }}
        ></div>

        <div className="relative text-center z-10 md:px-8 py-12 pt-6 rounded-lg w-fit  bg-[url('/timeline-grid.png')] bg-cover  h-full mx-auto">
          <div>
            <Hero />
            <AboutMe />
            <Skill />
            <Projects />
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
}
