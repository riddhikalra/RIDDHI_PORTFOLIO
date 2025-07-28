import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Code, Database, Settings, Cpu, Cloud, Shield } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-5 h-5" />,
      skills: ["Java (8/11/17)", "JavaScript", "SQL"]
    },
    {
      title: "Frameworks & Libraries",
      icon: <Settings className="w-5 h-5" />,
      skills: ["Spring Boot", "Apache Camel", "J2EE", "Hibernate", "React", "Node.js"]
    },
    {
      title: "Tools & Platforms",
      icon: <Cpu className="w-5 h-5" />,
      skills: ["Git", "Jenkins", "ArgoCD", "CI/CD", "RedHat FUSE"]
    },
    {
      title: "Concepts & Architecture",
      icon: <Cloud className="w-5 h-5" />,
      skills: ["REST/SOAP APIs", "Microservices Architecture", "Data Structures", "System Integration"]
    },
    {
      title: "Databases & Caching",
      icon: <Database className="w-5 h-5" />,
      skills: ["JDG (Infinispan)", "MongoDB", "SQL Databases", "Data Warehousing"]
    },
    {
      title: "Security & Authentication",
      icon: <Shield className="w-5 h-5" />,
      skills: ["Keycloak", "JWT", "OAuth", "API Security", "Cybersecurity Fundamentals"]
    }
  ];

  const proficiencyLevels = [
    { skill: "Java Development", level: 95 },
    { skill: "Apache Camel", level: 90 },
    { skill: "Spring Boot", level: 88 },
    { skill: "REST/SOAP APIs", level: 92 },
    { skill: "Microservices", level: 85 },
    { skill: "System Integration", level: 88 }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Comprehensive expertise in modern backend technologies and enterprise solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Skills Categories */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8">Core Competencies</h3>
            <div className="grid gap-6">
              {skillCategories.map((category, index) => (
                <Card key={index} className="bg-gray-900 border-gray-800 hover:border-gray-700 transition-all duration-300">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-white flex items-center space-x-2">
                      <span className="text-gray-400">{category.icon}</span>
                      <span>{category.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, idx) => (
                        <Badge key={idx} variant="outline" className="border-gray-700 text-gray-300 hover:border-gray-600 hover:bg-gray-800">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Proficiency Levels */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8">Proficiency Levels</h3>
            <div className="space-y-6">
              {proficiencyLevels.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-white">{item.skill}</span>
                    <span className="text-gray-400 text-sm">{item.level}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-gray-400 to-white h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${item.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-white mb-4">Currently Learning</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Cloud Architecture", "DevOps", "Kubernetes", "Advanced Data Structures"].map((skill, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-gray-800 text-gray-300 border border-gray-700">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;