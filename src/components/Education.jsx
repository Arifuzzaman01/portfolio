import React from "react";
import { GraduationCap, Calendar, Award, MapPin } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      degree: "Diploma in Computer Science",
      institution: "Barguna Polytechnic Institute, Barguna.",
      duration: "2019 - 2023",
      cgpa: "3.47",
      location: "Barguna, Bangladesh",
      description:
        "Completed Diploma in Computer Science with strong foundation in programming, software development, and computer fundamentals.",
      courses: ["OOP Programming", "Web Development"],
      achievements: ["Academic Excellence", "Project Work", "Technical Skills"],
    },
  ];
  const courses = [
    {
      id: 1,
      courseTitle: "Complete Web Development Full Courses",
      institution: "Programming Hero.",
      duration: "Jan-2025 - Jul-2025",

      location: "Dhaka, Bangladesh",
      description:
        "Completed Web Development Courses with MERN Stack and strong foundation in programming, Web development, and computer fundamentals.",
      keyCover: [
        "Html5 & Css3",
        "Tailwind Css",
        "Es6",
        "Firebase",
        "React.js",
        "Express.js",
        "Node.js",
        "MongoDB",
        "Next.js",
        "NextAuth",
      ],
      achievements: [
        "Project base Excellence",
        "Team Project Work",
        "Technical Skills",
        "Time Management",
      ],
    },
    {
      id: 2,
      courseTitle: "Web Development (React Js)",
      institution: "BD Task Academy.",
      duration: "Aug-2023 - Nov-2023",

      location: "Dhaka, Bangladesh",
      description:
        " Web Development Courses with React.js and basic foundation in programming, Web development.",
      keyCover: [
        "Html5 & Css3",
        "Tailwind Css",
        "BootStrap",
        "Es6",
        "React.js",
      ],
      achievements: [
        "Project base Excellence",
        "Project Work",
        "Technical Skills",
      ],
    },
  ];
  return (
    <div className=" py-6  rounded-xl shadow-lg">
      {/* Header Section */}
      <div className="text-center ">
        <div className="flex justify-center items-center mb-2">
          <div className="p-3 bg-blue-100 rounded-full">
            <GraduationCap className="w-8 h-8 text-blue-600" />
          </div>
        </div>
        <h2 className=" text-2xl md:text-3xl lg:text-4xl font-bold  mb-2">
          Education
        </h2>
        <p className="">My Academic Journey and Qualifications</p>
      </div>

      {/* Education Timeline */}
      <div className=" md:grid grid-cols-2 items-center gap-3">
        <div>
          <h2 className="font-bold text-2xl my-4 pb-2 border-b-2 border-white">
            Academic
          </h2>
          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <div key={index} className="relative">
                {/* Timeline Line */}
                {index !== educationData.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-full bg-blue-800"></div>
                )}

                <div className="md:flex items-start space-x-4  p-6 rounded-lg border border-[#9112BC] hover:shadow-md transition-shadow duration-300">
                  {/* Institution Icon */}
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-color w-fit rounded-full">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    {/* Degree and Institution */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold  mb-1">{edu.degree}</h3>
                      <p className="text-lg font-semibold text-blue-600">
                        {edu.institution}
                      </p>
                    </div>

                    {/* Details Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      {/* Duration */}
                      <div className="flex items-center space-x-2 ">
                        <Calendar className="w-4 h-4" />
                        <span className="font-medium">{edu.duration}</span>
                      </div>

                      {/* CGPA */}
                      <div className="flex items-center space-x-2 ">
                        <Award className="w-4 h-4" />
                        <span className="font-medium">
                          CGPA: {edu.cgpa}/4.00
                        </span>
                      </div>

                      {/* Location */}
                      <div className="flex items-center space-x-2 ">
                        <MapPin className="w-4 h-4" />
                        <span className="font-medium">{edu.location}</span>
                      </div>

                      {/* Grade Badge */}
                      <div className="flex items-center">
                        <span className="px-3 py-1 bg-color text-white rounded-full text-sm font-medium">
                          First Class
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className=" mb-4 leading-relaxed">{edu.description}</p>

                    {/* Courses and Skills */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Key Courses */}
                      <div>
                        <h4 className="font-semibold  mb-2 flex items-center">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                          Key Courses Covered
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.courses.map((course, courseIndex) => (
                            <span
                              key={courseIndex}
                              className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div>
                        <h4 className="font-semibold  mb-2 flex items-center">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                          Achievements
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.achievements.map(
                            (achievement, achievementIndex) => (
                              <span
                                key={achievementIndex}
                                className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm"
                              >
                                {achievement}
                              </span>
                            )
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Performance Meter */}
                    <div className="mt-6">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium ">
                          Academic Performance
                        </span>
                        <span className="text-sm font-bold text-blue-600">
                          {edu.cgpa}/4.00
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-[#9112BC] h-2 rounded-full"
                          style={{
                            width: `${(parseFloat(edu.cgpa) / 4) * 100}%`,
                          }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>0.00</span>
                        <span>2.00</span>
                        <span>4.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h1 className="font-bold text-2xl my-4 border-b-2 pb-2 border-white">
            Courses
          </h1>
          <div className="space-y-3">
            {courses.map((course) => (
              <div
                key={course.is}
                className="border border-[#9112BC] rounded-md p-4"
              >
                {/* Institution Icon */}

                <div className="flex gap-8">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-color w-fit rounded-full">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="mb-1">
                    <h3 className="text-xl font-bold  mb-1">
                      {course.courseTitle}
                    </h3>
                    <p className="text-lg font-semibold text-blue-600">
                      {course.institution}
                    </p>
                  </div>
                </div>
                {/* Content */}
                <div className="flex-1">
                  {/* Degree and Institution */}

                  {/* Details Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    {/* Duration */}
                    <div className="flex items-center space-x-2 ">
                      <Calendar className="w-4 h-4" />
                      <span className="font-medium">{course.duration}</span>
                    </div>

                    {/* Location */}
                    <div className="flex items-center space-x-2 ">
                      <MapPin className="w-4 h-4" />
                      <span className="font-medium">{course.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className=" mb-4 leading-relaxed">{course.description}</p>

                  {/* Courses and Skills */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Key Courses */}
                    <div className="flex-1">
                      <h4 className="font-semibold  mb-2 flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        Key Courses Covered
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {course.keyCover.map((course, courseIndex) => (
                          <span
                            key={courseIndex}
                            className="px-1 py-1  border rounded-md text-sm"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="font-semibold  mb-2 flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                        Achievements
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {course.achievements.map(
                          (achievement, achievementIndex) => (
                            <span
                              key={achievementIndex}
                              className="px-1 py-1  border rounded-md text-sm"
                            >
                              {achievement}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
