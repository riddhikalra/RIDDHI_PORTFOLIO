import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

const Education = () => {
  const education = {
    degree: "Bachelor of Engineering",
    field: "Computer Science and Engineering",
    university: "Chitkara University",
    duration: "2019 – 2023",
    location: "Punjab, India",
    description: "Comprehensive computer science education with focus on software engineering, data structures, algorithms, and modern programming paradigms.",
    coursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Database Management Systems",
      "Software Engineering",
      "Computer Networks",
      "Operating Systems",
      "Web Technologies",
      "Microprocessors"
    ],
    projects: [
      {
        title: "Enterprise Resource Planning System",
        description: "Developed a comprehensive ERP system using Java and MySQL for inventory management and employee tracking.",
        technologies: ["Java", "MySQL", "Swing", "JDBC"]
      },
      {
        title: "Web-based Task Management Application",
        description: "Created a collaborative task management platform with real-time updates and user authentication.",
        technologies: ["JavaScript", "Node.js", "MongoDB", "Socket.IO"]
      }
    ],
    achievements: [
      "Consistent academic performance throughout the program",
      "Active participation in coding competitions",
      "Leadership role in technical society",
      "Completed multiple industry-relevant projects"
    ]
  };

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Academic foundation that shaped my technical expertise and problem-solving approach
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Education Card */}
          <div className="lg:col-span-2">
            <Card className="bg-gray-950 border-gray-800 hover:border-gray-700 transition-all duration-300">
              <CardHeader>
                <div className="flex items-start space-x-4">
                  <div className="bg-gray-800 p-3 rounded-lg">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl text-white mb-2">
                      {education.degree}
                    </CardTitle>
                    <p className="text-xl text-gray-300 font-medium mb-3">
                      {education.field}
                    </p>
                    <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 text-gray-400">
                      <div className="flex items-center space-x-2">
                        <GraduationCap className="w-4 h-4" />
                        <span>{education.university}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{education.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span>{education.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  {education.description}
                </p>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Key Coursework</h4>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {education.coursework.map((course, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                        <span className="text-gray-400 text-sm">{course}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Academic Projects</h4>
                  <div className="space-y-4">
                    {education.projects.map((project, index) => (
                      <div key={index} className="bg-gray-900 p-4 rounded-lg border border-gray-800">
                        <h5 className="font-semibold text-white mb-2">{project.title}</h5>
                        <p className="text-gray-400 text-sm mb-3">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, idx) => (
                            <Badge key={idx} variant="outline" className="border-gray-700 text-gray-400 text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Achievements Sidebar */}
          <div className="space-y-6">
            <Card className="bg-gray-950 border-gray-800">
              <CardHeader>
                <CardTitle className="text-lg text-white flex items-center space-x-2">
                  <Award className="w-5 h-5" />
                  <span>Academic Achievements</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {education.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-white rounded-full mt-2"></div>
                      <span className="text-gray-400 text-sm">{achievement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-950 border-gray-800">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-2">4 Years</div>
                  <div className="text-gray-400 text-sm">Engineering Program</div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-950 border-gray-800">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-2">2023</div>
                  <div className="text-gray-400 text-sm">Graduation Year</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;