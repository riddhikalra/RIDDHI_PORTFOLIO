import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ExternalLink, Code, Server, Database, Cog } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Middleware API Suite for Manufacturing Platform",
      description: "Designed and developed over 10 standalone middleware services for internal business systems with automated workflow schedulers using Camel DSL and optimized DB interactions.",
      technologies: ["Apache Camel", "Java 8/17", "REST/SOAP", "Camel DSL"],
      icon: <Server className="w-6 h-6" />,
      highlights: [
        "10+ standalone middleware services",
        "Automated workflow schedulers",
        "Optimized database interactions",
        "Business system integration"
      ]
    },
    {
      title: "Microservices with Spring Boot",
      description: "Built high-performance microservices with JDG (Infinispan) caching and developed secure authentication APIs with Keycloak integration.",
      technologies: ["Spring Boot", "JDG", "Infinispan", "Keycloak", "Java"],
      icon: <Code className="w-6 h-6" />,
      highlights: [
        "High-performance caching with JDG",
        "Secure authentication APIs",
        "Keycloak integration",
        "Microservices architecture"
      ]
    },
    {
      title: "Platform Migration: FUSE to Camel",
      description: "Played a core role in migrating enterprise services from RedHat FUSE to Apache Camel, collaborating directly with RedHat SMEs for seamless transition.",
      technologies: ["Apache Camel", "RedHat FUSE", "Enterprise Services", "Migration"],
      icon: <Database className="w-6 h-6" />,
      highlights: [
        "Enterprise-level migration",
        "Collaboration with RedHat SMEs",
        "Seamless service transition",
        "Zero-downtime deployment"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Projects & Work Highlights
          </h2>
          <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Enterprise-grade solutions and middleware integrations I've built throughout my career
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-gray-950 border-gray-800 hover:border-gray-700 transition-all duration-300 hover:shadow-2xl hover:shadow-white/5">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="text-white">
                      {project.icon}
                    </div>
                    <CardTitle className="text-xl text-white">
                      {project.title}
                    </CardTitle>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-400 hover:text-white transition-colors cursor-pointer" />
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  {project.description}
                </p>
                
                <div>
                  <h4 className="text-sm font-semibold text-white mb-3">Key Highlights:</h4>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {project.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                        <span className="text-gray-400 text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-white mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-gray-800 text-gray-300 hover:bg-gray-700 border-gray-700">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;