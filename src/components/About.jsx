import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const About = ({ darkMode }) => (
  <section id="about" className="py-32 px-4 relative">
    <div className="max-w-4xl mx-auto text-center">
      <motion.h2 {...fadeInUp} className="text-4xl md:text-6xl font-black tracking-tight mb-12">The Journey <span className="text-indigo-600">So Far.</span></motion.h2>
      <motion.div {...fadeInUp} className={`p-10 md:p-16 rounded-[3rem] border backdrop-blur-xl ${darkMode ? 'bg-slate-900/50 border-slate-800' : 'bg-white/50 border-slate-200'} shadow-2xl text-left`}>
        <p className="text-xl md:text-2xl leading-relaxed mb-8 font-medium">I'm a MERN Stack Developer with 1 year of experience building production-ready apps. My focus is on <span className="text-indigo-500 font-bold underline decoration-indigo-500/30 underline-offset-8">scalable interfaces</span> and performance optimization.</p>
        <div className="grid md:grid-cols-2 gap-8 text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
          <p>From industrial weighbridge systems to enterprise management tools, I've handled complex data flows and UI requirements using the latest industry standards.</p>
          <p>I thrive in Agile environments, collaborating closely with teams to turn Figma designs into pixel-perfect, interactive reality.</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
          {[{ label: 'Problem Solver', emoji: '🧩' }, { label: 'Team Player', emoji: '🤝' }, { label: 'Fast Learner', emoji: '📚' }, { label: 'UI Obsessed', emoji: '✨' }].map((item, i) => (
            <div key={i} className={`p-4 rounded-2xl text-center border font-bold ${darkMode ? 'bg-slate-800/50 border-slate-700' : 'bg-slate-100 border-slate-200'}`}>
              <div className="text-2xl mb-1">{item.emoji}</div>
              <div className="text-xs uppercase tracking-tighter">{item.label}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default About;
