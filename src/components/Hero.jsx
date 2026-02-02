import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowUpRight,
  ArrowDownRight,
  Github,
  Linkedin,
  Code,
  Layers,
  Zap,
} from "lucide-react";
import profilePic from "../assets/Sadiya profile.jpg";
import Resume from "../assets/sadiya-full-stack.pdf";

const Hero = ({ scrollToSection }) => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 pb-12 px-4 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-bold text-xs uppercase tracking-widest mb-8 border border-indigo-500/20"
          >
            <Sparkles size={14} /> Junior Mern Stack Developer
          </motion.div>

          <motion.h1
            className="text-6xl md:text-7xl font-black tracking-tighter leading-[0.85] mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            CRAFTING THE <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500">
              NEXT WEB.
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl mb-12 leading-relaxed max-w-xl text-slate-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            I'm{" "}
            <span
              className="font-bold text-slate-900"
            >
              Ansari Sadiya
            </span>
            , a MERN Stack Developer building high-performance, accessible
            applications.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-5 items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <button
              onClick={() => scrollToSection("contact")}
              className="group px-10 py-5 bg-indigo-600 text-white rounded-2xl font-black shadow-2xl shadow-indigo-600/30 hover:bg-indigo-700 transition-all flex items-center gap-3 active:scale-95 text-lg"
            >
              Hire Me{" "}
              <ArrowDownRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
            <a
              href={Resume}
              download="Ansari_Sadiya_Resume.pdf"
              className="group px-10 py-5 bg-transparent border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 rounded-2xl font-black shadow-2xl shadow-indigo-600/20 hover:bg-indigo-600 hover:text-white transition-all flex items-center gap-3 active:scale-95 text-lg"
            >
              Resume{" "}
              <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
            <div className="flex items-center gap-4 ml-2">
              <a
                href="https://github.com/ms-sadiya"
                target="_blank"
                rel="noreferrer"
                className="p-4 bg-slate-100 text-slate-600 rounded-2xl hover:text-indigo-500 hover:scale-110 transition-all shadow-sm"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/ansari-sadiya003"
                target="_blank"
                rel="noreferrer"
                className="p-4 bg-slate-100 text-slate-600 rounded-2xl hover:text-indigo-500 hover:scale-110 transition-all shadow-sm"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Content - Redesigned Profile Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex items-center justify-center lg:justify-end"
        >
          {/* Background Decorations */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] pointer-events-none">
            <div
              className={`absolute top-0 right-10 w-72 h-72 rounded-full blur-[100px] opacity-40 animate-pulse`}
              style={{ background: "linear-linear(135deg,#6366f1,#a855f7)" }}
            />
            <div
              className={`absolute bottom-0 left-10 w-64 h-64 rounded-full blur-[100px] opacity-30 animate-bounce-slow`}
              style={{ background: "linear-linear(135deg,#ec4899,#f97316)" }}
            />
          </div>

          <div
            className="relative z-10 p-4 rounded-[3.5rem] transition-colors duration-500 bg-white/60 backdrop-blur-xl border border-slate-200 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.1)] group"
          >
            {/* Main Profile Container */}
            <div className="relative">
              {/* Floating Tech Badges */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -left-8 top-12 z-20 p-4 rounded-2xl shadow-xl border bg-white border-slate-100 text-indigo-600"
              >
                <Code size={24} strokeWidth={2.5} />
              </motion.div>

              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -right-6 bottom-20 z-20 p-4 rounded-2xl shadow-xl border bg-white border-slate-100 text-pink-600"
              >
                <Zap size={24} strokeWidth={2.5} />
              </motion.div>

              <div
                className="rounded-[2.8rem] p-2 bg-linear-to-tr from-indigo-200 via-purple-200 to-pink-200"
              >
                <div
                  className={`w-72 h-72 md:w-80 md:h-80 rounded-[2.5rem] overflow-hidden shadow-inner relative transition-transform duration-500 group-hover:scale-[1.02]`}
                >
                  <img
                    src={profilePic}
                    alt="Ansari Sadiya"
                    className="object-cover w-full h-full grayscale-20 group-hover:grayscale-0 transition-all duration-700"
                    onError={(e) => {
                      e.target.src =
                        "https://ui-avatars.com/api/?name=Ansari+Sadiya&background=6366f1&color=fff&size=512";
                    }}
                  />

                  <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-[2.5rem]" />
                </div>
              </div>
            </div>

            {/* User Info Overlay Card */}
            <div className={`mt-6 text-center pb-4`}>
              <h3
                className="text-2xl font-black tracking-tight text-slate-900"
              >
                Ansari Sadiya
              </h3>
              <p
                className="text-sm font-medium mt-1 flex items-center justify-center gap-2 text-slate-500"
              >
                <Layers size={14} className="text-indigo-500" /> Mern Stack
                Developer
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
