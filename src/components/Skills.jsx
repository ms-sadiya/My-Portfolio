import React from 'react';
import ScrollReveal from './ScrollReveal';
import { Layout, Code, Smartphone, CheckCircle2 } from 'lucide-react';

const skills = {
  frontend: ['React.js', 'Redux Toolkit', 'Tailwind CSS', 'Ant Design', 'JavaScript (ES6+)', 'HTML5', 'CSS3'],
  backend: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
  tools: ['Git', 'GitHub', 'Postman', 'VS Code', 'Vite']
};

const Skills = ({ darkMode }) => (
  <section id="skills" className="py-32 px-4 bg-slate-900/5 dark:bg-slate-900/30">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-black mb-6">Technical Arsenal</h2>
        <p className="text-slate-500 font-bold uppercase tracking-widest text-sm">Tools I use to create magic</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {Object.entries(skills).map(([category, items], index) => (
          <ScrollReveal key={category} delay={index * 0.15} className={`p-8 rounded-2xl border transition-all hover:scale-[1.02] ${darkMode ? 'bg-slate-900 border-slate-800 hover:border-indigo-500' : 'bg-white border-slate-200 hover:border-indigo-500'} shadow-lg group`}>
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-none w-14 h-14 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg,#eef2ff, #fce7f3)' }}>
                {category === 'frontend' && <Layout size={26} className="text-indigo-600" />}
                {category === 'backend' && <Code size={26} className="text-indigo-600" />}
                {category === 'tools' && <Smartphone size={26} className="text-indigo-600" />}
              </div>
              <div>
                <h3 className="text-2xl font-black mb-2 capitalize">{category}</h3>
                <p className="text-sm text-slate-400 mb-4">Key technologies and tools I use to build performant, maintainable applications.</p>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, idx) => (
                    <span key={idx} className={`px-3 py-1 rounded-full text-xs font-bold ${darkMode ? 'bg-slate-800 text-slate-200' : 'bg-slate-100 text-slate-700'}`}>{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
