import React, { useState, useEffect } from "react";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Achievements from "./Achievements";
import Certifications from "./Certifications";
import Education from "./Education";
import Contact from "./Contact";
import Footer from "./Footer";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "skills", "achievements", "certifications", "education", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header activeSection={activeSection} scrollToSection={scrollToSection} />
      <Hero scrollToSection={scrollToSection} />
      <About />
      <Projects />
      <Skills />
      <Achievements />
      <Certifications />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
};

export default Portfolio;