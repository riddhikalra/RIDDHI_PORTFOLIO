import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ExternalLink, BookOpen, Shield, Code, Palette, Database } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Introduction to UI Design",
      issuer: "Coursera",
      description: "Comprehensive course covering user interface design principles, user experience fundamentals, and modern design practices.",
      icon: <Palette className="w-6 h-6" />,
      category: "Design",
      skills: ["UI/UX Design", "Design Principles", "User Experience", "Interface Design"],
      credentialId: "COURSERA-UI-2024",
      date: "2024"
    },
    {
      title: "SQL Essential Training",
      issuer: "LinkedIn Learning",
      description: "Advanced SQL training covering database querying, optimization, stored procedures, and complex data manipulation techniques.",
      icon: <Database className="w-6 h-6" />,
      category: "Database",
      skills: ["SQL Querying", "Database Design", "Data Analysis", "Performance Optimization"],
      credentialId: "LINKEDIN-SQL-2024",
      date: "2024"
    },
    {
      title: "Introduction to Cybersecurity",
      issuer: "Cisco",
      description: "Fundamental cybersecurity concepts, network security, threat detection, and security best practices for enterprise environments.",
      icon: <Shield className="w-6 h-6" />,
      category: "Security",
      skills: ["Network Security", "Threat Detection", "Security Protocols", "Risk Assessment"],
      credentialId: "CISCO-CYBER-2023",
      date: "2023"
    },
    {
      title: "Web Development Fundamentals",
      issuer: "Professional Development",
      description: "Comprehensive web development training covering frontend and backend technologies, modern frameworks, and best practices.",
      icon: <Code className="w-6 h-6" />,
      category: "Development",
      skills: ["HTML/CSS", "JavaScript", "Web Frameworks", "Responsive Design"],
      credentialId: "WEB-DEV-2023",
      date: "2023"
    }
  ];



  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Certifications & Learning
          </h2>
          <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Continuous learning and professional development through industry-recognized certifications
          </p>
        </div>

        {/* Certification Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {certifications.map((cert, index) => (
            <Card key={index} className="bg-gray-900 border-gray-800 hover:border-gray-700 transition-all duration-300 hover:shadow-2xl hover:shadow-white/5">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="text-white">
                      {cert.icon}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl text-white mb-1">
                        {cert.title}
                      </CardTitle>
                      <div className="flex items-center space-x-2 mb-2">
                        <Badge variant="outline" className="border-gray-700 text-gray-400 text-xs">
                          {cert.issuer}
                        </Badge>
                        <span className="text-gray-500 text-xs">{cert.date}</span>
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-400 hover:text-white transition-colors cursor-pointer" />
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300 text-sm leading-relaxed">
                  {cert.description}
                </p>
                
                <div>
                  <h4 className="text-sm font-semibold text-white mb-3">Skills Acquired:</h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-gray-800 text-gray-300 hover:bg-gray-700 border-gray-700 text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <Badge variant="outline" className="border-gray-700 text-gray-400 text-xs">
                    {cert.category}
                  </Badge>
                  <span className="text-gray-500 text-xs font-mono">
                    ID: {cert.credentialId}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;