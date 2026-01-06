import React, { useState } from 'react';
import { Bot, Mail, Phone, Send } from 'lucide-react';

const Contact = ({ darkMode }) => {
  const [icebreaker, setIcebreaker] = useState("");
  const [isGeneratingIcebreaker, setIsGeneratingIcebreaker] = useState(false);

  const canned = [
    "Hi Sadiya — your MERN work looks impressive; curious if you're open to a short contract?",
    "Hello Sadiya, I loved your projects — would you consider a collaboration on a new web app?",
    "Hi Sadiya, your portfolio caught my eye; can we discuss a frontend role that fits your stack?",
    "Hey Sadiya — impressive MERN skills! Are you open to short-term freelance work?",
    "Hello Sadiya, enjoyed your recent project — interested in exploring a product opportunity together?"
  ];

  const handleIcebreaker = () => {
    setIsGeneratingIcebreaker(true);
    const pick = canned[Math.floor(Math.random() * canned.length)];
    setTimeout(() => {
      setIcebreaker(pick);
      setIsGeneratingIcebreaker(false);
    }, 350);
  };

  return (
    <section id="contact" className="py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <div className={`p-8 md:p-16 rounded-3xl relative overflow-hidden ${darkMode ? 'bg-slate-900 text-white shadow-2xl' : 'bg-white text-slate-900 shadow-md'}`}>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className={`text-4xl md:text-6xl font-black mb-6 leading-[0.95] ${darkMode ? 'text-white' : 'text-slate-900'}`}>LET'S BUILD <br />SOMETHING <br /><span className="text-indigo-600">EPIC.</span></h2>

              <div className={`mt-8 p-6 rounded-2xl ${darkMode ? 'bg-white/6 backdrop-blur-md border border-white/10' : 'bg-indigo-50 border border-indigo-100'}`}>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-black uppercase tracking-widest opacity-60 flex items-center gap-2"><Bot size={14} /> AI Icebreaker ✨</span>
                  <button onClick={handleIcebreaker} disabled={isGeneratingIcebreaker} className="text-[10px] font-black uppercase underline tracking-widest hover:text-indigo-300 transition-colors">{isGeneratingIcebreaker ? 'Generating...' : 'New Idea ✨'}</button>
                </div>
                <p className={`text-base md:text-lg font-bold leading-relaxed mb-4 ${darkMode ? 'text-indigo-100' : 'text-slate-800'}`}>{icebreaker || "Need a way to start the conversation? Click the button above! ✨"}</p>
                {icebreaker && (<button onClick={() => { const textarea = document.getElementById('message-area'); if (textarea) textarea.value = icebreaker; }} className={`px-4 py-2 rounded-lg text-xs font-black uppercase active:scale-95 transition-all ${darkMode ? 'bg-white text-slate-900' : 'bg-indigo-600 text-white'}`}>Use this message ✨</button>)}
              </div>

              <div className="space-y-6 mt-12">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${darkMode ? 'bg-white/8' : 'bg-indigo-50'}`}><Mail size={20} className={darkMode ? 'text-white' : 'text-indigo-600'} /></div>
                  <div><p className="text-xs font-black uppercase tracking-widest opacity-60">Email Me</p><p className="text-lg font-bold">sadiyaansari0003@gmail.com</p></div>
                </div>
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${darkMode ? 'bg-white/8' : 'bg-indigo-50'}`}><Phone size={20} className={darkMode ? 'text-white' : 'text-indigo-600'} /></div>
                  <div><p className="text-xs font-black uppercase tracking-widest opacity-60">Call Me</p><p className="text-lg font-bold">+91 9898463445</p></div>
                </div>
              </div>
            </div>

            <div className={`p-6 md:p-8 rounded-2xl ${darkMode ? 'bg-slate-800 text-white' : 'bg-white border border-slate-200 text-slate-900'} shadow-lg`}>
              <form className="space-y-4" onSubmit={e => e.preventDefault()}>
                <div className="space-y-1"><label className="text-xs font-black uppercase tracking-widest opacity-60">Your Name</label><input type="text" className={`w-full p-3 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-indigo-300 transition-all ${darkMode ? 'bg-slate-700 text-white' : 'bg-white text-slate-900'}`} /></div>
                <div className="space-y-1"><label className="text-xs font-black uppercase tracking-widest opacity-60">Email Address</label><input type="email" className={`w-full p-3 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-indigo-300 transition-all ${darkMode ? 'bg-slate-700 text-white' : 'bg-white text-slate-900'}`} /></div>
                <div className="space-y-1"><label className="text-xs font-black uppercase tracking-widest opacity-60">Message</label><textarea id="message-area" rows="4" className={`w-full p-3 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-indigo-300 transition-all ${darkMode ? 'bg-slate-700 text-white' : 'bg-white text-slate-900'}`}></textarea></div>
                <button className={`w-full py-3 md:py-4 rounded-xl font-black text-sm transition-all active:scale-95 flex items-center justify-center gap-2 ${darkMode ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-indigo-600 text-white hover:bg-indigo-700'}`}>Send Message <Send size={18} /></button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
