import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Menu, X } from 'lucide-react';

const Header = ({ darkMode, setDarkMode, mobileMenuOpen, setMobileMenuOpen, activeSection, navItems, scrollToSection }) => {
  return (
    <nav className={`fixed w-full z-50 transition-all ${darkMode ? 'bg-slate-950/80 border-slate-800' : 'bg-white/80 border-slate-200'} backdrop-blur-md border-b`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            <div className="w-10 h-10 bg-linear-to-tr from-indigo-600 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-black text-xl">S</span>
            </div>
            <span className="text-2xl font-black tracking-tighter">SADIYA</span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                  activeSection === item.toLowerCase() 
                  ? (darkMode ? 'bg-indigo-600 text-white' : 'bg-slate-900 text-white')
                  : (darkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900')
                }`}
              >
                {item}
              </button>
            ))}
            <div className="w-px h-6 bg-slate-200 dark:bg-slate-800 mx-4"></div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2.5 rounded-xl transition-all ${darkMode ? 'bg-slate-800 text-yellow-400 hover:bg-slate-700' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button onClick={() => setDarkMode(!darkMode)} className="p-2 text-slate-500">
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2">
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden overflow-hidden border-t ${darkMode ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-100'}`}
          >
            <div className="px-4 py-6 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`block w-full text-left px-4 py-4 text-lg font-bold rounded-2xl transition-all ${
                    activeSection === item.toLowerCase()
                    ? 'bg-indigo-600 text-white'
                    : 'hover:bg-indigo-600 hover:text-white'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;
