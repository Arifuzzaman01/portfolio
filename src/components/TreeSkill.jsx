import React from "react";

const skills = {
  Frontend: ["HTML", "CSS", "JavaScript", "React", "TailwindCSS"],
  Backend: ["Node.js", "Express.js", "MongoDB", "Firebase"],
  Tools: ["GitHub", "VS Code", "Postman", "Figma"],
  DevOps: ["Netlify", "Vercel", "Render"],
};

const TreeSkill = () => {
  return (
    <div className="grid  md:grid-cols-2 gap-10 justify-items-center my-12">
      <div className=" border rounded-full p-14">
        <div className="border-2 p-12 md:p-16  shadow-2xl shadow-gray-400 rounded-full rotate-180 md:-rotate-90 w-60 h-60  md:w-76 md:h-76">
          <div className="border bg-gray-200 p-14 md:p-16  shadow-2xl rounded-full w-full h-full">
            <div className="border  md:p-16  shadow-2xl  rounded-full w-full h-full bg-gradient-to-tl from-white to-gray-200">
              <div
                className="border-2 bg-white p-14 rounded-full w-full h-full flex justify-center items-center "
                style={{
                  boxShadow: "0 -4px 10px rgba(0, 0, 0, 0.35)",
                }}
              >
                <h3 className="rotate-180 md:rotate-90">Frontend</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border rounded-full p-14">
        <div className="border-2 p-12  md:p-16  shadow-2xl shadow-gray-400 rounded-full -rotate-90 md:rotate-45  w-60 h-60  md:w-76 md:h-76 ">
          <div className="border-2 bg-gray-200 p-14 md:p-16 shadow-2xl rounded-full w-full h-full">
            <div className="border p-6 md:p-16  shadow-2xl  rounded-full w-full h-full bg-gradient-to-tl from-white to-gray-200">
              {" "}
              Backend
              <div
                className="border bg-white p-14 rounded-full w-full h-full flex justify-center items-center "
                style={{
                  boxShadow: "0 -4px 10px rgba(0, 0, 0, 0.35)",
                }}
              >
                <h3 className=" rotate-90 md:-rotate-45">Backend</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border rounded-full p-14 md:col-span-2">
        <div className="border-2 p-12 md:p-16  shadow-2xl shadow-gray-400 rounded-full rotate-180 md:rotate-[150deg] w-60 h-60  md:w-76 md:h-76 ">
          <div className="border-2 bg-gray-200 p-14 md:p-16  shadow-2xl rounded-full w-full h-full">
            <div className="border md:p-16  shadow-2xl  rounded-full w-full h-full bg-gradient-to-tl from-white to-gray-200">
              <div
                className="border bg-white p-14 rounded-full w-full h-full flex justify-center items-center "
                style={{
                  boxShadow: "0 -4px 10px rgba(0, 0, 0, 0.35)",
                }}
              >
                <h3 className="rotate-180 md:-rotate-[150deg]">Tools</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreeSkill;
