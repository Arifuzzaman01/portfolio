import React, { useState } from "react";
import athletic from "../../assets/athletic-overview.PNG";
import roommate from "../../assets/roommate-overview.PNG";
import parcel from "../../assets/Frame 7.png";

const projects = [
  {
    id: 1,
    name: "ParcelXpress ",
    status: "running project, no live link",
    image: parcel,
    subTitle:
      "ParcelXpress is a full-stack parcel delivery management system where users can create, track, and manage parcels, make secure payments, and administrators can assign riders and manage roles.",
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
      "ParcelXpress is a full-stack parcel delivery management system where users can create, track,payment system, and manage parcels, make secure payments, and administrators can assign riders and manage roles.",
    live: "https://easy-buy-6acfa.web.app/",
    githubClient: "https://github.com/Arifuzzaman01/easy-buy-client",
    githubServer: "https://github.com/Arifuzzaman01/easy-buy-server",
    challenges:
      "Protected routes, admin logic, dashboard UI control,user Role etc.",
    improvements: "Adding real-time delivery tracking, analytics dashboard.",
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
  {
    id: 3,
    name: "Roommate Finder",
    image: roommate,
    subTitle:
      "Roommate Finder is a modern, user-friendly platform built to connect people who are searching for shared living spaces. The app allows users to sign up, create detailed listings for available rooms ",
    stack: ["React", "Express", "MongoDB", "Firebase", "Tailwind"],
    description:
      "Roommate Finder is a modern, user-friendly platform built to connect people who are searching for shared living spaces. The app allows users to sign up, create detailed listings for available rooms or flats, and browse others’ listings using filters such as location, availability, and type ",
    live: "https://roommatefinder.netlify.app",
    githubClient: "https://github.com/Arifuzzaman01/roommate-finder",
    githubServer: "https://github.com/Arifuzzaman01/roommate-finder-server",
    challenges: "Location filtering, user verification, secure messaging.",
    improvements: "Rating system, advanced filtering with AI.",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  return (
    <section className=" md:pt-10 pt-5 rounded-xl ">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800">My Projects</h2>
      </div>

      {/* Project cards */}
      <div className="  mx-auto">
        {projects.map((project) => (
          <div data-aos="flip-up"
            key={project.id}
            className=" rounded-xl shadow p-4 hover:shadow-xl border-b-4 border-gray-700 transition  my-5 flex flex-col md:flex-row gap-5 bg-[#9112BC]"
          >
            <img
              src={project.image}
              alt={project.name}
              className="rounded-lg md:w-1/2 h-56 object-cover mb-4 hover:scale-105 transition-all duration-200 ease-in-out"
            />
            <div className="space-y-3 text-gray-300 ">
              <h3 className="text-xl font-semibold  mb-2">
                {project.name}
              </h3>
              <p className=" ">{project.subTitle}</p>
              <p className="  mb-4">
                <span className="font-bold">Stack: </span>{" "}
                {project.stack.join(", ")}
              </p>
              <button
                onClick={() => openModal(project)}
                className="inline-block bg-[#98CD00] text-white py-2 px-4 rounded hover:bg-[#1fcd00] transition"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white max-w-2xl w-full rounded-lg p-6 relative overflow-y-auto max-h-[90vh]">
            <img
              src={selectedProject.image}
              alt={selectedProject.name}
              className="rounded mb-4 w-full h-56 object-cover"
            />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {selectedProject.name}
            </h2>
            <p className="mb-2">
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
                  className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition"
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
