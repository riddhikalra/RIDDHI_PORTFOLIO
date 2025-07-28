import React from "react";
import { Button } from "./ui/button";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";

const Hero = ({ scrollToSection }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight">
              Solution Developer
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 font-light">
              Java • Middleware • API Integration
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-gray-400 leading-relaxed">
              Specializing in Java-based middleware solutions, API development, and system integration 
              with over 2.5 years of experience delivering scalable enterprise solutions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => scrollToSection("projects")}
              className="bg-white text-black hover:bg-gray-200 transition-all duration-300 px-8 py-3 text-lg font-medium"
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              className="border-gray-600 text-white hover:bg-white hover:text-black transition-all duration-300 px-8 py-3 text-lg font-medium"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://linkedin.com/in/riddhikalra"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="mailto:riddhikalra0209@gmail.com"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <ArrowDown className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;