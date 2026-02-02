import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header = ({ mobileMenuOpen, setMobileMenuOpen, activeSection, navItems, scrollToSection }) => {
  return (
    <nav className="fixed w-full z-50 transition-all bg-white/80 border-slate-200 backdrop-blur-md border-b">
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
                  ? 'bg-slate-900 text-white'
                  : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
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
            className="md:hidden overflow-hidden border-t bg-white border-slate-100"
          >
            <div className="px-4 py-6 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => {
                    // ensure the menu closes and then navigate after a short delay
                    setMobileMenuOpen(false)
                    setTimeout(() => scrollToSection(item), 120)
                  }}
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
