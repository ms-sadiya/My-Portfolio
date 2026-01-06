import React from 'react';

const Footer = () => (
  <footer className="py-12 border-t border-slate-200 dark:border-slate-800 px-4">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center font-black text-white">S</div>
        <p className="text-sm font-bold text-slate-500">Built with 💖 by Ansari Sadiya</p>
      </div>
      <div className="flex gap-8 text-xs font-black uppercase tracking-widest text-slate-500">
        <a href="https://github.com/ms-sadiya" className="hover:text-indigo-600 transition-colors">Github</a>
        <a href="https://www.linkedin.com/in/ansari-sadiya003" className="hover:text-indigo-600 transition-colors">Linkedin</a>
      </div>
      <p className="text-xs font-bold text-slate-400">© {new Date().getFullYear()} Ahmedabad, India</p>
    </div>
  </footer>
);

export default Footer;
