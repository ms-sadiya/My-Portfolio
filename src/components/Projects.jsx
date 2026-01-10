import React, { useState, useEffect } from 'react';
import ScrollReveal from './ScrollReveal';
import { Code, ExternalLink, Github, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import empImg from '../assets/Employee management.png';
import weighImg from '../assets/weighnridge software.png';

const projects = [
  {
    title: 'Employee Management System',
    image: empImg,
    description: 'Developed a role-based enterprise application for managing employees, attendance, and reports. Focused on clean UI and smooth navigation.',
    tech: ['React.js', 'Redux Toolkit', 'Ant Design', 'REST API'],
    features: ['CRUD Operations', 'Role-based Access', 'Form Validations']
  },
  {
    title: 'Weighbridge Software',
    image: weighImg,
    description: 'Industrial-grade system handling real-time operational data. Developed dashboards and reports to display weighing data from backend APIs.',
    tech: ['React.js', 'Tailwind CSS', 'Node.js', 'ExpressJS'],
    features: ['Real-time Dashboards', 'Process Tracking', 'System Workflows']
  }
];

const Projects = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalImage, setModalImage] = useState(null)

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setModalOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const openModal = (src) => {
    setModalImage(src)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
    setModalImage(null)
  }

  return (
  <section id="projects" className="py-32 px-4 bg-slate-950 text-white">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
        <div>
          <h2 className="text-5xl md:text-7xl font-black mb-6">Recent Work.</h2>
          <p className="text-slate-400 text-xl max-w-xl">A selection of industrial and enterprise projects I've built from the ground up.</p>
        </div>
<a
  href="https://github.com/ms-sadiya?tab=repositories"
  target="_blank"
  rel="noopener noreferrer"
  className="px-8 py-4 bg-white text-slate-950 rounded-2xl font-black hover:bg-slate-200 transition-all flex items-center gap-2"
  aria-label="View all projects on GitHub"
>
  View all on GitHub <Github size={20} />
</a>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {projects.map((project, idx) => (
          <ScrollReveal key={idx} delay={idx * 0.15} className="group relative">
            <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-900 aspect-video mb-8 cursor-pointer" onClick={() => openModal(project.image)}>
              <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-linear-to-br from-indigo-500/20 to-pink-500/20 group-hover:opacity-100 transition-opacity opacity-30"></div>
            </div>

            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-3xl font-black mb-4 group-hover:text-indigo-400 transition-colors">{project.title}</h3>
                <p className="text-slate-400 text-lg leading-relaxed mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (<span key={t} className="px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-black uppercase tracking-widest text-slate-400">{t}</span>))}
                </div>
              </div>
             
            </div>
            </ScrollReveal>
        ))}
      </div>
    </div>

    {/* Image Lightbox Modal */}
    <AnimatePresence>
      {modalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="relative max-w-5xl w-full max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={closeModal} className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-white text-black flex items-center justify-center shadow-lg">
              <X size={16} />
            </button>
            <img src={modalImage} alt="Full project" className="w-full h-full object-contain rounded-2xl bg-black" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  </section>
  )
}

export default Projects;
