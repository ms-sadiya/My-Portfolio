import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    "Home",
    "About",
    "Skills",
    "Experience",
    "Projects",
    "Education",
    "Contact",
  ];

  const scrollToSection = (section) => {
    setActiveSection(section.toLowerCase());
    //  integrate with your sections as needed
    const el = document.getElementById(section.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileMenuOpen(false);
  };
      

  // Auto-update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.toLowerCase());
      const scrollPosition = window.scrollY + 100; // Offset for header height

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once to set initial active section

    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  return (
    <div className="min-h-screen transition-colors duration-500 overflow-x-hidden bg-linear-to-br from-slate-100 via-slate-200 to-slate-50 text-slate-900">
      {/* Redesigned subtle background elements */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[radial-gradient(circle_at_20%_80%,rgba(99,102,241,0.2),transparent_50%)]"></div>
        <div className="absolute top-0 right-0 w-full h-full opacity-5 bg-[radial-gradient(circle_at_80%_20%,rgba(236,72,153,0.2),transparent_50%)]"></div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-full opacity-5 bg-[radial-gradient(circle_at_50%_0%,rgba(168,85,247,0.2),transparent_50%)]"></div>
      </div>
      <Header
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        activeSection={activeSection}
        navItems={navItems}
        scrollToSection={scrollToSection}
      />

      <main className="pt-28">
        <Hero scrollToSection={scrollToSection} />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
