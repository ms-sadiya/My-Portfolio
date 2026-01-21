import React from 'react';
import ScrollReveal from './ScrollReveal';
import { Layout, Code, Smartphone, CheckCircle2, Users } from 'lucide-react';

const skills = {
  frontend: [
    'React.js',
    'Redux Toolkit',
    'Tailwind CSS',
    'Ant Design',
    'JavaScript (ES6+)',
    'HTML5',
    'CSS3',
    'Responsive Design',
    'Accessibility (WCAG)'
  ],
  backend: [
    'Node.js',
    'Express.js',
    'MongoDB',
    'REST APIs',
    'API Integration'
  ],
  tools: [
    'Git',
    'GitHub',
    'Postman',
    'VS Code'
  ],
  softSkills: [
    'Agile Collaboration',
    'Teamwork',
    'Problem Solving',
    'Debugging',
    'Communication',
    'Attention to Detail',
    'Time Management'
  ]
};

const categoryMeta = {
  frontend: {
    icon: <Layout size={22} className="text-indigo-600" />,
    description: 'Responsive, accessible and maintainable UI components.'
  },
  backend: {
    icon: <Code size={22} className="text-indigo-600" />,
    description: 'Backend services, API design and data persistence.'
  },
  tools: {
    icon: <Smartphone size={22} className="text-indigo-600" />,
    description: 'Tooling that streamlines development and collaboration.'
  },
  softSkills: {
    icon: <Users size={22} className="text-indigo-600" />,
    description: 'Communication and team-first problem solving.'
  }
};

const Skills = ({ darkMode }) => (
  <section id="skills" className="py-32 px-4 bg-slate-900/5 dark:bg-slate-900/30">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-black mb-4">Key Skills</h2>
        <p className="text-slate-500 font-bold uppercase tracking-widest text-sm">Technologies & strengths I bring to the table</p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {Object.entries(skills).map(([category, items], index) => (
          <ScrollReveal
            key={category}
            delay={index * 0.08}
            className={`relative p-8 md:p-12 rounded-4xl  border transition-all group ${darkMode ? 'bg-slate-900/50 border-slate-800' : 'bg-white border-slate-100'} shadow-2xl`}
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-linear-to-br from-indigo-100 to-pink-100">
                {categoryMeta[category].icon}
              </div>

              <div>
                <h3 className="text-2xl font-black capitalize mb-1">{category === 'tools' ? 'Tools & Platforms' : category.replace(/([A-Z])/g, ' $1')}</h3>
                <p className="text-sm text-slate-400">{categoryMeta[category].description}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {items.map((skill, idx) => (
                <span
                  key={idx}
                  className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-black uppercase tracking-wider ${darkMode ? 'bg-slate-800 text-slate-200' : 'bg-slate-100 text-slate-700'}`}
                >
                  <CheckCircle2 size={14} className="text-indigo-400" />
                  {skill}
                </span>
              ))}
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
