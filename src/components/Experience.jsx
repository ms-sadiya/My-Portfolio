import React from 'react';
import ScrollReveal from './ScrollReveal';

const experiences = [
  {
    role: "Full Stack Developer Intern",
    company: "Quarks Systems, Ahmedabad",
    period: "January 2025 – March 2025",
    points: [
      "Worked on a live project at Quarks Systems and contributed to frontend features.",
      "Developed UI components using React.js and completed assigned small tasks.",
      "Planned to integrate backend features with Node.js and MongoDB following UI delivery.",
      "Improved coding practices, company-level workflows, and problem-solving skills."
    ]
  },
  {
    role: "Jr MERN Stack Developer",
    company: "Dynastack Softwares, Ahmedabad",
    period: "April 2025 – Present",
    points: [
      "Contributing to live, production-ready SaaS and enterprise web applications.",
      "Developing reusable and responsive React components using Redux Toolkit and Ant Design.",
      "Integrating REST APIs and handling frontend-backend data flow.",
      "Improving application stability by debugging and optimizing component rendering.",
      "Collaborating with developers and QA in an Agile environment."
    ]
  }
];

const Experience = ({ darkMode }) => (
  <section id="experience" className="py-32 px-4">
    <div className="max-w-5xl mx-auto">
      <div className="flex items-center gap-4 mb-20">
        <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800"></div>
        <h2 className="text-4xl md:text-5xl font-black whitespace-nowrap">Industry Experience</h2>
        <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800"></div>
      </div>

      <div className="space-y-8">
        {experiences.map((exp, idx) => (
          <ScrollReveal key={idx} className={`relative p-8 md:p-12 rounded-4xl border ${darkMode ? 'bg-slate-900/50 border-slate-800' : 'bg-white border-slate-100'} shadow-2xl`}>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
              <div>
                <h3 className="text-2xl md:text-3xl font-black text-indigo-600">{exp.role}</h3>
                <p className="text-lg md:text-xl font-bold mt-2">{exp.company}</p>
              </div>
              <span className={`px-4 py-2 md:px-6 md:py-2 rounded-full font-black text-sm uppercase tracking-widest ${darkMode ? 'bg-slate-800 text-slate-400' : 'bg-slate-100 text-slate-500'}`}>{exp.period}</span>
            </div>

            <div className="grid md:grid-cols-1 gap-4">
              {exp.points.map((point, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="mt-2 w-2 h-2 rounded-full bg-indigo-500 shrink-0 shadow-[0_0_10px_rgba(79,70,229,0.5)]"></div>
                  <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
