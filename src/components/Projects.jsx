import React from 'react';
import ScrollReveal from './ScrollReveal';
import { Code, ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Employee Management System',
    description: 'Developed a role-based enterprise application for managing employees, attendance, and reports. Focused on clean UI and smooth navigation.',
    tech: ['React.js', 'Redux Toolkit', 'Ant Design', 'REST API'],
    features: ['CRUD Operations', 'Role-based Access', 'Form Validations']
  },
  {
    title: 'Weighbridge Software',
    description: 'Industrial-grade system handling real-time operational data. Developed dashboards and reports to display weighing data from backend APIs.',
    tech: ['React.js', 'Redux Toolkit', 'Tailwind CSS', 'Node.js'],
    features: ['Real-time Dashboards', 'Process Tracking', 'System Workflows']
  }
];

const Projects = () => (
  <section id="projects" className="py-32 px-4 bg-slate-950 text-white">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
        <div>
          <h2 className="text-5xl md:text-7xl font-black mb-6">Recent Work.</h2>
          <p className="text-slate-400 text-xl max-w-xl">A selection of industrial and enterprise projects I've built from the ground up.</p>
        </div>
        <button className="px-8 py-4 bg-white text-slate-950 rounded-2xl font-black hover:bg-slate-200 transition-all flex items-center gap-2">View All Github <Github size={20} /></button>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {projects.map((project, idx) => (
          <ScrollReveal key={idx} delay={idx * 0.15} className="group relative">
            <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-900 aspect-video mb-8">
              <div className="absolute inset-0 bg-linear-to-br from-indigo-500/20 to-pink-500/20 group-hover:opacity-100 transition-opacity opacity-40"></div>
              <div className="absolute inset-0 flex items-center justify-center translate-y-10 group-hover:translate-y-0 transition-transform">
                <Code size={80} className="text-white/20" />
              </div>
            </div>

            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-3xl font-black mb-4 group-hover:text-indigo-400 transition-colors">{project.title}</h3>
                <p className="text-slate-400 text-lg leading-relaxed mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (<span key={t} className="px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-black uppercase tracking-widest text-slate-400">{t}</span>))}
                </div>
              </div>
              <div className="p-4 bg-slate-800 rounded-2xl group-hover:bg-indigo-600 transition-all">
                <ExternalLink size={24} />
              </div>
            </div>
            </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
