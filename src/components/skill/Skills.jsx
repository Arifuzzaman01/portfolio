import React from "react";
import {
  FaFigma,
  FaGithub,
  FaHtml5,
  FaNodeJs,
  FaReact,
  FaTools,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiFirebaseFill, RiTailwindCssLine } from "react-icons/ri";
import { SiExpress, SiMongodb } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML", level: 95, icon: <FaHtml5 size={24} /> },
      {
        name: "CSS & Tailwind",
        level: 90,
        icon: <RiTailwindCssLine size={24} />,
      },
      { name: "JavaScript", level: 85, icon: <IoLogoJavascript size={24} /> },
      { name: "React", level: 80, icon: <FaReact size={24} /> },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 30, icon: <FaNodeJs size={24} /> },
      { name: "Express.js", level: 35, icon: <SiExpress size={24} /> },
      { name: "MongoDB", level: 40, icon: <SiMongodb size={24} /> },
      { name: "Firebase Auth", level: 65, icon: <RiFirebaseFill size={24} /> },
    ],
  },
  {
    category: "Tools & Others",
    skills: [
      { name: "Git & GitHub", level: 75, icon: <FaGithub /> },
      { name: "VS Code", level: 90, icon: <VscVscode /> },
      { name: "Figma", level: 70, icon: <FaFigma /> },
      { name: "Netlify / Vercel / Firebase", level: 70, icon: <FaTools /> },
    ],
  },
];

const Skills = () => {
  const mainCategories = skillsData.filter(
    (cat) => cat.category !== "Tools & Others"
  );
  const toolsCategory = skillsData.find(
    (cat) => cat.category === "Tools & Others"
  );

  return (
    <section className=" py-5 md:py-10  my-8 ">
      <div className=" text-center">
        <h2 className="text-3xl font-bold  mb-8 ">Skills</h2>
      </div>

      {/* Frontend & Backend */}
      <div className=" mx-auto grid gap-10 md:grid-cols-2">
        {mainCategories.map((category) => (
          <div key={category.category}>
            <h3 className="text-xl font-semibold  mb-4">{category.category}</h3>
            <div className="space-y-4">
              {category.skills.map((skill) => (
                <div key={skill.name} className="flex">
                  <div className="p-4 rounded-full mr-8 border border-wh shadow-md">
                    {skill.icon}
                  </div>
                  <div className="flex-4">
                    <div className="flex justify-between mb-1">
                      <span className=" font-medium">{skill.name}</span>
                      <span className="">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-green-500 h-2.5 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Tools & Others full width */}
      {toolsCategory && (
        <div className="">
          <h3 className="text-xl font-semibold  mt-6 text-center">
            {toolsCategory.category}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4">
            {toolsCategory.skills.map((skill) => {
              const radius = 45;
              const stroke = 8;
              const normalizedRadius = radius - stroke * 2;
              const circumference = normalizedRadius * 2 * Math.PI;
              const offset =
                circumference - (skill.level / 100) * circumference;

              return (
                <div
                  key={skill.name}
                  className="flex flex-col md:flex-row-reverse items-center justify-center space-y-3"
                >
                  {/* SVG Circular Progress */}
                  <div className="relative w-24 h-24 shadow-md rounded-full">
                    <svg width="100" height="100">
                      <circle
                        stroke="#e5e7eb"
                        fill="transparent"
                        strokeWidth={stroke}
                        r={normalizedRadius}
                        cx="50"
                        cy="50"
                      />
                      <circle
                        stroke="#98CD00"
                        fill="transparent"
                        strokeWidth={stroke}
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        strokeLinecap="round"
                        cx="50"
                        cy="50"
                        r={normalizedRadius}
                        style={{ transition: "stroke-dashoffset 1s ease" }}
                      />
                    </svg>

                    {/* Icon in center */}
                    <div className="absolute inset-0 flex items-center justify-center text-2xl text-gray-500">
                      {skill.icon}
                    </div>
                  </div>

                  {/* Skill Info */}
                  <div className="text-center">
                    <p className="font-semibold ">{skill.name}</p>
                    <p className="text-sm ">{skill.level}%</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
};

export default Skills;
