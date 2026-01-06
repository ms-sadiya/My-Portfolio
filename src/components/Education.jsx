import React from 'react';
import ScrollReveal from './ScrollReveal';
import { GraduationCap, Award, ArrowUpRight } from 'lucide-react';
import ibmCert from '../assets/ibm-cert.pdf';
import iuceeCert from '../assets/iucee-mini-course.pdf';

const Education = ({ darkMode }) => (
  <section id="education" className="py-32 px-4">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
      <ScrollReveal className={`p-12 rounded-[3rem] border ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100'}`}>
        <div className="flex items-center gap-4 mb-10">
          <GraduationCap size={40} className="text-indigo-600" />
          <h2 className="text-3xl font-black">Academic Excellence</h2>
        </div>
        <div className="space-y-8">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-black mb-1">BH Gardi College of Engineering</h3>
              <p className="text-indigo-500 font-bold mb-4">B.Tech in Computer Science</p>
            </div>
            <div className="text-right">
              <p className="font-bold">2021-25</p>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-xl font-black">CGPA: 8.00</div>
            </div>
          </div>

          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-black mb-1">G.T Sheth School, Rajkot</h3>
              <p className="text-indigo-500 font-bold mb-4">Higher Secondary Certificate</p>
            </div>
            <div className="text-right">
              <p className="font-bold">2019-21</p>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-xl font-black">Percentage:73.54%</div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.15} className="space-y-6">
        <div className="flex items-center gap-4 mb-10">
          <Award size={40} className="text-pink-500" />
          <h2 className="text-3xl font-black">Certifications</h2>
        </div>
        {[
          { title: "IBM SkillsBuild - AI Training", issuer: "IBM", asset: ibmCert },
          { title: "IUCEE Mini Course - AI", issuer: "IUCEE", asset: iuceeCert }
        ].map((cert, i) => (
          <div key={i} className={`p-8 rounded-32px border transition-all hover:translate-x-2 ${darkMode ? 'bg-slate-900 border-slate-800 hover:border-pink-500' : 'bg-white border-slate-100 hover:border-pink-500'}`}>
            <div className="flex justify-between items-center">
              <div>
                <h4 className="text-lg font-black">{cert.title}</h4>
                <p className="text-sm font-bold text-slate-500 mt-1 uppercase tracking-widest">{cert.issuer}</p>
              </div>
              <a href={cert.asset} target="_blank" rel="noreferrer" aria-label={`Open ${cert.title} certificate`}>
                <ArrowUpRight size={24} className="text-pink-500" />
              </a>
            </div>
          </div>
        ))}
       </ScrollReveal>
    </div>
  </section>
);

export default Education;
