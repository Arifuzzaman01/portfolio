import React from "react";

const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML", level: 95 },
      { name: "CSS & Tailwind", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "React", level: 80 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 30 },
      { name: "Express.js", level: 35 },
      { name: "MongoDB", level: 40 },
      { name: "Firebase Auth", level: 65 },
    ],
  },
  {
    category: "Tools & Others",
    skills: [
      { name: "Git & GitHub", level: 75 },
      { name: "VS Code", level: 90 },
      { name: "Figma", level: 70 },
      { name: "Netlify / Vercel / Firebase", level: 70 },
    ],
  },
];

const Skills = () => {
  const mainCategories = skillsData.filter(cat => cat.category !== "Tools & Others");
  const toolsCategory = skillsData.find(cat => cat.category === "Tools & Others");

  return (
    <section className="bg-white py-5 md:py-10   ">
      <div className=" text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Skills</h2>
      </div>

      {/* Frontend & Backend */}
      <div className=" mx-auto grid gap-10 md:grid-cols-2">
        {mainCategories.map((category) => (
          <div key={category.category}>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              {category.category}
            </h3>
            <div className="space-y-4">
              {category.skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 font-medium">{skill.name}</span>
                    <span className="text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-[#98CD00] h-2.5 rounded-full transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Tools & Others full width */}
      {toolsCategory && (
        <div className="max-w-6xl mx-auto mt-16">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">
            {toolsCategory.category}
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {toolsCategory.skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700 font-medium">{skill.name}</span>
                  <span className="text-gray-500">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-[#98CD00] h-2.5 rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Skills;
