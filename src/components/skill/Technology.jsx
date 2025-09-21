import { cn } from "../../lib/utils";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiDaisyui,
  SiNextdotjs,
  SiFirebase,
  SiAxios,
  SiStripe,
  SiExpress,
  SiMongodb,
  SiNodemon,
  SiJsonwebtokens,
} from "react-icons/si";
import { motion } from "framer-motion";

import React, { useEffect, useRef, useState } from "react";
import Tools from "./Tools";
import { TbBrandOauth } from "react-icons/tb";
export default function Technology() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("/skill.json") // public ফোল্ডারে রাখো
      .then((res) => res.json())
      .then((data) => setSkills(data));
  }, []);
  const iconMap = {
    FaHtml5: FaHtml5,
    FaCss3Alt: FaCss3Alt,
    FaBootstrap: FaBootstrap,
    FaReact: FaReact,
    FaNodeJs: FaNodeJs,
    SiTailwindcss: SiTailwindcss,
    SiDaisyui: SiDaisyui,
    SiNextdotjs: SiNextdotjs,
    SiFirebase: SiFirebase,
    SiAxios: SiAxios,
    SiStripe: SiStripe,
    SiExpress: SiExpress,
    SiMongodb: SiMongodb,
    SiNodemon: SiNodemon,
    SiJsonwebtokens: SiJsonwebtokens,
    TbBrandOauth: TbBrandOauth
  };
  const iconVariants = {
    hover: {
      rotate: [0, -15, 15, -15, 15, 0],
      transition: { duration: 0.4 },
    },
  };
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
  return (
    <div className="relative  p-2 rounded-md">
      <div
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        ref={boxWrapper}
        className={cn(
          "group relative rounded-lg  p-[2px]  overflow-hidden w-fit mx-auto"
        )}
      >
        {isHovered && (
          <div
            className="pointer-events-none absolute opacity-0 z-50 rounded-xl w-full h-full group-hover:opacity-100  transition duration-300 "
            style={{
              background: `
            radial-gradient(
              250px circle at ${overlayColor.x}px ${overlayColor.y}px,
              rgba(255, 255, 255, 0.137),
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

        <div className="md:grid grid-cols-2">
          <div>
            <h1 className="text-center text-3xl font-bold color-primary">
              Frontend
            </h1>
            <div className="relative text-center z-10 px-8 py-12 pt-6 rounded-lg w-fit  bg-[url('/timeline-grid.png')] bg-cover   h-full mx-auto flex flex-wrap gap-4">
              {skills &&
                skills.frontend &&
                skills.frontend.map((skill) => {
                  const IconComponent = iconMap[skill.icon]; // get actual component
                  return (
                    <motion.div
                      key={skill.id}
                      className="border-1 rounded-[8px] p-5 flex items-center gap-3 hover:scale-105 transition-all duration-200"
                      whileHover="hover"
                    >
                      {IconComponent && (
                        <motion.div variants={iconVariants}>
                          <IconComponent className="text-3xl color-primary" />
                        </motion.div>
                      )}
                      <h4>{skill.title}</h4>
                    </motion.div>
                  );
                })}
            </div>
          </div>
          <div>
            <h1 className="text-center text-3xl font-bold color-primary">
             Backend
            </h1>
            <div className="relative text-center z-10 px-8 py-12 pt-6 rounded-lg w-fit  bg-[url('/timeline-grid.png')] bg-cover    mx-auto flex flex-wrap gap-4">
              {skills &&
                skills.frontend &&
                skills.backend.map((skill) => {
                  const IconComponent = iconMap[skill.icon]; // get actual component
                  return (
                    <motion.div
                      key={skill.id}
                      className="border-1 rounded-[8px] p-5 flex items-center gap-3 hover:scale-105 transition-all duration-200 h-fit"
                      whileHover="hover"
                    >
                      {IconComponent && (
                        <motion.div variants={iconVariants}>
                          <IconComponent className="text-3xl color-primary" />
                        </motion.div>
                      )}
                      <h4>{skill.title}</h4>
                    </motion.div>
                  );
                })}
            </div>
          </div>
          <div className="col-span-2 w-3/4 mx-auto my-5 ">
            <Tools iconVariants={iconVariants} />
          </div>
        </div>
      </div>
    </div>
  );
}
