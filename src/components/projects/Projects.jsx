import React, { useState } from "react";
import athletic from "../../assets/athletic-overview.PNG";
import agriSmart from "../../assets/agriSmart2.PNG";
import studyPanel from "../../assets/studyPannel.jpg";
import Button from "../../lib/utils/Button";

const projects = [
  {
    id: 3,
    name: "AgriSmart",
    image: agriSmart,
    subTitle:
      "AgriSmart is a smart digital platform designed for Bangladeshi farmers to access real-time weather updates, expert advice, and modern farming insights—all in one place to improve productivity and decision-making.",
    stack: ["Next.JS", "Express", "MongoDB","Mongoose","Socket.IO", "NextAuth", "Tailwind"],
    description:
      "AgriSmart: A Smart Agriculture Platform for Bangladeshi Farmers. Many farmers in Bangladesh struggle with limited access to reliable information, weather forecasts, and expert advice. AgriSmart aims to solve these challenges through a single smart digital platform that provides real-time updates, expert consultations, and modern farming insights — helping farmers make better decisions, increase productivity, and ensure sustainable growth.",
    live: "https://agri-smart-silk.vercel.app/",
    githubClient: "#",
    githubServer: "#",
    challenges: "During development, we faced challenges in team management, project planning, and maintaining smooth coordination among members. Despite these hurdles, we successfully built the initial version of AgriSmart.",
    improvements: "In the future, we plan to enhance the platform by adding AI-based crop recommendation, real-time weather notifications, and personalized farming tips to make AgriSmart smarter and more useful for farmers across Bangladesh.",
  },
  {
    id: 1,
    name: "Study Panel ",
    status: "running project, no live link",
    image: studyPanel,
    subTitle:
      "Collaborative Study Platform with role-based dashboards for students, tutors, and admins. Features include session booking, Stripe payments, reviews, notes, and study material management with secure JWT authentication.",
    stack: [
      "React",
      "Node.js",
      "MongoDB",
      "Firebase",
      "express",
      "IWT",
      "TanstackQuery",
      "React-hook-form",
      "TailwindCss",
    ],
    description:
      "This project is a Collaborative Study Platform built with the MERN stack. It allows students to book study sessions, tutors to create and manage sessions, and admins to oversee the platform. Key features include session booking, role-based dashboards, Stripe payment integration, review & rating system, personal notes, and study material management. The system ensures secure authentication with Firebase and JWT, while data is efficiently handled using MongoDB and React Query for real-time updates.",
    live: "https://learn-hub-ec1a2.web.app/",
    githubClient: "https://github.com/Arifuzzaman01/easy-buy-client",
    githubServer: "https://github.com/Arifuzzaman01/easy-buy-server",
    challenges:
      "Protected routes, admin logic, dashboard UI control,user Role, mongodb aggregation etc.",
    improvements:
      " There will be all kinds of features, adding real-time communication,  and analytics dashboard.",
  },

  {
    id: 2,
    name: "Athletic Event Booking",
    image: athletic,
    subTitle:
      "The Athletic Event Booking Platform is a full-stack web application designed to connect athletes and sports enthusiasts with local athletic events.",
    stack: [
      "React",
      "Firebase",
      "Tailwind",
      "daisyUi",
      "express",
      "JWT",
      "Mongodb",
      "Node.js",
    ],
    description:
      "The Athletic Event Booking Platform is a full-stack web application designed to connect athletes and sports enthusiasts with local athletic events. It allows users to browse events, book spots, manage their bookings, and review event details. Admins can create, update, and delete events, making it easy to organize athletic competitions. ",
    live: "https://simple-firebase-auth-e8c44.web.app",
    githubClient: "https://github.com/Arifuzzaman01/athletic-hub-client",
    githubServer: "https://github.com/Arifuzzaman01/athletic-hub-server",
    challenges:
      " JWT was most challenging because I implement this first time.",
    improvements: "Payment gateway, event reminders.",
  },
  
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  return (
    <section className="   rounded-xl ">
      <div className=" mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold">My Projects</h2>
      </div>

      {/* Project cards */}
      <div className="  mx-auto p-2 md:p-0">
        {projects.map((project) => (
          <div
            data-aos="fade-up"
            key={project.id}
            className=" rounded-xl shadow p-3 hover:shadow-xl border-b-4 border-gray-700 transition  my-5 flex flex-col md:flex-row md:gap-5 bg-[#9112BC]"
          >
            <div className="md:w-2/5 ">
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg w-full h-full object-cover mb-4 md:mb-0 hover:scale-105 transition-all duration-200 ease-in-out"
              />
            </div>
            <div className="space-y-3  bg-base-100 p-2 rounded-[8px] flex flex-col justify-between flex-2 ">
              <h3 className="text-xl font-semibold  mb-2">{project.name}</h3>
              <p className=" ">{project.subTitle}</p>
              <p className="  mb-4 flex flex-wrap gap-2">
                <span className="font-bold ">Stack: </span>{" "}
                {project.stack.map((s) => (
                  <div className="border border-[#9112BC] rounded-[3px] px-1">
                    {s}
                  </div>
                ))}
              </p>

              <Button btnClick={() => openModal(project)} text={"View More"} />
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black text-start  text-gray-200 bg-opacity-50 flex items-center justify-center z-50">
          <div className="border-4 border-gray-500 max-w-3xl w-full rounded-lg p-6 relative overflow-y-auto max-h-[90vh]">
            <img
              src={selectedProject.image}
              alt={selectedProject.name}
              className="rounded mb-4 w-full h-56 object-cover"
            />
            <h2 className="text-2xl font-bold text-gray-500 mb-2">
              {selectedProject.name}
            </h2>
            <p className="mb-2 text-start">
              <strong>Tech Stack:</strong> {selectedProject.stack.join(", ")}
            </p>
            <p className="mb-2">
              <strong>Description:</strong> {selectedProject.description}
            </p>
            <p className="mb-2">
              <strong>Challenges:</strong> {selectedProject.challenges}
            </p>
            <p className="mb-4">
              <strong>Future Plans:</strong> {selectedProject.improvements}
            </p>
            <div className="flex justify-between">
              <div className="flex gap-4">
                <a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-color text-white py-2 px-4 rounded hover:bg-green-700 transition"
                >
                  Live Site
                </a>
                <a
                  href={selectedProject.githubClient}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-900 transition"
                >
                  GitHub Repo Client
                </a>
                <a
                  href={selectedProject.githubServer}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-900 transition"
                >
                  GitHub Repo Server
                </a>
              </div>

              <button
                onClick={closeModal}
                className="ml-2 text-xl text-white bg-rose-500 btn"
                title="Close"
              >
                close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
