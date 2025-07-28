import React from "react";
import { Card, CardContent } from "./ui/card";
import { Code, Server, Cpu, Database } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Enterprise Integration",
      description: "Apache Camel & Spring Boot expertise for scalable middleware solutions"
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "API Development",
      description: "REST/SOAP services with robust authentication and security"
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Microservices",
      description: "High-performance microservices with caching and optimization"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "System Migration",
      description: "Platform migration from FUSE to Apache Camel with RedHat SMEs"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-white mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a Solution Developer with over 2.5 years of experience specializing in 
              Java-based middleware solutions, API development, and system integration. 
              My technical toolkit includes Apache Camel, Spring Boot, and REST/SOAP services, 
              with a proven track record of delivering scalable, secure, and business-aligned microservices.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Currently, I'm contributing to enterprise-grade integration systems at Tata Technologies, 
              where I've independently developed and deployed multiple middleware services for 
              critical business workflows.
            </p>
            <div className="pt-4">
              <h3 className="text-xl font-semibold text-white mb-4">Key Expertise</h3>
              <div className="flex flex-wrap gap-3">
                {["Java", "Apache Camel", "Spring Boot", "Microservices", "REST/SOAP APIs", "System Integration"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-800 text-gray-300 rounded-md text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="bg-gray-900 border-gray-800 hover:border-gray-700 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="text-white mb-3">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;