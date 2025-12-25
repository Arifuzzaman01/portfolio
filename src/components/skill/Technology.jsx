import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTailwindcss,

  SiNextdotjs,
  SiFirebase,
  SiAxios,
  SiStripe,
  SiExpress,
  SiMongodb,
  SiNodemon,
  SiJsonwebtokens,
  SiRedux,
  SiTypescript,
  SiMongoose,
} from "react-icons/si";


import React, { useEffect, useState } from "react";
import Tools from "./Tools";
import { TbBrandJavascript, TbBrandOauth } from "react-icons/tb";
export default function Technology() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("/skill.json")
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
    SiTypescript: SiTypescript,
    SiNextdotjs: SiNextdotjs,
    SiFirebase: SiFirebase,
    SiAxios: SiAxios,
    SiStripe: SiStripe,
    SiExpress: SiExpress,
    SiMongodb: SiMongodb,
    SiNodemon: SiNodemon,
    SiJsonwebtokens: SiJsonwebtokens,
    TbBrandOauth: TbBrandOauth,
    TbBrandJavascript: TbBrandJavascript,
    SiRedux: SiRedux,
    SiMongoose: SiMongoose,
  };
  const iconVariants = {
    hover: {
      rotate: [0, -15, 15, -15, 15, 0],
      transition: { duration: 0.4 },
    },
  };

  return (
    <div className="relative  p-2 rounded-md">
      <div className="md:grid grid-cols-2 md:gap-5 ">
        <div>
          <h1 className="text-center text-3xl font-bold text-[var(--color-primary)]">
            Frontend
          </h1>
          <div className="relative text-center z-10  py-12 pt-6 rounded-lg w-fit  bg-[url('/timeline-grid.png')] bg-cover   h-full mx-auto flex flex-wrap gap-3 justify-center md:justify-start">
            {skills &&
              skills.frontend &&
              skills.frontend.map((skill) => {
                const IconComponent = iconMap[skill.icon];
                return (
                  <motion.div
                    key={skill.id}
                    className="animate-border gradient-border border-1 rounded-[8px] p-2 flex items-center gap-2 hover:scale-105 transition-all duration-200 h-fit"
                    whileHover="hover"
                  >
                    {IconComponent && (
                      <motion.div variants={iconVariants}>
                        <IconComponent className="text-3xl text-[var(--color-primary)]" />
                      </motion.div>
                    )}
                    <h4>{skill.title}</h4>
                  </motion.div>
                );
              })}
          </div>
        </div>
        <div>
          <h1 className="text-center text-3xl font-bold text-[var(--color-primary)]">
            Backend
          </h1>
          <div className="relative text-center z-10  py-12 pt-6 rounded-lg w-fit  bg-[url('/timeline-grid.png')] bg-cover mx-auto flex flex-wrap gap-4 justify-center md:justify-start">
            {skills &&
              skills.frontend &&
              skills.backend.map((skill) => {
                const IconComponent = iconMap[skill.icon];
                return (
                  <motion.div
                    key={skill.id}
                    className="animate-border gradient-border border-1 rounded-[8px] p-2 flex items-center gap-3 hover:scale-105 transition-all duration-200 h-fit"
                    whileHover="hover"
                  >
                    {IconComponent && (
                      <motion.div variants={iconVariants}>
                        <IconComponent className="text-3xl text-[var(--color-primary)]" />
                      </motion.div>
                    )}
                    <h4>{skill.title}</h4>
                  </motion.div>
                );
              })}
          </div>
        </div>
        <div className="col-span-2 md:w-3/4 mx-auto my-5 ">
          <Tools iconVariants={iconVariants} />
        </div>
      </div>
    </div>
  );
}
